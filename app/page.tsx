import { SplineSceneBasic } from "@/components/ui/demo";
import { WorldMapDemo } from "@/components/ui/world-map-demo";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen gap-24 bg-background p-8">
      <section className="container mx-auto flex items-center justify-center">
        <SplineSceneBasic />
      </section>
      <section className="container mx-auto">
        <WorldMapDemo />
      </section>
    </main>
  );
}
