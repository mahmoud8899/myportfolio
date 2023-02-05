
import { Col, Container, Image, Row } from "react-bootstrap"
import React, { useState } from "react"
import UrlImage from '../../../utlis/image'
import TheInput from "../../Components/input"
import TheButton from '../../Components/button'



const Contact = (props) => {





    let info ={
        email : 'mahmoud.talat899@gmail.com',
        phone : '+46709208520'
    }



    return (
        <Row className="BackgroundWhite justify-content-center">
            <div className="margintopten " />
            <Col xs={12} sm={12} md={10} lg={6} className='marginbottom' >

                <div className="flex column align-items marginbottom">
                    <div>
                        <span className="FirstFont">  Start Your Business with </span>
                        <span className="FirstFont allcolor marginLeft"> chat with me </span>

                    </div>
                </div>

                <Row className="justify-content-center ">
                    <Col xs={11} sm={10} md={6} lg={6} className='marginbottom' >
                        <div className="BackgroundSkills paddingOne borderone boxshadow">
                            <Image src={UrlImage.Email} className="iconImage" />
                            <a href={`mailto:${info.email}`}
                                className="des-weight des descolor marginLeft list-style"
                            >
                               {info.email}
                            </a>
                        </div>

                    </Col>
                    <Col xs={11} sm={10} md={6} lg={6} className='marginbottom' >
                        <div className="Background paddingOne borderone boxshadow">
                            <Image src={UrlImage.phone} className="iconImage" />

                            <a href={`https://wa.me/${info.phone}`}
                                className="des-weight des descolor marginLeft list-style"
                            >
                                +46709208520
                            </a>
                        </div>
                    </Col>
                    <Col xs={11} sm={10} md={12} lg={12} className='marginbottom' >



                        <TheInput
                            placeholder='your name'
                            className="Input BackgroundHome paddingOne des-weight des borderonex bordernone margintopandbottom"

                        />
                        <TheInput
                            placeholder='your email'
                            className="Input BackgroundHome paddingOne des-weight des borderonex bordernone margintopandbottom"

                        />

                        <textarea
                            placeholder='Your Message'
                            className=" BackgroundHome paddingOne des-weight des borderonex bordernone margintopandbottom height"
                        ></textarea>


                        <TheButton
                            className="widthhund boxshadow button paddingOne des-weight des borderonex bordernone  cursor  white"
                            Title='send'
                        />



                    </Col>

                </Row>




            </Col>
        </Row>
    )
}


export default Contact