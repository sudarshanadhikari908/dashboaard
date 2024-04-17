import React, { useEffect } from 'react';
import Layout from '../../components/layout';
import './dashboard.css';
import axiosInstance from '../../axios';
import Table from '../../components/table';

const Dashboard = () => {

    const getTransactionData = async () => {
        const response = await axiosInstance.post('transaction-manager/v1/admin/dashboard/search');
        console.log(response);
    };

    useEffect(() => {
        getTransactionData();
    }, []);
    return (
        <div className='dashboard-container'>
            <Layout>
                <Table />
            </Layout>
        </div>
    );
};

export default Dashboard;