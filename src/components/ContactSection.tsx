"use client";

import { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { EMAIL } from "@/data/portfolio";

const SLOTS = [
  { id: "15min", label: "15 min", calLink: "nehaaa06/15min" },
  { id: "30min", label: "30 min", calLink: "nehaaa06/30min" },
] as const;

type SlotId = (typeof SLOTS)[number]["id"];

export default function ContactSection() {
  const [open, setOpen] = useState(false);
  const [slot, setSlot] = useState<SlotId>("30min");
  const active = SLOTS.find((item) => item.id === slot) ?? SLOTS[1];

  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const sync = () => {
      const attr = document.documentElement.getAttribute("data-theme");
      setTheme(attr === "dark" ? "dark" : "light");
    };
    sync();
    window.addEventListener("themechange", sync);
    return () => window.removeEventListener("themechange", sync);
  }, []);

  useEffect(() => {
    if (!open) return;
    (async () => {
      const cal = await getCalApi({ namespace: `${slot}-${theme}` });
      cal("ui", {
        hideEventTypeDetails: true,
        layout: "month_view",
        theme,
      });
    })();
  }, [open, slot, theme]);

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <header className="section-head">
        <h2 id="contact-title" className="section-title">
          Contact
        </h2>
      </header>
      <div className="section-body">
        <p className="contact-line">Tell me what you&apos;re shipping.</p>
        <p className="contact-sub">Founders, engineers and recruiters all welcome.</p>

        <div className="contact-actions">
          <button
            type="button"
            className="button button--primary"
            aria-expanded={open}
            aria-controls="cal-panel"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Hide calendar" : "Book a call"}
          </button>
          <a className="button" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </div>

        {open && (
          <div id="cal-panel" className="cal">
            <div className="cal-bar">
              <div className="segmented" role="group" aria-label="Call length">
                {SLOTS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={slot === item.id}
                    onClick={() => setSlot(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <a
                href={`https://cal.com/${active.calLink}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Open in Cal.com
              </a>
            </div>
            <div className="cal-embed">
              <Cal
                key={`${active.calLink}-${theme}`}
                namespace={`${slot}-${theme}`}
                calLink={active.calLink}
                style={{ width: "100%", height: "100%", overflow: "auto" }}
                config={{ layout: "month_view", theme }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
