import { useEffect, useRef, useState } from "react";
import AvatarStanding from "../assets/Avatar Standing.png";
import "../index.css";

const statsData = [
  { value: "10+", label: "Projects", color: "text-purple-400" },
  { value: "1+", label: "Years Experience", color: "text-cyan-400" },
];

export default function About() {
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
    <section
      ref={sectionRef}
      id="about-us"
      className="relative z-10"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Centered Heading Across Both Columns */}
          <div className="md:col-span-2 flex justify-center">
            <h2 className="text-5xl font-bold text-white mb-8">
              About{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
          </div>

          {/* Avatar Column */}
          <div
            className={`relative flex justify-center transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="relative">
              <img
                src={AvatarStanding}
                alt="Mayank Negi Avatar"
                className="w-80 h-80 object-contain animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl" />
            </div>
          </div>

          {/* Text Column */}
          <div
            className={`space-y-6 transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <p className="text-lg text-white/80 leading-relaxed">
              I'm a passionate web developer with a keen eye for design and a
              love for creating beautiful, functional websites. With expertise
              in modern web technologies, I bring ideas to life through clean
              code and stunning visuals.
            </p>

            <p className="text-lg text-white/80 leading-relaxed">
              My journey in web development started with curiosity and has
              evolved into a professional pursuit of excellence. I believe in
              continuous learning and staying updated with the latest trends in
              technology.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
              {statsData.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-3xl font-bold ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-base text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
