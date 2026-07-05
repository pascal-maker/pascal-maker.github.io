import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaEnvelope, FaXTwitter } from "react-icons/fa6";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { SiHuggingface } from "react-icons/si";

import deved from "../public/valencia.jpg";
import easypostLogo from "../public/0x0.png";
import offTheRadarPhoto from "../public/off-the-radar.jpg";
import portfolioVisionDemo from "../public/portfolio-vision-demo.jpeg";
import sweetspotLogo from "../public/sweetspot-logo.svg";
import haroldPhoto from "../public/harold.jpg";
import web1 from "../public/kanyesax.jpg";
import web2 from "../public/mriscans.jpg";
import web3 from "../public/segmentfetus.jpg";
import web5 from "../public/braintumordetection.jpg";
import web6 from "../public/sam2.jpg";

const siteUrl = "https://pascal-maker.github.io/";
const email = "pascal-musa@hotmail.com";
const formspreeFormId = "mjgqlrde";

const navigationItems = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "X", href: "https://x.com/pascalmusa51964?s=11", icon: FaXTwitter },
  {
    label: "LinkedIn",
    href: "https://be.linkedin.com/in/pascal-musabyimana-573b66178",
    icon: AiFillLinkedin,
  },
  { label: "GitHub", href: "https://github.com/pascal-maker", icon: AiFillGithub },
  { label: "Hugging Face", href: "https://huggingface.co/pascal-maker", icon: SiHuggingface },
  { label: "Email", href: `mailto:${email}`, icon: FaEnvelope },
];

const serviceCards = [
  {
    title: "Computer Vision Proofs of Concept",
    description:
      "Rapid prototypes for detection, segmentation, and model-assisted workflows that show whether an AI idea can work in the real world.",
    tools: ["YOLOv8", "SAM 2", "OpenCV", "Roboflow"],
  },
  {
    title: "AI Solutions & Integrations",
    description:
      "Practical AI features, evaluation loops, and automation flows for teams that need useful output instead of demos that only look impressive.",
    tools: ["Python", "Next.js", "Docker", "Langfuse"],
  },
  {
    title: "Websites & Landing Pages",
    description:
      "Focused pages for founders, creators, and small teams that need a clear offer, a sharp visual presentation, and a path to contact.",
    tools: ["React", "SEO", "UX", "Conversion"],
  },
];

const portfolioItems = [
  {
    title: "Kanye Sax Recognition",
    description: "Computer-vision experiment showcased through a LinkedIn project post.",
    href: "https://www.linkedin.com/in/pascal-musabyimana-573b66178/overlay/1727034581247/single-media-viewer/?profileId=ACoAACoslacB56MwdRN6bL1P1uM5qLdxwYzUcg8",
    image: web1,
    alt: "Computer vision project preview for Kanye Sax recognition",
    tags: ["AI demo", "Python", "Modeling"],
  },
  {
    title: "MRI Scan Dataset Work",
    description: "Medical-imaging project exploration using MRI scans and model experimentation.",
    // TODO: Replace this fallback with the specific MRI-scans project link.
    href: "https://github.com/pascal-maker",
    image: web2,
    alt: "MRI scan grid used for medical-imaging computer vision work",
    tags: ["Medical imaging", "Computer vision", "Dataset work"],
  },
  {
    title: "Fetus Segmentation",
    description: "Segmentation workflow shared as a Meta and computer-vision learning project.",
    href: "https://www.linkedin.com/posts/pascal-musabyimana-573b66178_meta-computervision-segmentation-activity-7169017148386840576-4GCh?utm_source=share&utm_medium=member_desktop",
    image: web3,
    alt: "Fetus segmentation computer vision project preview",
    tags: ["Segmentation", "Meta", "Computer vision"],
  },
  {
    title: "Applied AI Project Update",
    description: "A public progress post documenting applied AI learning and project execution.",
    href: "https://www.linkedin.com/posts/pascal-musabyimana-573b66178_hey-linkedin-network-i-have-decided-activity-7153396537753030657-_Vzm?utm_source=share&utm_medium=member_desktop",
    image: portfolioVisionDemo,
    alt: "Applied AI project update image",
    tags: ["Prototype", "AI", "LinkedIn"],
  },
  {
    title: "Brain Tumor Detection",
    description: "YOLOv8 medical-imaging proof of concept comparing object detection and segmentation.",
    href: "https://medium.com/@pascalmusa/brain-tumor-detection-yolov8-vs-sam-2-7a19ad44efb4",
    image: web5,
    alt: "Brain tumor detection model output on medical scan images",
    tags: ["YOLOv8", "Medical imaging", "PoC"],
  },
  {
    title: "SAM 2 Segmentation",
    description: "Segmentation comparison work connected to the brain-tumor detection article.",
    href: "https://medium.com/@pascalmusa/brain-tumor-detection-yolov8-vs-sam-2-7a19ad44efb4",
    image: web6,
    alt: "SAM 2 segmentation masks for medical-imaging experiment",
    tags: ["SAM 2", "Segmentation", "Hugging Face"],
  },
];

const testimonials = [
  {
    quote:
      "It was a real pleasure having you in our IT department. Your enthusiasm was contagious, and your innovative mindset brought fresh energy to our team. The experiments you conducted pushed our AI capabilities a step forward—both useful in application and bold in approach. Your contributions were a perfect blend of technical depth and curiosity. Wishing you the best in what comes next. Keep experimenting!",
    name: "Harold Kerckhaert",
    role: "IT Director",
    image: haroldPhoto,
  },
];

const organizations = [
  {
    name: "Easypost",
    image: easypostLogo,
    href: "https://www.linkedin.com/posts/pascal-musabyimana-573b66178_hey-linkedin-network-long-time-ago-activity-7345483853223931904-btig?utm_source=share&utm_medium=member_desktop&rcm=ACoAACoslacB56MwdRN6bL1P1uM5qLdxwYzUcg8",
    alt: "Easypost logo",
  },
  {
    name: "Sweetspot",
    image: sweetspotLogo,
    href: "https://www.sweetspot.com/",
    alt: "Sweetspot logo",
  },
  {
    name: "Off the Radar",
    image: offTheRadarPhoto,
    href: "https://off-the-radar.com/",
    alt: "Off the Radar event poster",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Pascal Musabyimana",
  jobTitle: "AI & Computer Vision Engineer",
  url: siteUrl,
  email: `mailto:${email}`,
  sameAs: socialLinks.filter((link) => link.label !== "Email").map((link) => link.href),
  knowsAbout: ["Computer Vision", "Artificial Intelligence", "Next.js", "YOLOv8", "OpenCV", "Roboflow"],
};

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [formState, handleFormSubmit] = useForm(formspreeFormId);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const resumeHref = "/Pascal_Musabyimana_Resume_EN.pdf";

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(savedTheme ? savedTheme === "dark" : prefersDark);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    window.localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const closeMenu = () => setIsMenuOpen(false);
  const closeDesktopMenu = () => setIsDesktopMenuOpen(false);
  const toggleDarkMode = () => setDarkMode((enabled) => !enabled);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Pascal Musabyimana | AI & Computer Vision Engineer</title>
        <meta
          name="description"
          content="Pascal Musabyimana builds computer-vision proofs of concept, AI integrations, and focused websites for founders and small teams."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={siteUrl} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content="Pascal Musabyimana | AI & Computer Vision Engineer" />
        <meta
          property="og:description"
          content="Computer-vision proofs of concept, AI solutions, and websites that help ideas become testable products."
        />
        <meta property="og:image" content={`${siteUrl}og-image.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pascal Musabyimana | AI & Computer Vision Engineer" />
        <meta
          name="twitter:description"
          content="Computer-vision proofs of concept, AI solutions, and conversion-focused websites."
        />
        <meta name="twitter:image" content={`${siteUrl}og-image.jpg`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="bg-white text-gray-950 transition-colors dark:bg-gray-950 dark:text-white">
        <section className="min-h-screen px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32">
          <nav className="sticky top-0 z-40 flex items-center justify-between py-5 backdrop-blur dark:text-white">
            <a href="#top" className="max-w-[14rem] text-sm leading-snug font-burtons sm:max-w-none sm:text-xl">
              developedbypascalmusabyimana
            </a>

            <div className="relative hidden items-center gap-4 md:flex">
              <button
                type="button"
                onClick={() => setIsDesktopMenuOpen((open) => !open)}
                aria-label="Toggle navigation menu"
                aria-expanded={isDesktopMenuOpen}
                className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-teal-500 hover:text-teal-600 dark:border-gray-700 dark:text-gray-200 dark:hover:text-teal-400"
              >
                <HiBars3 className="text-lg" />
                Menu
              </button>
              {isDesktopMenuOpen && (
                <div className="absolute right-[12rem] top-14 z-50 w-56 rounded-2xl border border-gray-200 bg-white p-3 shadow-2xl dark:border-gray-700 dark:bg-gray-900">
                  <div className="mb-2 flex items-center justify-between px-2 pt-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600 dark:text-teal-400">
                      Navigate
                    </p>
                    <button
                      type="button"
                      onClick={closeDesktopMenu}
                      aria-label="Close navigation menu"
                      className="rounded-full border border-gray-200 p-1 text-xl text-gray-900 dark:border-gray-700 dark:text-white"
                    >
                      <HiXMark />
                    </button>
                  </div>
                  <div className="flex flex-col gap-2">
                    {navigationItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={closeDesktopMenu}
                        className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-teal-50 hover:text-teal-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-teal-300"
                      >
                        {item.label}
                      </a>
                    ))}
                    <a
                      href={resumeHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeDesktopMenu}
                      className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-teal-50 hover:text-teal-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-teal-300"
                    >
                      Resume
                    </a>
                  </div>
                </div>
              )}
              <button
                type="button"
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
                className="cursor-pointer text-2xl text-gray-700 transition-colors hover:text-teal-600 dark:text-gray-200 dark:hover:text-teal-400"
              >
                <BsFillMoonStarsFill />
              </button>
              <a
                className="rounded-full bg-teal-600 px-5 py-2 text-white shadow-lg shadow-teal-500/20 transition-transform hover:-translate-y-0.5 hover:bg-teal-700"
                href="#contact"
              >
                Get in touch
              </a>
            </div>

            <div className="flex items-center gap-3 md:hidden">
              <button
                type="button"
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
                className="rounded-full border border-gray-200 p-2 text-xl text-gray-700 dark:border-gray-700 dark:text-gray-200"
              >
                <BsFillMoonStarsFill />
              </button>
              <button
                type="button"
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={isMenuOpen}
                className="rounded-full border border-gray-200 p-2 text-2xl text-gray-900 dark:border-gray-700 dark:text-white"
              >
                <HiBars3 />
              </button>
            </div>
          </nav>

          {isMenuOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <button
                type="button"
                aria-label="Close menu overlay"
                onClick={closeMenu}
                className="absolute inset-0 bg-gray-950/50 backdrop-blur-sm"
              />
              <div className="absolute right-4 top-4 w-[min(20rem,calc(100vw-2rem))] rounded-2xl bg-white p-5 shadow-2xl dark:bg-gray-900">
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-600 dark:text-teal-400">
                    Menu
                  </p>
                  <button
                    type="button"
                    onClick={closeMenu}
                    aria-label="Close menu"
                    className="rounded-full border border-gray-200 p-2 text-2xl text-gray-900 dark:border-gray-700 dark:text-white"
                  >
                    <HiXMark />
                  </button>
                </div>

                <div className="flex flex-col gap-3">
                  {navigationItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="rounded-lg border border-gray-200 px-4 py-3 text-base font-medium text-gray-900 transition-colors hover:border-teal-500 hover:text-teal-700 dark:border-gray-700 dark:text-white dark:hover:text-teal-300"
                    >
                      {item.label}
                    </a>
                  ))}
                  <a
                    className="rounded-lg border border-gray-200 px-4 py-3 text-center text-base font-semibold text-gray-900 dark:border-gray-700 dark:text-white"
                    href={resumeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                  >
                    Resume
                  </a>
                </div>
              </div>
            </div>
          )}

          <div id="top" className="grid items-center gap-12 py-12 md:min-h-[calc(100vh-5rem)] md:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.7fr)] md:py-16">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
                AI & Computer Vision Engineer
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-tight text-gray-950 dark:text-white sm:text-6xl">
                Pascal Musabyimana
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-8 text-gray-700 dark:text-gray-200">
                I build computer-vision proofs of concept, AI solutions, and the websites that help founders explain what they are building.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex justify-center rounded-lg bg-teal-600 px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-teal-700"
                >
                  Let&apos;s talk about your project
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex justify-center rounded-lg border border-gray-300 px-5 py-3 text-base font-semibold text-gray-900 transition-colors hover:border-teal-600 hover:text-teal-700 dark:border-gray-700 dark:text-white dark:hover:border-teal-400 dark:hover:text-teal-300"
                >
                  View selected work
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 text-3xl text-gray-600 dark:text-gray-300">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="transition-colors hover:text-teal-700 dark:hover:text-teal-300"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            <div className="mx-auto w-full max-w-[19rem] sm:max-w-[22rem] md:max-w-[24rem]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100 shadow-2xl shadow-teal-900/10 dark:bg-slate-800">
                <Image
                  src={deved}
                  fill
                  priority
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  alt="Portrait of Pascal Musabyimana"
                  sizes="(max-width: 768px) 22rem, 24rem"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-24 border-y border-gray-100 px-4 py-16 dark:border-gray-800 sm:px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
              Services
            </p>
            <h2 className="text-3xl font-semibold text-gray-950 dark:text-white sm:text-4xl">
              Clear offers for teams that need AI work to become useful.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {serviceCards.map((service) => (
              <article key={service.title} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <div className="mb-5 h-12 w-12 rounded-lg bg-teal-100 dark:bg-teal-950" />
                <h3 className="text-xl font-semibold text-gray-950 dark:text-white">{service.title}</h3>
                <p className="mt-3 leading-7 text-gray-700 dark:text-gray-300">{service.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.tools.map((tool) => (
                    <span key={tool} className="rounded-full bg-teal-50 px-3 py-1 text-sm font-medium text-teal-800 dark:bg-teal-950 dark:text-teal-200">
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="scroll-mt-24 px-4 py-16 sm:px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(18rem,0.75fr)]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
                About
              </p>
              <h2 className="text-3xl font-semibold text-gray-950 dark:text-white sm:text-4xl">
                I combine product sense, computer vision, and frontend execution.
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-gray-700 dark:text-gray-300">
                <p>
                  I study at Howest University of Applied Sciences and build projects across AI, computer vision, and web development. My strongest work is turning early ideas into concrete prototypes that can be shown, tested, and improved.
                </p>
                <p>
                  If you need a landing page, a working proof of concept for a computer-vision project, or a clearer website for your business, I can help you move from a loose idea to something people can understand and contact you about.
                </p>
              </div>
              <a href="#contact" className="mt-8 inline-flex rounded-lg bg-gray-950 px-5 py-3 font-semibold text-white transition-colors hover:bg-teal-700 dark:bg-white dark:text-gray-950 dark:hover:bg-teal-200">
                Start a conversation
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-950 dark:text-white">Companies / Organizations I Worked With</h3>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {organizations.map((organization) => (
                  <a
                    key={organization.name}
                    href={organization.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-lg border border-gray-200 p-4 transition-colors hover:border-teal-500 dark:border-gray-800 dark:hover:border-teal-400"
                  >
                    <Image
                      src={organization.image}
                      width={64}
                      height={64}
                      alt={organization.alt}
                      className="h-16 w-16 rounded-lg border border-gray-200 object-cover dark:border-gray-800"
                    />
                    <span className="font-medium text-gray-800 dark:text-gray-200">{organization.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="scroll-mt-24 bg-gray-50 px-4 py-16 dark:bg-gray-900 sm:px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
              Portfolio
            </p>
            <h2 className="text-3xl font-semibold text-gray-950 dark:text-white sm:text-4xl">
              Selected computer-vision and AI work.
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-700 dark:text-gray-300">
              A few public projects and writeups that show the kind of prototypes and technical experiments I build.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {portfolioItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 dark:border-gray-800 dark:bg-gray-950"
              >
                <div className="relative aspect-[4/3] bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={item.image}
                    fill
                    style={{ objectFit: "cover" }}
                    alt={item.alt}
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-950 group-hover:text-teal-700 dark:text-white dark:group-hover:text-teal-300">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-gray-700 dark:text-gray-300">{item.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 dark:bg-teal-950 dark:text-teal-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {testimonials.length > 0 && (
          <section className="px-4 py-16 sm:px-6 md:px-12 lg:px-24 xl:px-32">
            <h2 className="text-3xl font-semibold text-gray-950 dark:text-white">What Clients Say</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {testimonials.map((testimonial) => (
                <figure key={testimonial.quote} className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
                  <blockquote className="leading-8 text-gray-700 dark:text-gray-300">
                    {testimonial.quote}
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-4">
                    {testimonial.image && (
                      <Image
                        src={testimonial.image}
                        width={56}
                        height={56}
                        alt={`Portrait of ${testimonial.name}`}
                        className="h-14 w-14 rounded-full object-cover"
                      />
                    )}
                    <span>
                      <span className="block font-semibold text-gray-950 dark:text-white">{testimonial.name}</span>
                      <span className="block text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        <section id="contact" className="scroll-mt-24 px-4 py-16 sm:px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(18rem,0.8fr)]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">
                Contact
              </p>
              <h2 className="text-3xl font-semibold text-gray-950 dark:text-white sm:text-4xl">
                Have a computer-vision or AI idea you want to test?
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-700 dark:text-gray-300">
                Send a short message with the goal, the current state, and what you want to launch or validate. I&apos;ll reply by email.
              </p>
              <div className="mt-8 space-y-3 text-gray-700 dark:text-gray-300">
                <p>
                  Email: <a className="font-semibold text-teal-700 dark:text-teal-300" href={`mailto:${email}`}>{email}</a>
                </p>
                <p>
                  LinkedIn: <a className="font-semibold text-teal-700 dark:text-teal-300" href="https://be.linkedin.com/in/pascal-musabyimana-573b66178" target="_blank" rel="noopener noreferrer">Pascal Musabyimana</a>
                </p>
              </div>
            </div>

            {formState.succeeded ? (
              <div className="flex flex-col justify-center rounded-lg border border-teal-200 bg-teal-50 p-8 text-center dark:border-teal-900 dark:bg-teal-950">
                <p className="text-xl font-semibold text-teal-800 dark:text-teal-200">Thanks for your message!</p>
                <p className="mt-3 leading-7 text-teal-700 dark:text-teal-300">
                  I&apos;ll get back to you by email as soon as possible.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleFormSubmit}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
              >
                <input type="hidden" name="_subject" value="New project inquiry from pascal-maker.github.io" />
                <div className="grid gap-5">
                  <label className="grid gap-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                    Name
                    <input
                      required
                      name="name"
                      type="text"
                      autoComplete="name"
                      className="rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-gray-950 outline-none transition-colors focus:border-teal-600 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                    />
                    <ValidationError prefix="Name" field="name" errors={formState.errors} className="text-sm text-red-600 dark:text-red-400" />
                  </label>
                  <label className="grid gap-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                    Email
                    <input
                      required
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-gray-950 outline-none transition-colors focus:border-teal-600 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                    />
                    <ValidationError prefix="Email" field="email" errors={formState.errors} className="text-sm text-red-600 dark:text-red-400" />
                  </label>
                  <label className="grid gap-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                    Message
                    <textarea
                      required
                      name="message"
                      rows={6}
                      className="resize-y rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-gray-950 outline-none transition-colors focus:border-teal-600 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                      placeholder="Tell me what you want to build or validate."
                    />
                    <ValidationError prefix="Message" field="message" errors={formState.errors} className="text-sm text-red-600 dark:text-red-400" />
                  </label>
                  <button
                    type="submit"
                    disabled={formState.submitting}
                    className="rounded-lg bg-teal-600 px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {formState.submitting ? "Sending..." : "Send message"}
                  </button>
                  <ValidationError errors={formState.errors} className="text-sm text-red-600 dark:text-red-400" />
                </div>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-100 bg-white px-4 py-10 text-gray-700 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300 sm:px-6 md:px-12 lg:px-24 xl:px-32">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-gray-950 dark:text-white">Pascal Musabyimana</p>
            <p className="mt-1 text-sm">AI & Computer Vision Engineer</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm font-medium">
            {navigationItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-teal-700 dark:hover:text-teal-300">
                {item.label}
              </a>
            ))}
            <a href={resumeHref} target="_blank" rel="noopener noreferrer" className="hover:text-teal-700 dark:hover:text-teal-300">
              Resume
            </a>
          </div>
          <div className="flex gap-4 text-2xl">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="hover:text-teal-700 dark:hover:text-teal-300"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
        <p className="mt-8 text-sm">&copy; {new Date().getFullYear()} Pascal Musabyimana. All rights reserved.</p>
      </footer>
    </div>
  );
}
