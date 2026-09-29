// Central place for clinic details and page content.
// Replace the placeholder values below with the clinic's real information.

export const site = {
  name: "S Clinic",
  tagline: "Family medicine with American heart",
  description:
    "S Clinic provides primary care, urgent care, pediatrics, women's health and telehealth for families across the community.",
  phone: "(555) 123-4567",
  phoneHref: "tel:+15551234567",
  email: "care@sclinic.com",
  address: {
    street: "1776 Liberty Avenue, Suite 200",
    city: "Philadelphia",
    state: "PA",
    zip: "19106",
  },
  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 7:00 PM" },
    { days: "Saturday", time: "9:00 AM – 3:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  // Link to your EHR's patient portal (e.g. athenahealth, eClinicalWorks, MyChart).
  portalUrl: "https://example.com/patient-portal",
  youtubeChannel: "https://www.youtube.com/@sclinic",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://www.youtube.com/@sclinic",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Our Services" },
  { href: "/videos", label: "Videos" },
  { href: "/offers", label: "Offers" },
  { href: "/contact", label: "Contact Us" },
] as const;

export type IconName =
  | "stethoscope"
  | "baby"
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

export const services: {
  slug: string;
  image: string;
  title: string;
  icon: IconName;
  summary: string;
  details: string[];
}[] = [
  {
    slug: "primary-care",
    image: "/images/svc-primary.jpg",
    title: "Primary Care",
    icon: "stethoscope",
    summary:
      "Annual physicals, preventive screenings and a doctor who knows your history.",
    details: ["Annual wellness exams", "Preventive screenings", "Referrals & care coordination"],
  },
  {
    slug: "urgent-care",
    image: "/images/svc-urgent.jpg",
    title: "Urgent Care",
    icon: "bolt",
    summary:
      "Same-day visits for colds, flu, minor injuries, sprains and infections — no appointment needed.",
    details: ["Walk-ins welcome", "Minor injuries & stitches", "On-site X-ray"],
  },
  {
    slug: "pediatrics",
    image: "/images/svc-pediatrics.jpg",
    title: "Pediatrics",
    icon: "baby",
    summary:
      "Well-child visits, school and sports physicals, and gentle care from newborn to teen.",
    details: ["Well-child checkups", "School & sports physicals", "Childhood immunizations"],
  },
  {
    slug: "womens-health",
    image: "/images/svc-womens.jpg",
    title: "Women's Health",
    icon: "heart",
    summary:
      "Routine gynecological exams, family planning and support through every stage of life.",
    details: ["Well-woman exams", "Family planning", "Menopause care"],
  },
  {
    slug: "telehealth",
    image: "/images/svc-telehealth.jpg",
    title: "Telehealth",
    icon: "video",
    summary:
      "See a provider from home by secure video — ideal for follow-ups and minor concerns.",
    details: ["Secure video visits", "E-prescriptions", "Evening availability"],
  },
  {
    slug: "vaccinations",
    image: "/images/svc-vaccines.jpg",
    title: "Vaccinations",
    icon: "syringe",
    summary:
      "Flu shots, travel vaccines and routine immunizations for adults and children.",
    details: ["Seasonal flu shots", "Travel vaccines", "Adult boosters"],
  },
  {
    slug: "lab-diagnostics",
    image: "/images/svc-lab.jpg",
    title: "Lab & Diagnostics",
    icon: "flask",
    summary:
      "On-site blood work and diagnostic testing with fast, clearly explained results.",
    details: ["On-site blood draws", "Rapid tests", "Results in your patient portal"],
  },
  {
    slug: "chronic-care",
    image: "/images/svc-chronic.jpg",
    title: "Chronic Care",
    icon: "pulse",
    summary:
      "Ongoing management for diabetes, high blood pressure, asthma and heart health.",
    details: ["Diabetes management", "Blood pressure control", "Personal care plans"],
  },
];

export const offers: {
  title: string;
  price: string;
  priceNote: string;
  description: string;
  includes: string[];
  code: string;
  featured?: boolean;
}[] = [
  {
    title: "New Patient Welcome",
    price: "$49",
    priceNote: "first visit",
    description: "A complete first visit for self-pay patients new to S Clinic.",
    includes: ["Full health history review", "Vital signs & physical exam", "Personal care plan"],
    code: "WELCOME49",
  },
  {
    title: "Annual Physical",
    price: "$99",
    priceNote: "self-pay",
    description: "Our most popular package — a yearly checkup with basic lab work.",
    includes: ["Comprehensive physical exam", "Basic metabolic lab panel", "Cholesterol screening"],
    code: "PHYSICAL99",
    featured: true,
  },
  {
    title: "Heroes Discount",
    price: "15%",
    priceNote: "off every visit",
    description: "Thank you to our veterans, active-duty military and first responders.",
    includes: ["Applies to all self-pay services", "Covers spouse & dependents", "Valid ID required"],
    code: "HEROES15",
  },
  {
    title: "Back-to-School Physical",
    price: "$35",
    priceNote: "per child",
    description: "School and sports physicals with forms completed on the spot.",
    includes: ["Sports & school forms", "Vision & hearing check", "Immunization review"],
    code: "SCHOOL35",
  },
  {
    title: "Family Flu Shots",
    price: "$0",
    priceNote: "with most insurance",
    description: "Protect the whole household this season. Walk-ins welcome.",
    includes: ["All ages 6 months+", "No appointment needed", "$25 self-pay per shot"],
    code: "FLUFREE",
  },
  {
    title: "Telehealth Visit",
    price: "$39",
    priceNote: "per visit",
    description: "Talk with a provider from home for minor illness and follow-ups.",
    includes: ["Secure video call", "E-prescription if needed", "Visit summary emailed"],
    code: "TELE39",
  },
];

// Replace each `youtubeId` with the ID from your own YouTube video URL:
// https://www.youtube.com/watch?v=<youtubeId>
export const videos: {
  youtubeId: string;
  title: string;
  description: string;
  category: string;
  duration: string;
}[] = [
  {
    youtubeId: "REPLACE_ID_1",
    title: "Welcome to S Clinic",
    description: "Take a quick tour of our clinic and meet the team who will care for you.",
    category: "Clinic Tour",
    duration: "3:12",
  },
  {
    youtubeId: "REPLACE_ID_2",
    title: "What to Expect at Your Annual Physical",
    description: "Dr. Carter walks through each step of a yearly checkup.",
    category: "Patient Guides",
    duration: "5:40",
  },
  {
    youtubeId: "REPLACE_ID_3",
    title: "Flu Season: Myths vs. Facts",
    description: "Common questions about the flu shot, answered by our nursing staff.",
    category: "Health Tips",
    duration: "4:05",
  },
  {
    youtubeId: "REPLACE_ID_4",
    title: "How to Join a Telehealth Visit",
    description: "A step-by-step guide to connecting with your provider from home.",
    category: "Patient Guides",
    duration: "2:48",
  },
  {
    youtubeId: "REPLACE_ID_5",
    title: "Managing Blood Pressure at Home",
    description: "Simple daily habits that make a real difference for heart health.",
    category: "Health Tips",
    duration: "6:21",
  },
  {
    youtubeId: "REPLACE_ID_6",
    title: "Preparing Your Child for a Checkup",
    description: "Tips from our pediatric team to make visits stress-free for kids.",
    category: "Pediatrics",
    duration: "3:57",
  },
];

export const team = [
  {
    name: "Dr. Emily Carter, MD",
    role: "Medical Director · Family Medicine",
    bio: "Board-certified family physician with 18 years of experience caring for families.",
    initials: "EC",
    image: "/images/team-carter.jpg",
  },
  {
    name: "Dr. James Whitfield, DO",
    role: "Urgent Care & Internal Medicine",
    bio: "U.S. Army veteran who has served patients in field hospitals and community clinics.",
    initials: "JW",
    image: "/images/team-whitfield.jpg",
  },
  {
    name: "Dr. Maria Alvarez, MD",
    role: "Pediatrics",
    bio: "Fluent in English and Spanish, Dr. Alvarez has cared for children for over a decade.",
    initials: "MA",
    image: "/images/team-alvarez.jpg",
  },
  {
    name: "Daniel Brooks, NP",
    role: "Family Nurse Practitioner",
    bio: "Focused on preventive care, sports medicine and helping patients feel heard at every visit.",
    initials: "DB",
    image: "/images/team-brooks.jpg",
  },
];

export const testimonials = [
  {
    quote:
      "The staff treated my family like neighbors. We were seen the same day and left with a clear plan.",
    name: "Michael R.",
    detail: "Patient since 2019",
  },
  {
    quote:
      "Telehealth visits have been a lifesaver with three kids. Quick, friendly and professional.",
    name: "Jessica T.",
    detail: "Mom of three",
  },
  {
    quote:
      "As a veteran, I appreciate the respect and care I get here. Best clinic in town.",
    name: "Robert K.",
    detail: "U.S. Navy Veteran",
  },
];

export const insurers = ["Medicare", "Medicaid", "Aetna", "Blue Cross", "Cigna", "UnitedHealthcare", "Humana", "TRICARE"];
