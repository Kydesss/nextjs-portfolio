import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <div className="sticky w-full flex justify-center items-center top-0 z-10 h-24">
                <nav>
                    <ul className="flex items-center text-sm py-5 px-6 gap-6 dark:text-white bg-white/30 dark:bg-neutral-800/30 backdrop-blur-lg rounded-md">
                        <li>
                            <Link href="/#about">
                                <p className="hover:text-gray-500 transition ease-in">
                                    About
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/#experience">
                                <p className="hover:text-gray-500 transition ease-in">
                                    Experience
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/#education">
                                <p className="hover:text-gray-500 transition ease-in">
                                    Education
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/#projects">
                                <p className="hover:text-gray-500 transition ease-in">
                                    Projects
                                </p>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
