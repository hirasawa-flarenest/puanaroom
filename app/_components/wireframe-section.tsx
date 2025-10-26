import type { ReactNode } from "react";
import type { WireframeGroupProps } from "@/lib/types";

export interface WireframeSectionProps {
  id: string;
  title: string;
  summary?: string;
  children: ReactNode;
}

export function WireframeSection({
  id,
  title,
  summary,
  children,
}: WireframeSectionProps) {
  return (
    <section id={id} className="common-section wireframe-section">
      <div className="common-section__inner">
        <header className="section-header">
          <h2 className="section-header__title">{title}</h2>
          {summary ? (
            <p className="section-header__subtitle">{summary}</p>
          ) : null}
        </header>
        <div className="wireframe-section__body">{children}</div>
      </div>
    </section>
  );
}

export type { WireframeGroupProps };

export function WireframeGroup({
  title,
  description,
  items,
}: WireframeGroupProps) {
  return (
    <div className="wireframe-group">
      {title ? <h3>{title}</h3> : null}
      {description ? (
        <p className="wireframe-group__description">{description}</p>
      ) : null}
      <ul className="wireframe-list">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="wireframe-list__item">
            <span className="wireframe-list__label">{item.label}</span>
            {item.description ? (
              <p className="wireframe-list__description">{item.description}</p>
            ) : null}
            {item.note ? (
              <p className="wireframe-list__note">{item.note}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
