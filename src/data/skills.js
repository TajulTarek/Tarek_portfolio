import { FaReact, FaNodeJs, FaPython, FaJava, FaDatabase, FaMobileAlt, FaCode, FaBrain } from "react-icons/fa";
import {
  SiCplusplus, SiJavascript, SiTypescript, SiKotlin,
  SiTensorflow, SiMongodb, SiFirebase,
  SiTailwindcss, SiGit,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: FaCode,
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "C", level: 90 },
      { name: "C++", level: 95 },
      { name: "Java", level: 80 },
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "Kotlin", level: 70 },
    ],
  },
  {
    title: "Web Development",
    icon: FaReact,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "React.js", level: 88 },
      { name: "Node.js", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "SQL", level: 78 },
      { name: "Firebase", level: 75 },
      { name: "Tailwind CSS", level: 82 },
    ],
  },
  {
    title: "Machine Learning",
    icon: FaBrain,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "TensorFlow", level: 75 },
      { name: "Computer Vision", level: 78 },
      { name: "MediaPipe", level: 70 },
      { name: "LangChain", level: 65 },
    ],
  },
  {
    title: "Mobile & Tools",
    icon: FaMobileAlt,
    color: "from-orange-500 to-amber-500",
    skills: [
      { name: "Kotlin", level: 72 },
      { name: "Jetpack Compose", level: 68 },
      { name: "Git & GitHub", level: 88 },
      { name: "Firebase", level: 75 },
    ],
  },
];

export const competitiveProgramming = [
  {
    platform: "Codeforces",
    rating: "Expert",
    color: "#1F8ACB",
    url: "https://codeforces.com/profile/Tarek.97",
  },
  {
    platform: "CodeChef",
    rating: "4-Star",
    color: "#5B4638",
    url: "https://www.codechef.com/users/tarek_97",
  },
  {
    platform: "AtCoder",
    rating: "Active",
    color: "#222",
    url: "https://atcoder.jp/users/TajulTarek",
  },
];
