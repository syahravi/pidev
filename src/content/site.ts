// Site Configuration
export const siteConfig = {
  name: "PI Dev",
  tagline: "Jasa Website UMKM & Personal di Bogor",
  description: "Solusi website profesional untuk UMKM dan personal di Bogor. Harga terjangkau, proses cepat, hasil berkualitas.",
  url: "https://pidev.biz.id",
  phone: "6285183370979",
  email: "hello@pidev.biz.id",
  address: "Bogor, Jawa Barat, Indonesia",
  socialMedia: {
    instagram: "https://instagram.com/pidev.id",
    tiktok: "https://tiktok.com/@pidev.id",
    facebook: "https://facebook.com/pidev.id",
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
  headline: "Website Profesional untuk UMKM & Personal di Bogor",
  subheadline: "Tingkatkan kredibilitas bisnis Anda dengan website modern. Harga terjangkau mulai Rp 150rb, proses cepat, gratis SSL & hosting!",
  ctaPrimary: { label: "Konsultasi Gratis", href: "#" },
  ctaSecondary: { label: "Lihat Harga", href: "/harga" },
  trustBadges: [
    "100+ Website Dibuat",
    "Proses 1-3 Hari",
    "Support 24/7"
  ],
  image: "https://placehold.co/600x400/2563EB/white?text=Website+Profesional"
};

// Problems Section
export const problems = {
  title: "Masalah yang Sering Dihadapi",
  subtitle: "Apakah Anda mengalami hal ini?",
  items: [
    {
      icon: "AlertCircle",
      title: "Tidak Punya Website",
      description: "Bisnis Anda sulit ditemukan online dan kehilangan banyak pelanggan potensial"
    },
    {
      icon: "Clock",
      title: "Proses Rumit & Lama",
      description: "Membuat website sendiri memakan waktu dan tenaga yang seharusnya untuk bisnis"
    },
    {
      icon: "DollarSign",
      title: "Biaya Mahal",
      description: "Harga pembuatan website di tempat lain terlalu mahal untuk budget UMKM"
    },
    {
      icon: "HelpCircle",
      title: "Tidak Paham Teknis",
      description: "Bingung dengan domain, hosting, SSL, dan istilah teknis lainnya"
    }
  ]
};

// How It Works Section
export const howItWorks = {
  title: "Cara Kerja Kami",
  subtitle: "3 langkah mudah memiliki website profesional",
  steps: [
    {
      number: "01",
      title: "Konsultasi",
      description: "Hubungi kami via WhatsApp, ceritakan kebutuhan website Anda",
      icon: "MessageCircle"
    },
    {
      number: "02",
      title: "Pengerjaan",
      description: "Tim kami akan mengerjakan website sesuai kebutuhan Anda",
      icon: "Code"
    },
    {
      number: "03",
      title: "Website Aktif",
      description: "Website Anda siap online dan langsung bisa diakses",
      icon: "Globe"
    }
  ]
};

// Services Section
export const services = {
  title: "Layanan Kami",
  subtitle: "Pilih paket website sesuai kebutuhan Anda",
  categories: [
    {
      id: "umkm",
      title: "UMKM & Bisnis",
      description: "Website profesional untuk toko, jasa, dan bisnis Anda",
      price: "Rp 500rb+",
      icon: "Store",
      image: "https://placehold.co/400x300/2563EB/white?text=UMKM"
    },
    {
      id: "personal",
      title: "Personal & Profesional",
      description: "Portfolio, CV online, dan personal branding",
      price: "Rp 300rb+",
      icon: "User",
      image: "https://placehold.co/400x300/2563EB/white?text=Personal"
    },
    {
      id: "landing",
      title: "Landing Page Promosi",
      description: "Halaman promosi untuk campaign dan iklan",
      price: "Rp 250rb+",
      icon: "Megaphone",
      image: "https://placehold.co/400x300/2563EB/white?text=Landing+Page"
    },
    {
      id: "kuliner",
      title: "Restoran & Kuliner",
      description: "Menu digital dan website untuk bisnis F&B",
      price: "Rp 400rb+",
      icon: "Utensils",
      image: "https://placehold.co/400x300/2563EB/white?text=Kuliner"
    },
    {
      id: "biolink",
      title: "Bio Link Profesional",
      description: "Link-in-bio untuk sosial media Anda",
      price: "Rp 150rb+",
      icon: "Link",
      image: "https://placehold.co/400x300/2563EB/white?text=Bio+Link"
    },
    {
      id: "mahasiswa",
      title: "Mahasiswa & Tugas",
      description: "Website untuk tugas kuliah dan project",
      price: "Rp 150rb+",
      icon: "GraduationCap",
      image: "https://placehold.co/400x300/2563EB/white?text=Mahasiswa"
    }
  ]
};

// Features Section (14 items)
export const features = {
  title: "Fitur Lengkap di Semua Paket",
  subtitle: "Setiap paket sudah termasuk 14 fitur premium",
  items: [
    { icon: "Infinity", title: "Unlimited halaman website" },
    { icon: "Zap", title: "Optimasi page speed otomatis" },
    { icon: "Shield", title: "Gratis Let's Encrypt SSL certificate" },
    { icon: "Rocket", title: "Langsung aktif & tidak perlu hosting" },
    { icon: "Search", title: "Meta On-Page SEO" },
    { icon: "Share2", title: "Meta Social Sharing (OpenGraph)" },
    { icon: "Facebook", title: "Meta Verifikasi Facebook" },
    { icon: "CheckCircle", title: "Meta Verifikasi Google Search Console" },
    { icon: "Video", title: "Integrasi TikTok Pixel" },
    { icon: "BarChart3", title: "Integrasi Facebook Pixel" },
    { icon: "Target", title: "Integrasi Google Ads Conversion" },
    { icon: "Tag", title: "Integrasi Google Tag Manager" },
    { icon: "PieChart", title: "Integrasi Google Analytics" },
    { icon: "AtSign", title: "Custom Domain" }
  ]
};

// Portfolio Section
export const portfolio = {
  title: "Portfolio Kami",
  subtitle: "Beberapa website yang sudah kami kerjakan",
  items: [
    {
      title: "Toko Kue Manis",
      category: "UMKM & Bisnis",
      image: "https://placehold.co/600x400/2563EB/white?text=Toko+Kue",
      url: "#"
    },
    {
      title: "Dr. Ahmad Portfolio",
      category: "Personal & Profesional",
      image: "https://placehold.co/600x400/2563EB/white?text=Portfolio",
      url: "#"
    },
    {
      title: "Promo Ramadhan",
      category: "Landing Page",
      image: "https://placehold.co/600x400/2563EB/white?text=Landing+Page",
      url: "#"
    },
    {
      title: "Warung Nasi Padang",
      category: "Restoran & Kuliner",
      image: "https://placehold.co/600x400/2563EB/white?text=Restoran",
      url: "#"
    },
    {
      title: "Influencer Bio",
      category: "Bio Link",
      image: "https://placehold.co/600x400/2563EB/white?text=Bio+Link",
      url: "#"
    },
    {
      title: "Tugas Akhir UI/UX",
      category: "Mahasiswa",
      image: "https://placehold.co/600x400/2563EB/white?text=Tugas+Akhir",
      url: "#"
    }
  ]
};

// Testimonials Section
export const testimonials = {
  title: "Apa Kata Mereka",
  subtitle: "Testimoni dari klien yang sudah menggunakan jasa kami",
  items: [
    {
      name: "Budi Santoso",
      role: "Pemilik Toko Bangunan",
      content: "Website yang dibuat sangat profesional dan harganya sangat terjangkau. Prosesnya juga cepat, hanya 2 hari sudah jadi!",
      avatar: "https://placehold.co/100x100/2563EB/white?text=BS",
      rating: 5
    },
    {
      name: "Siti Rahayu",
      role: "Mahasiswa",
      content: "Sangat membantu untuk tugas akhir saya. Tim PI Dev sangat responsif dan hasilnya memuaskan.",
      avatar: "https://placehold.co/100x100/2563EB/white?text=SR",
      rating: 5
    },
    {
      name: "Ahmad Wijaya",
      role: "Pemilik Restoran",
      content: "Menu digital yang dibuat sangat keren. Pelanggan saya jadi lebih mudah melihat menu lewat QR code.",
      avatar: "https://placehold.co/100x100/2563EB/white?text=AW",
      rating: 5
    }
  ]
};

// Pricing Section
export const pricing = {
  title: "Harga Transparan",
  subtitle: "Pilih paket yang sesuai dengan kebutuhan dan budget Anda",
  categories: [
    {
      id: "umkm",
      title: "UMKM & Bisnis",
      price: "500rb",
      pricePrefix: "Rp",
      priceSuffix: "+",
      description: "Website lengkap untuk toko dan bisnis",
      popular: true
    },
    {
      id: "personal",
      title: "Personal & Profesional",
      price: "300rb",
      pricePrefix: "Rp",
      priceSuffix: "+",
      description: "Portfolio dan CV online profesional",
      popular: false
    },
    {
      id: "landing",
      title: "Landing Page",
      price: "250rb",
      pricePrefix: "Rp",
      priceSuffix: "+",
      description: "Halaman promosi untuk campaign",
      popular: false
    },
    {
      id: "kuliner",
      title: "Restoran & Kuliner",
      price: "400rb",
      pricePrefix: "Rp",
      priceSuffix: "+",
      description: "Menu digital dan website F&B",
      popular: false
    },
    {
      id: "biolink",
      title: "Bio Link",
      price: "150rb",
      pricePrefix: "Rp",
      priceSuffix: "+",
      description: "Link-in-bio untuk sosial media",
      popular: false
    },
    {
      id: "mahasiswa",
      title: "Mahasiswa",
      price: "150rb",
      pricePrefix: "Rp",
      priceSuffix: "+",
      description: "Website untuk tugas kuliah",
      popular: false
    }
  ],
  note: "Semua paket sudah termasuk 14 fitur premium"
};

// FAQ Section
export const faq = {
  title: "Pertanyaan Umum",
  subtitle: "Jawaban untuk pertanyaan yang sering ditanyakan",
  items: [
    {
      question: "Berapa lama proses pembuatan website?",
      answer: "Proses pembuatan website biasanya memakan waktu 1-3 hari kerja tergantung kompleksitas dan revisi yang dibutuhkan."
    },
    {
      question: "Apakah sudah termasuk domain dan hosting?",
      answer: "Ya! Semua paket sudah termasuk hosting gratis. Untuk custom domain (seperti .com, .id) dikenakan biaya tambahan sesuai harga domain."
    },
    {
      question: "Bagaimana cara pembayaran?",
      answer: "Pembayaran bisa dilakukan via transfer bank (BCA, Mandiri, BRI) atau e-wallet (GoPay, OVO, DANA). Pembayaran dilakukan setelah website selesai."
    },
    {
      question: "Apakah bisa request revisi?",
      answer: "Tentu! Kami memberikan revisi gratis hingga 3x untuk memastikan website sesuai dengan keinginan Anda."
    },
    {
      question: "Apakah website bisa dikelola sendiri?",
      answer: "Ya, kami akan memberikan panduan lengkap untuk mengelola website Anda. Jika butuh bantuan, tim support kami siap membantu 24/7."
    },
    {
      question: "Bagaimana jika ingin upgrade paket?",
      answer: "Anda bisa upgrade paket kapan saja dengan membayar selisih harga. Hubungi kami via WhatsApp untuk konsultasi lebih lanjut."
    }
  ]
};

// CTA Section
export const ctaSection = {
  title: "Siap Memiliki Website Profesional?",
  subtitle: "Konsultasi gratis dan dapatkan penawaran terbaik untuk bisnis Anda",
  ctaPrimary: { label: "Konsultasi via WhatsApp", href: "#" },
  ctaSecondary: { label: "Lihat Portfolio", href: "/portfolio" }
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
