export interface FacilityInfoSectionProps {
  id?: string;
  title: string;
  subtitle: string;
  targetUsers?: string[];
  businessHours?: {
    weekdays: string;
    weekends?: string;
    holidays: string;
  };
  access?: {
    address: string;
    nearestStations?: Array<{
      name: string;
      walkingTime: string;
    }>;
    parking?: {
      onsite: boolean;
      nearby: boolean;
    };
    googleMapUrl?: string;
    googleMapsAppUrl?: string;
  };
  openingHours?: {
    weekdays?: string;
    saturday?: string;
    holidays?: string;
  };
  pricing?: {
    membershipFee?: {
      price: string;
      note: string;
    };
    usageFee?: {
      member: string;
      nonMember: string;
    };
    freePass?: {
      price: string;
      note: string;
    };
    ticketBook?: {
      price: string;
      note: string;
    };
  };
  noReservationText?: string;
  welcomeText?: string;
  location?: {
    postalCode: string;
    address: string;
  };
  phoneNumber?: string;
  phoneNumberDisplay?: string;
  instagramUrl?: string;
  instagramHandle?: string;
  notes?: string[];
}

export function FacilityInfoSection({
  id,
  title,
  subtitle,
  targetUsers,
  businessHours,
  access,
  openingHours,
  pricing,
  noReservationText,
  welcomeText,
  location,
  phoneNumber,
  phoneNumberDisplay,
  instagramUrl,
  instagramHandle,
  notes,
}: FacilityInfoSectionProps) {
  return (
    <section id={id} className="common-section facility-info-section">
      <div className="common-section__inner">
        <header className="section-header">
          <h2 className="section-header__title">{title}</h2>
          <p className="section-header__subtitle">{subtitle}</p>
        </header>

        {/* 予約不要メッセージ */}
        {(noReservationText || welcomeText) && (
          <div className="facility-info-welcome">
            {noReservationText && (
              <p className="facility-info-welcome__text">{noReservationText}</p>
            )}
            {welcomeText && (
              <p className="facility-info-welcome__text">{welcomeText}</p>
            )}
          </div>
        )}

        {/* 利用対象とひろば開園日時 */}
        {(targetUsers || openingHours) && (
          <div className="hiroba-introduction__info-grid">
            {targetUsers && (
              <div className="hiroba-introduction__info-block">
                <h3 className="hiroba-introduction__subtitle">利用対象</h3>
                <ul className="hiroba-introduction__list">
                  {targetUsers.map((user, index) => (
                    <li key={index} className="hiroba-introduction__list-item">
                      {user}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {openingHours && (
              <div className="hiroba-introduction__info-block">
                <h3 className="hiroba-introduction__subtitle">
                  ひろば開園日時
                </h3>
                <dl className="hiroba-introduction__hours">
                  {openingHours.weekdays && (
                    <div className="hiroba-introduction__hours-item">
                      <dt className="hiroba-introduction__hours-label">平日</dt>
                      <dd className="hiroba-introduction__hours-value">
                        {openingHours.weekdays}
                      </dd>
                    </div>
                  )}
                  {openingHours.saturday && (
                    <div className="hiroba-introduction__hours-item">
                      <dt className="hiroba-introduction__hours-label">土曜</dt>
                      <dd className="hiroba-introduction__hours-value">
                        {openingHours.saturday}
                      </dd>
                    </div>
                  )}
                  {openingHours.holidays && (
                    <div className="hiroba-introduction__hours-item">
                      <dt className="hiroba-introduction__hours-label">
                        休館日
                      </dt>
                      <dd className="hiroba-introduction__hours-value">
                        {openingHours.holidays}
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            )}
          </div>
        )}

        {/* ひろば利用料金 */}
        {pricing && (
          <div className="hiroba-introduction__info-block">
            <h3 className="hiroba-introduction__subtitle">ひろば利用料金</h3>
            <dl className="hiroba-introduction__hours">
              {pricing.membershipFee && (
                <div className="hiroba-introduction__hours-item">
                  <dt className="hiroba-introduction__hours-label">
                    会員登録料
                  </dt>
                  <dd className="hiroba-introduction__hours-value">
                    <div>{pricing.membershipFee.price}</div>
                    {pricing.membershipFee.note && (
                      <div className="facility-info-price-note">
                        {pricing.membershipFee.note}
                      </div>
                    )}
                  </dd>
                </div>
              )}

              {pricing.usageFee && (
                <div className="hiroba-introduction__hours-item">
                  <dt className="hiroba-introduction__hours-label">利用料</dt>
                  <dd className="hiroba-introduction__hours-value">
                    <div>会員 {pricing.usageFee.member}</div>
                    <div>非会員 {pricing.usageFee.nonMember}</div>
                  </dd>
                </div>
              )}

              {pricing.freePass && (
                <div className="hiroba-introduction__hours-item">
                  <dt className="hiroba-introduction__hours-label">
                    フリーパス
                  </dt>
                  <dd className="hiroba-introduction__hours-value">
                    <div>{pricing.freePass.price}</div>
                    {pricing.freePass.note && (
                      <div className="facility-info-price-note">
                        {pricing.freePass.note}
                      </div>
                    )}
                  </dd>
                </div>
              )}

              {pricing.ticketBook && (
                <div className="hiroba-introduction__hours-item">
                  <dt className="hiroba-introduction__hours-label">回数券</dt>
                  <dd className="hiroba-introduction__hours-value">
                    <div>{pricing.ticketBook.price}</div>
                    {pricing.ticketBook.note && (
                      <div className="facility-info-price-note">
                        {pricing.ticketBook.note}
                      </div>
                    )}
                  </dd>
                </div>
              )}
            </dl>
          </div>
        )}

        {/* アクセス */}
        {access && (
          <div className="hiroba-introduction__access">
            <h3 className="hiroba-introduction__subtitle">アクセス</h3>
            <p className="hiroba-introduction__address">{access.address}</p>

            <div className="hiroba-introduction__access-grid">
              {access.nearestStations &&
                access.nearestStations.map((station, index) => (
                  <div key={index} className="hiroba-introduction__access-card">
                    <div className="hiroba-introduction__access-card-label">
                      {station.name}
                    </div>
                    <div className="hiroba-introduction__access-card-value">
                      {station.walkingTime}
                    </div>
                  </div>
                ))}

              {access.parking && (
                <>
                  <div className="hiroba-introduction__access-card">
                    <div className="hiroba-introduction__access-card-label">
                      駐車場
                    </div>
                    <div
                      className={`hiroba-introduction__access-card-value hiroba-introduction__access-card-value--${
                        access.parking.onsite ? "available" : "unavailable"
                      }`}
                    >
                      <span className="hiroba-introduction__access-icon">
                        {access.parking.onsite ? "○" : "×"}
                      </span>
                      {access.parking.onsite ? "あり" : "なし"}
                    </div>
                  </div>

                  <div className="hiroba-introduction__access-card">
                    <div className="hiroba-introduction__access-card-label">
                      近隣駐車場
                    </div>
                    <div
                      className={`hiroba-introduction__access-card-value hiroba-introduction__access-card-value--${
                        access.parking.nearby ? "available" : "unavailable"
                      }`}
                    >
                      <span className="hiroba-introduction__access-icon">
                        {access.parking.nearby ? "○" : "×"}
                      </span>
                      {access.parking.nearby ? "あり" : "なし"}
                    </div>
                  </div>
                </>
              )}
            </div>

            {access.googleMapUrl && (
              <div className="hiroba-introduction__map-container">
                {access.googleMapsAppUrl && (
                  <a
                    href={access.googleMapsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hiroba-introduction__map-button"
                  >
                    Mapアプリで開く
                  </a>
                )}
                <div className="hiroba-introduction__map">
                  <iframe
                    src={access.googleMapUrl}
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* お問い合わせリンク */}
        <div className="facility-info-contact-link-section">
          <a href="#contact" className="facility-info-contact-button">
            お問い合わせはこちら
          </a>
        </div>

        {/* Notes */}
        {notes && notes.length > 0 && (
          <div className="facility-info-notes-section">
            <h3 className="facility-info-notes-title">注意事項</h3>
            <ul className="facility-info-notes-list">
              {notes.map((note, index) => (
                <li key={index} className="facility-info-notes-item">
                  {note}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
