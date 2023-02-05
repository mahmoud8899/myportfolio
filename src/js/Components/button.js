import React from "react"



const TheButton = (props) => {
    const { Title, className } = props


    return (
        <button className={className}  >
            {Title}
        </button>
    )
}


export default TheButton