import Image from "next/image";
import Link from "next/link";
import {
  WireframeGroup,
  WireframeSection,
  type WireframeGroupProps,
} from "./_components/wireframe-section";
import {
  SiteNavigation,
  type NavigationItem,
} from "./_components/site-navigation";
import { PhotoGallery, type PhotoItem } from "./_components/photo-gallery";
import {
  ActivitiesSection,
  type Activity,
} from "./_components/activities-section";
import {
  HirobaIntroductionSection,
  type HirobaIntroductionProps,
} from "./_components/hiroba-introduction-section";
import {
  ScheduleCalendarSection,
  type MonthSchedule,
} from "./_components/schedule-calendar-section";
import {
  AnnouncementsSection,
  type Announcement,
} from "./_components/announcements-section";
import { FAQSection, type FAQ } from "./_components/faq-section";
import {
  ContactSection,
  type ContactMethod,
} from "./_components/contact-section";
import { CompanyInfoSection } from "./_components/company-info-section";
import {
  FacilityInfoSection,
  type FacilityInfoSectionProps,
} from "./_components/facility-info-section";

interface SectionContent {
  id: string;
  title: string;
  summary?: string;
  groups: WireframeGroupProps[];
}

const closureNotice = "【お知らせ】4月29日（月）は終日休館いたします。";
const heroTagline = "横浜市補助事業";

const photoGalleryPhotos: PhotoItem[] = [
  {
    src: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_1.jpg",
    alt: "ひろばの様子1",
  },
  {
    src: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_2.jpg",
    alt: "ひろばの様子2",
  },
  {
    src: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_5.jpg",
    alt: "ひろばの様子3",
  },
  {
    src: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_6.jpg",
    alt: "ひろばの様子4",
  },
  {
    src: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_9.jpg",
    alt: "ひろばの様子5",
  },
  {
    src: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_11.jpg",
    alt: "ひろばの様子6",
  },
  {
    src: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_14.jpg",
    alt: "ひろばの様子7",
  },
  {
    src: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_17.jpg",
    alt: "ひろばの様子8",
  },
  {
    src: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_19.jpg",
    alt: "ひろばの様子9",
  },
  {
    src: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_20.jpg",
    alt: "ひろばの様子10",
  },
];

const activities: Activity[] = [
  {
    date: "2025.03.15",
    title: "春のお花見会を開催しました",
    description:
      "近くの公園でお花見会を開催しました。親子でお弁当を食べながら、桜の下で楽しい時間を過ごしました。",
    image: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_3.jpg",
  },
  {
    date: "2025.03.10",
    title: "ベビーマッサージ講座",
    description:
      "助産師さんを講師にお迎えして、ベビーマッサージ講座を実施しました。赤ちゃんもママもリラックスした時間になりました。",
    image: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_4.jpg",
  },
  {
    date: "2025.03.05",
    title: "絵本の読み聞かせ会",
    description:
      "毎週定期開催の絵本読み聞かせ会。今回は春をテーマにした絵本を楽しみました。",
    image: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_7.jpg",
  },
  {
    date: "2025.02.28",
    title: "ひなまつりイベント",
    description:
      "ひな人形の飾り付けをみんなで楽しみました。手作りのひな飾りを制作して記念撮影も行いました。",
    image: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_8.jpg",
  },
  {
    date: "2025.02.20",
    title: "親子ヨガ教室",
    description:
      "インストラクターをお招きして、親子で参加できるヨガ教室を開催しました。",
    image: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_10.jpg",
  },
  {
    date: "2025.02.15",
    title: "節分の豆まきイベント",
    description:
      "節分に合わせて豆まきイベントを実施。鬼のお面を作って、みんなで豆まきを楽しみました。",
    image: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_12.jpg",
  },
];

const monthlySchedules: MonthSchedule[] = [
  {
    year: 2025,
    month: 9,
    imageUrl: "/images/schedule/example.png",
    imageAlt: "2025年9月のスケジュール表",
  },
  {
    year: 2025,
    month: 10,
    imageUrl: "/images/schedule/example.png",
    imageAlt: "2025年10月のスケジュール表",
  },
  {
    year: 2025,
    month: 11,
    imageUrl: "/images/schedule/example.png",
    imageAlt: "2025年11月のスケジュール表",
  },
];

const announcements: Announcement[] = [
  {
    date: "2025.10.20",
    title: "11月3日（月）文化の日は特別開館いたします",
    description:
      "祝日ですが特別に開館いたします。通常通り10:00〜15:00の営業となります。多くの方のご来館をお待ちしております。",
    category: "notice",
  },
  {
    date: "2025.10.18",
    title: "ハロウィンイベント開催のお知らせ",
    description:
      "10月31日にハロウィンイベントを開催します。仮装してのご参加も大歓迎です。お菓子プレゼントもあります！",
    category: "event",
  },
  {
    date: "2025.10.15",
    title: "10月29日（火）は臨時休館いたします",
    description:
      "施設メンテナンスのため、10月29日は終日休館させていただきます。ご不便をおかけしますが、ご了承ください。",
    category: "closure",
  },
  {
    date: "2025.10.10",
    title: "新しい絵本が入荷しました",
    description:
      "季節の絵本やベストセラーなど、新刊絵本20冊が入荷しました。ぜひ手に取ってご覧ください。",
    category: "notice",
  },
  {
    date: "2025.10.05",
    title: "ベビーマッサージ講座 参加者募集中",
    description:
      "11月15日開催のベビーマッサージ講座の参加者を募集しています。定員10組、先着順となります。",
    category: "event",
  },
  {
    date: "2025.10.01",
    title: "秋の読み聞かせ会スタート",
    description:
      "10月より秋をテーマにした絵本の読み聞かせ会をスタートします。毎週金曜日11時から開催予定です。",
    category: "event",
  },
];

// FAQデータ（将来的にmicroCMSから取得）
const faqs: FAQ[] = [
  {
    id: "faq-001",
    question: "初めて利用する場合、事前に予約は必要ですか？",
    answer:
      "初回のご利用時は登録が必要ですが、予約は不要です。開館時間内にお気軽にお越しください。受付で簡単な登録用紙にご記入いただきます。",
    category: "usage",
    order: 1,
  },
  {
    id: "faq-002",
    question: "利用料金はかかりますか？",
    answer:
      "ひろばの自由利用は基本無料です。ただし、特別なイベントやワークショップにつきましては、材料費として実費をいただく場合がございます。",
    category: "usage",
    order: 2,
  },
  {
    id: "faq-003",
    question: "何歳から利用できますか？",
    answer:
      "0歳から3歳の未就園児のお子さまと保護者の方がご利用いただけます。また、妊娠中の方もご利用いただけます。",
    category: "usage",
    order: 3,
  },
  {
    id: "faq-004",
    question: "授乳室やおむつ替えスペースはありますか？",
    answer:
      "はい、授乳室とおむつ替えスペースを完備しております。授乳室はカーテンで仕切られたプライベート空間となっており、安心してご利用いただけます。",
    category: "facility",
    order: 4,
  },
  {
    id: "faq-005",
    question: "駐車場はありますか？",
    answer:
      "施設専用の駐車場はございませんが、近隣にコインパーキングがございます。お車でお越しの際はそちらをご利用ください。",
    category: "facility",
    order: 5,
  },
  {
    id: "faq-006",
    question: "飲食物の持ち込みはできますか？",
    answer:
      "お子さまの飲み物や軽食の持ち込みは可能です。ただし、においの強いものはご遠慮ください。ゴミは各自お持ち帰りいただきますようお願いいたします。",
    category: "facility",
    order: 6,
  },
  {
    id: "faq-007",
    question: "イベントの申し込み方法を教えてください。",
    answer:
      "イベントのお申し込みは、公式LINEまたはお電話にて受け付けております。定員のあるイベントは先着順となりますので、お早めにお申し込みください。",
    category: "event",
    order: 7,
  },
  {
    id: "faq-008",
    question: "イベントをキャンセルしたい場合はどうすればいいですか？",
    answer:
      "キャンセルの場合は、できるだけ早めにお電話またはLINEにてご連絡ください。無断キャンセルが続くと、次回以降のお申し込みをお断りさせていただく場合がございます。",
    category: "event",
    order: 8,
  },
  {
    id: "faq-009",
    question: "一時預かりサービスはありますか？",
    answer:
      "現在、一時預かりサービスは実施しておりません。保護者の方と一緒にご利用いただく施設となっております。",
    category: "reservation",
    order: 9,
  },
  {
    id: "faq-010",
    question: "雨の日でも利用できますか？",
    answer:
      "はい、天候に関わらず開館しております。雨の日は特に混雑することがありますので、お時間に余裕を持ってお越しください。",
    category: "other",
    order: 10,
  },
];

const contactMethods: ContactMethod[] = [
  {
    type: "phone",
    title: "お電話でのお問い合わせ",
    description: "お気軽にお電話ください。スタッフが丁寧に対応いたします。",
    link: "tel:09065103126",
    linkText: "090-6510-3126",
    hours: "受付時間：平日 10:00〜16:00、土曜 10:00〜15:00",
  },
  {
    type: "line",
    title: "公式LINEでのお問い合わせ",
    description:
      "LINEで友だち追加していただくと、イベント情報やお知らせが届きます。お問い合わせもLINEから受け付けています。",
    link: "https://line.me/R/ti/p/@puanaroom",
    linkText: "友だち追加",
    icon: "/images/LINE_Brand_icon.png",
  },
];

const companyInfo = {
  title: "運営会社",
  subtitle: "おやこの広場 はないろの運営会社についてご紹介します",
  companyName: "株式会社Puana",
  description:
    "私たちは、地域の子育て支援を通じて、誰もが安心して子育てできる社会づくりを目指しています。おやこの広場 はないろは、地域に根ざした温かい交流の場として、スタッフ一同心を込めて運営しております。",
  postalCode: "〒227-0033",
  address: "横浜市青葉区市ヶ尾町436-1エスポアール市ヶ尾103",
  establishedYear: "2018年4月",
  phoneNumber: "09065103126",
  phoneNumberDisplay: "090-6510-3126",
  businessHours: "平日 月〜金 9:30〜16:00",
  accessInfo: [
    { station: "市ヶ尾駅", walkingTime: "徒歩17分" },
    { station: "市営【下根】バス停", walkingTime: "徒歩3分" },
    { station: "東急【東市が尾小学校前】バス停", walkingTime: "徒歩6分" },
  ],
};

const hirobaIntroduction: HirobaIntroductionProps = {
  concept: {
    title: "ひろば紹介",
    description:
      "おやこの広場 はないろは、0歳から3歳の未就園児のお子さまと保護者の方が気軽に集い、交流やイベントを行う常設型の広場です。子育て情報を入手したり、子育て相談ができる場所として、スタッフ一同心を込めて運営しています。",
  },
  staff: [
    {
      name: "田中 花子",
      role: "保育士・施設長",
      image: "/images/staffs/スクリーンショット 2025-10-15 0.54.07.png",
      description: "10年以上の保育経験を持ち、子育て支援に情熱を注いでいます。",
    },
    {
      name: "佐藤 美咲",
      role: "助産師",
      image: "/images/staffs/スクリーンショット 2025-10-15 0.54.07.png",
      description: "産前産後のケアや育児相談に対応しています。",
    },
    {
      name: "鈴木 太郎",
      role: "子育て支援員",
      image: "/images/staffs/スクリーンショット 2025-10-15 0.54.07.png",
      description: "イベント企画や日々の運営をサポートしています。",
    },
  ],
  facilityPhotos: [
    {
      src: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_13.jpg",
      alt: "おもちゃ",
      label: "おもちゃ",
    },
    {
      src: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_15.jpg",
      alt: "絵本コーナー",
      label: "絵本コーナー",
    },
    {
      src: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_16.jpg",
      alt: "プレイスペース",
      label: "遊び場",
    },
    {
      src: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_18.jpg",
      alt: "授乳室",
      label: "授乳室",
    },
    {
      src: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_21.jpg",
      alt: "休憩エリア",
      label: "休憩エリア",
    },
    {
      src: "/images/gallery/LINE_ALBUM_ホームページ用写真_251015_22.jpg",
      alt: "キッチン",
      label: "キッチン",
    },
  ],
  mapImage: "/images/S__23543813.jpg",
};

const facilityInfo: FacilityInfoSectionProps = {
  title: "ご利用案内",
  subtitle: "ご利用方法や料金についてご案内します",
  targetUsers: ["0歳から3歳の未就園児のお子さまと保護者の方", "妊娠中の方"],
  businessHours: {
    weekdays: "10:00〜16:00",
    weekends: "10:00〜15:00",
    holidays: "日曜日・祝日・年末年始",
  },
  access: {
    address: "横浜市青葉区市ヶ尾町436-1エスポアール市ヶ尾103",
    nearestStations: [
      { name: "市ヶ尾駅", walkingTime: "徒歩17分" },
      { name: "市営【下根】バス停", walkingTime: "徒歩3分" },
      { name: "東急【東市が尾小学校前】バス停", walkingTime: "徒歩6分" },
    ],
    parking: {
      onsite: false,
      nearby: false,
    },
    bicycleParking: true,
    strollerParking: true,
    googleMapUrl:
      "https://maps.google.com/maps?q=35.5619458,139.5448289&hl=ja&z=16&output=embed",
    googleMapsAppUrl:
      "https://www.google.com/maps/search/?api=1&query=35.5619458,139.5448289",
  },
  openingHours: {
    weekdays: "月〜金 9:30〜16:00",
    holidays: "土曜日・日曜日・祝日・年末年始",
  },
  pricing: {
    membershipFee: {
      price: "1,000円",
      note: "一家族初回のみ。永久会員",
    },
    usageFee: {
      member: "100円／1回",
      nonMember: "300円／1回",
    },
    freePass: {
      price: "1,000円／1ヶ月",
      note: "会員のみ",
    },
    ticketBook: {
      price: "1,000円／11回",
      note: "無期限・会員のみ",
    },
  },
  noReservationText: "予約不要",
  welcomeText: "ご自由にお越しください",
  notes: [
    "体調不良のお子さまはご利用をお控えください",
    "飲食物の持ち込みは可能ですが、においの強いものはご遠慮ください",
    "ゴミは各自お持ち帰りください",
  ],
};

const sections: SectionContent[] = [
  {
    id: "guide",
    title: "ご利用案内",
    summary:
      "初めて利用する方が安心できるように、利用方法や料金、注意事項をまとめる実務的な内容です。",
    groups: [
      {
        title: "押さえておきたいポイント",
        items: [
          {
            label: "利用方法（登録制／自由利用）",
            description:
              "初回来館時の登録手順と、予約が不要な自由利用枠の案内を分かりやすく記載します。",
          },
          {
            label: "開館日時・利用時間",
            description:
              "平日・土曜の開館時間、休館日、混雑しやすい時間帯などをタイムテーブル形式で掲載予定です。",
          },
          {
            label: "利用料金",
            description:
              "ひろば利用料、イベント参加費、親子セット料金などの目安を表にまとめます。",
            note: "料金改定の可能性があるため、最新情報更新日も併記します。",
          },
          {
            label: "一時預かり／予約制サービス",
            description:
              "一時預かりの利用枠や予約フォームへの導線。キャンセルポリシーもここで案内します。",
          },
          {
            label: "注意事項（持ち物・安全面）",
            description:
              "必要な持ち物、アレルギー対応、体調不良時のお願いなど安全面のガイドラインを箇条書きで掲載します。",
          },
          {
            label: "LINE／電話での予約案内",
            description:
              "公式LINEの友だち追加QRコードや、予約専用電話番号の受付時間を記載する予定です。",
          },
        ],
      },
    ],
  },
  {
    id: "news",
    title: "最新情報・お知らせ",
    summary:
      "イベントや休館情報など、最新のトピックスを更新するニュースエリアです。",
    groups: [
      {
        title: "更新予定のトピック",
        items: [
          {
            label: "新着イベント",
            description:
              "申し込み受付中のイベントをカード形式で3件ほど表示し、詳細ページへ誘導予定です。",
          },
          {
            label: "休館日・特別開館日",
            description:
              "祝日やメンテナンスによる休館情報、講座前後の特別開館時間をカレンダーと連動させます。",
          },
          {
            label: "お知らせ一覧",
            description:
              "ブログ形式の記事一覧を作成し、カテゴリーやタグで絞り込みできる仕様を想定しています。",
          },
        ],
      },
    ],
  },
];

const navigationItems: NavigationItem[] = [
  { id: "about", title: "ひろば紹介" },
  { id: "guide", title: "ご利用案内" },
  { id: "news", title: "月間スケジュール" },
  { id: "announcements", title: "お知らせ" },
  { id: "faq", title: "よくあるご質問" },
  { id: "contact", title: "お問い合わせ" },
  { id: "company", title: "運営会社" },
];

const footerLinks = [
  "個人情報保護方針（準備中）",
  "サイトマップ（構成案）",
  "著作権表示 © Puanaroom",
  "関連リンク：地域子育て支援センター一覧",
];

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <div className="site-header__bar">
          <div className="site-header__brand">
            <Image
              className="site-header__logo"
              src="/images/Puana-Logo.jpg"
              alt="Puanaroom ロゴ"
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
          <SiteNavigation items={navigationItems} notice={closureNotice} />
        </div>
        <div className="site-header__notice">{closureNotice}</div>
      </header>

      <main>
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
            <span className="wireframe-hero__tag">{heroTagline}</span>
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
          <PhotoGallery photos={photoGalleryPhotos} />
        </div>

        <ActivitiesSection
          title="活動紹介"
          subtitle="ひろばで開催したイベントや日常の様子をご紹介します"
          activities={activities}
          itemsPerPage={3}
        />

        <HirobaIntroductionSection {...hirobaIntroduction} />

        <FacilityInfoSection id="guide" {...facilityInfo} />

        {sections
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
          schedules={monthlySchedules}
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
          methods={contactMethods}
        />

        <CompanyInfoSection id="company" {...companyInfo} />
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="site-footer__brand">
            <Image
              src="/images/Puana-Logo.jpg"
              alt="Puanaroom ロゴ"
              width={60}
              height={60}
            />
            <div>
              <div className="site-footer__brand-name">
                おやこの広場　はないろ
              </div>
              <p className="site-footer__brand-description">
                地域の親子が集う温かい交流スペース
              </p>
            </div>
          </div>

          <nav className="site-footer__nav">
            <div className="site-footer__nav-column">
              <h3 className="site-footer__nav-title">施設情報</h3>
              <ul className="site-footer__nav-list">
                <li>
                  <Link href="#about">ひろば紹介</Link>
                </li>
                <li>
                  <Link href="#guide">ご利用案内</Link>
                </li>
                <li>
                  <Link href="#news">月間スケジュール</Link>
                </li>
              </ul>
            </div>
            <div className="site-footer__nav-column">
              <h3 className="site-footer__nav-title">お問い合わせ</h3>
              <ul className="site-footer__nav-list">
                <li>
                  <Link href="#announcements">お知らせ</Link>
                </li>
                <li>
                  <Link href="#faq">よくあるご質問</Link>
                </li>
                <li>
                  <Link href="#contact">お問い合わせ</Link>
                </li>
              </ul>
            </div>
            <div className="site-footer__nav-column">
              <h3 className="site-footer__nav-title">運営情報</h3>
              <ul className="site-footer__nav-list">
                <li>
                  <Link href="#company">運営会社</Link>
                </li>
                <li>個人情報保護方針</li>
              </ul>
            </div>
          </nav>

          <div className="site-footer__info">
            <div className="site-footer__info-item">
              <div className="site-footer__info-label">住所</div>
              <div>横浜市青葉区市ヶ尾町436-1エスポアール市ヶ尾103</div>
            </div>
            <div className="site-footer__info-item">
              <div className="site-footer__info-label">電話</div>
              <div>
                <a href="tel:09065103126">090-6510-3126</a>
              </div>
            </div>
            <div className="site-footer__info-item">
              <div className="site-footer__info-label">営業時間</div>
              <div>平日 月〜金 9:30〜16:00</div>
            </div>
          </div>

          <div className="site-footer__bottom">
            <p className="site-footer__copyright">
              © 2024 おやこの広場　はないろ All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Instagram固定リンク */}
      <a
        href="https://www.instagram.com/hanairo_aoba?igsh=MTJncnh4enFsd2VyZA=="
        target="_blank"
        rel="noopener noreferrer"
        className="instagram-fixed-link"
        aria-label="Instagramで見る"
      >
        <Image
          src="/images/Instagram_Glyph_Gradient.png"
          alt="Instagram"
          width={56}
          height={56}
          priority
        />
      </a>
    </>
  );
}
