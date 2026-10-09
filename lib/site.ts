// Central place for clinic details and page content.

const address = {
  street: "170-56 Cedar Craft Road",
  city: "Jamaica",
  state: "New York",
  stateCode: "NY",
  zip: "11432",
};

const fullAddress = `${address.street}, ${address.city}, ${address.stateCode} ${address.zip}`;

export const site = {
  name: "Pro Health Family Medicine",
  shortName: "Pro Health",
  tagline: "Family Medicine in Queens, New York",
  description:
    "Pro Health Family Medicine provides primary care, urgent care, telehealth, physicals, vaccinations and lab services in Jamaica, Queens.",
  phone: "347-868-5055",
  phoneHref: "tel:+13478685055",
  email: "ProHealthNY1@gmail.com",
  address,
  fullAddress,
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`,
  mapEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`,
  // TODO: confirm the clinic's real opening hours.
  hours: [
    { days: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
    { days: "Saturday", time: "10:00 AM – 2:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  // TODO: replace with the clinic's Facebook page and Google Business reviews links.
  facebookUrl: "https://www.facebook.com/",
  googleReviewsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Pro Health Family Medicine ${fullAddress}`)}`,
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Our Services" },
  { href: "/telehealth", label: "Telehealth" },
  { href: "/videos", label: "Videos" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const doctor = {
  name: "Dr. Mohammad S. Hossain, MD",
  shortName: "Dr. Hossain",
  title: "Board-Certified Family Medicine Physician",
  initials: "MH",
  // Add a photo at public/images/dr-hossain.jpg and set this to "/images/dr-hossain.jpg".
  photo: null as string | null,
  bio: "Dr. Hossain is a highly experienced physician with many years of practice, specializing in a wide range of medical conditions. He is known for providing exceptional, compassionate, and patient-focused care. His dedication to his patients and commitment to quality healthcare truly set him apart.",
  credentials: [
    { label: "Medical Degree", text: "Shir e Bangla Medical College, Bangladesh" },
    { label: "Residency", text: "Latrobe Area Hospital, Pennsylvania" },
    { label: "Board Certification", text: "American Board of Family Medicine" },
    { label: "Academic Appointment", text: "Clinical Assistant Professor, Geisinger Commonwealth School of Medicine" },
  ],
};

export type IconName =
  | "stethoscope"
  | "clipboard"
  | "heart"
  | "bolt"
  | "video"
  | "syringe"
  | "flask"
  | "pulse"
  | "shield"
  | "clock"
  | "users"
  | "star";

export type Service = {
  slug: string;
  image: string;
  title: string;
  icon: IconName;
  summary: string;
  details: string[];
  featured: boolean;
};

export const services: Service[] = [
  {
    slug: "primary-care",
    image: "/images/svc-primary.jpg",
    title: "Primary Care",
    icon: "stethoscope",
    summary: "Annual check-ups, preventive screenings and a doctor who knows your history.",
    details: ["Annual wellness exams", "Preventive screenings", "Referrals & care coordination"],
    featured: true,
  },
  {
    slug: "urgent-care",
    image: "/images/svc-urgent.jpg",
    title: "Urgent Care",
    icon: "bolt",
    summary: "Same-day visits for colds, flu, minor injuries, sprains and infections.",
    details: ["Same-day appointments", "Minor injuries & infections", "Cold, flu & fever"],
    featured: true,
  },
  {
    slug: "telehealth",
    image: "/images/svc-telehealth.jpg",
    title: "Telehealth",
    icon: "video",
    summary: "See Dr. Hossain from home by secure video — ideal for follow-ups and minor concerns.",
    details: ["Secure video visits", "E-prescriptions", "Follow-up care"],
    featured: true,
  },
  {
    slug: "vaccinations",
    image: "/images/svc-vaccines.jpg",
    title: "Vaccinations",
    icon: "syringe",
    summary: "Flu shots and routine immunizations to keep you and your family protected.",
    details: ["Seasonal flu shots", "Routine immunizations", "Adult boosters"],
    featured: true,
  },
  {
    slug: "lab-diagnostics",
    image: "/images/svc-lab.jpg",
    title: "Lab & Diagnostics",
    icon: "flask",
    summary: "Blood work and diagnostic testing with results clearly explained.",
    details: ["Blood draws", "Rapid tests", "Clear explanation of results"],
    featured: true,
  },
  {
    slug: "chronic-health",
    image: "/images/svc-chronic.jpg",
    title: "Chronic Health",
    icon: "pulse",
    summary: "Ongoing management for diabetes, high blood pressure, asthma and heart health.",
    details: ["Diabetes management", "Blood pressure control", "Personal care plans"],
    featured: true,
  },
  {
    slug: "physical-examinations",
    image: "/images/svc-physicals.jpg",
    title: "Physical Examinations",
    icon: "clipboard",
    summary: "Fast, thorough physicals with forms completed in the office.",
    details: ["CDL Physicals", "TLC Physicals", "Immigration Physicals", "Sports Physicals", "School Physicals"],
    featured: false,
  },
];

// Facebook videos: add the link of each public video from the clinic's Facebook page,
// e.g. "https://www.facebook.com/<page>/videos/1234567890/".
export const videos: {
  facebookUrl: string;
  title: string;
  description: string;
}[] = [];

export const insurers: { name: string; logo?: string }[] = [
  // Drop official logo files into public/insurance/ and set `logo`, e.g. logo: "/insurance/aetna.png".
  { name: "EmblemHealth" },
  { name: "Fidelis Care" },
  { name: "Healthfirst" },
  { name: "Aetna" },
  { name: "Anthem Blue Cross Blue Shield" },
  { name: "Medicaid" },
  { name: "Medicare" },
];

export const reviews = [
  {
    name: "Rezaul Haque",
    quote:
      "Amazing doctor. He, in all instances, pays serious attention to my description of problems. Carefully probe into the conditions for diagnostic. He's an extremely nice, friendly and caring person. I am very lucky to have him as my physician. I'm confident that anyone seen by him will keep visiting his office for proper treatment and exceptional friendliness.",
  },
  {
    name: "Dave Jimenez",
    quote:
      "I had my first appointment with Dr. Hossain today, and I couldn’t be happier with my experience! I recently moved from Florida about a month ago, and Dr. Hossain made me feel very comfortable right away. He was extremely friendly, caring, and took the time to listen and understand my diagnosis. I truly appreciate the compassion and attention he showed me. I’m very happy to have found such a great doctor!",
  },
  {
    name: "Sharika Rodoshi",
    quote: "Amazing doctor!",
  },
];
