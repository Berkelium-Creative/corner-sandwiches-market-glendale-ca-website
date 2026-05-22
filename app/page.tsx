"use client";
import { Alfa_Slab_One, DM_Sans, Permanent_Marker } from "next/font/google";
import content from "../data/content.json";

const display = Alfa_Slab_One({ subsets: ["latin"], weight: ["400"], variable: "--font-display" });
const body = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700", "900"], variable: "--font-body" });
const accent = Permanent_Marker({ subsets: ["latin"], weight: ["400"], variable: "--font-accent" });

const TOMATO = "#DC2626";
const RED_DEEP = "#7F1D1D";
const MUSTARD = "#EAB308";
const PICKLE = "#65A30D";
const CREAM = "#FAFAF5";
const SAND = "#F5F0E0";
const INK = "#0C0A09";
const MUTED = "#57534E";

const HERO_PHOTO = "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=1800&q=80&auto=format&fit=crop";

export default function Page() {
  const c = content as any;
  return (
    <main className={`${display.variable} ${body.variable} ${accent.variable} min-h-screen`} style={{ backgroundColor: CREAM, color: INK, fontFamily: "var(--font-body)" }}>
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes tilt { from { transform: rotate(-4deg) translateY(20px); opacity: 0; } to { transform: rotate(-2deg) translateY(0); opacity: 1; } }
        .fade-up { animation: fadeUp 1s ease-out both; }
        .tilt { animation: tilt 1.2s ease-out both; }
        .display-text { font-family: var(--font-display); letter-spacing: -0.02em; }
        .accent-text { font-family: var(--font-accent); }
        .body-text { font-family: var(--font-body); }
        .stripe-bg { background: repeating-linear-gradient(45deg, ${MUSTARD}, ${MUSTARD} 12px, ${TOMATO} 12px, ${TOMATO} 24px); }
        .ticket-edge { background-image: radial-gradient(circle at left, transparent 6px, ${CREAM} 6px), radial-gradient(circle at right, transparent 6px, ${CREAM} 6px); background-position: left center, right center; background-repeat: repeat-y; background-size: 12px 24px; }
      `}</style>

      <header style={{ backgroundColor: CREAM }}>
        <div className="stripe-bg" style={{ height: 8 }} />
        <div className="text-center py-2 text-[11px] uppercase tracking-[0.4em]" style={{ backgroundColor: INK, color: MUSTARD, fontWeight: 700 }}>
          ★ GLENDALE · W LEXINGTON DR · DELI · SANDWICHES ★
        </div>
        <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-baseline gap-3">
            <div className="display-text text-3xl" style={{ color: TOMATO }}>CORNER</div>
            <div className="accent-text text-xl" style={{ color: PICKLE }}>sandwiches</div>
          </div>
          <div className="hidden md:flex items-center gap-7 text-xs uppercase tracking-[0.25em] font-bold" style={{ color: INK }}>
            <a href="#about">The Shop</a>
            <a href="#menu">Menu</a>
            <a href="#reviews">Reviews</a>
            <a href="#visit">Visit</a>
          </div>
          <a href={c.hero.ctaLink} className="display-text px-6 py-3 text-sm" style={{ backgroundColor: TOMATO, color: CREAM, transform: "rotate(-2deg)", display: "inline-block" }}>CALL →</a>
        </nav>
      </header>

      <section className="py-20 md:py-24 relative" style={{ backgroundColor: CREAM }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 fade-up">
            <div className="inline-block px-4 py-2 mb-6 transform rotate-[-2deg]" style={{ backgroundColor: MUSTARD }}>
              <div className="text-[10px] uppercase tracking-[0.4em] font-black" style={{ color: INK }}>{c.hero.eyebrow}</div>
            </div>
            <h1 className="display-text text-7xl md:text-[10rem] leading-[0.85] mb-3" style={{ color: TOMATO }}>
              {c.hero.heading}
            </h1>
            <div className="accent-text text-3xl md:text-4xl mb-7 transform rotate-[-1deg] inline-block" style={{ color: PICKLE }}>made the right way.</div>
            <p className="text-lg leading-[1.85] max-w-xl mb-10" style={{ color: INK, fontWeight: 400 }}>{c.hero.subheading}</p>
            <div className="flex flex-wrap items-center gap-8">
              <a href={c.hero.ctaLink} className="display-text px-10 py-5 text-xl inline-flex items-center gap-3" style={{ backgroundColor: INK, color: MUSTARD, transform: "rotate(-1deg)", display: "inline-block" }}>{c.hero.ctaText} →</a>
              <div>
                <div className="display-text text-3xl" style={{ color: TOMATO }}>★ 4.6 · 177</div>
                <div className="text-[10px] uppercase tracking-widest font-black mt-1" style={{ color: MUTED }}>reviews · downtown glendale</div>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 tilt">
            <div className="relative" style={{ transform: "rotate(-2deg)" }}>
              <div className="overflow-hidden" style={{ aspectRatio: "1/1", border: `6px solid ${INK}`, boxShadow: `12px 12px 0 ${TOMATO}` }}>
                <div className="w-full h-full" style={{ backgroundImage: `url("${HERO_PHOTO}")`, backgroundSize: "cover", backgroundPosition: "center" }} />
              </div>
              <div className="absolute -top-6 -left-6 px-4 py-2 transform rotate-[6deg]" style={{ backgroundColor: MUSTARD, border: `3px solid ${INK}` }}>
                <div className="display-text text-2xl" style={{ color: INK }}>FRESH</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24" style={{ backgroundColor: TOMATO }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <div className="inline-block px-4 py-2 mb-5 transform rotate-[-2deg]" style={{ backgroundColor: MUSTARD }}>
              <div className="text-[10px] uppercase tracking-[0.4em] font-black" style={{ color: INK }}>{c.about.label}</div>
            </div>
            <h2 className="display-text text-5xl md:text-7xl leading-[0.95]" style={{ color: CREAM }}>{c.about.heading}</h2>
            <div className="accent-text text-3xl mt-4" style={{ color: MUSTARD }}>since forever.</div>
          </div>
          <div className="md:col-span-7">
            <div className="space-y-5 text-lg leading-[1.85]" style={{ color: CREAM }}>
              {c.about.paragraphs.map((p: string, i: number) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-24" style={{ backgroundColor: SAND }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-2 mb-4 transform rotate-[-2deg]" style={{ backgroundColor: TOMATO }}>
              <div className="text-[10px] uppercase tracking-[0.4em] font-black" style={{ color: CREAM }}>★ MENU CARD ★</div>
            </div>
            <h2 className="display-text text-5xl md:text-7xl leading-tight" style={{ color: INK }}>The board.</h2>
          </div>
          <div className="space-y-1">
            {c.services.map((s: any, i: number) => (
              <article key={i} className="grid md:grid-cols-12 gap-4 items-center px-6 py-7" style={{ backgroundColor: i % 2 === 0 ? CREAM : SAND, border: `3px solid ${INK}`, boxShadow: i % 2 === 0 ? `4px 4px 0 ${TOMATO}` : `4px 4px 0 ${PICKLE}` }}>
                <div className="md:col-span-1 display-text text-3xl text-center" style={{ color: TOMATO }}>{String(i + 1).padStart(2, "0")}</div>
                <div className="md:col-span-7">
                  <div className="display-text text-2xl mb-1" style={{ color: INK }}>{s.title}</div>
                  <div className="text-sm leading-[1.7]" style={{ color: MUTED }}>{s.description}</div>
                </div>
                <div className="md:col-span-3 accent-text text-3xl text-right" style={{ color: PICKLE }}>{s.price}</div>
                <div className="md:col-span-1 text-right">
                  <span className="inline-block w-8 h-8" style={{ backgroundColor: MUSTARD, border: `2px solid ${INK}`, borderRadius: 999 }} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24" style={{ backgroundColor: INK }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-2 mb-4 transform rotate-[-2deg]" style={{ backgroundColor: MUSTARD }}>
              <div className="text-[10px] uppercase tracking-[0.4em] font-black" style={{ color: INK }}>★ 177 REVIEWS ★</div>
            </div>
            <h2 className="display-text text-5xl md:text-7xl leading-tight" style={{ color: CREAM }}>From the regulars.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {c.reviews.map((r: any, i: number) => (
              <figure key={i} className="p-8" style={{ backgroundColor: CREAM, border: `4px solid ${MUSTARD}`, transform: i === 1 ? "rotate(1.5deg)" : "rotate(-1.5deg)" }}>
                <div className="display-text text-6xl mb-2 leading-none" style={{ color: TOMATO }}>"</div>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, j) => <span key={j} style={{ color: TOMATO, fontSize: 24 }}>★</span>)}
                </div>
                <blockquote className="text-base leading-[1.8] mb-6" style={{ color: INK }}>{r.text}</blockquote>
                <figcaption className="pt-4" style={{ borderTop: `2px dashed ${INK}30` }}>
                  <div className="display-text text-xl" style={{ color: INK }}>{r.name}</div>
                  <div className="accent-text text-lg" style={{ color: PICKLE }}>{r.context}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="py-24" style={{ backgroundColor: MUSTARD }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-block px-4 py-2 mb-4 transform rotate-[-2deg]" style={{ backgroundColor: TOMATO }}>
              <div className="text-[10px] uppercase tracking-[0.4em] font-black" style={{ color: CREAM }}>★ DROP IN ★</div>
            </div>
            <h2 className="display-text text-5xl md:text-7xl leading-[0.95] mb-3" style={{ color: INK }}>On the corner.</h2>
            <div className="accent-text text-3xl mb-10" style={{ color: TOMATO }}>w lexington dr · glendale.</div>
            <dl className="space-y-6 mb-10">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.4em] mb-2 font-black" style={{ color: INK }}>★ ADDRESS</dt>
                <dd className="text-xl font-bold" style={{ color: INK }}>{c.contact.address}</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.4em] mb-2 font-black" style={{ color: INK }}>★ CALL</dt>
                <dd className="display-text text-4xl"><a href={`tel:${c.contact.phone.replace(/\D/g, "")}`} style={{ color: TOMATO }}>{c.contact.phone}</a></dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.4em] mb-2 font-black" style={{ color: INK }}>★ HOURS</dt>
                <dd>
                  <table className="text-sm" style={{ color: INK }}>
                    <tbody>
                      {Object.entries(c.contact.hours).map(([day, hours]) => (
                        <tr key={day}>
                          <td className="pr-8 py-1.5 uppercase tracking-wider font-black">{day}</td>
                          <td className="py-1.5 font-bold">{String(hours)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </dd>
              </div>
            </dl>
          </div>
          <div className="overflow-hidden" style={{ border: `6px solid ${INK}`, boxShadow: `12px 12px 0 ${TOMATO}`, minHeight: 460 }}>
            <iframe src={`https://maps.google.com/maps?output=embed&q=${encodeURIComponent(c.contact.mapEmbedQuery || c.contact.address)}`} width="100%" height="540" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      <footer className="py-14 text-center" style={{ backgroundColor: INK }}>
        <div className="display-text text-4xl mb-2" style={{ color: TOMATO }}>CORNER SANDWICHES</div>
        <div className="accent-text text-2xl" style={{ color: MUSTARD }}>★ fresh bread · piled high · glendale ★</div>
        <div className="text-[10px] uppercase tracking-[0.4em] mt-5 font-black opacity-60" style={{ color: CREAM }}>© {new Date().getFullYear()} corner sandwiches · w lexington dr</div>
        <div className="stripe-bg mt-8" style={{ height: 8 }} />
      </footer>
    </main>
  );
}
