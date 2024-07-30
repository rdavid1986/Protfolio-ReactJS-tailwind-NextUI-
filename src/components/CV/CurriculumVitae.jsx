import "./cv.css";
import ScrollToTopButton from "../Buttons/ScrollToTopButton";
import PrintSectionButton from "../PrintSectionButton/PrintSectionButton";

export default function CurriculumVitae() {
    return (
        <>
            <PrintSectionButton />
            <div className="w-3/5 bg-white pt-20 pl-40 mb-20">
                <section className="sectionCV" id="sectionCV">
                    <h1 className="w-10 font-extrabold text-6xl mb-20 ">David Rodriguez</h1>
                    <p className="font-bold text-black">Contact:</p>
                    <ul>
                        <li className="font-bold">Cel Phone: +54 011-3311-2388</li>
                        <li className="font-bold">Address: Almafuerte 756, Luis Guillon,Buenos Aires,Argentina</li>
                    </ul>
                    <p className="mb-5 mt-5 font-bold text-black">Aspiring for a Full-Time Position</p>
                    <p className="mt-5 mb-5 text-4xl font-bold text-black">Professional Profile</p>
                    <p className="text-black">Web developer and programmer with experience in both frontend and backend development.Skilled in varius technologies and programming languajes such as javaScript, ReactJs and NodeJs. Iseek to contribute to challenging and dynamic projects.</p>
                    <p className="mt-5 mb-5 text-4xl font-bold text-black">Skills</p>
                    <ul>
                        <li>Teamwork and goal-oriented</li>
                        <li>Web development(HTML,CSS)</li>
                        <li>Programming in javaScript</li>
                        <li>Programming with ReactJs Framework</li>
                        <li>Backend development with Node.js</li>
                        <li>Express,BoSQL databases</li>
                        <li>Interface development</li>
                        <li>Intermediate English</li>
                    </ul>
                    <p className="mt-5 mb-5 text-4xl font-bold text-black">Work experience</p>

                    <p className="font-bold text-3xl mt-4 mb-4 text-black">Freelance Web Developer</p>
                    <p className=" text-xl mt-4 mb-4 text-black">Buenos Aires 2022 - Present</p>
                    <ul>
                        <li>Web development (HTML, CSS) and programming in javaScript</li>
                        <li>Creation of web aplications with ReactJs Framework</li>
                    </ul>

                    <p className="font-bold text-3xl mt-4 mb-4 text-black">Profesional driver and customer services</p>
                    <p className=" text-xl mt-4 mb-4 text-black">Combis Monte Grande Bus, Buenos Aires , 2019 - Present</p>
                    <ul>
                        <li>Professional passager transport driver</li>
                        <li>Development and manteinance of the company's website</li>
                        <li>Traffic control and unit coordination</li>
                        <li>Customer service and problem resolution</li>
                    </ul>

                    <p className="font-bold text-3xl mt-4 mb-4 text-black">Order Assembly and Production Manager</p>
                    <p className=" text-xl mt-4 mb-4 text-black">Artesanal Oviedo, Buenos Aires 2005 - 2017</p>
                    <ul>
                        <li>Responsible for the order assembly sector</li>
                        <li>Team leader for order assembly and dispatch</li>
                        <li>Supervised 5 people</li>
                        <li>Customer service and problem resolution</li>
                    </ul>

                    <p className="font-bold text-4xl mt-4 mb-4 text-black">Academic Background</p>
                    <p className="text-3xl mt-4 mb-4 text-black">Certified Studies:</p>
                    <p className="font-bold text-3xl mt-4 mb-4 text-black">Front-End Developer</p>
                    <p className=" text-xl mt-4 mb-4 text-black">CoderHouse, Buenos Aires , 2022 - 2022</p>
                    <ul>
                        <li>Web Developer (HTML, CSS)</li>
                        <li>javaScript Developer</li>
                        <li>ReactJs Developer</li>
                    </ul>

                    <p className="font-bold text-3xl mt-4 mb-4 text-black">Back-End Developer</p>
                    <p className=" text-xl mt-4 mb-4 text-black">CoderHouse, Buenos Aires, 2023 - 2023</p>
                    <ul>
                        <li>NodeJs Developer</li>
                        <li>Back-End. NodeJS, Express , And NoSQL Databases</li>
                    </ul>

                    <p className="font-bold text-3xl mt-4 mb-4 text-black">Secondary Education Completed :</p>
                    <p className=" text-xl mt-4 mb-4 text-black">Luis Guillon, Buenos Aires , Argentina</p>
                    <p className=" text-xl mt-4 mb-9 pb-9 text-black">High School Nº 203 Martin Miguel de Güemes 2000 - 2004</p>

                </section>
            </div>
            <ScrollToTopButton />
        </>
    );
}
