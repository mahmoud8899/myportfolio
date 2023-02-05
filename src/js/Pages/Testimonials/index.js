

import { Col, Container, Image, Row } from "react-bootstrap"
import React, { useState } from "react"
import UrlImage from '../../../utlis/image'
import TheInput from "../../Components/input"
import TheButton from '../../Components/button'
import { SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import SwiperPage from '../../Components/swiper/index'
import { SwiperOfSize } from '../../Components/swiper/setting';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);









const Testimonials = () => {



    let customer = [
        {

            _id: 1,
            name: 'mutasem kwaik',
            des: `
            I would like to thank Eng. Mahmoud for his skill in work, speed in completing tasks, and his intelligence in solving problems. It was a great job and I am happy to work with him. He was passionate about his work and perfected his tasks, and I hope that there will be more business between us.
            `,
            image: UrlImage.Mutasem
        },
        {
            _id: 1,
            name: 'zain',
            des: `Thanks for the great work and the beautiful edits to my website`,
            image: UrlImage.person

        }
    ]



    return (
        <Row className="BackgroundHome justify-content-center">
            <div className="margintopten " />
            <Col xs={12} sm={12} md={10} lg={6} className='marginbottom' >

                <div className="flex column align-items marginbottom">
                    <div>
                        <span className="FirstFont">What They </span>
                        <span className="FirstFont allcolor marginLeft">say about me ? </span>

                    </div>
                </div>


                <SwiperPage
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={true}
                    scrollbar={true}
                    modules={[Pagination]}

                >
                    {customer && customer?.map((item, index) => (

                        <SwiperSlide key={index} >

                            <div className="BackgroundWhite borderone boxshadow padding flex align-items space-between ">

                                <div className="width20">
                                    <Image
                                        src={item.image}
                                        className='border-radius BOX_BOX object-fit boxshadow'
                                    />
                                </div>

                                <div className="width70">
                                    <p className="des-weight des  descolor">
                                        {item.des}
                                    </p>
                                    <h1 className="FirstFont allcolor marginLeft margintopten">{item.name}</h1>
                                </div>
                            </div>
                        </SwiperSlide>

                    ))}

                </SwiperPage>



            </Col>
        </Row>

    )
}


export default Testimonials


