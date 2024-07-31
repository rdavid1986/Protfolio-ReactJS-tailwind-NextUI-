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
            <div className="items-center pt-[50px] flex flex-col sm:flex-row ">
                <h1 className="text-center text-[40px] mb-3 sm:text-[50px] text-customGray">Hi, i'm <p className="text-blue-600 "><strong>David Rodriguez</strong></p></h1>
                <img className="w-[300px] h-auto filter brightness-[0.9] custom-mask" src={perfil} alt="Perfil Photo" />
            </div>
            <div className="text-center">
                <h1 className="inline-block text-[30px] w-[290px] mt-4 mb-4 sm:w-full text-customGray border-r-4 overflow-hidden  whitespace-nowrap animate-typing sm:text-[50px]">Frontend Developer .</h1>
            </div>

            <section className="sm:flex flex-wrap justify-center h-auto w-[80%]">
                <h2 className="sm:max-w-[90%] sm:text-[30px] mb-[100px] text-customGray">
                    I'm looking for job opportunities as a programmer
                    <span className="block">and web developer in ReactJS framework.</span>
                </h2>

                <Accordion variant="Splitted">
                    <AccordionItem className="flex flex-col justify-center items-center" key="1" aria-label="Accordion 1" title={<span className="text-blue-600 sm:text-5xl sm:mr-80">Certificates</span>}>

                        <div className="w-[400px] sm:w-[850px]">
                            <img src={webDevelopment} alt="Web development" className=" w- sm:w-[850px] overflow-hidden mt-[15px]" />
                        </div>
                        <div className="w-[400px] sm:w-[850px]">
                            <img src={javaScriptDeveloper} alt="javaScript development" className="w-[700px] sm:w-[850px] overflow-hidden mt-[15px]" />
                        </div>
                        <div className="w-[400px] sm:w-[850px]">
                            <img src={reactDeveloper} alt="ReactJs development" className="w-[700px] sm:w-[850px] overflow-hidden mt-[15px]" />
                        </div>
                        <div className="w-[400px] sm:w-[850px]">
                            <img src={backendDeveloper} alt="backend development" className="w-[700px] sm:w-[850px] overflow-hidden mt-[15px]" />
                        </div>
                    </AccordionItem>
                </Accordion>
            </section>
            <ScrollToTopButton />
        </>

    )
}
