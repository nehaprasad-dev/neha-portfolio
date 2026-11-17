"use client";

import { useEffect, useRef, useState } from "react";
import { EMAIL } from "@/data/portfolio";

const DISMISS_KEY = "intro-card-dismissed";

export default function IntroVideo() {
  const [visible, setVisible] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem(DISMISS_KEY) === "1";
    } catch {
      /* storage unavailable: show the card */
    }
    if (dismissed) return;
    const t = window.setTimeout(() => setVisible(true), 900);
    return () => window.clearTimeout(t);
  }, []);

  function dismiss() {
    setVisible(false);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
  }

  function open() {
    dialogRef.current?.showModal();
    videoRef.current?.play().catch(() => {});
  }

  function close() {
    videoRef.current?.pause();
    dialogRef.current?.close();
  }

  return (
    <>
      {visible && (
        <aside className="intro-card" aria-label="Intro video">
          <button type="button" className="intro-close" aria-label="Hide intro" onClick={dismiss}>
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
              <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
          <button type="button" className="intro-thumb" onClick={open} aria-label="Play my intro video">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/intro-poster.jpg" alt="" />
            <span className="intro-play" aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 12 12">
                <path d="M3 1.8v8.4L10 6 3 1.8z" fill="currentColor" />
              </svg>
            </span>
          </button>
          <div className="intro-text">
            <p className="intro-label">1-minute intro</p>
            <p className="intro-title">Hi, I&apos;m Neha!</p>
            <p className="intro-sub">What I build, what I&apos;ve shipped, and the role I&apos;m looking for.</p>
            <div className="intro-actions">
              <button type="button" className="button button--primary" onClick={open}>
                Watch my intro
              </button>
              <a className="button" href={`mailto:${EMAIL}`}>
                Email me
              </a>
            </div>
          </div>
        </aside>
      )}

      <dialog
        ref={dialogRef}
        className="intro-dialog"
        aria-label="Neha's intro video"
        onClose={() => videoRef.current?.pause()}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <div className="intro-frame">
          <button type="button" className="intro-close intro-close--dialog" aria-label="Close video" onClick={close}>
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
              <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
          <video
            ref={videoRef}
            src="/intro.mp4"
            poster="/intro-poster.jpg"
            controls
            playsInline
            preload="none"
          />
        </div>
      </dialog>
    </>
  );
}
