export default function About() {
    return (
        <section className="mb-8" id="about">
            <h2 className="text-3xl font-bold mb-6 dark:text-gray-100 tracking-wide">
                About Me
            </h2>
            <div className="space-y-4 dark:text-gray-300">
                <p>
                    I&apos;m a {new Date().getFullYear() - 2003}-year-old newly
                    graduated university student from the University of Toronto
                    with a strong foundation in web development, IT support, and
                    multimedia production. I&apos;m passionate about technology,
                    solving problems creatively, and working with others.
                </p>
                <p>
                    In my early career, I worked in digital media production and
                    web design, creating content, managing social media, and
                    developing visual materials. I also redesigned websites and
                    created UI prototypes with industry tools. These roles helped
                    me build skills in digital content creation and UX design.
                </p>
                <p>
                    In high school, I specialized in graphic design with
                    additional studies in film, IT, and design. I participated in
                    student council, GeekForce tech club, and Tiger Sports
                    Entertainment Network. These activities earned me the CAS
                    Award and built foundational skills relevant to my current
                    interests.
                </p>
                <p>
                    In my spare time, I like experimenting with different
                    operating systems like Linux and self-hosting various services
                    to learn more about technology. As for hobbies, I like to
                    read manga, watch anime, and play video games.
                </p>
            </div>
        </section>
    );
}
