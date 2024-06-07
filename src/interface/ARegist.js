import React from "react";
import './bodylvlcss.scss';

function ARegist() {
    return (
        <div className='bodylvl1 s2'>
            <div className="container">
                <div className="text-block text-background2 s1">
                    <b>время</b> партнерства
                </div>


            </div>
            <div className="line-white">
                <svg width="2" height="159" viewBox="0 0 2 159" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 0L1.00001 159" stroke="white" stroke-width="2" />
                </svg>
            </div>
            <div className="content__block">
                <div className="contentglav content__text">
                    Конференция для тех, кто хочет построить бизнес<br/> на продаже готовых решений для «1С-Битрикс
                </div>
                <div className="contentglav content__button">
                    <button>
                        Зарегистрироваться
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ARegist;