import React from 'react';
import { Link } from 'react-router-dom';

const OverlayMenu: React.FC = () => {
    return (
        <nav className='overlayMenu'>
            <Link to="/CNPWebsite" className='fontGoldenAgeOverlay' >Home</Link>
            <Link to="/CNPWebsite/culture" className='fontGoldenAgeOverlay'>Culture</Link>
            <Link to="/CNPWebsite/work" className='fontGoldenAgeOverlay'>Work</Link>
            <Link to="/CNPWebsite/founders" className='fontGoldenAgeOverlay'>Founders</Link>

        </nav>
    );
};

export default OverlayMenu;