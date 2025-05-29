import { useEffect, useRef, useState } from "react";
import AvatarSitting from "../assets/Avatar Sitting.png";
import "../index.css"

const servicesData = [
  {
    title: "Web Design",
    description:
      "Designing dynamic, responsive web interfaces that blend aesthetics with seamless functionality. I craft engaging user journeys using the MERN stack — from sleek frontends in React to powerful backend APIs in Node.js — ensuring every pixel and interaction feels just right.",
    borderColor: "border-purple-500/20 hover:border-purple-500/40",
  },
  {
    title: "Figma Design",
    description:
      "Transforming ideas into intuitive and visually compelling user experiences using Figma. From initial wireframes to polished prototypes, I focus on designing interfaces that are not only beautiful but also user-friendly and effective.",
    borderColor: "border-cyan-500/20 hover:border-cyan-500/40",
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-15 relative z-10">
      <div className="max-w-7xl mx-auto px-8">
        {/* Centered Heading */}
        <div className="flex justify-center mb-16">
          <h2 className="text-6xl font-bold text-white">
            What{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              I Do
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Paragraph and Avatar */}
          <div
            className={`space-y-6 transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <p className="text-white/70 text-base ml-20 text-lg">
              I specialize in creating digital experiences that combine beautiful design with powerful functionality.
            </p>
            <div className="relative flex justify-center mt-4">
              <img
                src={AvatarSitting}
                alt="Mayank Working"
                className="w-72 h-72 object-contain animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl" />
            </div>
          </div>

          {/* Right Column: Cards */}
          <div
            className={`space-y-8 transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.4s" }}
          >
            {servicesData.map((service, index) => (
              <div
                key={index}
                className={`bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border ${service.borderColor} transition-all duration-300 hover:scale-105 md:w-[600px]`}
              >
                <h3 className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-white/70 text-base">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
