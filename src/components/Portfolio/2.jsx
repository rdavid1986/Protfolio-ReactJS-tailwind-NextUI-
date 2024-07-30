import "./portfolio.css";
import { Divider } from "@nextui-org/react";
import ScrollToTopButton from "../Buttons/ScrollToTopButton";
import Card from "../card/Card";

const Portfolio = () => {
    return (
        <>
            <section className="sectionPortfolio flex-col justify-center m-10 max-w-5-md">
                <h1 className=" h1Animation text-6xl text-mygray mb-9">Portfolio</h1>

                <div className=" cardDiv cardDiv flex flex-wrap gap-9 justify-start ">
                    <div className="w-80 text-left">

                        <h4 className="font-bold text-3xl text-mygray mb-3 w-60">Web HTML, CSS, javaScript</h4>
                        <div className="space-y-1 h-60 w-80 bg-custom-bg-MonteGrandeBus bg-cover bg-no-repeat rounded-xl">
                        </div>

                        <Divider className="my-3 dividerHorizontal bg-red-600" />
                        <div className="flex h-5 items-center space-x-4 text-small text-mygray">
                            <div>Web site</div>
                            <Divider orientation="vertical" className="bg-red-600 -mt-1" />
                            <div>GitHub docs</div>
                            <Divider orientation="vertical" className="bg-red-600 -mt-1" />
                            <div>Static Web Page</div>
                        </div>
                    </div>

                    <div className="w-80 text-left">
                        <h4 className="font-bold text-3xl text-mygray mb-3 w-60">Web HTML, CSS, javaScript</h4>
                        <div className="space-y-1 h-60 w-80 bg-custom-bg-SistemaReservas bg-cover bg-no-repeat rounded-xl">
                        </div>
                        <Divider className="my-3 bg-red-600" />
                        <div className="flex h-5 items-center space-x-4 text-small text-mygray">
                            <div>Web site</div>
                            <Divider orientation="vertical" className="bg-red-600 -mt-1" />
                            <div>GitHub docs</div>
                            <Divider orientation="vertical" className="bg-red-600 -mt-1" />
                            <div>javaScript booking app</div>
                        </div>
                    </div>
                    <div className="w-80 text-left">
                        <h4 className="font-bold text-3xl text-mygray mb-3 w-60">ReactJs Ecommerce</h4>
                        <div className="space-y-1 h-60 w-80 bg-custom-bg-ReactEcommerce bg-cover bg-no-repeat rounded-xl">
                        </div>
                        <Divider className="my-3 bg-red-600" />
                        <div className="flex h-5 items-center space-x-4 text-small text-mygray">
                            <div>Web site</div>
                            <Divider orientation="vertical" className="bg-red-600 -mt-1" />
                            <div>GitHub docs</div>
                            <Divider orientation="vertical" className="bg-red-600 -mt-1" />
                            <div>Front-End ReactJs Ecommerce</div>
                        </div>
                    </div>
                    <div className="w-80 text-left">
                        <h4 className="font-bold text-3xl text-mygray mb-3 w-60">NodeJS, Express. ReactJ. </h4>
                        <div className="space-y-1 h-60 w-80 bg-custom-bg-ReactEcommerce bg-cover bg-no-repeat rounded-xl">
                        </div>
                        <Divider className="my-3 bg-red-600" />
                        <div className="flex h-5 items-center space-x-4 text-small text-mygray">
                            <div>Web site</div>
                            <Divider orientation="vertical" className="bg-red-600 -mt-1" />
                            <div>GitHub docs</div>
                            <Divider orientation="vertical" className="bg-red-600 -mt-1" />
                            <div>Back-End and Front-End Ecommerce</div>
                        </div>
                    </div>
                </div>
                <ScrollToTopButton />
            </section>
        </>
    );
};

export default Portfolio;
