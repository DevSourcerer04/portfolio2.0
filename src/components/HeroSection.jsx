import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Abhishek
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Gupta
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I'm a frontend developer and ML enthusiast who crafts responsive, accessible, and high-performance web applications 
            using modern tools like Tailwind CSS, React, and Vite. I also build intelligent systems by integrating machine learning models 
            into real-world applications using FastAPI, MLflow, and DVC. From beautiful interfaces to AI-driven insights — I build with purpose, precision, and a passion for innovation.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <button
          type="button"
          className="flex flex-col items-center focus:outline-none"
          onClick={() => {
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          aria-label="Scroll to About Section"
        >
          <span className="text-sm text-muted-foreground mb-2"> Click to know more about me! </span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </button>
      </div>
    </section>
  );
};