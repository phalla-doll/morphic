import { ArrowRight, ChevronLeft, ChevronRight, Play, Layout, Image as ImageIcon, Sidebar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-40 right-0 w-[600px] h-[600px] bg-red-900/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
             <div className="w-2 h-3 border-l-2 border-r-2 border-black" />
          </div>
          <span className="font-semibold text-lg tracking-tight">Morphic</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <Link href="#" className="hover:text-white transition-colors">Showcase</Link>
          <Link href="#" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="#" className="hover:text-white transition-colors">Enterprise</Link>
          <Link href="#" className="hover:text-white transition-colors">Resources</Link>
        </div>

        <div className="flex items-center gap-4 text-sm font-medium">
          <Link href="#" className="text-white/70 hover:text-white transition-colors hidden md:block">Log in</Link>
          <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-white/90 transition-colors">
            Start creating
          </button>
        </div>
      </nav>

      <main className="relative z-20 max-w-7xl mx-auto px-6 pt-20 pb-32">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24">
          <div>
            <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8 text-sm">
              <span className="text-[#ff4444] font-medium">Product Hunt launch</span>
              <span className="w-px h-3 bg-white/20"></span>
              <span className="text-white/80 flex items-center gap-1 hover:text-white cursor-pointer transition-colors">Use MORPH20 <ArrowRight className="w-3 h-3" /></span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-[80px] font-medium tracking-tighter leading-[1.05]">
              Smart storytelling<br />
              <span className="text-white/40">For every creative</span>
            </h1>
          </div>
          
          <div className="lg:pt-24 flex flex-col lg:items-end lg:text-right">
            <p className="text-xl text-white/70 mb-8 max-w-md leading-relaxed">
              Morphic enables you to generate, animate, and edit effortlessly using breakthrough technologies.
            </p>
            <div className="flex items-center gap-4">
              <button className="bg-[#0066ff] hover:bg-[#005ce6] text-white px-6 py-3 rounded-full font-medium transition-colors">
                Start for free
              </button>
              <button className="bg-white/10 hover:bg-white/15 text-white px-6 py-3 rounded-full font-medium transition-colors border border-white/5">
                Book a demo
              </button>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-32">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <div className="w-1 h-4 bg-white/80 rounded-full"></div>
                <div className="w-1 h-4 bg-white/40 rounded-full"></div>
                <div className="w-1 h-4 bg-white/20 rounded-full"></div>
              </div>
              <span className="font-medium">Made with Morphic</span>
              <Link href="#" className="text-white/50 text-sm hover:text-white transition-colors">See more</Link>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-full hover:bg-white/10 text-white/50 hover:text-white transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full hover:bg-white/10 text-white/50 hover:text-white transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Image Grid/Marquee */}
          <div className="space-y-4 overflow-hidden -mx-6 px-6 lg:mx-0 lg:px-0">
            {/* Row 1 */}
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide snap-x">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={`r1-${i}`} className="relative w-[280px] h-[160px] flex-shrink-0 rounded-2xl overflow-hidden snap-start bg-zinc-900 border border-white/5">
                  <Image src={`https://picsum.photos/seed/${i * 10}/560/320`} alt="Gallery image" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            {/* Row 2 */}
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x ml-[-100px]">
              {[7, 8, 9, 10, 11, 12].map((i) => (
                <div key={`r2-${i}`} className="relative w-[280px] h-[160px] flex-shrink-0 rounded-2xl overflow-hidden snap-start bg-zinc-900 border border-white/5">
                  <Image src={`https://picsum.photos/seed/${i * 10}/560/320`} alt="Gallery image" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8 text-center md:text-left">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-[#050505] bg-zinc-800 overflow-hidden relative">
                <Image src="https://picsum.photos/seed/user1/64/64" alt="User" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-[#050505] bg-zinc-800 overflow-hidden relative">
                <Image src="https://picsum.photos/seed/user2/64/64" alt="User" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-[#050505] bg-zinc-800 overflow-hidden relative">
                <Image src="https://picsum.photos/seed/user3/64/64" alt="User" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
            <p className="text-sm text-white/50">
              <span className="text-white/80">&quot;Feels like working with a co-creator who understands rhythm and emotion.&quot;</span> Kushagra Kushwaha, Anime Director
            </p>
          </div>
        </div>

        {/* Explore with Canvas Section */}
        <div className="relative pt-20">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-medium tracking-tighter mb-2">
                Explore with Canvas
              </h2>
              <p className="text-5xl md:text-6xl font-medium tracking-tighter text-white/40">
                Where ideas take shape
              </p>
            </div>
            
            <div className="flex flex-col items-start md:items-end relative">
              <div className="absolute -top-24 -right-10 text-4xl md:text-5xl font-bold tracking-tighter text-white/10 blur-[2px] mb-2 select-none whitespace-nowrap hidden lg:block">
                Chat with Copilot
              </div>
              <div className="absolute -top-12 -right-10 text-4xl md:text-5xl font-bold tracking-tighter text-white/5 blur-[3px] mb-4 select-none whitespace-nowrap hidden lg:block">
                Your partner in design
              </div>
              <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium hover:bg-white/10 transition-colors z-10">
                Copilot <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* UI Mockup */}
          <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden shadow-2xl relative">
            {/* Mockup Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#111]">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-2 py-1 rounded bg-white/5 text-white/50">
                  <Layout className="w-4 h-4" />
                  <ChevronRight className="w-3 h-3" />
                  <ImageIcon className="w-4 h-4" />
                  <ChevronRight className="w-3 h-3" />
                </div>
                <div className="text-sm text-white/70">
                  Project / <span className="text-white">Untitled</span> <ChevronRight className="w-3 h-3 inline text-white/50" />
                </div>
              </div>
              
              <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-lg">
                <button className="px-4 py-1.5 text-sm font-medium bg-white/10 rounded-md text-white">Canvas</button>
                <button className="px-4 py-1.5 text-sm font-medium text-white/50 hover:text-white transition-colors">Copilot</button>
                <button className="px-4 py-1.5 text-sm font-medium text-white/50 hover:text-white transition-colors">Compose</button>
              </div>

              <div className="flex items-center gap-3">
                <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white">
                  +
                </button>
                <div className="w-8 h-8 rounded-full bg-zinc-800 overflow-hidden relative">
                  <Image src="https://picsum.photos/seed/user4/64/64" alt="User" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <button className="bg-[#0066ff] hover:bg-[#005ce6] text-white px-4 py-1.5 rounded-md text-sm font-medium transition-colors">
                  Share
                </button>
              </div>
            </div>

            {/* Mockup Body */}
            <div className="p-4 grid grid-cols-1 md:grid-cols-12 gap-4 h-[500px]">
              {/* Left Sidebar */}
              <div className="hidden md:flex col-span-3 flex-col gap-4">
                <div className="flex items-center gap-4 text-sm text-white/50 font-medium px-2">
                  <span className="text-white">Layers</span>
                  <span className="hover:text-white cursor-pointer transition-colors">Chats</span>
                  <span className="hover:text-white cursor-pointer transition-colors">Assets</span>
                  <div className="ml-auto">
                    <Sidebar className="w-4 h-4" />
                  </div>
                </div>
                {/* Image previews */}
                <div className="flex-1 rounded-xl overflow-hidden relative bg-zinc-900 border border-white/5 group">
                  <Image src="https://picsum.photos/seed/anime1/400/600" alt="Anime landscape" fill className="object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Play className="w-4 h-4 text-white fill-white" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Main Canvas */}
              <div className="col-span-1 md:col-span-6 flex flex-col gap-4">
                 <div className="flex-1 rounded-xl overflow-hidden relative bg-zinc-900 border border-white/5 group">
                  <Image src="https://picsum.photos/seed/anime2/800/600" alt="Anime landscape main" fill className="object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Play className="w-6 h-6 text-white fill-white ml-1" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="hidden md:flex col-span-3 flex-col gap-4">
                <div className="flex items-center justify-between text-sm text-white/50 font-medium px-2">
                  <span className="text-white">Details</span>
                  <Sidebar className="w-4 h-4" />
                </div>
                <div className="flex-1 rounded-xl bg-white/5 border border-white/5 p-4 flex flex-col gap-6">
                  {/* Placeholder for details */}
                  <div>
                    <div className="h-4 w-1/2 bg-white/10 rounded mb-4"></div>
                    <div className="h-2 w-full bg-white/5 rounded mb-2"></div>
                    <div className="h-2 w-3/4 bg-white/5 rounded mb-2"></div>
                    <div className="h-2 w-5/6 bg-white/5 rounded"></div>
                  </div>
                  
                  <div>
                    <div className="h-4 w-1/3 bg-white/10 rounded mb-4"></div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="aspect-square bg-white/5 rounded-lg border border-white/5 relative overflow-hidden">
                        <Image src="https://picsum.photos/seed/thumb1/200/200" alt="Thumb" fill className="object-cover opacity-50" referrerPolicy="no-referrer" />
                      </div>
                      <div className="aspect-square bg-white/5 rounded-lg border border-white/5 relative overflow-hidden">
                        <Image src="https://picsum.photos/seed/thumb2/200/200" alt="Thumb" fill className="object-cover opacity-50" referrerPolicy="no-referrer" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <button className="w-full py-2 rounded-lg bg-white/10 text-sm font-medium hover:bg-white/15 transition-colors">
                      Export
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
