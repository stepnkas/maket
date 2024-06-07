import React from "react";
import "./whatwhere.scss"

function WhatWhere() {

    return (
        <div className="container__HWW">
            <div className="block__question block__how">
                <div className="text__question text__how">
                    <b>сколько стоит?</b>
                </div>
                <div className="text_info text_info_how">
                    Бесплатно по предварительной регистрации
                </div>
            </div>
            <div className="block__line">
                <svg width="2" height="159" viewBox="0 0 2 159" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 0L1.00001 159" stroke="black" stroke-width="2" />
                </svg>
            </div>
            <div className="block__question block__what">
                <div className="text__question text__what">
                    <b>когда?</b>
                </div>
                <div className="text_info text_info_what">
                    11 Февраля в 10:00 по МСК
                </div>
            </div>
            <div className="block__line">
                <svg width="2" height="159" viewBox="0 0 2 159" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 0L1.00001 159" stroke="black" stroke-width="2" />
                </svg>
            </div>
            <div className="block__question block__where">
                <div className="text__question text__where">
                    <b>где?</b>
                </div>
                <div className="text_info text_info_where">
                    Онлайн
                </div>
            </div>
        </div>
    )
}

export default WhatWhere;