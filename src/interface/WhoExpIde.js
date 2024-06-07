import React from "react";
import "./avoutUs.scss";


function WhoExpIde(props) {

    return (
        <div className="container__about">
            <div className="gg">
                <p className="text-block__about about_block1">
                    <b>{props.str1}</b><br />
                    {props.str2}
                </p>
                {props.boo && (
                <hr style={{ position: "absolute", width:"500px", left:"0", border: 'none', backgroundColor: '#000', height: '2px' }}></hr> )}
            </div>
            {props.boo && (
                <div className="text-block__about about_block4">
                    <b>#Время</b><br/> Партнерства
                </div>
            )}
           
        </div>
        
    )
}

export default WhoExpIde;