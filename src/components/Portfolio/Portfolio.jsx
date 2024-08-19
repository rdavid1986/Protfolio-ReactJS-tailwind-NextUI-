import "./portfolio.css";
import ScrollToTopButton from "../Buttons/ScrollToTopButton";
import Card from "../card/Card";

const Portfolio = () => {
    return (
        <>
            <section className="w-[70%] flex flex-col m-10 mx-auto">
                <h1 className=" animation text-6xl text-customGray mb-9">Portfolio</h1>

                {/* //Static Web */}
                <div className=" cardDiv flex flex-wrap gap-9 justify-center ">
                    <Card
                        title="Web HTML, CSS, javaScript"
                        type="Web site"
                        github="GitHub docs"
                        description="Static Web Page"
                        background="bg-custom-bg-MonteGrandeBus"
                        webSiteLink="https://montegrandebus.github.io/montegrandebus/"
                        gitHubLink="https://github.com/rdavid1986/Monte-Grande-Bus"
                    />
                    <Card
                        title="Web HTML, CSS, javaScript"
                        type="Web site"
                        github="GitHub docs"
                        description="javaScript booking app" background="bg-custom-bg-SistemaReservas "
                        webSiteLink="https://rdavid1986.github.io/javascript/"
                        gitHubLink="https://github.com/rdavid1986/javascript"
                    />
                    <Card
                        title="ReactJs, Bootstrap, CSS"
                        type="Web site"
                        github="GitHub docs"
                        description="Front-End ReactJs Ecommerce" background="bg-custom-bg-ReactEcommerce"
                        webSiteLink="https://reactjs-ecommerce-virid.vercel.app/"
                        gitHubLink="https://github.com/rdavid1986/reactjs-ecommerce"
                    />
                    <Card
                        title="NodeJS, Express, Handlebars."
                        type="Web site" github="GitHub docs"
                        description="Back-End and Front-End Ecommerce" background="bg-custom-bg-Nodejs"
                        webSiteLink="https://node-js-final-proyect-ecommerce.vercel.app/"
                        gitHubLink="https://github.com/rdavid1986/nodeJs-FinalProyect-ecommerce-"
                    />
                    <Card
                        title="ReactJs, Tailwind, NextUI"
                        type="Web site" github="GitHub docs"
                        description="ReactJs portfolio" background="bg-custom-bg-portfolio"
                        webSiteLink="https://protfolio-react-js-tailwind-next-ui.vercel.app/"
                        gitHubLink="https://github.com/rdavid1986/Protfolio-ReactJS-tailwind-NextUI-"
                    />
                </div>
                <ScrollToTopButton />
            </section>
        </>
    );
};

export default Portfolio;
