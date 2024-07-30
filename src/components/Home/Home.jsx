import "./home.css"

import webDevelopment from "/certificate/webDevelopment.png"
import javaScriptDeveloper from "/certificate/javaScript.png"
import reactDeveloper from "/certificate/reactJs.png"
import backendDeveloper from "/certificate/backend.png"
import perfil from "/Perfil.png"
import { Accordion, AccordionItem } from "@nextui-org/react";
import ScrollToTopButton from "../Buttons/ScrollToTopButton";

export default function Home() {
    return (
        <>
            <div className="items-center gap-[150px] p-[50px] flex flex-col sm:flex-row">
                <h1 className="text-[50px] text-mygray">Hi, i'm <p className="text-blue-600 "><strong>David Rodriguez</strong></p></h1>
                <img className="w-[300px] h-auto filter brightness-[0.9] custom-mask" src={perfil} alt="Perfil Photo" />
            </div>
            <div>
                <h1 className="inline-block text-mygray border-r-4 overflow-hidden w-full whitespace-nowrap animate-typing text-[50px] animate-typing">Frontend Developer .</h1>
            </div>

            <section className="flex flex-wrap items-center justify-center h-auto w-[80%]">
                <h2 className="max-w-[90%] text-[30px] mb-[100px] text-mygray">
                    I'm looking for job opportunities as a programmer
                    <span className="block">and web developer in ReactJS framework.</span>
                </h2>

                <Accordion variant="Splitted" >
                    <AccordionItem className="customAccordeon flex flex-col justify-center items-center" key="1" aria-label="Accordion 1" title={<span className="text-blue-600 text-5xl mr-80">Certificates</span>}>
                        <div>
                            <img src={webDevelopment} alt="Web development" className="w-[700px] sm:w-[850px] overflow-hidden mt-[15px]" />
                        </div>
                        <div>
                            <img src={javaScriptDeveloper} alt="javaScript development" className="w-[700px] sm:w-[850px] overflow-hidden mt-[15px]" />
                        </div>
                        <div>
                            <img src={reactDeveloper} alt="ReactJs development" className="w-[700px] sm:w-[850px] overflow-hidden mt-[15px]" />
                        </div>
                        <div>
                            <img src={backendDeveloper} alt="backend development" className="w-[700px] sm:w-[850px] overflow-hidden mt-[15px]" />
                        </div>
                    </AccordionItem>
                </Accordion>
            </section>
            <ScrollToTopButton />
        </>

    )
}