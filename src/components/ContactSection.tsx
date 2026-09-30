"use client";

import { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import SectionHeading from "@/components/SectionHeading";

const SLOTS = [
  { id: "15min", label: "15 min", calLink: "nehaaa06/15min" },
  { id: "30min", label: "30 min", calLink: "nehaaa06/30min" },
] as const;

type SlotId = (typeof SLOTS)[number]["id"];

const EMAIL = "nehaprasad27118@gmail.com";

export default function ContactSection() {
  const [slot, setSlot] = useState<SlotId>("30min");
  const active = SLOTS.find((item) => item.id === slot) ?? SLOTS[1];

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: slot });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
        theme: "light",
      });
    })();
  }, [slot]);

  return (
    <section className="chat-section contact-section" id="contact">
      <SectionHeading title="CONTACT" icon="chat" />

      <div className="contact-intro">
        <p className="contact-eyebrow">Book a call</p>
        <h3 className="contact-headline">Tell me what you&apos;re shipping.</h3>
        <p className="contact-audience">Founders · Engineers · Recruiters</p>
      </div>

      <div className="contact-cal-card">
        <div className="contact-cal-toolbar">
          <p className="contact-cal-hint">
            Pick a time that works ·{" "}
            <a
              href={`https://cal.com/${active.calLink}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-cal-open"
            >
              Open in Cal.com ↗
            </a>
          </p>
          <div className="contact-duration" role="tablist" aria-label="Call length">
            {SLOTS.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={slot === item.id}
                className={`contact-duration-btn${slot === item.id ? " is-active" : ""}`}
                onClick={() => setSlot(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="contact-cal-embed">
          <p className="contact-cal-loading">Loading calendar…</p>
          <Cal
            key={active.calLink}
            namespace={slot}
            calLink={active.calLink}
            style={{ width: "100%", height: "100%", overflow: "hidden" }}
            config={{
              layout: "month_view",
              theme: "light",
            }}
          />
        </div>
      </div>

      <p className="contact-email">
        Prefer email? <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </p>
    </section>
  );
}
