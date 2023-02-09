import React from "react"
import { Row, Col, Image } from 'react-bootstrap'
import { GoMarkGithub, GoGlobe } from "react-icons/go";
import UrlImage from '../../../utlis/image'


const Work = () => {




    let MyWord = [

        {
            _id: 1,
            name: 'order food',
            github: 'https://order-location.onrender.com/',
            website: 'https://order-location.onrender.com/',
            des: ' Find the nearby restaurant',
            image:  UrlImage.location
        },
        {
            _id: 1,
            name: 'Ecommerce WebDesign',
            github: 'https://amazonshop.pages.dev/',
            website: 'https://amazonshop.pages.dev/',
            des: ' Small UI ecommerce project with react',
            image: "https://cdn.sanity.io/images/onomy28h/production/4ba3fae05e52f32c99ccd9552a6537a082febaa9-1307x675.png",
        },
        {
            _id: 2,
            name: 'Ecommerce WebDesign',
            github: 'https://github.com/mahmoud8899/server-side-rendering',
            website: 'https://server-side-rendering.onrender.com/',
            des: ' server side rendering with React',
            image: UrlImage.serverside
        },
        {
            _id: 3,
            name: 'Ecommerce WebDesign',
            github: 'https://github.com/mahmoud8899/e-commerce-food',
            website: 'https://deft-kangaroo-4c3d04.netlify.app/',
            des: 'Small UI ecommerce project with react',
            image: UrlImage.Ecommerce
        },
        {
            _id: 4,
            name: 'football WebDesign',
            github: 'https://kingofpre.com/php/index.php',
            website: 'https://kingofpre.com/php/index.php',
            des: 'watch matches',
            image: UrlImage.kingofpre
        },
        {
            _id: 5,
            name: 'Ecommerce WebDesign',
            github: 'https://lattspis.se/',
            website: 'https://lattspis.se/',
            des: 'order food',
            image: UrlImage.latt
        }
    ]


    // 

    return (
        <Row className="BackgroundHome justify-content-center Background align-items" id='work'>
            <div className="margintopten " />
            <Col xs={12} sm={12} md={12} lg={12} className='marginbottom' >

                <div className="flex column align-items">
                    <div>
                        <span className="FirstFont"> My Creative </span>
                        <span className="FirstFont allcolor marginLeft">Portfolio </span>
                        <span className="FirstFont marginLeft">Section</span>
                    </div>
                </div>









            </Col>


            <Col xs={12} sm={12} md={10} lg={10}>



                <Row className="justify-content-center">


                 {MyWord?.map((item,index)=>(
                      <Col xs={11} sm={6} md={6} lg={4} key={index}  className='margintopandbottom'>


                      <div className="BackgroundWhite paddingOne flex column borderone boxshadow cursor">
                          <div className="Container_work_image expressHeight postion">
                              <Image src={item.image}

                                  width='100%'
                                  height='200px'
                                  className="borderone"

                              />
                              <div className="Icons-X expressHeight widthhund flex center align-items texd borderone">

                                  <a target="_blank" href={item.website} >
                                      <GoGlobe
                                          className="white notSize cursor"
                                      />
                                  </a>
                                  <a target="_blank" href={item.github}  >
                                  <GoMarkGithub
                                      className="white notSize marginLeftfive cursor"
                                  />
                                  </a>
                              </div>
                          </div>

                          <div className="">
                              <h1 className="Title fontFamily blackcolor text-align margintopandbottom">{item.name}</h1>
                              <p className="des-weight des  descolor text-align min-height ">
                                 {item.des}
                              </p>
                          </div>
                      </div>

                  </Col>
                    ))}
                  
                </Row>
            </Col>


        </Row>
    )
}


export default Work