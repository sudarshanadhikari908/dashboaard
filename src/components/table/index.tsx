import { useState } from 'react';
import './table.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';


const Table = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // I am using static data because sometimes the api for this data worked perfectlt but sometimes I was getting CORS error from api for this table
  const responseData = [
    {
      "id": "BC2ECBAE-FB46-4BE2-8194-3078876B5C8F",
      "Sender Full Name": "MAUSAM SHRESTHA",
      "Receiver Full Name": "SUBASH SHRESTHA",
      "Current Status": "Authorized",
      "Send Amount": "200 JPY",
      "Send Country": "JAPAN",
      "Receive Amount": "171 NPR",
      "Receive Country": "NEPAL"
    },
    {
      "id": "2F06F6B0-1538-4855-A6C1-5A1E9F48F373",
      "Sender Full Name": "MAUSAM SHRESTHA",
      "Receiver Full Name": "WEATHER SHRESTHA",
      "Current Status": "Authorized",
      "Send Amount": "3,223 JPY",
      "Send Country": "JAPAN",
      "Receive Amount": "2,763 NPR",
      "Receive Country": "NEPAL"
    },
    {
      "id": "080ECEC5-EFD3-453B-95FC-8D35D4B63942",
      "Sender Full Name": "MAUSAM SHRESTHA",
      "Receiver Full Name": "SUBASH SHRESTHA",
      "Current Status": "Parking",
      "Send Amount": "49,250 JPY",
      "Send Country": "JAPAN",
      "Receive Amount": "42,214 NPR",
      "Receive Country": "NEPAL"
    },
    {
      "id": "E9EE4C10-38C7-4F0C-9FD9-B27F91246AA0",
      "Sender Full Name": "MUSKAN SHRESTHA",
      "Receiver Full Name": "MAUSAM CASH MYANMAR",
      "Current Status": "Authorized",
      "Send Amount": "200 JPY",
      "Send Country": "JAPAN",
      "Receive Amount": "2,653 MMK",
      "Receive Country": "MYANMAR"
    },
    {
      "id": "87D47A34-16F7-4F85-9219-710AF9914A55",
      "Sender Full Name": "MUSKAN SHRESTHA",
      "Receiver Full Name": "MAUSAM CASH MYANMAR",
      "Current Status": "Authorized",
      "Send Amount": "5,000 JPY",
      "Send Country": "JAPAN",
      "Receive Amount": "66,319 MMK",
      "Receive Country": "MYANMAR"
    },
    {
      "id": "18390A9A-C653-4136-BCE2-02D918C8F673",
      "Sender Full Name": "MAUSAM SHRESTHA",
      "Receiver Full Name": "SUBASH SHRESTHA",
      "Current Status": "Authorized",
      "Send Amount": "2,000 JPY",
      "Send Country": "JAPAN",
      "Receive Amount": "1,725 NPR",
      "Receive Country": "NEPAL"
    },
    {
      "id": "9EAC8477-6E90-457C-9572-AFA57CE58F97",
      "Sender Full Name": "MAUSAM SHRESTHA",
      "Receiver Full Name": "SUBASH SHRESTHA",
      "Current Status": "Parking",
      "Send Amount": "2,000 JPY",
      "Send Country": "JAPAN",
      "Receive Amount": "1,725 NPR",
      "Receive Country": "NEPAL"
    },
    {
      "id": "C929EB51-9AA5-45C9-9C23-AF6C3620274D",
      "Sender Full Name": "MAUSAM SHRESTHA",
      "Receiver Full Name": "GAGAN  THAPA",
      "Current Status": "Parking",
      "Send Amount": "121 JPY",
      "Send Country": "JAPAN",
      "Receive Amount": "104 NPR",
      "Receive Country": "NEPAL"
    },
    {
      "id": "0194525F-911F-436B-B0B6-1EBB70A94BC8",
      "Sender Full Name": "MASUAM STHA",
      "Receiver Full Name": "SEASON BAHADUR SHRESTHA",
      "Current Status": "Authorized",
      "Send Amount": "2,300 JPY",
      "Send Country": "JAPAN",
      "Receive Amount": "30,507 MMK",
      "Receive Country": "MYANMAR"
    },
    {
      "id": "14A067EA-111F-41F1-912D-40E538355964",
      "Sender Full Name": "MASUAM STHA",
      "Receiver Full Name": "SEASON BAHADUR SHRESTHA",
      "Current Status": "Authorized",
      "Send Amount": "6,600 JPY",
      "Send Country": "JAPAN",
      "Receive Amount": "87,541 MMK",
      "Receive Country": "MYANMAR"
    }
  ];

  const indexOfLastItem = currentPage * itemsPerPage;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Sender Full Name</th>
            <th>Receiver Full Name</th>
            <th>Current Status</th>
            <th>Send Amount</th>
            <th>Send Country</th>
            <th>Receive Amount</th>
            <th>Receive Country</th>
          </tr>
        </thead>
        <tbody>
          {responseData && responseData?.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction['Sender Full Name']}</td>
                <td>{transaction['Receiver Full Name']}</td>
                <td>{transaction['Current Status']}</td>
                <td>{transaction['Send Amount']}</td>
                <td>{transaction['Send Country']}</td>
                <td>{transaction['Receive Amount']}</td>
                <td>{transaction['Receive Country']}</td>
              </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <h5>Row per page: {' '} </h5>
        <select onChange={(e) => setItemsPerPage(parseInt(e.target.value))}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
        <FontAwesomeIcon icon={faBackward} />
        </button>
        <button onClick={() => paginate(currentPage + 1)} disabled={indexOfLastItem >= responseData.length}>
        <FontAwesomeIcon icon={faForward} />
        </button>
      </div>
    </div>
  );
};

export default Table;
