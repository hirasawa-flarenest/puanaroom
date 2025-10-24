"use client";

import { useEffect } from "react";
import Script from "next/script";

export interface InstagramPost {
  url: string;
}

export interface InstagramFeedSectionProps {
  title: string;
  subtitle: string;
  posts: InstagramPost[];
  instagramUrl?: string;
}

export function InstagramFeedSection({
  title,
  subtitle,
  posts,
  instagramUrl,
}: InstagramFeedSectionProps) {
  useEffect(() => {
    // Instagram埋め込みスクリプトの再実行
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [posts]);

  return (
    <>
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (window.instgrm) {
            window.instgrm.Embeds.process();
          }
        }}
      />
      <section className="common-section instagram-feed-section">
        <div className="common-section__inner">
          <header className="section-header">
            <h2 className="section-header__title">{title}</h2>
            <p className="section-header__subtitle">{subtitle}</p>
          </header>

          <div className="instagram-feed-grid">
            {posts.map((post, index) => (
              <div key={index} className="instagram-feed-item">
                <blockquote
                  className="instagram-media"
                  data-instgrm-captioned
                  data-instgrm-permalink={post.url}
                  data-instgrm-version="14"
                  style={{
                    background: "#FFF",
                    border: 0,
                    borderRadius: "3px",
                    boxShadow:
                      "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                    margin: "1px",
                    maxWidth: "540px",
                    minWidth: "326px",
                    padding: 0,
                    width: "99.375%",
                  }}
                >
                  <div style={{ padding: "16px" }}>
                    <a
                      href={post.url}
                      style={{
                        background: "#FFFFFF",
                        lineHeight: 0,
                        padding: "0 0",
                        textAlign: "center",
                        textDecoration: "none",
                        width: "100%",
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagramで投稿を見る
                    </a>
                  </div>
                </blockquote>
              </div>
            ))}
          </div>

          {instagramUrl && (
            <div className="instagram-feed-footer">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-feed-more-button"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                もっと見る
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

// Window type declaration for Instagram embed
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}
