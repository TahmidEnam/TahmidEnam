import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import ResearchCard, { ResearchPaper } from "./ResearchCard";

const ResearchSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const researchPapers: ResearchPaper[] = [
    {
      id: "1",
      title: "Explainable deep learning for diabetes diagnosis with DeepNetX2",
      abstract:
        "Diabetes is a leading health global health challenge because of its high blood sugar levels and the risk of extensive damage to other internal organs. Early and accurate identification of diabetes is important because it may cause other diseases including heart diseases and nerve damage.",
      publication: "Biomedical Signal Processing and Control",
      year: 2023,
      url: "https://www.sciencedirect.com/science/article/abs/pii/S1746809424009601?via%3Dihub",
      tags: ["Bio-medical"],
    },
    {
      id: "2",
      title:
        "DeepMelaNet: Advancing Melanoma Stage Classification in Skin Cancer Diagnosis",
      abstract:
        "This study presents a modified deep-learning model, named DeepMelaNet, to correctly classify skin cancer images as benign or malignant. The proposed classifier achieved an accuracy of 93.40%, a precision of 98%, a recall of 94%, and an F1 score of 93% on a dataset of 10,000 melanoma skin cancer images, offering a practical solution that can help healthcare professionals in early skin cancer prediction.",
      publication: "Proceedings of ACL",
      year: 2025,
      url: "https://etasr.com/index.php/ETASR/article/view/8336",
      tags: ["Deep Learning", "Image Classification", "Computer Vision"],
    },
    {
      id: "3",
      title:
        "A comprehensive dental dataset of six classes for deep learning based object detection study",
      abstract:
        "This article presents a dental dataset for the improvement of research on deep learning-based detection and classification of dental diseases. The dataset is consisted of 232 panoramic dental radiographs, categorized into six major classes: healthy teeth, caries, impacted teeth, infections, fractured teeth, and broken-down crowns/roots (BDC/BDR).",
      publication: "Data in Brief",
      year: 2024,
      url: "https://www.sciencedirect.com/science/article/pii/S2352340924009326",
      tags: ["Dataset"],
    },
    {
      id: "4",
      title:
        "Revolutionizing cucumber agriculture: Ai for precision classification of leaf diseases",
      abstract:
        "Cucumbers are crucial agricultural commodities worldwide, necessitating production enhancements and quality maintenance. However, several diseases can easily hamper cucumber production if not classified and detected early. This study proposes a modified deep learning approach for identifying and classifying cucumber diseases at early stages using the Kaggle dataset.",
      publication:
        "2024 6th International Conference on Electrical Engineering and Information & Communication Technology (ICEEICT)",
      year: 2024,
      url: "https://ieeexplore.ieee.org/abstract/document/10534530",
      tags: ["Computer Vision", "Deep Learning", "Image Classification"],
    },
    {
      id: "5",
      title:
        "Enhancing blood cell classification by applying big transfer and (xai)",
      abstract:
        "Blood cells are considered one of the most significant elements in the human body. The study demonstrates a precise hybrid deep-learning model combined with EfficientNetB6 and Big Transfer (BiT-M-R50x1) for accurate blood cell classification in medical image analysis which is crucial for health diagnosis.",
      publication: "Doctoral Symposium on Computational Intelligence",
      year: 2024,
      url: "https://link.springer.com/chapter/10.1007/978-981-97-6318-4_14",
      tags: [
        "Computer Vision",
        "Deep Learning",
        "Image Classification",
        "Bio-medical",
      ],
    },
    {
      id: "6",
      title:
        "Breast Cancer Diagnosis with XAI-Integrated Deep Learning Approach",
      abstract:
        "Breast cancer is one of the world's significant health challenges. There is a need to have better techniques in the early diagnosis of this disease to increase patients' survival rates. This paper introduces a robust approach for breast cancer detection by integrating deep-learning and classical machine-learning techniques into a custom lightweight neural network model",
      publication:
        "2024 International Conference on Innovation and Intelligence for Informatics, Computing, and Technologies (3ICT)",
      year: 2024,
      url: "https://ieeexplore.ieee.org/abstract/document/10824574",
      tags: [
        "Computer Vision",
        "Deep Learning",
        "Image Classification",
        "Bio-medical",
        "Machine Learning",
        "Interpretable AI",
      ],
    },
    {
      id: "7",
      title:
        "DeepResVit: A Hybrid Deep Learning Approach for Ovarian Cancer Classification with XAI",
      abstract:
        "Ovarian cancer is one of the most prevalent cancers in women and primarily results from the uncontrollable growth and division of abnormal cells in the ovary. Early detection is essential for improving survival rates, yet traditional diag-nostic techniques struggle to detect the disease at an early stage. This study aims to address this challenge by proposing a robust hybrid deep learning model named DeepResVit, which integrates both the pre-trained ResNet-152 and Vision Transformer (ViT) architectures for ovarian cancer classification. ",
      publication:
        "2024 2nd International Conference on Information and Communication Technology (ICICT)",
      year: 2024,
      url: "https://ieeexplore.ieee.org/abstract/document/10839719",
      tags: [
        "Computer Vision",
        "Deep Learning",
        "Image Classification",
        "Bio-medical",
        "Machine Learning",
        "Interpretable AI",
      ],
    },
    {
      id: "8",
      title:
        "Single-Level Fusion for Enhancing Meat Quality Classification with Explainable AI",
      abstract:
        "This study proposes a state-of-the-art deep-learning model of a single fusion level of ConvNeXtTiny and DenseNet169 networks for categorizing meat as fresh, half-fresh, and spoiled. Pivotal to this study is the use of Grad-CAM++ for explainable AI (XAI) that offers finer localization by generating high-resolution heatmaps that focus on the important regions in images. ",
      publication:
        "2024 IEEE International Conference on Computing, Applications and Systems (COMPAS)",
      year: 2024,
      url: "https://ieeexplore.ieee.org/abstract/document/10796775",
      tags: [
        "Computer Vision",
        "Deep Learning",
        "Image Classification",
        "Machine Learning",
        "Interpretable AI",
        "Food Safety"
      ],
    },
    {
      id: "9",
      title:
        "Poster Presentation - Revolutionizing cucumber agriculture: Ai for precision classification of leaf diseases",
      abstract:
        "Poster",
      publication:
        "N/A",
      year: 2024,
      url: "https://www.researchgate.net/profile/Sharia-Tanim-2/publication/381655587_Revolutionizing_Cucumber_Agriculture_AI_for_Precision_Classification_of_Leaf_Diseases/links/66794f61d21e220d89cc3462/Revolutionizing-Cucumber-Agriculture-AI-for-Precision-Classification-of-Leaf-Diseases.pdf",
      tags: [
        "Computer Vision",
        "Deep Learning",
        "Image Classification",
        "Machine Learning",
        "Interpretable AI",
      ],
    },
  ];

  // Extract unique tags
  const allTags = Array.from(
    new Set(researchPapers.flatMap((paper) => paper.tags))
  );

  // Filter papers based on active filter
  const filteredPapers =
    activeFilter === "all"
      ? researchPapers
      : researchPapers.filter((paper) => paper.tags.includes(activeFilter));

  return (
    <section id="research" className="bg-secondary/30 py-20">
      <div className="section-container">
        <SectionHeading
          title="Research Publications"
          subtitle="A collection of my published papers in top-tier academic conferences and journals."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-white text-foreground hover:bg-secondary"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === tag
                  ? "bg-primary text-primary-foreground"
                  : "bg-white text-foreground hover:bg-secondary"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPapers.map((paper, index) => (
            <ResearchCard
              key={paper.id}
              paper={paper}
              className={`animate-fade-up animate-delay-${index * 100}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
