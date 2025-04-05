import { RevealOnScroll } from "../RevealOnScroll";
import {Link} from "react-scroll";

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            
            <RevealOnScroll>
                <div className="flex flex-row-reverse justify-between h-[600px] p-5 ml-10 mr-10 items-center gap-10 max-lg:flex-col max-lg:mt-16 max-lg:mb-40 ">
                    <img 
                    src="/logo.svg" 
                    alt="logo"
                    className="w-full  max-md:h-[325px] max-lg:h-[350px] max-sm:h-[350px] "
                    />

                    <div className="relative flex flex-col items-center justify-center space-y-4 md:w-full text-center lg:mr-16">
                        <h1 className="text-[2.75rem] mb-3 max-md:text-[2rem] lg:text-[2.5rem]">
                            Refine your audio with Tonic
                        </h1>
                        
                        <p className="text-gray-400 text-[1.4rem] mb-10">
                        Introducing the free effect rack plugin you never knew you needed 
                        </p>

                        <Link 
                        to="projects"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-50}
                        className=" bg-purple-dark text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
                                        hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:cursor-pointer "
                        >
                            Download now
                        </Link>    

                    </div>
                </div>
            </RevealOnScroll>
            
        </section>
    );
}