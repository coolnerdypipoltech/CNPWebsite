import React from 'react';
import { Link } from 'react-router-dom';

const OverlayMenu: React.FC = () => {
    return (
        <nav className='overlayMenu'>
            <Link to="/" className='fontGoldenAgeOverlay' >Home</Link>
            <Link to="/" className='fontGoldenAgeOverlay'>Culture</Link>
            <Link to="/" className='fontGoldenAgeOverlay'>Work</Link>
            <Link to="/" className='fontGoldenAgeOverlay'>Founders</Link>

        </nav>
    );
};

export default OverlayMenu;