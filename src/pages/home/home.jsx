import './style/style.scss'
import {useState} from "react";

import car from '../../assets/car.svg';
import duck from '../../assets/duck.png';
import calendar from '../../assets/calendar.svg';
import arrow from '../../assets/arrow-left.svg';
import carbon from '../../assets/carbon_location.svg';
import phone from '../../assets/phone.svg';
import status from '../../assets/status.svg';
import burger from '../../assets/Burger.png';
import vector1 from '../../assets/Vector 1.png';
import vector2 from '../../assets/Vector 2.png';
import logoMobile from '../../assets/LogoMobile.png';
import bus from '../../assets/bus.png';

function Home() {
    const [isPressBurger, setIsPressBurger] = useState(false);

    const burgerMenu = () => {
        setIsPressBurger(true);
    }

    document.addEventListener('click', e => {
        if (e.target.parentElement.id !== 'burger') {
            setIsPressBurger(false);
        }
    });

    return (
        <>
            <div className='main-container'>
                <div className='top-container'>
                    <div className='top-content'>

                        <div className='header'>
                            <button className='book-button book-button-media580'>Бронюй</button>
                            <ul className='main-menu'>
                                <li className='main-menu-text'>Головна</li>
                                <li className='main-menu-text'>Бронювання</li>
                                <li className='main-menu-text'>Рейси</li>
                                <li className='main-menu-text'>Допомога</li>
                            </ul>
                            <button className='book-button'>Бронюй</button>
                        </div>

                        <div className='description'>
                            <div className='description-text'>
                                <h2>Перевізники Європи</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt
                                    ut labore et dolore magna aliqua.</p>
                                <button className='book-button' style={{display: 'flex'}}>Бронюй</button>
                            </div>
                            <div className='ellipse'>
                                <img className='main-logo' src={duck} alt='logo'/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bottom-container'>
                    <div className='bottom-content'>

                        <div className='toggle-button-wrapp'>
                            <button className='toggle-button'>Пасажир</button>
                            <button className='toggle-button right'>Перевізник</button>
                        </div>

                        <div className='navbar-wrapp'>
                            <div className='navbar'>
                                <div className='item-wrapp'>
                                    <p>Звідки?</p>
                                    <img src={arrow}/>
                                </div>
                                <div className='item-wrapp'>
                                    <p>Куди?</p>
                                    <img src={arrow}/>
                                </div>
                                <div className='item-wrapp'>
                                    <div className='calendar'>
                                        <img src={calendar}/>
                                        <p>Коли?</p>
                                    </div>
                                    <img src={arrow}/>
                                </div>
                                <div className='item-wrapp'>
                                    <p>1 пасажир</p>
                                    <img src={arrow}/>
                                </div>
                            </div>
                            <button className='book-button go' style={{display: 'flex'}}>Поїхали</button>
                        </div>

                        <div className='fishki'>
                            <div className='fishki-item fishki-item-first'>
                                <div className='first-item-text'>
                                    <h2>Наші фішки</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat.</p>
                                </div>
                                <button>Дізнатись більше</button>
                            </div>
                            <div className='fishki-item'>
                                <img src={carbon}/>
                                <h4>Доступ до місцязнаходження водія</h4>
                                <p>Слідкуй за актуальною локацією водія та завжди будь в курсі де зараз Твій бус або
                                    відправлена Тобою посилка. Ми не Uber, але теж круто!</p>
                            </div>
                            <div className='fishki-item'>
                                <img src={phone}/>
                                <h4>Онлайн бронювання у додатку</h4>
                                <p>Швидке бронювання онлайн!
                                    Забудь про сотні дзвінків перед поїздкою!</p>
                            </div>
                            <div className='fishki-item'>
                                <img src={status}/>
                                <h4>Статус поїздки</h4>
                                <p>Додаток нагадає про поїздку та повідомить тебе, як тільки водій вирушить в
                                    дорогу!</p>
                            </div>
                            <div className='fishki-item'>
                                <img src={car}/>
                                <h4>Відстеження поїздок</h4>
                                <p>Відправив посилку рідним? Відстежуй її у режимі онлайн</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className='main-container-mobile'>
                <div className='header-mobile'>
                    <div className='header-top-menu'>
                        <img src={duck}/>
                        {isPressBurger ? (
                            <div id='burger'>
                                <button className='burger-button'>Головна</button>
                                <button className='burger-button'>Бронювання</button>
                                <button className='burger-button'>Рейси</button>
                                <button className='burger-button'>Допомога</button>
                            </div>
                        ) : <img src={burger} className='burger' onClick={burgerMenu}/>}
                    </div>

                    <p className='mobile-title'>YDC <span>Перевізники</span> Європи</p>
                    <button className='book-button-mobile'>Бронюй</button>
                </div>

                <div className='mobile-logo-wrapper'>
                    <div className="mobile-logo">
                        <img src={vector1} className="vector1" alt="Logo1"/>
                        <img src={vector2} className="vector2" alt="Logo2"/>
                        <img src={logoMobile} className="logo-image" alt="Duck"/>
                    </div>
                </div>

                <div className='navbar-wrapp-mobile'>
                    <div className='navbar-mobile'>
                        <div className='item-wrapp-mobile'>
                            <p>Звідки?</p>
                            <img src={arrow}/>
                        </div>
                        <div className='item-wrapp-mobile'>
                            <p>Куди?</p>
                            <img src={arrow}/>
                        </div>
                        <div className='item-wrapp-mobile'>
                            <p>Коли?</p>
                            <img src={calendar}/>
                        </div>
                        <div className='item-wrapp-mobile'>
                            <p>1 пасажир</p>
                            <img src={arrow}/>
                        </div>
                    </div>
                    <button className='button-mobile'>Поїхали</button>
                </div>

                <div className='main-mobile-fishka'>
                    <img src={bus}/>
                    <h2>YDC <span>- будь в курсі!</span></h2>
                    <h4>Доступ до місцязнаходження водія</h4>
                    <p>Слідкуй за актуальною локацією водія та завжди будь в курсі де зараз Твій бус або відправлена
                        Тобою посилка. Ми не Uber, але теж круто!</p>
                    <button className='button-mobile'>Дізнатись більше</button>
                </div>

                <div className='mobile-fishka-item'>
                    <img src={phone}/>
                    <div className='mobile-fishka-text-wrapp'>
                        <h3>Онлайн бронювання у додатку</h3>
                        <p>Швидке бронювання онлайн!<br/> Забудь про сотні дзвінків перед поїздкою!</p>
                    </div>
                </div>

                <div className='mobile-fishka-item'>
                    <img src={status}/>
                    <div>
                        <h3>Статус поїздки</h3>
                        <p>Додаток нагадає про поїздку та повідомить тебе, як тільки водій вирушить в дорогу!</p>
                    </div>
                </div>

                <div className='mobile-fishka-item' style={{marginBottom: '58px'}}>
                    <img src={car}/>
                    <div>
                        <h3>Відстеження поїздок</h3>
                        <p>Відправив посилку рідним?<br/>Відстежуй її у режимі онлайн</p>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Home