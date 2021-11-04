import "./About.css";

export function About(props) {
    return (
        <div className="about-page top-circle">
            <div className="page-heading page-heading--about-page page-margin-x">We empower innovators by delivering access to the financial system</div>
            <div className="info-about-us page-margin-x">
                <div className="info-about-us__heading">Our Vision</div>
                <div className="info-about-us__text">Our main goal is to build beautiful consumer experiences along with developer-friendly 
    infrastructure. The result is an intelligent tool that gives everyone the ability to create 
    amazing products that solve big problems. We are deeply focused on democratizing financial 
    services through technology.</div>
            </div>
            <div className="info-about-us page-margin-x">
                <div className="info-about-us__heading">Our Business</div>
                <div className="info-about-us__text"> At the core of our platform is the technical infrastructure APIs that connect consumers. 
    Our innovative product provides key insights for businesses and individuals, as well as 
    robust reporting for traditional financial institutions and developers.</div>
            </div>
            <div className="about-page__image-container">

            </div>
            <div className="statistics-about-us page-margin-x">
                <div className="statistics-about-us__info-wrapper">
                    <div className="statistics-about-us__heading">Team Members </div>
                    <div className="statistics-about-us__number">300+</div>
                </div>
                <div className="statistics-about-us__info-wrapper">
                    <div className="statistics-about-us__heading">Offices in the US </div>
                    <div className="statistics-about-us__number">3</div>
                </div>
                <div className="statistics-about-us__info-wrapper">
                    <div className="statistics-about-us__heading">Transactions analyzed </div>
                    <div className="statistics-about-us__number">10M+</div>
                </div>
            </div>
            <div className="info-about-us page-margin-x">
                <div className="info-about-us__heading">The Culture</div>
                <div className="info-about-us__text"> We strongly believe there's always an opportunity to learn from each other outside of 
    day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. 
    We always value cross-team collaboration and diversity of thought, no matter the job title.
</div>
            </div>
            <div className="info-about-us page-margin-x">
                <div className="info-about-us__heading">The People</div>
                <div className="info-about-us__text">   We're all passionate about building a more efficient and inclusive financial infrastructure 
    together. At PayAPI, we have diverse backgrounds and skills.</div>
            </div>
        </div>
    )
}

export default About;