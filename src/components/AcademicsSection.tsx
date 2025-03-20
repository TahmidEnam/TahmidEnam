import React from "react";
import SectionHeading from "./SectionHeading";
import {
  School,
  Calendar,
  Award,
  GraduationCap,
  BookOpen,
  Trophy,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Interface for higher education (university, college)
interface HigherEducation {
  id: string;
  type: "higher";
  institution: string;
  degree: string;
  field: string;
  major?: string;
  years: string;
  cgpa?: string;
  description: string;
  thesisTitle?: string;
  thesisSupervisor?: string;
  projects?: string[];
  achievements?: string[];
}

// Interface for school education
interface SchoolEducation {
  id: string;
  type: "school";
  institution: string;
  major?: string;
  years: string;
  cgpa?: string;
  awards?: string[];
}

// Union type for both education types
type Education = HigherEducation | SchoolEducation;

const AcademicsSection = () => {
  const education: Education[] = [
    {
      id: "1",
      type: "higher",
      institution: "American International University-Bangladesh",
      degree: "BSc",
      field: "Computer Science & Engineering",
      major: "Information System",
      years: "2020 - 2024",
      cgpa: "3.75/4.0",
      description:
        "Focused on machine learning and artificial intelligence with emphasis on computer vision algorithms.",
      thesisTitle:
        "DeepMelaNet: Advancing Melanoma Stage Classification in Skin Cancer Diagnosis",
      thesisSupervisor: "Prof. Dr. Md Asraf Ali",
      projects: [
        "Explainable deep learning for diabetes diagnosis with DeepNetX2",
        "DeepMelaNet: Advancing Melanoma Stage Classification in Skin Cancer Diagnosis",
      ],
      achievements: ["Published 10+ papers in top-tier conferences"],
    },
    {
      id: "2",
      type: "school",
      institution: "Cantonment Public School & College, Saidpur",
      major: "Science",
      years: "20017 - 2019",
      cgpa: "4.92/5.0",
      awards: ["General Board Scholarship"],
    },
    {
      id: "3",
      type: "school",
      institution: "Ibrahim Memorial Shiksha Niketan, Birganj, Dinajpur",
      major: "Science",
      years: "20017 - 2019",
      cgpa: "5.0/5.0",
      awards: ["General Board Scholarship"],
    },
    {
      id: "4",
      type: "school",
      institution: "Ibrahim Memorial Shiksha Niketan, Birganj, Dinajpur",
      major: "General",
      years: "2010",
      cgpa: "5.0/5.0",
      awards: ["General Board Scholarship"],
    },
  ];

  return (
    <section id="academics" className="py-20 bg-secondary/30">
      <div className="section-container">
        <SectionHeading
          title="Academic Background"
          subtitle="My educational journey and academic achievements."
        />

        <div className="space-y-8">
          {education.map((item) => (
            <Card
              key={item.id}
              className="animate-fade-up overflow-hidden"
              style={{ animationDelay: `${parseInt(item.id) * 100}ms` }}
            >
              <CardContent className="p-0">
                {item.type === "higher" ? (
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg text-primary">
                        <GraduationCap className="h-8 w-8" />
                      </div>

                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                          <h3 className="text-xl font-bold">
                            {item.institution}
                          </h3>
                          <div className="flex items-center text-muted-foreground mt-1 md:mt-0">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span className="text-sm">{item.years}</span>
                          </div>
                        </div>

                        <div className="mb-3 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                          <span className="font-medium">
                            {item.degree} in {item.field}
                          </span>
                          {item.major && (
                            <span className="text-sm text-muted-foreground">
                              Major: {item.major}
                            </span>
                          )}
                          {item.cgpa && (
                            <span className="inline-flex items-center text-sm bg-primary/10 text-primary px-2 py-0.5 rounded">
                              <Trophy className="h-3 w-3 mr-1" /> CGPA:{" "}
                              {item.cgpa}
                            </span>
                          )}
                        </div>

                        <p className="text-muted-foreground mb-4">
                          {item.description}
                        </p>

                        {item.thesisTitle && (
                          <div className="mb-3">
                            <h4 className="font-medium flex items-center">
                              <BookOpen className="h-4 w-4 mr-2 text-primary" />
                              Thesis
                            </h4>
                            <p className="text-sm ml-6 mt-1">
                              <span className="font-medium">
                                {item.thesisTitle}
                              </span>
                              {item.thesisSupervisor && (
                                <span className="block text-muted-foreground mt-1">
                                  Supervisor: {item.thesisSupervisor}
                                </span>
                              )}
                            </p>
                          </div>
                        )}

                        {item.projects && item.projects.length > 0 && (
                          <div className="mb-3">
                            <h4 className="font-medium flex items-center mb-2">
                              <School className="h-4 w-4 mr-2 text-primary" />
                              Key Projects
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground pl-1">
                              {item.projects.map((project, index) => (
                                <li key={index}>{project}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {item.achievements && item.achievements.length > 0 && (
                          <div className="mt-3">
                            <h4 className="font-medium flex items-center mb-2">
                              <Award className="h-4 w-4 mr-2 text-primary" />
                              Key Achievements
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground pl-1">
                              {item.achievements.map((achievement, index) => (
                                <li key={index}>{achievement}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg text-primary">
                        <School className="h-8 w-8" />
                      </div>

                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                          <h3 className="text-xl font-bold">
                            {item.institution}
                          </h3>
                          <div className="flex items-center text-muted-foreground mt-1 md:mt-0">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span className="text-sm">{item.years}</span>
                          </div>
                        </div>

                        <div className="mb-3 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                          {item.major && (
                            <span className="font-medium">
                              Program: {item.major}
                            </span>
                          )}
                          {item.cgpa && (
                            <span className="inline-flex items-center text-sm bg-primary/10 text-primary px-2 py-0.5 rounded">
                              <Trophy className="h-3 w-3 mr-1" /> CGPA:{" "}
                              {item.cgpa}
                            </span>
                          )}
                        </div>

                        {item.awards && item.awards.length > 0 && (
                          <div className="mt-3">
                            <h4 className="font-medium flex items-center mb-2">
                              <Award className="h-4 w-4 mr-2 text-primary" />
                              Awards & Achievements
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground pl-1">
                              {item.awards.map((award, index) => (
                                <li key={index}>{award}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;