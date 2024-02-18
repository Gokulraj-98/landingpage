import React from "react";

function Showcase({detail}){
   var imgName=detail.imageName;
  var showcase1 ={
        backgroundImage: `${imgName}`
    }
    return (
        <>   
                <div class="row g-0">
                <div class={`col-lg-6 ${detail.alignleft?"":"order-lg-2"}  text-white showcase-img`} style={showcase1}></div>
                    <div class={`col-lg-6 ${detail.alignleft?"":"order-lg-1"} my-auto showcase-text`}>
                        <h2>{detail.name}</h2>
                        <p>Hello</p>
                        <p class="lead mb-0">{detail.description}</p>
                    </div>
                </div>
        </>
    )
}

export default Showcase;