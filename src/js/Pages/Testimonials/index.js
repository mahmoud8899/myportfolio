

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

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Carousel from 'react-bootstrap/Carousel';


import { Fade } from 'react-slideshow-image';

import { Slide } from 'react-slideshow-image';

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
            _id: 2,
            name: 'Omar ghazi',
            des: `Mahmoud is a motivated person, he's very talented and creative I builded some project together and I enjoyed always working with him`,
            image: UrlImage.omr

        },
        {
            _id: 3,
            name: 'Yosef Hesham Nwear',
            des: `Grateful for working with you mahmoud   , it was a good experience .`,
            image: UrlImage.yosef

        },
        {
            _id: 4,
            name: 'Mohamed Shabana',
            des: `I  do not know what to say because there are no words to express what I see in you. You are a talented person in the sense of the word from every angle, whether knowledge or humanity. I would like to see you flourish among your dreams and to step successfully. My trust in you will succeed more than you see.`,
            image: UrlImage.moh
        },
        {
            _id: 5,
            name: 'zain',
            des: `Thanks for the great work and the beautiful edits to my website`,
            image: UrlImage.person

        },
    ]


    const buttonStyle = {
        width: "60px",
        background: 'none',
        border: '0px',
        // color : 'red',
        // background : 'white'
    };

    const properties = {
        prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#ffc400e1"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" /></svg></button>,
        nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#ffc400e1"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z" /></svg></button>
    }


    return (
        <Row className="BackgroundHome justify-content-center" id='testimonials'>
            <div className="margintopten " />
            <Col xs={12} sm={12} md={10} lg={6} className='marginbottom' >

                <div className="flex column align-items marginbottom">
                    <div>
                        <span className="FirstFont">What They </span>
                        <span className="FirstFont allcolor marginLeft">say about me ? </span>

                    </div>
                </div>




                <Slide  {...properties}  >
                    {customer.map((item, index) => (
                        <div className="BackgroundWhite flex paddingOne borderonex boxshadow marginLeftfive  margin-right" key={index}>

                            <div className="">
                                <Image
                                    src={item.image}
                                    className='border-radius BOX_BOX object-fit boxshadow postionImage'
                                />
                            </div>


                            <div className="flex column marginLeftfive">
                                <p className="des-weight des  descolor">
                                    {item.des}
                                </p>

                                <h1 className="FirstFont allcolor">{item.name}</h1>

                            </div>

                        </div>
                    ))}
                </Slide>




                <div>

                </div>




            </Col>
        </Row>

    )
}


export default Testimonials

