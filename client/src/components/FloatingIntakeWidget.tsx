import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, User, CheckCircle } from "lucide-react";
import robinPhoto from "@assets/robinrochellepic1.webp";

const PRACTICE_AREAS = [
  "Criminal Defense",
  "DUI / Drunk Driving",
  "Family Law",
  "Domestic Violence",
  "Wills, Trusts & Probate",
  "Other / Not Sure",
];

type Step = "closed" | "greeting" | "area" | "form" | "done";

export function FloatingIntakeWidget() {
  const [step, setStep] = useState<Step>("closed");
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [selectedArea, setSelectedArea] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("intake-dismissed")) {
      setDismissed(true);
      return;
    }
    const showTrigger = setTimeout(() => setVisible(true), 1500);
    const autoOpen = setTimeout(() => {
      if (!sessionStorage.getItem("intake-dismissed")) {
        setStep("greeting");
      }
    }, 5000);
    return () => {
      clearTimeout(showTrigger);
      clearTimeout(autoOpen);
    };
  }, []);

  function dismiss() {
    setDismissed(true);
    setStep("closed");
    setVisible(false);
    sessionStorage.setItem("intake-dismissed", "1");
  }

  function toggleOpen() {
    setStep((s) => (s === "closed" ? "greeting" : "closed"));
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

  if (dismissed) return null;

  const isOpen = step !== "closed";

  return (
    <div className="fixed bottom-5 left-4 right-4 z-[200] flex flex-col items-end gap-3 pointer-events-none">

      {/* Main panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.94 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="
              pointer-events-auto w-[calc(100vw-2rem)] max-w-[420px]
              bg-[#0f1a2e] text-white rounded-2xl shadow-[0_8px_48px_rgba(0,0,0,0.55)]
              border border-white/10 overflow-hidden
            "
          >
            {/* Header bar */}
            <div className="relative flex items-center gap-3 px-5 py-3 bg-[#0a1120] border-b border-white/10">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="relative flex-shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400 absolute -top-0.5 -right-0.5 z-10 border border-[#0a1120]" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-white leading-tight">Robin Rochelle</p>
                  <p className="text-xs text-yellow-400/90">Attorney at Law · Lawton, OK</p>
                </div>
              </div>
              <button
                onClick={dismiss}
                aria-label="Close"
                className="p-1.5 rounded-full hover:bg-white/10 transition-colors text-white/50 hover:text-white flex-shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="px-5 pb-5">

              {/* Greeting step */}
              {step === "greeting" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.05 }}
                  className="space-y-4 pt-5"
                >
                  {/* Headshot */}
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full border-[3px] border-yellow-500 p-0.5 shadow-[0_0_20px_rgba(180,140,40,0.4)]">
                        <img
                          src={robinPhoto}
                          alt="Attorney Robin Rochelle"
                          className="w-full h-full rounded-full object-cover object-top"
                        />
                      </div>
                      <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-[#0f1a2e]" />
                    </div>
                  </div>

                  {/* Greeting text */}
                  <div className="text-center space-y-1.5">
                    <p className="text-lg font-bold text-white leading-snug">
                      Hi, I'm Robin Rochelle.
                    </p>
                    <p className="text-sm text-white/80 leading-relaxed">
                      If you've been arrested or charged, <span className="text-yellow-400 font-semibold">call me now.</span><br />
                      I fight for Lawton families — and I take your call personally.
                    </p>
                  </div>

                  {/* CTAs */}
                  <div className="space-y-2.5 pt-1">
                    <button
                      onClick={() => setStep("area")}
                      className="w-full bg-yellow-500 hover:bg-yellow-400 text-[#0a1120] font-bold py-3 rounded-xl text-sm transition-all hover:shadow-[0_4px_16px_rgba(234,179,8,0.35)] active:scale-[0.98]"
                    >
                      Get a Free Consultation →
                    </button>
                    <a
                      href="tel:5802481822"
                      className="w-full flex items-center justify-center gap-2 border border-yellow-500/40 hover:border-yellow-500 text-white/80 hover:text-white py-3 rounded-xl text-sm transition-all"
                    >
                      <Phone className="w-4 h-4 text-yellow-500" />
                      Call (580) 248-1822 Now
                    </a>
                  </div>

                  {/* Urgency */}
                  <p className="text-center text-xs text-white/40 pt-1">
                    Available for urgent calls — even tonight
                  </p>
                </motion.div>
              )}

              {/* Practice area step */}
              {step === "area" && (
                <motion.div
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3 pt-5"
                >
                  <p className="text-base font-bold text-white">What's your legal matter?</p>
                  <p className="text-xs text-white/50 -mt-1">Choose the closest match — we handle it all.</p>

                  <div className="space-y-2 pt-1">
                    {PRACTICE_AREAS.map((area) => (
                      <button
                        key={area}
                        onClick={() => { setSelectedArea(area); setStep("form"); }}
                        className="
                          w-full text-left px-4 py-3 rounded-xl border border-yellow-500/25
                          hover:border-yellow-500 hover:bg-yellow-500/10
                          text-white/80 hover:text-white
                          text-sm font-medium transition-all active:scale-[0.98]
                          flex items-center justify-between group
                        "
                      >
                        {area}
                        <span className="text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity text-base">→</span>
                      </button>
                    ))}
                  </div>

                  <p className="text-center text-xs text-white/40 pt-1">
                    Available for urgent calls — even tonight
                  </p>
                </motion.div>
              )}

              {/* Contact form step */}
              {step === "form" && (
                <motion.div
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4 pt-5"
                >
                  <div>
                    <div className="inline-block bg-yellow-500/15 border border-yellow-500/30 text-yellow-400 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {selectedArea}
                    </div>
                    <p className="text-base font-bold text-white">How should Robin reach you?</p>
                    <p className="text-xs text-white/50 mt-0.5">We'll call you back — usually within the hour.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
                      <input
                        type="text"
                        placeholder="Your full name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="
                          w-full bg-white/5 border border-white/15 rounded-xl
                          pl-10 pr-4 py-3 text-sm text-white placeholder:text-white/30
                          focus:outline-none focus:border-yellow-500/60 transition-colors
                        "
                        autoFocus
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
                      <input
                        type="tel"
                        placeholder="Best phone number"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        className="
                          w-full bg-white/5 border border-white/15 rounded-xl
                          pl-10 pr-4 py-3 text-sm text-white placeholder:text-white/30
                          focus:outline-none focus:border-yellow-500/60 transition-colors
                        "
                      />
                    </div>

                    {error && (
                      <p className="text-xs text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-3 py-2">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-yellow-500 hover:bg-yellow-400 text-[#0a1120] font-bold py-3 rounded-xl text-sm transition-all hover:shadow-[0_4px_16px_rgba(234,179,8,0.35)] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {submitting ? "Sending…" : "Request My Callback"}
                    </button>

                    <button
                      type="button"
                      onClick={() => setStep("area")}
                      className="w-full text-xs text-white/40 hover:text-white/70 transition-colors py-1"
                    >
                      ← Back
                    </button>
                  </form>

                  <p className="text-center text-xs text-white/40">
                    Available for urgent calls — even tonight
                  </p>
                </motion.div>
              )}

              {/* Confirmation step */}
              {step === "done" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  className="text-center py-6 space-y-4"
                >
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-yellow-500/15 border border-yellow-500/30 flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-yellow-500" />
                    </div>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">
                      Got it, {name.split(" ")[0]}.
                    </p>
                    <p className="text-sm text-white/70 mt-1 leading-relaxed">
                      Robin's office will call you back at <span className="text-white font-medium">{phone}</span>. For urgent matters, call directly:
                    </p>
                  </div>
                  <a
                    href="tel:5802481822"
                    className="w-full flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-[#0a1120] font-bold py-3 rounded-xl text-sm transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    (580) 248-1822
                  </a>
                  <button
                    onClick={dismiss}
                    className="text-xs text-white/30 hover:text-white/60 transition-colors"
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger button */}
      {visible && (
        <motion.button
          className="pointer-events-auto relative w-16 h-16 rounded-full shadow-2xl overflow-visible focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 22, delay: 0.1 }}
          onClick={toggleOpen}
          aria-label={isOpen ? "Close intake form" : "Talk to an attorney"}
        >
          {/* Gold glow ring */}
          {!isOpen && (
            <span className="absolute inset-0 rounded-full animate-ping bg-yellow-500/30 pointer-events-none" style={{ animationDuration: "2s" }} />
          )}
          {/* Red urgency dot */}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 z-20 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg">
              <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-75" style={{ animationDuration: "1.5s" }} />
            </span>
          )}

          <div className={`w-full h-full rounded-full overflow-hidden border-[3px] transition-all duration-300 ${isOpen ? "border-white/30 bg-[#0a1120]" : "border-yellow-500 shadow-[0_0_16px_rgba(234,179,8,0.5)]"}`}>
            {isOpen ? (
              <span className="w-full h-full flex items-center justify-center bg-[#0a1120]">
                <X className="w-6 h-6 text-white" />
              </span>
            ) : (
              <img
                src={robinPhoto}
                alt="Talk to Robin Rochelle"
                className="w-full h-full object-cover object-top"
              />
            )}
          </div>
        </motion.button>
      )}
    </div>
  );
}
