import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useT } from "@/lib/i18n";

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
  const t = useT();
  return (
    <Dialog>
      <OptionCard
        badge={t.mBadge}
        badgeClass="bg-orange text-orange-foreground"
        title={t.mTitle}
        text={t.mText}
        cta={t.mCta}
      >
        <DialogContent className="max-w-xl rounded-3xl border-2 border-navy/10 bg-card p-7 pt-12 sm:p-9 sm:pt-12">
          <DialogHeader className="items-start space-y-3 text-right sm:text-right">
            <DialogTitle className="text-2xl font-bold text-navy md:text-3xl">
{t.mDlgTitle}
            </DialogTitle>
            <DialogDescription className="text-base leading-relaxed text-muted-foreground">
              {t.mDlgDesc}
            </DialogDescription>
          </DialogHeader>

          <ul className="space-y-3">
            <li className="rounded-2xl border-2 border-navy/10 bg-cream p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-lg font-bold text-navy">{t.tue}</span>
                <span className="rounded-full bg-purple px-3 py-1 text-xs font-bold text-purple-foreground">
{t.solution} 201743
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {t.tueNote}
              </p>
            </li>
            <li className="rounded-2xl border-2 border-navy/10 bg-cream p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-lg font-bold text-navy">{t.thu}</span>
                <span className="rounded-full bg-purple px-3 py-1 text-xs font-bold text-purple-foreground">
{t.solution} 207286
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{t.thuNote}</p>
            </li>
            <li className="rounded-2xl border-2 border-navy/10 bg-cream p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-lg font-bold text-navy">{t.musTitle}</span>
                <span className="rounded-full bg-purple px-3 py-1 text-xs font-bold text-purple-foreground">
{t.solution} 207286
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {t.musNote} <span dir="ltr">16:00-18:30</span>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {t.musSched.map(([d, txt], i) => (
                  <span key={i}>
                    {i > 0 && " · "}
                    {d && <><span dir="ltr">{d}</span> </>}
                    {txt}
                  </span>
                ))}
              </p>
            </li>
          </ul>

          <p className="text-base leading-relaxed text-foreground/85">
            {t.mFormNote}
          </p>
          <FormLink />
        </DialogContent>
      </OptionCard>
    </Dialog>
  );
}

function HackathonOnlyDialog() {
  const t = useT();
  return (
    <Dialog>
      <OptionCard
        badge={t.hBadge}
        badgeClass="bg-purple text-purple-foreground"
        title={t.hTitle}
        text={t.hText}
        cta={t.hCta}
      >
        <DialogContent className="max-w-xl rounded-3xl border-2 border-navy/10 bg-card p-7 pt-12 sm:p-9 sm:pt-12">
          <DialogHeader className="items-start space-y-3 text-right sm:text-right">
            <DialogTitle className="text-2xl font-bold text-navy md:text-3xl">
              {t.hDlgTitle}
            </DialogTitle>
            <DialogDescription className="text-base leading-relaxed text-muted-foreground">
              {t.hDlgDesc}
            </DialogDescription>
          </DialogHeader>

          <ul className="space-y-3">
            <li className="flex items-start gap-3 rounded-2xl border-2 border-navy/10 bg-cream p-5">
              <span className="mt-0.5 shrink-0 font-bold text-orange">✓</span>
              <span className="text-base leading-relaxed text-foreground/85">
                {t.hReq[0]}
              </span>
            </li>
            <li className="flex items-start gap-3 rounded-2xl border-2 border-navy/10 bg-cream p-5">
              <span className="mt-0.5 shrink-0 font-bold text-orange">✓</span>
              <span className="text-base leading-relaxed text-foreground/85">
                {t.hReq[1]}
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
  const t = useT();
  return (
    <a
      href={FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full rounded-full bg-orange px-8 py-3.5 text-center text-base font-bold text-orange-foreground shadow-lg shadow-orange/30 transition hover:-translate-y-0.5 hover:brightness-95"
    >
      {t.formLink}
    </a>
  );
}
