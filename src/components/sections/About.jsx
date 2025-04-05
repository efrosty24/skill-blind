import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const techs = ["Python", "C++", "JavaScript", "Figma", "Notion", "Trello"];
    const webTechs = ["Node.js", "React", "TailwindCSS", "JavaScript", "HTML", "CSS"];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">

            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4 ">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-pink-400 bg-clip-text text-transparent text-center">
                        About Me
                        </h2>
                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all ">
                        <p className="text-gray-300 mb-4">
                        Hi, I’m Evan, a passionate software developer and audio enthusiast with a strong drive for innovation and problem-solving. My journey in tech is fueled by my love for music and sound design, which led me to create Tonic Audio, a free-to-use audio plugin that merges my interests in coding, digital signal processing, and user-friendly design.
                        </p>
                        <p className="text-gray-300 mb-4">
                            Beyond software development, I enjoy learning how things work—whether it’s hardware systems, new programming frameworks, or even installing custom car sound systems for myself and friends. I thrive on picking up new skills quickly and applying them effectively, whether it’s in coding, music production (using Logic Pro), or even brewing the perfect cup of coffee or matcha at home.
                            </p>
                        <p className="text-gray-300 mb-4">
                            In my free time, you’ll find me playing the guitar and bass, collecting vinyl records, or diving into the latest video games—currently hooked on Marvel Rivals and Fortnite. I also love discussing anime and TV shows because I enjoy seeing different creative perspectives.

                        </p>

                        <p className="text-gray-300 mb-4">
                            I’m actively seeking opportunities where I can apply my technical skills, collaborate with a great team, and continue learning. If you’re looking for a quick learner, a dedicated problem-solver, and someone who genuinely enjoys bringing ideas to life, let’s connect!
                            </p>
                        
                
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {techs.map((skill, key) => {
                                        return (
                                            <span
                                            key={key}
                                            className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-s, hover:bg-red-500/20
                                            hover:shadow-{0_2px_8px_rgba(59,130,246,0.2)] transition"
                                            >{skill}</span>
                                        )
                                    }
                                )}
                                </div>
                            </div>
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Web Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {webTechs.map((skill, key) => {
                                        return (
                                            <span
                                            key={key}
                                            className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-s, hover:bg-red-500/20
                                            hover:shadow-{0_2px_8px_rgba(59,130,246,0.2)] transition"
                                            >{skill}</span>
                                        )
                                    }
                                )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid frid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="rounded-xl p-6 border-white/10  border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li className="text-gray-400/60 list-none">
                                    <strong className="text-gray-300">B.S. Computer Science</strong> <br/>University of Houston 2024-2026 <br/>GPA: 3.3
                                </li>
                                <li className="mb-6">
                                    Coursework:  Computer Architecture, Operating Systems
                                </li>

                                <li className="text-gray-400/60 list-none">
                                    <strong className="text-gray-300">A.S. Computer Science</strong> <br/>San Jacinto College 2023-2025 <br/>GPA: 3.6
                                </li>
                                <li>
                                    Coursework: Data Structures, Intro to Programming, Calculus I-II
                                </li>

                            </ul>
                            
                        </div>
                        <div className="rounded-xl p-6 border-white/10  border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">🧳 Work Experience</h3>
                            <div className="space-y-6 text-gray-300">
                                <div>
                                    <h4 className="font-semibold mb-2">Team Manager at CodeCoogs <br/><span className="text-gray-400/60">Houston, TX | 2025-Present</span> </h4>
                                    <p>
                                       Managed teams to create a more effiecient workflow for all members
                                    </p>
                                </div>

                                <div>
                                    <h4 className=" text-white font-semibold mb-2">Team Lead at CodeCoogs <br/><span className="text-gray-400/60">Houston, TX | 2024-Present</span></h4>
                                    <p className="">
                                        Leading the Development of a free-to-use audio plugin for professionals and hobbiests alike
                                    </p>
                                </div>
                         
                                <div>
                                    <h4 className="font-semibold mb-2">eStore Shopper at H-E-B <br/><span className="text-gray-400/60">Manvel, TX | 2022-Present</span> </h4>
                                    <p>
                                        Fulfill online orders for customers and provide excellent customer service
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}