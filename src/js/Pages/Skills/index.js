import React from "react"
import { Row, Col, Image } from 'react-bootstrap'
import UrlImage from '../../../utlis/image'



const Skills = () => {



    let Detilas = [
        {
            _id: 1,
            name: 'js',
            image: UrlImage.js,
        },
        {
            _id: 1,
            name: 'aws',
            image: UrlImage.aws,
        },
        {
            _id: 2,
            name: 'CSR',
            image: UrlImage.csr,
        },
        {
            _id: 3,
            name: 'mongodb',
            image: UrlImage.db,
        },
        {
            _id: 4,
            name: 'docker',
            image: UrlImage.docker,
        },
        {
            _id: 5,
            name: 'express',
            image: UrlImage.express,
        },
        {
            _id: 6,
            name: 'git',
            image: UrlImage.git,
        },
        {
            _id: 7,
            name: 'google',
            image: UrlImage.google,
        },
        {
            _id: 8,
            name: 'Html',
            image: UrlImage.HTML,
        },
        {
            _id: 9,
            name: 'mongodb',
            image: UrlImage.db,
        },
        {
            _id: 10,
            name: 'react native',
            image: UrlImage.react,
        },
        {
            _id: 11,
            name: 'npm',
            image: UrlImage.npm,
        },
        {
            _id: 13,
            name: 'post man',
            image: UrlImage.postman,
        },
        {
            _id: 14,
            name: 'redux',
            image: UrlImage.redux,
        },
        {
            _id: 15,
            name: 'SEO',
            image: UrlImage.SEO,
        },
        {
            _id: 16,
            name: 'socket io',
            image: UrlImage.socket,
        },
        {
            _id: 17,
            name: 'typescript',
            image: UrlImage.ts,
        },
        {
            _id: 18,
            name: 'webpack',
            image: UrlImage.webpack,
        },
        {
            _id: 19,
            name: 'react js',
            image: UrlImage.react,
        },
    ]



    let Certificate = [
        {
            _id: 1,
            years: '2013 - 2015',
            name: 'Certificate of Work',
            address: 'Al wehda for General trade',
            des: `
            Computer Technician and Web Design, PITA.
                                        The tasks consisted of servicing and maintenance of hardware and
                                        software as well as support.
                                        He designed and developed websites as well as programming in
                                        HTLM5, CSS3, Javascript, Node.js
                                        This Certificate was given under the law of the company.
                                        `
        },
        {
            _id: 2,
            years: '2020 - 2023',
            name: 'Freelancer',
            des: `
            I worked as a Frontend in Mostaql and with my friends
                                        `
        }
    ]


    return (
        <Row className="justify-content-center align-items ">
            <div className="margintopten " />
            <Col xs={12} sm={12} md={12} lg={12} className='marginbottom ' >

                <div className="flex column align-items">
                    <div>
                        <span className="FirstFont">Skills & </span>
                        <span className="FirstFont allcolor marginLeft">Experience </span>

                    </div>
                </div>


                <Row className="justify-content-center">
                    <Col xs={10} sm={10} md={6} lg={6} className='margintopten'>

                        <div className="flex center flex-wrap">
                            {Detilas?.map((item, index) => (
                                <div className="skillswidth Card text-align cursor Transition" key={index}>
                                    <div className="rate flex BackgroundSkills border-radius center align-items">
                                        <Image src={item.image}
                                            className='
                                        skills 
                                        object-fit 
                                         boxshadow 
                                         BackgroundWhite'

                                        />
                                    </div>
                                    <p className="des-weight des margintopandbottom text-transform descolor">{item.name}</p>
                                </div>
                            ))}

                        </div>
                    </Col>

                    <Col xs={10} sm={10} md={6} lg={6} className='margintopten'>
                        {Certificate.map((item, index) => (
                            <Row className="justify-content-center" key={index}>
                                <Col xs={12} sm={12} md={2} lg={2}>
                                    <span className="Title fontFamily allcolor" >{item.years}</span>
                                </Col>
                                <Col xs={12} sm={12} md={10} lg={10}>
                                    <div className="">
                                        <h2 className="Title fontFamily blackcolor " >{item.name}</h2>
                                        <div className="BackgroundHome padding borderone " >
                                            {item?.address && (<h2 className="Title fontFamily blackcolor" >{item.address}</h2>)}
                                            <p className="des-weight des   descolor ">{item.des}</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                        ))}
                    </Col>
                </Row>

            </Col>


        </Row>
    )
}


export default Skills