export default function Footer() {
    return (
        <div className="py-6 mb-2">
            <hr className="mt-3 h-px border-[#39313f] bg-[#231a29] border border-1" />
            <div className="flex items-center justify-between mt-4">
                <p className="opacity-95">Alexander Hyman - {" "}
                <span className="font-semibold">{new Date().getFullYear()}</span>
                </p>
            </div>
        </div>
    )
}