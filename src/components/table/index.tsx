import './table.css'

const Table = () => {
  return (
    <div className="table-container">
    <table className="custom-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Sender Full Name</th>
          <th>Receiver Full Name</th>
          <th>Send Amount</th>
          <th>Send Country</th>
          <th>Receive Amount</th>
          <th>Receive Country</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  </div>
  )
}

export default Table