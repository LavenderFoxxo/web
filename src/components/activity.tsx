import { useLanyardWS } from 'use-lanyard';

export default function Lanyard() {
    const data = useLanyardWS("988801425196867644")

    if (!data) return null;

    let activity 

        if (data?.listening_to_spotify && data.spotify !== null) {
            const playing = data.spotify;
            const title = playing.song;
            const artist = playing.artist;

            activity = `Listening to ${title} by ${artist}`
        } else {
            activity = `${data?.activities[0].name} - ${data?.activities[0].state}`
        }

    function Status() {
        if (data?.discord_status === "offline") {
            return (
                <>
                    <span className="absolute w-4 h-4 bg-red-600 rounded-full animate-ping" />
                    <span className="absolute w-4 h-4 bg-red-600 rounded-full" />
                </>

            )
        }
    }

    return (
        <div className="rounded-lg p-2 w-full border-[#151d28] bg-[#0c1115] border flex flex-row">
            <img
                src={`https://www.itsalexander.dev/static/Lavender_cropped.png`}
                alt="Discord Avatar"
                className="w-[100px] rounded-lg hover:scale-105 transition-all"
            />
            <div className="flex-col ml-5 my-auto">
                <p className="font-bold text-lg flex">
                    {data.discord_user.username}{"#"}{data.discord_user.discriminator}
                    <span className="ml-2 w-4 h-4 pt-1">
                        {Status}
                    </span>
                </p>
                <p v-if="data.activities.length >= 1" className="font-normal text-md">
                    {activity}
                </p>
            </div>
        </div>
    )
}