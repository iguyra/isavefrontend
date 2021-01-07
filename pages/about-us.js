// const { default: Layout } = require("../components/Layout")

import Layout from "../components/Layout"


const aboutUs = () => {



    return (
        <Layout>
            <section className="section__about">
                <div className="about">
                    <div className="about__banner">
                        <div className="about__bannerimg">
                        <img className="about__middlecontentimg"  src="/static/lili.jpg"  alt=""/>
                        </div>
                        <div className="about__bannerbg">
                            WE ARE IGUYRA
                        </div>
                    </div>

                    <div className="about__middleconainer">
                        <div className="about__middlecontent">
                           
                             
                            
                            <div className="about__middleheading">
                                PASSION LED US HERE! FASHION IS OUR PASSION.
                            </div>
                            <div className="about__middlecontext">
                                iguyra is an omnichannel retail company founded in 2014 by a team of young tech enthusiasts. In the summer of 2017, a mandate was made with a new vision to clothe Africa and beyond, PayPorte operates from Nigeria (Lagos), with presence in the USA (Philadelphia), UK (Manchester) and China (Guangzhou).
                            </div>
                            
                            <div className="about__icon">
                        <img className="about__contentimg"  src="/static/li.jpg"  alt=""/>                       
                        </div>
                        </div>
                    </div>

                    <div className="about__vision">  
                    <div className="about__contentheading">OUR VISION</div>    
                        <div className="about__middlecontext">
                            We meet you at every touchpoint to offer an extensive array of products at the best prices, together with customer loyalty and rewards, discounts, fraud, and risk-free transactions.

                            PayPorte provides a seamless shopping experience and our services are available through our trusted platforms such as our web application www.payporte.com (progressive web apps suitable for Android and iOS devices), Blog and our offline stores.
                        </div>
                        <div className="about__icon">
                        <img className="about__contentimg"  src="/static/lili.jpg"  alt=""/>                       
                        </div>
                    </div>

                    <div className="about__vision">  
                    <div className="about__contentheading">OUR MISSION</div>    
                        <div className="about__middlecontext">
                            We meet you at every touchpoint to offer an extensive array of products at the best prices, together with customer loyalty and rewards, discounts, fraud, and risk-free transactions.

                            PayPorte provides a seamless shopping experience and our services are available through our trusted platforms such as our web application www.payporte.com (progressive web apps suitable for Android and iOS devices), Blog and our offline stores.
                        </div>
                        <div className="about__icon">
                        {/* <img className="about__contentimg"  src="/static/lili.jpg"  alt=""/>                        */}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default aboutUs