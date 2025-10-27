import React from 'react'
import { FaDatabase, FaChartBar, FaRobot, FaBrain } from 'react-icons/fa'

const caseStudies = [
  {
    id: 1,
    title: "ETL Data Pipeline & Power BI Dashboard",
    description: "Built an end-to-end ETL pipeline processing customer and electricity data from SQL databases and CSV files, implementing data quality checks and automated Power BI reporting for business intelligence.",
    icon: <FaDatabase className="text-[#7A3FF2]" size={24} />,
    technologies: ["SQL", "Power BI", "ETL", "Data Transformation", "Data Quality"],
    features: [
      "Multi-source data extraction",
      "Staging database design",
      "Automated data validation",
      "Interactive Power BI dashboards"
    ],
    outcome: "Enabled real-time business performance monitoring and electricity pricing analysis"
  },
  {
    id: 2,
    title: "Big Data Pipeline - FIFA World Cup Analysis",
    description: "Developed a PySpark and MongoDB pipeline for processing decades of World Cup data, creating visualizations to analyze scoring trends and team performance across different eras.",
    icon: <FaChartBar className="text-[#4ECDC4]" size={24} />,
    technologies: ["PySpark", "MongoDB", "Matplotlib", "Jupyter", "Data Visualization"],
    features: [
      "Large dataset processing with PySpark",
      "NoSQL database design",
      "Statistical analysis",
      "Interactive data visualizations"
    ],
    outcome: "Provided insights into historical football trends and player performance patterns"
  },
  {
    id: 3,
    title: "Machine Learning - Wine Quality Prediction",
    description: "Trained and evaluated multiple regression models to predict wine quality based on chemical properties, implementing data preprocessing and model performance analysis.",
    icon: <FaBrain className="text-[#FF6B6B]" size={24} />,
    technologies: ["Python", "Scikit-Learn", "Regression", "PCA", "Model Evaluation"],
    features: [
      "Data cleaning and preprocessing",
      "Multiple regression models",
      "Hyperparameter tuning",
      "Model performance comparison"
    ],
    outcome: "Achieved accurate quality prediction enabling data-driven wine assessment"
  },
  {
    id: 4,
    title: "UiPath Automation - Car Data Processing",
    description: "Created an RPA robot that automates car data collection and Excel reporting, streamlining manual data entry processes and calculations.",
    icon: <FaRobot className="text-[#FFE66D]" size={24} />,
    technologies: ["UiPath", "Visual Basic", "Excel Automation", "RPA"],
    features: [
      "User input data collection",
      "Automated Excel operations",
      "Data validation and calculations",
      "Batch processing capabilities"
    ],
    outcome: "Reduced manual data processing time by 80% through automation"
  }
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-8 sm:py-12 lg:py-14 w-full">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-center">Project Case Studies</h2>
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 w-full">
        {caseStudies.map((study) => (
          <div key={study.id} className="card hover:shadow-purple-glow transition-all duration-300 group w-full">
            <div className="flex items-start gap-4 mb-4 w-full">
              <div className="p-3 rounded-xl bg-surface/50 group-hover:bg-surface transition-colors flex-shrink-0">
                {study.icon}
              </div>
              <div className="flex-grow min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-glow transition-colors break-words">
                  {study.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed break-words">
                  {study.description}
                </p>
              </div>
            </div>
            
            <div className="mb-4 w-full">
              <h4 className="font-semibold text-accent mb-2 text-sm">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {study.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-2 py-1 bg-surface rounded-full text-xs text-muted border border-white/10 break-words"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4 w-full">
              <h4 className="font-semibold text-accent mb-2 text-sm">Key Features</h4>
              <ul className="text-muted text-sm space-y-1">
                {study.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 break-words">
                    <span className="text-accent flex-shrink-0 mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-white/10 w-full">
              <p className="text-sm text-glow font-medium break-words">
                {study.outcome}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}