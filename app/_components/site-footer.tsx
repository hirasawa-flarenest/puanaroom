"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Modal } from "./modal";

const PRIVACY_POLICY_CONTENT = `
<div style="line-height: 1.8;">
  <p style="margin-bottom: 1.5em;">
    おやこの広場 はないろ（以下「当施設」といいます）は、個人情報の重要性を認識し、個人情報を保護することが社会的責務であると考え、個人情報に関する法令を遵守し、当施設で取扱う個人情報の取得、利用、管理を適正に行います。
  </p>

  <h3 style="font-size: 1.1em; font-weight: 700; margin: 2em 0 1em; color: #333;">1. 個人情報の定義</h3>
  <p style="margin-bottom: 1.5em;">
    本プライバシーポリシーにおいて、個人情報とは生存する個人に関する情報であって、氏名、生年月日、住所、電話番号、メールアドレス等、特定の個人を識別できるものをいいます。
  </p>

  <h3 style="font-size: 1.1em; font-weight: 700; margin: 2em 0 1em; color: #333;">2. 個人情報の収集</h3>
  <p style="margin-bottom: 1.5em;">
    当施設では、以下のような場合に必要な範囲で個人情報を収集することがあります。
  </p>
  <ul style="margin: 1em 0 1.5em 1.5em; list-style-type: disc;">
    <li style="margin-bottom: 0.5em;">施設のご利用登録をいただく場合</li>
    <li style="margin-bottom: 0.5em;">お問い合わせをいただく場合</li>
    <li style="margin-bottom: 0.5em;">イベントやプログラムへのお申し込みをいただく場合</li>
  </ul>

  <h3 style="font-size: 1.1em; font-weight: 700; margin: 2em 0 1em; color: #333;">3. 個人情報の利用目的</h3>
  <p style="margin-bottom: 1em;">
    当施設は、個人情報を以下の目的で利用いたします。
  </p>
  <ul style="margin: 1em 0 1.5em 1.5em; list-style-type: disc;">
    <li style="margin-bottom: 0.5em;">施設のご利用に関する連絡、確認のため</li>
    <li style="margin-bottom: 0.5em;">お問い合わせへの回答のため</li>
    <li style="margin-bottom: 0.5em;">イベントやプログラムのご案内のため</li>
    <li style="margin-bottom: 0.5em;">施設運営の改善、サービス向上のため</li>
    <li style="margin-bottom: 0.5em;">緊急時のご連絡のため</li>
  </ul>

  <h3 style="font-size: 1.1em; font-weight: 700; margin: 2em 0 1em; color: #333;">4. 個人情報の第三者提供</h3>
  <p style="margin-bottom: 1.5em;">
    当施設は、以下の場合を除き、個人情報を第三者に提供することはありません。
  </p>
  <ul style="margin: 1em 0 1.5em 1.5em; list-style-type: disc;">
    <li style="margin-bottom: 0.5em;">ご本人の同意がある場合</li>
    <li style="margin-bottom: 0.5em;">法令に基づく場合</li>
    <li style="margin-bottom: 0.5em;">人の生命、身体または財産の保護のために必要がある場合であって、ご本人の同意を得ることが困難である場合</li>
  </ul>

  <h3 style="font-size: 1.1em; font-weight: 700; margin: 2em 0 1em; color: #333;">5. 個人情報の管理</h3>
  <p style="margin-bottom: 1.5em;">
    当施設は、個人情報の正確性を保ち、これを安全に管理いたします。個人情報の漏洩、滅失、き損などを防止するため、必要かつ適切な安全管理措置を実施します。また、個人情報を取り扱う従業員や委託先に対して、必要かつ適切な監督を行います。
  </p>

  <h3 style="font-size: 1.1em; font-weight: 700; margin: 2em 0 1em; color: #333;">6. 個人情報の開示・訂正・削除</h3>
  <p style="margin-bottom: 1.5em;">
    ご本人が自己の個人情報について、開示・訂正・削除等を希望される場合には、ご本人であることを確認の上、速やかに対応いたします。
  </p>

  <h3 style="font-size: 1.1em; font-weight: 700; margin: 2em 0 1em; color: #333;">7. Cookie（クッキー）について</h3>
  <p style="margin-bottom: 1.5em;">
    当施設のウェブサイトでは、より良いサービスの提供のため、Cookieを使用することがあります。Cookieの使用を希望されない場合は、ブラウザの設定でCookieを無効にすることができます。
  </p>

  <h3 style="font-size: 1.1em; font-weight: 700; margin: 2em 0 1em; color: #333;">8. プライバシーポリシーの変更</h3>
  <p style="margin-bottom: 1.5em;">
    当施設は、法令の変更等に伴い、本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当ウェブサイトに掲載した時点から効力を生じるものとします。
  </p>

  <h3 style="font-size: 1.1em; font-weight: 700; margin: 2em 0 1em; color: #333;">9. お問い合わせ窓口</h3>
  <p style="margin-bottom: 1em;">
    個人情報の取扱いに関するお問い合わせは、以下までご連絡ください。
  </p>
  <p style="margin-bottom: 0.5em; padding-left: 1em;">
    <strong>おやこの広場 はないろ</strong><br>
    〒225-0024 横浜市青葉区市ヶ尾町436-1 エスポアール市ヶ尾103<br>
    電話：090-6510-3126<br>
    営業時間：平日 月〜金 9:30〜16:00
  </p>

  <p style="margin-top: 2em; text-align: right; color: #666;">
    制定日：2024年4月1日
  </p>
</div>
`;

export function SiteFooter() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  return (
    <>
      <footer className="site-footer" role="contentinfo">
        <div className="site-footer__inner">
          <div className="site-footer__brand">
            <Image
              src="/images/Puana-Logo.jpg"
              alt="おやこの広場 はないろ ロゴ"
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

          <nav
            className="site-footer__nav"
            role="navigation"
            aria-label="フッターナビゲーション"
          >
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
                <li>
                  <button
                    type="button"
                    onClick={() => setIsPrivacyModalOpen(true)}
                    className="site-footer__privacy-link"
                  >
                    個人情報保護方針
                  </button>
                </li>
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

      <Modal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
        title="個人情報保護方針"
        content={PRIVACY_POLICY_CONTENT}
      />
    </>
  );
}
