// Site Configuration
export const siteConfig = {
  name: "PI Dev",
  tagline: "Jasa Website UMKM & Personal di Bogor",
  description: "Solusi website profesional untuk UMKM dan personal di Bogor. Harga terjangkau, proses cepat, hasil berkualitas.",
  url: "https://pidev.biz.id",
  phone: "6285183370979",
  email: "halo@pidev.biz.id",
  address: "Bogor, Jawa Barat, Indonesia",
  socialMedia: {
    instagram: "https://instagram.com/pidev.id",
  }
};

// Navigation
export const navigation = [
  { label: "Beranda", href: "/" },
  { label: "Layanan", href: "/layanan" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Harga", href: "/harga" },
  { label: "Tentang", href: "/tentang" },
  { label: "Kontak", href: "/kontak" },
];

// Hero Section
export const hero = {
  badge: "🏆 Jasa Pembuatan Website #1 Bogor",
  // Headline dengan struktur untuk styling berbeda
  headlineParts: [
    { text: "Jasa Pembuatan", highlight: false },
    { text: "Website", highlight: false },
    { text: "Murah untuk UMKM", highlight: true },
    { text: "& Personal", highlight: true }
  ],
  // Deskripsi dengan highlight untuk angka/benefit penting
  description: {
    text: "Layanan pembuatan website murah untuk UMKM, kafe, hingga personal branding dengan",
    highlights: [
      { text: "desain profesional", type: "accent" },
      { text: "mulai dari", type: "normal" },
      { text: "300 ribuan", type: "price" }
    ],
    suffix: ". Website responsive, SEO friendly, dan maintenance gratis selama 1 tahun."
  },
  uspPoints: [
    "✅ Konsultasi gratis, tanpa batas tanya",
    "✅ Dibuat sesuai keinginanmu, bukan template generik",
    "✅ Balas dalam <1 jam, pengerjaan 8 hari"
  ],
  ctaPrimary: {
    label: "Konsultasi Gratis via WhatsApp Sekarang",
    subtext: "Biasanya balas < 1 jam"
  },
  ctaSecondary: { label: "Lihat Portofolio", href: "/portfolio" },
  trustMicro: [
    "Revisi sampai puas",
    "Dirawat bareng selama 1 tahun"
  ],
  founderImage: "/images/founder.jpg"
};

// Stats Bar Section
export const statsBar = {
  items: [
    { number: "150+", label: "Website Diluncurkan", emoji: "🚀" },
    { number: "4.9/5", label: "Rating dari Klien", emoji: "⭐" },
    { number: "5 Hari", label: "Rata-rata Pengerjaan", emoji: "⏱️" },
    { number: "< 1 Jam", label: "Waktu Respon", emoji: "💬" }
  ]
};

// Problems Section
export const problems = {
  title: "Pernah ngerasa kayak gini?",
  subtitle: "Tenang, kamu nggak sendirian. Ini yang sering dialami pemilik usaha:",
  items: [
    {
      emoji: "😰",
      title: "Bingung mulai dari mana",
      description: "Nggak ngerti soal domain, hosting, coding... ribet banget!"
    },
    {
      emoji: "💸",
      title: "Takut kemahalan",
      description: "Denger-denger bikin website itu jutaan. Budget nggak kuat..."
    },
    {
      emoji: "⏰",
      title: "Nggak ada waktu",
      description: "Sibuk ngurusin bisnis, mana sempet belajar bikin website"
    },
    {
      emoji: "🤔",
      title: "Ragu hasilnya bagus",
      description: "Takut bayar mahal tapi hasilnya mengecewakan"
    }
  ]
};

// Founder Section
export const founder = {
  sectionLabel: "Kenalan Dulu",
  name: "Maulana Syahravi",
  title: "Halo, saya Maulana Syahravi👋",
  badge: "10+ Tahun Berpengalaman",
  bio: "Saya Sarjana Komputer yang membantu UMKM dan personal brand di Bogor tampil lebih profesional dan dipercaya secara online.",
  highlight: "Kenapa ini penting? Pelanggan bukan cuma beli produk kamu, mereka beli karena percaya sama kamu.",
  credentials: [
    { emoji: "🎓", text: "S.Kom — Sarjana Komputer" },
    { emoji: "📍", text: "Berbasis di Bogor" },
    { emoji: "⚡", text: "Respon < 1 Jam" },
    { emoji: "👥", text: "150+ Klien Puas" },
    { emoji: "🔄", text: "Revisi Sampai Puas" }
  ],
  image: "/images/founder.jpg",
  cta: {
    label: "Chat Langsung dengan Saya",
    subtext: "Saya sendiri yang balas chat kamu"
  }
};

// How It Works Section
export const howItWorks = {
  title: "Cara Kerjanya Simpel Banget",
  subtitle: "Nggak perlu ribet, tinggal ikuti 3 langkah ini:",
  steps: [
    {
      number: "01",
      title: "Ceritakan bisnis kamu",
      description: "Chat via WhatsApp, ceritain apa bisnis kamu dan mau website kayak gimana",
      emoji: "💬"
    },
    {
      number: "02",
      title: "Kami buatkan",
      description: "Tim kami kerjakan website kamu. Progress di-update tiap hari!",
      emoji: "✏️"
    },
    {
      number: "03",
      title: "Langsung bisa dipake!",
      description: "Website jadi, domain aktif, tinggal share ke pelanggan kamu",
      emoji: "🚀"
    }
  ]
};

// Services Section
export const services = {
  title: "Layanan Kami",
  subtitle: "Pilih paket website sesuai kebutuhan kamu",
  categories: [
    {
      id: "umkm",
      title: "UMKM & Bisnis",
      description: "Website profesional untuk toko, jasa, dan bisnis kamu",
      price: "Rp 500rb+",
      emoji: "🏪"
    },
    {
      id: "personal",
      title: "Personal & Profesional",
      description: "Portfolio, CV online, dan personal branding",
      price: "Rp 300rb+",
      emoji: "👤"
    },
    {
      id: "landing",
      title: "Landing Page Promosi",
      description: "Halaman promosi untuk campaign dan iklan",
      price: "Rp 250rb+",
      emoji: "📢"
    },
    {
      id: "kuliner",
      title: "Restoran & Kuliner",
      description: "Menu digital dan website untuk bisnis F&B",
      price: "Rp 400rb+",
      emoji: "🍽️"
    },
    {
      id: "biolink",
      title: "Bio Link Profesional",
      description: "Link-in-bio untuk sosial media kamu",
      price: "Rp 150rb+",
      emoji: "🔗"
    },
    {
      id: "mahasiswa",
      title: "Mahasiswa & Tugas",
      description: "Website untuk tugas kuliah dan project",
      price: "Rp 150rb+",
      emoji: "🎓"
    }
  ]
};

// Features Section (14 items)
export const features = {
  title: "Fitur Lengkap di Semua Paket",
  subtitle: "Setiap paket sudah termasuk 14 fitur premium",
  items: [
    { icon: "check", title: "Unlimited halaman website" },
    { icon: "check", title: "Optimasi page speed otomatis" },
    { icon: "check", title: "Langsung aktif" },
    { icon: "check", title: "Meta On-Page SEO" },
    { icon: "check", title: "Meta Social Sharing (OpenGraph)" },
    { icon: "check", title: "Meta Verifikasi Facebook" },
    { icon: "check", title: "Meta Verifikasi Google Search Console" },
    { icon: "check", title: "Integrasi TikTok Pixel" },
    { icon: "check", title: "Integrasi Facebook Pixel" },
    { icon: "check", title: "Integrasi Google Ads Conversion" },
    { icon: "check", title: "Integrasi Google Tag Manager" },
    { icon: "check", title: "Integrasi Google Analytics" },
    { icon: "check", title: "Custom Domain" }
  ]
};

// Portfolio Story Section (struktur untuk cerita - data akan diisi dari user)
export const portfolioStory = {
  title: "Cerita Sukses Klien Kami",
  subtitle: "Bukan cuma bikin website, tapi bikin bisnis makin dipercaya",
  items: [
    // Data akan diisi dari user - format per item:
    // {
    //   niche: "Kuliner" | "Personal Brand" | "Freelancer" | "Bio Link" | "Content Creator" | "Mahasiswa",
    //   emoji: "🍰",
    //   businessName: "Nama Usaha",
    //   location: "Area Bogor",
    //   problem: "Masalah yang dihadapi",
    //   result: "Hasil terukur",
    //   quote: "Kutipan testimoni",
    //   rating: 5
    // }
  ],
  closingText: "...dan masih banyak cerita lainnya yang belum sempat kami dokumentasikan 😊"
};

// Testimonials Section
export const testimonials = {
  title: "Kata Mereka tentang PI Dev",
  subtitle: "Review asli dari klien yang sudah pakai jasa kami",
  items: [
    {
      name: "Ibu Siti",
      role: "Pemilik Toko Kue",
      location: "Bogor Selatan",
      content: "Awalnya ragu karena harganya murah. Eh ternyata hasilnya bagus banget! Recommended!",
      rating: 5
    },
    {
      name: "Pak Budi",
      role: "Pemilik Bengkel",
      location: "Cibinong",
      content: "Prosesnya cepet banget, 3 hari udah jadi. Mas Maulana responsif orangnya.",
      rating: 5
    },
    {
      name: "Dina",
      role: "Freelance Designer",
      location: "Dramaga",
      content: "Portfolio saya jadi keliatan lebih profesional. Klien langsung percaya!",
      rating: 5
    }
  ]
};

// Pricing Section - HANYA 2 PAKET
export const pricing = {
  title: "Harga Jujur, Tanpa Ribet",
  subtitle: "Pilih paket yang cocok untuk kamu",
  anchor: {
    text: "Biasanya jasa agensi mulai dari Rp 3-5 juta.",
    highlight: "Kami mulai dari Rp 300rb aja."
  },
  categories: [
    {
      id: "hemat",
      title: "Paket Hemat",
      price: "300+",
      pricePrefix: "Rp",
      priceSuffix: "rb",
      description: "Cocok buat kamu yang baru mau mulai tampil online",
      popular: false,
      features: [
        "Custom design",
        "Mobile friendly",
        "WhatsApp order",
      ]
    },
    {
      id: "lengkap",
      title: "Paket Lengkap",
      price: "500+",
      pricePrefix: "Rp",
      priceSuffix: "rb",
      description: "Buat bisnis kamu keliatan lebih serius dan dipercaya",
      popular: true,
      features: [
        "Custom design",
        "Mobile friendly",
        "WhatsApp order",
        "Catalog produk",
        "Google Maps",
        "SEO lengkap",
        "Domain custom (.com)",
      ]
    }
  ],
  guarantees: [
    "Revisi sampai puas",
    "Tenang aja, websitemu kami jaga selama 1 tahun"
  ],
  customNote: "Butuh custom? Chat kami untuk penawaran khusus"
};

// FAQ Section
export const faq = {
  title: "Pertanyaan Umum",
  subtitle: "Jawaban untuk pertanyaan yang sering ditanyakan",
  items: [
    {
      question: "Berapa lama proses pembuatan website?",
      answer: "Proses pembuatan website biasanya memakan waktu 5-15 hari kerja tergantung kompleksitas dan revisi yang dibutuhkan."
    },
    {
      question: "Apakah sudah termasuk domain dan hosting?",
      answer: "Ya! Semua paket sudah termasuk hosting gratis. Untuk custom domain (seperti .com, .id) dikenakan biaya tambahan sesuai harga domain."
    },
    {
      question: "Bagaimana cara pembayaran?",
      answer: "Pembayaran bisa dilakukan via transfer bank (Bank Jago Syariah) atau e-wallet (GoPay, Shopeepay) atau QRIS. Pembayaran dilakukan setelah website selesai dan kamu puas dengan hasilnya."
    },
    {
      question: "Apakah bisa request revisi?",
      answer: "Tentu! Kami memberikan revisi gratis sampai kamu puas dengan hasilnya. Nggak ada batas revisi!"
    },
    {
      question: "Apakah website bisa dikelola sendiri?",
      answer: "Ya, kami akan memberikan panduan lengkap untuk mengelola website kamu. Jika butuh bantuan, tim support kami siap membantu 24/7."
    },
    {
      question: "Bagaimana jika ingin upgrade paket?",
      answer: "Kamu bisa upgrade paket kapan saja dengan membayar selisih harga. Hubungi kami via WhatsApp untuk konsultasi lebih lanjut."
    },
    {
      question: "Apakah ada garansi setelah website selesai?",
      answer: "Ada! Websitemu kami rawat dan jaga selama 1 tahun penuh. Kalau ada kendala teknis atau butuh update kecil, tinggal chat kami, nggak perlu khawatir dilepas begitu aja setelah selesai."
    }
  ]
};

// CTA Section
export const ctaSection = {
  title: "Siap Punya Website Profesional?",
  subtitle: "Konsultasi dulu gratis, nggak ada paksaan beli",
  cta: {
    label: "Chat WhatsApp Sekarang",
    subtext: "Biasanya dibalas < 1 jam"
  },
  guarantees: [
    "Revisi sampai puas",
    "Kami temenin dari awal sampai 1 tahun ke depan"
  ],
  trust: "Sudah 150+ UMKM Bogor mempercayakan website mereka ke PI Dev"
};

// Footer
export const footer = {
  description: "PI Dev adalah jasa pembuatan website profesional untuk UMKM dan personal di Bogor. Harga terjangkau, proses cepat, hasil berkualitas.",
  quickLinks: [
    { label: "Layanan", href: "/layanan" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Harga", href: "/harga" },
    { label: "Tentang", href: "/tentang" },
    { label: "Kontak", href: "/kontak" }
  ],
  copyright: "PI Dev. All rights reserved."
};
