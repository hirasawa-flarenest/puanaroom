/**
 * 共通型定義
 */

// microCMS型定義をエクスポート
export * from "./microcms";

// ナビゲーション関連
export interface NavigationItem {
  id: string;
  title: string;
}

// フォトギャラリー関連
export interface PhotoItem {
  src: string;
  alt: string;
}

// 活動紹介関連
export interface Activity {
  date: string;
  title: string;
  description: string;
  content?: string; // リッチテキスト本文（HTML）- microCMS用
  image: string;
}

// お知らせ関連
export type AnnouncementCategory = "notice" | "event" | "closure" | "other";

export interface Announcement {
  date: string;
  title: string;
  content: string; // リッチテキスト本文（HTML）- microCMS用
  category: AnnouncementCategory;
  image?: string;
}

// FAQ関連
export type FAQCategory =
  | "usage"       // 利用について
  | "facility"    // 施設について
  | "event"       // イベントについて
  | "reservation" // 予約について
  | "other";      // その他

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: FAQCategory;
  order?: number;
  publishedAt?: string;
  revisedAt?: string;
}

// スケジュール関連
export interface MonthSchedule {
  year: number;
  month: number;
  imageUrl: string;
  imageAlt: string;
}

// お問い合わせ関連
export type ContactMethodType = "phone" | "line" | "email";

export interface ContactMethod {
  type: ContactMethodType;
  title: string;
  description: string;
  link: string;
  linkText: string;
  hours?: string;
  icon?: string;
}

// アクセス情報関連
export interface AccessStation {
  name?: string;
  station?: string;
  walkingTime: string;
}

// ひろば紹介関連
export interface StaffMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

export interface FacilityPhoto {
  src: string;
  alt: string;
  label: string;
}

export interface HirobaIntroductionProps {
  concept: {
    title: string;
    description: string;
  };
  staff: StaffMember[];
  facilityPhotos: FacilityPhoto[];
  mapImage: string;
}

// 施設情報関連
export interface BusinessHours {
  weekdays: string;
  weekends: string;
  holidays: string;
}

export interface ParkingInfo {
  onsite: boolean;
  nearby: boolean;
}

export interface AccessInfo {
  address: string;
  nearestStations: AccessStation[];
  parking: ParkingInfo;
  bicycleParking: boolean;
  strollerParking: boolean;
  googleMapUrl: string;
  googleMapsAppUrl: string;
}

export interface OpeningHours {
  weekdays?: string;
  saturday?: string;
  holidays?: string;
}

export interface MembershipFee {
  price: string;
  note: string;
}

export interface UsageFee {
  member: string;
  nonMember: string;
}

export interface FreePass {
  price: string;
  note: string;
}

export interface TicketBook {
  price: string;
  note: string;
}

export interface Pricing {
  membershipFee: MembershipFee;
  usageFee: UsageFee;
  freePass: FreePass;
  ticketBook: TicketBook;
}

export interface FacilityInfoSectionProps {
  id?: string;
  title: string;
  subtitle: string;
  targetUsers?: string[];
  businessHours?: BusinessHours;
  access?: AccessInfo;
  openingHours?: OpeningHours;
  pricing?: Pricing;
  noReservationText?: string;
  welcomeText?: string;
  location?: {
    lat: number;
    lng: number;
  };
  phoneNumber?: string;
  phoneNumberDisplay?: string;
  instagramUrl?: string;
  instagramHandle?: string;
  notes?: string[];
}

// 会社情報関連
export interface CompanyInfo {
  title: string;
  subtitle: string;
  companyName: string;
  description: string;
  postalCode: string;
  address: string;
  establishedYear: string;
  phoneNumber: string;
  phoneNumberDisplay: string;
  businessHours: string;
  accessInfo: AccessStation[];
}

// ワイヤーフレーム関連
export interface WireframeItem {
  label: string;
  description: string;
  note?: string;
}

export interface WireframeGroupProps {
  title?: string;
  description?: string;
  items: WireframeItem[];
}

export interface SectionContent {
  id: string;
  title: string;
  summary?: string;
  groups: WireframeGroupProps[];
}
