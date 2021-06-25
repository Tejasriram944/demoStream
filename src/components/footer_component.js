import React from 'react'
import { Container } from 'react-bootstrap';
import Facebook from '../assets/social/facebook-white.svg'
import Insta from '../assets/social/instagram-white.svg'
import Twitter from '../assets/social/twitter-white.svg'
import Apple from '../assets/store/app-store.svg'
import Play from '../assets/store/play-store.svg'
import Windows from '../assets/store/windows-store.svg'

const FooterComponent = () => {
    return (
        <div className='bg-dark text-white py-3'>
            <Container>
                <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
                    <li style={{ borderRight: '2px solid white', paddingRight: '16px' }}>Home</li>
                    <li style={{ borderRight: '2px solid white', padding: '0 16px' }}>Terms and conditions</li>
                    <li style={{ borderRight: '2px solid white', padding: '0 16px' }}>Privacy policy</li>
                    <li style={{ borderRight: '2px solid white', padding: '0 16px' }}>collection statement</li>
                    <li style={{ borderRight: '2px solid white', padding: '0 16px' }}>Help</li>
                    <li style={{ paddingLeft: '16px' }}>Manage Account</li>
                </ul>
                <p>Copyright © 2016 DEMO Streaming.All Rights Reserved.</p>
                <div className='d-flex justify-content-between  p-2'>
                    <div className=' socials'>
                        <span>
                            <a href='https://www.facebook.com'>
                                <img src={Facebook} alt='' />
                            </a>
                        </span>
                        <span>
                            <a href='https://www.twitter.com'>
                                <img src={Twitter} alt='' />
                            </a>
                        </span>
                        <span>
                            <a href='https://www.instagram.com'>
                                <img src={Insta} alt='' />
                            </a>
                        </span>
                    </div>
                    <div className=' store'>
                        <span>
                            <a href='https://www.apple.com'>
                                <img src={Apple} alt='' />
                            </a>
                        </span>
                        <span>
                            <a href='https://www.playstore.com'>
                                <img src={Play} alt='' />
                            </a>
                        </span>
                        <span>
                            <a href='https://www.windows.com'>
                                <img src={Windows} alt='' />
                            </a>
                        </span>
                    </div>
                </div>
            </Container>

        </div >
    )
}

export default FooterComponent;
