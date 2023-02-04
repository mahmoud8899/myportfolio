import React from "react"
import { Row, Col, Image } from 'react-bootstrap'
import UrlImage from '../../../utlis/image'



const Skills = () => {



    let Detilas = [
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
            image: UrlImage.native,
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
                <Col xs={10} sm={10} md={8} lg={8} className='margintopten'>

                <div className="flex center flex-wrap">
                    {Detilas?.map((item, index) => (
                        <div className="skillswidth Card text-align cursor Transition" key={index}>
                            <Image src={item.image}
                                className='skills object-fit border-radius boxshadow BackgroundWhite'

                            />
                            <p className="des-weight des margintopandbottom text-transform descolor">{item.name}</p>
                        </div>
                    ))}

                </div>
                </Col>
              </Row>






            </Col>


        </Row>
    )
}


export default Skills