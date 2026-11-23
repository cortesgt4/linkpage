/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface LinkItem {
  id: string;
  label: string;
  /* Cole aqui o seu link de afiliado da Amazon no lugar de "#" */
  href: string;
}

interface LinkBlock {
  title: string;
  items: LinkItem[];
}

/* ==========================================================================
   CONFIGURAÇÃO DOS LINKS DE AFILIADO (AMAZON)
   Substitua cada href: '#' pelo seu link de associado Amazon.
   ========================================================================== */
const LINK_BLOCKS: LinkBlock[] = [
  {
    title: 'Destaques',
    items: [
      {
        id: 'gta-vi',
        label: '🎮 Jogo GTA VI (Garanta o seu)',
        // LINK DE AFILIADO (Jogo GTA VI)
        href: 'https://link.amazon/B07FROFmu',
      },
      {
        id: 'ps5',
        label: '🕹️ Console PlayStation 5',
        // LINK DE AFILIADO (Console PlayStation 5)
        href: 'https://link.amazon/B06V12qeN',
      },
    ],
  },
  {
    title: 'Acessórios',
    items: [
      {
        id: 'dualsense',
        label: '🎯 Controle DualSense PS5',
        // LINK DE AFILIADO (Controle DualSense PS5)
        href: 'https://link.amazon/B04H6s150',
      },
      {
        id: 'suporte-controle',
        label: '🦾 Suporte de Controle GTA VI',
        // LINK DE AFILIADO (Suporte de Controle PS5 / GTA VI)
        href: 'https://s.shopee.com.br/1C7KHOD9V',
      },
    ],
  },
  {
    title: 'Setup & Decoração',
    items: [
      {
        id: 'luminaria-led',
        label: '💡 Luminária LED de Mesa GTA VI',
        // LINK DE AFILIADO (Luminária LED de Mesa GTA VI)
        href: 'https://s.shopee.com.br/W8NvCMJ8c',
      },
      {
        id: 'quadro-decorativo',
        label: '🖼️ Quadro Decorativo GTA VI',
        // LINK DE AFILIADO (Quadro Decorativo GTA VI)
        href: 'https://s.shopee.com.br/gRo7VLfnh',
      },
      {
        id: 'copo-termico',
        label: '🥤 Copo Térmico GTA VI',
        // LINK DE AFILIADO (Copo Térmico GTA VI)
        href: 'https://s.shopee.com.br/qlEJoL2Si',
      },
    ],
  },
];

/* ==========================================================================
   CONFIGURAÇÃO DAS IMAGENS (PERFIL + FUNDO DO SITE) E REDES SOCIAIS
   1) PROFILE_IMAGE_URL: Logo / foto de perfil redonda no topo
   2) BACKGROUND_IMAGE_URL: Imagem de fundo do site
   ========================================================================== */
const PROFILE_IMAGE_URL =
  '/assets/aistudio/WhatsApp_Image_2026-11-23_at_14.24.39_3e3b959f.jpeg';

const BACKGROUND_IMAGE_URL =
  '/assets/aistudio/WhatsApp_Image_2026-11-23_at_14.19.44_1f387c31.jpeg';

const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/cortesgt4vi?fqnt=MW1lZWJxMTN6MHZqOA==',
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@cortesgt4v?_r=1&_t=ZS-9BeP7htX17N',
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@cortesgt4vi?si=98hlduPvV1jUrUYE',
  },
] as const;

function SocialIcon({ name }: { name: 'Instagram' | 'TikTok' | 'YouTube' }) {
  if (name === 'Instagram') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    );
  }
  if (name === 'TikTok') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.87a8.16 8.16 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.3Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function App() {
  const [avatarFailed, setAvatarFailed] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!toastMessage) return;
    const timer = window.setTimeout(() => setToastMessage(null), 2800);
    return () => window.clearTimeout(timer);
  }, [toastMessage]);

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    label: string
  ) => {
    if (href === '#') {
      event.preventDefault();
      setToastMessage(`Configure o link de "${label}" no arquivo para ativar o redirecionamento.`);
    }
  };

  return (
    <div className="relative min-h-dvh w-full overflow-x-hidden bg-[#070a24] text-white selection:bg-[#ff3ea5]/40 selection:text-white">
      {/* ====================================================================
          IMAGEM DE FUNDO DO SITE (Segunda imagem enviada)
          ==================================================================== */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0">
        <img
          src={BACKGROUND_IMAGE_URL}
          alt=""
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center"
        />
        {/* Película sutil Vice City para manter leitura perfeita dos textos sobre a foto */}
        <div className="vice-bg-scrim absolute inset-0" />
        {/* Brilho ambiente discreto rosa/azul nas bordas */}
        <div
          className="absolute inset-0 opacity-45"
          style={{
            background:
              'radial-gradient(circle at 18% 20%, rgba(255, 62, 165, 0.24), transparent 45%), radial-gradient(circle at 82% 78%, rgba(0, 229, 255, 0.2), transparent 48%)',
          }}
        />
      </div>

      {/* Conteúdo centralizado e otimizado para celular e desktop */}
      <main className="relative z-10 mx-auto flex min-h-dvh w-full max-w-[520px] flex-col justify-between px-4 pt-10 pb-8 sm:px-6 sm:pt-14 sm:pb-10">
        <div>
          {/* ==============================================================
              CABEÇALHO: Foto/Logo circular neon (Primeira imagem) + @cortesgta
              ============================================================== */}
          <header
            className="animate-vice-enter flex flex-col items-center text-center"
            style={{ animationDelay: '40ms' }}
          >
            {/* Espaço circular para foto de perfil com borda iluminada em neon rosa/azul */}
            <div className="relative mb-4 p-[3px] rounded-full bg-gradient-to-tr from-[#ff3ea5] via-[#a855f7] to-[#00e5ff] shadow-[0_0_28px_rgba(255,62,165,0.5),0_0_18px_rgba(0,229,255,0.4)]">
              <div className="relative h-24 w-24 sm:h-28 sm:w-28 overflow-hidden rounded-full bg-[#09081d]">
                {!avatarFailed ? (
                  <img
                    /* TROQUE A IMAGEM DE PERFIL ALTERANDO PROFILE_IMAGE_URL ACIMA */
                    src={PROFILE_IMAGE_URL}
                    alt="Foto de perfil @cortesgta"
                    referrerPolicy="no-referrer"
                    onError={() => setAvatarFailed(true)}
                    className="h-full w-full object-cover object-center"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#191142] via-[#34124e] to-[#09081d]">
                    <span
                      className="text-2xl font-extrabold tracking-wider text-white"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      VI
                    </span>
                  </div>
                )}
              </div>
            </div>

            <h1
              className="text-2xl sm:text-[1.75rem] font-bold tracking-[0.04em] text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.65)]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              @cortesgta
            </h1>

            <p className="mt-2 max-w-md text-sm sm:text-[15px] font-medium leading-relaxed text-white/95 tracking-[0.01em] drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)]">
              Os melhores itens e setups para jogar GTA VI
            </p>
          </header>

          {/* ==============================================================
              BLOCOS DE LINKS DE AFILIADO (Glassmorphism + Neon sobre o fundo)
              ============================================================== */}
          <nav aria-label="Links recomendados" className="mt-8 space-y-6">
            {LINK_BLOCKS.map((block, blockIndex) => (
              <section
                key={block.title}
                aria-labelledby={`block-title-${blockIndex}`}
                className="animate-vice-enter"
                style={{ animationDelay: `${110 + blockIndex * 70}ms` }}
              >
                <div className="mb-2.5 flex items-center gap-3 px-1">
                  <h2
                    id={`block-title-${blockIndex}`}
                    className="text-xs font-semibold tracking-[0.14em] uppercase text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {block.title}
                  </h2>
                  <span
                    aria-hidden="true"
                    className="h-px flex-1 bg-gradient-to-r from-[#ff3ea5]/75 via-[#00e5ff]/60 to-transparent"
                  />
                </div>

                <div className="space-y-3">
                  {block.items.map((item) => (
                    <a
                      key={item.id}
                      /* Substitua href="#" pelo link de afiliado Amazon correspondente no array LINK_BLOCKS */
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => handleLinkClick(e, item.href, item.label)}
                      className="vice-glass-card group flex min-h-[56px] w-full items-center justify-between gap-3 rounded-2xl px-4 py-3.5 text-left text-[15px] sm:text-base font-semibold text-white outline-none focus-visible:ring-2 focus-visible:ring-[#00e5ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#120b2e]"
                    >
                      <span className="truncate tracking-[0.01em]">{item.label}</span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0 text-[#00e5ff]/85 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                      />
                    </a>
                  ))}
                </div>
              </section>
            ))}
          </nav>
        </div>

        {/* ==============================================================
            RODAPÉ: Redes sociais minimalistas + Aviso legal Amazon
            ============================================================== */}
        <footer
          className="animate-vice-enter mt-10 flex flex-col items-center gap-4 pt-4 text-center"
          style={{ animationDelay: '340ms' }}
        >
          <div className="flex items-center justify-center gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${social.name} de @cortesgta`}
                onClick={(e) => handleLinkClick(e, social.href, social.name)}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-md transition-all duration-150 hover:-translate-y-0.5 hover:bg-black/55 hover:text-[#00e5ff] hover:shadow-[0_0_16px_rgba(0,229,255,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff3ea5]"
              >
                <SocialIcon name={social.name} />
              </a>
            ))}
          </div>

          <p className="max-w-xs text-[11px] sm:text-xs font-medium leading-relaxed text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]">
            Como Associado Amazon, eu ganho com compras qualificadas.
          </p>
        </footer>
      </main>

      {/* Feedback discreto ao clicar em links ainda com href="#" */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-xl border border-[#00e5ff]/50 bg-[#0b0a1c]/90 px-4 py-3 text-center text-xs sm:text-sm font-medium text-white shadow-[0_8px_30px_rgba(0,0,0,0.55)] backdrop-blur-lg"
        >
          {toastMessage}
        </div>
      )}
    </div>
  );
}
