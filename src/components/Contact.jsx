import { useState, useEffect, useRef } from "react"
import profile from "../assets/MayankProfile.jpg"

export default function Contact() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("")

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setSubmitStatus("Message sent successfully!")
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        message: "",
      })
    } catch (error) {
      setSubmitStatus("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section ref={sectionRef} id="contact-us" className="py-5 relative z-10">
      <div className="max-w-7xl mx-auto px-8">
        <h2
          className={`text-5xl font-bold text-center text-white mb-16 transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Contact <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
        </h2>

        <div className="grid grid-cols-3 gap-12 items-start">
          <div
            className={`space-y-6 transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="bg-slate-800/50 backdrop-blur-xs p-6 ml-[50px] mt-[50px] rounded-lg border border-purple-500/20">
              <h3 className="text-3xl font-bold text-white mb-4">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center">
                    <span className="text-4xl">✉️</span>
                  </div>
                  <a href="mailto:mayanksingh2729@gmail.com" className="text-white/80 text-base hover:underline" > mayanksingh2729@gmail.com </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center">
                    <span className="text-4xl">📞</span>
                  </div>
                  <a href="tel:+918755743400" className="text-white/80 text-base hover:underline" >+91 8755743400 </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`flex justify-center transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-500 to-cyan-500 p-1">
                <img
                  src={profile}
                  alt="Mayank Negi"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse" />
            </div>
          </div>

          <div
            className={`space-y-6 transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-cyan-500/20">
              <h3 className="text-3xl font-bold text-white mb-4">Get in touch</h3>
              <p className="text-white/70 text-sm mb-4">You can reach me anytime</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-slate-700/50 border border-purple-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-500 text-sm"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-slate-700/50 border border-purple-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-500 text-sm"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-slate-700/50 border border-purple-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-500 text-sm"
                />

                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile number"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-slate-700/50 border border-purple-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-500 text-sm"
                />

                <textarea
                  name="message"
                  placeholder="How can I help you?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-3 py-2 bg-slate-700/50 border border-purple-500/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-500 text-sm resize-none"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-purple-500/25 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>

                {submitStatus && (
                  <p
                    className={`text-sm text-center ${submitStatus.includes("success") ? "text-green-400" : "text-red-400"}`}
                  >
                    {submitStatus}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
