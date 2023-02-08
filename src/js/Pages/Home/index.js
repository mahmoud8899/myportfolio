import { Col, Container, Image, Row } from "react-bootstrap"
import React from "react"
import UrlImage from '../../../utlis/image'
import About from "../About";
import Work from "../work";
import Skills from '../Skills/index'
import Contact from "../contact";
import Testimonials from "../Testimonials";
import Socialmedia from "../../Components/socialmedia";


const Home = () => {


    return (
        <Container fluid>

            <Work />

            <Socialmedia />

            <Row className="BackgroundHome justify-content-center Background align-items" id='home' >
                <div className="margintopten " />
                <Col xs={12} sm={12} md={4} lg={4} className='marginbottom' >
                    <div className="flex space-between border overflow padding  margintopandbottom align-items  BoxSize  cursor" >

                        <div className="Title Transition">
                            👋
                        </div>
                        <div className="flex column" >
                            <span className="header fontFamily">
                                Hello, i am
                            </span>
                            <span className="Title fontFamily">
                                Mahmoud
                            </span>
                        </div>
                    </div>

                    <div className="flex center  border overflow padding width margintopandbottom BoxSize  cursor" >
                        <div className="flex column" >
                            <span className="header fontFamily">
                                Web Developer,
                            </span>
                            <span className="header fontFamily">
                                FreeLancer
                            </span>
                            <span className="header fontFamily">
                                Designer
                            </span>
                        </div>
                    </div>
                </Col>

                <Col xs={12} sm={12} md={4} lg={4}>


                    <Image
                        src={UrlImage.profile}
                        className='profileimage border object-fit'
                    />

                </Col>

                <Col xs={12} sm={12} md={4} lg={4} className='Size'>
                    <div className="flex" >
                        <div className="box paddingOne border-radius margintopandbottom boxshadow cursor" >
                            <Image src={UrlImage.js} className='iconImage Transition' />
                        </div>

                    </div>

                    <div className="flex " >
                        <div className="box paddingOne border-radius margintopandbottom boxshadow cursor" >
                            <Image
                                src={UrlImage.react}
                                className='iconImage extra Transition' />
                        </div>

                    </div>
                    <div className="flex" >
                        <div className="box paddingOne border-radius margintopandbottom boxshadow cursor" >
                            <Image src={UrlImage.Api} className='iconImage Transition' />
                        </div>

                    </div>



                </Col>


            </Row>

            <About />


            <Skills />
            <Testimonials />

            <Contact />





        </Container>
    )
}


export default Home