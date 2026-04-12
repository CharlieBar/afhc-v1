import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      // ── WordPress legacy URLs ──────────────────────────────────────
      { source: "/skilled-nursing-chicago", destination: "/services/skilled-nursing", permanent: true },
      { source: "/skilled-nursing-chicago/", destination: "/services/skilled-nursing", permanent: true },
      { source: "/physical-therapy-at-home", destination: "/services/physical-therapy", permanent: true },
      { source: "/physical-therapy-at-home/", destination: "/services/physical-therapy", permanent: true },
      { source: "/occupational-therapy-chicago", destination: "/services/occupational-therapy", permanent: true },
      { source: "/speech-therapy-home", destination: "/services/speech-therapy", permanent: true },
      { source: "/home-health-aide-chicago", destination: "/services/home-health-aide", permanent: true },
      { source: "/physician-resources", destination: "/referrals/physician-resources", permanent: true },
      { source: "/physician-resources/", destination: "/referrals/physician-resources", permanent: true },
      { source: "/about-us", destination: "/about/our-story", permanent: true },
      { source: "/about-us/", destination: "/about/our-story", permanent: true },
      { source: "/faqs", destination: "/patients/faq", permanent: true },
      { source: "/faqs/", destination: "/patients/faq", permanent: true },
      { source: "/contact/", destination: "/contact", permanent: true },
      { source: "/our-services", destination: "/services", permanent: true },
      { source: "/our-services/", destination: "/services", permanent: true },
      { source: "/our-services/medical-social-worker-chicago", destination: "/services/home-health-aide", permanent: true },
      { source: "/family-medicine", destination: "/services/skilled-nursing", permanent: true },
      { source: "/family-medicine/", destination: "/services/skilled-nursing", permanent: true },
      { source: "/cardiologist", destination: "/conditions/heart-failure", permanent: true },
      { source: "/cardiologist/", destination: "/conditions/heart-failure", permanent: true },
      // ── Route name drift (internal renames) ──────────────────────
      { source: "/about/why-choose", destination: "/about/why-choose-all-family", permanent: true },
      { source: "/about/why-choose/", destination: "/about/why-choose-all-family", permanent: true },
      { source: "/patients/how-to-start", destination: "/patients/how-to-start-home-health", permanent: true },
      { source: "/patients/how-to-start/", destination: "/patients/how-to-start-home-health", permanent: true },
      { source: "/patients/insurance", destination: "/patients/insurance-coverage", permanent: true },
      { source: "/patients/insurance/", destination: "/patients/insurance-coverage", permanent: true },
      { source: "/patients/medicare", destination: "/patients/medicare-home-health-benefits", permanent: true },
      { source: "/patients/medicare/", destination: "/patients/medicare-home-health-benefits", permanent: true },
      { source: "/services/wound-care", destination: "/services/wound-care-management", permanent: true },
      { source: "/services/wound-care/", destination: "/services/wound-care-management", permanent: true },
      // ── Trailing slash normalization (hub pages) ──────────────────
      { source: "/services/", destination: "/services", permanent: true },
      { source: "/conditions/", destination: "/conditions", permanent: true },
      { source: "/locations/", destination: "/locations", permanent: true },
      { source: "/patients/", destination: "/patients", permanent: true },
      { source: "/referrals/", destination: "/referrals", permanent: true },
      { source: "/resources/", destination: "/resources", permanent: true },
      { source: "/about/", destination: "/about", permanent: true },
      { source: "/blog/", destination: "/blog", permanent: true },
      { source: "/privacy-policy/", destination: "/privacy-policy", permanent: true },
      { source: "/terms-of-service/", destination: "/terms-of-service", permanent: true },
      { source: "/accessibility/", destination: "/accessibility", permanent: true },
    ];
  },
};

export default nextConfig;
