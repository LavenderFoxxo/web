import { motion } from "framer-motion";
import axios from 'axios';
import { InferGetServerSidePropsType, NextPage } from "next";
import Activity from '../components/lanyard'
import { SiCss3, SiTypescript, SiJavascript, SiHtml5, SiPhp, SiMongodb, SiNextdotjs, SiTailwindcss, SiMarkdown, SiUbuntu, SiYarn, SiSass, SiGit, SiCloudflare} from 'react-icons/si'

export const getServerSideProps = async () => {
    const { data } = await axios.get(
      "https://gh-pinned-repos.egoist.dev/?username=lavenderfoxxo"
    )

    return {
      props: {
        repos: data
      },
    }
}

const positions: Position[] = [
  {
    name: 'Digital Bot',
    href: 'https://digitalbot.xyz',
    position: 'Assistant Developer',
    start: 'January 2023',
    end: null,
  },
  {
    name: 'RadioWiki',
    href: 'https://radiowiki.net',
    position: 'Developer',
    start: 'December 2022',
    end: null
  },
  {
    name: 'Harmony',
    href: 'https://weareharmony.net',
    position: 'Developer',
    start: 'October 2022',
    end: 'January 2023'
  },
  {
    name: 'UpBeat Radio',
    href: 'https://upbeatradio.net',
    position: 'Radio Presenter',
    start: 'January 2023',
    end: null
  }
]

interface Position {
  name: string;
  href: string;
  position: string;
  start: string;
  end: string | null;
}

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;
const Home: NextPage<Props> = ({ repos }) => {
  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <div className="space-y-10 max-w-2xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold">Heya, I'm Alexander 👋</h1>
          <p className="opacity-95">I am a full-stack developer from Canada. I enjoy coding as a hobby and as a passion. However, I find myself leaning towards frontend development, whilst I am proficient in backend, I find frontend more appealing.</p>
        </div>



        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Knowledge 💡</h1>
          <p className="opacity-95 pb-3">Below you'll find languages that I am proficient in. I commonly use Javascript and Typescript for personal projects.</p>
          <div className="w-full flex flex-wrap flex-row justify-center p-1 border border-slate-800 rounded-md bg-white/10 dark:bg-black/10 mb-12">
            <li className="flex p-2">
              <span>{SiCss3({ className: 'h-6 w-6' })}</span>
            </li>
            <li className="flex p-2">
              <span>{SiHtml5({ className: 'h-6 w-6' })}</span>
            </li>
            <li className="flex p-2">
              <span>{SiJavascript({ className: 'h-6 w-6' })}</span>
            </li>
            <li className="flex p-2">
              <span>{SiTypescript({ className: 'h-6 w-6' })}</span>
            </li>
            <li className="flex p-2">
              <span>{SiTailwindcss({ className: 'h-6 w-6' })}</span>
            </li>
            <li className="flex p-2">
              <span>{SiNextdotjs({ className: 'h-6 w-6' })}</span>
            </li>
            <li className="flex p-2">
              <span>{SiPhp({ className: 'h-6 w-6' })}</span>
            </li>
            <li className="flex p-2">
              <span>{SiMongodb({ className: 'h-6 w-6' })}</span>
            </li>
            <li className="flex p-2">
              <span>{SiMarkdown({ className: 'h-6 w-6' })}</span>
            </li>
            <li className="flex p-2">
              <span>{SiUbuntu({ className: 'h-6 w-6' })}</span>
            </li>
            <li className="flex p-2">
              <span>{SiYarn({ className: 'h-6 w-6' })}</span>
            </li>
            <li className="flex p-2">
              <span>{SiSass({ className: 'h-6 w-6' })}</span>
            </li>
            <li className="flex p-2">
              <span>{SiGit({ className: 'h-6 w-6' })}</span>
            </li>
            <li className="flex p-2">
              <span>{SiCloudflare({ className: 'h-6 w-6' })}</span>
            </li>
          </div>
        </div>
        <Activity />
      </div>
      </motion.div>
    </>
  )
}

export default Home