import React from "react";

function Testimonials({detail}){
    return(
        <>
           
                    <div class="col-lg-4">
                        <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img class="img-fluid rounded-circle mb-3" src={detail.imgPath} alt="..." />
                            <h5>{detail.name}</h5>
                            <p class="font-weight-light mb-0">{detail.review}</p>
                        </div>
                    </div>       
        </>
    )
}

export default Testimonials