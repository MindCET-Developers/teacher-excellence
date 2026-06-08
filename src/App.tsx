import teachersImg from "@/assets/teachers-collab.jpg";
import mindcetLogo from "@/assets/mindcet-logo.png";
import trumpLogo from "@/assets/logo-trump.svg";

export default function LandingPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-5">
            <Logo />
            <span className="hidden h-8 w-px bg-border sm:block" />
            <TrumpFoundation />
          </div>
          <a
            href="#register"
            className="hidden rounded-full bg-orange px-6 py-2.5 text-sm font-bold text-orange-foreground transition hover:brightness-95 md:inline-flex"
          >
            לפרטים נוספים
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 bg-grid opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
        <div className="pointer-events-none absolute -left-10 -top-6 hidden h-36 w-60 -rotate-6 rounded-3xl bg-orange lg:block" />
        <div className="pointer-events-none absolute right-[2%] bottom-10 hidden h-28 w-48 rotate-3 rounded-2xl bg-purple lg:block" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-10 md:grid-cols-12 md:pt-16">
          <div className="relative z-10 md:col-span-7">
            <div className="mb-5">
              <span className="tilt-tag rounded-md bg-navy px-4 py-2 text-base font-bold text-navy-foreground md:text-lg">
                מהכיתה למעבדה
              </span>
            </div>
            <h1 className="text-4xl font-bold leading-[1.05] text-navy md:text-6xl lg:text-7xl">
              חוסן, מצוינות
              <br />
              ו־<span className="text-purple">Vibe Coding</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              תוכנית למורות ולמורים יוצרים — לפיתוח פתרונות רגשיים־חברתיים
              לכיתות מצוינות, באמצעות כלי AI מתקדמים ו־Vibe Coding.
              ללא צורך בידע קודם בתכנות.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://forms.gle/k4zaYmg2YFkDdNKt7"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-orange px-8 py-4 text-base font-bold text-orange-foreground shadow-lg shadow-orange/30 transition hover:-translate-y-0.5 hover:brightness-95"
            >
              להגשת מועמדות
            </a>
              <a
                href="#program"
                className="rounded-full border-2 border-navy px-8 py-4 text-base font-bold text-navy transition hover:bg-navy hover:text-navy-foreground"
              >
                למה כדאי להצטרף
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-muted-foreground">
              <span>📅 ספטמבר–יוני תשפ"ז</span>
              <span>👥 100 משתתפים בלבד</span>
              <span>🎓 גמול 30 ש"ש</span>
            </div>
          </div>

          <div className="relative md:col-span-5">
            <div className="absolute -inset-4 -rotate-2 rounded-3xl bg-purple/80" />
            <img
              src={teachersImg}
              alt="מורים יוצרים יחד בכיתה"
              width={1280}
              height={896}
              className="relative aspect-[5/6] w-full rounded-3xl object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-navy px-5 py-4 text-navy-foreground shadow-xl md:block tilt-tag-r">
              <div className="text-xs opacity-80">בשיתוף</div>
              <div className="text-sm font-bold">MindCET × קרן טראמפ</div>
            </div>
          </div>
        </div>
      </section>

      {/* OPENING / SEL HOOK */}
      <section className="bg-cream py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-12 md:items-center">
          <div className="md:col-span-5">
            <div className="inline-block rotate-[-3deg] rounded-2xl bg-purple px-8 py-6 text-purple-foreground shadow-xl">
              <div className="text-6xl font-bold md:text-7xl">SEL?</div>
            </div>
          </div>
          <div className="md:col-span-7">
            <h2 className="text-3xl font-bold leading-tight text-navy md:text-4xl">
              מה עולה לכם לראש כשאתם שומעים את המושג SEL?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-foreground/80">
              סביר להניח שלא תלמידי כיתות מצוינות. אבל כל מי שמלמד בכיתות
              מצוינות יודע: מאחורי ההישגים מסתתרים לעתים קרובות חוויית
              לחץ, חרדה, שחיקה ותחושת בדידות.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-foreground/80">
              אלה אתגרים שצומחים דווקא מהציפיות הגבוהות — ועדיין, לעתים רחוקות
              נבנים פתרונות מתוך היכרות אמיתית של המורים עם השטח.
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
              מה תקבלו
            </span>
            <h2 className="mt-4 text-4xl font-bold text-navy md:text-5xl">
              הצטרפות לקהילת מורי ומורות
              <br />
              מצוינות מובילים מכל הארץ
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
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
                למי מיועדת
              </span>
              <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
                מורים ומורות המלמדים בכיתות מצוינות, ז'–י"ב
              </h2>
              <p className="mt-5 text-lg text-navy-foreground/70">
                אם אתם מלמדים באחד מהמסלולים הבאים, התוכנית בנויה בשבילכם.
              </p>
            </div>
            <div className="md:col-span-7">
              <ul className="grid gap-3 sm:grid-cols-2">
                {audience.map((a) => (
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
            <h3 className="text-3xl font-bold">מה זה דורש?</h3>
            <ul className="mt-6 space-y-4 text-base leading-relaxed">
              <li className="flex gap-3">
                <span className="text-xl">→</span>
                השתתפות במפגשים לאורך השנה: שבעה מפגשים פנים אל פנים,
                האקתון יומיים בירוחם, מפגשי זום וליווי פרטני.
              </li>
              <li className="flex gap-3">
                <span className="text-xl">→</span>
                נכונות להתנסות, ליצור ולפתח רעיונות חדשים.
              </li>
              <li className="flex gap-3">
                <span className="text-xl">→</span>
                רצון להשפיע על החוסן והרווחה של תלמידי המצוינות.
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border-2 border-navy bg-cream p-10">
            <h3 className="text-3xl font-bold text-navy">חשוב לדעת</h3>
            <ul className="mt-6 space-y-4 text-base leading-relaxed text-foreground/85">
              <li className="flex gap-3">
                <span className="font-bold text-orange">✓</span>
                ההשתתפות ללא עלות, למעט דמי רישום במצפן.
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-orange">✓</span>
                כולל לינה וארוחות במסגרת ההאקתון.
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-orange">✓</span>
                מספר המקומות מוגבל — 100 משתתפים בלבד.
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-orange">✓</span>
                הגשת מועמדות עד 30.6.26.
              </li>
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
                מוכנים להפוך את הכיתה למעבדה?
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-navy-foreground/80">
                הצטרפו למחזור הראשון של מורות ומורי המצוינות שיבנו בעצמם
                את הכלים הדיגיטליים של המחר.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://forms.gle/k4zaYmg2YFkDdNKt7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-orange px-10 py-4 text-base font-bold text-orange-foreground shadow-xl transition hover:-translate-y-0.5 hover:brightness-95"
                >
                  להגשת מועמדות
                </a>
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
            © {new Date().getFullYear()} MindCET · בשיתוף קרן טראמפ
          </p>
        </div>
      </footer>
    </div>
  );
}

const benefits = [
  { title: "הכשרה מעשית ב־AI וב־Vibe Coding", desc: "כלים מתקדמים שמאפשרים לכם לפתח פתרונות אמיתיים ללא קוד." },
  { title: "ליווי מומחים", desc: "טכנו־פדגוגיה, SEL וחדשנות חינוכית לאורך כל הדרך." },
  { title: "האקתון יומיים בירוחם", desc: "במתחם החדשנות של MindCET — בנייה אינטנסיבית בקבוצות." },
  { title: "כלי Design Thinking", desc: "מתודולוגיות מעולמות הסטארטאפים, מותאמות לחינוך." },
  { title: "ליווי בפיתוח ובדיקה", desc: "פיתוח, ניסוי ו־Testing של הכלי ישירות בכיתה שלכם." },
  { title: 'גמול השתלמות 30 ש"ש', desc: "הכרה רשמית במלוא היקף ההשתתפות והלמידה." },
];

const audience = [
  '5 יח"ל מתמטיקה',
  "פיזיקה",
  "מדעי המחשב",
  "בגרות הייטק",
  "מרכזי מצטיינים ומחוננים",
  'כיתות עמ"ט ונחשון',
];

function Logo() {
  return (
    <img
      src={mindcetLogo}
      alt="MindCET"
      width={140}
      height={42}
      className="h-9 w-auto md:h-10"
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
