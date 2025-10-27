"use client";

import { useState } from "react";
import type { FacilityInfoSectionProps } from "@/lib/types";

export type { FacilityInfoSectionProps };

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
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    // デフォルト動作を防止
    e.preventDefault();
    e.stopPropagation();

    // スクロール位置を保存
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;

    // ボタンからフォーカスを外す
    e.currentTarget.blur();

    if (!access?.address) return;

    try {
      // Modern clipboard API (優先)
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(access.address);
        // スクロール位置を確実に維持
        window.scrollTo(scrollX, scrollY);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        return;
      }

      // フォールバック: テキスト選択とコピー
      const textArea = document.createElement("textarea");
      textArea.value = access.address;
      textArea.style.position = "fixed";
      textArea.style.top = "0";
      textArea.style.left = "0";
      textArea.style.opacity = "0";
      textArea.style.pointerEvents = "none";
      textArea.setAttribute("readonly", "");
      document.body.appendChild(textArea);
      textArea.focus({ preventScroll: true });
      textArea.select();

      const successful = document.execCommand("copy");
      document.body.removeChild(textArea);

      // スクロール位置を復元
      window.scrollTo(scrollX, scrollY);

      if (successful) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        throw new Error("Copy command was unsuccessful");
      }
    } catch (err) {
      // 開発環境でのみエラー表示
      if (process.env.NODE_ENV === "development") {
        console.error("Failed to copy address:", err);
      }
      // スクロール位置を復元
      window.scrollTo(scrollX, scrollY);
      // エラーが発生しても視覚的フィードバックを表示
      alert(`住所をコピー: ${access.address}`);
    }
  };

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

            {/* 住所 */}
            <div className="access-address-box">
              <div className="access-address-label">住所</div>
              <button
                className="access-address-value access-address-value--copyable"
                onClick={handleCopyAddress}
                type="button"
                title="クリックして住所をコピー"
              >
                <span className="access-address-text">{access.address}</span>
                <span className="access-address-copy-icon">
                  {copied ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-label="コピー完了"
                    >
                      <polyline points="4 8 7 11 12 5" />
                    </svg>
                  ) : (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-label="コピーする"
                    >
                      <rect x="4" y="4" width="8" height="10" rx="1" />
                      <path d="M6 4V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v8" />
                    </svg>
                  )}
                </span>
                {copied && (
                  <span className="access-address-copied-message">
                    コピーしました
                  </span>
                )}
              </button>
            </div>

            {/* 地図 */}
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

            {/* 交通手段 */}
            {access.nearestStations && (
              <div className="access-section">
                <div className="access-section-title">交通手段</div>
                <div className="access-stations-grid">
                  {access.nearestStations.map((station, index) => (
                    <div key={index} className="access-station-item">
                      <div className="access-station-name">{station.name}</div>
                      <div className="access-station-time">
                        {station.walkingTime}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 駐車場・駐輪場情報 */}
            {(access.parking ||
              access.bicycleParking !== undefined ||
              access.strollerParking !== undefined) && (
              <div className="access-section">
                <div className="access-section-title">駐車場・駐輪場</div>
                <div className="access-facilities-row">
                  {access.parking && (
                    <>
                      <div className="access-facility-item">
                        <span className="access-facility-label">
                          専有駐車場
                        </span>
                        <span
                          className={`access-facility-status access-facility-status--${
                            access.parking.onsite ? "available" : "unavailable"
                          }`}
                        >
                          {access.parking.onsite ? "○" : "×"}
                        </span>
                      </div>
                    </>
                  )}
                  {access.bicycleParking !== undefined && (
                    <div className="access-facility-item">
                      <span className="access-facility-label">駐輪場</span>
                      <span
                        className={`access-facility-status access-facility-status--${
                          access.bicycleParking ? "available" : "unavailable"
                        }`}
                      >
                        {access.bicycleParking ? "○" : "×"}
                      </span>
                    </div>
                  )}
                  {access.strollerParking !== undefined && (
                    <div className="access-facility-item">
                      <span className="access-facility-label">
                        ベビーカー置場
                      </span>
                      <span
                        className={`access-facility-status access-facility-status--${
                          access.strollerParking ? "available" : "unavailable"
                        }`}
                      >
                        {access.strollerParking ? "○" : "×"}
                      </span>
                    </div>
                  )}
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
