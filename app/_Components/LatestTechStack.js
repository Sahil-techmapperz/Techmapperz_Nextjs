"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaPython,
  FaJava,
  FaAngular,
  FaPhp,
  FaGit,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTypescript,
  SiGraphql,
  SiKubernetes,
  SiPostgresql,
  SiFirebase,
  SiTailwindcss,
  SiRedux,
  SiJquery,
  SiMysql,
  SiExpress,
  SiVuedotjs,
  SiDjango,
  SiLaravel,
  SiRubyonrails,
  SiCsharp,
  SiDotnet,
  SiFlutter,
  SiSass,
  SiWebpack,
  SiBabel,
  SiRust,
  SiKotlin,
  SiElasticsearch,
} from "react-icons/si";
import Link from "next/link";

const techStack = [
  { name: "React", icon: <FaReact />, bg: "#282c34", textColor: "#61DBFB" },
  { name: "Next.js", icon: <SiNextdotjs />, bg: "#fff", textColor: "#000" },
  { name: "Angular", icon: <FaAngular />, bg: "#FFECEC", textColor: "#DD0031" },
  { name: "Vue.js", icon: <SiVuedotjs />, bg: "#f0fdf4", textColor: "#4FC08D" },
  { name: "Node.js", icon: <FaNodeJs />, bg: "#eafae3", textColor: "#3C873A" },
  { name: "Express", icon: <SiExpress />, bg: "#f7f7f7", textColor: "#444" },
  { name: "MongoDB", icon: <SiMongodb />, bg: "#F7F7F7", textColor: "#4DB33D" },
  { name: "PostgreSQL", icon: <SiPostgresql />, bg: "#eef4ff", textColor: "#336791" },
  { name: "MySQL", icon: <SiMysql />, bg: "#f5faff", textColor: "#00758F" },
  { name: "Firebase", icon: <SiFirebase />, bg: "#fff8e1", textColor: "#FFCA28" },
  { name: "GraphQL", icon: <SiGraphql />, bg: "#f5f5f5", textColor: "#E10098" },
  { name: "TypeScript", icon: <SiTypescript />, bg: "#fff", textColor: "#3178C6" },
  { name: "TailwindCSS", icon: <SiTailwindcss />, bg: "#f5fcff", textColor: "#38BDF8" },
  { name: "Docker", icon: <FaDocker />, bg: "#f2f2f2", textColor: "#0db7ed" },
  { name: "Kubernetes", icon: <SiKubernetes />, bg: "#f0f8ff", textColor: "#326CE5" },
  { name: "AWS", icon: <FaAws />, bg: "#232f3e", textColor: "#FF9900" },
  { name: "Python", icon: <FaPython />, bg: "#f5f5f5", textColor: "#3776AB" },
  { name: "Django", icon: <SiDjango />, bg: "#d8f8dd", textColor: "#092E20" },
  { name: "Java", icon: <FaJava />, bg: "#f0f0f0", textColor: "#5382a1" },
  { name: "Laravel", icon: <SiLaravel />, bg: "#ffeeee", textColor: "#FF2D20" },
  { name: "PHP", icon: <FaPhp />, bg: "#f2faff", textColor: "#787CB5" },
  { name: "RubyonRails", icon: <SiRubyonrails />, bg: "#ffecec", textColor: "#CC0000" },
  { name: "Redux", icon: <SiRedux />, bg: "#f5ebff", textColor: "#764ABC" },
  { name: "Flutter", icon: <SiFlutter />, bg: "#e8f4ff", textColor: "#02569B" },
  { name: "C#", icon: <SiCsharp />, bg: "#efe0f5", textColor: "#68217A" },
  { name: ".NET", icon: <SiDotnet />, bg: "#eee8f6", textColor: "#5C2D91" },
  { name: "jQuery", icon: <SiJquery />, bg: "#eaf6ff", textColor: "#0769AD" },
  { name: "Git", icon: <FaGit />, bg: "#fcecec", textColor: "#F05033" },
  { name: "SASS", icon: <SiSass />, bg: "#ffe9f5", textColor: "#CC6699" },
  { name: "HTML5", icon: <FaHtml5 />, bg: "#ffe9e0", textColor: "#E34F26" },
  { name: "CSS3", icon: <FaCss3Alt />, bg: "#e6f0ff", textColor: "#1572B6" },
  { name: "Rust", icon: <SiRust />, bg: "#fff4e6", textColor: "#DEA584" },
];

const LatestTechStack = () => {
  return (
    <div style={styles.container}>
      {/* <h1 className="text-[2.5rem] mb-[2rem] text-[#333] max-sm:text-2xl">Our Latest Technology Stack</h1> */}
      <div style={styles.grid} >
        {techStack.map((tech, index) => (
          <Link href={`./technology/${tech.name}`}>
          <motion.div
            key={index}
            style={{
              ...styles.card,
              backgroundColor: tech.bg,
              color: tech.textColor,
            }}
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25}}
          >
            <div style={styles.icon}>{tech.icon}</div>
            <p style={{ ...styles.name, color: tech.textColor }}>{tech.name}</p>
          </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    textAlign: "center",
    backgroundColor: "#f9f9f9"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
    gap: "3rem",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    transition: "transform 0.3s ease",
  },
  icon: {
    fontSize: "3rem",
    marginBottom: "0.5rem",
  },
  name: {
    fontSize: "1rem",
    fontWeight: "bold",
  },
};

export default LatestTechStack;
