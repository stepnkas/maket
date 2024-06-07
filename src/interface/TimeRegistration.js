import React from "react";
import "./timeRegist.scss";

function TimeRegistration() {
    return (
        <div className="block2">
            <div className="block__items2">
                <div className="block__question2">
                    <p>
                        <b>Фишки, </b>
                        которые<br /> вас ждут
                    </p>

                </div>
                <div className="block__line2">
                    <hr style={{ position: "absolute", width: "600px", left: "0", border: 'none', backgroundColor: '#000', height: '2px' }}></hr>
                </div>
            </div>
            <div className="block__information2">
                <div className="block__info2 info12">
                    <p>
                        <div><b>Электронный диплом</b></div><br />
                        Как подтверждение, что вы вложили<br /> время в свое развитие
                    </p>
                </div>
                <div className="background-line2">
                    <svg width="2" height="51" viewBox="0 0 2 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1" y1="4.44256e-08" x2="0.999998" y2="51" stroke="#000" stroke-width="2" />
                    </svg>
                </div>
                <div className="block__info2 info22">
                    <p>
                        <div>
                            <b>Практические советы<br /> и взрывные идеи</b></div><br />
                        От лидера рынка разработки готовых решений<br /> для «1С- Битрикс» с 10-летним опытом. <br />
                        Бери, внедряй, зарабатывай
                    </p>
                </div>
                <div className="background-line2">
                    <svg width="2" height="76" viewBox="0 0 2 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1" y1="4.37114e-08" x2="0.999997" y2="76" stroke="#000" stroke-width="2" />
                    </svg>
                </div>
                <div className="block__info2 info32">
                    <p>
                        <div>
                            <b>Подарки и сюрпризы</b></div><br /> Сертификаты, скидки,<br />
                        NFR-лицензии готовых сайтов.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TimeRegistration;