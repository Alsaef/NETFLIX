import { FaInfoCircle, FaPlay } from "react-icons/fa";

const Hero = () => {
  const adLink = "https://www.effectivegatecpm.com/k1i44cq8y?key=f5f5d6baf83b9353c97553f99f30b082";

  const adLinkTwo="https://www.effectivegatecpm.com/nutzjfki?key=0b964243555961654471a476e01294ad";
  return(
     <div className="relative h-[100vh] w-full mb-8">
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
    <img 
      src="https://assets.nflxext.com/ffe/siteui/vlv3/9d949d8d-9583-4530-9caf-e9875e45964d/web_tall_panel/BD-en-20260209-TRIFECTA-perspective_4928f7ec-d0cb-40f1-a9bd-ee0e79bb7d7c_large.jpg" 
      className="absolute inset-0 w-full h-full object-cover" 
      alt="Hero Background"
    />
    <div className="relative z-20 flex flex-col justify-center h-full max-w-2xl px-12 gap-4">
      <h2 className="text-6xl font-bold">Movies</h2>
      <p className="text-lg text-gray-200">Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.</p>
      <div className="flex lg:flex-row flex-col gap-3">
        <a 
        href={adLink}
          target="_blank" 
          rel="noopener noreferrer"
        >
          <button className="btn btn-primary px-8 text-lg"><FaPlay /> WATCH NOW FREE</button>
        </a>
      <a href={adLinkTwo} target="_blank" rel="noopener noreferrer">
        <button className="btn btn-secondary bg-gray-500/50 border-none text-white px-8 text-lg hover:bg-gray-500/70">
          <FaInfoCircle /> More Info
        </button>
      </a>
      </div>
    </div>
  </div>
  )
};

export default Hero;