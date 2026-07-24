"use client";

import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [aiState, setAiState] = useState<"idle" | "applied" | "skipped">("idle");

  return (
    <section className="relative overflow-hidden bg-[#120E09] text-[#F6F0E6]">
      {/* ---- background: connected earth (gold city lights) ---- */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* slowly drifting globe (Ken Burns) */}
        <div className="earth-anim absolute inset-0 opacity-[0.98]">
          <Image
            src="/images/bg4.avif"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        {/* keep the headline side readable, but lighter overall so it doesn't feel heavy */}
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, #120E09 0%, rgba(18,14,9,.60) 24%, rgba(18,14,9,.10) 56%, rgba(18,14,9,.14) 100%)" }} />
        {/* airy light wash up near the nav, deepening to a clean dark base at the bottom */}
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(243,234,216,.40) 0%, rgba(233,222,200,.14) 14%, transparent 30%, transparent 82%, #120E09 100%)" }} />

        {/* slowly changing city-light glows over the globe (screen-blended, over the bright clusters) */}
        <div className="light-glow light-glow-1" />
        <div className="light-glow light-glow-2" />
        <div className="light-glow light-glow-3" />
        {/* breathing blue atmosphere along the horizon */}
        <div className="atmos-glow" />
      </div>

      {/* ---- atmosphere ---- */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* dark wash top-right */}
        <div className="absolute -top-[25%] right-[-8%] h-[90%] w-[60%] rounded-full blur-2xl"
          style={{ background: "radial-gradient(circle at center, rgba(10,7,4,.55), rgba(10,7,4,.22) 42%, transparent 66%)" }} />
        {/* dark wash bottom-left */}
        <div className="absolute -bottom-[30%] left-[-12%] h-[70%] w-[50%] rounded-full blur-2xl"
          style={{ background: "radial-gradient(circle at center, rgba(10,7,4,.45), transparent 60%)" }} />
        {/* faint grid */}
        <div className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(rgba(245,239,230,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(245,239,230,.05) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            WebkitMaskImage: "radial-gradient(circle at 72% 32%, black, transparent 70%)",
            maskImage: "radial-gradient(circle at 72% 32%, black, transparent 70%)",
          }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        {/* ---- hero grid ---- */}
        <div className="grid items-center gap-12 pb-14 pt-28 md:grid-cols-[1.05fr_.95fr] md:pb-20 md:pt-32">
          {/* left: copy */}
          <div>
            {/* <div className="hero-rise inline-flex items-center gap-2.5 rounded-full border border-[#E8A33D]/20 bg-[#E8A33D]/[.05] py-[7px] pl-3.5 pr-3 text-[13.5px] font-medium text-[#B6A990]"
              style={{ animationDelay: "50ms" }}>
              <span className="rounded-full px-2 py-[3px] text-[11px] font-bold tracking-wide text-[#1A140D]"
                style={{ background: "linear-gradient(135deg,#F0B454 0%,#D98A2B 48%,#C75B39 100%)" }}>NEW</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#5BD08A] ring-4 ring-[#5BD08A]/20" />
              AI-assisted digital branding studio
            </div> */}

            <h1 className="mt-7 font-serif text-[clamp(2.75rem,5.5vw,5rem)] font-normal leading-[1.0] tracking-[-0.02em]">
              <span className="hero-rise block" style={{ animationDelay: "120ms" }}>Empowering</span>
              <span className="hero-rise block" style={{ animationDelay: "200ms" }}>
                <span className="bg-gradient-to-br from-[#F0B454] via-[#D98A2B] to-[#C75B39] bg-clip-text italic text-transparent">solutions</span> for
              </span>
              <span className="hero-rise block" style={{ animationDelay: "280ms" }}>brands &amp; communities</span>
            </h1>

            <p className="hero-rise mt-6 max-w-[480px] text-[18px] leading-relaxed text-[#B6A990]" style={{ animationDelay: "400ms" }}>
              VersaSolve Consulting helps nonprofits, small businesses, and mission-driven organizations build a{" "}
              <b className="font-semibold text-[#F6F0E6]">strategic digital presence</b>, combining strategy, branding,
              and web design with <b className="font-semibold text-[#F6F0E6]">AI-assisted insights</b> and ongoing support.
            </p>

            <div className="hero-rise mt-9 flex flex-wrap items-center gap-3.5" style={{ animationDelay: "500ms" }}>
              <a href="https://calendar.app.google/TRNg4J99aZ2spjC88" target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-[13px] px-7 py-[15px] text-base font-semibold text-[#1A140D] transition hover:-translate-y-px"
                style={{ background: "linear-gradient(135deg,#F0B454 0%,#D98A2B 48%,#C75B39 100%)", boxShadow: "0 10px 28px rgba(216,138,43,.28), inset 0 1px 0 rgba(255,255,255,.45)" }}>
                Book a free consultation
                <ArrowRight className="transition group-hover:translate-x-0.5" />
              </a>
              <a href="#versavantage" className="inline-flex items-center gap-2 rounded-[13px] border border-[#E8A33D]/25 bg-white/[.02] px-7 py-[15px] text-base font-semibold transition hover:bg-white/5">
                <PlayIcon />
                Meet VersaVantage
              </a>
            </div>

            <div className="hero-rise mt-11 flex flex-wrap items-center gap-7" style={{ animationDelay: "620ms" }}>
              <Stat top="Build" label="Web, branding & media" />
              <Divider />
              <Stat top="Maintain" label="VersaCare support" />
              <Divider />
              <Stat top="Scale" label="VersaVantage insights" />
            </div>
          </div>

          {/* right: product visual */}
          <div className="hero-fade relative h-[540px]">
            {/* main dashboard */}
            <div className="panel absolute left-3.5 top-12 w-[360px] p-[22px] animate-[float_8s_ease-in-out_infinite]">
              <div className="mb-[18px] flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-sm font-semibold">
                  <span className="grid h-[26px] w-[26px] place-items-center rounded-lg font-serif text-xs font-bold text-[#1A140D]"
                    style={{ background: "linear-gradient(135deg,#F0B454 0%,#D98A2B 48%,#C75B39 100%)" }}>VS</span>
                  VersaVantage
                </div>
                <span className="flex items-center gap-1.5 text-[11px] text-[#B6A990]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#5BD08A] animate-pulse" /> Live
                </span>
              </div>
              <div className="mb-1 text-[12.5px] text-[#B6A990]">Digital presence · last 30 days</div>
              <div className="flex items-baseline gap-2.5 font-serif text-[33px] font-medium leading-none">
                18.4K
                <span className="rounded-md bg-[#5BD08A]/10 px-2 py-[3px] font-sans text-[13px] font-semibold text-[#5BD08A]">↑ 23%</span>
              </div>
              <div className="mb-1.5 mt-4 h-24">
                <div className="flex h-full items-end gap-2">
                  {[42, 58, 48, 70, 62, 82, 100].map((h, i) => (
                    <div key={i} className="flex-1 overflow-hidden rounded-t-md"
                      style={{
                        height: `${h}%`,
                        background: i === 6
                          ? "linear-gradient(135deg,#F0B454 0%,#D98A2B 48%,#C75B39 100%)"
                          : "linear-gradient(180deg, rgba(232,163,61,.55), rgba(232,163,61,.08))",
                      }} />
                  ))}
                </div>
                <div className="mt-2 flex justify-between text-[10px] text-[#7E7460]">
                  {["W1", "W2", "W3", "W4", "W5", "W6", "Now"].map((w) => <span key={w}>{w}</span>)}
                </div>
              </div>
              <div className="mt-4 flex gap-2 border-t border-white/[.08] pt-3.5">
                {[["Web", "8.9K"], ["Social", "5.2K"], ["Community", "4.3K"]].map(([l, v]) => (
                  <div key={l} className="flex-1 rounded-xl border border-white/[.08] bg-white/[.03] px-3 py-2.5">
                    <div className="mb-1 text-[11px] text-[#7E7460]">{l}</div>
                    <div className="text-[15px] font-semibold">{v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI card */}
            <div className="panel absolute right-1.5 top-0 w-[248px] p-[18px] animate-[float_9s_ease-in-out_infinite_.6s]">
              <div className="mb-3 flex items-center gap-2.5">
                <div className="grid h-[30px] w-[30px] place-items-center rounded-[9px] border border-[#E8A33D]/20"
                  style={{ background: "linear-gradient(135deg, rgba(232,163,61,.25), rgba(199,91,57,.18))" }}>
                  <SparkIcon />
                </div>
                <div>
                  <div className="text-[13px] font-semibold">AI Brand Assist</div>
                  <div className="text-[11px] text-[#7E7460]">Brand voice · web copy</div>
                </div>
              </div>
              <div className="rounded-xl border border-white/[.08] bg-white/[.03] p-3 text-[12.5px] leading-[1.55] text-[#B6A990]">
                {aiState === "idle" && (<>Rewrote in <span className="font-semibold text-[#E8A33D]">your brand voice</span>, warm, direct, origin-led. Est. <span className="font-semibold text-[#E8A33D]">+14%</span> engagement.</>)}
                {aiState === "applied" && (<>✓ <span className="font-semibold text-[#E8A33D]">Applied.</span> Re-check engagement in ~2 weeks to see impact.</>)}
                {aiState === "skipped" && (<>Skipped. We&apos;ll surface the next opportunity for you.</>)}
              </div>
              {aiState === "idle" && (
                <div className="mt-3 flex gap-2">
                  <button onClick={() => setAiState("applied")}
                    className="flex-1 rounded-[9px] py-2 text-xs font-semibold text-[#1A140D] transition hover:brightness-110"
                    style={{ background: "linear-gradient(135deg,#F0B454 0%,#D98A2B 48%,#C75B39 100%)" }}>Apply</button>
                  <button onClick={() => setAiState("skipped")}
                    className="flex-1 rounded-[9px] border border-white/[.08] bg-white/[.04] py-2 text-xs font-semibold text-[#B6A990] transition hover:bg-white/[.07]">Skip</button>
                </div>
              )}
            </div>

            {/* brand palette */}
            <div className="panel absolute bottom-[180px] right-0 w-[134px] p-[13px] px-[15px] animate-[float_8.5s_ease-in-out_infinite_.9s]">
              <div className="mb-2.5 text-[10px] uppercase tracking-[.6px] text-[#7E7460]">Brand palette</div>
              <div className="flex gap-1.5">
                {["#A66A23", "#E8A33D", "#C75B39", "#2A2115"].map((c) => (
                  <div key={c} className="h-[23px] w-[23px] rounded-[7px] border border-white/10" style={{ background: c }} />
                ))}
              </div>
            </div>

            {/* versacare tile */}
            <Tile className="bottom-[84px] left-0 w-[174px]" accent="#C75B39"
              icon={<HeartIcon />} label="VersaCare" big="24/7" sub="ongoing digital support" />

            {/* web vitals tile */}
            <Tile className="bottom-1 right-[18px] w-[182px]" accent="#E8A33D"
              icon={<CoinIcon />} label="Web Vitals" big="98" sub="performance score" />
          </div>
        </div>
      </div>

      {/* keyframes + shared panel style */}
      <style jsx global>{`
        .panel {
          background: linear-gradient(165deg, #211A11, #1A140D);
          border: 1px solid rgba(232, 163, 61, 0.14);
          border-radius: 18px;
          box-shadow: 0 30px 70px -20px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(245, 239, 230, 0.05);
        }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-11px); } }
        @keyframes heroRise { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes heroFade { from { opacity: 0; transform: scale(.97); } to { opacity: 1; transform: scale(1); } }
        .hero-rise { opacity: 0; animation: heroRise .9s cubic-bezier(.2,.7,.2,1) forwards; }
        .hero-fade { opacity: 0; animation: heroFade 1.1s .35s ease forwards; }

        /* ── living earth background ─────────────────────────────── */
        /* slow drifting pan + zoom so the globe feels like it turns */
        @keyframes earthDrift {
          0%   { transform: scale(1.10) translate3d(0, 0, 0); }
          50%  { transform: scale(1.16) translate3d(-1.6%, -0.9%, 0); }
          100% { transform: scale(1.10) translate3d(0, 0, 0); }
        }
        .earth-anim {
          will-change: transform;
          animation: earthDrift 46s ease-in-out infinite;
        }

        /* soft gold glows that slowly breathe like city lights coming and going */
        @keyframes lightBreath {
          0%, 100% { opacity: 0.30; transform: scale(0.96); }
          50%      { opacity: 0.85; transform: scale(1.16); }
        }
        .light-glow {
          position: absolute;
          border-radius: 9999px;
          filter: blur(38px);
          mix-blend-mode: screen;
          will-change: opacity, transform;
          pointer-events: none;
        }
        /* positioned over the actual bright city-light clusters in the lower half */
        .light-glow-1 {
          top: 58%; left: 60%; width: 280px; height: 280px;
          background: radial-gradient(circle, rgba(245,190,96,0.95) 0%, rgba(217,138,43,0.40) 45%, transparent 70%);
          animation: lightBreath 15s ease-in-out infinite;
        }
        .light-glow-2 {
          top: 64%; left: 76%; width: 240px; height: 240px;
          background: radial-gradient(circle, rgba(232,163,61,0.9) 0%, rgba(199,91,57,0.34) 48%, transparent 72%);
          animation: lightBreath 21s ease-in-out infinite 3s;
        }
        .light-glow-3 {
          top: 54%; left: 46%; width: 210px; height: 210px;
          background: radial-gradient(circle, rgba(250,215,150,0.8) 0%, rgba(217,138,43,0.28) 50%, transparent 74%);
          animation: lightBreath 27s ease-in-out infinite 6s;
        }

        /* the blue atmospheric rim, slowly brightening so the light shifts read */
        @keyframes atmosBreath {
          0%, 100% { opacity: 0.25; }
          50%      { opacity: 0.60; }
        }
        .atmos-glow {
          position: absolute;
          top: 30%; left: 52%; width: 62%; height: 130px;
          transform: translateX(-50%) rotate(-6deg);
          border-radius: 9999px;
          filter: blur(34px);
          mix-blend-mode: screen;
          pointer-events: none;
          will-change: opacity;
          background: radial-gradient(ellipse 60% 100% at 50% 50%, rgba(96,170,232,0.75) 0%, rgba(64,132,201,0.30) 45%, transparent 72%);
          animation: atmosBreath 19s ease-in-out infinite 1.5s;
        }

        @media (prefers-reduced-motion: reduce) {
          .earth-anim, .light-glow, .atmos-glow { animation: none !important; }
        }
      `}</style>
    </section>
  );
}

/* ---------- small pieces ---------- */
function Stat({ top, label }: { top: React.ReactNode; label: string }) {
  return (
    <div>
      <div className="font-serif text-[27px] font-medium leading-none">{top}</div>
      <div className="mt-1.5 text-[13px] text-[#7E7460]">{label}</div>
    </div>
  );
}
function Divider() { return <div className="h-9 w-px bg-white/[.08]" />; }
function Tile({ className, accent, icon, label, big, sub }: { className: string; accent: string; icon: React.ReactNode; label: string; big: string; sub: string; }) {
  return (
    <div className={`panel absolute p-[15px] px-4 animate-[float_7.5s_ease-in-out_infinite_.3s] ${className}`}>
      <div className="mb-2 flex items-center gap-[7px] text-[11px] font-semibold uppercase tracking-[.4px]" style={{ color: accent }}>
        {icon}{label}
      </div>
      <div className="font-serif text-[25px] font-semibold leading-none">{big}</div>
      <div className="mt-1.5 text-[11.5px] text-[#7E7460]">{sub}</div>
    </div>
  );
}

/* ---------- icons ---------- */
function ArrowRight({ className = "" }: { className?: string }) {
  return (<svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>);
}
function PlayIcon() {
  return (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M10 9l5 3-5 3V9z" fill="currentColor" stroke="none" /></svg>);
}
function SparkIcon() {
  return (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E8A33D" strokeWidth="2"><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" /></svg>);
}
function HeartIcon() {
  return (<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7-4.5-9.5-9C1 9 2.5 5.5 6 5.5c2 0 3.2 1.2 4 2.3.8-1.1 2-2.3 4-2.3 3.5 0 5 3.5 3.5 6.5C19 16.5 12 21 12 21z" /></svg>);
}
function CoinIcon() {
  return (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 7v10M9.5 9.5h3.5a1.8 1.8 0 010 3.5H10a1.8 1.8 0 000 3.5h4" /></svg>);
}