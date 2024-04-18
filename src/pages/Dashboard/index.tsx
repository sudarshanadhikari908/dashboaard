import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import './dashboard.css';
import axiosInstance from '../../axios';
import Table from '../../components/table';

const Dashboard = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState(null);

    const getTransactionData = async () => {
        setLoading(true);
        const response = await axiosInstance.post('transaction-manager/v1/admin/dashboard/search');
        setData(response?.data?.data)
        setLoading(false);
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