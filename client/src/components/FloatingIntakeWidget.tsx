import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, Phone, User, CheckCircle, MessageSquare } from "lucide-react";
import robinPhoto from "@assets/robinrochellepic1.webp";

const PRACTICE_AREAS = [
  "Criminal Defense",
  "DUI / Drunk Driving",
  "Family Law",
  "Domestic Violence",
  "Wills, Trusts & Probate",
  "Other",
];

type Step = "bubble" | "greeting" | "area" | "form" | "done";

export function FloatingIntakeWidget() {
  const [step, setStep] = useState<Step>("bubble");
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [selectedArea, setSelectedArea] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Appear after 3 seconds, once per session
  useEffect(() => {
    if (sessionStorage.getItem("intake-dismissed")) {
      setDismissed(true);
      return;
    }
    const t = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(t);
  }, []);

  function dismiss() {
    setDismissed(true);
    setVisible(false);
    sessionStorage.setItem("intake-dismissed", "1");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!name.trim() || !phone.trim()) {
      setError("Please fill in both fields.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), phone: phone.trim(), practiceArea: selectedArea }),
      });
      if (!res.ok) throw new Error();
      setStep("done");
    } catch {
      setError("Something went wrong. Please call us directly at (580) 248-1822.");
    } finally {
      setSubmitting(false);
    }
  }

  if (dismissed || !visible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[200] flex flex-col items-end gap-3">
      <AnimatePresence mode="wait">
        {step !== "bubble" && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="w-[calc(100vw-2rem)] max-w-sm bg-primary text-primary-foreground rounded-2xl shadow-2xl overflow-hidden border border-white/10"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 bg-primary border-b border-white/10">
              <img
                src={robinPhoto}
                alt="Attorney Robin Rochelle"
                className="w-10 h-10 rounded-full object-cover object-top border-2 border-secondary flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-primary-foreground leading-tight">Robin Rochelle</p>
                <p className="text-xs text-secondary">Attorney at Law</p>
              </div>
              <button
                onClick={dismiss}
                className="p-1 rounded-full hover:bg-white/10 transition-colors text-primary-foreground/60 hover:text-primary-foreground flex-shrink-0"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="px-4 py-4">
              {/* Greeting */}
              {step === "greeting" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  <p className="text-sm leading-relaxed text-primary-foreground/90">
                    Hi, I'm Robin. If you're facing a legal matter, I'd like to help. What brings you here today?
                  </p>
                  <button
                    onClick={() => setStep("area")}
                    className="w-full flex items-center justify-between bg-secondary text-secondary-foreground px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-secondary/90 transition-colors"
                  >
                    Get a free consultation
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <a
                    href="tel:5802481822"
                    className="w-full flex items-center justify-center gap-2 border border-white/20 text-primary-foreground/80 hover:text-primary-foreground hover:border-white/40 px-4 py-2.5 rounded-lg text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call (580) 248-1822
                  </a>
                </motion.div>
              )}

              {/* Practice Area Selection */}
              {step === "area" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
                  <p className="text-sm text-primary-foreground/90 font-medium">What type of legal matter?</p>
                  <div className="grid grid-cols-2 gap-2">
                    {PRACTICE_AREAS.map((area) => (
                      <button
                        key={area}
                        onClick={() => { setSelectedArea(area); setStep("form"); }}
                        className="text-left px-3 py-2 rounded-lg border border-white/20 text-xs text-primary-foreground/80 hover:border-secondary hover:text-secondary hover:bg-secondary/10 transition-all leading-snug"
                      >
                        {area}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Contact Form */}
              {step === "form" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <p className="text-xs text-secondary font-medium mb-3 uppercase tracking-wide">{selectedArea}</p>
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-foreground/40 pointer-events-none" />
                      <input
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="w-full bg-white/10 border border-white/20 rounded-lg pl-9 pr-3 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-secondary transition-colors"
                        autoFocus
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-foreground/40 pointer-events-none" />
                      <input
                        type="tel"
                        placeholder="Phone number"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        className="w-full bg-white/10 border border-white/20 rounded-lg pl-9 pr-3 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-secondary transition-colors"
                      />
                    </div>
                    {error && <p className="text-xs text-red-400">{error}</p>}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-secondary text-secondary-foreground font-semibold py-2.5 rounded-lg text-sm hover:bg-secondary/90 transition-colors disabled:opacity-60"
                    >
                      {submitting ? "Sending…" : "Request a Callback"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep("area")}
                      className="w-full text-xs text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors"
                    >
                      ← Change practice area
                    </button>
                  </form>
                </motion.div>
              )}

              {/* Confirmation */}
              {step === "done" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-2 space-y-3"
                >
                  <CheckCircle className="w-10 h-10 text-secondary mx-auto" />
                  <p className="font-semibold text-primary-foreground">We'll be in touch soon, {name.split(" ")[0]}.</p>
                  <p className="text-xs text-primary-foreground/70 leading-relaxed">
                    Robin's office will call you back shortly. For urgent matters, call{" "}
                    <a href="tel:5802481822" className="text-secondary underline">(580) 248-1822</a>.
                  </p>
                  <button
                    onClick={dismiss}
                    className="text-xs text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors"
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating trigger bubble */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => setStep(step === "bubble" ? "greeting" : "bubble")}
        className="relative w-14 h-14 rounded-full shadow-xl overflow-hidden border-2 border-secondary hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
        aria-label="Chat with us"
      >
        {step === "bubble" ? (
          <>
            <img
              src={robinPhoto}
              alt="Chat with Attorney Robin Rochelle"
              className="w-full h-full object-cover object-top"
            />
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full animate-ping bg-secondary/30 pointer-events-none" />
          </>
        ) : (
          <span className="w-full h-full bg-primary flex items-center justify-center">
            <MessageSquare className="w-6 h-6 text-secondary" />
          </span>
        )}
      </motion.button>
    </div>
  );
}
