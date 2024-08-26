import React, { useEffect, useState } from 'react'

export default function Alerts() {
  const [alertData, setAlertData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.hamptoncountyresourcecenter.org/api/alert');
      const alertData = await response.json();
      setAlertData(alertData);
    }; 
    fetchData();
  })

  return (
    <div>
      <div class="alert alert-warning alert-dismissible fade show" role="alert" style={{ marginBottom: 0 }}>
        <strong>{alertData.title} </strong> {alertData.message}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  )
}
