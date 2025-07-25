import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 60, category: "frontend" },
  { name: "JavaScript", level: 55, category: "frontend" },
  { name: "React", level: 50, category: "frontend" },
  { name: "TypeScript", level: 40, category: "frontend" },
  { name: "Tailwind CSS", level: 60, category: "frontend" },
  { name: "Next.js", level: 40, category: "frontend" },

  // Backend
  { name: "Node.js", level: 40, category: "backend" },
  { name: "Express", level: 35, category: "backend" },
  { name: "MongoDB", level: 40, category: "backend" },
  { name: "PostgreSQL", level: 30, category: "backend" },
  { name: "GraphQL", level: 20, category: "backend" },

  // AI/ML
  { name: "Python", level: 70, category: "AI/ML" },
  { name: "TensorFlow", level: 75, category: "AI/ML" },
  { name: "PyTorch", level: 70, category: "AI/ML" },
  { name: "Scikit-learn", level: 70, category: "AI/ML" },
  { name: "Matplotlib/Seaborn", level: 60, category: "AI/ML" },
  { name: "XGBoost / Random Forests", level: 65, category: "AI/ML" },
  { name: "Keras", level: 65, category: "AI/ML" },
  { name: "OpenCV", level: 50, category: "AI/ML" },
  { name: "Natural Language Processing (NLP)", level: 60, category: "AI/ML" },
  { name: "Computer Vision", level: 65, category: "AI/ML" },
  { name: "Reinforcement Learning", level: 40, category: "AI/ML" },
  { name: "Transformers (Hugging Face)", level: 50, category: "AI/ML" },
  

  // Tools
  { name: "Git/GitHub", level: 65, category: "tools" },
  { name: "Docker", level: 25, category: "tools" },
  { name: "Figma", level: 40, category: "tools" },
  { name: "MLflow (Model Tracking)", level: 60, category: "AI/ML" },
  { name: "DVC (Version Control)", level: 55, category: "AI/ML" },
  { name: "FastAPI (Model Deployment)", level: 60, category: "AI/ML" },
  { name: "Hugging Face (Transformers)", level: 50, category: "AI/ML" },  
  { name: "VS Code", level: 80, category: "tools" },
];

const categories = ["AI/ML", "frontend", "backend", "tools", "all"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("AI/ML");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};