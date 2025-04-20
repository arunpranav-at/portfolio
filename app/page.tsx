import Hero from "@/components/Hero";
import ThingsIDo from "@/components/ThingsIDo";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-2">
        <Hero />
        <ThingsIDo />
      </div>
    </main>
  );
}
