import './style/style.scss'
import {useEffect, useState} from "react";

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
    const [isPassenger, setIsPassenger] = useState(true);

    const [showInputs, setShowInputs] = useState([false, false, false, false]);

    const [data, setData] = useState({
        from: 'Звідки?',
        to: 'Куди?',
        date: 'Коли?',
        passenger: '1'
    });

    const burgerMenu = () => {
        setIsPressBurger(true);
    }

    const toggleInputs = (index) => {
        setShowInputs((prevState) =>
            prevState.map((isVisible, i) => (i === index ? !isVisible : false))
        );
    };


    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const resetData = () => {
        setData({
            from: 'Звідки?',
            to: 'Куди?',
            date: 'Коли?',
            passenger: '1'
        });
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest('.navbar') && !e.target.closest('.navbar-mobile')) {
                setShowInputs([false, false, false, false]);
            }
            if (e.target.parentElement.id !== 'burger') {
                setIsPressBurger(false);
            }
        };
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);


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
                            <button className='toggle-button' style={{
                                color: isPassenger ? '#FFF' : '#222',
                                backgroundColor: isPassenger ? '#0D6EFD' : 'transparent'
                            }} onClick={() => setIsPassenger(true)}>Пасажир
                            </button>
                            <button className='toggle-button right' style={{
                                color: isPassenger ? '#222' : '#FFF',
                                backgroundColor: isPassenger ? 'transparent' : '#0D6EFD'
                            }} onClick={() => setIsPassenger(false)}>Перевізник
                            </button>
                        </div>

                        <div className='navbar-wrapp'>
                            <div className='navbar'>

                                <div className='item-wrapp'>
                                    <div className='item'>
                                        <p>{data.from}</p>
                                        <img src={arrow} alt='arrow' onClick={() => toggleInputs(0)}/>
                                    </div>
                                    {showInputs[0] &&
                                        <input name='from' type='text' className='input'
                                               placeholder='Пункт відправлення'
                                               autoFocus={true} onChange={handleInputChange}/>}
                                </div>

                                <div className='item-wrapp'>
                                    <div className='item'>
                                        <p>{data.to}</p>
                                        <img src={arrow} alt='arrow' onClick={() => toggleInputs(1)}/>
                                    </div>
                                    {showInputs[1] &&
                                        <input type='text' name='to' className='input' placeholder='Пункт призначення'
                                               autoFocus={true} onChange={handleInputChange}/>}
                                </div>

                                <div className='item-wrapp'>
                                    <div className='item'>
                                        <div className='calendar'>
                                            <img src={calendar} style={{cursor: 'default'}} alt='calendar'/>
                                            <p>{data.date}</p>
                                        </div>
                                        <img src={arrow} alt='arrow' onClick={() => toggleInputs(2)}/>
                                    </div>
                                    {showInputs[2] &&
                                        <input type='date' name='date' className='input' placeholder='Дата відправлення'
                                               autoFocus={true} onChange={handleInputChange}/>}
                                </div>

                                <div className='item-wrapp'>
                                    <div className='item'>
                                        <p>{data.passenger} пасажир</p>
                                        <img src={arrow} alt='arrow' onClick={() => toggleInputs(3)}/>
                                    </div>
                                    {showInputs[3] &&
                                        <input type='number' name='passenger' className='input'
                                               placeholder='Кількість пасажирів'
                                               autoFocus={true} onChange={handleInputChange}/>}
                                </div>
                            </div>

                            <button className='book-button go' style={{display: 'flex'}} onClick={resetData}>Поїхали
                            </button>
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
                                <img src={carbon} alt='carbon'/>
                                <h4>Доступ до місцязнаходження водія</h4>
                                <p>Слідкуй за актуальною локацією водія та завжди будь в курсі де зараз Твій бус або
                                    відправлена Тобою посилка. Ми не Uber, але теж круто!</p>
                            </div>
                            <div className='fishki-item'>
                                <img src={phone} alt='phone'/>
                                <h4>Онлайн бронювання у додатку</h4>
                                <p>Швидке бронювання онлайн!
                                    Забудь про сотні дзвінків перед поїздкою!</p>
                            </div>
                            <div className='fishki-item'>
                                <img src={status} alt='status'/>
                                <h4>Статус поїздки</h4>
                                <p>Додаток нагадає про поїздку та повідомить тебе, як тільки водій вирушить в
                                    дорогу!</p>
                            </div>
                            <div className='fishki-item'>
                                <img src={car} alt='car'/>
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
                        <img src={duck} alt='duck'/>
                        {isPressBurger ? (
                            <div id='burger'>
                                <button className='burger-button'>Головна</button>
                                <button className='burger-button'>Бронювання</button>
                                <button className='burger-button'>Рейси</button>
                                <button className='burger-button'>Допомога</button>
                            </div>
                        ) : <img src={burger} className='burger' onClick={burgerMenu} alt='burger'/>}
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
                            <div className='item-mobile'>
                                <p>{data.from}</p>
                                <img src={arrow} alt='arrow' onClick={() => toggleInputs(0)}/>
                            </div>
                            {showInputs[0] &&
                                <input type='text' name='from' className='input' placeholder='Пункт відправлення'
                                       autoFocus={true} onChange={handleInputChange}/>}
                        </div>

                        <div className='item-wrapp-mobile'>
                            <div className='item-mobile'>
                                <p>{data.to}</p>
                                <img src={arrow} alt='arrow' onClick={() => toggleInputs(1)}/>
                            </div>
                            {showInputs[1] &&
                                <input type='text' name='to' className='input' placeholder='Пункт призначення'
                                       autoFocus={true} onChange={handleInputChange}/>}
                        </div>

                        <div className='item-wrapp-mobile'>
                            <div className='item-mobile'>
                                <p>{data.date}</p>
                                <img src={calendar} alt='calendar' onClick={() => toggleInputs(2)}/>
                            </div>
                            {showInputs[2] &&
                                <input type='date' name='date' className='input' placeholder='Дата відправлення'
                                       autoFocus={true} onChange={handleInputChange}/>}
                        </div>

                        <div className='item-wrapp-mobile'>
                            <div className='item-mobile'>
                                <p>{data.passenger} пасажир</p>
                                <img src={arrow} alt='arrow' onClick={() => toggleInputs(3)}/>
                            </div>
                            {showInputs[3] &&
                                <input type='number' name='passenger' className='input' placeholder='Кількість пасажирів'
                                       autoFocus={true} onChange={handleInputChange}/>}
                        </div>
                    </div>

                    <button className='button-mobile' onClick={resetData}>Поїхали</button>
                </div>

                <div className='main-mobile-fishka'>
                    <img src={bus} alt='bus'/>
                    <h2>YDC <span>- будь в курсі!</span></h2>
                    <h4>Доступ до місцязнаходження водія</h4>
                    <p>Слідкуй за актуальною локацією водія та завжди будь в курсі де зараз Твій бус або відправлена
                        Тобою посилка. Ми не Uber, але теж круто!</p>
                    <button className='button-mobile'>Дізнатись більше</button>
                </div>

                <div className='mobile-fishka-item'>
                    <img src={phone} alt='phone'/>
                    <div className='mobile-fishka-text-wrapp'>
                        <h3>Онлайн бронювання у додатку</h3>
                        <p>Швидке бронювання онлайн!<br/> Забудь про сотні дзвінків перед поїздкою!</p>
                    </div>
                </div>

                <div className='mobile-fishka-item'>
                    <img src={status} alt='status'/>
                    <div>
                        <h3>Статус поїздки</h3>
                        <p>Додаток нагадає про поїздку та повідомить тебе, як тільки водій вирушить в дорогу!</p>
                    </div>
                </div>

                <div className='mobile-fishka-item' style={{marginBottom: '58px'}}>
                    <img src={car} alt='car'/>
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