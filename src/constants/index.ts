import { StaticImageData } from "next/image";

import master_avatar_1 from "@assets/images/master-avatar-1.png";
import master_avatar_2 from "@assets/images/master-avatar-2.png";
import master_avatar_3 from "@assets/images/master-avatar-3.png";
import master_avatar_4 from "@assets/images/master-avatar-4.png";
import master_avatar_5 from "@assets/images/master-avatar-5.png";
import master_avatar_6 from "@assets/images/master-avatar-6.png";
import master_avatar_7 from "@assets/images/master-avatar-7.png";
import master_avatar_8 from "@assets/images/master-avatar-8.png";

import layer_logo from "@assets/logos/layer-logo.svg";
import abbc_logo from "@assets/logos/abbc-logo.svg";
import acdc_logo from "@assets/logos/acdc-logo.svg";
import act_logo from "@assets/logos/act-logo.svg";
import cng_logo from "@assets/logos/cng-logo.svg";
import crp_logo from "@assets/logos/crp-logo.svg";
import discord_logo from "@assets/logos/discord-logo.svg";
import fns_logo from "@assets/logos/fsn-logo.svg";
import gbt_logo from "@assets/logos/gbt-logo.svg";
import mtv_logo from "@assets/logos/mtv-logo.svg";
import rit_logo from "@assets/logos/rit-logo.svg";
import s_logo from "@assets/logos/s-logo.svg";
import spotify from "@assets/logos/spotify-logo.svg";
import tiktok_logo from "@assets/logos/tiktok-logo.svg";
import twitter_logo from "@assets/logos/twitter-logo.svg";
import ust_logo from "@assets/logos/ust-logo.svg";
import vres_logo from "@assets/logos/vres-logo.svg";
import wib_logo from "@assets/logos/wib-logo.svg";

import talent_image_1 from "@assets/images/talent_image_1.jpg";
import talent_image_2 from "@assets/images/talent_image_2.jpg";
import talent_image_3 from "@assets/images/talent_image_3.jpg";
import talent_image_4 from "@assets/images/talent_image_4.jpg";
import talent_image_5 from "@assets/images/talent_image_5.jpg";
import talent_image_6 from "@assets/images/talent_image_6.jpg";

export type Master = {
  name: string;
  role: string;
  rating: number;
  reviews: number;
  avatar: StaticImageData;
  skills: string[];
  isOnline: boolean;
};

type CategoryMasters = {
  [category: string]: Master[];
};

export const mastersData: CategoryMasters = {
  Developer: [
    {
      name: "Zrand Hobs",
      role: "Developer",
      rating: 4.8,
      reviews: 6,
      avatar: master_avatar_1,
      skills: ["Gimp", "Wordpress"],
      isOnline: true,
    },
    {
      name: "Frances Washing",
      role: "Fullstack Developer",
      rating: 4.7,
      reviews: 10,
      avatar: master_avatar_2,
      skills: ["Node.js", "React", "PostgreSQL"],
      isOnline: false,
    },
    {
      name: "Leo Nguyen",
      role: "Frontend Developer",
      rating: 4.9,
      reviews: 14,
      avatar: master_avatar_3,
      skills: ["Vue.js", "Tailwind", "Figma"],
      isOnline: true,
    },
    {
      name: "Mina Lopez",
      role: "Backend Developer",
      rating: 4.6,
      reviews: 8,
      avatar: master_avatar_4,
      skills: ["Laravel", "MySQL", "Git"],
      isOnline: false,
    },
  ],

  "UI Designer": [
    {
      name: "Dorothy Wood",
      role: "Teacher",
      rating: 4.8,
      reviews: 6,
      avatar: master_avatar_5,
      skills: ["Elementor", "Wix", "Illustrator"],
      isOnline: true,
    },
    {
      name: "Timothy Baker",
      role: "Teacher",
      rating: 4.8,
      reviews: 6,
      avatar: master_avatar_6,
      skills: ["Figma", "Elementor", "Wordpress"],
      isOnline: true,
    },
    {
      name: "Jason Bell",
      role: "Web Designer",
      rating: 4.8,
      reviews: 6,
      avatar: master_avatar_7,
      skills: ["Elementor", "Wordpress"],
      isOnline: false,
    },
    {
      name: "Kathryn Sanchez",
      role: "Teacher",
      rating: 4.8,
      reviews: 6,
      avatar: master_avatar_8,
      skills: ["Framer", "Webflow", "Wix"],
      isOnline: false,
    },
  ],

  "Project Manager": [
    {
      name: "Brian Maxwell",
      role: "Project Manager",
      rating: 4.7,
      reviews: 9,
      avatar: master_avatar_1,
      skills: ["Agile", "Jira", "Confluence"],
      isOnline: true,
    },
    {
      name: "Selena Graham",
      role: "Tech PM",
      rating: 4.6,
      reviews: 11,
      avatar: master_avatar_2,
      skills: ["Scrum", "Notion", "Slack"],
      isOnline: true,
    },
    {
      name: "Tom O’Neil",
      role: "IT Coordinator",
      rating: 4.5,
      reviews: 5,
      avatar: master_avatar_3,
      skills: ["Asana", "Monday", "Gantt"],
      isOnline: false,
    },
    {
      name: "Alice Monroe",
      role: "Senior PM",
      rating: 4.9,
      reviews: 13,
      avatar: master_avatar_4,
      skills: ["ClickUp", "Miro", "Trello"],
      isOnline: true,
    },
  ],

  Designer: [
    {
      name: "Samira Delacroix",
      role: "Graphic Designer",
      rating: 4.8,
      reviews: 7,
      avatar: master_avatar_5,
      skills: ["Photoshop", "InDesign", "Figma"],
      isOnline: true,
    },
    {
      name: "Diego Torres",
      role: "Creative Designer",
      rating: 4.6,
      reviews: 9,
      avatar: master_avatar_6,
      skills: ["Canva", "Illustrator", "Framer"],
      isOnline: false,
    },
    {
      name: "Nina Park",
      role: "Brand Designer",
      rating: 4.9,
      reviews: 12,
      avatar: master_avatar_7,
      skills: ["Figma", "Sketch", "Adobe XD"],
      isOnline: true,
    },
    {
      name: "Liam Brooks",
      role: "Motion Designer",
      rating: 4.7,
      reviews: 6,
      avatar: master_avatar_8,
      skills: ["After Effects", "Premiere Pro", "Lottie"],
      isOnline: true,
    },
  ],

  Accountant: [
    {
      name: "Martin White",
      role: "Accountant",
      rating: 4.8,
      reviews: 8,
      avatar: master_avatar_1,
      skills: ["QuickBooks", "Excel", "SAP"],
      isOnline: true,
    },
    {
      name: "Laura Kim",
      role: "Financial Analyst",
      rating: 4.6,
      reviews: 10,
      avatar: master_avatar_2,
      skills: ["Power BI", "Oracle", "Google Sheets"],
      isOnline: false,
    },
    {
      name: "Gregory Chen",
      role: "Payroll Manager",
      rating: 4.7,
      reviews: 5,
      avatar: master_avatar_3,
      skills: ["Xero", "ADP", "MS Excel"],
      isOnline: true,
    },
    {
      name: "Tina Solis",
      role: "Auditor",
      rating: 4.9,
      reviews: 11,
      avatar: master_avatar_4,
      skills: ["Internal Audit", "ERP", "Zoho Books"],
      isOnline: false,
    },
  ],

  "Human Resource": [
    {
      name: "Angela Zhou",
      role: "HR Manager",
      rating: 4.7,
      reviews: 10,
      avatar: master_avatar_5,
      skills: ["Recruiting", "Employee Relations", "Conflict Resolution"],
      isOnline: true,
    },
    {
      name: "Lucas Moreau",
      role: "Talent Acquisition Specialist",
      rating: 4.5,
      reviews: 8,
      avatar: master_avatar_6,
      skills: ["Interviewing", "Candidate Sourcing", "LinkedIn Recruiter"],
      isOnline: false,
    },
    {
      name: "Fatima Diallo",
      role: "HR Generalist",
      rating: 4.8,
      reviews: 12,
      avatar: master_avatar_7,
      skills: ["Onboarding", "Payroll", "Labor Law"],
      isOnline: true,
    },
  ],

  Marketing: [
    {
      name: "Sophie Chen",
      role: "Digital Marketing Manager",
      rating: 4.9,
      reviews: 14,
      avatar: master_avatar_8,
      skills: ["SEO", "SEM", "Google Analytics"],
      isOnline: true,
    },
    {
      name: "David Mensah",
      role: "Content Strategist",
      rating: 4.6,
      reviews: 9,
      avatar: master_avatar_1,
      skills: ["Copywriting", "Content Planning", "Social Media"],
      isOnline: false,
    },
    {
      name: "Nora Becker",
      role: "Brand Manager",
      rating: 4.8,
      reviews: 11,
      avatar: master_avatar_2,
      skills: ["Brand Strategy", "Visual Identity", "Campaign Management"],
      isOnline: true,
    },
  ],
};

export const logoItems = [
  { id: 1, logo: layer_logo, alt: "LAYER Logo" },
  { id: 2, logo: abbc_logo, alt: "ABBC Logo" },
  { id: 3, logo: acdc_logo, alt: "ACDC Logo" },
  { id: 4, logo: act_logo, alt: "ACT Logo" },
  { id: 5, logo: cng_logo, alt: "CNG Logo" },
  { id: 6, logo: crp_logo, alt: "CRP Logo" },
  { id: 7, logo: discord_logo, alt: "Discord Logo" },
  { id: 8, logo: fns_logo, alt: "FNS Logo" },
  { id: 9, logo: gbt_logo, alt: "GBT Logo" },
  { id: 10, logo: mtv_logo, alt: "MTV Logo" },
  { id: 11, logo: rit_logo, alt: "RIT Logo" },
  { id: 12, logo: s_logo, alt: "S Logo" },
  { id: 13, logo: spotify, alt: "Spotify Logo" },
  { id: 14, logo: tiktok_logo, alt: "TikTok Logo" },
  { id: 15, logo: twitter_logo, alt: "Twitter Logo" },
  { id: 16, logo: ust_logo, alt: "UST Logo" },
  { id: 17, logo: vres_logo, alt: "VRES Logo" },
  { id: 18, logo: wib_logo, alt: "WIB Logo" },
  { id: 19, logo: act_logo, alt: "ACT Logo" },
  { id: 20, logo: gbt_logo, alt: "GBT Logo" },
];

export const talentItems = [
  {
    id: 1,
    name: "Floyd Miles",
    job: "Graphics Designer",
    image: talent_image_1,
  },
  {
    id: 2,
    name: "Brooklyn Simmons",
    job: "UIUX Designer",
    image: talent_image_2,
  },
  {
    id: 3,
    name: "Wade Warren",
    job: "Software Developer",
    image: talent_image_5,
  },
  {
    id: 4,
    name: "Charles Marckley",
    job: "Frontend Developer",
    image: talent_image_4,
  },
  {
    id: 5,
    name: "Steeve Simmons",
    job: "UIUX Designer",
    image: talent_image_6,
  },
  {
    id: 5,
    name: "Paul Clarck",
    job: "UIUX Designer",
    image: talent_image_3,
  },
];

export const customerItems = [
  {
    id: 1,
    name: "Manuel Rikob",
    role: "CEO of Intel",
    desc: "Working with Master in me has been an incredibly painless and enjoyable experience.",
  },
  {
    id: 2,
    name: "Sophia Laurent",
    role: "Product Designer at Figma",
    desc: "Their approach to problem-solving and user-centered design blew us away. Truly top-notch.",
  },
  {
    id: 3,
    name: "David Nkosi",
    role: "Head of Operations at Paystack",
    desc: "From ideation to execution, the team delivered outstanding work and exceeded our expectations.",
  },
  {
    id: 4,
    name: "Chen Wei",
    role: "CTO at ByteDance",
    desc: "Highly professional and creative team. They transformed our vision into a scalable product.",
  },
  {
    id: 5,
    name: "Amira Bensalem",
    role: "Marketing Director at Shopify",
    desc: "Their attention to detail and commitment to quality made our collaboration a success.",
  },
  {
    id: 6,
    name: "Liam O’Connor",
    role: "Founder at EduVerse",
    desc: "Master in me provided the innovative edge we needed to disrupt the EdTech space.",
  },
];

export const frequentlyItems = [
  {
    id: 1,
    num: "01",
    question: "How do I create an account on the job board?",
    answer:
      "To create an account, click on the 'Sign Up' button at the top right corner of the homepage. Fill in your personal details such as name, email address, and password, then submit the form. You will receive a confirmation email to verify your account.",
  },
  {
    id: 2,
    num: "02",
    question:
      "Is there a cost to use the job board, and what features are free?",
    answer:
      "The job board is free for job seekers. You can browse jobs, create a profile, upload your resume, and apply to listings at no cost. Premium features, such as resume boosting or personalized coaching, may be available for a fee.",
  },
  {
    id: 3,
    num: "03",
    question: "How do I update or delete my profile information?",
    answer:
      "Log in to your account, go to your dashboard, and navigate to the 'Profile Settings' section. There, you can update your personal information, resume, skills, and preferences. To delete your profile, use the 'Delete Account' option at the bottom of the settings page.",
  },
  {
    id: 4,
    num: "04",
    question: "How do I apply for a job through the platform?",
    answer:
      "Once you find a job you're interested in, click on the job title to view the full details. Then click the 'Apply Now' button. Depending on the employer, you may apply directly through the platform or be redirected to an external site.",
  },
  {
    id: 5,
    num: "05",
    question: "How can I track the status of my job applications?",
    answer:
      "You can track your applications by logging into your account and accessing the 'My Applications' section in your dashboard. Here, you’ll see the status of each job you've applied to, such as 'Submitted', 'Viewed', 'Interview', or 'Rejected'.",
  },
];
