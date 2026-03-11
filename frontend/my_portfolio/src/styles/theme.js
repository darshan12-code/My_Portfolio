// src/styles/theme.js

const darkColors = {
  // ── Backgrounds ──────────────────────────────────────────────
  bgPrimary:            '#0D0F14',
  bgSecondary:          '#12141A',
  bgTertiary:           '#181B23',
  bgGlass:              'rgba(13, 15, 20, 0.72)',
  bgGlassLight:         'rgba(255, 255, 255, 0.04)',

  // ── Text ─────────────────────────────────────────────────────
  textPrimary:          '#EAEDF3',
  textSecondary:        '#9BA1B0',
  textTertiary:         '#5C6170',
  textWhite:            '#FFFFFF',

  // ── Accent – Navy ────────────────────────────────────────────
  accentNavy:           '#1E3A5F',
  accentNavyLight:      '#2A5A8F',

  // ── Accent – Pink / Gradient ──────────────────────────────────
  accentPink:                  '#FF2D6B',          // raw hex, use for text/icon
  accentPinkGlow:              'rgba(255, 45, 107, 0.35)',   // hover shadows
  accentPinkFocus:             'rgba(255, 45, 107, 0.10)',   // focus rings, hover overlays
  accentPinkSubtleBg:          'rgba(255, 45, 107, 0.09)',   // chip / badge backgrounds
  accentPinkSubtleBorder:      'rgba(255, 45, 107, 0.18)',   // chip / badge borders
  accentPinkSubtleBg2:         'rgba(255, 45, 107, 0.08)',   // slightly lighter variant (preview badge)
  accentPinkSubtleBorder2:     'rgba(255, 45, 107, 0.20)',   // preview badge border
  accentPinkRingShadow:        'rgba(255, 45, 107, 0.06)',   // modal card ring shadow
  accentPinkSidebarBorder:     'rgba(255, 45, 107, 0.28)',   // sidebar active item border
  accentPinkSidebarBg:         'rgba(255, 45, 107, 0.07)',   // sidebar active item bg

  // ── Accent – Blue ─────────────────────────────────────────────
  accentBlue:           '#3B82F6',
  accentBlueBg:         'rgba(59, 130, 246, 0.12)',          // preview btn bg
  accentBlueBorder:     'rgba(59, 130, 246, 0.25)',          // preview btn border
  accentBlueBgHover:    'rgba(59, 130, 246, 0.20)',          // preview btn hover bg

  // ── Accent – Green ────────────────────────────────────────────
  accentGreen:          '#00E89D',
  accentGreenGlow:      'rgba(0, 232, 157, 0.25)',

  // ── Accent – Coral / Crimson / Danger ─────────────────────────
  accentCoral:          '#FF6B4A',
  accentCrimson:        '#DC2626',
  accentDanger:         '#EF4444',              // icon danger color (brighter red)
  accentDangerLight:    '#FF6060',              // icon danger hover color
  accentDangerBg:       'rgba(239, 68, 68, 0.12)',    // danger icon btn bg
  accentDangerBgHover:  'rgba(239, 68, 68, 0.22)',    // danger icon btn hover bg

  // ── Borders ───────────────────────────────────────────────────
  borderDefault:        'rgba(255, 255, 255, 0.06)',
  borderHover:          'rgba(255, 255, 255, 0.12)',
  borderAccent:         'rgba(255, 45, 107, 0.40)',   // strong pink border (form focus etc.)
  borderSubtle:         'rgba(255, 255, 255, 0.08)',  // cancel btn border / modal btn

  // ── Surfaces (alpha whites for glass / inactive elements) ─────
  surfaceSubtle:        'rgba(255, 255, 255, 0.05)',  // cancel btn bg, mobile tab active press
  surfaceLight:         'rgba(255, 255, 255, 0.10)',  // toggle track, radio chip inactive

  // ── Overlay ───────────────────────────────────────────────────
  overlayBg:            'rgba(0, 0, 0, 0.70)',        // modal backdrop

  // ── Shadows ───────────────────────────────────────────────────
  shadowCard:           '0 4px 24px rgba(0, 0, 0, 0.4)',
  shadowCardHover:      '0 8px 32px rgba(0, 0, 0, 0.25)',   // card hover (was inline)
  shadowCardStrong:     '0 12px 40px rgba(0, 0, 0, 0.6)',   // original shadowCardHover
  shadowModal:          '0 32px 80px rgba(0, 0, 0, 0.55)',  // modal card shadow
  shadowModalPreview:   '0 32px 80px rgba(0, 0, 0, 0.60)',  // preview modal shadow
  shadowGlowPink:       '0 0 40px rgba(255, 45, 107, 0.2)',
  shadowGlowGreen:      '0 0 40px rgba(0, 232, 157, 0.15)',
  shadowGlowNavy:       '0 0 40px rgba(30, 58, 95, 0.3)',
  shadowPinkHover:      '0 8px 28px rgba(255, 45, 107, 0.35)',  // create btn hover
  shadowBlueBtnHover:   '0 6px 20px rgba(255, 45, 107, 0.35)',  // save btn hover (pink-blue)

  // ── Pre / Code block ──────────────────────────────────────────
  preBg:                'rgba(0, 0, 0, 0.40)',        // <pre> background in preview

  // ── Gradients ─────────────────────────────────────────────────
  gradientPinkBlue:     'linear-gradient(90deg, #FF2D6B 0%, #3B82F6 100%)',
  gradientHero:         'linear-gradient(135deg, #0D0F14 0%, #1E3A5F 50%, #0D0F14 100%)',
  gradientCard:         'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)',
  gradientNavy:         'linear-gradient(180deg, #1E3A5F 0%, #0D0F14 100%)',
  gradientText:         'linear-gradient(90deg, #FF2D6B, #FF6B4A, #00E89D, #3B82F6)',
  gradientRing:         'conic-gradient(#FF2D6B, #FF6B4A, #00E89D, #3B82F6, #FF2D6B)',
  gradientShimmer:      'linear-gradient(90deg, #FF2D6B 0%, #3B82F6 50%, #FF2D6B 100%)',  // card shimmer bar

  // ── Decorative ────────────────────────────────────────────────
  inkStroke:            'rgba(255, 255, 255, 0.03)',
  comicPanel:           'rgba(255, 255, 255, 0.02)',
};

const lightColors = {
  // ── Backgrounds ──────────────────────────────────────────────
  bgPrimary:            '#F5F0E8',
  bgSecondary:          '#EDE8DC',
  bgTertiary:           '#E0D9CC',
  bgGlass:              'rgba(245, 240, 232, 0.85)',
  bgGlassLight:         'rgba(0, 0, 0, 0.03)',

  // ── Text ─────────────────────────────────────────────────────
  textPrimary:          '#1A1A2E',
  textSecondary:        '#3D3D5C',
  textTertiary:         '#7A7A99',
  textWhite:            '#1A1A2E',

  // ── Accent – Navy ────────────────────────────────────────────
  accentNavy:           '#1E3A5F',
  accentNavyLight:      '#2A5A8F',

  // ── Accent – Pink / Gradient ──────────────────────────────────
  accentPink:                  '#E8174A',
  accentPinkGlow:              'rgba(232, 23, 74, 0.20)',
  accentPinkFocus:             'rgba(232, 23, 74, 0.10)',
  accentPinkSubtleBg:          'rgba(232, 23, 74, 0.07)',
  accentPinkSubtleBorder:      'rgba(232, 23, 74, 0.14)',
  accentPinkSubtleBg2:         'rgba(232, 23, 74, 0.06)',
  accentPinkSubtleBorder2:     'rgba(232, 23, 74, 0.16)',
  accentPinkRingShadow:        'rgba(232, 23, 74, 0.05)',
  accentPinkSidebarBorder:     'rgba(232, 23, 74, 0.22)',
  accentPinkSidebarBg:         'rgba(232, 23, 74, 0.06)',

  // ── Accent – Blue ─────────────────────────────────────────────
  accentBlue:           '#1D4ED8',
  accentBlueBg:         'rgba(29, 78, 216, 0.10)',
  accentBlueBorder:     'rgba(29, 78, 216, 0.22)',
  accentBlueBgHover:    'rgba(29, 78, 216, 0.18)',

  // ── Accent – Green ────────────────────────────────────────────
  accentGreen:          '#007A52',
  accentGreenGlow:      'rgba(0, 122, 82, 0.15)',

  // ── Accent – Coral / Crimson / Danger ─────────────────────────
  accentCoral:          '#D44D28',
  accentCrimson:        '#B91C1C',
  accentDanger:         '#DC2626',
  accentDangerLight:    '#EF4444',
  accentDangerBg:       'rgba(220, 38, 38, 0.10)',
  accentDangerBgHover:  'rgba(220, 38, 38, 0.18)',

  // ── Borders ───────────────────────────────────────────────────
  borderDefault:        'rgba(0, 0, 0, 0.08)',
  borderHover:          'rgba(0, 0, 0, 0.16)',
  borderAccent:         'rgba(232, 23, 74, 0.30)',
  borderSubtle:         'rgba(0, 0, 0, 0.10)',

  // ── Surfaces ─────────────────────────────────────────────────
  surfaceSubtle:        'rgba(0, 0, 0, 0.04)',
  surfaceLight:         'rgba(0, 0, 0, 0.06)',

  // ── Overlay ───────────────────────────────────────────────────
  overlayBg:            'rgba(0, 0, 0, 0.50)',

  // ── Shadows ───────────────────────────────────────────────────
  shadowCard:           '0 4px 24px rgba(0, 0, 0, 0.10)',
  shadowCardHover:      '0 8px 32px rgba(0, 0, 0, 0.14)',
  shadowCardStrong:     '0 12px 40px rgba(0, 0, 0, 0.18)',
  shadowModal:          '0 32px 80px rgba(0, 0, 0, 0.20)',
  shadowModalPreview:   '0 32px 80px rgba(0, 0, 0, 0.24)',
  shadowGlowPink:       '0 0 40px rgba(232, 23, 74, 0.12)',
  shadowGlowGreen:      '0 0 30px rgba(0, 122, 82, 0.10)',
  shadowGlowNavy:       '0 0 40px rgba(30, 58, 95, 0.15)',
  shadowPinkHover:      '0 8px 28px rgba(232, 23, 74, 0.22)',
  shadowBlueBtnHover:   '0 6px 20px rgba(232, 23, 74, 0.22)',

  // ── Pre / Code block ──────────────────────────────────────────
  preBg:                'rgba(0, 0, 0, 0.06)',

  // ── Gradients ─────────────────────────────────────────────────
  gradientPinkBlue:     'linear-gradient(90deg, #E8174A 0%, #1D4ED8 100%)',
  gradientHero:         'linear-gradient(135deg, #F5F0E8 0%, #C8D8EC 50%, #F5F0E8 100%)',
  gradientCard:         'linear-gradient(145deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0) 100%)',
  gradientNavy:         'linear-gradient(180deg, #1E3A5F 0%, #F5F0E8 100%)',
  gradientText:         'linear-gradient(90deg, #E8174A, #D44D28, #007A52, #1D4ED8)',
  gradientRing:         'conic-gradient(#E8174A, #D44D28, #007A52, #1D4ED8, #E8174A)',
  gradientShimmer:      'linear-gradient(90deg, #E8174A 0%, #1D4ED8 50%, #E8174A 100%)',

  // ── Decorative ────────────────────────────────────────────────
  inkStroke:            'rgba(0, 0, 0, 0.04)',
  comicPanel:           'rgba(0, 0, 0, 0.02)',
};

export const darkTheme = {
  colors: darkColors,
  mode: 'dark',
  fonts: {
    heading: "'Clash Display', sans-serif",
    body:    "'DM Sans', sans-serif",
    mono:    "'JetBrains Mono', monospace",
  },
  fontSizes: {
    heroName: 'clamp(3rem, 8vw, 7rem)',
    heroRole: 'clamp(1rem, 2.5vw, 1.5rem)',
    h1:       'clamp(2rem, 4vw, 3.5rem)',
    h2:       'clamp(1.5rem, 3vw, 2.5rem)',
    h3:       '1.25rem',
    body:     '1rem',
    small:    '0.875rem',
    xs:       '0.75rem',
  },
  spacing: {
    xs:      '0.5rem',
    sm:      '1rem',
    md:      '1.5rem',
    lg:      '2rem',
    xl:      '3rem',
    xxl:     '5rem',
    section: 'clamp(4rem, 10vh, 8rem)',
  },
  borderRadius: {
    sm:   '0.375rem',
    md:   '0.75rem',
    lg:   '1.25rem',
    xl:   '1.75rem',
    full: '624.9375rem',
  },
  transitions: {
    fast:    '0.15s cubic-bezier(0.4, 0, 0.2, 1)',
    default: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    smooth:  '0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    slow:    '0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    spring:  '0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
  zIndex: {
    behind:    -1,
    base:       0,
    card:      10,
    navbar:   100,
    modal:    200,
    toast:    300,
    scrollbar: 400,
  },
};

export const lightTheme = {
  ...darkTheme,
  colors: lightColors,
  mode: 'light',
};

// Keep backward compat
export const theme = darkTheme;