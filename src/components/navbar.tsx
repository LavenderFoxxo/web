import NextLink from 'next/link';

const pages: Link[] = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "Contact",
        href: "/contact"
    }
]

interface Link {
    name: string;
    href: string;
}

export default function Navbar() {
    return (
        <div className="py-3 mt-4 px-4 mb-8 rounded-lg border border-[#151d28] bg-[#0c1115] my-auto">
            <div className="flex flex-row space-x-2 items-center my-auto">
                <div className="flex-1">
                    <div className="flex space-x-4 my-auto">
                        {pages.map((page) => (
                            <div
                                key={page.name}
                                className="font-semibold cursor-pointer text-white hover:text-gray-300"
                            >
                                <NextLink href={page.href}>{page.name}</NextLink>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}