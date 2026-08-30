import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Building2,
  CalendarDays,
  Check,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  FileText,
  GraduationCap,
  HelpCircle,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  PhoneCall,
  School,
  Search,
  Send,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

const registerSearch = { mode: "register" } as const;

const quickQuestions = [
  "What is SHANSCOTT SMS?",
  "What features are available?",
  "How does the teacher portal work?",
  "How do I manage students?",
  "How does attendance work?",
  "How does the timetable work?",
  "How are assessments managed?",
  "How do fees work?",
  "Can parents access the system?",
  "How do I get started?",
  "How do I contact support?",
] as const;

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Modules", href: "#modules" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#about-us" },
  { label: "Contact", href: "#contact" },
] as const;

const features = [
  [Users, "Student Management", "Manage learner records, admissions, classes and academic information from one place.", "bg-emerald-100 text-emerald-700"],
  [GraduationCap, "Teacher Management", "Organize teacher profiles, assignments, responsibilities and access.", "bg-sky-100 text-sky-700"],
  [ClipboardCheck, "Attendance Tracking", "Record and monitor learner attendance efficiently.", "bg-cyan-100 text-cyan-700"],
  [BookOpen, "Assessments & Grades", "Manage assessments, marks and academic performance.", "bg-amber-100 text-amber-700"],
  [CircleDollarSign, "Fees & Payments", "Track school fees, payments, balances and financial records.", "bg-rose-100 text-rose-700"],
  [CalendarDays, "Timetable", "Organize class and teacher timetables while reducing scheduling conflicts.", "bg-violet-100 text-violet-700"],
  [BarChart3, "Reports & Analytics", "Generate useful reports and gain visibility into school performance.", "bg-orange-100 text-orange-700"],
  [MessageCircle, "Communication", "Keep schools, teachers and families connected through timely updates.", "bg-blue-100 text-blue-700"],
  [School, "CBC / CBE Support", "Built with Kenya's CBC/CBE school environment in mind.", "bg-emerald-100 text-[#0B5D3B]"],
] as const;

const benefits = [
  "Simple enough for the whole school team",
  "Available on web and Android devices",
  "Secure backups and role-based access",
  "Less paperwork and more time for teaching",
  "Better communication with families",
  "Built for primary and secondary schools",
] as const;

const workingSteps = [
  ["01", "Set Up Your School", "Configure your school, classes, streams, teachers and learners."],
  ["02", "Manage Daily Operations", "Handle attendance, assessments, timetables, fees and communication."],
  ["03", "Track & Improve", "Use reports and analytics to understand school performance and make better decisions."],
] as const;

const modules = [
  { title: "School Administration", description: "Coordinate school setup, staff workflows and operational oversight from a single command center.", image: "/landing/1.jpeg", features: ["School setup", "Academic structure", "Operations dashboard"] },
  { title: "Student Management", description: "Track learner records, admissions, progression, guardians and academic history without fragmentation.", image: "/landing/2.jpeg", features: ["Admissions", "Profiles", "Progress tracking"] },
  { title: "Teacher Management", description: "Support teacher allocation, responsibilities and classroom visibility in one connected view.", image: "/landing/3.jpeg", features: ["Assignments", "Class access", "Role control"] },
  { title: "Class & Stream Management", description: "Create and maintain class structures, stream grouping and resource planning with less admin friction.", image: "/landing/4.jpeg", features: ["Streams", "Levels", "Structures"] },
  { title: "Attendance", description: "Record attendance quickly and monitor trends across grades, streams and teacher groups.", image: "/landing/1.jpeg", features: ["Daily capture", "Reports", "Alerts"] },
  { title: "Assessments", description: "Review assessments, capture marks and maintain continuous academic oversight across the school.", image: "/landing/2.jpeg", features: ["Marks entry", "Approval flow", "Performance review"] },
  { title: "CBC / CBE Grading", description: "Support academic progression with grade-based workflows aligned to Kenya's CBC/CBE model.", image: "/landing/3.jpeg", features: ["Grade mapping", "Learning areas", "CBE structure"] },
  { title: "Timetable", description: "Build a realistic timetable that balances classes, teachers and scheduling demands more effectively.", image: "/landing/4.jpeg", features: ["Scheduling", "Resource fit", "Conflict checks"] },
  { title: "Fees & Finance", description: "Track invoices, payments and balances clearly so finance teams can focus on healthier cash flow.", image: "/landing/1.jpeg", features: ["Invoices", "Payments", "Balance tracking"] },
  { title: "Reports", description: "Turn daily school activity into useful summaries that support planning and decision-making.", image: "/landing/2.jpeg", features: ["Analytics", "Overview", "Tracking"] },
  { title: "Communication", description: "Share school updates, announcements and important reminders with staff and families.", image: "/landing/3.jpeg", features: ["Messages", "Notifications", "Family updates"] },
  { title: "Parent Portal", description: "Keep parents informed with attendance, fees and performance insights that are easy to understand.", image: "/landing/4.jpeg", features: ["Parent access", "Progress updates", "Engagement"] },
] as const;

const roleCards = [
  { title: "School Administrator", description: "Manage the entire school from one central dashboard.", icon: Building2 },
  { title: "Teacher", description: "Access assigned classes, record attendance and enter assessments.", icon: BookOpen },
  { title: "Class Teacher", description: "Track class performance and stay close to the day-to-day academic workflow.", icon: GraduationCap },
  { title: "Finance Team", description: "Monitor fees, payments and school balances in a structured, transparent view.", icon: CircleDollarSign },
  { title: "Parent", description: "Stay informed about your child's school progress and key updates.", icon: Users },
  { title: "Student", description: "Review personal learning progress, schedules and communication where relevant.", icon: Star },
] as const;

const reliabilityItems = [
  "Role-based access",
  "Protected school data",
  "Controlled user permissions",
  "Secure authentication",
  "Organized school records",
  "Responsive web experience",
] as const;

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Modules", href: "#modules" },
  { label: "About", href: "#about-us" },
  { label: "Contact", href: "#contact" },
] as const;

const platformLinks = ["Students", "Teachers", "Attendance", "Assessments", "Fees", "Timetable", "Reports"] as const;
const showcaseTabs = ["Dashboard", "Students", "Attendance", "Assessments", "Finance", "Reports"] as const;
type ShowcaseTab = (typeof showcaseTabs)[number];

const showcaseDetails: Record<ShowcaseTab, { title: string; badge: string; image: string; summary: string }> = {
  Dashboard: { title: "School dashboard", badge: "Operational overview", image: "/landing/1.jpeg", summary: "Monitor attendance, fees, learner activity and school performance in one clear control center." },
  Students: { title: "Learner management", badge: "Student register", image: "/landing/2.jpeg", summary: "Track learner profiles, admissions, progression and academic activity from one structured register." },
  Attendance: { title: "Attendance tracking", badge: "Daily capture", image: "/landing/3.jpeg", summary: "Review attendance trends quickly and act at the moment when patterns need attention." },
  Assessments: { title: "Assessments & reports", badge: "Academic workflow", image: "/landing/4.jpeg", summary: "Capture assessments, review results and keep academic monitoring connected to the overall school plan." },
  Finance: { title: "Fees & finance", badge: "Financial visibility", image: "/landing/1.jpeg", summary: "Keep fee collection, balances and financial records simple, reliable and easy to review." },
  Reports: { title: "Analytics and reports", badge: "Insights", image: "/landing/2.jpeg", summary: "Use practical reports to understand what is working, what needs attention and where to improve next." },
};

const showcaseQuickStats = [
  { label: "Learners", value: "1,250" },
  { label: "Attendance", value: "94.8%" },
  { label: "Fees", value: "KSh 6.4M" },
] as const;

const fallbackReply = "SHANSCOTT SMS helps schools manage learners, teachers, attendance, assessments, fees, timetables, reports, and communication from one connected platform. If you need help with a specific school workflow, I can explain it or connect you to support.";

const buildAssistantReply = (question: string): string => {
  const text = question.toLowerCase();

  if (text.includes("what is shanscott") || text.includes("what is shanscott sms") || text.includes("what does shanscott do")) {
    return "SHANSCOTT SMS is a school management system designed for schools to manage learners, teachers, attendance, assessments, fees, timetables, reports and communication from one connected platform.";
  }

  if (text.includes("feature") || text.includes("module") || text.includes("what features") || text.includes("what can it do") || text.includes("capabilities")) {
    return "SHANSCOTT SMS includes student management, teacher management, attendance tracking, assessments and grading, fees and finance, timetable planning, reporting and analytics, and communication tools for schools and families.";
  }

  if (text.includes("teacher portal") || text.includes("teacher login") || text.includes("teacher access")) {
    return "The teacher portal gives teachers access to their assigned classes, attendance capture, assessments, lesson records and communication so they can work efficiently without leaving the school system.";
  }

  if (text.includes("student") || text.includes("learners") || text.includes("manage students") || text.includes("student management")) {
    return "Student management covers admissions, learner profiles, class allocation, academic history, progress tracking and school records in one organized register.";
  }

  if (text.includes("attendance") || text.includes("present") || text.includes("absent")) {
    return "Attendance is tracked by class, stream or teacher group so schools can record daily presence, spot patterns quickly and follow up with learners who need support.";
  }

  if (text.includes("timetable") || text.includes("schedule") || text.includes("class timetable")) {
    return "The timetable module helps schools plan teacher and class schedules, reduce clashes and keep daily learning organized and predictable.";
  }

  if (text.includes("assessment") || text.includes("grade") || text.includes("marks") || text.includes("results")) {
    return "Assessments and grading help schools enter marks, review learner performance, track academic progress and support CBC/CBE-aligned reporting workflows.";
  }

  if (text.includes("fee") || text.includes("fees") || text.includes("payment") || text.includes("finance")) {
    return "The fees and finance module helps schools track invoices, payments, balances, financial records and collections so administration stays clear and reliable.";
  }

  if (text.includes("parent") || text.includes("parents") || text.includes("guardian") || text.includes("guardians")) {
    return "Parents and guardians can stay informed through communication, school updates, attendance visibility and progress information where appropriate, improving transparency and engagement.";
  }

  if (text.includes("get started") || text.includes("start") || text.includes("setup") || text.includes("school setup")) {
    return "To get started, a school can configure its structure, add staff and learners, define classes and streams, then begin managing attendance, assessments, fees and reporting.";
  }

  if (text.includes("contact") || text.includes("support") || text.includes("help") || text.includes("assist")) {
    return "You can contact SHANSCOTT Support by phone on +254 718 757 621 or +254 116 113 375, or via WhatsApp on +254 718 757 621 for quick assistance.";
  }

  if (text.includes("school") || text.includes("management") || text.includes("admin")) {
    return "SHANSCOTT SMS is built to simplify school administration by centralizing learners, staff, attendance, academic records, fees and reporting in one easy-to-use system.";
  }

  if (text.includes("how") || text.includes("why") || text.includes("benefit") || text.includes("advantages")) {
    return "SHANSCOTT SMS reduces paperwork, improves communication, gives better visibility into school performance, and helps staff focus more on teaching and learner support.";
  }

  return fallbackReply;
};

async function askShanscottAssistant(question: string): Promise<string> {
  const endpoint = import.meta.env.VITE_AI_CHATBOT_ENDPOINT as string | undefined;

  if (endpoint) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      if (!response.ok) {
        throw new Error("AI endpoint unavailable");
      }

      const data = (await response.json()) as { answer?: string };
      if (typeof data.answer === "string" && data.answer.trim()) {
        return data.answer;
      }
    } catch {
      return buildAssistantReply(question);
    }
  }

  return buildAssistantReply(question);
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SHANSCOTT SMS | School Management System" },
      { name: "description", content: "SHANSCOTT School Management System helps schools manage learners, teachers, attendance, assessments, fees, timetables, reports and communication in one platform." },
      { property: "og:title", content: "SHANSCOTT SMS | School Management System" },
      { property: "og:description", content: "Manage learners, teachers, attendance, assessments, fees, timetables, reports and communication in one platform." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/landing/1.jpeg" },
      { name: "theme-color", content: "#0B5D3B" },
    ],
  }),
  component: Landing,
});

function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeModule, setActiveModule] = useState("School Administration");
  const [activeShowcase, setActiveShowcase] = useState<ShowcaseTab>("Dashboard");
  const [helpOpen, setHelpOpen] = useState(false);
  const [assistantOpen, setAssistantOpen] = useState(true);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [conversation, setConversation] = useState<Array<{ id: string; role: "assistant" | "user"; text: string }>>([
    { id: "assistant-intro", role: "assistant", text: "Hi! I can help with SHANSCOTT SMS features, school workflows, teacher and parent access, attendance, fees, assessments and support options." },
  ]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleAssistantPrompt = async (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) return;

    setConversation((previous) => [...previous, { id: `user-${Date.now()}`, role: "user", text: trimmed }]);
    setInput("");
    setIsTyping(true);

    try {
      const reply = await askShanscottAssistant(trimmed);
      setConversation((previous) => [...previous, { id: `assistant-${Date.now()}`, role: "assistant", text: reply }]);
    } catch {
      const fallbackAnswer = buildAssistantReply(trimmed);
      setConversation((previous) => [...previous, { id: `assistant-${Date.now()}`, role: "assistant", text: fallbackAnswer }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0b1f3a]">
      <header className={`sticky top-0 z-40 border-b transition-all duration-300 ${scrolled ? "border-slate-200/80 bg-white/80 shadow-sm backdrop-blur-xl" : "border-transparent bg-white/90 backdrop-blur"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2.5" onClick={closeMenu}>
            <img src="/shanscot-logo.png" alt="SHANSCOTT SMS" className="h-11 w-44 object-contain object-left" />
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-600 lg:flex" aria-label="Main navigation">
            <a href="#home" className="transition hover:text-[#0B5D3B]">Home</a>
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-[#0B5D3B]">{item.label}</a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link to="/auth" className="text-sm font-semibold text-slate-700 transition hover:text-[#0B5D3B]">Login</Link>
            <Link to="/auth" search={registerSearch} className="rounded-xl bg-[#0B5D3B] px-4 py-2.5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(11,93,59,0.18)] transition hover:bg-[#0A4F36]">Get Started</Link>
          </div>

          <button type="button" className="rounded-xl border border-slate-200 bg-white p-2 text-slate-700 lg:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((value) => !value)}>
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-sm lg:hidden">
            <div className="flex flex-col gap-4 text-sm font-semibold text-slate-700">
              <a href="#home" onClick={closeMenu}>Home</a>
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={closeMenu}>{item.label}</a>
              ))}
              <Link to="/auth" onClick={closeMenu} className="pt-2 text-[#0B5D3B]">Login</Link>
              <Link to="/auth" search={registerSearch} onClick={closeMenu} className="inline-flex w-fit rounded-xl bg-[#0B5D3B] px-4 py-2.5 text-white">Get Started</Link>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden bg-[linear-gradient(120deg,#F8FAFC_0%,#EEFDF3_45%,#F0F7FF_100%)] px-4 pb-20 pt-14 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
          <div className="absolute -right-24 top-6 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl" />
          <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-3.5 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#0B5D3B] shadow-sm">
                <Sparkles className="size-4" />
                Powerful • Practical • Connected
              </span>

              <h1 className="mt-6 max-w-[600px] text-4xl font-black tracking-[-0.06em] text-[#0b1f3a] sm:text-5xl lg:text-[4rem] lg:leading-[0.95]">
                Manage Your School <span className="text-[#16A34A]">Smarter</span>, Faster & <span className="text-[#16A34A]">Better</span>.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Everything your school needs to manage learners, teachers, classes, attendance, assessments, fees, timetables and communication — all in one platform.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/auth" search={registerSearch} className="inline-flex items-center gap-2 rounded-xl bg-[#16A34A] px-6 py-3.5 text-sm font-bold text-white shadow-[0_14px_30px_rgba(22,163,74,0.26)] transition hover:-translate-y-0.5 hover:bg-[#11803e]">
                  Get Started <ArrowRight className="size-4" />
                </Link>
                <a href="#features" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-[#0b1f3a] transition hover:border-emerald-200 hover:text-[#0B5D3B]">
                  Explore Features
                </a>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <a href="https://wa.me/254718757621" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B5D3B]">
                  <MessageCircle className="size-4" />
                  Talk to Support
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 top-12 rounded-2xl border border-emerald-200 bg-white/90 px-3 py-2 text-xs font-bold text-[#0B5D3B] shadow-[0_12px_30px_rgba(15,23,42,0.08)]">Attendance</div>
              <div className="absolute -right-8 bottom-14 rounded-2xl border border-slate-200 bg-white/90 px-3 py-2 text-xs font-bold text-[#0B5D3B] shadow-[0_12px_30px_rgba(15,23,42,0.08)]">Fees</div>
              <div className="absolute right-10 top-0 rounded-2xl border border-slate-200 bg-white/90 px-3 py-2 text-xs font-bold text-[#0B5D3B] shadow-[0_12px_30px_rgba(15,23,42,0.08)]">98%</div>
              <div className="absolute bottom-0 left-8 rounded-2xl border border-slate-200 bg-white/90 px-3 py-2 text-xs font-bold text-[#0B5D3B] shadow-[0_12px_30px_rgba(15,23,42,0.08)]">Reports</div>
              <DashboardMockup />
            </div>
          </div>

          <div className="relative mx-auto mt-16 max-w-5xl rounded-[1.6rem] border border-slate-200 bg-white/85 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.05)] backdrop-blur-sm">
            <div className="grid gap-4 sm:grid-cols-3">
              {[{ icon: Users, title: "Student Management" }, { icon: GraduationCap, title: "Teacher Management" }, { icon: BarChart3, title: "Attendance Tracking" }].map(({ icon: Icon, title }) => (
                <div key={title} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <span className="grid size-11 place-items-center rounded-xl bg-emerald-100 text-[#0B5D3B]"><Icon className="size-5" /></span>
                  <span className="text-sm font-bold text-[#0b1f3a]">{title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionIntro eyebrow="Everything You Need" title={<><span>Everything you need to run</span> your school</>} body="From admissions to reporting, SHANSCOTT brings essential school operations into one connected platform." />
            <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {features.map(([Icon, title, description, tint]) => (
                <article key={title} className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_18px_38px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_22px_48px_rgba(11,93,59,0.08)]">
                  <span className={`mb-5 grid size-12 place-items-center rounded-2xl ${tint}`}><Icon className="size-5" /></span>
                  <h3 className="text-xl font-black text-[#0b1f3a]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0B5D3B]">Learn more <ChevronRight className="size-4" /></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about-us" className="bg-[#EFFCF4] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-emerald-100 bg-white p-4 shadow-[0_24px_55px_rgba(15,23,42,0.05)]">
              <img src="/landing/2.jpeg" alt="School leadership reviewing reports and operations" className="h-[420px] w-full rounded-[1.5rem] object-cover" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0B5D3B]">Why SHANSCOTT</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-[#0b1f3a]">A more connected day for every person in your school.</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">School teams need clarity, fast access and less paperwork. SHANSCOTT gives your school operations a cleaner rhythm from admission to reporting.</p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm font-semibold text-[#0b1f3a]">
                    <span className="mt-0.5 grid size-5 place-items-center rounded-full bg-[#16A34A] text-white"><Check className="size-3.5" /></span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="modules" className="relative overflow-hidden bg-[#0b1f3a] px-4 py-24 text-white sm:px-6 lg:px-8 lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.18),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.14),transparent_30%)]" />
          <div className="relative mx-auto max-w-7xl">
            <SectionIntro eyebrow="Platform Modules" title={<><span className="text-[#7ae6a8]">One platform.</span> Every workflow.</>} body="From admissions to communication, SHANSCOTT brings the everyday work of school operations into one connected system." align="center" inverted />
            <div className="mt-14 grid gap-5 lg:grid-cols-[0.88fr_1.12fr]">
              <div className="space-y-3">
                {modules.map((module) => {
                  const isActive = activeModule === module.title;

                  return (
                    <button
                      key={module.title}
                      type="button"
                      onClick={() => setActiveModule(module.title)}
                      className={`flex w-full items-center justify-between rounded-[1.2rem] border px-4 py-4 text-left transition-all duration-200 ${
                        isActive
                          ? "border-emerald-300 bg-gradient-to-r from-emerald-500/15 via-white/8 to-sky-400/10 text-white shadow-[0_12px_30px_rgba(16,185,129,0.16)]"
                          : "border-white/10 bg-white/5 text-slate-200 hover:border-emerald-300/70 hover:bg-white/8"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`grid size-8 place-items-center rounded-full text-[10px] font-black ${isActive ? "bg-emerald-400/20 text-emerald-200" : "bg-white/10 text-slate-300"}`}>
                          {module.title.split(" ").slice(0, 2).map((word) => word[0]).join("").slice(0, 2).toUpperCase() || "SM"}
                        </span>
                        <span className="text-base font-semibold">{module.title}</span>
                      </div>
                      <ChevronRight className={`size-4 transition ${isActive ? "text-emerald-300" : "text-slate-300"}`} />
                    </button>
                  );
                })}
              </div>

              <div className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/5 p-4 shadow-[0_24px_60px_rgba(2,6,23,0.25)] backdrop-blur-sm">
                <div className="rounded-[1.35rem] bg-[#F8FAFC] p-4 text-[#0b1f3a] sm:p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    </div>
                    <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#0B5D3B]">{activeModule}</span>
                  </div>

                  <div className="grid gap-5 md:grid-cols-[0.82fr_1.18fr]">
                    <img
                      src={modules.find((module) => module.title === activeModule)?.image ?? "/landing/1.jpeg"}
                      alt={`${activeModule} overview`}
                      className="h-44 w-full rounded-[1.2rem] object-cover shadow-[0_12px_28px_rgba(15,23,42,0.12)] sm:h-52"
                    />
                    <div>
                      <h3 className="text-2xl font-black tracking-[-0.04em] text-[#0b1f3a] sm:text-[2rem]">{activeModule}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {modules.find((module) => module.title === activeModule)?.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {modules.find((module) => module.title === activeModule)?.features.map((feature) => (
                          <span key={feature} className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-700 ring-1 ring-slate-200">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="bg-[#F8FAFC] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionIntro eyebrow="How It Works" title={<><span>A practical school system</span> that gets to work fast</>} body="From setup to daily operations, SHANSCOTT makes it easy to keep school administration organized and consistent." />
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {workingSteps.map(([number, title, description]) => (
                <div key={number} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_18px_38px_rgba(15,23,42,0.04)]">
                  <span className="text-xs font-black uppercase tracking-[0.18em] text-[#0B5D3B]">{number}</span>
                  <h3 className="mt-4 text-2xl font-black text-[#0b1f3a]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionIntro eyebrow="One Platform. Every Role." title={<><span>Designed for every stakeholder in</span> the school community</>} body="From administrators to families, each role has a focused view of the work that matters most." />
            <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {roleCards.map(({ title, description, icon: Icon }) => (
                <article key={title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_18px_38px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:border-emerald-200">
                  <span className="inline-flex rounded-xl bg-emerald-50 p-3 text-[#0B5D3B]"><Icon className="size-5" /></span>
                  <h3 className="mt-5 text-2xl font-black text-[#0b1f3a]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F8FAFC] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionIntro eyebrow="Product Showcase" title={<><span>See the platform in</span> real school operations</>} body="From the dashboard to mobile views, each screen is built to keep school management visible, clear and practical." />
            <div className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_26px_60px_rgba(15,23,42,0.06)] sm:p-6">
              <div className="mb-6 flex flex-wrap gap-2">
                {showcaseTabs.map((tab) => (
                  <button key={tab} type="button" onClick={() => setActiveShowcase(tab)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${activeShowcase === tab ? "bg-[#0B5D3B] text-white" : "bg-slate-100 text-slate-700 hover:text-[#0B5D3B]"}`}>
                    {tab}
                  </button>
                ))}
              </div>
              <div className="overflow-hidden rounded-[1.6rem] border border-slate-200 bg-[#F8FAFC] p-4 md:p-6">
                <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
                  <div className="rounded-[1.4rem] border border-slate-200 bg-white p-5">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-[0.14em] text-[#0B5D3B]">{showcaseDetails[activeShowcase].badge}</span>
                      <span className="rounded-full bg-emerald-100 px-2 py-1 text-[9px] font-black uppercase tracking-[0.12em] text-[#0B5D3B]">Live view</span>
                    </div>
                    <h3 className="text-3xl font-black tracking-[-0.05em] text-[#0b1f3a]">{showcaseDetails[activeShowcase].title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{showcaseDetails[activeShowcase].summary}</p>
                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                      {showcaseQuickStats.map((stat) => (
                        <div key={stat.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                          <p className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-500">{stat.label}</p>
                          <strong className="mt-2 block text-xl font-black text-[#0b1f3a]">{stat.value}</strong>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[1.4rem] border border-slate-200 bg-white p-3">
                    <div className="mb-3 flex items-center gap-2 rounded-full bg-slate-50 px-3 py-2 shadow-sm">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    </div>
                    <img src={showcaseDetails[activeShowcase].image} alt={`${activeShowcase} view of SHANSCOTT SMS`} className="h-[420px] w-full rounded-[1.15rem] object-cover object-top" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#EFFCF4] px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0B5D3B]">Security / Reliability</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-[#0b1f3a]">Built for secure school management</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">SHANSCOTT SMS gives school teams the structure, permissions and clarity they need to operate confidently every day.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {reliabilityItems.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_10px_22px_rgba(15,23,42,0.03)]">
                    <span className="grid size-10 place-items-center rounded-xl bg-emerald-50 text-[#0B5D3B]"><ShieldCheck className="size-4" /></span>
                    <span className="text-sm font-semibold text-[#0b1f3a]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_28px_70px_rgba(15,23,42,0.06)]">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-[1.4rem] bg-[#ECFDF5] p-5">
                  <span className="grid size-12 place-items-center rounded-xl bg-white text-[#0B5D3B]"><ShieldCheck className="size-5" /></span>
                  <h3 className="mt-4 text-xl font-black text-[#0b1f3a]">Role-based access</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">Permissions stay aligned with staff roles and school operations.</p>
                </div>
                <div className="rounded-[1.4rem] bg-[#EFF6FF] p-5">
                  <span className="grid size-12 place-items-center rounded-xl bg-white text-[#12335B]"><FileText className="size-5" /></span>
                  <h3 className="mt-4 text-xl font-black text-[#0b1f3a]">Organized records</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">Learner, staff and finance information stays easy to manage and review.</p>
                </div>
                <div className="rounded-[1.4rem] bg-[#FFF7ED] p-5 sm:col-span-2">
                  <span className="grid size-12 place-items-center rounded-xl bg-white text-[#F97316]"><MonitorSmartphone className="size-5" /></span>
                  <h3 className="mt-4 text-xl font-black text-[#0b1f3a]">Responsive web experience</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">Work from the office or on the go without losing clarity across core tasks and reports.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl rounded-[2rem] bg-[linear-gradient(135deg,#0B5D3B_0%,#16A34A_42%,#0b1f3a_100%)] px-6 py-10 text-white shadow-[0_28px_70px_rgba(11,93,59,0.22)] sm:px-8 lg:px-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-100">Ready to grow</p>
                <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white">Ready to Manage Your School Better?</h2>
                <p className="mt-4 text-base leading-8 text-emerald-50/90">Talk to the SHANSCOTT team and learn how the School Management System can fit your school's workflow.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href="tel:+254718757621" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-[#0B5D3B]"><PhoneCall className="size-4" />Contact SHANSCOTT</a>
                <a href="https://wa.me/254718757621?text=Hello%20SHANSCOTT%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20School%20Management%20System." target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/5 px-5 py-3.5 text-sm font-bold text-white"><MessageCircle className="size-4" />WhatsApp</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0b1f3a] px-4 pb-10 pt-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 pb-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src="/shanscot-logo.png" alt="SHANSCOTT SMS" className="h-12 w-52 object-contain object-left" />
            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-300">Smart school management for modern schools.</p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-slate-200">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {quickLinks.map((item) => (
                <li key={item.label}><a href={item.href} className="transition hover:text-white">{item.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-slate-200">Platform</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {platformLinks.map((item) => (<li key={item}>{item}</li>))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-slate-200">Support</h3>
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <a href="https://shanscottech.website" target="_blank" rel="noreferrer" className="block transition hover:text-white">Visit shanscottech.website</a>
              <a href="https://wa.me/254718757621" target="_blank" rel="noreferrer" className="block transition hover:text-white">WhatsApp</a>
              <a href="tel:+254718757621" className="block transition hover:text-white">+254 718 757 621</a>
              <a href="tel:+254116113375" className="block transition hover:text-white">+254 116 113 375</a>
              <button type="button" onClick={() => setHelpOpen(true)} className="block text-left transition hover:text-white">Help Center</button>
              <button type="button" onClick={() => setHelpOpen(true)} className="block text-left transition hover:text-white">AI Assistant</button>
            </div>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 border-t border-white/10 pt-5 text-xs text-slate-400 sm:flex-row">
          <span>© 2026 SHANSCOTT TECHNOLOGIES. All rights reserved.</span>
          <span>Smart school management for modern schools.</span>
        </div>
      </footer>

      {/* Floating Chat Widget - Fixed Position Outside Page Flow */}
      <button type="button" onClick={() => setHelpOpen(true)} className="fixed bottom-6 right-6 z-40 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[#16A34A] to-[#11803e] p-4 text-white shadow-[0_8px_24px_rgba(22,163,74,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(22,163,74,0.5)] lg:bottom-8 lg:right-8" title="Open help center">
        <HelpCircle className="size-6" />
        {!helpOpen && <span className="absolute top-0 right-0 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-[8px] font-black text-white">!</span>}
      </button>

      {helpOpen && (
        <div className="fixed bottom-3 right-3 z-50 w-[calc(100vw-1.25rem)] max-w-[360px] animate-[fadeIn_0.2s_ease-out] sm:bottom-5 sm:right-5">
          <div className="overflow-hidden rounded-[1.6rem] border border-slate-200/80 bg-white shadow-[0_28px_70px_rgba(15,23,42,0.25)] ring-1 ring-slate-100">
            <div className="flex items-center justify-between bg-gradient-to-r from-[#0B5D3B] via-[#0f7145] to-[#0d8a52] px-4 py-3 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur-sm">
                  <MessageCircle className="size-4" />
                </div>
                <div>
                  <p className="text-sm font-black">SHANSCOTT Help</p>
                  <p className="text-[10px] font-medium text-emerald-100">We’re online and ready to help</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button type="button" onClick={() => setAssistantOpen((value) => !value)} className="rounded-full border border-white/20 bg-white/10 p-2 text-white/90 transition hover:bg-white/15" title={assistantOpen ? "Collapse assistant" : "Expand assistant"}>{assistantOpen ? <ChevronRight className="size-4" /> : <MessageCircle className="size-4" />}</button>
                <button type="button" onClick={() => setHelpOpen(false)} className="rounded-full border border-white/20 bg-white/10 p-2 text-white/90 transition hover:bg-white/15" title="Close help center"><X className="size-4" /></button>
              </div>
            </div>

            <div className="max-h-[72vh] overflow-y-auto bg-gradient-to-b from-white to-slate-50 p-3.5 sm:max-h-[66vh] sm:p-4">
              <div className="rounded-[1.2rem] border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-emerald-50/80 p-3.5 shadow-[0_8px_18px_rgba(22,163,74,0.08)]">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#0B5D3B]">WhatsApp</p>
                    <p className="mt-1 text-sm font-semibold text-slate-700">Chat with support instantly</p>
                  </div>
                  <div className="rounded-full bg-emerald-500/10 p-2 text-[#0B5D3B]">
                    <MessageCircle className="size-4" />
                  </div>
                </div>
                <a href="https://wa.me/254718757621?text=Hello%20SHANSCOTT%20Support%2C%20I%20need%20help%20with%20the%20School%20Management%20System." target="_blank" rel="noreferrer" className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#16A34A] px-4 py-2.5 text-sm font-bold text-white shadow-[0_10px_20px_rgba(22,163,74,0.2)] transition hover:bg-[#11803e]">Message on WhatsApp</a>
              </div>

              <div className="rounded-[1.2rem] border border-slate-200 bg-white p-3.5 shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-600">Phone</p>
                    <p className="mt-1 text-sm font-semibold text-slate-700">Call our support desk</p>
                  </div>
                  <div className="rounded-full bg-slate-100 p-2 text-slate-600">
                    <PhoneCall className="size-4" />
                  </div>
                </div>
                <div className="mt-3 space-y-2">
                  <a href="tel:+254718757621" className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-[#0B5D3B] transition hover:border-emerald-300 hover:bg-emerald-50">
                    <PhoneCall className="size-4" />
                    +254 718 757 621
                  </a>
                  <a href="tel:+254116113375" className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-[#0B5D3B] transition hover:border-emerald-300 hover:bg-emerald-50">
                    <PhoneCall className="size-4" />
                    +254 116 113 375
                  </a>
                </div>
              </div>

              {assistantOpen && (
                <div className="overflow-hidden rounded-[1.35rem] border border-slate-200 bg-white shadow-[0_14px_30px_rgba(15,23,42,0.08)]">
                  <div className="flex items-center gap-3 border-b border-slate-200 bg-gradient-to-r from-slate-50 to-emerald-50 px-3.5 py-3">
                    <span className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-[#0B5D3B] to-[#0d7448] text-base font-black text-white">🤖</span>
                    <div>
                      <p className="text-sm font-black text-[#0b1f3a]">SHANSCOTT Assistant</p>
                      <p className="text-[10px] font-medium text-slate-500">School guidance assistant</p>
                    </div>
                  </div>

                  <div className="flex max-h-[220px] flex-col gap-3 overflow-y-auto bg-gradient-to-b from-white via-white to-slate-50 p-3.5 sm:max-h-[250px]">
                    {conversation.map((message) => (
                      <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                        <div className={`max-w-[85%] rounded-[1rem] px-3.5 py-2.5 text-sm leading-6 ${message.role === "user" ? "bg-gradient-to-br from-[#0B5D3B] to-[#0d7448] text-white shadow-[0_8px_16px_rgba(11,93,59,0.18)]" : "border border-slate-200 bg-white text-slate-700 shadow-[0_4px_12px_rgba(15,23,42,0.04)]"}`}>
                          {message.text}
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="flex items-center gap-1.5 rounded-[1rem] border border-slate-200 bg-white px-3.5 py-2.5 shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
                          <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#16A34A] [animation-delay:0ms]" />
                          <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#16A34A] [animation-delay:150ms]" />
                          <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#16A34A] [animation-delay:300ms]" />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-slate-200 bg-gradient-to-b from-white to-slate-50 p-3.5">
                    <div className="mb-3 flex flex-wrap gap-2">
                      {quickQuestions.slice(0, 6).map((question) => (
                        <button key={question} type="button" onClick={() => void handleAssistantPrompt(question)} className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[9px] font-semibold text-slate-600 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-[#0B5D3B]">{question}</button>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <input value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); void handleAssistantPrompt(input); }}} placeholder="Ask me anything..." className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:border-emerald-300 focus:bg-white focus:outline-none" />
                      <button type="button" onClick={() => void handleAssistantPrompt(input)} className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-[#0B5D3B] to-[#0d7448] p-2.5 text-white shadow-[0_8px_16px_rgba(11,93,59,0.18)] transition hover:-translate-y-0.5" title="Send"><Send className="size-4" /></button>
                    </div>
                    <a href="https://wa.me/254718757621?text=Hello%20SHANSCOTT%20Support%2C%20I%20need%20help%20with%20the%20School%20Management%20System." target="_blank" rel="noreferrer" className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-300 bg-emerald-50 px-3 py-2 text-[12px] font-bold text-[#0B5D3B]">WhatsApp</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SectionIntro({ eyebrow, title, body, align = "center", inverted = false }: { eyebrow: string; title: ReactNode; body: string; align?: "center" | "left"; inverted?: boolean; }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl text-left"}>
      <p className={`text-xs font-black tracking-[0.18em] ${inverted ? "text-[#7ae6a8]" : "text-[#16A34A]"}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-black leading-[1.08] tracking-[-0.04em] sm:text-4xl lg:text-[2.75rem] ${inverted ? "text-white" : "text-[#0b1f3a]"}`}>{title}</h2>
      <div className={`mt-5 h-1 w-14 ${inverted ? "bg-[#7ae6a8]" : "bg-[#16A34A]"} ${align === "center" ? "mx-auto" : ""}`} />
      <p className={`mt-5 text-base leading-7 ${inverted ? "text-slate-300" : "text-slate-600"}`}>{body}</p>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div id="demo" className="relative mx-auto w-full max-w-[690px] pb-12 pl-0 sm:pl-6">
      <div className="overflow-hidden rounded-[1.8rem] border-[6px] border-[#0b1f3a] bg-white shadow-[0_32px_80px_rgba(16,38,83,0.2)] rotate-[-2deg] transform-gpu">
        <div className="flex h-8 items-center gap-1.5 bg-[#0b1f3a] px-3">
          <i className="size-2 rounded-full bg-red-300" />
          <i className="size-2 rounded-full bg-yellow-300" />
          <i className="size-2 rounded-full bg-green-300" />
        </div>
        <div className="flex min-h-[365px] bg-[#f5f8fc] text-[9px] sm:min-h-[375px]">
          <aside className="hidden w-36 shrink-0 bg-[#0b1f3a] p-4 text-white/60 sm:block">
            <strong className="mb-8 flex items-start gap-1.5 text-[9px] leading-3 text-white">
              <GraduationCap className="size-4 text-[#8bd35b]" />
              <span>SHANSCOTT<br />SMS</span>
            </strong>
            {['Overview', 'Learners', 'Attendance', 'Assessments', 'Fees', 'Finance'].map((item, index) => (
              <div key={item} className={`mb-2 flex items-center gap-2 rounded-lg px-2.5 py-2.5 ${index === 0 ? 'bg-white/10 text-white' : ''}`}>
                <span className="size-1.5 rounded-full bg-[#8bd35b]" />
                {item}
              </div>
            ))}
          </aside>
          <div className="min-w-0 flex-1 p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[8px] font-bold uppercase tracking-widest text-slate-400">School overview</p>
                <h3 className="mt-1 text-base font-black text-[#0b1f3a] sm:text-lg">Good morning, Grace.</h3>
              </div>
              <div className="flex gap-2">
                <Search className="size-4 text-slate-400" />
                <MessageCircle className="size-4 text-slate-400" />
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {[['Students', '1,250', 'text-[#35a853]'], ['Teachers', '75', 'text-[#358bc5]'], ['Classes', '32', 'text-[#e59a28]'], ['Attendance', '94.8%', 'text-[#8b61c7]']].map(([label, value, color]) => (
                <div key={label} className="rounded-lg bg-white p-2.5 shadow-sm">
                  <span className="block text-[8px] text-slate-400">{label}</span>
                  <strong className={`mt-1 block text-sm ${color}`}>{value}</strong>
                  <span className="mt-1 block h-1 w-3/4 rounded bg-slate-100" />
                </div>
              ))}
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_0.8fr]">
              <div className="rounded-lg bg-white p-3 shadow-sm">
                <div className="flex justify-between font-bold text-[#0b1f3a]">
                  <span>Fee collection</span>
                  <span className="text-[8px] text-[#35a853]">This term</span>
                </div>
                <div className="mt-5 flex h-24 items-end justify-around gap-2 border-b border-slate-100">
                  {[35, 55, 45, 72, 62, 88, 76].map((height, idx) => (
                    <i key={idx} className={`w-3.5 rounded-t ${idx === 5 ? 'bg-[#35a853]' : 'bg-[#b8dfc5]'}`} style={{ height: `${height}%` }} />
                  ))}
                </div>
              </div>
              <div className="rounded-lg bg-white p-3 shadow-sm">
                <span className="font-bold text-[#0b1f3a]">Attendance</span>
                <div className="mt-3 flex items-center gap-3">
                  <div className="grid size-16 place-items-center rounded-full" style={{ background: "conic-gradient(#35a853 0 94.8%, #e5edf0 94.8%)" }}>
                    <span className="grid size-11 place-items-center rounded-full bg-white text-[11px] font-black text-[#0b1f3a]">94.8%</span>
                  </div>
                  <span className="text-[8px] leading-4 text-slate-500"><b className="text-[#35a853]">Present</b><br />5% absent</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-2 right-0 w-44 overflow-hidden rounded-2xl border-4 border-[#0b1f3a] bg-white shadow-[0_22px_40px_rgba(16,38,83,0.18)] sm:-right-5 sm:w-48">
        <div className="flex items-center justify-between bg-[#35a853] px-3 py-2.5 text-[8px] font-bold uppercase tracking-wider text-white">Parent portal<Smartphone className="size-3" /></div>
        <div className="p-3.5">
          <div className="flex items-center gap-2">
            <span className="grid size-7 place-items-center rounded-full bg-[#dcecf7] text-[8px] font-bold">GN</span>
            <span><b className="block text-[9px] text-[#0b1f3a]">Grace Njeri</b><small className="text-[7px] text-slate-400">Parent view</small></span>
          </div>
          <div className="mt-3 bg-[#effaf2] p-2"><span className="text-[7px] text-slate-500">Today's attendance</span><b className="mt-1 block text-sm text-[#35a853]">Present</b></div>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <span className="bg-slate-50 p-2 text-[7px] text-slate-500">Fees<br /><b className="text-[#0b1f3a]">Up to date</b></span>
            <span className="bg-slate-50 p-2 text-[7px] text-slate-500">Grade<br /><b className="text-[#0b1f3a]">Excellent</b></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
