"use client";

import { useEffect, useRef, useState } from "react";
import { engagementModels } from "@/content/approach";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789–";

/** A line of board text that flips through characters before settling. */
function FlapText({ text, run, delay }: { text: string; run: boolean; delay: number }) {
  const [shown, setShown] = useState(text);

  useEffect(() => {
    if (!run) return;
    const target = text.toUpperCase();
    let frame = 0;
    const total = 16;
    let id: ReturnType<typeof setInterval> | undefined;
    const start = setTimeout(() => {
      id = setInterval(() => {
        frame++;
        const settled = Math.floor((frame / total) * target.length);
        setShown(
          target
            .split("")
            .map((c, i) => (c === " " || i < settled ? c : GLYPHS[(i * 7 + frame * 3) % GLYPHS.length]))
            .join(""),
        );
        if (frame >= total) {
          clearInterval(id);
          setShown(target);
        }
      }, 45);
    }, delay);
    return () => {
      clearTimeout(start);
      if (id) clearInterval(id);
    };
  }, [run, text, delay]);

  return <span aria-hidden="true">{run ? shown : text.toUpperCase()}</span>;
}

export function DepartureBoard() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRun(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="overflow-hidden rounded-[10px] bg-[#0b0d11] p-1.5 shadow-[0_30px_70px_-35px_rgba(14,17,22,0.7)]">
      <div className="rounded-[7px] border border-white/10 bg-[#111419]">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 text-[0.78rem] font-semibold tracking-[0.12em] text-white/55 sm:px-7">
          <span>WAYS TO WORK WITH US</span>
          <span className="flex items-center gap-2">
            <span className="board-pulse size-2 rounded-full bg-[#3ccf7a]" />
            NOW BOARDING
          </span>
        </div>
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">Engagement models and their typical length</caption>
          <thead className="sr-only">
            <tr>
              <th scope="col">Engagement</th>
              <th scope="col">Typical length</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {engagementModels.map((m, i) => (
              <tr key={m.name} className="border-b border-white/[0.07] last:border-b-0">
                <th scope="row" className="px-5 pb-1 pt-5 align-top font-normal sm:px-7 sm:pb-5">
                  <span className="sr-only">{m.name}</span>
                  <span className="board-text block text-[clamp(1.05rem,2vw,1.45rem)] text-[#ffb627]">
                    <FlapText text={m.name} run={run} delay={i * 160} />
                  </span>
                  <span className="mt-1.5 block max-w-[52ch] text-[0.92rem] leading-relaxed text-white/60 sm:hidden">
                    {m.body}
                  </span>
                </th>
                <td className="hidden px-4 py-5 align-top text-[0.95rem] leading-relaxed text-white/65 sm:table-cell">
                  {m.body}
                </td>
                <td className="px-5 pb-5 pt-1 align-top sm:px-7 sm:pt-5 sm:text-right">
                  <span className="sr-only">{m.length}</span>
                  <span className="board-text text-[1rem] sm:whitespace-nowrap text-white tabular-nums sm:text-[1.1rem]">
                    <FlapText text={m.length} run={run} delay={i * 160 + 300} />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
