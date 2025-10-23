import Image from "next/image";

export interface ContactMethod {
  type: "phone" | "line";
  title: string;
  description: string;
  link: string;
  linkText: string;
  hours?: string;
  icon?: string;
}

export interface ContactSectionProps {
  id?: string;
  title: string;
  subtitle: string;
  methods: ContactMethod[];
}

export function ContactSection({
  id,
  title,
  subtitle,
  methods,
}: ContactSectionProps) {
  return (
    <section id={id} className="common-section contact-section">
      <div className="common-section__inner">
        <header className="section-header">
          <h2 className="section-header__title">{title}</h2>
          <p className="section-header__subtitle">{subtitle}</p>
        </header>

        <div className="contact-methods">
          {methods.map((method, index) => (
            <div key={index} className="contact-card">
              {method.icon && (
                <div className="contact-card__icon">
                  <Image
                    src={method.icon}
                    alt={`${method.title}アイコン`}
                    width={60}
                    height={60}
                  />
                </div>
              )}
              <div className="contact-card__content">
                <h3 className="contact-card__title">{method.title}</h3>
                <p className="contact-card__description">{method.description}</p>
                {method.hours && (
                  <p className="contact-card__hours">{method.hours}</p>
                )}
                <a
                  href={method.link}
                  className={`contact-card__button contact-card__button--${method.type}`}
                  target={method.type === "line" ? "_blank" : undefined}
                  rel={method.type === "line" ? "noopener noreferrer" : undefined}
                >
                  {method.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
