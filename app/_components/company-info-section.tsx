export interface AccessInfo {
  station: string;
  walkingTime: string;
}

export interface CompanyInfoSectionProps {
  id?: string;
  title: string;
  subtitle: string;
  companyName: string;
  description: string;
  postalCode: string;
  address: string;
  establishedYear: string;
  phoneNumber?: string;
  phoneNumberDisplay?: string;
  businessHours?: string;
  accessInfo?: AccessInfo[];
}

export function CompanyInfoSection({
  id,
  title,
  subtitle,
  companyName,
  description,
  postalCode,
  address,
  establishedYear,
  phoneNumber,
  phoneNumberDisplay,
  businessHours,
  accessInfo,
}: CompanyInfoSectionProps) {
  return (
    <section id={id} className="common-section company-info-section">
      <div className="common-section__inner">
        <header className="section-header">
          <h2 className="section-header__title">{title}</h2>
          <p className="section-header__subtitle">{subtitle}</p>
        </header>

        <div className="company-info-grid">
          <div className="company-info-block">
            <h3 className="company-info-block__title">会社概要</h3>
            <div className="company-info-table">
              <div className="company-info-row">
                <dt className="company-info-label">名称</dt>
                <dd className="company-info-value">{companyName}</dd>
              </div>
              <div className="company-info-row">
                <dt className="company-info-label">設立</dt>
                <dd className="company-info-value">{establishedYear}</dd>
              </div>
              <div className="company-info-row">
                <dt className="company-info-label">所在地</dt>
                <dd className="company-info-value">
                  <div>{postalCode}</div>
                  <div>{address}</div>
                </dd>
              </div>
              {accessInfo && accessInfo.length > 0 && (
                <div className="company-info-row">
                  <dt className="company-info-label">アクセス</dt>
                  <dd className="company-info-value">
                    <div className="company-info-access-inline">
                      {accessInfo.map((info, index) => (
                        <div key={index} className="company-info-access-inline-item">
                          {info.station} {info.walkingTime}
                        </div>
                      ))}
                    </div>
                  </dd>
                </div>
              )}
              {phoneNumber && (
                <div className="company-info-row">
                  <dt className="company-info-label">電話番号</dt>
                  <dd className="company-info-value">
                    <a href={`tel:${phoneNumber}`} className="company-info-link">
                      {phoneNumberDisplay || phoneNumber}
                    </a>
                  </dd>
                </div>
              )}
              {businessHours && (
                <div className="company-info-row">
                  <dt className="company-info-label">営業時間</dt>
                  <dd className="company-info-value">{businessHours}</dd>
                </div>
              )}
            </div>
          </div>

          <div className="company-info-block">
            <h3 className="company-info-block__title">施設について</h3>
            <p className="company-info-description">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
