import ProfileImage from "../assets/MayankProfile.jpg"
export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" })
  }

  const redirectToGithub = () => {
    window.open("https://github.com/mayanksingh2729", "_blank")
  }

  return (
    <section id="home" className="flex items-center justify-center relative z-10 mt-30">
      <div className="max-w-7xl mx-auto ml-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div className="space-y-10 animate-fade-in-left transform -translate-y-10 translate-x-4">
            {/* Greeting and Name */}
            <div className="space-y-4">
              <h1 className="text-6xl font-bold text-white leading-tight">Hello I'm</h1>
              <h1 className="text-7xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                Mayank Negi
              </h1>
            </div>

            {/* Title and Buttons */}
            <div className="space-y-6">
              <h2 className="text-5xl font-light text-white/90 leading-tight">
                Creative <br />
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent font-bold">
                  Web Designer
                </span>
              </h2>

              <div className="flex space-x-4">
                <button
                  onClick={redirectToGithub}
                  className="px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-purple-500/25 text-base"
                >
                  View My Work
                </button>
                <button
                  onClick={() => { window.open("https://wa.me/918755743400?text=Hi%20Mayank%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.","_blank");}}
                  className="flex items-center gap-2 px-8 py-3 border border-white/30 text-white rounded-full hover:bg-white/10 transition-all duration-300 text-base">
                  <img src="https://img.icons8.com/?size=100&id=16713&format=png&color=ffffff" alt="WhatsApp" className="w-7 h-7"/>
                  Contact Me
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Blurry Circle with Image */}
          <div className="relative flex justify-center items-center animate-fade-in-right -translate-y-8">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-500/30 via-cyan-400/20 to-pink-400/30 blur-xl absolute" />
            <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-white/20 relative z-10">
              <img
                src={ProfileImage}
                alt="Mayank Negi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
