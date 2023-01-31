import { motion } from "framer-motion";
import axios from 'axios';
import { InferGetServerSidePropsType, NextPage } from "next";
import Activity from '../components/lanyard'
import { SiCss3, SiTypescript, SiJavascript, SiHtml5, SiPhp, SiMongodb, SiNextdotjs, SiTailwindcss, SiMarkdown, SiUbuntu, SiYarn, SiSass, SiGit, SiCloudflare} from 'react-icons/si'
import { useLanyardWS } from 'use-lanyard';
import Lanyard from '../components/activity'


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
  const data = useLanyardWS("988801425196867644")

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
          <p className="opacity-95 ">Below you'll find languages that I am proficient in. I commonly use Javascript and Typescript for personal projects.</p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            <div className="flex items-center space-x-2">
              {SiJavascript({ className: "w-6 h-6" })}
              <p className="my-auto pt-1">Javascript</p>
            </div>
            <div className="flex items-center space-x-2">
              {SiTypescript({ className: "w-6 h-6" })}
              <p className="my-auto pt-1">Typescript</p>
            </div>
            <div className="flex items-center space-x-2">
              {SiPhp({ className: "w-6 h-6" })}
              <p className="my-auto pt-1">PHP</p>
            </div>
            <div className="flex items-center space-x-2">
              {SiHtml5({ className: "w-6 h-6" })}
              <p className="my-auto pt-1">HTML</p>
            </div>
            <div className="flex items-center space-x-2">
              {SiCss3({ className: "w-6 h-6" })}
              <p className="my-auto pt-1">CSS</p>
            </div>
          </div>

        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold">What am I doing? 🤔</h1>
          <Lanyard />
        </div>
        <Activity />
      </div>
      </motion.div>
    </>
  )
}

export default Home