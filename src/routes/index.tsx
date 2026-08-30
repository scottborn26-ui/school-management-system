import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Bell,
  BookOpen,
  CalendarDays,
  Check,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  Facebook,
  GraduationCap,
  LayoutDashboard,
  Linkedin,
  Menu,
  MessageCircle,
  Play,
  Quote,
  Search,
  ShieldCheck,
  Star,
  Smartphone,
  Users,
  X,
  Youtube,
} from "lucide-react";
import { useState } from "react";

const registerSearch = { mode: "register" } as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SHANSCOTT Technologies | Smarter school management" },
      {
        name: "description",
        content:
          "A connected school management system for learners, teachers, attendance, fees and results.",
      },
    ],
  }),
  component: Landing,
});

const features = [
  [
    Users,
    "Student Management",
    "Keep every learner record clear, complete and easy to find.",
    "bg-emerald-100 text-emerald-700",
  ],
  [
    ClipboardCheck,
    "Attendance Tracking",
    "See attendance patterns early and act before small gaps grow.",
    "bg-sky-100 text-sky-700",
  ],
  [
    BookOpen,
    "Exams & Grades",
    "Capture assessment progress with workflows built for CBE schools.",
    "bg-amber-100 text-amber-700",
  ],
  [
    CircleDollarSign,
    "Fees & Payments",
    "Track balances, invoices and collections in one dependable view.",
    "bg-rose-100 text-rose-700",
  ],
  [
    CalendarDays,
    "Timetable",
    "Build a timetable your staff can understand and keep up to date.",
    "bg-violet-100 text-violet-700",
  ],
  [
    BarChart3,
    "Reports & Analytics",
    "Turn daily records into useful decisions for your school.",
    "bg-orange-100 text-orange-700",
  ],
] as const;

const benefits = [
  "Simple enough for the whole school team",
  "Available on web and Android devices",
  "Secure backups and role-based access",
  "Less paperwork and more time for teaching",
  "Better communication with families",
  "Built for primary and secondary schools",
];

const testimonials = [
  [
    "SHANSCOTT has made our daily administration feel organised instead of overwhelming. Our team can finally see the same picture.",
    "Mary Wanjiku",
    "Headteacher, Nairobi",
  ],
  [
    "The attendance and assessment views save me hours every week. It is clear, fast and designed around what schools actually do.",
    "Peter Otieno",
    "Deputy Headteacher, Kisumu",
  ],
  [
    "I can check fees, attendance and updates without chasing a paper note. The parent experience is genuinely useful.",
    "Grace Njeri",
    "Parent, Nakuru",
  ],
];

function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const navItems = ["Features", "Modules", "About us", "Pricing", "Contact"];

  return (
    <div className="min-h-screen overflow-hidden bg-white text-[#102653]">
      <div className="bg-[#102653] px-4 py-2 text-[11px] font-medium tracking-wide text-white/80 sm:text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <span>Smarter Schools, Brighter Futures | Trusted by 500+ Schools Across Kenya</span>
          <div className="hidden items-center gap-3 sm:flex" aria-label="Social links">
            <Facebook className="size-3.5" />
            <span className="sr-only">Facebook</span>
            <span className="text-sm font-bold">X</span>
            <span className="sr-only">X</span>
            <Linkedin className="size-3.5" />
            <span className="sr-only">LinkedIn</span>
            <Youtube className="size-3.5" />
            <span className="sr-only">YouTube</span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2.5" onClick={closeMenu}>
            <img
              src="/shanscot-logo.png"
              alt="SHANSCOT Technologies"
              className="h-12 w-52 object-contain object-left"
            />
          </Link>
          <nav
            className="hidden items-center gap-7 text-sm font-semibold text-slate-600 lg:flex"
            aria-label="Main navigation"
          >
            <a
              href="#home"
              className="relative text-[#102653] after:absolute after:-bottom-6 after:left-0 after:h-0.5 after:w-full after:bg-[#35a853]"
            >
              Home
            </a>
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="transition-colors hover:text-[#35a853]"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-4 xl:flex">
            <a
              href="tel:+254700123456"
              className="flex items-center gap-2 text-sm font-semibold text-slate-600"
            >
              <MessageCircle className="size-4 text-[#35a853]" />
              +254 700 123 456
            </a>
            <Link
              to="/auth"
              search={registerSearch}
              className="rounded-lg bg-[#35a853] px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-[#35a853]/20 transition hover:bg-[#278c43]"
            >
              Get Started
            </Link>
          </div>
          <button
            className="rounded-lg p-2 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-slate-100 bg-white px-5 py-4 lg:hidden">
            <div className="flex flex-col gap-4 text-sm font-semibold text-slate-700">
              <a href="#home" onClick={closeMenu}>
                Home
              </a>
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} onClick={closeMenu}>
                  {item}
                </a>
              ))}
              <Link
                to="/auth"
                search={registerSearch}
                className="w-fit rounded-lg bg-[#35a853] px-4 py-2 text-white"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </header>

      <main>
        <section
          id="home"
          className="relative bg-[linear-gradient(115deg,#f3f8ff_0%,#edf8f1_100%)] px-4 pb-28 pt-16 sm:px-6 lg:px-8 lg:pb-32 lg:pt-24"
        >
          <div className="pointer-events-none absolute -right-32 top-0 size-[28rem] rounded-full bg-[#b9e8cf]/35 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#b7dfc2] bg-white/70 px-3.5 py-2 text-xs font-bold text-[#258443]">
                <ShieldCheck className="size-4" />
                All-in-One School Management Solution
              </span>
              <h1 className="mt-6 max-w-2xl text-5xl font-black leading-[1.04] tracking-[-0.04em] text-[#102653] sm:text-6xl lg:text-[4.5rem]">
                Manage Your School <span className="text-[#35a853]">Smarter,</span> Faster &amp;
                Better
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                One calm, connected place for your learners, staff, attendance, assessments, fees
                and the decisions that keep your school moving.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/auth"
                  search={registerSearch}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#35a853] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#35a853]/25 transition hover:-translate-y-0.5 hover:bg-[#278c43]"
                >
                  Get Started Now <ArrowRight className="size-4" />
                </Link>
                <a
                  href="#demo"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-[#102653] transition hover:border-[#35a853] hover:text-[#278c43]"
                >
                  <Play className="size-4 fill-current text-[#35a853]" />
                  Watch Demo
                </a>
              </div>
              <div className="mt-9 flex items-center gap-3 text-sm text-slate-600">
                <span className="flex -space-x-2">
                  <span className="grid size-8 place-items-center rounded-full border-2 border-white bg-[#f5b7a8] text-xs font-bold">
                    MW
                  </span>
                  <span className="grid size-8 place-items-center rounded-full border-2 border-white bg-[#a9d6f5] text-xs font-bold">
                    PO
                  </span>
                  <span className="grid size-8 place-items-center rounded-full border-2 border-white bg-[#cce99b] text-xs font-bold">
                    GN
                  </span>
                </span>
                <span>
                  <strong className="text-[#102653]">500+</strong> schools growing with us
                </span>
              </div>
            </div>
            <div className="relative min-h-[535px] sm:min-h-[510px]">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fm=webp&fit=crop&w=2000&q=92"
                alt="Teacher engaging students in a bright African classroom"
                className="absolute inset-x-0 top-0 h-[330px] w-full rounded-[2rem] object-cover object-center shadow-xl shadow-[#102653]/15 sm:h-[370px]"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-x-0 top-0 h-[330px] rounded-[2rem] bg-[#102653]/15 sm:h-[370px]" />
              <div className="relative pt-24 sm:pt-28">
                <DashboardMockup />
              </div>
            </div>
          </div>
          <div className="relative mx-auto mt-14 grid max-w-5xl gap-3 sm:grid-cols-3">
            <Stat icon={Users} number="1,250+" label="Active Students" />
            <Stat icon={GraduationCap} number="75+" label="Teachers & Staff" />
            <Stat icon={BookOpen} number="32+" label="Classes Managed" />
          </div>
        </section>

        <section id="features" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="POWERFUL, PRACTICAL, CONNECTED"
              title={
                <>
                  Everything You Need to Run <span>Your School Efficiently</span>
                </>
              }
              body="From first admission to final report, SHANSCOTT Technologies brings the work of your school into one clear system."
            />
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map(([Icon, title, body, color]) => (
                <article
                  key={title}
                  className="group flex min-h-[220px] h-full flex-col rounded-xl border border-slate-100 bg-white p-6 shadow-[0_8px_30px_rgba(16,38,83,0.05)] transition hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(16,38,83,0.1)]"
                >
                  <span className={`mb-5 grid size-12 place-items-center rounded-full ${color}`}>
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-lg font-bold text-[#102653]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{body}</p>
                  <ChevronRight className="mt-auto size-4 pt-5 text-[#35a853] opacity-0 transition group-hover:opacity-100" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about-us" className="bg-[#effaf2] px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fm=webp&fit=crop&w=1800&q=92"
                alt="Students learning together in a well-lit school classroom"
                className="aspect-[4/3] w-full rounded-2xl object-cover object-center shadow-xl"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute -bottom-6 -right-4 bg-[#102653] px-6 py-5 text-white shadow-xl sm:-right-6">
                <strong className="block text-3xl text-[#8bd35b]">10+</strong>
                <span className="text-xs font-semibold uppercase tracking-wider text-white/70">
                  Years helping schools
                </span>
              </div>
            </div>
            <div>
              <SectionIntro
                align="left"
                eyebrow="WHY CHOOSE US"
                title={
                  <>
                    A better day for <span>every person</span> in your school.
                  </>
                }
                body="Your school deserves technology that feels like a helpful colleague: clear when you need it, secure in the background and ready for the next term."
              />
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 text-sm font-semibold text-[#102653]"
                  >
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#35a853] text-white">
                      <Check className="size-3.5" />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="modules" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="MADE FOR THE WHOLE SCHOOL"
              title={
                <>
                  One system. <span>Every important workflow.</span>
                </>
              }
              body="Give every team the tools and visibility they need, without making the school feel more complicated."
            />
            <div className="mt-14 grid gap-4 md:grid-cols-3">
              <ModuleCard
                icon={LayoutDashboard}
                title="School Office"
                items={[
                  "Admissions & learner records",
                  "Staff and class management",
                  "Reports at a glance",
                ]}
              />
              <ModuleCard
                icon={Smartphone}
                title="Teachers & Families"
                items={[
                  "Attendance from any device",
                  "Assessment and progress",
                  "Clear school communication",
                ]}
              />
              <ModuleCard
                icon={CircleDollarSign}
                title="Finance Team"
                items={[
                  "Fee structures and invoices",
                  "Payment tracking",
                  "Useful financial reports",
                ]}
              />
            </div>
          </div>
        </section>

        <section className="bg-[#f6f9fd] px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="TRUSTED IN THE CLASSROOM"
              title={
                <>
                  What <span>Our Clients Say</span>
                </>
              }
              body="The best measure of a school system is whether it makes real work feel lighter."
            />
            <div className="mt-14 grid gap-4 lg:grid-cols-3">
              {testimonials.map(([quote, name, role]) => (
                <article
                  key={name}
                  className="flex h-full flex-col rounded-xl border border-slate-100 bg-white p-7 shadow-[0_8px_30px_rgba(16,38,83,0.05)]"
                >
                  <Quote className="size-8 text-[#8bd35b]" />
                  <p className="mt-5 text-[15px] italic leading-7 text-slate-600">
                    &ldquo;{quote}&rdquo;
                  </p>
                  <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-5">
                    <div className="flex items-center gap-3">
                      <span className="grid size-10 place-items-center rounded-full bg-[#dcecf7] text-xs font-bold text-[#102653]">
                        {name
                          .split(" ")
                          .map((part) => part[0])
                          .join("")}
                      </span>
                      <span>
                        <strong className="block text-sm text-[#102653]">{name}</strong>
                        <small className="text-xs text-slate-500">{role}</small>
                      </span>
                    </div>
                    <span
                      className="flex shrink-0 gap-0.5 text-[#f4b942]"
                      aria-label="5 out of 5 stars"
                    >
                      {Array.from({ length: 5 }, (_, index) => (
                        <Star key={index} className="size-3.5 fill-current" />
                      ))}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 rounded-2xl bg-[linear-gradient(105deg,#102653_0%,#155f63_55%,#35a853_100%)] px-7 py-10 text-white shadow-2xl sm:px-12 md:flex-row md:items-center">
            <div className="flex items-center gap-5">
              <span className="grid size-14 shrink-0 place-items-center rounded-full bg-white/15">
                <GraduationCap className="size-7 text-[#b9ef8d]" />
              </span>
              <div>
                <h2 className="text-2xl font-black sm:text-3xl">
                  Take Your School to the Next Level
                </h2>
                <p className="mt-2 text-sm text-white/75">
                  Start building a clearer, more connected school today.
                </p>
              </div>
            </div>
            <Link
              to="/auth"
              search={registerSearch}
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-[#102653] transition hover:bg-[#effaf2]"
            >
              Get Started Today <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-[#0b1c42] px-4 pb-6 pt-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 pb-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src="/shanscot-logo.png"
                alt="SHANSCOT Technologies"
                className="h-12 w-56 rounded-lg object-contain object-left"
              />
            </div>
            <p className="mt-5 max-w-xs text-sm leading-6 text-white/60">
              School management that helps your team spend less time chasing information and more
              time moving learning forward.
            </p>
            <div className="mt-5 flex gap-3 text-white/60">
              <Facebook className="size-4" />
              <Linkedin className="size-4" />
              <Youtube className="size-4" />
            </div>
          </div>
          <FooterColumn
            title="Quick Links"
            links={["Home", "Features", "Modules", "About us", "Pricing", "Contact"]}
          />
          <FooterColumn
            title="Our Modules"
            links={[
              "Students",
              "Classes",
              "Attendance",
              "Exams & Grades",
              "Fees & Payments",
              "Timetable",
              "Reports",
            ]}
          />
          <div>
            <h3 className="text-sm font-bold">Contact Us</h3>
            <div className="mt-5 space-y-4 text-sm text-white/60">
              <a className="block hover:text-white" href="tel:+254700123456">
                +254 700 123 456
              </a>
              <a className="block hover:text-white" href="mailto:hello@shanscotttech.website">
                hello@shanscotttech.website
              </a>
              <p>
                Nairobi, Kenya
                <br />
                Serving schools across Africa
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 border-t border-white/10 pt-5 text-xs text-white/45 sm:flex-row">
          <span>Copyright 2026 SHANSCOTT Technologies. All rights reserved.</span>
          <span>Smarter schools. Brighter futures.</span>
        </div>
      </footer>
    </div>
  );
}

function SectionIntro({
  eyebrow,
  title,
  body,
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  body: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl text-left"}>
      <p className="text-xs font-black tracking-[0.18em] text-[#35a853]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black leading-tight tracking-[-0.03em] text-[#102653] sm:text-4xl">
        {title}
      </h2>
      <div className={`mt-5 h-1 w-14 bg-[#35a853] ${align === "center" ? "mx-auto" : ""}`} />
      <p className="mt-5 text-base leading-7 text-slate-500">{body}</p>
    </div>
  );
}

function Stat({
  icon: Icon,
  number,
  label,
}: {
  icon: typeof Users;
  number: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-xl bg-white px-5 py-4 shadow-[0_12px_35px_rgba(16,38,83,0.1)]">
      <span className="grid size-10 place-items-center rounded-lg bg-[#e5f6e9] text-[#35a853]">
        <Icon className="size-5" />
      </span>
      <span>
        <strong className="block text-2xl font-black text-[#102653]">{number}</strong>
        <small className="text-xs font-semibold text-slate-500">{label}</small>
      </span>
    </div>
  );
}

function ModuleCard({
  icon: Icon,
  title,
  items,
}: {
  icon: typeof LayoutDashboard;
  title: string;
  items: string[];
}) {
  return (
    <article className="rounded-xl border border-slate-100 bg-white p-7 shadow-[0_8px_30px_rgba(16,38,83,0.05)]">
      <span className="grid size-12 place-items-center rounded-xl bg-[#102653] text-[#8bd35b]">
        <Icon className="size-5" />
      </span>
      <h3 className="mt-6 text-xl font-bold text-[#102653]">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-slate-500">
            <Check className="mt-0.5 size-4 shrink-0 text-[#35a853]" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-bold">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm text-white/60">
        {links.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase().replaceAll(" ", "-")}`} className="hover:text-white">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div id="demo" className="relative mx-auto w-full max-w-[680px] pb-12 pl-0 sm:pl-6">
      <div className="overflow-hidden rounded-2xl border-[6px] border-[#102653] bg-white shadow-2xl shadow-[#102653]/25">
        <div className="flex h-8 items-center gap-1.5 bg-[#102653] px-3">
          <i className="size-2 rounded-full bg-red-300" />
          <i className="size-2 rounded-full bg-yellow-300" />
          <i className="size-2 rounded-full bg-green-300" />
        </div>
        <div className="flex min-h-[365px] bg-[#f5f8fc] text-[9px] sm:min-h-[375px]">
          <aside className="hidden w-36 shrink-0 bg-[#102653] p-4 text-white/60 sm:block">
            <strong className="mb-8 flex items-start gap-1.5 text-[9px] leading-3 text-white">
              <GraduationCap className="size-4 text-[#8bd35b]" />
              <span>
                SHANSCOTT
                <br />
                Technologies
              </span>
            </strong>
            {["Overview", "Learners", "Attendance", "Assessments", "Fees", "Finance"].map(
              (item, index) => (
                <div
                  key={item}
                  className={`mb-2 flex items-center gap-2 rounded-lg px-2.5 py-2.5 ${index === 0 ? "bg-white/10 text-white" : ""}`}
                >
                  <span className="size-1.5 rounded-full bg-[#8bd35b]" />
                  {item}
                </div>
              ),
            )}
          </aside>
          <div className="min-w-0 flex-1 p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[8px] font-bold uppercase tracking-widest text-slate-400">
                  School overview
                </p>
                <h3 className="mt-1 text-base font-black text-[#102653] sm:text-lg">
                  Good morning, Grace.
                </h3>
              </div>
              <div className="flex gap-2">
                <Search className="size-4 text-slate-400" />
                <Bell className="size-4 text-slate-400" />
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {[
                ["Students", "1,250", "text-[#35a853]"],
                ["Teachers", "75", "text-[#358bc5]"],
                ["Classes", "32", "text-[#e59a28]"],
                ["Attendance", "94.8%", "text-[#8b61c7]"],
              ].map(([label, value, color]) => (
                <div key={label} className="rounded-lg bg-white p-2.5 shadow-sm">
                  <span className="block text-[8px] text-slate-400">{label}</span>
                  <strong className={`mt-1 block text-sm ${color}`}>{value}</strong>
                  <span className="mt-1 block h-1 w-3/4 rounded bg-slate-100" />
                </div>
              ))}
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_0.8fr]">
              <div className="rounded-lg bg-white p-3 shadow-sm">
                <div className="flex justify-between font-bold text-[#102653]">
                  <span>Fee collection</span>
                  <span className="text-[8px] text-[#35a853]">This term</span>
                </div>
                <div className="mt-5 flex h-24 items-end justify-around gap-2 border-b border-slate-100">
                  {[35, 55, 45, 72, 62, 88, 76].map((height, i) => (
                    <i
                      key={i}
                      className={`w-3.5 rounded-t ${i === 5 ? "bg-[#35a853]" : "bg-[#b8dfc5]"}`}
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
              <div className="rounded-lg bg-white p-3 shadow-sm">
                <span className="font-bold text-[#102653]">Attendance</span>
                <div className="mt-3 flex items-center gap-3">
                  <div
                    className="grid size-16 place-items-center rounded-full"
                    style={{ background: "conic-gradient(#35a853 0 94.8%, #e5edf0 94.8%)" }}
                  >
                    <span className="grid size-11 place-items-center rounded-full bg-white text-[11px] font-black text-[#102653]">
                      94.8%
                    </span>
                  </div>
                  <span className="text-[8px] leading-4 text-slate-500">
                    <b className="text-[#35a853]">Present</b>
                    <br />
                    5% absent
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-2 right-0 w-44 overflow-hidden rounded-2xl border-4 border-[#102653] bg-white shadow-2xl sm:-right-5 sm:w-48">
        <div className="flex items-center justify-between bg-[#35a853] px-3 py-2.5 text-[8px] font-bold uppercase tracking-wider text-white">
          Parent portal
          <Smartphone className="size-3" />
        </div>
        <div className="p-3.5">
          <div className="flex items-center gap-2">
            <span className="grid size-7 place-items-center rounded-full bg-[#dcecf7] text-[8px] font-bold">
              GN
            </span>
            <span>
              <b className="block text-[9px] text-[#102653]">Grace Njeri</b>
              <small className="text-[7px] text-slate-400">Parent view</small>
            </span>
          </div>
          <div className="mt-3 bg-[#effaf2] p-2">
            <span className="text-[7px] text-slate-500">Today&apos;s attendance</span>
            <b className="mt-1 block text-sm text-[#35a853]">Present</b>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <span className="bg-slate-50 p-2 text-[7px] text-slate-500">
              Fees
              <br />
              <b className="text-[#102653]">Up to date</b>
            </span>
            <span className="bg-slate-50 p-2 text-[7px] text-slate-500">
              Grade
              <br />
              <b className="text-[#102653]">Excellent</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
