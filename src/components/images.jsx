import React from 'react'

function images(props) {
    console.log(props.data)
    let Data = props.data
    return (
        <div className='img-container'>
            {Data.map((element, index) => {
                return (
                    <div key={index}>
                        <img src={element.img} />
                    </div>
                )
            })
            }
        </div>
    )
}

export default images