import "./portfolio.css";
import ScrollToTopButton from "../Buttons/ScrollToTopButton";
import Card from "../card/Card";

const Portfolio = () => {
    return (
        <>
            <section className="sectionPortfolio flex-col justify-center m-10 max-w-5-md">
                <h1 className=" h1Animation text-6xl text-mygray mb-9">Portfolio</h1>

                {/* //Static Web */}
                <div className=" cardDiv cardDiv flex flex-wrap gap-9 justify-start ">
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
                        webSiteLink="https://rdavid1986.github.io/reactjs-ecommerce/"
                        gitHubLink="https://github.com/rdavid1986/reactjs-ecommerce"
                    />
                    <Card
                        title="NodeJS, Express, Handlebars."
                        type="Web site" github="GitHub docs"
                        description="Back-End and Front-End Ecommerce" background="bg-custom-bg-ReactEcommerce"
                        webSiteLink="https://finalproyect-production.up.railway.app/"
                        gitHubLink="https://github.com/rdavid1986/nodeJs-FinalProyect-ecommerce-"
                    />
                    <Card
                        title="ReactJs, Tailwind, NextUI"
                        type="Web site" github="GitHub docs"
                        description="ReactJs portfolio" background="bg-custom-bg-portfolio"
                        webSiteLink="https://finalproyect-production.up.railway.app/"
                        gitHubLink="https://github.com/rdavid1986/nodeJs-FinalProyect-ecommerce-"
                    />
                </div>
                <ScrollToTopButton />
            </section>
        </>
    );
};

export default Portfolio;
