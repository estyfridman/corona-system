import React, { useEffect, useState } from "react";
import MinCustomer from "./../components/MinCustomer.tsx";

interface Customer {
  first_name: string;
  last_name: string;
  id_number: number;
  email: string;
}

export default function MemberListPage() {
  const [members, setMembers] = useState<Customer[]>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function fetchData() {
    try {
        const response = await fetch("http://localhost:5050/api/members/", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (!response.ok) {
            throw new Error(`Error fetching members: ${response.statusText}`); // More informative error with statusText
          }
          const record = await response.json();
          if (record) {
            setMembers(record);
          }
    } catch (err) {
        console.error(err);
        setErrorMessage('There are no members to display at the moment / Check network problems.');
    }
  }

  useEffect(() => {
    fetchData();
    return;
  }, []);

  const refreshData = () => {
    fetchData();
  };

  return (
    <div className="p-4 ">
      <div>
          <h1>list</h1>
      </div>
      <div>
      {errorMessage ? (
        <p className="error-message">{errorMessage}</p>
      ) : (
        members ? (
            members.map((member) => (
                <MinCustomer
                  key={member.email}
                  first_name={member.first_name}
                  last_name={member.last_name}
                  id_number={member.id_number}
                  refreshData={refreshData}
                />
              ))
        ) : (
          <p>Loading members...</p>
        )
      )}
      </div>
    </div>
  );
}
