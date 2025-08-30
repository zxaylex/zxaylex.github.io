import Image from "next/image";
import GithubLogo from '@/public/github-logo.svg';
import FacebookLogo from '@/public/facebook-logo.svg';
import InstagramLogo from '@/public/instagram-logo.svg';
import ProjectCard from "@/components/card";
import ExperienceTimeline from "@/components/timeline";
import { SkillsSection } from "@/components/skills";
import { ContactsPage } from "@/components/contacts";

const projects = [
  {
    image: "/tidalchain.png",
    title: "TidalChain | Team of 4",
    subtitle: "1st Runner up in Philippine Blockchain Week 2025",
    description: "A blockchain-powered platform connecting sustainable fish producers with global investors and buyers through tokenization. Built on ICP (Internet Computer Protocol) with transparent, traceable, and profitable aquaculture solutions.",
    link: "https://github.com/npesaras/TidalChain"
  },
  {
    image: "/likai.png",
    title: "LikAI | Team of 5",
    subtitle: "Currently in the national round of WCHL 2025",
    description: "LikAI is a B2B platform that gives processors the tools to turn their small shrimp aquafarm suppliers into a compliant, resilient, and fully traceable network. We do this through three core components.",
    link: "https://github.com/Web3-Iligan/LikAI"
  },
]

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen p-4">
      <main>
        <section id="home" className="pt-16 h-dvh justify-items-center">
          <div className="items-center justify-items-center p-4">
            <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold">Hi! I am Zach David</h1>
            <h2 className="lg:text-3xl md: text-xl sm:text-lg text-blue-900 font-medium text-center">A Backend Developer and Software Enthusiast</h2>
          </div>

          <div className="justify-items-center sm:justify-items-center lg:flex w-full gap-20 p-6">
            <img src="/profile.jpg" alt="profile" className="w-50 sm:justify-center rounded-lg sm:w-20 md:w-40 lg:w-80 "/>

            <div className="flex-1 flex flex-col p-6">
            <p className="max-w-3xl lg:text-lg md:text-lg sm:text-md">Hello! I'm Zach, a Backend Developer with a passion for building the future of the web—both on Web2 and Web3. From crafting secure backend systems to developing cutting-edge blockchain applications, I love bringing innovative ideas to life.<br></br></p>
            <p><br />Age: 21</p>
            <p>Status: Single</p>
            <div className="pt-3 w-full mt-auto">
              <ul className="flex gap-4">
                <li><a href="https://instagram.com/zenzxay"><Image src={InstagramLogo} width={32} height={32} alt="github"></Image></a></li>
                <li><a href="https://facebook.com/zenzxay.bruh"><Image src={FacebookLogo} width={32} height={32} alt="facebook"></Image></a></li>
                <li><a href="https://github.com/zxaylex"><Image src={GithubLogo} width={32} height={32} alt="github"></Image></a></li>
              </ul>
            </div>
            </div>
          </div>
        </section>
        <section id="projects" className="sm:h-dvh p-4 pt-20 justify-items-center">
          <h1 className="text-2xl">Projects</h1>
          <div className="sm:flex gap-4 pt-4"> 
            {
              projects.map((project, idx) => (
                <ProjectCard
                  key={idx}
                  image={project.image}
                  title={project.title}
                  subtitle={project.subtitle}
                  description={project.description}
                  link={project.link}
                />
              ))
            }
          </div>
        </section>
        <section id="experience" className="lg:h-dvh p-4 pt-20 justify-items-center">
            <h1 className="mb-10 text-2xl">Experience</h1>
            <ExperienceTimeline></ExperienceTimeline>
        </section>
        <section id="tools" className="lg:h-dvh p-4 pt-20 items-center justify-items-center">
            <h1 className="mb-10 text-2xl">Tools I Use</h1>
            <SkillsSection></SkillsSection>
        </section>
        <section id="contacts" className="h-dvh p-4 pt-20 justify-items-center">
            <h1 className="mb-10 text-2xl">Contacts</h1>
            <ContactsPage></ContactsPage>
        </section>
      </main>
    </div>
  );
}
