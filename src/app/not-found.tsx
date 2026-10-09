import { ButtonLink, Container, Rail } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="bg-surface">
      <Rail kind="both" />
      <Container className="py-24 sm:py-32">
        <p className="text-[0.95rem] font-semibold text-ink-3">404</p>
        <h1 className="display mt-4 max-w-[16ch] text-[clamp(2.6rem,6vw,4.8rem)]">This station isn&rsquo;t on the map.</h1>
        <p className="lede mt-6">The page may have moved, or the link may be mistyped.</p>
        <div className="mt-10">
          <ButtonLink href="/">Back to the home page</ButtonLink>
        </div>
      </Container>
    </div>
  );
}
