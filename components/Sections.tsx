'use client'
import { useState, useRef, useEffect, type ReactNode } from 'react'
import TypewriterTitle from './TypewriterTitle'
import { useLanguage } from '@/contexts/LanguageContext'

export function ExcelLogo({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="excel-grad" x1="4.494" y1="7.914" x2="13.832" y2="24.086" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#18884f" />
          <stop offset="0.5" stopColor="#117e43" />
          <stop offset="1" stopColor="#0b6631" />
        </linearGradient>
      </defs>
      <path d="M19.581 15.35L8.512 13.4V27.809A1.192 1.192 0 009.705 29h19.1A1.192 1.192 0 0030 27.809V22.5h-10.419z" fill="#185c37" />
      <path d="M19.581 3H9.705A1.192 1.192 0 008.512 4.191V9.5l11.069 6.5 5.861 1.95L30 16V9.5L19.581 3z" fill="#21a366" />
      <path d="M8.512 9.5h11.069V16H8.512z" fill="#107c41" />
      <path d="M28.806 3h-9.225v6.5H30V4.191A1.192 1.192 0 0028.806 3z" fill="#33c481" />
      <path d="M19.581 16H30v6.5H19.581z" fill="#107c41" />
      <path d="M3.194 8.85h11.938a1.193 1.193 0 011.194 1.191v11.918a1.193 1.193 0 01-1.194 1.191H3.194A1.192 1.192 0 012 21.959V10.041A1.192 1.192 0 013.194 8.85z" fill="url(#excel-grad)" />
      <path d="M5.7 19.873l2.511-3.884-2.3-3.862h1.847l1.255 2.473c.116.234.2.408.238.524h.017c.082-.188.169-.369.26-.546l1.342-2.447h1.7l-2.359 3.84 2.419 3.905h-1.709l-1.45-2.711a2.355 2.355 0 01-.17-.28h-.024a1.688 1.688 0 01-.168.351L7.515 19.873H5.7z" fill="#ffffff" />
    </svg>
  )
}

export function WordLogo({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="word-grad" x1="4.494" y1="7.914" x2="13.832" y2="24.086" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#2368c4" />
          <stop offset="0.5" stopColor="#1a5dbe" />
          <stop offset="1" stopColor="#1146ac" />
        </linearGradient>
      </defs>
      <path d="M28.806 3H9.705A1.192 1.192 0 008.512 4.191V9.5l11.069 3.25L30 9.5V4.191A1.192 1.192 0 0028.806 3z" fill="#41a5ee" />
      <path d="M30 9.5H8.512V16l11.069 1.95L30 16z" fill="#2b7cd3" />
      <path d="M8.512 16v6.5l10.418 1.3L30 22.5V16z" fill="#185abd" />
      <path d="M9.705 29h19.1A1.192 1.192 0 0030 27.809V22.5H8.512v5.309A1.192 1.192 0 009.705 29z" fill="#103f91" />
      <path d="M3.194 8.85h11.938a1.193 1.193 0 011.194 1.191v11.918a1.193 1.193 0 01-1.194 1.191H3.194A1.192 1.192 0 012 21.959V10.041A1.192 1.192 0 013.194 8.85z" fill="url(#word-grad)" />
      <path d="M6.9 17.988c.023.184.039.344.046.481h.028c.01-.13.032-.287.065-.47s.062-.338.089-.465l1.255-5.407h1.624l1.3 5.326a7.761 7.761 0 01.162 1h.022a7.6 7.6 0 01.135-.975l1.039-5.358h1.477l-1.824 7.748H10.591L9.354 14.742a3.78 3.78 0 01-.122-.578 3.32 3.32 0 01-.084-.52H9.127a3.46 3.46 0 01-.084.561c-.042.249-.075.432-.1.552L7.78 19.871H6.024L4.19 12.127h1.5l1.131 5.418c.038.188.064.336.079.443z" fill="#ffffff" />
    </svg>
  )
}

export function CanvaLogo({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="canva-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00C4CC" />
          <stop offset="50%" stopColor="#7D2AE8" />
          <stop offset="100%" stopColor="#5E17EB" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="11.5" fill="#ffffff" />
      <path
        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM6.962 7.68c.754 0 1.337.549 1.405 1.2.069.583-.171 1.097-.822 1.406-.343.171-.48.172-.549.069-.034-.069 0-.137.069-.206.617-.514.617-.926.548-1.508-.034-.378-.308-.618-.583-.618-1.2 0-2.914 2.674-2.674 4.629.103.754.549 1.646 1.509 1.646.308 0 .65-.103.96-.24.5-.264.799-.47 1.097-.8-.073-.885.704-2.046 1.851-2.046.515 0 .926.205.96.583.068.514-.377.582-.514.582s-.378-.034-.378-.17c-.034-.138.309-.07.275-.378-.035-.206-.24-.274-.446-.274-.72 0-1.131.994-1.029 1.611.035.275.172.549.447.549.205 0 .514-.31.617-.755.068-.308.343-.514.583-.514.102 0 .17.034.205.171v.138c-.034.137-.137.548-.102.651 0 .069.034.171.17.171.092 0 .436-.18.777-.459.117-.59.253-1.298.253-1.357.034-.24.137-.48.617-.48.103 0 .171.034.205.171v.138l-.136.617c.445-.583 1.097-.994 1.508-.994.172 0 .309.102.309.274 0 .103 0 .274-.069.446-.137.377-.309.96-.412 1.474 0 .137.035.274.207.274.171 0 .685-.206 1.096-.754l.007-.004c-.002-.068-.007-.134-.007-.202 0-.411.035-.754.104-.994.068-.274.411-.514.617-.514.103 0 .205.069.205.171 0 .035 0 .103-.034.137-.137.446-.24.857-.24 1.269 0 .24.034.582.102.788 0 .034.035.069.07.069.068 0 .548-.445.89-1.028-.308-.206-.48-.549-.48-.96 0-.72.446-1.097.858-1.097.343 0 .617.24.617.72 0 .308-.103.65-.274.96h.102a.77.77 0 00.584-.24.293.293 0 01.134-.117c.335-.425.83-.74 1.41-.74.48 0 .924.205.959.582.068.515-.378.618-.515.618l-.002-.002c-.138 0-.377-.035-.377-.172 0-.137.309-.068.274-.376-.034-.206-.24-.275-.446-.275-.686 0-1.13.891-1.028 1.611.034.275.171.583.445.583.206 0 .515-.308.652-.754.068-.274.343-.514.583-.514.103 0 .17.034.205.171 0 .069 0 .206-.137.652-.17.308-.171.48-.137.617.034.274.171.48.309.583.034.034.068.102.068.102 0 .069-.034.138-.137.138-.034 0-.068 0-.103-.035-.514-.205-.72-.548-.789-.891-.205.24-.445.377-.72.377-.445 0-.89-.411-.96-.926a1.609 1.609 0 01.075-.649c-.203.13-.422.203-.623.203h-.17c-.447.652-.927 1.098-1.27 1.303a.896.896 0 01-.377.104c-.068 0-.171-.035-.205-.104-.095-.152-.156-.392-.193-.667-.481.527-1.145.805-1.453.805-.343 0-.548-.206-.582-.55v-.376c.102-.754.377-1.2.377-1.337a.074.074 0 00-.069-.07c-.24 0-1.028.824-1.166 1.373l-.103.445c-.068.309-.377.515-.582.515-.103 0-.172-.035-.206-.172v-.137l.046-.233c-.435.31-.87.508-1.075.508-.308 0-.48-.172-.514-.412-.206.274-.445.412-.754.412-.352 0-.696-.24-.862-.593-.244.275-.523.553-.852.764-.48.309-1.028.549-1.68.549-.582 0-1.097-.309-1.371-.583-.412-.377-.651-.96-.686-1.509-.205-1.68.823-3.84 2.4-4.8.378-.205.755-.343 1.132-.343zm9.77 3.291c-.104 0-.172.172-.172.343 0 .274.137.583.309.755a1.74 1.74 0 00.102-.583c0-.343-.137-.515-.24-.515z"
        fill="url(#canva-grad)"
      />
    </svg>
  )
}

export function PowerPointLogo({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ppt-grad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ED6C47" />
          <stop offset="1" stopColor="#B7472A" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#ppt-grad)" />
      <text x="16" y="22.5" fill="#ffffff" fontSize="16" fontWeight="900" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif">
        P
      </text>
    </svg>
  )
}

function AbbrLogo({ text, color, className = 'w-7 h-7' }: { text: string; color: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="28" height="28" rx="6" fill={color} />
      <text x="16" y="20.5" fill="#ffffff" fontSize={text.length > 3 ? 6.8 : 8} fontWeight="900" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif">
        {text}
      </text>
    </svg>
  )
}

// singkatan yang tertulis di CV (tooltip memakai nama lengkapnya dari kamus)
const techIcons: { id: string; key?: string; name?: string; icon: ReactNode }[] = [
  { id: 'form', key: 'skills.b.1', icon: <AbbrLogo text="FORM" color="#EC4899" /> },
  { id: 'stab', key: 'skills.b.4', icon: <AbbrLogo text="STAB" color="#F59E0B" /> },
  { id: 'qa', key: 'skills.b.6', icon: <AbbrLogo text="QA" color="#0284C7" /> },
  { id: 'qc', key: 'skills.b.7', icon: <AbbrLogo text="QC" color="#10B981" /> },
  { id: 'gmp', key: 'skills.b.8', icon: <AbbrLogo text="GMP" color="#14B8A6" /> },
  { id: 'cpkb', key: 'skills.b.9', icon: <AbbrLogo text="CPKB" color="#8B5CF6" /> },
  { id: 'cpob', key: 'skills.b.10', icon: <AbbrLogo text="CPOB" color="#06B6D4" /> },
  { id: 'bpom', key: 'skills.b.11', icon: <AbbrLogo text="BPOM" color="#EF4444" /> },
]

export function SkillsSection() {
  const { t } = useLanguage()
  return (
    <section id="skills" className="relative py-24 px-4 md:px-8 overflow-hidden">
      {/* Background Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.1] z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none" stroke="currentColor">
          <path d="M0 200C300 100 400 300 720 200C1040 100 1140 300 1440 200" strokeWidth="2" />
          <path d="M0 400C300 300 400 500 720 400C1040 300 1140 500 1440 400" strokeWidth="2" />
          <path d="M0 600C300 500 400 700 720 600C1040 500 1140 700 1440 600" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Left Side: Title & Icons */}
        <div className="lg:col-span-4 flex flex-col justify-center">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-4 font-semibold">{t('skills.label')}</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            <TypewriterTitle text={t('skills.title')} />
          </h2>
          <p className="text-[var(--muted)] text-sm leading-relaxed mb-10 max-w-sm">
            <span className="text-emerald-500 font-medium">{t('skills.desc').split(' ')[0]}</span>{' '}
            {t('skills.desc').split(' ').slice(1).join(' ')}
          </p>
          
          <div className="grid grid-cols-4 gap-3 max-w-[240px]">
            {techIcons.map((tech) => (
              <div
                key={tech.id}
                title={tech.key ? t(tech.key) : tech.name}
                className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[var(--card-bg)] border border-[var(--card-border)] shadow-sm hover:scale-110 hover:border-emerald-500/50 hover:shadow-md transition-all duration-200 cursor-pointer p-1.5"
              >
                {tech.icon}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: 2 Cards */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1 */}
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-8 md:p-10 flex flex-col hover:border-[var(--muted)] transition-colors">
            <div className="flex justify-between items-start mb-10">
              <span className="text-5xl md:text-6xl font-light text-[var(--muted)]">01</span>
              <span className="text-right text-[10px] tracking-[0.2em] uppercase max-w-[140px] text-[var(--muted)] font-semibold leading-relaxed">{t('skills.card1.tag')}</span>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-[var(--background)] border border-[var(--card-border)] flex items-center justify-center mb-8 shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--foreground)]">
                <path d="M9 3v2M15 3v2M10 5a2 2 0 0 0-2 2v7.74a2 2 0 0 1-.2.87L5.33 21h13.34l-2.47-5.39a2 2 0 0 1-.2-.87V7a2 2 0 0 0-2-2h-4z"></path>
              </svg>
            </div>
            <p className="text-[var(--muted)] text-sm leading-loose mb-10 grow">
              {t('skills.card1.desc')}
            </p>
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((n) => t(`skills.b.${n}`)).map(badge => (
                <span key={badge} className="px-3 py-1.5 rounded-lg bg-[var(--background)] border border-[var(--card-border)] text-[10px] font-medium text-[var(--muted)] whitespace-nowrap">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-8 md:p-10 flex flex-col hover:border-[var(--muted)] transition-colors">
            <div className="flex justify-between items-start mb-10">
              <span className="text-5xl md:text-6xl font-light text-[var(--muted)]">02</span>
              <span className="text-right text-[10px] tracking-[0.2em] uppercase max-w-[140px] text-[var(--muted)] font-semibold leading-relaxed">{t('skills.card2.tag')}</span>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-[var(--background)] border border-[var(--card-border)] flex items-center justify-center mb-8 shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--foreground)]">
                <path d="M3 3v18h18M7 15l4-4 3 3 5-6"></path>
              </svg>
            </div>
            <p className="text-[var(--muted)] text-sm leading-loose mb-10 grow">
              {t('skills.card2.desc')}
            </p>
            <div className="flex flex-wrap gap-2">
              {[14, 15, 16, 17, 18, 19, 20].map((n) => t(`skills.b.${n}`)).map(badge => (
                <span key={badge} className="px-3 py-1.5 rounded-lg bg-[var(--background)] border border-[var(--card-border)] text-[10px] font-medium text-[var(--muted)] whitespace-nowrap">
                  {badge}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function AnimatedCounter({
  end,
  decimals = 0,
  suffix = '',
  duration = 1800,
}: {
  end: number
  decimals?: number
  suffix?: string
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const elementRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.2 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    let startTime: number | null = null
    let animationFrameId: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(easeOut * end)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step)
      } else {
        setCount(end)
      }
    }

    animationFrameId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animationFrameId)
  }, [hasStarted, end, duration])

  return (
    <span ref={elementRef} className="tabular-nums">
      {count.toFixed(decimals)}
      <span className="text-emerald-500 font-bold ml-0.5">{suffix}</span>
    </span>
  )
}

export function AboutSection() {
  const { t } = useLanguage()

  const traitsData = [
    {
      id: '01',
      title: t('trait.1.title'),
      subtitle: t('trait.1.sub'),
      tag: t('trait.1.tag'),
      desc: t('trait.1.desc'),
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      glow: 'rgba(16, 185, 129, 0.28)',
    },
    {
      id: '02',
      title: t('trait.2.title'),
      subtitle: t('trait.2.sub'),
      tag: t('trait.2.tag'),
      desc: t('trait.2.desc'),
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      glow: 'rgba(6, 182, 212, 0.28)',
    },
    {
      id: '03',
      title: t('trait.3.title'),
      subtitle: t('trait.3.sub'),
      tag: t('trait.3.tag'),
      desc: t('trait.3.desc'),
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
        </svg>
      ),
      glow: 'rgba(245, 158, 11, 0.28)',
    },
    {
      id: '04',
      title: t('trait.4.title'),
      subtitle: t('trait.4.sub'),
      tag: t('trait.4.tag'),
      desc: t('trait.4.desc'),
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      glow: 'rgba(168, 85, 247, 0.28)',
    },
  ];

  const [activeTraitIndex, setActiveTraitIndex] = useState(0);
  // kartu depan dibuang (terlempar + memudar) sebagai lapisan sendiri, sementara kartu berikutnya naik ke depan
  const [leavingTrait, setLeavingTrait] = useState<number | null>(null);

  const handleCardClick = () => {
    if (leavingTrait !== null) return;
    setLeavingTrait(activeTraitIndex);
    setActiveTraitIndex((prev) => (prev + 1) % traitsData.length);
    setTimeout(() => setLeavingTrait(null), 460);
  };

  const currentTrait = traitsData[activeTraitIndex];
  const renderTraitCard = (trait: (typeof traitsData)[number], dotIdx: number, animation?: string) => (
              <div 
                className="relative w-full min-h-[350px] bg-gradient-to-b from-zinc-800 via-zinc-900 to-zinc-950 dark:from-[#22242B] dark:via-[#1B1D23] dark:to-[#14151A] rounded-3xl border border-white/15 shadow-2xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden will-change-transform transition-colors duration-300 group-hover:border-emerald-500/40"
                style={{
                  boxShadow: `0 20px 40px -10px ${trait.glow}, 0 10px 20px -5px rgba(0,0,0,0.5)`,
                  animation,
                }}
              >
                {/* Header: ID + Badge + Icon */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-[10px] font-mono tracking-widest text-white/70">
                      <span>{trait.id}</span>
                      <span>/</span>
                      <span>04</span>
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:scale-110 group-hover:bg-white/15 transition-all">
                      {trait.icon}
                    </div>
                  </div>

                  <p className="text-[9px] tracking-[0.25em] uppercase text-white/50 mb-1.5 font-semibold">
                    {t('trait.card.label')}
                  </p>
                  <h3 className="text-3xl font-extrabold text-white tracking-tight mb-1">
                    {trait.title}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-400 mb-4 tracking-wide">
                    {trait.subtitle}
                  </p>

                  <p className="text-xs text-white/70 leading-relaxed">
                    {trait.desc}
                  </p>
                </div>

                {/* Footer: Pagination dots & Click hint */}
                <div className="pt-4 border-t border-white/10 mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {traitsData.map((_, idx) => (
                      <span
                        key={idx}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          idx === dotIdx
                            ? 'w-5 bg-emerald-400'
                            : 'w-1.5 bg-white/20'
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-1 text-[10px] tracking-wider uppercase font-semibold text-white/50 group-hover:text-emerald-400 transition-colors">
                    <span>{t('trait.change')}</span>
                    <span className="text-xs">↻</span>
                  </div>
                </div>
              </div>
  );
  const nextTrait = traitsData[(activeTraitIndex + 1) % traitsData.length];

  return (
    <section id="about" className="relative py-24 px-4 md:px-8 overflow-hidden">
      {/* Background Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.1] z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none" stroke="currentColor">
          <path d="M0 200C300 100 400 300 720 200C1040 100 1140 300 1440 200" strokeWidth="2" />
          <path d="M0 400C300 300 400 500 720 400C1040 300 1140 500 1440 400" strokeWidth="2" />
          <path d="M0 600C300 500 400 700 720 600C1040 500 1140 700 1440 600" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-4 font-semibold">{t('about.label')}</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 tracking-tight">
          <TypewriterTitle text={t('about.title')} />
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative">
          
          {/* Main Info Column */}
          <div className="lg:col-span-8 flex flex-col">
            
            {/* Header: Photo + Name + Stats */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10">
              <img src="/profile.png" alt="apt. Aulia Marwa Andini Abidin, S.Farm" className="w-24 h-24 rounded-full object-cover object-top border-[3px] border-[var(--card-border)] bg-[var(--card-bg)] shrink-0 shadow-lg" />
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-xl md:text-2xl font-bold tracking-wide">apt. AULIA MARWA ANDINI ABIDIN, S.Farm</h3>
                  <svg width="20" height="20" viewBox="0 0 24 24" className="text-emerald-500 fill-current">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                  </svg>
                </div>
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  <div>
                    <p className="text-[10px] tracking-widest text-[var(--muted)] uppercase mb-1 font-semibold">{t('about.ipk')}</p>
                    <p className="text-sm font-bold">3.79/4.00</p>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-widest text-[var(--muted)] uppercase mb-1 font-semibold">{t('about.ipk2')}</p>
                    <p className="text-sm font-bold">3.10/4.00</p>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-widest text-[var(--muted)] uppercase mb-1 font-semibold">{t('about.year')}</p>
                    <p className="text-sm font-bold">2026</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <p className="text-[var(--muted)] text-sm md:text-base leading-loose mb-6 text-justify">
              {t('about.bio1')}
            </p>
            <p className="text-[var(--muted)] text-sm md:text-base leading-loose mb-12">
              {t('about.cv.prompt')}{' '}
              <a href="/CV_AULIA_MARWA_ANDINI_ABIDIN.pdf" target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)] font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity">
                {t('about.cv.link')}
              </a>.
            </p>

            {/* Currently */}
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-6 font-semibold">{t('about.current.label')}</p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center shrink-0 text-[var(--muted)] shadow-sm">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold">{t('about.current.1.title')}</p>
                    <p className="text-xs text-[var(--muted)]">{t('about.current.1.sub')}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center shrink-0 text-[var(--muted)] shadow-sm">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3v2M15 3v2M10 5a2 2 0 0 0-2 2v7.74a2 2 0 0 1-.2.87L5.33 21h13.34l-2.47-5.39a2 2 0 0 1-.2-.87V7a2 2 0 0 0-2-2h-4z"></path></svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold">{t('about.current.2.title')}</p>
                    <p className="text-xs text-[var(--muted)]">{t('about.current.2.sub')}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] flex items-center justify-center shrink-0 text-[var(--muted)] shadow-sm">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold">{t('about.current.3.title')}</p>
                    <p className="text-xs text-[var(--muted)]">{t('about.current.3.sub')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive Trait Deck */}
          <div 
            className="flex lg:col-span-4 justify-center lg:justify-end items-center relative pr-0 lg:pr-6 select-none mt-10 lg:mt-0"
          >
            <div 
              className="relative w-64 sm:w-72 min-h-[350px] cursor-pointer group"
              onClick={handleCardClick}
              title={t('trait.hint')}
            >
              {/* Back Card 2 (Layer 3) */}
              <div 
                className="absolute inset-0 bg-zinc-900/90 dark:bg-[#121316] rounded-3xl border border-white/5 shadow-xl pointer-events-none"
                style={{
                  transform: 'translate(20px, 16px) rotate(10deg) scale(0.92)',
                  opacity: 0.35,
                }}
              />

              {/* Middle Card (Layer 2) */}
              <div 
                className="absolute inset-0 bg-zinc-800/95 dark:bg-[#1A1C22] rounded-3xl border border-white/10 shadow-2xl pointer-events-none p-6 flex flex-col justify-between"
                style={{
                  transform: 'translate(10px, 8px) rotate(5deg) scale(0.96)',
                  opacity: 0.7,
                  animation: leavingTrait !== null ? 'deckFade 0.5s ease both' : undefined,
                }}
              >
                <div className="flex items-center justify-between opacity-50">
                  <span className="text-[9px] tracking-widest uppercase font-mono text-white/70">{nextTrait.id}</span>
                  <span className="text-[10px] tracking-wider uppercase text-white/70">{nextTrait.title}</span>
                </div>
                <div className="opacity-25 text-center font-bold text-base text-white">
                  {nextTrait.subtitle}
                </div>
              </div>

              {/* Front Card (Active Card): kartu baru naik ke depan dari posisi kartu tengah */}
              <div key={`front-${activeTraitIndex}`}>
                {renderTraitCard(currentTrait, activeTraitIndex, leavingTrait !== null ? 'deckRise 0.5s cubic-bezier(0.25, 1, 0.5, 1) both' : undefined)}
              </div>
              {/* Kartu yang dibuang: terlempar ke kanan-atas sambil memudar */}
              {leavingTrait !== null && (
                <div className="absolute inset-0 pointer-events-none z-30" aria-hidden="true">
                  {renderTraitCard(traitsData[leavingTrait], leavingTrait, 'deckThrow 0.46s cubic-bezier(0.25, 0.8, 0.3, 1) both')}
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Moto Hidup - Interactive Quote with Shimmer & Emblem */}
        <div className="mt-16 sm:mt-24 text-center max-w-4xl mx-auto px-4 relative group cursor-default">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 group-hover:shadow-lg group-hover:shadow-emerald-500/10 transition-all duration-300 border border-emerald-500/20">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-serif italic tracking-wide text-[var(--foreground)] leading-relaxed group-hover:text-emerald-400 transition-colors duration-300">
            {t('about.quote')}
          </blockquote>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 mx-auto mt-6 rounded-full group-hover:w-36 transition-all duration-500"></div>
        </div>

        {/* Angka Kunci / Key Metrics with Animated Count-Up Counters */}
        <div className="mt-14 sm:mt-20 pt-10 border-t border-[var(--card-border)]/60 grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8 font-sans">
          {/* Item 1: IPK Profesi */}
          <div className="group p-5 sm:p-6 rounded-3xl bg-[var(--card-bg)]/40 hover:bg-[var(--card-bg)] border border-[var(--card-border)]/50 hover:border-emerald-500/40 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer">
            <div>
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--foreground)] mb-2 font-sans group-hover:text-emerald-500 transition-colors duration-300">
                <AnimatedCounter end={3.79} decimals={2} suffix="" duration={1600} />
              </div>
              <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors block">
                {t('metric.ipk')}
              </span>
            </div>
            <p className="text-[11px] text-[var(--muted)] mt-3 pt-3 border-t border-[var(--card-border)]/40 opacity-80 group-hover:opacity-100 transition-opacity">
              {t('metric.ipk.sub')}
            </p>
          </div>

          {/* Item 2: IPK S1 */}
          <div className="group p-5 sm:p-6 rounded-3xl bg-[var(--card-bg)]/40 hover:bg-[var(--card-bg)] border border-[var(--card-border)]/50 hover:border-emerald-500/40 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer">
            <div>
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--foreground)] mb-2 font-sans group-hover:text-emerald-500 transition-colors duration-300">
                <AnimatedCounter end={3.10} decimals={2} suffix="" duration={1400} />
              </div>
              <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors block">
                {t('metric.ipk2')}
              </span>
            </div>
            <p className="text-[11px] text-[var(--muted)] mt-3 pt-3 border-t border-[var(--card-border)]/40 opacity-80 group-hover:opacity-100 transition-opacity">
              {t('metric.ipk2.sub')}
            </p>
          </div>

          {/* Item 3: Penempatan Magang */}
          <div className="group p-5 sm:p-6 rounded-3xl bg-[var(--card-bg)]/40 hover:bg-[var(--card-bg)] border border-[var(--card-border)]/50 hover:border-emerald-500/40 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer">
            <div>
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--foreground)] mb-2 font-sans group-hover:text-emerald-500 transition-colors duration-300">
                <AnimatedCounter end={5} decimals={0} suffix="" duration={1500} />
              </div>
              <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors block">
                {t('metric.org')}
              </span>
            </div>
            <p className="text-[11px] text-[var(--muted)] mt-3 pt-3 border-t border-[var(--card-border)]/40 opacity-80 group-hover:opacity-100 transition-opacity">
              {t('metric.org.sub')}
            </p>
          </div>

          {/* Item 4: Kemampuan Teknis (jumlah sesuai daftar di CV) */}
          <div className="group p-5 sm:p-6 rounded-3xl bg-[var(--card-bg)]/40 hover:bg-[var(--card-bg)] border border-[var(--card-border)]/50 hover:border-emerald-500/40 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer">
            <div>
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--foreground)] mb-2 font-sans group-hover:text-emerald-500 transition-colors duration-300">
                <AnimatedCounter end={20} decimals={0} suffix="" duration={1800} />
              </div>
              <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors block">
                {t('metric.skill')}
              </span>
            </div>
            <p className="text-[11px] text-[var(--muted)] mt-3 pt-3 border-t border-[var(--card-border)]/40 opacity-80 group-hover:opacity-100 transition-opacity">
              {t('metric.skill.sub')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export function EducationSection() {
  const { t } = useLanguage()

  const educationList = [
    {
      number: '01',
      institution: t('education.1.institution'),
      program: t('education.1.program'),
      degree: t('education.1.degree'),
      period: t('education.1.period'),
      gpa: t('education.1.gpa'),
      gpaLabel: t('about.ipk'),
      status: t('education.1.status'),
      description: t('education.1.desc'),
      image: '/projects/wisuda-profesi.jpg',
      imagePos: '50% 40%',
      ratio: 1280 / 854, // tinggi bingkai mengikuti rasio foto
      imageTag: t('education.1.tag'),
      imageCaption: t('education.1.caption'),
      highlights: [
        t('education.1.h1'),
        t('education.1.h2'),
        t('education.1.h3'),
        t('education.1.h4'),
        t('education.1.h5'),
      ],
    },
    {
      number: '02',
      institution: t('education.2.institution'),
      program: t('education.2.program'),
      degree: t('education.2.degree'),
      period: t('education.2.period'),
      gpa: t('education.2.gpa'),
      gpaLabel: t('about.ipk2'),
      status: t('education.2.status'),
      description: t('education.2.desc'),
      image: '/projects/wisuda-s1.jpg',
      imagePos: '50% 50%',
      ratio: 1600 / 2000, // tinggi bingkai mengikuti rasio foto, jadi foto utuh tanpa potongan // tinggi bingkai mengikuti rasio foto, jadi foto utuh tanpa potongan
      imageTag: t('education.2.tag'),
      imageCaption: t('education.2.caption'),
      highlights: [] as string[],
    },
  ]

  return (
    <section id="education" className="relative py-24 px-4 md:px-8 overflow-hidden font-sans">
      {/* Background Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.1] z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none" stroke="currentColor">
          <path d="M0 200C300 100 400 300 720 200C1040 100 1140 300 1440 200" strokeWidth="2" />
          <path d="M0 400C300 300 400 500 720 400C1040 300 1140 500 1440 400" strokeWidth="2" />
          <path d="M0 600C300 500 400 700 720 600C1040 500 1140 700 1440 600" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-4 font-semibold font-sans">{t('education.label')}</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-sans">
            <TypewriterTitle text={t('education.title')} />
          </h2>
        </div>

        <div className="flex flex-col gap-10 md:gap-14">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--muted)] rounded-3xl p-6 sm:p-8 md:p-10 transition-all duration-300 shadow-sm hover:shadow-xl font-sans"
            >
              <div
                className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Text Content inside the single card */}
                <div className="w-full lg:w-7/12 flex flex-col justify-between">
                  <div>
                    {/* Top Bar: UI Logo + Period + GPA */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div className="flex items-center gap-3.5">
                        <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-500 flex items-center justify-center shrink-0">
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 10 12 5 2 10l10 5 10-5z" />
                            <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
                          </svg>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-sans tracking-widest uppercase text-emerald-500 font-semibold">
                              {edu.period}
                            </span>
                            <span className="text-xs text-[var(--muted)]">•</span>
                            <span className="text-[10px] font-sans tracking-wider uppercase text-[var(--muted)] font-semibold">
                              NO. {edu.number}
                            </span>
                          </div>
                          <h4 className="text-sm font-bold text-[var(--foreground)] font-sans">
                            {edu.institution}
                          </h4>
                        </div>
                      </div>

                      <div className="text-right bg-[var(--background)] border border-[var(--card-border)] rounded-2xl px-4 py-2 shrink-0 shadow-sm">
                        <p className="text-[10px] uppercase font-sans tracking-wider text-[var(--muted)] font-semibold">{edu.gpaLabel}</p>
                        <p className="text-xl md:text-2xl font-black font-sans text-emerald-500">{edu.gpa}</p>
                      </div>
                    </div>

                    {/* Program Title & Degree */}
                    <div className="mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold font-sans text-[var(--foreground)] tracking-tight">
                        {edu.program}
                      </h3>
                      <p className="text-xs md:text-sm font-semibold font-sans text-[var(--muted)] mt-1">
                        {t('education.degreeLabel')}: <span className="text-[var(--foreground)] font-bold">{edu.degree}</span>
                      </p>
                    </div>

                    <p className="text-sm font-sans text-[var(--muted)] leading-relaxed mb-6 text-justify">
                      {edu.description}
                    </p>

                    {/* Competency Highlights */}
                    {edu.highlights.length > 0 && (
                    <div className="space-y-2.5 pt-5 border-t border-[var(--card-border)]">
                      <p className="text-[10px] font-sans tracking-widest uppercase font-semibold text-[var(--muted)] mb-3">
                        {t('education.highlights.label')}
                      </p>
                      {edu.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs md:text-sm font-sans text-[var(--foreground)] opacity-90">
                          <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    )}
                  </div>

                  <div className="mt-8 pt-5 border-t border-[var(--card-border)]/60 flex items-center justify-between">
                    <span className="text-[10px] font-sans tracking-widest uppercase text-[var(--muted)] font-semibold">
                      {edu.institution}
                    </span>
                    <span className="text-xs font-semibold font-sans text-emerald-500">
                      {edu.status}
                    </span>
                  </div>
                </div>

                {/* Photo Column inside the SAME single card */}
                <div className="w-full lg:w-5/12 flex items-center">
                  <div style={{ aspectRatio: edu.ratio }} className="relative w-full rounded-2xl overflow-hidden shadow-md border border-[var(--card-border)] bg-[var(--background)] group">
                    <img
                      src={edu.image}
                      alt={edu.program}
                      style={{ objectPosition: edu.imagePos }}
                      className={`absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-500 object-cover`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* University badge top-left */}
                    <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-semibold shadow-lg font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span>{edu.institution}</span>
                    </div>

                    {/* Period pill top-right */}
                    <div className="absolute top-4 right-4 inline-flex items-center px-3 py-1.5 rounded-full bg-emerald-500/90 backdrop-blur-md text-white text-[11px] font-sans font-bold shadow-lg">
                      {edu.period}
                    </div>

                    {/* Bottom caption */}
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <span className="text-[10px] uppercase font-sans tracking-widest text-emerald-400 font-semibold block mb-1">
                        {edu.imageTag}
                      </span>
                      <p className="text-sm md:text-base font-bold font-sans drop-shadow-md">
                        {edu.imageCaption}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AcademicSection() {
  const { t } = useLanguage()
  // Pengalaman proyek dan kepanitiaan sesuai CV
  const icons = [
    <path key="a" d="M3 3v18h18M7 15l4-4 3 3 5-6" />,
    <path key="b" d="M9 3v2M15 3v2M10 5a2 2 0 0 0-2 2v7.74a2 2 0 0 1-.2.87L5.33 21h13.34l-2.47-5.39a2 2 0 0 1-.2-.87V7a2 2 0 0 0-2-2h-4z" />,
    <path key="c" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />,
  ]
  const entries = [1, 2, 3].map((n, i) => ({
    period: t(`academic.${n}.period`),
    role: t(`academic.${n}.role`),
    sub: t(`academic.${n}.sub`),
    duties: [1, 2, 3, 4].map((k) => t(`academic.${n}.b${k}`)),
    tags: [1, 2, 3, 4].map((k) => t(`academic.${n}.tag${k}`)),
    icon: icons[i],
  }))

  return (
    <section id="academic" className="relative py-24 px-4 md:px-8 overflow-hidden font-sans">
      {/* Background Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.1] z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none" stroke="currentColor">
          <path d="M0 200C300 100 400 300 720 200C1040 100 1140 300 1440 200" strokeWidth="2" />
          <path d="M0 400C300 300 400 500 720 400C1040 300 1140 500 1440 400" strokeWidth="2" />
          <path d="M0 600C300 500 400 700 720 600C1040 500 1140 700 1440 600" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-4 font-semibold">{t('academic.label')}</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <TypewriterTitle text={t('academic.title')} />
          </h2>
        </div>

        {/* Pengalaman akademik sesuai CV: dua posisi asisten laboratorium */}
        <div className="flex flex-col gap-10 md:gap-14">
        {entries.map((entry, eIdx) => (
        <div key={eIdx} className="bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--muted)] rounded-3xl p-6 sm:p-8 md:p-10 transition-all duration-300 shadow-sm hover:shadow-xl">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-stretch">
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 shrink-0">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {entry.icon}
                  </svg>
                </div>
                <span className="text-[10px] tracking-[0.3em] uppercase text-emerald-500 font-semibold">{entry.period}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">{entry.role}</h3>
              <p className="text-sm font-semibold text-[var(--muted)] mb-6">{entry.sub}</p>
              <div className="flex flex-wrap gap-2">
                {entry.tags.map((c) => (
                  <span key={c} className="px-3 py-1.5 rounded-full bg-[var(--background)] border border-[var(--card-border)] text-xs font-semibold text-[var(--foreground)]">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-7/12 lg:pl-12 lg:border-l border-[var(--card-border)]">
              <p className="text-[10px] tracking-widest uppercase font-semibold text-[var(--muted)] mb-5">{t('academic.highlights')}</p>
              <div className="space-y-4">
                {entry.duties.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm md:text-base text-[var(--foreground)] opacity-90 leading-relaxed">
                    <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        ))}
        </div>
      </div>
    </section>
  )
}

export function PersonalSkillsSection() {
  const { t } = useLanguage()

  // 6 kemampuan personal persis seperti di CV (tanpa uraian tambahan)
  const softSkills = Array.from({ length: 6 }, (_, i) => ({ title: t(`personal.soft.${i + 1}`), desc: '' }))

  return (
    <section id="personal-skills" className="relative py-24 px-4 md:px-8 overflow-hidden">
      {/* Background Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.1] z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none" stroke="currentColor">
          <path d="M0 200C300 100 400 300 720 200C1040 100 1140 300 1440 200" strokeWidth="2" />
          <path d="M0 400C300 300 400 500 720 400C1040 300 1140 500 1440 400" strokeWidth="2" />
          <path d="M0 600C300 500 400 700 720 600C1040 500 1140 700 1440 600" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[var(--muted)] mb-4 font-semibold">{t('personal.label')}</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <TypewriterTitle text={t('personal.title')} />
          </h2>
          <p className="text-[var(--muted)] text-sm md:text-base max-w-xl">
            {t('personal.sub')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Soft Skills */}
          <div className="lg:col-span-12 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-3xl p-8 md:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="mb-8 pb-4 border-b border-[var(--card-border)]">
                <div>
                  <span className="text-[10px] font-sans tracking-widest uppercase text-emerald-500 font-semibold block mb-1">
                    {t('personal.soft.label')}
                  </span>
                  <h3 className="text-2xl font-bold">{t('personal.soft.title')}</h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {softSkills.map((skill, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[var(--background)] border border-[var(--card-border)] hover:border-[var(--muted)] transition-colors">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                      <h4 className="font-bold text-sm text-[var(--foreground)]">{skill.title}</h4>
                    </div>
                    {skill.desc && <p className="text-xs text-[var(--muted)] leading-relaxed">{skill.desc}</p>}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--card-border)] flex items-center justify-between text-xs text-[var(--muted)]">
              <span>{t('personal.orientation')}</span>
              <span className="font-sans text-emerald-500 font-semibold">{t('personal.quality')}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export function AwardsSection() {
  const { t } = useLanguage()
  const [activeAwardIndex, setActiveAwardIndex] = useState(0)

  const certificationsList = [1, 2, 3, 4, 5].map((n) => ({
    id: n,
    title: t(`award.${n}.title`),
    issuer: t(`award.${n}.issuer`),
    year: t(`award.${n}.date`),
    category: t(`award.${n}.cat`),
    description: t(`award.${n}.desc`),
    image: ['/projects/sertifikat-kompetensi.jpg', '/projects/sertifikat-qaqc.jpg', '/projects/sertifikat-cpkb.jpg', '/projects/sertifikat-penghargaan.jpg', '/projects/sertifikat-excel.jpg'][n - 1],
    fit: 'contain' as const, // sertifikat tampil utuh tanpa terpotong
  }))

  const getCardStyle = (offset: number) => {
    if (offset === 0) {
      return {
        transform: 'translate(-50%, -50%) scale(1)',
        zIndex: 30,
        opacity: 1,
        filter: 'brightness(1)',
        cursor: 'default',
      }
    }
    if (offset === 1) {
      return {
        transform: 'translate(calc(-50% + 42%), -50%) scale(0.85)',
        zIndex: 20,
        opacity: 0.75,
        filter: 'brightness(0.72)',
        cursor: 'pointer',
      }
    }
    if (offset === -1) {
      return {
        transform: 'translate(calc(-50% - 42%), -50%) scale(0.85)',
        zIndex: 20,
        opacity: 0.75,
        filter: 'brightness(0.72)',
        cursor: 'pointer',
      }
    }
    if (offset === 2) {
      return {
        transform: 'translate(calc(-50% + 76%), -50%) scale(0.72)',
        zIndex: 10,
        opacity: 0.45,
        filter: 'brightness(0.52)',
        cursor: 'pointer',
      }
    }
    if (offset === -2) {
      return {
        transform: 'translate(calc(-50% - 76%), -50%) scale(0.72)',
        zIndex: 10,
        opacity: 0.45,
        filter: 'brightness(0.52)',
        cursor: 'pointer',
      }
    }
    return {
      transform: 'translate(-50%, -50%) scale(0.5)',
      zIndex: 0,
      opacity: 0,
      filter: 'brightness(0.3)',
      cursor: 'pointer',
    }
  }

  return (
    <section id="awards" className="relative py-20 px-4 md:px-8 overflow-hidden font-sans">
      {/* Background Waves */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.1] z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none" stroke="currentColor">
          <path d="M0 200C300 100 400 300 720 200C1040 100 1140 300 1440 200" strokeWidth="2" />
          <path d="M0 400C300 300 400 500 720 400C1040 300 1140 500 1440 400" strokeWidth="2" />
          <path d="M0 600C300 500 400 700 720 600C1040 500 1140 700 1440 600" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header - Identik dengan susunan Work Gallery */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 gap-4">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3 font-semibold font-sans">
              {t('awards.label')}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-3 font-sans">
              <TypewriterTitle text={t('awards.title')} />
            </h2>
            <p className="text-[var(--muted)] text-sm max-w-md font-sans">
              {t('awards.sub')}
            </p>
          </div>
          <a
            href={certificationsList[activeAwardIndex].image}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--foreground)] text-[var(--background)] text-sm font-medium hover:opacity-90 transition-colors shrink-0"
          >
            {t('awards.openDoc')}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>

        {/* 3D Cover Flow Carousel - Lurus Sempurna Tanpa Miring, Jarak Rapat */}
        <div className="relative w-full h-[200px] sm:h-[250px] md:h-[290px] lg:h-[325px] flex items-center justify-center overflow-visible mt-4 mb-2 select-none">
          {certificationsList.map((item, index) => {
            let offset = index - activeAwardIndex
            const total = certificationsList.length
            while (offset > total / 2) offset -= total
            while (offset < -total / 2) offset += total

            const isActive = offset === 0
            const style = getCardStyle(offset)

            return (
              <div
                key={item.id}
                onClick={() => setActiveAwardIndex(index)}
                className="absolute top-1/2 left-1/2 w-[70%] sm:w-[56%] md:w-[48%] lg:w-[42%] max-w-[490px] transition-all duration-500 ease-out select-none"
                style={style}
              >
                <div
                  className={`rounded-2xl sm:rounded-3xl overflow-hidden border transition-all duration-300 ${
                    isActive
                      ? 'border-[var(--card-border)] ring-1 ring-[var(--card-border)] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.6)]'
                      : 'border-white/10 hover:brightness-125 shadow-xl'
                  }`}
                >
                  <div className={`aspect-[16/10] flex items-center justify-center overflow-hidden ${'bg-white'}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      draggable={false}
                      className={`w-full h-full select-none object-center ${item.fit === 'contain' ? 'object-contain' : 'object-cover'}`}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Active certificate info - Berjarak Pas & Rapat di Bawah Foto */}
        <div className="text-center mt-3 sm:mt-4 max-w-3xl mx-auto px-4 font-sans">
          <p className="text-[11px] font-sans tracking-widest uppercase text-emerald-500 font-semibold mb-1.5">
            {certificationsList[activeAwardIndex].category} • {certificationsList[activeAwardIndex].year}
          </p>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 font-sans text-[var(--foreground)]">
            {certificationsList[activeAwardIndex].title}
          </h3>
          <p className="text-xs md:text-sm font-semibold text-[var(--muted)] mb-2 font-sans">
            {t('awards.issuer')}: {certificationsList[activeAwardIndex].issuer}
          </p>
          <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed mb-4 max-w-2xl mx-auto font-sans">
            {certificationsList[activeAwardIndex].description}
          </p>
          <a
            href={certificationsList[activeAwardIndex].image}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold underline underline-offset-4 hover:opacity-75 transition-opacity font-sans text-[var(--foreground)]"
          >
            {t('awards.viewOriginal')}
          </a>
        </div>
      </div>
    </section>
  )
}
