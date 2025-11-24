import React from 'react';
import { Link } from 'react-router-dom';

const OverlayMenu: React.FC = () => {
    return (
        <nav className='overlayMenu'>
            <Link to="/CNPWebsite" style={{ color: '#4fc3f7', textDecoration: 'none' }}>Home</Link>
            <Link to="/work" style={{ color: '#4fc3f7', textDecoration: 'none' }}>Work</Link>
            <Link to="/founders" style={{ color: '#4fc3f7', textDecoration: 'none' }}>Founders</Link>
            <Link to="/culture" style={{ color: '#4fc3f7', textDecoration: 'none' }}>Culture</Link>
        </nav>
    );
};

export default OverlayMenu;