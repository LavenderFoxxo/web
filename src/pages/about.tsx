import { motion } from "framer-motion";
import axios from "axios";
import { InferGetServerSidePropsType, NextPage } from "next";
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

export const getServerSideProps = async () => {
  const { data } = await axios.get(
    `https://api.itsalexander.dev/spotify/toptracks`
  );
  const { data: data1 } = await axios.get(
    `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=lavenderleaff&api_key=${process.env.LASTFM}&format=json&limit=1&period=7day`
  );

  return {
    props: {
      tracks: data,
      single: data1
    },
  };
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;
const About: NextPage<Props> = ({ tracks, single }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
      >
        <div className="space-y-10 max-w-2xl mx-auto">
            <div className="space-y-4">
                <h1 className="text-5xl font-bold">About</h1>
                <img src="/banner.png" width="1000px" className="block rounded-xl object-cover shadow-xl shadow-neutral-300 dark:shadow-none" />
                <p className="opacity-95">
                Hey there, I'm a developer from Canada. I'm into simulation games like Euro Truck Sim 2, and X-Plane 12. I happen to be a huge fan of React and Next and tell anyone who doesn't like it that their opinion is wrong haha. I contribute to many communities such as <a href="/fluff" className="font-bold">Fluff</a>. I've been programming since I was 10 years old, and dropped it for about 3-4 years before picking it back up in High School. I absolutely love music and as you'll see below I have quite a taste in music!
                </p>
            </div>
            <div className="space-y-4">
                <h1 className="text-3xl font-bold">Music</h1>
                <p className="opacity-95">
                I have listened to a lot of music over the years, there's just so many options! In the past week, I've played the song <a className="font-bold">{single.toptracks.track[0].name}</a> by <a className="font-bold">{single.toptracks.track[0].artist.name}</a> exactly <a className="font-bold">{single.toptracks.track[0].playcount} times</a>, however below you'll find some of my top tracks from the past month!
                </p>
                <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
                  {tracks.data.body.items.map((track: { external_urls: { spotify: string | undefined; }; id: Key | null | undefined; album: { images: { url: string | undefined; }[]; }; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; artists: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }[]; }) => (
                    <motion.a
                    className="border-[#39313f] bg-[#231a29] border border-b-4 cursor-pointer p-3 py-4 rounded-lg hover:scale-105 transition-all flex flex-row"
                    whileTap={{ scale: 0.98 }}
                    href={track.external_urls.spotify}
                    target="_blank"
                    key={track.id}
                  >
                    <img src={track.album.images[2].url} className="rounded-lg"/>
                    <div className="flex-col ml-5 my-auto">
                      <p className="font-Sbold flex">{track.name}</p>
                      <p className="font-thin flex">{track.artists[0].name}</p>
                    </div>
                  </motion.a>
                  ))}
                </div>
            </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
