export const COMPANY = {
  name: "Syboh Solutions LLC",
  shortName: "Syboh Solutions",
  tagline: "Operator-first systems. Real-world ROI.",
  emails: {
    info: process.env.CONTACT_TO || "info@sybohsolutions.com",
    from: process.env.CONTACT_FROM || "web@sybohsolutions.com",
  },
  calendlyUrl:
    process.env.CALENDLY_URL || "https://calendly.com/your-link",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || "https://sybohsolutions.com",
};

export const FEATURES = {
  showBohBar:
    (process.env.NEXT_PUBLIC_FEATURE_BOHBAR || "false").toLowerCase() ===
    "true",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Plans" },
  { href: "/start-project", label: "Start a Project" },
  { href: "/add-ons", label: "Add-Ons" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];


