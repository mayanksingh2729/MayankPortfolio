import insta from "../assets/Insta.png"
import linkedin from "../assets/Linkedin.png"
import github from "../assets/Github.png"
import twitter from "../assets/Twitter.png"

export default function SocialLinks() {
  const socials = [
    {
      name: "Instagram",
      img: insta,
      url: "https://www.instagram.com/mayanknegi.27?igsh=MTdtMm9rOHE5NDF2bw==",
      color: "hover:text-pink-400",
      glow: "hover:shadow-[0_0_20px_rgba(236,72,153,0.6)]",
    },
    {
      name: "LinkedIn",
      img: linkedin,
      url: "www.linkedin.com/in/mayank-negi-bb50a427a",
      color: "hover:text-blue-400",
      glow: "hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]",
    },
    {
      name: "GitHub",
      img: github,
      url: "https://github.com/mayanksingh2729",
      color: "hover:text-gray-300",
      glow: "hover:shadow-[0_0_20px_rgba(156,163,175,0.6)]",
    },
    {
      name: "Twitter",
      img: twitter,
      url: "#",
      color: "hover:text-cyan-400",
      glow: "hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]",
    },
  ]

  return (
    <div className="fixed bottom-12 left-4 z-50 flex flex-col space-y-4">
      {socials.map((social, index) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          className={`group block w-12 h-12 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white/70 ${social.color} ${social.glow} transition-all duration-300 hover:scale-110 border-2 border-purple-500/30 hover:border-purple-500/60 animate-fade-in-left`}
          style={{ animationDelay: `${index * 0.1}s` }}
          title={social.name}
        >
          <img src={social.img} alt={social.name} className="w-10 h-10 group-hover:animate-pulse"/>
        </a>
      ))}

      <div className="absolute left-1/2 top-14 w-0.5 h-32 bg-gradient-to-b from-purple-500/50 to-transparent transform -translate-x-1/2 -z-10"></div>
    </div>
  )
}
