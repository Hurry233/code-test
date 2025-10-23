import { Navbar1Demo } from "@/components/ui/shadcnblocks-com-navbar1-demo";
import { SplineSceneBasic } from "@/components/ui/demo";
import { WorldMapDemo } from "@/components/ui/world-map-demo";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen gap-24 bg-background">
      <section className="bg-background">
        <Navbar1Demo />
      </section>
      <section className="container mx-auto flex items-center justify-center p-8">
        <SplineSceneBasic />
      </section>
      <section className="container mx-auto p-8">
        <WorldMapDemo />
      </section>
    </main>
  );
}
