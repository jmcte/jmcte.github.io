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

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

type IconCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  animation: string;
  delayClass?: string;
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
              <Button asChild size="lg">
                <a href="/resume.html">
                  View resume
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="mailto:john.m.teneyck@gmail.com">
                  Email John
                  <Mail className="h-4 w-4" />
                </a>
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
                  className={`reveal ${area.delayClass ?? \"\"}`.trim()}
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
            <p className="text-muted-foreground">
              Working on software that is fast, dependable, and respectful of
              people's time. I like lean teams, clear goals, and measurable
              outcomes.
            </p>
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

        <section className="grid gap-6 lg:grid-cols-2">
          <Card className="reveal reveal-delay-1">
            <CardHeader>
              <CardTitle>Resume</CardTitle>
              <CardDescription>
                Detailed leadership experience and measurable outcomes.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Button asChild>
                <a href="/resume.html">
                  View resume
                  <BookOpen className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="/resume.pdf">Download PDF</a>
              </Button>
              <Button asChild variant="outline">
                <a href="/resume.md">Download Markdown</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="reveal reveal-delay-2">
            <CardHeader>
              <CardTitle>Contact</CardTitle>
              <CardDescription>
                Reach out for collaborations, advisory work, or platform strategy.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-muted/50 p-4">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a className="font-sans text-sm font-semibold" href="mailto:john.m.teneyck@gmail.com">
                    john.m.teneyck@gmail.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <footer className="flex items-center justify-between border-t border-border/60 pt-6 text-sm text-muted-foreground">
          <span>JMCTE</span>
          <span>Built with Next.js, shadcn/ui, and lucide icons.</span>
        </footer>
      </main>
    </div>
  );
}
