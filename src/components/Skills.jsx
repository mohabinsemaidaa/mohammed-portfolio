import React from 'react'
import { FaPython, FaJava, FaDatabase, FaChartLine, FaRobot } from 'react-icons/fa'
import { SiCplusplus, SiMongodb, SiApachespark, SiTensorflow, SiScikitlearn } from 'react-icons/si'
import { BiData } from 'react-icons/bi'

const skillGroups = [
  { 
    title: 'Data Engineering', 
    items: [
      { name: 'ETL Pipelines', icon: <FaDatabase className="text-[#336791]" size={20} /> },
      { name: 'Power BI', icon: <BiData className="text-[#F2C811]" size={20} /> },
      { name: 'SQL', icon: <FaDatabase className="text-[#336791]" size={20} /> },
      { name: 'Data Transformation', icon: <FaChartLine className="text-[#7A3FF2]" size={20} /> }
    ]
  },
  { 
    title: 'Machine Learning', 
    items: [
      { name: 'Scikit-Learn', icon: <SiScikitlearn className="text-[#F7931E]" size={20} /> },
      { name: 'PySpark', icon: <SiApachespark className="text-[#E25A1C]" size={20} /> },
      { name: 'TensorFlow', icon: <SiTensorflow className="text-[#FF6F00]" size={20} /> },
      { name: 'Regression Analysis', icon: <FaChartLine className="text-[#4ECDC4]" size={20} /> }
    ]
  },
  { 
    title: 'Programming & Tools', 
    items: [
      { name: 'Python', icon: <FaPython className="text-[#3776AB]" size={20} /> },
      { name: 'Java', icon: <FaJava className="text-[#ED8B00]" size={20} /> },
      { name: 'C++', icon: <SiCplusplus className="text-[#00599C]" size={20} /> },
      { name: 'UiPath RPA', icon: <FaRobot className="text-[#FF4400]" size={20} /> }
    ]
  },
  { 
    title: 'Databases & Analytics', 
    items: [
      { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" size={20} /> },
      { name: 'Data Visualization', icon: <FaChartLine className="text-[#FF6B6B]" size={20} /> },
      { name: 'Big Data', icon: <SiApachespark className="text-[#E25A1C]" size={20} /> },
      { name: 'Data Analysis', icon: <BiData className="text-[#7A3FF2]" size={20} /> }
    ]
  }
]

export default function Skills() {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Skills</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {skillGroups.map((group) => (
          <div key={group.title} className="card hover:shadow-purple-glow transition-all duration-300">
            <h3 className="font-semibold mb-4 text-sm sm:text-base text-accent">{group.title}</h3>
            <ul className="space-y-3">
              {group.items.map((skill) => (
                <li key={skill.name} className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-200">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-surface/50 group-hover:bg-surface transition-colors">
                    {skill.icon}
                  </div>
                  <span className="text-text group-hover:text-glow transition-colors text-sm sm:text-base">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}