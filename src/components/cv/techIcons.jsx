import { Code2 } from "lucide-react";
import { FaAws } from "react-icons/fa6";
import { TbBrandVscode } from "react-icons/tb";
import {
  SiCss,
  SiDart,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGitforwindows,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiNestjs,
  SiNodedotjs,
  SiNpm,
  SiPostman,
  SiReact,
  SiRender,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";

const iconMap = {
  javascript: SiJavascript,
  javascriptes6: SiJavascript,
  typescript: SiTypescript,
  html: SiHtml5,
  html5: SiHtml5,
  css: SiCss,
  css3: SiCss,
  react: SiReact,
  reactnative: SiReact,
  flutter: SiFlutter,
  dart: SiDart,
  vite: SiVite,
  tailwind: SiTailwindcss,
  tailwindcss: SiTailwindcss,
  nodejs: SiNodedotjs,
  express: SiExpress,
  expressjs: SiExpress,
  nestjs: SiNestjs,
  mongodb: SiMongodb,
  mongoose: SiMongoose,
  supabase: SiSupabase,
  firebase: SiFirebase,
  git: SiGit,
  gitbash: SiGitforwindows,
  github: SiGithub,
  postman: SiPostman,
  npm: SiNpm,
  vscode: TbBrandVscode,
  aws: FaAws,
  vercel: SiVercel,
  render: SiRender,
};

function normalize(value = "") {
  return value.toLowerCase().replace(/\(.*?\)/g, "").replace(/[^a-z0-9]/g, "");
}

export function getTechIcon(label) {
  const key = normalize(label);
  return iconMap[key] ?? Code2;
}
