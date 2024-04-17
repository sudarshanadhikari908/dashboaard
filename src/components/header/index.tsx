import { useEffect, useRef, useState } from 'react';
import profileImage from '../../assets/profile.jpg';
import './header.css';
import { useNavigate } from 'react-router-dom';



const Header = () => {

    const [showProfileCard, setShowProfileCard] = useState(false);
    const navigate = useNavigate();
    const profileCardRef = useRef(null);

    const toggleProfileCard = () => {
        setShowProfileCard(!showProfileCard);
    };

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            // @ts-expect-error
            if (profileCardRef.current && !profileCardRef.current?.contains(event.target)) {
                setShowProfileCard(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [profileCardRef]);

    return (
        <div className="header-container">
            <div className="logo">
                <img src={'logo'} alt="Logo" />
            </div>
            <div className="profile-image-container" onClick={toggleProfileCard}>
                <img src={profileImage} alt="Profile" className="profile-image" />
                {showProfileCard && (
                    <div className="profile-card" ref={profileCardRef}>
                        <div className="profile-menu">
                            <div className="profile-name">John Doe</div>
                            <div className="profile-menu-item" onClick={() => navigate('/profile')}>Profile</div>
                            <div className="profile-menu-item" onClick={() => navigate('/login')}>Logout</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;