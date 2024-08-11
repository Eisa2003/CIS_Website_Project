import React, { useEffect, useState } from 'react'

export default function Alerts() {
  const [alertData, setAlertData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://emanagerapp-env.eba-eqcsmp9h.ap-south-1.elasticbeanstalk.com/api/alert');
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
