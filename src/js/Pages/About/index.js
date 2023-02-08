import UrlImage from '../../../utlis/image'
import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'




const About = () => {
    let data = [
        {
            _id: 1,
            name: 'Front end Developer',
            image: UrlImage.frontend,
            des: `I'm a Good frontend developer with a passion for building a Beautiful and Functional Web Design`
        },
        {
            _id: 2,
            name: 'Logo Design',
            image: UrlImage.Logo,
            des: `I'm a Good Logo design, I can Build a Creative logo for your Business`
        },
        {
            name: 'UI/UX',
            image: UrlImage.Ui,
            des: `I can Build a Beautiful UI design with a Good UX Design`
        }
    ]



    return (
        <Row className="BackgroundWhite justify-content-center margintopten " id='about'>
            <Col xs={12} sm={10} md={8} lg={8}>
                <div className="flex column align-items">
                    <div>
                        <span className="FirstFont">
                            I know that
                        </span>
                        <span className="FirstFont allcolor marginLeft">
                            Good Development
                        </span>
                    </div>
                    <div>
                        <span className="FirstFont marginLeft">
                            means
                        </span>
                        <span className="FirstFont allcolor marginLeft">
                            Good Business
                        </span>
                    </div>
                </div>
                <Row className='justify-content-center margintopten'>
                    {data.map((item, Index) => (
                        <Col xs={10} sm={6} md={4} lg={4} key={Index}>
                            <div className='cursor'>
                                <Image
                                    src={item.image}
                                    className='profileimage borderone object-fit'
                                />
                                <div className='text-align'>
                                    <span className='Title fontFamily blackcolor '>{item.name}</span>
                                </div>
                                <p className='des-weight des margintopandbottom  descolor'>
                                    {item.des}
                                </p>
                            </div>
                        </Col>
                    ))}

                </Row>
            </Col>
        </Row>

    )
}

export default About