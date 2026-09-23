import { useState, type FormEvent } from "react";
import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";
import { SiInstagram } from "@icons-pack/react-simple-icons";
import { eventTypes, site } from "@/data/site";
import { Reveal } from "./Reveal";

const inputClass =
  "w-full bg-transparent border-b border-[#F3ECDD]/20 focus:border-[#C9A24D] outline-none py-3 text-[#F3ECDD] placeholder:text-[#F3ECDD]/30 text-sm lg:text-base transition-colors duration-500";

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
    setForm((f) => ({ ...f, [key]: e.target.value }));

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
      label: "WhatsApp",
      value: site.phoneDisplay,
      href: `https://wa.me/${site.whatsappNumber}`,
      icon: <MessageCircle size={18} strokeWidth={1.5} />,
      testid: "contact-whatsapp-link",
    },
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
    <section id="contact" className="relative bg-[#171310] px-6 lg:px-12 py-28 lg:py-40" data-testid="contact-section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <Reveal>
            <span className="block text-[0.62rem] tracking-[0.4em] text-[#C9A24D] uppercase mb-6">
              Contact us
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-[#F3ECDD] text-4xl sm:text-5xl lg:text-7xl leading-[1.02] tracking-tight">
              Let's talk about <em className="italic text-[#E6C073]">your event.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-6 text-[#B5A796] text-base lg:text-lg max-w-md">
              Tell us what you're imagining. We'll take it from there.
            </p>
          </Reveal>

          <div className="mt-14 space-y-1">
            {channels.map((c) => (
              <Reveal key={c.label} delay={0.05}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  data-testid={c.testid}
                  className="group flex items-center gap-5 border-b border-[#F3ECDD]/10 py-5"
                >
                  <span className="text-[#C9A24D]">{c.icon}</span>
                  <span className="w-24 text-[0.6rem] tracking-[0.3em] text-[#B5A796] uppercase shrink-0">
                    {c.label}
                  </span>
                  <span className="text-[#F3ECDD]/85 text-sm lg:text-base transition-colors duration-300 group-hover:text-[#E6C073]">
                    {c.value}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="mt-8 text-xs text-[#B5A796] tracking-[0.15em] uppercase">{site.location}</p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form onSubmit={submit} className="space-y-8 lg:pt-24" data-testid="contact-form">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <input
                required
                value={form.name}
                onChange={set("name")}
                placeholder="Name *"
                className={inputClass}
                data-testid="contact-name-input"
                aria-label="Name"
              />
              <input
                required
                value={form.phone}
                onChange={set("phone")}
                placeholder="Phone Number *"
                type="tel"
                className={inputClass}
                data-testid="contact-phone-input"
                aria-label="Phone number"
              />
            </div>
            <input
              value={form.email}
              onChange={set("email")}
              placeholder="Email"
              type="email"
              className={inputClass}
              data-testid="contact-email-input"
              aria-label="Email"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <select
                required
                value={form.eventType}
                onChange={set("eventType")}
                className={`${inputClass} ${form.eventType ? "" : "text-[#F3ECDD]/30"}`}
                data-testid="contact-event-type-select"
                aria-label="Event type"
              >
                <option value="" disabled className="bg-[#171310]">
                  Event Type *
                </option>
                {eventTypes.map((t) => (
                  <option key={t} value={t} className="bg-[#171310] text-[#F3ECDD]">
                    {t}
                  </option>
                ))}
              </select>
              <input
                value={form.eventDate}
                onChange={set("eventDate")}
                type="date"
                className={inputClass}
                data-testid="contact-event-date-input"
                aria-label="Event date"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <input
                value={form.city}
                onChange={set("city")}
                placeholder="City / Venue"
                className={inputClass}
                data-testid="contact-city-input"
                aria-label="City or venue"
              />
              <input
                value={form.guests}
                onChange={set("guests")}
                placeholder="Estimated Guest Count"
                inputMode="numeric"
                className={inputClass}
                data-testid="contact-guests-input"
                aria-label="Estimated guest count"
              />
            </div>
            <textarea
              value={form.about}
              onChange={set("about")}
              placeholder="Tell us about your event"
              rows={4}
              className={`${inputClass} resize-none`}
              data-testid="contact-about-textarea"
              aria-label="Tell us about your event"
            />
            <button
              type="submit"
              data-testid="contact-form-submit-button"
              className="group inline-flex items-center gap-3 rounded-full bg-[#C9A24D] px-8 py-4 text-[0.68rem] tracking-[0.28em] text-[#0A0806] transition-[background-color,transform] duration-500 hover:bg-[#E6C073] hover:scale-[1.03]"
            >
              START A CONVERSATION
              <ArrowRight size={15} className="transition-transform duration-500 group-hover:translate-x-1.5" />
            </button>
            <p className="text-xs text-[#B5A796]/70">
              This opens WhatsApp with your details pre-written. Nothing is stored on our servers.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
