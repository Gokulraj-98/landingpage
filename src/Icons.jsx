import React from "react";

function Icons({details}){
    let icon_name=details.icon;
    return(
        <>          
                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex"><i className={`${icon_name} m-auto text-primary `}></i></div>
                            <h3>{details.name}</h3>
                            <p className="lead mb-0">{details.feature}</p>
                        </div>
                    </div>  
        </>
    )
}

export default Icons;