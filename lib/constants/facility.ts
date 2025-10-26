import type {
  ContactMethod,
  CompanyInfo,
  HirobaIntroductionProps,
  FacilityInfoSectionProps,
} from "../types";

/**
 * 施設情報データ定数
 */

export const CONTACT_METHODS: ContactMethod[] = [
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

export const COMPANY_INFO: CompanyInfo = {
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

export const HIROBA_INTRODUCTION: HirobaIntroductionProps = {
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

export const FACILITY_INFO: FacilityInfoSectionProps = {
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
