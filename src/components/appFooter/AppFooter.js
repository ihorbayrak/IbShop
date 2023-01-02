import { GoLocation } from 'react-icons/go';
import {
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineMail,
    AiOutlinePhone,
    AiOutlineTwitter,
} from 'react-icons/ai';

import './appFooter.scss';

const AppFooter = () => {
    return (
        <footer className='footer'>
            <div className='footer__wrapper'>
                <div className='footer__contacts'>
                    <div className='footer__title'>Contacts</div>

                    <div className='footer__contacts-info'>
                        <div className='footer__contacts-icon'>
                            <GoLocation />
                        </div>
                        <div className='footer__contacts-descr'>
                            <span>Our address</span> Fort Lee 2536 West Side Avenue New Jersey
                        </div>
                    </div>

                    <div className='footer__contacts-info'>
                        <div className='footer__contacts-icon'>
                            <AiOutlinePhone />
                        </div>
                        <div className='footer__contacts-descr'>
                            <span>Our phone</span>
                            <a href='tel:+88993888655'>8 (899) 38-88-655</a>
                        </div>
                    </div>

                    <div className='footer__contacts-info'>
                        <div className='footer__contacts-icon'>
                            <AiOutlineMail />
                        </div>
                        <div className='footer__contacts-descr'>
                            <span>Our email</span>
                            <a href='mailto: info@gmail.com'>info@gmail.com</a>
                        </div>
                    </div>
                </div>

                <div className='footer__about'>
                    <div className='footer__title'>About shop</div>
                    <p className='footer__about-descr'>
                        Shop ImageCMS Shop offers a huge selection of equipment to suit all tastes
                        at the best prices. Our store has more than 5 years and during that time
                        there was not a single return of the goods. We serve hundreds of customers
                        every day and do it with joy. Buy equipment from us and become the owner of
                        the worlds best technology !!!
                    </p>
                </div>

                <div className='footer__socials'>
                    <a href='https://www.facebook.com' className='footer__socials-facebook'>
                        <AiOutlineFacebook />
                    </a>
                    <a href='https://www.instagram.com' className='footer__socials-inst'>
                        <AiOutlineInstagram />
                    </a>
                    <a href='https://twitter.com' className='footer__socials-twitter'>
                        <AiOutlineTwitter />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default AppFooter;
