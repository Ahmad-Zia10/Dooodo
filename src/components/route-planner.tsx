"use client";

import Link from "next/link";
import { useState } from "react";
import { routes, type Leg } from "@/content/routes";
import { LineBullet } from "./line-bullet";
import { Arrow } from "./ui";

const lineName = { ai: "AI line", erp: "Oracle ERP line" } as const;

function changeNote(prev: Leg | undefined, leg: Leg) {
  if (!prev || prev.on === leg.on) return null;
  if (leg.on === "both") return "Interchange: both practices on one platform";
  if (prev.on === "both") return `Continue on the ${lineName[leg.on]}`;
  return `Change here for the ${lineName[leg.on]}`;
}

export function RoutePlanner() {
  const [activeId, setActiveId] = useState(routes[0].id);
  const route = routes.find((r) => r.id === activeId) ?? routes[0];
  const linesUsed = (["ai", "erp"] as const).filter((l) => route.legs.some((g) => g.on === l || g.on === "both"));

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      {/* Origins */}
      <fieldset className="lg:col-span-5">
        <legend className="mb-4 text-[0.95rem] font-semibold text-ink-2">Where are you starting from?</legend>
        <div className="border-t border-ink">
          {routes.map((r) => (
            <label
              key={r.id}
              className="group relative flex min-h-16 cursor-pointer items-center gap-4 border-b border-rule pr-3 transition-colors has-[:checked]:bg-surface has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-erp"
            >
              <input
                type="radio"
                name="origin"
                value={r.id}
                checked={r.id === activeId}
                onChange={() => setActiveId(r.id)}
                className="sr-only"
              />
              <span
                aria-hidden="true"
                className="ml-3 size-[18px] shrink-0 rounded-full border-[3px] border-ink bg-surface transition-colors group-has-[:checked]:bg-ink"
              />
              <span className="flex-1 py-4 text-[1.08rem] font-medium leading-snug text-ink-2 transition-colors group-hover:text-ink group-has-[:checked]:font-semibold group-has-[:checked]:text-ink">
                {r.problem}
              </span>
              <Arrow className="size-4 shrink-0 opacity-0 transition-all duration-300 group-has-[:checked]:translate-x-0 group-has-[:checked]:opacity-100 -translate-x-2" />
            </label>
          ))}
        </div>
        <p className="mt-5 text-[0.9rem] leading-relaxed text-ink-3">
          Typical routes, simplified. Every real engagement starts with a discovery conversation about your
          systems and data.
        </p>
      </fieldset>

      {/* Route */}
      <div className="lg:col-span-7" aria-live="polite">
        <div key={route.id} className="route-card rounded-[10px] border border-ink bg-surface p-6 shadow-[0_24px_60px_-30px_rgba(14,17,22,0.35)] sm:p-9">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-rule pb-5">
            <p className="text-[0.92rem] text-ink-3">
              From <span className="font-semibold text-ink">{route.problem.toLowerCase()}</span>
            </p>
            <span className="flex gap-1.5">
              {linesUsed.map((l) => (
                <LineBullet key={l} line={l} size="sm" />
              ))}
            </span>
          </div>

          <ol className="mt-7">
            {route.legs.map((leg, i) => {
              const note = changeNote(route.legs[i - 1], leg);
              return (
                <li key={leg.station + i} className="route-leg relative pb-8 pl-14" style={{ ["--d" as string]: `${i * 140}ms` }}>
                  <Segment on={leg.on} />
                  <StationMark on={leg.on} />
                  {note && (
                    <p className="mb-1.5 text-[0.82rem] font-semibold text-ink-3">{note}</p>
                  )}
                  <h3 className="text-[1.25rem] font-semibold leading-tight tracking-[-0.01em] [font-stretch:94%]">
                    {leg.station}
                  </h3>
                  <p className="prose-body mt-1.5 text-[0.98rem]">{leg.does}</p>
                </li>
              );
            })}
            <li className="route-leg relative pl-14" style={{ ["--d" as string]: `${route.legs.length * 140}ms` }}>
              <span aria-hidden="true" className="absolute left-0 top-0 grid size-[34px] place-items-center rounded-full bg-ink">
                <span className="size-3 rounded-full bg-ai" />
              </span>
              <p className="text-[0.82rem] font-semibold text-ink-3">Arrive</p>
              <p className="display mt-1 text-[clamp(1.6rem,2.6vw,2.1rem)]">{route.arrive}.</p>
              <p className="mt-3 text-[0.95rem] text-ink-2">
                <span className="font-semibold text-ink">Measured by: </span>
                {route.measure}
              </p>
            </li>
          </ol>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-rule pt-6">
            <Link
              href={`/contact?route=${route.id}`}
              className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-ink px-6 font-semibold text-white transition-colors hover:bg-erp"
            >
              Plan this route with us
              <Arrow className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <span className="text-[0.9rem] text-ink-3">Your starting point is filled in for you.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Segment({ on }: { on: Leg["on"] }) {
  const base = "route-seg absolute top-[14px] -bottom-[14px] rounded-full";
  if (on === "both")
    return (
      <>
        <span aria-hidden="true" className={`${base} left-[7px] w-[7px] bg-ai`} />
        <span aria-hidden="true" className={`${base} left-[18px] w-[7px] bg-erp`} />
      </>
    );
  return <span aria-hidden="true" className={`${base} left-[12px] w-[9px] ${on === "ai" ? "bg-ai" : "bg-erp"}`} />;
}

function StationMark({ on }: { on: Leg["on"] }) {
  return on === "both" ? (
    <span aria-hidden="true" className="absolute left-0 top-[2px] h-[24px] w-[34px] rounded-full border-[3.5px] border-ink bg-surface" />
  ) : (
    <span aria-hidden="true" className="absolute left-[4px] top-[2px] size-[25px] rounded-full border-[3.5px] border-ink bg-surface" />
  );
}
