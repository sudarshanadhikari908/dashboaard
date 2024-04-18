import  { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState('Transactions');

    const handleTabClick = (tabName: string) => {
        setActiveTab(tabName);
    };

    return (
        <div className="sidebar">
           
            <div className="sidebar-item">
                <Link
                    to="/"
                    className={activeTab === 'Transactions' ? 'active' : ''}
                    onClick={() => handleTabClick('Transactions')}
                >
                   <FontAwesomeIcon icon={faCoins} /> Transactions
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
