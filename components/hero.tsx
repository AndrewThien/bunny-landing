import { Book } from "lucide-react";
import { Button } from "./ui/button";
import { ShinyButton } from "./magicui/shiny-button";

export const Hero = () => {
  return (
    <div className="px-6 lg:px-8">
      <div className="z-999 mx-auto max-w-2xl py-32 sm:py-48 lg:py-32">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 shadow-lg ring-gray-900/10 hover:ring-gray-900/20">
            <img alt="" src="./logo.png" className="h-24 w-auto" />
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            Your secure gateway to OMOP cohort discovery
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Bunny simplifies data governance through result obfuscation while
            working with any compatible upstream Task API.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://health-informatics-uon.github.io/hutch/bunny"
              target="_blank"
            >
              {/* <Button className="flex gap-2 text-lg" size={"lg"}>
                Explore Docs Today! <Book />
              </Button> */}
              <ShinyButton>
                Explore Docs Today! <Book className="opacity-70" />
              </ShinyButton>
            </a>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
};
