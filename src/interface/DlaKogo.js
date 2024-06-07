import React from "react";
import "./avoutUs.scss";

function DlaKogo() {

    return (
        <div className="container__about">
            <p className="text-block__about about_block1"><b>Для кого </b>эта конференция?
                </p>

            <p className="text-block__about about_block2"><svg width="2" height="144" viewBox="0 0 2 144" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0V144" stroke="#222222" stroke-width="2" />
            </svg>
            </p>
            <p className="text-block__about about_block3">Масштабная онлайн-конференция для партнеров «1С-Битрикс»
                и Битрикс 24 и всех тех, кто связан со сферой digital: веб-студии, интеграторы, которые хотят получать доход на разработке готовых сайтов и решений «1С-Битрикс»</p>
        </div>
    )
}

export default DlaKogo;