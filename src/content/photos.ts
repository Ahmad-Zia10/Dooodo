import type { LineId } from "./services";

/**
 * Stock photography, hotlinked from Unsplash (free to use under the Unsplash licence).
 * Pictures show places and work, never people presented as our staff or clients.
 * To use your own photos, put them in /public and change `src` to "/photos/<file>.jpg".
 */
export type Photo = { src: string; alt: string; caption: string; lines: LineId[] };

const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=2400&q=80`;

export const photos = {
  erp: {
    src: u("photo-1707157284454-553ef0a4ed0d"),
    alt: "A desk with printed financial charts, a calculator and a laptop",
    caption: "Finance, procurement and supply chain on Oracle Cloud",
    lines: ["erp"],
  },
  ai: {
    src: u("photo-1584169417032-d34e8d805e8b"),
    alt: "A long aisle of server racks lit in blue",
    caption: "Agents, automation and models in production",
    lines: ["ai"],
  },
  consulting: {
    src: u("photo-1707902665498-a202981fb5ac"),
    alt: "A calculator, notebook and pen on a desk beside printed reports",
    caption: "Readiness reviews, business cases and roadmaps",
    lines: ["ai", "erp"],
  },
  apps: {
    src: u("photo-1619410283995-43d9134e7656"),
    alt: "A code editor showing React source code",
    caption: "Web apps, portals and internal tools",
    lines: ["ai"],
  },
  delhi: {
    src: u("photo-1589829973523-e4ddcbbd40e7"),
    alt: "The skyline of Gurugram, Delhi NCR, at sunset",
    caption: "Headquartered in Delhi NCR",
    lines: ["ai", "erp"],
  },
  office: {
    src: u("photo-1560264280-88b68371db39"),
    alt: "An open-plan office with desks and large windows",
    caption: "Hybrid working from Delhi NCR",
    lines: ["ai", "erp"],
  },
  approach: {
    src: u("photo-1531403009284-440f080d1e12"),
    alt: "A hand connecting printed process screens with lines on a planning wall",
    caption: "Every engagement mapped stage by stage, in writing",
    lines: ["ai", "erp"],
  },
  security: {
    src: u("photo-1633265486064-086b219458ec"),
    alt: "A brass padlock resting on a computer keyboard",
    caption: "Least-privilege access, in your tenancy",
    lines: ["ai", "erp"],
  },
  meeting: {
    src: u("photo-1431540015161-0bf868a2d407"),
    alt: "An empty conference room with a long table and floor-to-ceiling windows",
    caption: "Workshops remote or on site",
    lines: ["ai", "erp"],
  },
} satisfies Record<string, Photo>;

/** One photo per industry, keyed by the ids in industries.ts. */
export const industryPhotos: Record<string, Omit<Photo, "lines" | "caption">> = {
  "financial-services": { src: u("photo-1554469384-e58fac16e23a"), alt: "Looking up at glass office towers" },
  retail: { src: u("photo-1771033834141-023d630b3965"), alt: "A modern retail store with stocked display shelves" },
  healthcare: { src: u("photo-1629410484397-a4dcd74088a0"), alt: "A clean, bright hospital corridor" },
  logistics: { src: u("photo-1553413077-190dd305871c"), alt: "Tall racks of boxed stock in a large warehouse" },
  manufacturing: { src: u("photo-1716191299980-a6e8827ba10b"), alt: "An industrial robot arm on a production line" },
  technology: { src: u("photo-1607799279861-4dd421887fb3"), alt: "A laptop screen showing colourful source code" },
  "public-sector": { src: u("photo-1760872646618-13594fc00567"), alt: "A sandstone government building with a dome" },
  education: { src: u("photo-1580537659466-0a9bfa916a54"), alt: "Wooden bookshelves in a university library" },
};
