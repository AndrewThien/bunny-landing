import { ArrowBigLeft, ArrowRight, Book } from "lucide-react";
import { Button } from "./ui/button";
import { ShinyButton } from "./magicui/shiny-button";
import { PT_Serif, Nunito, Roboto, Open_Sans } from "next/font/google";
import { ShimmerButton } from "./magicui/shimmer-button";
import { cn } from "@/lib/utils";

const font = Roboto({ weight: "400", subsets: ["latin"] });
export const Hero = () => {
  return (
    <div className="px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-32">
        <div className="mb-8 flex justify-center">
          <img alt="" src="./logo.png" className="h-36 w-auto" />
        </div>
        <div className="text-center">
          <h1
            className={cn(
              "text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl",
              font.className
            )}
          >
            Your secure gateway to OMOP cohort discovery
          </h1>
          {/* <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Bunny simplifies data governance through result obfuscation while
            working with any compatible upstream Task API.
          </p> */}
          <div className="mt-16 flex items-center justify-center gap-x-6">
            <a
              href="https://health-informatics-uon.github.io/hutch/bunny"
              target="_blank"
            >
              {/* <Button className="flex gap-2 text-lg" size={"lg"}>
                Explore Docs Today! <Book />
              </Button> */}
              <ShimmerButton className="shadow-2xl flex">
                <span
                  className={cn(
                    "flex items-center whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-xl",
                    font.className
                  )}
                >
                  Explore Docs Today! <ArrowRight className="opacity-85" />
                </span>
              </ShimmerButton>
              {/* <ShinyButton>
                Explore Docs Today! <Book className="opacity-70" />
              </ShinyButton> */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
