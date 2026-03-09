// ========================================
// PORTFOLIO CONTENT
// Update this file to change all content on your website
// ========================================

export const content = {
  // NAVIGATION MENU
  navigation: [
    { id: 'hero', label: 'Hello' },
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About me' },
    { id: 'experience', label: 'Experience' },
    { id: 'hobbies', label: 'Hobbies' },
    { id: 'contact', label: 'Contact' },
    { id: 'resume', label: 'Resume', type: 'download', url: '/resume.pdf' }
  ],

  // HERO SECTION
  hero: {
    name: 'Devesh',
    title: 'Product Designer',
    tagline: 'I design AI-powered workflows that turn complex systems into intuitive products.',
    currentCompany: 'Spyne.ai',
    currentLocation: 'Gurugram',
    previousWork: 'end-to-end web & mobile products',
    previousCompany1: 'The Swiftlet',
    previousWork2: 'ML data & quality workflows',
    previousCompany2: 'Amazon',
    description:
      "I'm a Product Designer with 3+ years of experience crafting scalable B2B and consumer products. I lead high-impact flows that improve efficiency, conversions, and team velocity across ambiguous problem spaces."
  },

  // PROJECTS SECTION
  projects: {
    sectionTitle: 'Selected Work',
    featuredTitle: 'Featured Work',
    featured: [
      {
        id: 'assisted-shooting-flow',
        slug: 'assisted-shooting-flow',
        image: '/images/assisted-shooting.png',
        tags: ['Computer Vision', 'Workflow Design', 'Mobile'],
        title: 'Assisted Shooting Flow – Improving Capture Quality at Scale',
        description:
          'Redesigned the guided capture experience so operators record higher-quality videos on the first try — cutting average capture attempts per user.',
        impactSummary: 'Reduced average capture attempts from 1.66 to 1.1 per user.',
        impactMetrics: [
          '↓ 34% average capture attempts (1.66 → 1.1)',
          'Higher-quality inputs for downstream ML models'
        ]
      },
      {
        id: 'offline-shooting-experience',
        slug: 'offline-shooting-experience',
        image: '/images/offline-shooting.png',
        tags: ['Offline-first', 'Mobile', 'Field Operations'],
        title: 'Offline Shooting Experience – Reliable Capture Without Network',
        description:
          'Designed an offline-first capture flow so operators can keep shooting even in low-connectivity environments, with smart sync when back online.',
        impactSummary: 'Increased shoot conversions by 35% in low-connectivity environments.',
        impactMetrics: ['+35% shoot conversion rate', 'Zero-drop capture in low network zones']
      },
      {
        id: 'editing-playground',
        slug: 'editing-playground',
        image: '/images/editing-playground.png',
        tags: ['Platform UX', 'Self-serve', 'AI Editing'],
        title: 'Editing Playground – One Surface for Multiple AI Products',
        description:
          'Consolidated fragmented editing tools into a single, self-serve playground that makes experimentation and onboarding dramatically faster.',
        impactSummary: 'Improved funnel conversion from 1.14% to 4.12%.',
        impactMetrics: [
          '4× funnel conversion improvement (1.14% → 4.12%)',
          'Faster self-serve onboarding for new customers'
        ]
      },
      {
        id: 'virtual-studio-discovery',
        slug: 'virtual-studio-discovery',
        image: '/images/virtual-studio.png',
        tags: ['Discovery', 'Navigation', 'E‑commerce'],
        title: 'Virtual Studio Discovery – Finding the Right Backgrounds Faster',
        description:
          'Redesigned navigation for virtual studio backgrounds with clear popularity and trend signals so teams can find on-brand setups quickly.',
        impactSummary: 'Increased new custom background requests by 45%.',
        impactMetrics: ['+45% new custom background requests', 'Higher engagement with background catalog']
      }
    ],
    items: [
      {
        id: 6,
        slug: 'instant-media',
        image: '/images/project-placeholder2.jpg',
        tags: ['Automotive SaaS', 'Product Strategy', 'Velocity Feature'],
        title: 'Instant Media – Reducing Time-to-Live in Automotive Retail',
        description: 'Designed a zero-friction media publishing feature enabling dealers to list vehicles same-day using matched OEM or rooftop catalog images — eliminating the 2–5 day offline window between acquisition and listing.',
        impact: 'Reduced time-to-live by up to 80%, enabling same-day listing from day of vehicle acquisition.',
        overview: 'A velocity feature disguised as a media tool. Instant Media solves the most overlooked operational bottleneck in automotive retail: the gap between vehicle acquisition and when a listing goes live online.',
        role: 'Senior Product Designer',
        duration: 'Spyne AI · 2024–2025',
        problemStatement:
          'Dealers were losing days of sellable time between acquiring a vehicle and getting it live online because listings had to wait for photos.',
        userPainPoints: [
          'Vehicles sitting offline for 3–5 days (sometimes up to 30) waiting for photos.',
          'No way to publish a listing without at least one media asset attached.',
          'Dealers uploading a single low-quality photo just to unblock publishing, harming buyer trust.'
        ],
        researchInsights: [
          'No major competitor surfaced time-to-live as a dealer KPI — the delay was invisible.',
          'Used-vehicle workflows had no scalable support for placeholder media.',
          'Freshness algorithms reward newly listed inventory, so day‑0 listings get outsized exposure.'
        ],
        competitorAnalysis:
          'Platforms like AutoTrader, DealerSocket and CDK Global all require photos before publish, but none provide a KPI for time-to-live or tools for representative media at acquisition.',
        solutionExploration:
          'Explored stricter photo requirements, unlabeled generic images, manual library browsing, and auto-matching with transparent badges before choosing the final approach.',
        designIterations: [
          'Explicit CTA entry point with VIN vs. vehicle details options.',
          'Side-panel stock library with rich variant details.',
          'Split-layout with a persistent suggestion panel competing with the upload area.',
          'Inline full-width panel below the upload zone with confidence-scored matches.'
        ],
        finalDesign:
          'Inline Instant Media trigger in the existing upload surface: VIN or YMMT input → auto-matched media from Rooftop Library or OEM catalog → confidence preview → one-tap publish with a transparency badge.',
        impactMetrics: [
          'Time-to-live reduced by up to 80%.',
          'Same‑day listing from acquisition for eligible inventory.',
          'Earlier impressions from “day‑0” visibility in marketplace search.'
        ],
        projectImagesCount: 6,
        highlights: [
          'Identified time-to-live as a core operational KPI through dealer interviews and workflow observation',
          'Designed VIN-based and YMMT-based media matching flows for both new and used inventory',
          'Introduced confidence scoring and transparency badges to maintain consumer trust for used vehicles',
          'Defined MVP scope to prioritise velocity validation over feature completeness',
          'Rejected 3 design iterations before landing on the auto-match with transparent labelling approach'
        ]
      },
      {
        id: 7,
        slug: 'inventory-listing-vdp',
        image: '/images/inv-listing-after.png',
        tags: ['Inventory Intelligence', 'Enterprise UX', 'Metrics Design', 'VDP'],
        title: 'Inventory Listing & VDP — Turning a Media Tool into an Intelligence Dashboard',
        description: 'Transformed Spyne\'s card-grid inventory view into an action-item dashboard. Surfaced "not ready to sell" counts by reason, Website Listing Score with percentile benchmarking, Time to Market per publishing platform, and a VDP with Actions Required + Publishing Status always visible.',
        impact: 'Time to market made visible for first time; 6 named action categories replaced a generic "not ready" signal.',
        overview: 'The original inventory view showed media processing status. It couldn\'t answer: why are 178 vehicles not ready? How does our listing quality compare? How long does it take to go live? The redesign turned five invisibilities — image quality, set completeness, hero consistency, website readiness, and time to market — into actionable data.',
        role: 'Product Designer',
        duration: 'Spyne AI · 2024–2025',
        problemStatement:
          'Dealers saw a grid of media statuses but had no idea why vehicles were not ready to sell or how long it took inventory to go live online.',
        userPainPoints: [
          'No single number capturing listing quality across the lot.',
          'No visibility into time to market per platform.',
          'Support tickets like “why is my vehicle not published?” driven by invisible action items.'
        ],
        researchInsights: [
          'Dealers who churned often had poor listing quality but no way to see or improve it.',
          'Support escalations clustered around publishing visibility and sync issues.',
          'Most important daily question was: “What do I need to fix today to get more vehicles live?”'
        ],
        competitorAnalysis:
          'Competitive tools surfaced media status but rarely exposed actionable metrics like time to market, percentile‑based listing scores, or clearly named “not ready to sell” reasons.',
        solutionExploration:
          'Explored variations of card grids, dashboards, and table-first layouts before converging on an action‑reason header + intelligence metrics + table combination.',
        designIterations: [
          'Media-only card grid with richer statuses but no KPIs.',
          'Dashboard concepts that overloaded dealers with charts and filters.',
          'Table-first views without a clear summary of workload or reasons.'
        ],
        finalDesign:
          'Inventory intelligence dashboard with “not ready to sell” header, Website Listing Score, Average Time to Market per platform, IMS sync visibility, and a VDP that leads with Actions Required.',
        impactMetrics: [
          'Time to market surfaced as a first‑class KPI (e.g. 13 days, bottom 10th percentile).',
          '6 named action categories replacing a generic “not ready” signal.',
          'Reduction in “why is my vehicle not published?” escalations.'
        ],
        projectImagesCount: 4,
        highlights: [
          'Defined five inventory intelligence objectives from dealer research and CS escalation data',
          'Designed "not ready to sell" header with named action categories and vehicle counts',
          'Built Website Listing Score with Poor/Good/Excellent tiers and 6-week hover trend',
          'Created Time to Market metric with per-platform breakdown and date range selector',
          'Redesigned VDP with persistent Actions Required panel and per-platform Publishing Status',
          'Added IMS sync source visibility and Active/Sold split with All/New/Pre-owned tabs'
        ]
      },
      
    ]
  },

  // ABOUT SECTION
  about: {
    sectionTitle: 'About me',
    paragraphs: [
      "I'm a Product Designer with 3+ years of experience crafting user-centered digital experiences. I specialize in end-to-end product design, leading complex 0→1 initiatives, and balancing user empathy with business impact.",
      "I have strong proficiency in Figma, Adobe Creative Suite, prototyping tools, and even basics of React, HTML, CSS, and JavaScript. I'm always learning and exploring how design and technology can come together to create delightful experiences."
    ]
  },

  // EXPERIENCE SECTION
  experience: {
    sectionTitle: 'Experience',
    items: [
      {
        id: 1,
        company: 'Spyne AI',
        role: 'Product Designer',
        time: 'June 2024 - Present'
      },
      {
        id: 2,
        company: 'Intervue.io',
        role: 'UI/UX Designer',
        time: 'Jan 2023 - May 2024'
      },
      {
        id: 3,
        company: 'Coto',
        role: 'Product Design Researcher (Internship)',
        time: 'Oct 2022 - Dec 2022'
      }
    ]
  },

  // HOBBIES & CREATIVE SECTION
  hobbies: {
    sectionTitle: 'Hobbies & Creative',
    description: 'Beyond design, I love exploring creative outlets and personal interests.',
    images: [
      {
        src: '/images/hobby1.jpg',
        alt: 'Hobby 1',
        caption: 'Creative pursuit 1'
      },
      {
        src: '/images/hobby2.jpg',
        alt: 'Hobby 2',
        caption: 'Creative pursuit 2'
      },
      {
        src: '/images/hobby3.jpg',
        alt: 'Hobby 3',
        caption: 'Creative pursuit 3'
      },
      {
        src: '/images/hobby4.jpg',
        alt: 'Hobby 4',
        caption: 'Creative pursuit 4'
      },
      {
        src: '/images/hobby5.jpg',
        alt: 'Hobby 5',
        caption: 'Creative pursuit 5'
      }
    ]
  },

  // CONTACT SECTION
  contact: {
    sectionTitle: "Let's connect",
    subtitle: "I'm always interested in hearing about new product design problems, collaborations and roles.",
    links: [
      { label: 'Email', url: 'mailto:deveshimsec2@gmail.com' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/devesh-gupta-ux/' }
    ]
  },

  // FOOTER
  footer: {
    text: '© 2026 Devesh Gupta. Crafted in Figma, shipped with React + Vercel.',
    links: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/devesh-gupta-ux/' },
      { label: 'GitHub', url: 'https://github.com/devesh-gupta' },
      { label: 'Email', url: 'mailto:deveshimsec2@gmail.com' },
      { label: 'Portfolio PDF', url: '/Devesh-Gupta-Portfolio.pdf' }
    ]
  }
};
