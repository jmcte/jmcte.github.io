"use client";

import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  BookOpen,
  Database,
  Globe,
  Layers,
  Mail,
  Server,
  Shield,
  Sparkles,
  WandSparkles,
  Workflow
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type IconCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  animation: string;
  delayClass?: string;
};

type PortfolioItem = {
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
};

type Highlight = {
  label: string;
  detail: string;
  icon: LucideIcon;
};

const heroSignals: IconCard[] = [
  {
    title: "Practical systems",
    description: "Lean foundations that let teams move with confidence.",
    icon: Database,
    animation: "icon-orbit"
  },
  {
    title: "Platform trust",
    description: "Reliability and automation that respect attention.",
    icon: Shield,
    animation: "icon-pulse"
  },
  {
    title: "Global reach",
    description: "Infrastructure that scales calmly as impact grows.",
    icon: Globe,
    animation: "icon-float"
  },
  {
    title: "Product craft",
    description: "Delightful workflows built for real operators.",
    icon: WandSparkles,
    animation: "icon-float"
  }
];

const focusAreas: IconCard[] = [
  {
    title: "Product strategy and execution",
    description: "Clear roadmaps, tight feedback loops, and outcomes that matter.",
    icon: Layers,
    animation: "icon-float",
    delayClass: "reveal-delay-1"
  },
  {
    title: "Developer tooling and platforms",
    description: "Reduce friction with composable tooling and paved paths.",
    icon: Workflow,
    animation: "icon-orbit",
    delayClass: "reveal-delay-2"
  },
  {
    title: "Cloud infrastructure and automation",
    description: "Reliable systems built for scale, safety, and operational ease.",
    icon: Server,
    animation: "icon-pulse",
    delayClass: "reveal-delay-3"
  }
];

const currentHighlights: Highlight[] = [
  {
    label: "Lean teams",
    detail: "Small squads, clear ownership, measurable outcomes.",
    icon: Sparkles
  },
  {
    label: "Operational clarity",
    detail: "Runbooks, automation, and platforms that scale calmly.",
    icon: Shield
  },
  {
    label: "Developer velocity",
    detail: "Thoughtful tooling and platforms that remove friction.",
    icon: Workflow
  }
];

const portfolio: PortfolioItem[] = [
  {
    title: "Portfolio operating system",
    description:
      "Bootstrapped a lean platform for managing experiments, shipping faster than a managed suite while keeping reliability front and center.",
    tags: ["platform", "experiments", "reliability"],
    icon: Server
  },
  {
    title: "Geo-aware services",
    description:
      "Built a calm, globally-available service mesh with sane defaults and escape hatches, balancing developer speed with observability.",
    tags: ["infrastructure", "observability", "DX"],
    icon: Globe
  },
  {
    title: "Guided onboarding",
    description:
      "Designed a narrative onboarding flow for new teams that mixed docs, small wins, and a few intentional rough edges to invite collaboration.",
    tags: ["product", "onboarding", "craft"],
    icon: BookOpen
  }
];

const actionCards = [
  {
    title: "Resume",
    description: "Detailed leadership experience and measurable outcomes.",
    primary: {
      label: "View resume",
      href: "/resume.html",
      icon: BookOpen
    },
    secondary: [
      { label: "Download PDF", href: "/resume.pdf" },
      { label: "Download Markdown", href: "/resume.md" }
    ]
  },
  {
    title: "Contact",
    description:
      "Reach out for collaborations, advisory work, or platform strategy.",
    primary: {
      label: "Email John",
      href: "mailto:john.m.teneyck@gmail.com",
      icon: Mail
    },
    secondary: []
  }
];

export default function Home() {
  const [showActions, setShowActions] = useState(false);
  const actionsRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (showActions && actionsRef.current) {
      actionsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [showActions]);

  const handleActionClick = () => {
    setShowActions(true);
  };

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

      <main className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16 lg:py-24">
        <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <Badge className="w-fit">JMCTE</Badge>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                John McChesney TenEyck Jr.
              </h1>
              <p className="max-w-xl text-lg text-muted-foreground">
                Builder and operator focused on practical systems, product
                craftsmanship, and reliable infrastructure.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" onClick={handleActionClick}>
                View resume
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={handleActionClick}>
                Email John
                <Mail className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4 icon-float" />
              <span>Steady focus on outcomes, uptime, and craft.</span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {heroSignals.map((signal) => {
              const Icon = signal.icon;
              return (
                <Card key={signal.title} className="reveal reveal-delay-1">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
                        <Icon className={`h-6 w-6 ${signal.animation}`} />
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <CardTitle>{signal.title}</CardTitle>
                    <CardDescription>{signal.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Focus</h2>
            <span className="text-sm text-muted-foreground">2025 priorities</span>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <Card
                  key={area.title}
                  className={cn("reveal", area.delayClass)}
                >
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent ring-1 ring-accent/20">
                      <Icon className={`h-6 w-6 ${area.animation}`} />
                    </div>
                    <CardTitle>{area.title}</CardTitle>
                    <CardDescription>{area.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Currently</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                Working on software that is fast, dependable, and respectful of
                people's time. I like lean teams, clear goals, and measurable
                outcomes, but I also enjoy the messy bits: the scribbles in the
                margins, the imperfect dashboards, the candid post-mortems that
                make the next launch lighter.
              </p>
              <p>
                Lately I have been pairing with founders, running small
                experiments, and carving out paved paths so teams can ship with
                less ceremony. On good days I end up with a practical checklist
                and a funny git commit message that reminds us to keep some
                personality in the work.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <Card className="reveal">
                <CardContent className="space-y-2 pt-4 text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground">What I am testing</p>
                  <p>
                    Fast feedback loops with teams across time zones, mixing
                    async rituals with short bursts of focused pairing.
                  </p>
                </CardContent>
              </Card>
              <Card className="reveal reveal-delay-1">
                <CardContent className="space-y-2 pt-4 text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground">What I am learning</p>
                  <p>
                    That a little friction can be healthy: rough drafts, honest
                    check-ins, and a playlist playing quietly in the background.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="reveal reveal-delay-2">
            <CardHeader>
              <CardTitle>Operating rhythm</CardTitle>
              <CardDescription>
                Focused on clarity, trust, and durable delivery.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {currentHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-muted text-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-sans text-sm font-semibold">
                        {item.label}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </section>

        <section
          ref={actionsRef}
          className={cn(
            "grid gap-6 transition-all",
            showActions ? "lg:grid-cols-2" : "max-h-0 overflow-hidden opacity-0"
          )}
          aria-live="polite"
        >
          {actionCards.map((card, index) => {
            const PrimaryIcon = card.primary.icon;
            return (
              <Card
                key={card.title}
                className={cn("reveal", index === 0 ? "reveal-delay-1" : "reveal-delay-2")}
              >
                <CardHeader>
                  <CardTitle>{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-3">
                  <Button asChild>
                    <a href={card.primary.href}>
                      {card.primary.label}
                      <PrimaryIcon className="h-4 w-4" />
                    </a>
                  </Button>
                  {card.secondary.map((item) => (
                    <Button key={item.label} asChild variant="outline">
                      <a href={item.href}>{item.label}</a>
                    </Button>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Portfolio</h2>
            <span className="text-sm text-muted-foreground">A few favorites</span>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {portfolio.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className={cn("reveal", idx === 1 ? "reveal-delay-1" : idx === 2 ? "reveal-delay-2" : "")}
                >
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">More about me</h2>
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-3 text-muted-foreground">
              <p>
                I grew up debugging neighborhood networks, wiring tiny servers to
                coaxed-together routers, and running LAN parties that probably
                pushed the power bill higher than my allowance. That curiosity
                never really stopped.
              </p>
              <p>
                These days I split time between building systems, coaching teams,
                and writing about the small, human choices that make big
                infrastructure feel friendly. If we work together, you will hear
                me talk about uptime and incident reviews, but also about walks,
                coffee rituals, and the playlists that keep the team steady.
              </p>
            </div>
            <Card className="reveal">
              <CardContent className="space-y-2 pt-4 text-sm text-muted-foreground">
                <p className="font-semibold text-foreground">Outside the laptop</p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Trail runs with a pocket notebook for stray ideas.</li>
                  <li>Field-recording sounds that sometimes sneak into demos.</li>
                  <li>Restoring old mechanical keyboards one stubborn spring at a time.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <footer className="flex items-center justify-between border-t border-border/60 pt-6 text-sm text-muted-foreground">
          <span>JMCTE</span>
          <span>Built with Next.js, shadcn/ui, and lucide icons.</span>
        </footer>
      </main>
    </div>
  );
}
