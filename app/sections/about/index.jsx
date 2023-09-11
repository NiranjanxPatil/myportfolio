import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <LazyMotion features={domAnimation}>
            <section id="about" className="section">
                <HeadingDivider title="About Me" />

                <div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
                    <div
                        tabIndex="0"
                        ref={ref}
                        className="text-xl font-light leading-relaxed transition-transform transform-glide-in opacity-visible"
                    >
                        <p>
                            Hey there! I'm <span className="bg-yellow-600 text-black px-2 rounded-lg">Niranjan</span>, and I'm passionate about <span className="bg-yellow-600 text-black px-2 rounded-lg">AI/ML engineering</span> and <span className="bg-yellow-600 text-black px-2 rounded-lg">computer science</span>.
                        </p>
                        <p>
                            During my university years, I immersed myself in various technologies, continuously expanding my knowledge.
                        </p>
                        <p>My programming journey officially began in <span className="bg-yellow-600 text-black px-2 rounded-lg">2020</span> when I delved into the world of <span className="bg-yellow-600 text-black px-2 rounded-lg">Java</span>.</p>
                        <p className="my-3.5">
                            I thrive on learning technologies that fascinate me, dedicating considerable time to mastering <span className="bg-yellow-600 text-black px-2 rounded-lg">Java</span>.
                        </p>
                        <p>
                            One day, I decided to embark on a new adventure and began my journey with <span className="bg-yellow-600 text-black px-2 rounded-lg">React</span>. The speed at which I could develop websites amazed me. Subsequently, I swiftly conquered <span className="bg-yellow-600 text-black px-2 rounded-lg">Next.js</span> and ventured into app development, building useful projects while learning independently.
                        </p>
                        <p className="my-3.5">
                            In <span className="bg-yellow-600 text-black px-2 rounded-lg">2023</span>, I seized the opportunity to work as a <span className="bg-yellow-600 text-black px-2 rounded-lg">Next.js developer</span> and <span className="bg-yellow-600 text-black px-2 rounded-lg">DevOps engineer</span>, driven by self-improvement and the desire to contribute to the community and open source projects.
                            I'm continuously learning and growingg, and I'm excited for what lies ahead.
                        </p>
                    </div>
                </div>

                <TimeLine />
            </section>
        </LazyMotion>
    );
}
