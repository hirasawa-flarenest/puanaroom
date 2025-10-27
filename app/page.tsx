import Image from "next/image";
import Link from "next/link";
import {
  WireframeGroup,
  WireframeSection,
} from "./_components/wireframe-section";
import { SiteNavigation } from "./_components/site-navigation";
import { PhotoGallery } from "./_components/photo-gallery";
import { ActivitiesSection } from "./_components/activities-section";
import { HirobaIntroductionSection } from "./_components/hiroba-introduction-section";
import { ScheduleCalendarSection } from "./_components/schedule-calendar-section";
import { AnnouncementsSection } from "./_components/announcements-section";
import { FAQSection } from "./_components/faq-section";
import { ContactSection } from "./_components/contact-section";
import { CompanyInfoSection } from "./_components/company-info-section";
import { FacilityInfoSection } from "./_components/facility-info-section";
import { SiteFooter } from "./_components/site-footer";
import {
  HERO_TAGLINE,
  INSTAGRAM_URL,
  NAVIGATION_ITEMS,
  PHOTO_GALLERY_PHOTOS,
  SECTIONS,
  CONTACT_METHODS,
  COMPANY_INFO,
  HIROBA_INTRODUCTION,
  FACILITY_INFO,
} from "@/lib/constants";
import { getAnnouncements, getActivities, getClosureNotice, getFAQs, getMonthSchedules } from "@/lib/api/microcms";
import { mapMicroCMSAnnouncements } from "@/lib/mappers/announcement";
import { mapMicroCMSActivities } from "@/lib/mappers/activity";
import { mapMicroCMSFAQs } from "@/lib/mappers/faq";
import { mapMicroCMSMonthSchedules } from "@/lib/mappers/schedule";

export default async function HomePage() {
  // microCMSからお知らせデータを取得
  const announcementsData = await getAnnouncements({ limit: 10 });
  const announcements = mapMicroCMSAnnouncements(announcementsData.contents);

  // microCMSから活動紹介データを取得
  const activitiesData = await getActivities({ limit: 10 });
  const activities = mapMicroCMSActivities(activitiesData.contents);

  // microCMSからヘッダーお知らせバナーを取得（公開されている場合のみ表示）
  let closureNotice = "";
  try {
    const closureNoticeData = await getClosureNotice();
    // publishedAtが存在する場合のみメッセージを表示
    if (closureNoticeData.publishedAt) {
      closureNotice = closureNoticeData.message;
    }
  } catch (error) {
    // エラー時は空文字列（バナー非表示）
    // 開発環境でのみエラー表示
    if (process.env.NODE_ENV === "development") {
      console.error("Failed to fetch closure notice:", error);
    }
  }

  // microCMSからよくあるご質問を取得
  const faqsData = await getFAQs({ limit: 100 });
  const faqs = mapMicroCMSFAQs(faqsData.contents);

  // microCMSから月間スケジュールを取得
  const schedulesData = await getMonthSchedules({ limit: 12 });
  const schedules = mapMicroCMSMonthSchedules(schedulesData.contents);

  // 初期表示月を決定：当月 > 未来月で最も近い月 > 最初のスケジュール
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;

  let initialSchedule = schedules.find(
    (s) => s.year === currentYear && s.month === currentMonth
  );

  if (!initialSchedule && schedules.length > 0) {
    // 未来月のスケジュールを取得して日付順にソート
    const futureSchedules = schedules
      .filter((s) => {
        const scheduleDate = new Date(s.year, s.month - 1, 1);
        const todayDate = new Date(currentYear, currentMonth - 1, 1);
        return scheduleDate > todayDate;
      })
      .sort((a, b) => {
        const dateA = new Date(a.year, a.month - 1, 1);
        const dateB = new Date(b.year, b.month - 1, 1);
        return dateA.getTime() - dateB.getTime();
      });

    initialSchedule = futureSchedules[0] || schedules[0];
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://puanaroom.com/#localbusiness",
        "name": "おやこの広場 はないろ",
        "alternateName": "Hanairo Oyako no Hiroba",
        "description": "0歳から3歳の未就園児のお子さまと保護者の方が気軽に集い、交流やイベントを行う常設型の広場です。子育て情報を入手したり、子育て相談ができる場所です。",
        "url": "https://puanaroom.com",
        "telephone": "+81-90-6510-3126",
        "priceRange": "¥100-¥1000",
        "image": "https://puanaroom.com/images/アイキャッチ_puanaroom.jpg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "市ヶ尾町436-1 エスポアール市ヶ尾103",
          "addressLocality": "青葉区",
          "addressRegion": "神奈川県",
          "postalCode": "227-0033",
          "addressCountry": "JP",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 35.5619458,
          "longitude": 139.5448289,
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:30",
            "closes": "16:00",
          },
        ],
        "sameAs": [INSTAGRAM_URL],
      },
      {
        "@type": "Organization",
        "@id": "https://puanaroom.com/#organization",
        "name": "株式会社Puana",
        "url": "https://puanaroom.com",
        "logo": "https://puanaroom.com/images/Puana-Logo.jpg",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+81-90-6510-3126",
          "contactType": "customer service",
          "areaServed": "JP",
          "availableLanguage": "Japanese",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://puanaroom.com/#website",
        "url": "https://puanaroom.com",
        "name": "おやこの広場 はないろ",
        "description": "横浜市青葉区市ヶ尾にある0歳から3歳の未就園児と保護者が集う子育てひろば",
        "publisher": {
          "@id": "https://puanaroom.com/#organization",
        },
        "inLanguage": "ja",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="site-header" role="banner">
        <div className="site-header__bar">
          <div className="site-header__brand">
            <Image
              className="site-header__logo"
              src="/images/Puana-Logo.jpg"
              alt="おやこの広場 はないろ ロゴ"
              width={44}
              height={44}
              priority
            />
            <div className="site-header__brand-text">
              <span className="site-header__brand-title">
                おやこの広場　はないろ
              </span>
              <span className="site-header__brand-sub">
                地域の親子が集う交流スペース
              </span>
            </div>
          </div>
          <SiteNavigation items={NAVIGATION_ITEMS} notice={closureNotice} />
        </div>
        {closureNotice && (
          <div className="site-header__notice" role="alert">
            {closureNotice}
          </div>
        )}
      </header>

      <main role="main">
        <section className="wireframe-hero" aria-labelledby="hero-title">
          <div className="wireframe-hero__media">
            <Image
              className="wireframe-hero__image"
              src="/images/アイキャッチ_puanaroom.jpg"
              alt="子育てひろば はないろの様子"
              width={1920}
              height={1080}
              sizes="100vw"
              priority
            />
          </div>
          <div className="wireframe-hero__content">
            <span className="wireframe-hero__tag">{HERO_TAGLINE}</span>
            <h1 id="hero-title" className="wireframe-hero__title">
              おやこの広場　はないろ
            </h1>
            <p className="wireframe-hero__lead">
              0歳から3歳の未就園児のお子さまと保護者の方が気軽に集い、交流やイベントを行う常設型の広場です。
              子育て情報を入手したり、子育て相談ができる場所です。
            </p>
            <div className="wireframe-actions" aria-label="主な導線">
              <Link className="wireframe-actions__item" href="#guide">
                ご利用案内
              </Link>
              <Link className="wireframe-actions__item" href="#news">
                月間予定
              </Link>
              <Link className="wireframe-actions__item" href="#announcements">
                お知らせ
              </Link>
              <Link className="wireframe-actions__item" href="#faq">
                よくあるご質問
              </Link>
            </div>
          </div>
        </section>

        <div className="wireframe-shell">
          <PhotoGallery photos={PHOTO_GALLERY_PHOTOS} />
        </div>

        <ActivitiesSection
          title="活動紹介"
          subtitle="ひろばで開催したイベントや日常の様子をご紹介します"
          activities={activities}
          itemsPerPage={3}
          instagramUrl={INSTAGRAM_URL}
        />

        <HirobaIntroductionSection {...HIROBA_INTRODUCTION} />

        <FacilityInfoSection id="guide" {...FACILITY_INFO} />

        {SECTIONS
          .filter((section) => section.id !== "news" && section.id !== "guide")
          .map((section) => (
            <WireframeSection
              key={section.id}
              id={section.id}
              title={section.title}
              summary={section.summary}
            >
              {section.groups.map((group, index) => (
                <WireframeGroup
                  key={`${section.id}-group-${group.title ?? index}`}
                  {...group}
                />
              ))}
            </WireframeSection>
          ))}

        <ScheduleCalendarSection
          id="news"
          title="月間スケジュール"
          subtitle="毎月のイベントや開館日をご確認いただけます"
          schedules={schedules}
          currentYear={initialSchedule?.year}
          currentMonth={initialSchedule?.month}
        />

        <AnnouncementsSection
          id="announcements"
          title="お知らせ"
          subtitle="休館日情報や新着イベントなど、最新のお知らせをお届けします"
          announcements={announcements}
          itemsPerPage={3}
        />

        <FAQSection
          id="faq"
          title="よくあるご質問"
          subtitle="ご利用に関してよくいただくご質問をまとめました"
          faqs={faqs}
          showCategories={true}
        />

        <ContactSection
          id="contact"
          title="お問い合わせ"
          subtitle="ご不明な点やご相談がございましたら、お気軽にお問い合わせください"
          methods={CONTACT_METHODS}
        />

        <CompanyInfoSection id="company" {...COMPANY_INFO} />
      </main>

      <SiteFooter />

      {/* Instagram固定リンク */}
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="instagram-fixed-link"
        aria-label="Instagramで見る"
      >
        <Image
          src="/images/Instagram_Glyph_Gradient.png"
          alt="Instagram"
          width={56}
          height={64}
          priority
        />
      </a>
    </>
  );
}
