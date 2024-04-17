import { useState } from 'react';
import profileImage from '../../assets/profile.jpg'
import './header.css'
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const [showProfileCard, setShowProfileCard] = useState(false);
    const navigate = useNavigate();

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
                        <li onClick={()=>navigate('/login')}>Logout</li>
                    </ul>
                </div>
            )}
        </div>
    </div>
    )
}

export default Header