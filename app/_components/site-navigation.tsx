"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import type { NavigationItem } from "@/lib/types";

interface SiteNavigationProps {
  items: NavigationItem[];
  notice?: string;
}

export function SiteNavigation({ items, notice }: SiteNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeydown);
      document.body.classList.add("site-sidebar-open");
    } else {
      document.body.classList.remove("site-sidebar-open");
    }

    return () => {
      document.removeEventListener("keydown", handleKeydown);
      document.body.classList.remove("site-sidebar-open");
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className={`site-nav-toggle ${isOpen ? "site-nav-toggle--open" : ""}`}
        aria-label={isOpen ? "ナビゲーションを閉じる" : "ナビゲーションを開く"}
        aria-expanded={isOpen}
        aria-controls="site-sidebar"
        onClick={toggle}
      >
        <span className="hamburger">
          <span className="hamburger__line"></span>
          <span className="hamburger__line"></span>
          <span className="hamburger__line"></span>
        </span>
      </button>

      <aside
        id="site-sidebar"
        className={`site-sidebar ${isOpen ? "site-sidebar--open" : ""}`}
        aria-hidden={!isOpen}
      >
        <div className="site-sidebar__inner">
          <div className="site-sidebar__header">
            <h2 className="site-sidebar__title">おやこの広場　はないろ</h2>
            {notice && (
              <div className="site-sidebar__notice">{notice}</div>
            )}
          </div>
          <nav className="site-sidebar__nav" aria-label="主要メニュー">
            <ul className="site-sidebar__list">
              {items.map((item) => (
                <li key={item.id} className="site-sidebar__item">
                  <Link
                    href={`#${item.id}`}
                    className="site-sidebar__link"
                    onClick={close}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      {isOpen ? (
        <button
          type="button"
          className="site-sidebar__overlay"
          aria-label="ナビゲーションを閉じる"
          onClick={close}
        />
      ) : null}
    </>
  );
}
