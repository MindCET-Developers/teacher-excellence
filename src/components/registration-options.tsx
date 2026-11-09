import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const FORM_URL = "https://forms.gle/k4zaYmg2YFkDdNKt7";

export function RegistrationOptions() {
  return (
    <div className="mt-10 grid gap-5 text-right md:grid-cols-2">
      <MitzpenDialog />
      <HackathonOnlyDialog />
    </div>
  );
}

function MitzpenDialog() {
  return (
    <Dialog>
      <OptionCard
        badge="עם גמול השתלמות"
        badgeClass="bg-orange text-orange-foreground"
        title="מסלול מלא — השתלמות במצפן"
        text={'מסלול שנתי עם גמול 30 ש"ש: מפגשים, ליווי והאקתון בירוחם.'}
        cta="לרישום להשתלמות במצפן"
      >
        <DialogContent className="max-w-xl rounded-3xl border-2 border-navy/10 bg-card p-7 pt-12 sm:p-9 sm:pt-12">
          <DialogHeader className="items-start space-y-3 text-right sm:text-right">
            <DialogTitle className="text-2xl font-bold text-navy md:text-3xl">
              רישום להשתלמות במצפן
            </DialogTitle>
            <DialogDescription className="text-base leading-relaxed text-muted-foreground">
              ניתן להירשם לאחד מתוך 2 פתרונות למידה במצפן:
            </DialogDescription>
          </DialogHeader>

          <ul className="space-y-3">
            <li className="rounded-2xl border-2 border-navy/10 bg-cream p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-lg font-bold text-navy">ימי שלישי</span>
                <span className="rounded-full bg-purple px-3 py-1 text-xs font-bold text-purple-foreground">
                  פתרון למידה 201743
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                הפתרון כבר התחיל · המפגש הבא ב־24/11
              </p>
            </li>
            <li className="rounded-2xl border-2 border-navy/10 bg-cream p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-lg font-bold text-navy">ימי חמישי</span>
                <span className="rounded-full bg-purple px-3 py-1 text-xs font-bold text-purple-foreground">
                  פתרון למידה 207286
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">הפתרון מתחיל ב־19/11</p>
            </li>
          </ul>

          <p className="text-base leading-relaxed text-foreground/85">
            לצד הרישום במצפן, יש למלא את טופס הגשת המועמדות בקישור:
          </p>
          <FormLink />
        </DialogContent>
      </OptionCard>
    </Dialog>
  );
}

function HackathonOnlyDialog() {
  return (
    <Dialog>
      <OptionCard
        badge="ללא גמול השתלמות"
        badgeClass="bg-purple text-purple-foreground"
        title="האקתון בלבד"
        text="השתתפות בהאקתון בירוחם (1–2 בדצמבר) בלי קורס שנתי ובלי גמול השתלמות."
        cta="לרישום להאקתון בלבד"
      >
        <DialogContent className="max-w-xl rounded-3xl border-2 border-navy/10 bg-card p-7 pt-12 sm:p-9 sm:pt-12">
          <DialogHeader className="items-start space-y-3 text-right sm:text-right">
            <DialogTitle className="text-2xl font-bold text-navy md:text-3xl">
              האקתון בלבד — ללא גמול השתלמות
            </DialogTitle>
            <DialogDescription className="text-base leading-relaxed text-muted-foreground">
              יש אפשרות להשתתף בהאקתון עצמו, למי/ה שאינו/ה מעוניין/ת בגמול השתלמות.
            </DialogDescription>
          </DialogHeader>

          <ul className="space-y-3">
            <li className="flex items-start gap-3 rounded-2xl border-2 border-navy/10 bg-cream p-5">
              <span className="mt-0.5 shrink-0 font-bold text-orange">✓</span>
              <span className="text-base leading-relaxed text-foreground/85">
                יש למלא את טופס הגשת המועמדות — אותו טופס כמו במסלול המלא.
              </span>
            </li>
            <li className="flex items-start gap-3 rounded-2xl border-2 border-navy/10 bg-cream p-5">
              <span className="mt-0.5 shrink-0 font-bold text-orange">✓</span>
              <span className="text-base leading-relaxed text-foreground/85">
                יש להתחייב להשתתפות במפגש זום אחד לפני ההאקתון.
              </span>
            </li>
          </ul>

          <FormLink />
        </DialogContent>
      </OptionCard>
    </Dialog>
  );
}

function OptionCard({
  badge,
  badgeClass,
  title,
  text,
  cta,
  children,
}: {
  badge: string;
  badgeClass: string;
  title: string;
  text: string;
  cta: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex h-full flex-col rounded-3xl border border-navy-foreground/15 bg-navy-foreground/5 p-7">
        <span className={`tilt-tag w-fit rounded-md px-3 py-1 text-xs font-bold ${badgeClass}`}>
          {badge}
        </span>
        <h3 className="mt-4 text-2xl font-bold leading-tight">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-foreground/70">{text}</p>
        <DialogTrigger asChild>
          <button className="mt-6 w-full cursor-pointer rounded-full bg-orange px-6 py-3.5 text-base font-bold text-orange-foreground transition hover:-translate-y-0.5 hover:brightness-95">
            {cta}
          </button>
        </DialogTrigger>
      </div>
      {children}
    </>
  );
}

function FormLink() {
  return (
    <a
      href={FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full rounded-full bg-orange px-8 py-3.5 text-center text-base font-bold text-orange-foreground shadow-lg shadow-orange/30 transition hover:-translate-y-0.5 hover:brightness-95"
    >
      לטופס הגשת המועמדות
    </a>
  );
}
