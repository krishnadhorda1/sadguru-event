import { useState, type FormEvent } from "react";
import { ArrowRight, Mail, MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import { SiInstagram } from "@icons-pack/react-simple-icons";
import { eventTypes, site } from "@/data/site";
import { Reveal } from "./Reveal";
import { motion } from "motion/react";

const formContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const fieldVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

function FloatingField({
  label,
  type = "text",
  value,
  onChange,
  options,
  required,
  as = "input",
  ...props
}: any) {
  const [focused, setFocused] = useState(false);
  const active = focused || !!value;
  // HTML Date inputs always show placeholder-like text when empty, so label must stay up.
  const isDate = type === "date";
  const labelUp = active || isDate;

  return (
    <motion.div variants={fieldVariants} className="relative group w-full">
      <label
        className={`absolute left-0 pointer-events-none transition-all duration-400 z-10 ${
          labelUp
            ? "-top-1 text-[0.65rem] tracking-[0.2em] uppercase text-[#C9A24D]"
            : "top-4 text-sm lg:text-base text-[#F3ECDD]/40"
        }`}
      >
        {label} {required && "*"}
      </label>

      {as === "select" ? (
        <select
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`w-full bg-transparent border-b border-[#F3ECDD]/10 outline-none pt-5 pb-2 text-[#F3ECDD] text-sm lg:text-base transition-colors duration-300 appearance-none cursor-pointer ${
            value ? "" : "text-transparent"
          }`}
          {...props}
        >
          <option value="" disabled className="bg-[#171310] hidden"></option>
          {options.map((opt: string) => (
            <option key={opt} value={opt} className="bg-[#171310] text-[#F3ECDD]">
              {opt}
            </option>
          ))}
        </select>
      ) : as === "textarea" ? (
        <textarea
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-transparent border-b border-[#F3ECDD]/10 outline-none pt-5 pb-2 text-[#F3ECDD] text-sm lg:text-base transition-colors duration-300 resize-none relative z-20"
          {...props}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`w-full bg-transparent border-b border-[#F3ECDD]/10 outline-none pt-5 pb-2 text-[#F3ECDD] text-sm lg:text-base transition-colors duration-300 relative z-20 ${
            isDate && !value && !focused ? "text-transparent" : ""
          }`}
          {...props}
        />
      )}

      {/* Animated Golden Border */}
      <span
        className={`absolute bottom-0 left-0 h-[1px] bg-[#C9A24D] transition-all duration-500 ease-out origin-left z-30 ${
          focused ? "w-full" : "w-0 group-hover:w-full group-hover:bg-[#C9A24D]/30"
        }`}
      />
    </motion.div>
  );
}

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    eventDate: "",
    city: "",
    guests: "",
    about: "",
  });

  const set = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm(f => ({ ...f, [key]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      `Namaste, I'm ${form.name || "—"}.`,
      `I'd like to talk about an event.`,
      ``,
      `Event type: ${form.eventType || "—"}`,
      `Event date: ${form.eventDate || "—"}`,
      `City / Venue: ${form.city || "—"}`,
      `Estimated guests: ${form.guests || "—"}`,
      `Phone: ${form.phone || "—"}`,
      `Email: ${form.email || "—"}`,
      ``,
      `About the event:`,
      form.about || "—",
    ];
    const url = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const channels = [
    {
      label: "Phone",
      value: site.phoneDisplay,
      href: `tel:+${site.whatsappNumber}`,
      icon: <Phone size={18} strokeWidth={1.5} />,
      testid: "contact-phone-link",
    },
    {
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
      icon: <Mail size={18} strokeWidth={1.5} />,
      testid: "contact-email-link",
    },
    {
      label: "Instagram",
      value: site.instagramHandle,
      href: site.instagramUrl,
      icon: <SiInstagram size={16} />,
      testid: "contact-instagram-link",
    },
  ];

  return (
    <section
      id="contact"
      className="relative bg-[#0A0806] px-6 lg:px-12 py-28 lg:py-40"
      data-testid="contact-section"
    >
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,rgba(61,18,32,0.35)_0%,rgba(10,8,6,0)_55%)] pointer-events-none" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <Reveal>
            <span className="block text-[0.62rem] tracking-[0.4em] text-[#C9A24D] uppercase mb-6">
              Contact us
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-[#F3ECDD] text-4xl sm:text-5xl lg:text-7xl leading-[1.02] tracking-tight">
              Let's talk about{" "}
              <em className="italic text-[#E6C073]">your event.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-6 text-[#B5A796] text-base lg:text-lg max-w-md">
              Tell us what you're imagining. We'll take it from there.
            </p>
          </Reveal>

          <div className="mt-16 space-y-2">
            {channels.map((c, i) => (
              <Reveal key={c.label} delay={0.2 + i * 0.1}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  data-testid={c.testid}
                  className="group flex items-center gap-6 py-5 border-b border-[#F3ECDD]/10 transition-colors duration-500 hover:border-[#C9A24D]/40"
                >
                  <span className="text-[#C9A24D] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                    {c.icon}
                  </span>
                  <span className="w-24 text-[0.6rem] tracking-[0.3em] text-[#B5A796] uppercase shrink-0 transition-colors duration-500 group-hover:text-[#E6C073]">
                    {c.label}
                  </span>
                  <span className="flex-1 text-[#F3ECDD]/80 text-sm lg:text-base font-light transition-colors duration-500 group-hover:text-[#F3ECDD]">
                    {c.value}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-[#C9A24D] opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0"
                  />
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="mt-8 text-xs text-[#B5A796] tracking-[0.15em] uppercase">
              {site.location}
            </p>
          </Reveal>
        </div>

        <motion.form
          onSubmit={submit}
          variants={formContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15% 0px" }}
          className="space-y-8 lg:pt-24"
          data-testid="contact-form"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <FloatingField label="Name" required value={form.name} onChange={set("name")} />
            <FloatingField
              label="Phone Number"
              required
              type="tel"
              value={form.phone}
              onChange={set("phone")}
            />
          </div>
          <FloatingField label="Email" type="email" value={form.email} onChange={set("email")} />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <FloatingField
              as="select"
              label="Event Type"
              required
              options={eventTypes}
              value={form.eventType}
              onChange={set("eventType")}
            />
            <FloatingField
              label="Event Date"
              type="date"
              value={form.eventDate}
              onChange={set("eventDate")}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <FloatingField label="City / Venue" value={form.city} onChange={set("city")} />
            <FloatingField
              label="Estimated Guest Count"
              inputMode="numeric"
              value={form.guests}
              onChange={set("guests")}
            />
          </div>
          <FloatingField
            as="textarea"
            label="Tell us about your event"
            rows={4}
            value={form.about}
            onChange={set("about")}
          />
          
          <motion.div variants={fieldVariants} className="pt-4">
            <button
              type="submit"
              data-testid="contact-form-submit-button"
              className="group inline-flex items-center gap-3 rounded-full bg-[#C9A24D] px-8 py-4 text-[0.68rem] tracking-[0.28em] text-[#0A0806] transition-[background-color,transform] duration-500 hover:bg-[#E6C073] hover:scale-[1.03]"
            >
              START A CONVERSATION
              <ArrowRight
                size={15}
                className="transition-transform duration-500 group-hover:translate-x-1.5"
              />
            </button>
            <p className="mt-4 text-xs text-[#B5A796]/70">
              This opens WhatsApp with your details pre-written. Nothing is
              stored on our servers.
            </p>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}
