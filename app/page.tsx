import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory bg-stone-50 font-sans">
      {/* Header — full-screen on desktop, natural image on mobile */}
      <header className="relative w-full snap-start sm:h-screen overflow-hidden">
        <Image
          src="/images/logo-header.png"
          alt="The Cape Cycling Club – Cape Paterson"
          width={1200}
          height={675}
          priority
          className="w-full h-auto sm:absolute sm:top-0 sm:left-[10%] sm:w-4/5 sm:h-[80%] sm:object-contain sm:object-top"
        />
        {/* Ride details — flows below image on mobile, overlays on desktop */}
        <div className="bg-slate-900/60 backdrop-blur-md sm:absolute sm:inset-x-0 sm:bottom-0">
          <dl className="max-w-5xl mx-auto grid grid-cols-2 sm:flex sm:divide-x divide-white/20">
            <div className="flex-1 px-6 py-9 border-b border-r border-white/20 sm:border-r-0 sm:border-b-0">
              <dt className="font-semibold text-white/75 uppercase text-sm tracking-widest mb-1">When</dt>
              <dd className="text-white text-xl font-medium leading-snug">1st Sunday of each month</dd>
            </div>
            <div className="flex-1 px-6 py-9 border-b border-white/20 sm:border-b-0">
              <dt className="font-semibold text-white/75 uppercase text-sm tracking-widest mb-1">Where</dt>
              <dd className="text-white text-xl font-medium leading-snug">Gippsland — routes via WhatsApp &amp; email the week prior</dd>
            </div>
            <div className="flex-1 px-6 py-9 border-r border-white/20 sm:border-r-0">
              <dt className="font-semibold text-white/75 uppercase text-sm tracking-widest mb-1">Route types</dt>
              <dd className="text-white text-xl font-medium leading-snug">Rail trails, quiet roads and tracks</dd>
            </div>
            <div className="flex-1 px-6 py-9">
              <dt className="font-semibold text-white/75 uppercase text-sm tracking-widest mb-1">Style</dt>
              <dd className="text-white text-xl font-medium leading-snug">Recreational — 16–18 km/hr, coffee stop, 25–50 km</dd>
            </div>
          </dl>
        </div>
      </header>

      <div className="snap-start">
      <main className="max-w-2xl mx-auto px-6 py-12 space-y-10">

        {/* Welcome */}
        <section>
          <h2 className="text-2xl font-semibold text-teal-800 mb-3">Welcome</h2>
          <p className="text-stone-700 leading-relaxed">
            The Cape Cycling Club is a friendly, informal group exploring the beautiful rail trails,
            quiet roads and tracks of Gippsland — one ride at a time. All are welcome.
          </p>
        </section>

        {/* Important note */}
        <section className="bg-teal-50 border border-teal-200 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-teal-800 mb-2">Important Note</h2>
          <p className="text-stone-700 leading-relaxed text-sm">
            This is an informal ride group with no fees. By joining the rides you agree to ride at your own risk —
            we do not plan to insure the group. Dave and Anne are members of{" "}
            <a
              href="https://www.bicyclenetwork.com.au"
              className="text-teal-700 underline underline-offset-2 hover:text-teal-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bicycle Network
            </a>
            , which comes with personal insurance cover. If you&apos;d like to insure yourself, we suggest
            checking out their website for details.
          </p>
        </section>

        {/* Sign-off */}
        <p className="text-stone-600 italic">Happy Cycling, Dave and Anne Meyers.</p>

        {/* Contact form */}
        <section>
          <h2 className="text-2xl font-semibold text-teal-800 mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                placeholder="Say hello, ask a question, or let us know you'd like to join a ride…"
              />
            </div>
            <button
              type="submit"
              className="rounded-lg bg-teal-700 px-6 py-2.5 text-sm font-medium text-white hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>

      <footer className="mt-8 border-t border-stone-200 py-6 text-center text-sm text-stone-400">
        © {new Date().getFullYear()} The Cape Cycling Club, Cape Paterson
      </footer>
      </div>
    </div>
  );
}
