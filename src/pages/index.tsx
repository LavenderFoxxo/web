import { motion } from "framer-motion";
import axios from "axios";
import { IconType } from "react-icons";
import { InferGetServerSidePropsType, NextPage } from "next";
import {
  SiCss3,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiPhp,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiMarkdown,
  SiUbuntu,
  SiYarn,
  SiSass,
  SiGithub,
  SiTwitter,
  SiGit,
  SiCloudflare,
} from "react-icons/si";
import {HiOutlineLocationMarker} from 'react-icons/hi';
import Lanyard from "../components/activity";
import type {Data as LanyardData, LanyardResponse} from 'use-lanyard';
import {LanyardError, useLanyard} from 'use-lanyard';

export const getServerSideProps = async () => {
  const { data } = await axios.get(
    "https://gh-pinned-repos.egoist.dev/?username=lavenderfoxxo"
  );



  return {
    props: {
      repos: data,
    },
    
  };
};

const skills: Skills[] = [
  {
    icon: SiJavascript,
    description: "JavaScript",
  },
  {
    icon: SiTypescript,
    description: "TypeScript",
  },
  {
    icon: SiHtml5,
    description: "HTML",
  },
  {
    icon: SiCss3,
    description: "CSS",
  },
  {
    icon: SiPhp,
    description: "PHP",
  },
  {
    icon: SiNextdotjs,
    description: "Next.js",
  },
  {
    icon: SiTailwindcss,
    description: "Tailwind",
  },
  {
    icon: SiMarkdown,
    description: "Markdown",
  },
  {
    icon: SiUbuntu,
    description: "Ubuntu",
  },
  {
    icon: SiYarn,
    description: "Yarn",
  },
  {
    icon: SiCloudflare,
    description: "Cloudflare",
  },
  {
    icon: SiGit,
    description: 'Git'
  }
];

interface Skills {
  icon: IconType;
  description: string;
}

const positions: Position[] = [
  {
    name: "RadioWiki",
    href: "https://radiowiki.net",
    position: "Developer",
    start: "December 2022",
    end: null,
  },
  {
    name: "Harmony",
    href: "https://weareharmony.net",
    position: "Developer",
    start: "October 2022",
    end: "January 2023",
  },
  {
    name: "Bright Star Hosting",
    href: "https://brightstarhosting.com",
    position: "Developer",
    start: "January 2023",
    end: null,
  },
  {
    name: "UpBeat Radio",
    href: "https://upbeatradio.net",
    position: "Radio Presenter",
    start: "January 2023",
    end: null,
  },
];

interface Position {
  name: string;
  href: string;
  position: string;
  start: string;
  end: string | null;
}


type Props = InferGetServerSidePropsType<typeof getServerSideProps>;
const Home: NextPage<Props> = ({ repos }) => {
  const {data: lanyard} = useLanyard("988801425196867644");


  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
      >
        <div className="space-y-10">
          <div className="space-y-4">
          <div className="flex items-center space-x-3">
					<a
						href="https://github.com/LavenderFoxxo"
						target="_blank"
						rel="noreferrer"
            className="hover:scale-105 transition-all"
						aria-label="GitHub Profile"
					>
						<SiGithub className="h-7 w-7" />
						<span className="sr-only">GitHub Profile</span>
					</a>

					<a
						href="https://twitter.com/lavenderfolf"
						target="_blank"
						rel="noreferrer"
            className="hover:scale-105 transition-all"
						aria-label="Twitter Profile"
					>
						<SiTwitter className="h-7 w-7" />
						<span className="sr-only">Twitter Profile</span>
					</a>

					{lanyard && (
						<p className="inline-flex items-center space-x-2">
							<a
                href="https://www.google.com/search?q=Oceanside,%20CA"
								target="_blank"
								rel="noreferrer"
								className="hover:scale-105 transition-all h-7 flex items-center rounded-full bg-[#39313f] px-2 pr-3 "
							>
								<span>
									<HiOutlineLocationMarker className="inline" />
									&nbsp;
								</span>

								<span className="-mb-0.5">
									{lanyard.kv.location}
									&nbsp;
								</span>

								<span className="-mb-0.5 ml-1 block h-[6px] w-[6px] animate-pulse rounded-full bg-neutral-600 dark:bg-white" />
							</a>
						</p>
					)}
				</div>
            <h1 className="text-5xl font-bold">Heya, I'm Alexander 👋</h1>
            <p className="opacity-95">
              I am a full-stack developer from Canada. I enjoy coding as a hobby
              and as a passion. However, I find myself leaning towards frontend
              development, whilst I am proficient in backend, I find frontend
              more appealing.
            </p>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-bold">My Skills 💡</h1>
            <p className="opacity-95 ">
              Below you'll find languages that I am proficient in. I commonly
              use Javascript and Typescript for personal projects.
            </p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {skills.map((skill) => (
                <div className="flex items-center space-x-2" key={skill.description}>
                  {skill.icon({ className: "w-6 h-6" })}
                  {<p className="my-auto">{skill.description}</p>}{" "}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-bold">What I'm Working On  💼</h1>
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
              {positions.map((position) => (
                <motion.a
                className="border-[#39313f] bg-[#231a29] border border-b-4 cursor-pointer p-3 py-4 rounded-lg hover:scale-105 transition-all"
                whileTap={{ scale: 0.98 }}
                href={position.href}
                target="_blank"
                key={position.name}
              >
                <p className="font-bold">{position.name}</p>
                <p>{position.position}</p>
                <p className="opacity-80">
                  {position.start} - {position.end === null ? "Present" : position.end}
                </p>
              </motion.a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-bold">My Repositories 💻</h1>
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
            {repos.map((pin: any, id: number) => (
              <motion.a
                className={`hover:scale-105 transition-all space-x-3 bg-white/5 border border-white/10 border-b-4 cursor-pointer p-3 py-4 rounded-lg`}
                key={id}
                whileTap={{ scale: 0.98 }}
                href={pin.link}
                target="_blank"
              >
                <p className="font-semibold">
                  <span className="opacity-80 font-normal">{pin.owner} </span>/{" "}
                  {pin.repo}
                  <br/>
                  <span className="font-normal opacity-80">{pin.description}</span>
                </p>
              </motion.a>
            ))}
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-bold">What I'm Up To 🖥️</h1>
            <Lanyard />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
