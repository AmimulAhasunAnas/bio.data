/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const getImagePath = (path: string) => {
  if (path.startsWith('http')) return path;
  // Remove leading slash if present and prepend base URL
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

export const USER_DATA = {
  name: "Md. Amimul Ahasun Anas",
  alias: "Cyber Security Analyst",
  role: "Cyber Security Analyst",
  brief: "Dedicated Cyber Security Analyst at Thakral Information Systems Pvt. LTD. Securing enterprise ecosystems with precision and great responsibility.",
  profilePicture: getImagePath("images/profile.jpg"),
  shiledDossier: {
    status: "ACTIVE_OPERATIVE",
    clearance: "LEVEL_8",
    affiliations: ["Thakral Information Systems Pvt. Limited", "ThinkEZ Limited", "AIUB"],
    location: "Dhaka, Bangladesh",
    threatLevel: "TERTIARY",
    personnelId: "ANAS-0418-SEC",
    specialization: "Splunk & Network Defense",
  },
  personalInfo: {
    dob: "18 April, 2000",
    nationality: "Bangladeshi",
    religion: "Islam",
    height: "5ft 5inch",
    maritalStatus: "Single",
  },
  superpowers: [
    { name: "Threat Intelligence", level: 94, icon: "Zap" },
    { name: "Network Security", level: 96, icon: "Shield" },
    { name: "Splunk Arc-Analytics", level: 98, icon: "Cpu" },
    { name: "Digital Forensics", level: 88, icon: "Brain" },
    { name: "Endpoint Defense", level: 92, icon: "Shield" },
  ],
  missions: [
    {
      id: "m01",
      title: "Thakral Information Systems Pvt. Limited",
      date: "2025 - Present",
      description: "Leading cyber security analysis and threat mitigation at Thakral Information Systems Pvt. LTD.",
      image: "https://images.unsplash.com/photo-1558494949-ef010915610e?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "m02",
      title: "ThinkEZ Limited",
      date: "2023 - 2025",
      description: "Served as System Engineer and Cyber Security Analyst, hardening cloud and local infrastructure.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "m03",
      title: "ADN Diginet",
      date: "2023",
      description: "Deep-dive data analytics and pattern recognition during trainee phase at ADN Diginet.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    },
  ],
  education: [
    {
      degree: "BSc. Computer Science Engineering",
      institution: "American International University-Bangladesh",
      year: "2019 - 2023",
      score: "CGPA 3.19/4",
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Joypurhat Govt. College",
      year: "2018",
      score: "GPA 4.33/5",
    },
    {
      degree: "Secondary School Certificate",
      institution: "R.B. Govt. High School",
      year: "2016",
      score: "GPA 4.83/5",
    },
  ],
  contact: {
    phone: "+8801737-766907",
    email: "anasamimulahasun@gmail.com",
    linkedin: "linkedin.com/in/amimulahasunanas",
  },
  gallery: Array.from({ length: 30 }, (_, i) => getImagePath(`images/gallery/${i + 1}.jpg`)),
};
