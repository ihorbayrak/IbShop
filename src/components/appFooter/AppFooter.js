import { GoLocation } from 'react-icons/go';
import {
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineMail,
    AiOutlinePhone,
    AiOutlineTwitter,
} from 'react-icons/ai';

import {
    FooterContainer,
    FooterWrapper,
    FooterFlexContainer,
    FooterInfo,
    FooterDescription,
    FooterTitle,
    FooterSocials,
    FooterSocialIcon,
} from './style';

const AppFooter = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterFlexContainer justifyCenter='center'>
                    <FooterTitle>Contacts</FooterTitle>

                    <FooterInfo>
                        <div>
                            <GoLocation />
                        </div>

                        <FooterDescription>
                            <span>Our address</span> Fort Lee 2536 West Side Avenue New Jersey
                        </FooterDescription>
                    </FooterInfo>

                    <FooterInfo>
                        <div>
                            <AiOutlinePhone />
                        </div>

                        <FooterDescription>
                            <span>Our phone</span>
                            <a href='tel:+88993888655'>8 (899) 38-88-655</a>
                        </FooterDescription>
                    </FooterInfo>

                    <FooterInfo>
                        <div>
                            <AiOutlineMail />
                        </div>

                        <FooterDescription>
                            <span>Our email</span>
                            <a href='mailto: info@gmail.com'>info@gmail.com</a>
                        </FooterDescription>
                    </FooterInfo>
                </FooterFlexContainer>

                <FooterFlexContainer>
                    <FooterTitle>About shop</FooterTitle>
                    <p className='footer__about'>
                        Shop ImageCMS Shop offers a huge selection of equipment to suit all tastes
                        at the best prices. Our store has more than 5 years and during that time
                        there was not a single return of the goods. We serve hundreds of customers
                        every day and do it with joy. Buy equipment from us and become the owner of
                        the worlds best technology !!!
                    </p>
                </FooterFlexContainer>

                <FooterSocials>
                    <FooterSocialIcon
                        href='https://www.facebook.com'
                        marginRight='15px'
                        iconColor='rgb(49, 49, 174)'
                    >
                        <AiOutlineFacebook />
                    </FooterSocialIcon>

                    <FooterSocialIcon
                        href='https://www.instagram.com'
                        marginRight='15px'
                        iconColor='rgb(170, 59, 187)'
                    >
                        <AiOutlineInstagram />
                    </FooterSocialIcon>

                    <FooterSocialIcon href='https://twitter.com' iconColor='rgb(59, 121, 187)'>
                        <AiOutlineTwitter />
                    </FooterSocialIcon>
                </FooterSocials>
            </FooterWrapper>
        </FooterContainer>
    );
};

export default AppFooter;
