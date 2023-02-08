import React from "react"
import {Image} from 'react-bootstrap'
import UrlImage from "../../utlis/image"


const Socialmedia = () =>{




    return(
        <div className="flex column fixed" >
        <div className="socialmedia  margintopandbottom boxshadow BackgroundWhite border-radius flex align-items center">

            <a href="https://www.facebook.com/profile.php?id=100010466521368">
                <Image
                    src={UrlImage.facebook}
                    className='iconImagex cursor'
                />
            </a>

        </div>
        <div className="socialmedia  boxshadow BackgroundWhite border-radius flex align-items center">

            <a href="https://www.instagram.com/spider_man00000/">
                <Image
                    src={UrlImage.instagram}
                    className='iconImagex cursor'
                />
            </a>

        </div>

    </div>
    )
}


export default Socialmedia