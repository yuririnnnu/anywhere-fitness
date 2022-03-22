import React from 'react'
import workout from './../images/workout.jpeg'
import workout2 from './../images/workout2.jpeg'
import yoga2 from './../images/yoga2.jpeg'

import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    {
        url: workout,
        caption: 'Weight Lifting'
    },
    {
        url: workout2,
        caption: 'Cardio'
    },
    {
        url: yoga2,
        caption: 'Yoga'
    },
];
const LoginHeader = () => {
   
    return (
        <div>

            <div className="slide">
                <div className="slide-container">
                    <Slide>
                    {slideImages.map((slideImage, index)=> (
                        <div className="each-slide" key={index}>
                            <div className="each-photo" >
                                <img src={slideImage.url} />
                                <span>{slideImage.caption}</span>
                            </div>
                        </div>
                    ))} 
                    </Slide>
                </div>
            </div>
            {/* <div className="title">
                <h1>Welcome To AnyWhere Fitness! <br/> Login below to schedule a class!</h1>
            </div>  */}
        </div>

    )
}
    
export default LoginHeader