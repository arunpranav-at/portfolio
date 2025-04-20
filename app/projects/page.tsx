import Projects from "@/components/Projects";
import StarsCanvas from "@/components/StarBackground";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <div className={`${inter.className} bg-[#030014] overflow-hidden relative`}>
          {/* StarsCanvas remains unchanged as per requirement */}
          <StarsCanvas />
          
          {/* Apply higher z-index to Projects to ensure it appears above stars */}
          <div className="relative z-10">
            <Projects />
          </div>
        </div>
      </div>
    </main>
  );
}