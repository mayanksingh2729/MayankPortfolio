import { useEffect, useRef, useState } from "react";
import { GraduationCap, MapPin } from "lucide-react";

const educationData = [
  {
    degree: "10th Grade",
    institution: "St Mary's School",
    year: "2016-2017",
    location: "Najibabad, U.P.",
    description: "Completed secondary education",
    color: "from-orange-500 to-red-500",
  },
  {
    degree: "12th Grade",
    institution: "Walia Global Academy",
    year: "2018-2019",
    location: "Najibabad, U.P.",
    description: "Science Stream",
    color: "from-green-500 to-teal-500",
  },
  {
    degree: "BCA",
    institution: "Vivek College Of Education",
    year: "2020-2023",
    location: "Bijnor, U.P",
    description: "Bachelor of Computer Applications",
    color: "from-cyan-500 to-blue-500",
  },
  {
    degree: "MCA",
    institution: "Chandigarh University",
    year: "2023-2025",
    location: "Mohali, Punjab",
    description: "Master of Computer Applications",
    color: "from-purple-500 to-pink-500",
  },
];

export default function Education() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="qualification" className="py-5 relative z-10">
      <div className="max-w-7xl mx-auto px-8">
        <h2
          className={`text-5xl font-bold text-center text-white mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          My{" "}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Career Journey
          </span>
        </h2>

        <div className="relative w-full">
          {/* Horizontal line with animation */}
          <div className="relative h-1 w-full bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 rounded-full">
          </div>

          {/* Dots + Cards */}
          <div className="flex justify-between items-start mt-12 relative z-10">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="flex flex-col items-center w-1/4 px-2"
                style={{ transitionDelay: `${0.6 + index * 0.2}s` }}
              >
                {/* Dot on line */}
                <div
                  className={`w-7 h-7 -mt-16 z-20 rounded-full border-4 border-black bg-gradient-to-r ${edu.color} transition-transform duration-500 ${
                    isVisible ? "animate-pulse scale-100" : "scale-0"
                  }`}
                />

                {/* Card below dot */}
                <div
                  className={`mt-10 bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 text-center w-full max-w-[250px] 
                  ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                >
                  <GraduationCap className="mx-auto text-blue-300 mb-4" size={36} />
                  <div className="text-2xl font-bold text-white mb-2">{edu.degree}</div>
                  <div className="text-lg text-blue-400 font-semibold mb-2">{edu.institution}</div>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <MapPin className="text-green-400" size={16} />
                    <span className="text-green-300 text-sm">{edu.location}</span>
                  </div>
                  <div className="text-cyan-400 text-base mb-2">{edu.year}</div>
                  <div className="text-white/70 text-base">{edu.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
