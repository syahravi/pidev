import { siteConfig } from './site';

const PHONE = siteConfig.phone;
const BASE_URL = `https://wa.me/${PHONE}`;

const createWaLink = (message: string): string => {
  return `${BASE_URL}?text=${encodeURIComponent(message)}`;
};

export const waTemplates = {
  // General inquiry
  general: createWaLink(
    `Halo PI Dev!\n\nSaya ingin bertanya tentang jasa pembuatan website.\n\nTerima kasih!`
  ),

  // Service-specific inquiries
  umkm: createWaLink(
    `Halo PI Dev!\n\nSaya tertarik dengan paket *UMKM & Bisnis* (Rp 500rb+).\n\nBisa jelaskan lebih detail?\n\nTerima kasih!`
  ),

  personal: createWaLink(
    `Halo PI Dev!\n\nSaya tertarik dengan paket *Personal & Profesional* (Rp 300rb+).\n\nBisa jelaskan lebih detail?\n\nTerima kasih!`
  ),

  landing: createWaLink(
    `Halo PI Dev!\n\nSaya tertarik dengan paket *Landing Page Promosi* (Rp 250rb+).\n\nBisa jelaskan lebih detail?\n\nTerima kasih!`
  ),

  kuliner: createWaLink(
    `Halo PI Dev!\n\nSaya tertarik dengan paket *Restoran & Kuliner* (Rp 400rb+).\n\nBisa jelaskan lebih detail?\n\nTerima kasih!`
  ),

  biolink: createWaLink(
    `Halo PI Dev!\n\nSaya tertarik dengan paket *Bio Link Profesional* (Rp 150rb+).\n\nBisa jelaskan lebih detail?\n\nTerima kasih!`
  ),

  mahasiswa: createWaLink(
    `Halo PI Dev!\n\nSaya tertarik dengan paket *Mahasiswa & Tugas* (Rp 150rb+).\n\nBisa jelaskan lebih detail?\n\nTerima kasih!`
  ),

  // Action-specific templates
  consultation: createWaLink(
    `Halo PI Dev!\n\nSaya ingin konsultasi gratis tentang pembuatan website.\n\nJenis bisnis/kebutuhan: [ISI DISINI]\n\nTerima kasih!`
  ),

  quote: createWaLink(
    `Halo PI Dev!\n\nSaya ingin minta penawaran harga untuk pembuatan website.\n\nJenis website: [ISI DISINI]\nFitur yang dibutuhkan: [ISI DISINI]\n\nTerima kasih!`
  ),

  portfolio: createWaLink(
    `Halo PI Dev!\n\nSaya ingin melihat contoh portfolio website yang sudah dibuat.\n\nTerima kasih!`
  ),

  support: createWaLink(
    `Halo PI Dev!\n\nSaya butuh bantuan teknis untuk website saya.\n\nMasalah: [ISI DISINI]\n\nTerima kasih!`
  ),

  customDomain: createWaLink(
    `Halo PI Dev!\n\nSaya ingin bertanya tentang custom domain.\n\nDomain yang diinginkan: [ISI DISINI]\n\nTerima kasih!`
  ),

  revision: createWaLink(
    `Halo PI Dev!\n\nSaya ingin request revisi untuk website saya.\n\nDetail revisi: [ISI DISINI]\n\nTerima kasih!`
  ),

  upgrade: createWaLink(
    `Halo PI Dev!\n\nSaya ingin upgrade paket website saya.\n\nPaket saat ini: [ISI DISINI]\nPaket yang diinginkan: [ISI DISINI]\n\nTerima kasih!`
  )
};

export type WaTemplateKey = keyof typeof waTemplates;

export const getServiceWaLink = (serviceId: string): string => {
  return waTemplates[serviceId as WaTemplateKey] || waTemplates.general;
};

export const whatsappPhone = PHONE;
