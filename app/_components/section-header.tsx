interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

/**
 * セクションヘッダーコンポーネント
 * 各セクションで共通して使用されるタイトルとサブタイトルを表示
 */
export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <header className="section-header">
      <h2 className="section-header__title">{title}</h2>
      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
    </header>
  );
}
