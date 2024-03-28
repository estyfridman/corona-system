import React from "react";
import { useNavigate } from "react-router-dom";

interface MinMemberProp {
  first_name: string;
  last_name: string;
  id_number: number;
  refreshData: () => void;
}

export default function MinMember({
    first_name,
    last_name,
    id_number,
    refreshData,
  }: MinMemberProp) {
    const navigate = useNavigate();
  
    async function handelDelete(id_number: number) {
      try {
        const response = await fetch(
          `http://localhost:5050/api/members/${id_number}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("response:", response);
        refreshData();
      } catch (error) {
        console.error("Error deleting member:", error);
      }
    }
  
    function handelUpdate(id_number: number) {
      navigate(`/member/${id_number}`);
    }
  
    function handelAddVaccine(id_number: number) {
      navigate(`/corona/${id_number}`);
    }
  
    function handelDisplay(id_number: number) {
      navigate(`/intro/${id_number}`);
    }
    
    return (
      <div className="flex justify-between items-center rounded-md shadow-sm ring-1 ring-inset ring-slate-300 p-2">
        <div>
          {first_name} {last_name}
        </div>
        <div className="space-x-4">
          <button onClick={() => handelDelete(id_number)}>
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" >
              <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clipRule="evenodd" />
            </svg>
          </button>
  
          <button onClick={() => handelUpdate(id_number)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" >
              <path
                fillRule="evenodd"
                d="M15.988 3.012A2.25 2.25 0 0 1 18 5.25v6.5A2.25 2.25 0 0 1 15.75 14H13.5V7A2.5 2.5 0 0 0 11 4.5H8.128a2.252 2.252 0 0 1 1.884-1.488A2.25 2.25 0 0 1 12.25 1h1.5a2.25 2.25 0 0 1 2.238 2.012ZM11.5 3.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v.25h-3v-.25Z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M2 7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7Zm2 3.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm0 3.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
  
          <button onClick={() => handelAddVaccine(id_number)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" >
              <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" clipRule="evenodd" />
            </svg>
          </button>
          
          <button onClick={() => handelDisplay(id_number)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-5.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 12a5.99 5.99 0 0 0-4.793 2.39A6.483 6.483 0 0 0 10 16.5a6.483 6.483 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12Z" clip-rule="evenodd" />
            </svg>
          </button>
  
        </div>
      </div>
    );
  };
  