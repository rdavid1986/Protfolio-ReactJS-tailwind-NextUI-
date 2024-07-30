import "./home.css"

import webDevelopment from "/certificate/webDevelopment.png"
import javaScriptDeveloper from "/certificate/javaScript.png"
import reactDeveloper from "/certificate/reactJs.png"
import backendDeveloper from "/certificate/backend.png"
import perfil from "/Perfil.png"
import {Accordion, AccordionItem} from "@nextui-org/react";
import ScrollToTopButton from "../Buttons/ScrollToTopButton"
export default function Home(){
    return(
        <>
       
            <div className="presentation">
                <h1 className="frontend text-mygray">Hi, i'm <p className="text-blue-600 "><strong>David Rodriguez</strong></p></h1>
                <img className="perfil"src={perfil} alt="Perfil Photo" />
            </div>
            <div >
                    <h1 className="animationTypingContainer frontend animationTyping">Frontend Developer .</h1>
            </div>
           
            <section className="sectionAbout mb-9">
                <h2 className="about text-mygray">
                    I'm looking for job opportunities as a programmer
                    <span className="block">and web developer in ReactJS framework.</span>
                </h2>

                <Accordion variant="Splitted" >
                    <AccordionItem className="customAccordeon flex flex-col justify-center items-center" key="1" aria-label="Accordion 1" title={<span className="text-blue-600 text-5xl mr-80">Certificates</span>}>
                        <div>
                                <img src={webDevelopment} alt="Web development"  className="certificateImg" />
                            </div>
                            <div className="certificateImg">
                                <img src={javaScriptDeveloper} alt="javaScript development"  className="certificateImg"/>
                            </div>
                            <div className="certificateImg">
                                <img src={reactDeveloper} alt="ReactJs development"  className="certificateImg"/>
                            </div>
                            <div className="certificateImg">
                                <img src={backendDeveloper} alt="backend development"  className="certificateImg"/>
                            </div>
                    </AccordionItem>
                </Accordion>
            </section>
            <ScrollToTopButton />
        </>
        
    )
}