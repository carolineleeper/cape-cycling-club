import Image from "next/image";
import { Calendar, MapPin, Signpost, Coffee, Bike } from "lucide-react";
import { Caveat } from "next/font/google";
import { ContactForm } from "./contact-form";

const caveat = Caveat({ subsets: ["latin"], weight: "600" });

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">

      {/* Top half — hero image with logo */}
      <div className="relative h-[40vw] max-h-[50vh] lg:h-[60vh] overflow-hidden">
        <Image
          src="/images/header-image.png"
          alt="Cape Cycling Club"
          fill
          priority
          className="object-cover blur-[3px] scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/images/mock-up-logo-letters.svg"
            alt="The Cape Cycling Club – Cape Paterson"
            width={600}
            height={204}
            className="w-[95%] lg:w-[75%] h-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)]"
          />
        </div>
      </div>

      {/* Bottom half — cream, club info */}
      <div className="flex-1 bg-[#F2E8D1] flex flex-col">

        {/* Ride quick-facts */}
        <div className="grid grid-cols-2 md:grid-cols-4 bg-[rgb(247,247,247)]">
          {[
            { label: "When", value: "10am, 2nd Sunday of each month", icon: Calendar },
            { label: "Where", value: "Gippsland region — route details provided the week prior", icon: MapPin },
            { label: "Route types", value: "Rail trails, quiet roads and tracks", icon: Signpost },
            { label: "Ride style", value: "25-50km. Easy-going social pace with coffee stop", icon: Coffee },
          ].map(({ label, value, icon: Icon }, i, arr) => (
            <div key={label} className={`relative px-6 py-6 md:py-8 ${i < 2 ? 'border-b border-gray-200 md:border-b-0' : ''}`}>
              {i < arr.length - 1 && (
                <span className={`absolute right-0 top-4 bottom-4 w-px bg-gray-300 ${i === 1 ? 'hidden md:block' : ''}`} />
              )}
              <div className="flex items-center gap-1.5 mb-1">
                <Icon size={16} className="text-[#123B6D]/50" />
                <p className="text-sm font-bold uppercase tracking-widest text-[#123B6D]/50">{label}</p>
              </div>
              <p className="text-[#123B6D] font-semibold leading-snug text-lg">{value}</p>
            </div>
          ))}
        </div>

        {/* Note + sign-off */}
        <div className="flex-1 grid md:grid-cols-2 min-h-[500px]">
          <div className="relative overflow-hidden min-h-[280px] md:min-h-0">
            {/* Full-bleed photo */}
            <Image
              src="/images/IMG_3110.jpeg"
              alt="Cape Cycling Club riders"
              fill
              className="object-cover object-[center_50%]"
            />
          </div>
          <div className="px-8 py-8 flex flex-col gap-4 bg-[#F0EBE3]">
            <p className="text-sm font-bold uppercase tracking-widest text-[#123B6D]/50">Get in touch</p>
            <ContactForm />
            <div className="mt-auto">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#123B6D]/50 mb-1">Important note</p>
              <p className="text-[#123B6D]/80 text-sm leading-relaxed">
                  This is an informal ride group with no fees. By joining the rides you agree to ride at your own risk — we do not plan to insure the group. Dave and Anne are members of{" "}
                  <a
                    href="https://www.bicyclenetwork.com.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-[#123B6D]"
                  >
                    Bicycle Network
                  </a>
                  , which comes with personal insurance cover. If you&apos;d like to insure yourself, check out their website for details.
              </p>
            </div>
          </div>
        </div>

      </div>

      <footer className="bg-[#414141] px-6 py-3 flex flex-col items-center gap-1">
        <div className="flex items-center gap-2">
          <Bike size={16} className="text-white/60 shrink-0" />
          <p className={`${caveat.className} text-white text-xl`}>Happy Cycling, Dave and Anne.</p>
        </div>
        <p className="text-white/50 text-xs">© {new Date().getFullYear()} The Cape Cycling Club</p>
      </footer>

    </div>
  );
}
