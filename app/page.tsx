import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, FileText, Globe, Mail } from "lucide-react";

type ContactLink = {
  label: string;
  description: string;
  href: string;
  icon: LucideIcon;
  delayClass: string;
  newTab?: boolean;
};

const contactLinks: ContactLink[] = [
  {
    label: "LinkedIn",
    description: "linkedin.com/in/johnmteneyckjr",
    href: "https://www.linkedin.com/in/johnmteneyckjr/",
    icon: Globe,
    delayClass: "reveal",
    newTab: true
  },
  {
    label: "Email",
    description: "john.m.teneyck@gmail.com",
    href: "mailto:john.m.teneyck@gmail.com",
    icon: Mail,
    delayClass: "reveal reveal-delay-1"
  },
  {
    label: "Resume",
    description: "Full resume (HTML)",
    href: "/resume.html",
    icon: FileText,
    delayClass: "reveal reveal-delay-2"
  }
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-thread opacity-40"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-32 right-[-10%] h-80 w-80 rounded-full bg-gradient-to-tr from-amber-200 via-rose-200 to-transparent opacity-70 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-[-15%] left-[-10%] h-96 w-96 rounded-full bg-gradient-to-tr from-teal-200 via-emerald-100 to-transparent opacity-60 blur-3xl"
        aria-hidden="true"
      />

      <main className="relative mx-auto flex max-w-3xl flex-col gap-12 px-6 py-16 lg:py-24">
        <header className="space-y-6">
          <span className="w-fit rounded-full border border-border/60 bg-card px-4 py-1 text-xs uppercase tracking-[0.35em] text-muted-foreground">
            JMCTE
          </span>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              John McChesney TenEyck Jr.
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground">
              Builder and operator focused on practical systems, product
              craftsmanship, and reliable infrastructure.
            </p>
          </div>
        </header>

        <section className="grid gap-4">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`${link.delayClass} group flex items-center justify-between gap-6 rounded-3xl border border-border/70 bg-card/80 px-6 py-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card`}
                {...(link.newTab
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20 transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-base font-semibold text-foreground">
                      {link.label}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {link.description}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-foreground" />
              </a>
            );
          })}
        </section>
      </main>
    </div>
  );
}
