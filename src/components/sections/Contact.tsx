"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, MapPin, Mail, CheckCircle2, Loader2, Send, ArrowLeft } from "lucide-react"
import { CONTACT } from "@/lib/constants"

interface FormErrors {
  name?: string
  phone?: string
  message?: string
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", role: "", phone: "", message: "" })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone is required"
    else if (!/^[+]?[\d\s-]{10,}$/.test(formData.phone.trim())) newErrors.phone = "Enter a valid phone number"
    if (!formData.message.trim()) newErrors.message = "Please describe your requirements"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setIsSubmitting(true)
    setSubmitError(false)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setIsSubmitted(true)
      setFormData({ name: "", role: "", phone: "", message: "" })
    } catch (err) {
      console.error(err)
      setSubmitError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }))
    }
  }

  const handleReset = () => {
    setIsSubmitted(false)
    setSubmitError(false)
  }

  return (
    <section id="contact" className="section-padding bg-white" style={{ scrollMarginTop: "80px" }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
            Get In Touch
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-4">
            Let&apos;s Define <span className="italic text-accent">Destiny.</span>
          </h2>
          <p className="max-w-lg mx-auto text-slate-400 text-lg font-light">
            Whether it&apos;s a by-poll or a Loksabha battle, we are ready to provide the edge you need.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-[#fafafa] rounded-[40px] overflow-hidden border border-slate-100 flex flex-col md:flex-row"
        >
          <div className="md:w-2/5 magenta-gradient p-8 md:p-10 text-white flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl mb-3">Let&apos;s Talk Strategy</h3>
              <p className="text-white/70 text-sm font-light leading-relaxed">
                Reach out for a confidential consultation about your electoral needs.
              </p>
            </div>
            <div className="space-y-5 mt-8">
              <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">{CONTACT.phone}</span>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">{CONTACT.email}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">{CONTACT.location}</span>
              </div>
            </div>
          </div>

          <div className="md:w-3/5 p-8 md:p-10">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex flex-col items-center justify-center h-full py-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                    className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-6 border border-green-100"
                  >
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </motion.div>
                  <motion.h4
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-xl font-bold text-slate-900 mb-2"
                  >
                    Message Sent
                  </motion.h4>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-slate-400 text-sm mb-6"
                  >
                    We&apos;ll get back to you within 24 hours.
                  </motion.p>
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-accent transition-colors"
                  >
                    <ArrowLeft size={14} />
                    Send another message
                  </motion.button>
                </motion.div>
              ) : submitError ? (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center h-full py-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center mb-6 border border-red-100"
                  >
                    <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </motion.div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Something Went Wrong</h4>
                  <p className="text-slate-400 text-sm mb-6">Please try again or call us directly.</p>
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-accent transition-colors"
                  >
                    <ArrowLeft size={14} />
                    Try again
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  className="space-y-6"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2 block">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={`w-full px-0 py-3 border-b-2 bg-transparent outline-none transition-colors placeholder-slate-300 text-sm ${
                          errors.name ? "border-red-400" : "border-slate-100 focus:border-accent"
                        }`}
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="role" className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2 block">
                        Role / Party
                      </label>
                      <input
                        id="role"
                        name="role"
                        type="text"
                        value={formData.role}
                        onChange={handleChange}
                        placeholder="Your role"
                        className="w-full px-0 py-3 border-b-2 border-slate-100 focus:border-accent outline-none transition-colors bg-transparent placeholder-slate-300 text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2 block">
                      Phone *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXXXXXXX"
                      className={`w-full px-0 py-3 border-b-2 bg-transparent outline-none transition-colors placeholder-slate-300 text-sm ${
                        errors.phone ? "border-red-400" : "border-slate-100 focus:border-accent"
                      }`}
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2 block">
                      Inquiry Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      className={`w-full px-0 py-3 border-b-2 bg-transparent outline-none transition-colors resize-none placeholder-slate-300 text-sm ${
                        errors.message ? "border-red-400" : "border-slate-100 focus:border-accent"
                      }`}
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    animate={isSubmitting ? { scale: 0.98 } : { scale: 1 }}
                    className="w-full bg-navy text-white text-sm font-bold py-4 rounded-2xl hover:bg-accent transition-colors duration-300 disabled:cursor-not-allowed flex items-center justify-center gap-2 relative overflow-hidden"
                  >
                    <AnimatePresence mode="wait">
                      {isSubmitting ? (
                        <motion.div
                          key="loading"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-2"
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <Loader2 className="w-4 h-4" />
                          </motion.div>
                          <span>Sending...</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="idle"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-2"
                        >
                          <Send size={14} />
                          <span>Send Strategic Request</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {isSubmitting && (
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-accent"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      />
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
