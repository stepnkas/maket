import React from "react";

function GlavRegistration() {

    return (
        <div>
            <div>
                <div>
                    <b>Укажите свои контактные данные</b>
                </div>
                <div>
                    * Все поля обязательны к заполнению!
                </div>
            </div>
            <div>
                <div>
                    <input type="text" placeholder="Ваше Имя" required />
                </div>
                <div>
                    <input type="text" placeholder="Ваша Фамилия" required />
                </div>
                <div>
                    <input type="text" placeholder="Ваш номер телефона" required />
                </div>
                <div>
                    <input type="text" placeholder="Название вашей компании" required />
                </div>
                <div>
                    <input type="text" placeholder="Должность" required />
                </div>
                <div>
                    <input type="text" placeholder="Электронная почта" required />
                </div>
            </div>
            <div>
                <div>

                </div>
            </div>
            <div>
                <div>
                    <button>
                        Зарегестрироваться
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GlavRegistration;