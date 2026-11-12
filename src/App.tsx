import teachersImg from "@/assets/teachers-collab.jpg";
import mindcetLogo from "@/assets/mindcet-logo-labs.png";
import trumpLogo from "@/assets/logo-trump.svg";
import { RegistrationOptions } from "@/components/registration-options";
import { useEffect, useState } from "react";
import { dicts, LangContext, type Lang } from "@/lib/i18n";

const HE_TITLE = "מהכיתה למעבדה: חוסן, מצוינות ו־Vibe Coding | Mindcet";
const AR_TITLE = "من الصف إلى المختبر: المناعة النفسية، التميّز وVibe Coding | Mindcet";

export default function LandingPage() {
  const [lang, setLang] = useState<Lang>(() =>
    new URLSearchParams(window.location.search).get("lang") === "ar" ? "ar" : "he",
  );
  const t = dicts[lang];
  useEffect(() => {
    document.documentElement.lang = lang;
    const title = lang === "ar" ? AR_TITLE : HE_TITLE;
    document.title = title;
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
    const url = new URL(window.location.href);
    if (lang === "ar") url.searchParams.set("lang", "ar");
    else url.searchParams.delete("lang");
    window.history.replaceState(null, "", url);
  }, [lang]);
  return (
    <LangContext.Provider value={t}>
    <div dir="rtl" className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-5">
            <Logo />
            <span className="hidden h-8 w-px bg-border sm:block" />
            <TrumpFoundation />
          </div>
          <div className="flex items-center gap-3">
          <div className="flex rounded-full border-2 border-navy p-0.5 text-sm font-bold" role="group" aria-label="Language">
            {(["he", "ar"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`rounded-full px-3 py-1 transition ${lang === l ? "bg-navy text-navy-foreground" : "text-navy"}`}
              >
                {l === "he" ? "עברית" : "العربية"}
              </button>
            ))}
          </div>
          <a
            href="#register"
            className="hidden rounded-full bg-orange px-6 py-2.5 text-sm font-bold text-orange-foreground transition hover:brightness-95 md:inline-flex"
          >
            {t.moreInfo}
          </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 bg-grid opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
        <div className="pointer-events-none absolute -left-10 -top-6 hidden h-36 w-60 -rotate-6 rounded-3xl bg-orange lg:block" />
        

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-10 md:grid-cols-12 md:pt-16">
          <div className="relative z-10 md:col-span-7">
            <div className="mb-5">
              <span className="tilt-tag rounded-md bg-navy px-4 py-2 text-base font-bold text-navy-foreground md:text-lg">
                {t.tag}
              </span>
            </div>
            <h1 className="text-4xl font-bold leading-[1.05] text-navy md:text-6xl lg:text-7xl">
              {t.h1a}
              <br />
              {t.h1b}<span className="text-purple">Vibe Coding</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
{t.hero}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://forms.gle/k4zaYmg2YFkDdNKt7"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-orange px-8 py-4 text-base font-bold text-orange-foreground shadow-lg shadow-orange/30 transition hover:-translate-y-0.5 hover:brightness-95"
            >
              {t.apply}
            </a>
              <a
                href="#program"
                className="rounded-full border-2 border-navy px-8 py-4 text-base font-bold text-navy transition hover:bg-navy hover:text-navy-foreground"
              >
{t.why}
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-muted-foreground">
              {t.meta.map((m) => <span key={m}>{m}</span>)}
            </div>
          </div>

          <div className="relative md:col-span-5">
            <div className="absolute -inset-4 -rotate-2 rounded-3xl bg-purple/80" />
            <img
              src={teachersImg}
              alt={t.imgAlt}
              width={1280}
              height={896}
              className="relative aspect-[5/6] w-full rounded-3xl object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-navy px-5 py-4 text-navy-foreground shadow-xl md:block tilt-tag-r">
              <div className="text-xs opacity-80">{t.partner}</div>
              <div className="text-sm font-bold">{t.partnerName}</div>
            </div>
          </div>
        </div>
      </section>

      {/* OPENING / SEL HOOK */}
      <section className="bg-cream py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-12 md:items-center">
          <div className="md:col-span-6">
            <div className="rotate-[-2deg] rounded-3xl bg-purple px-8 py-10 text-purple-foreground shadow-xl md:px-10 md:py-12">
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
{t.selQ}
              </h2>
            </div>
          </div>
          <div className="md:col-span-6">
            <p className="text-lg leading-relaxed text-foreground/80">
{t.sel1}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-foreground/80">
{t.sel2}
            </p>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section id="program" className="relative py-24">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <span className="tilt-tag rounded-md bg-navy px-4 py-1.5 text-sm font-bold text-navy-foreground">
{t.getTag}
            </span>
            <h2 className="mt-4 text-4xl font-bold text-navy md:text-5xl">
{t.getH1}<br />{t.getH2}
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {t.benefits.map((b, i) => (
              <article
                key={b.title}
                className="group relative overflow-hidden rounded-3xl border-2 border-navy/10 bg-card p-7 transition hover:-translate-y-1 hover:border-navy/30 hover:shadow-xl"
              >
                <div
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-2xl font-bold ${
                    i % 3 === 0
                      ? "bg-orange text-orange-foreground"
                      : i % 3 === 1
                        ? "bg-purple text-purple-foreground"
                        : "bg-navy text-navy-foreground"
                  }`}
                >
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-navy">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="bg-navy py-24 text-navy-foreground">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <span className="tilt-tag rounded-md bg-orange px-4 py-1.5 text-sm font-bold text-orange-foreground">
{t.audTag}
              </span>
              <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
{t.audH}
              </h2>
              <p className="mt-5 text-lg text-navy-foreground/70">
{t.audP}
              </p>
            </div>
            <div className="md:col-span-7">
              <ul className="grid gap-3 sm:grid-cols-2">
                {t.audience.map((a) => (
                  <li
                    key={a}
                    className="flex items-center gap-3 rounded-2xl border border-navy-foreground/15 bg-navy-foreground/5 px-5 py-4 text-base font-medium"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-orange" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* REQUIREMENTS + GOOD TO KNOW */}
      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
          <div className="rounded-3xl bg-purple p-10 text-purple-foreground">
            <h3 className="text-3xl font-bold">{t.reqH}</h3>
            <ul className="mt-6 space-y-4 text-base leading-relaxed">
              {t.req.map((r) => (
                <li key={r} className="flex gap-3">
                  <span className="text-xl">→</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border-2 border-navy bg-cream p-10">
            <h3 className="text-3xl font-bold text-navy">{t.knowH}</h3>
            <ul className="mt-6 space-y-4 text-base leading-relaxed text-foreground/85">
              {t.know.map((k) => (
                <li key={k} className="flex gap-3">
                  <span className="font-bold text-orange">✓</span>
                  {k}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="register" className="relative overflow-hidden pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-navy px-8 py-16 text-center text-navy-foreground md:px-16 md:py-20">
            <div className="absolute -right-10 -top-10 h-40 w-40 rotate-12 rounded-3xl bg-orange/90" />
            <div className="absolute -bottom-8 -left-8 h-32 w-32 -rotate-6 rounded-2xl bg-purple/90" />
            <div className="relative">
              <h2 className="text-4xl font-bold md:text-5xl">
{t.ctaH}
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-navy-foreground/80">
{t.ctaP}
              </p>
              <RegistrationOptions />

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:rachel@mindcet.io"
                  className="rounded-full border-2 border-navy-foreground/40 px-10 py-4 text-base font-bold text-navy-foreground transition hover:bg-navy-foreground/10"
                >
                  rachel@mindcet.io
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-cream py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <div className="flex items-center gap-6">
            <Logo />
            <TrumpFoundation />
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {t.footer}
          </p>
        </div>
      </footer>
    </div>
    </LangContext.Provider>
  );
}

function Logo() {
  return (
    <img
      src={mindcetLogo}
      alt="MindCET Labs"
      width={1418}
      height={524}
      className="h-8 w-auto md:h-9"
    />
  );
}

function TrumpFoundation() {
  return (
    <img
      src={trumpLogo}
      alt="Trump Family Foundation"
      width={84}
      height={50}
      className="h-10 w-auto md:h-12"
    />
  );
}
