"use client";

import { useEffect, useState } from "react";

function describeTenure(startDate: string, now: Date): string {
  const start = new Date(`${startDate}T00:00:00Z`);
  const end = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  let years = end.getUTCFullYear() - start.getUTCFullYear();
  let months = end.getUTCMonth() - start.getUTCMonth();
  let days = end.getUTCDate() - start.getUTCDate();
  if (days < 0) {
    months -= 1;
    days += new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), 0)).getUTCDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  const parts = [
    years > 0 ? `${years} ${years === 1 ? "year" : "years"}` : "",
    months > 0 ? `${months} ${months === 1 ? "month" : "months"}` : "",
    days > 0 || (years === 0 && months === 0) ? `${days} ${days === 1 ? "day" : "days"}` : "",
  ].filter(Boolean);
  return `${parts.join(", ")} and counting`;
}

export function LiveTenure({ startedOn }: { startedOn: string }) {
  const [label, setLabel] = useState("Current");
  useEffect(() => {
    const refresh = () => setLabel(describeTenure(startedOn, new Date()));
    refresh();
    const timer = window.setInterval(refresh, 1_000);
    return () => window.clearInterval(timer);
  }, [startedOn]);
  return <span>{label}</span>;
}

function formatExperience(startedOn: string, now: Date): string {
  const start = new Date(`${startedOn}T00:00:00`);
  let months = (now.getFullYear() - start.getFullYear()) * 12 + now.getMonth() - start.getMonth();
  const anchor = new Date(start);
  anchor.setMonth(anchor.getMonth() + months);
  if (anchor > now) {
    months -= 1;
    anchor.setMonth(anchor.getMonth() - 1);
  }
  const years = Math.floor(months / 12);
  const remainderMonths = months % 12;
  let remaining = Math.max(0, now.getTime() - anchor.getTime());
  const days = Math.floor(remaining / 86_400_000);
  remaining -= days * 86_400_000;
  const hours = Math.floor(remaining / 3_600_000);
  remaining -= hours * 3_600_000;
  const minutes = Math.floor(remaining / 60_000);
  const seconds = Math.floor((remaining % 60_000) / 1_000);
  return `${years}y ${remainderMonths}m ${days}d ${String(hours).padStart(2, "0")}h ${String(minutes).padStart(2, "0")}m ${String(seconds).padStart(2, "0")}s`;
}

export function LiveExperience({ startedOn }: { startedOn: string }) {
  const [label, setLabel] = useState("Calculating…");
  useEffect(() => {
    const refresh = () => setLabel(formatExperience(startedOn, new Date()));
    refresh();
    const timer = window.setInterval(refresh, 1_000);
    return () => window.clearInterval(timer);
  }, [startedOn]);
  return <span>{label}</span>;
}
