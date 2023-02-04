
import axios from 'axios';
import { useRef, useState } from 'react';
import { ImSpinner2 } from "react-icons/im";
import { RiSendPlane2Fill } from "react-icons/ri";

const ContactForm = () => {
    const name = useRef<string>("")
    const email = useRef<string>("")
    const message = useRef<string>("")

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const EmailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

    const submitMessage = async () => {
        if (email.current == "" || name.current == "" || message.current == "") return setError('Fill out all fields!');
        if (!EmailRegex.test(email.current)) return setError('I believe you entered an incorrect email.');

        setLoading(true)

        try {
            const response = await axios.post('/api/submit', {
                name: name.current,
                email: email.current,
                message: message.current
            })
        } catch (err: any) {
            if (err) {
                setError('Oops...Something went wrong')
                setLoading(false)
                return;
            }
        }

        setLoading(false)

        return setError('Message submitted successfully!')
    }

    return (
        <div className="md:col-span-2 row-span-3 bg-opacity-50 bg-[#231a29] rounded-lg p-4 border border-[#39313f]">
            <h1 className="font-bold text-md ml-1 mb-1">Name</h1>
            <input
                placeholder="Marino Franz"
                type="text"
                onChange={(e: any) => (name.current  = e.target.value)}
                className="w-full p-2 mb-4 rounded-md bg-[#39313f] text-sm placeholder:opacity-90"
            />
            <h1 className="font-bold text-md ml-1 mb-1">Email</h1>
            <input
                placeholder="your@email.com"
                type="text"
                onChange={(e: any) => (email.current  = e.target.value)}
                className="w-full p-2 mb-4 rounded-md bg-[#39313f] text-sm placeholder:opacity-90"
            />
            <h1 className="font-bold text-md ml-1 mb-1">Message</h1>
            <textarea
                placeholder="Hey, how's it hanging Alexander?"
                onChange={(e: any) => (message.current  = e.target.value)}
                className="w-full p-2 h-36 mb-4 rounded-md bg-[#39313f] text-sm placeholder:opacity-90"
            />

            <div className="w-full flex flex-row justify-between items-center">
                <p className="opacity-90 text-sm">{error}</p>

                <button
                    onClick={submitMessage}
                    className="border bg-[#39313f] p-2 rounded-md border-[#231a29] hover:bg-[#201c23] flex flex-row items-center transition-all"
                >
                    <span className="mt-[2px]">Send</span>
                    {!loading && <RiSendPlane2Fill className="ml-2 mt-[2px]" />}
                    {loading && <ImSpinner2 className="w-4 h-4 ml-2 animate-spin" />}
                </button>
            </div>
        </div>
    )
}

export default ContactForm
