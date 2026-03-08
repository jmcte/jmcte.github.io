"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink, Shield } from "lucide-react";
import { useEffect } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

const destination = "https://jmcte.me/";

export function RedirectNotice() {
  useEffect(() => {
    window.location.replace(destination);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-thread opacity-40"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-[-12rem] h-80 bg-gradient-to-b from-amber-200/70 via-rose-100/50 to-transparent blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-[-10rem] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-tr from-teal-200/70 via-emerald-100/50 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-screen max-w-3xl items-center px-6 py-16">
        <Card className="w-full border-border/80 bg-card/95 backdrop-blur">
          <CardHeader className="space-y-4">
            <Badge className="w-fit">Primary site</Badge>
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                <Shield className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="space-y-2">
                <CardTitle className="text-3xl sm:text-4xl">
                  Redirecting to jmcte.me
                </CardTitle>
                <CardDescription className="max-w-xl text-base">
                  jmcte.github.io is no longer maintained as a separate site.
                  The current public profile and portfolio now live at the
                  primary jmcte.me domain.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-sm text-muted-foreground" aria-live="polite">
              You should be forwarded automatically. If not, use the primary
              site link below.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={destination}>
                  Open jmcte.me
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={`${destination}about`}>
                  View background
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
