"use client"

import Link from "next/link"
import { useState } from "react"
import { Testimonials } from "@/components/testimonials/Testimonials"
import { CustomCrowd } from "@/components/Footer"

export default function StartupSprintLanding() {
  const [showContact, setShowContact] = useState(false)

  return (
    <>
      <div
        className="min-h-screen text-white relative overflow-hidden overflow-x-hidden no-scrollbar"
        style={{ background: "#0a0100" }}
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 120% 80% at 50% 120%, #1a0500 0%, #0a0100 60%, #000 100%)",
            }}
          />
          <div className="absolute rounded-full" style={{ width: "80vw", height: "70vh", bottom: "-20vh", left: "10vw", background: "radial-gradient(circle, #ff4500cc 0%, #c2300088 40%, transparent 70%)", filter: "blur(60px)", animation: "blob1 14s ease-in-out infinite" }} />
          <div className="absolute rounded-full" style={{ width: "55vw", height: "55vh", top: "-15vh", right: "-10vw", background: "radial-gradient(circle, #ffb30099 0%, #ff660066 45%, transparent 70%)", filter: "blur(70px)", animation: "blob2 18s ease-in-out infinite" }} />
          <div className="absolute rounded-full" style={{ width: "50vw", height: "60vh", top: "20vh", left: "-15vw", background: "radial-gradient(circle, #cc100088 0%, #8b000066 50%, transparent 70%)", filter: "blur(80px)", animation: "blob3 22s ease-in-out infinite" }} />
        </div>

        <style>{`
          @keyframes blob1 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(-4vw,-6vh) scale(1.08)} 66%{transform:translate(5vw,4vh) scale(0.93)} }
          @keyframes blob2 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(-6vw,8vh) scale(1.12)} 66%{transform:translate(4vw,-5vh) scale(0.9)} }
          @keyframes blob3 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(6vw,-4vh) scale(1.06)} 66%{transform:translate(-3vw,7vh) scale(0.95)} }
          @keyframes fadeIn { from{opacity:0;transform:translateY(-10px)} to{opacity:1;transform:translateY(0)} }
          .contact-popup { animation: fadeIn 0.25s ease; }
        `}</style>

        <div className="flex flex-col items-center justify-center min-h-screen px-6 relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-4">Markonsis AI</h1>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-white/60">Smarter AI. Better Results.</h2>
          </div>

          <div className="w-full max-w-md relative">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/chat" className="px-8 py-3 rounded-full font-semibold bg-red-600 hover:bg-red-500 transition text-white">
                Start Chat
              </Link>
              <button
                onClick={() => setShowContact(!showContact)}
                className="px-8 py-3 rounded-full border border-red-300/50 hover:bg-white/10 transition text-white font-medium"
              >
                Contact Us
              </button>
            </div>

            {showContact && (
              <div
                className="fixed inset-0 bg-black/50 z-[9998]"
                onClick={() => setShowContact(false)}
              />
            )}

            {showContact && (
              <div className="contact-popup fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 rounded-2xl border border-white/15 bg-black/90 backdrop-blur-xl shadow-2xl p-6 z-[9999]">
                <button onClick={() => setShowContact(false)} className="absolute top-3 right-4 text-white/40 hover:text-white text-xl leading-none">×</button>
                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                  Contact Markonsis
                </h3>
                <div className="space-y-4">
                  <a href="mailto:contact@markonsis.com" className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-red-500/30 transition group">
                    <div className="w-9 h-9 rounded-lg bg-red-600/20 flex items-center justify-center shrink-0 group-hover:bg-red-600/30 transition">
                      <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <p className="text-white/40 text-xs">Email</p>
                      <p className="text-white text-sm font-medium">contact@markonsis.com</p>
                    </div>
                  </a>
                  <a href="tel:+918208409996" className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-red-500/30 transition group">
                    <div className="w-9 h-9 rounded-lg bg-red-600/20 flex items-center justify-center shrink-0 group-hover:bg-red-600/30 transition">
                      <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                      <p className="text-white/40 text-xs">Phone</p>
                      <p className="text-white text-sm font-medium">+91 82084 09996</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/5">
                    <div className="w-9 h-9 rounded-lg bg-red-600/20 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <p className="text-white/40 text-xs">Location</p>
                      <p className="text-white text-sm font-medium">Pune, Maharashtra, India</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="bg-black py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Everything you need</h2>
          <p className="text-center text-white/50 text-lg mb-16 max-w-xl mx-auto">One unified interface for all leading AI models — no switching tabs, no multiple subscriptions.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-red-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-red-600/20 flex items-center justify-center mb-4 group-hover:bg-red-600/30 transition">
                <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Multiple AI Models</h3>
              <p className="text-white/50 text-sm leading-relaxed">Access GPT-4, Claude, Gemini, and more — all from a single chat interface.</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-red-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-red-600/20 flex items-center justify-center mb-4 group-hover:bg-red-600/30 transition">
                <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Compare Side by Side</h3>
              <p className="text-white/50 text-sm leading-relaxed">Run the same prompt across models and instantly see which one performs best.</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-red-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-red-600/20 flex items-center justify-center mb-4 group-hover:bg-red-600/30 transition">
                <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Secure & Private</h3>
              <p className="text-white/50 text-sm leading-relaxed">Your conversations stay yours. Secure authentication and private chat history.</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-red-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-red-600/20 flex items-center justify-center mb-4 group-hover:bg-red-600/30 transition">
                <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Custom Themes</h3>
              <p className="text-white/50 text-sm leading-relaxed">Personalize with dark/light mode and custom accent colors to match your style.</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-red-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-red-600/20 flex items-center justify-center mb-4 group-hover:bg-red-600/30 transition">
                <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Projects & Threads</h3>
              <p className="text-white/50 text-sm leading-relaxed">Organise chats into projects and revisit any conversation at any time.</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-red-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-red-600/20 flex items-center justify-center mb-4 group-hover:bg-red-600/30 transition">
                <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Web Search</h3>
              <p className="text-white/50 text-sm leading-relaxed">Get real-time answers with built-in web search — no outdated knowledge cutoffs.</p>
            </div>

            <div className="md:col-span-3 rounded-2xl border border-red-500/30 bg-gradient-to-r from-red-950/40 to-red-900/20 p-6 hover:from-red-950/60 hover:to-red-900/30 transition-all duration-300 group flex items-center gap-6">
              <div className="w-14 h-14 rounded-xl bg-red-600/30 flex items-center justify-center shrink-0 group-hover:bg-red-600/50 transition">
                <svg className="w-7 h-7 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-white font-bold text-xl">Markonsis AI</h3>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/30">Featured</span>
                </div>
                <p className="text-white/50 text-sm leading-relaxed max-w-2xl">Powered by Markonsis AI — next-generation intelligence built for real-world tasks. Experience smarter, faster, and more contextual responses tailored to your needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div id="contact" className="bg-black py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Get in Touch</h2>
          <p className="text-white/50 text-lg mb-16 max-w-xl mx-auto">Have questions or want to work with us? Reach out to the Markonsis team.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="mailto:contact@markonsis.com" className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-red-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-red-600/20 flex items-center justify-center group-hover:bg-red-600/30 transition">
                <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <p className="text-white/40 text-xs mb-1">Email Us</p>
                <p className="text-white font-medium text-sm">contact@markonsis.com</p>
              </div>
            </a>

            <a href="tel:+918208409996" className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-red-500/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-red-600/20 flex items-center justify-center group-hover:bg-red-600/30 transition">
                <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <p className="text-white/40 text-xs mb-1">Call Us</p>
                <p className="text-white font-medium text-sm">+91 82084 09996</p>
              </div>
            </a>

            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-white/10 bg-white/5">
              <div className="w-12 h-12 rounded-xl bg-red-600/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <p className="text-white/40 text-xs mb-1">Location</p>
                <p className="text-white font-medium text-sm">Pune, Maharashtra, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Testimonials />
      <CustomCrowd />
    </>
  )
}