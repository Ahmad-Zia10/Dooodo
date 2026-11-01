import Image from "next/image";
import type { Photo as PhotoData } from "@/content/photos";
import { LineBullets } from "./line-bullet";

/**
 * A photograph in the house style: a line-colour rail across the top and,
 * optionally, a white station-sign plate with the caption in the corner.
 */
export function Photo({
  photo,
  ratio = "aspect-[16/10]",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  caption = true,
  preload = false,
  className = "",
  imgClassName = "",
}: {
  photo: PhotoData;
  ratio?: string;
  sizes?: string;
  caption?: boolean;
  preload?: boolean;
  className?: string;
  imgClassName?: string;
}) {
  const both = photo.lines.length > 1;
  return (
    <figure className={`relative overflow-hidden bg-ink ${ratio} ${className}`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        preload={preload}
        className={`object-cover ${imgClassName}`}
      />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 flex h-[7px]">
        {(both ? ["ai", "erp"] : photo.lines).map((l) => (
          <span key={l} className={`flex-1 ${l === "ai" ? "bg-ai" : "bg-erp"}`} />
        ))}
      </div>
      {caption && (
        <figcaption className="absolute bottom-3 left-3 flex w-fit max-w-[calc(100%-1.5rem)] items-center gap-3 rounded-[6px] bg-surface/95 px-3.5 py-2.5 text-[0.9rem] font-medium leading-snug text-ink shadow-[0_8px_24px_-12px_rgba(14,17,22,0.5)] sm:bottom-5 sm:left-5">
          <LineBullets lines={photo.lines} />
          {photo.caption}
        </figcaption>
      )}
    </figure>
  );
}

/** A wide photo directly under a page header. */
export function PhotoBand({ photo }: { photo: PhotoData }) {
  return (
    <div className="mx-auto w-full max-w-[1240px] px-4 pt-10 sm:px-6 sm:pt-14 lg:px-10">
      <Photo
        photo={photo}
        ratio="aspect-[4/3] sm:aspect-[21/9]"
        sizes="(min-width: 1240px) 1160px, 100vw"
        preload
      />
    </div>
  );
}
