import { useState } from 'react';
import profileImage from '../../assets/profile.jpg'
import './header.css'

const Header = () => {

    const [showProfileCard, setShowProfileCard] = useState(false);

    const toggleProfileCard = () => {
        setShowProfileCard(!showProfileCard);
    };

    return (
        <div className="header-container">
        <div className="profile-image-container" onClick={toggleProfileCard}>
            <img src={profileImage} alt="Profile" className="profile-image" />
            {showProfileCard && (
                <div className="profile-card">
                    <div className="profile-name">John Doe</div>
                    <ul className="profile-menu">
                        <li>Profile</li>
                        <li>Logout</li>
                    </ul>
                </div>
            )}
        </div>
    </div>
    )
}

export default Header