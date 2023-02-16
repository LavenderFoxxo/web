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
    } else if (data?.activities.length != 0) {
        if (data?.activities[0].id === "custom") {
            if (data?.activities[1]) activity = `${data?.activities[1].name} - ${data?.activities[1].state}`
            else activity = 'Not doing anything 💤'
        } else if (!data?.activities[1]) {
            activity = `${data?.activities[0].name} - ${data?.activities[0].state}`
        } else {
            activity = 'Not doing anything 💤'
        }
    } else {
        activity = 'Not doing anything 💤'
    }

    let status
    let status1

    if (data.discord_status === "offline") {
        status = `absolute w-3 h-3 bg-gray-600 rounded-full animate-ping`
        status1 = `absolute w-3 h-3 bg-gray-600 rounded-full`
        activity = null
    } else if (data.discord_status === "dnd") {
        status = `absolute w-3 h-3 bg-red-600 rounded-full animate-ping`
        status1 = `absolute w-3 h-3 bg-red-600 rounded-full`
    } else if (data.discord_status === "online") {
        status = `absolute w-3 h-3 bg-green-600 rounded-full animate-ping`
        status1 = `absolute w-3 h-3 bg-green-600 rounded-full`
    } else {
        status = `absolute w-3 h-3 bg-yellow-600 rounded-full animate-ping`
        status1 = `absolute w-3 h-3 bg-yellow-600 rounded-full`
    }

    return (
        <div className="rounded-lg p-2 w-full border-[#39313f] bg-[#231a29] border flex flex-row">
            <img
                src={`https://www.itsalexander.dev/Lavender.png`}
                alt="Discord Avatar"
                className="w-[100px] rounded-lg hover:scale-105 transition-all"
            />
            <div className="flex-col ml-5 my-auto">
                <p className="font-bold text-lg flex">
                    {data.discord_user.username}{"#"}{data.discord_user.discriminator}
                    <span className="ml-2 w-3 h-3 pt-2">
                    <span className={status} />
                    <span className={status1} />
                    </span>
                </p>
                <p v-if="data.activities.length >= 1" className="font-normal text-md">
                    {activity}
                </p>
            </div>
        </div>
    )
}