import React from "react";
import SectionHeading from "./SectionHeading";
import {
  Cpu,
  Brain,
  Eye,
  Shapes,
  BotMessageSquare,
  HeartPulse,
} from "lucide-react";

const AboutSection = () => {
  const skills = [
    {
      name: "Deep Learning",
      icon: Brain,
      description:
        "Designing and training neural networks for various applications",
    },
    {
      name: "Computer Vision",
      icon: Eye,
      description: "Object detection, image segmentation, and video analysis",
    },
    {
      name: "Federated Learning",
      icon: Shapes,
      description: "Decentralized model training without data sharing",
    },
    {
      name: "Machine Learning",
      icon: Cpu,
      description:
        "Supervised and unsupervised learning algorithms and techniques",
    },
    {
      name: "Interpretable AI",
      icon: BotMessageSquare,
      description: "AI models with understandable decision-making",
    },
    {
      name: "Bio-medical Imaging",
      icon: HeartPulse,
      description: "Medical imaging enhanced by AI analysis",
    },
  ];

  return (
    <section id="about" className="bg-white py-20">
      <div className="section-container">
        <SectionHeading
          title="About Me"
          subtitle="I'm an AI researcher passionate about pushing the boundaries of what's possible with machine learning."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-justify">
              Hi, I'm Tahmid Enam Shrestha. I am an{" "}
              <b>Assistant Investigator</b> at the{" "}
              <b>Artificial Intelligence Research & Innovation Lab (AIRIL)</b>{" "}
              and a dedicated researcher specializing in{" "}
              <b>
                Machine Learning, Deep Learning, Biomedical Signal Processing,
                Interpretable AI, Federated Learning, and Computer Vision.
              </b>{" "}
              My research is driven by the goal of advancing knowledge through
              impactful publications in esteemed journals and conferences.
            </p>
            <p className="text-lg text-justify">
              Throughout my journey, I have successfully led and mentored
              research teams, fostering collaboration and driving excellence in
              projects that address real-world challenges. My contributions
              include developing advanced algorithms and models that solve
              critical problems in healthcare and technology, demonstrating a
              strong track record of high-quality research and a commitment to
              pushing the boundaries of Artificial Intelligence and its
              applications.
            </p>
            <p className="text-lg text-justify">
              I achived my{" "}
              <b>
                B.Sc. in Computer Science & Engineering from American
                International University-Bangladesh (AIUB)
              </b>
              , one of the most prestigious private engineering institutes in
              Bangladesh. Alongside my role at AIRIL, I also served as a{" "}
              <b>Research Assistant (RA) at Learnify Research Lab.</b>
            </p>
            <p className="text-lg text-justify">
              For my undergraduate thesis, I worked on{" "}
              <b>
                DeepMelaNet: Advancing Melanoma Stage Classification in Skin
                Cancer Diagnosis
              </b>
              , under the supervision of <b>Prof. Dr. Md Asraf Ali</b> from the
              Department of Computer Science, AIUB. Additionally, I have
              contributed to multiple research projects spanning Machine
              Learning, Deep Learning, Federated Learning, Computer Vision,
              Interpretable AI, and Biomedical Image Classification.
            </p>
            <p className="text-lg text-justify">
              My primary research{" "}
              <b>focus is on Computer Vision and Biomedical Imaging</b>, and I
              am committed to continuously expanding my knowledge in
              computational techniques, software, and programming languages. I
              believe in lifelong learning and staying at the forefront of AI
              advancements to drive meaningful innovation.
            </p>
          </div>

          <div className="bg-secondary rounded-2xl p-8 shadow-sm animate-fade-up">
            <h3 className="text-xl font-semibold mb-6">Technical Expertise</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="p-2 rounded-md bg-primary/10 text-primary mt-1">
                    <skill.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">{skill.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {skill.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="glass-card rounded-xl p-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <h3 className="text-2xl font-bold mb-2">10+</h3>
            <p className="text-muted-foreground">Research Papers Published</p>
          </div>
          <div
            className="glass-card rounded-xl p-6 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="text-2xl font-bold mb-2">2+</h3>
            <p className="text-muted-foreground">Years of Experience</p>
          </div>
          <div
            className="glass-card rounded-xl p-6 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <h3 className="text-2xl font-bold mb-2">25+</h3>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
