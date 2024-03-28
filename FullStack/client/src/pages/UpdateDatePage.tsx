import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
//import ICorona from "./../Models/ICorona";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function UpdateDatePage() {
  const [newDate, setNewDate] = useState<Date>(new Date(Date.now()));
  const [newManufacturer, setNewManufacturer] = useState<string>(" ");
  const [newPositiveCorona, setNewPositiveCorona] = useState<Date>(new Date(Date.now()));
  const [newDateOfRecovery, setNewdateOfRecovery] = useState<Date>(new Date(Date.now()));
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const params = useParams();
  const navigate = useNavigate();

  const localId = params.id;

  function updateManufacturer(manufacturer: string){
    setNewManufacturer(manufacturer);
    setIsButtonDisabled(false);
  };

  async function handleUpdateDate(name: string){
    
    let localBody: { [key: string]:Date}={};
    if(name === "positive_corona"){
      localBody = {
        "positive_corona": newPositiveCorona
      }
    }
    if(name === "date_of_recovery"){
      localBody = {
        "date_of_recovery": newDateOfRecovery
      }
    }
    try {
      await fetch(`http://localhost:5050/api/corona/event/${localId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(localBody),
      });
    } catch (e) {
      console.error('The update failed: ', e);
    }
    navigate(`/intro/${localId}`);
  };

  //new vc
  async function saveVC(e: any) {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5050/api/corona/vc/${localId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_number: localId,
          date_of_vaccination: newDate,
          manufacturer: newManufacturer,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("A problem occurred with your fetch operation: ", error);
    } 
    navigate(`/intro/${localId}`);
  }

  return (
    <div className="p-4 ">
      <div>
        <h1 className="text-sky-700 font-bold m-3 text-xl">Update Page</h1>
      </div>
      <div>
        <div className="sm:col-span-4">
         
        <div>Updating the details of receiving a corona vaccine: </div>
         <div>
          <div>Manufacturer: </div>
          <input required type="text" value={newManufacturer} onChange={(e) => updateManufacturer(e.target.value)} className="rounded"/>
          <div>
          <div>Date: </div>
              <DatePicker selected={newDate} onChange={(date: Date) => setNewDate(date)} />
            </div>
         </div>
          <div className="mt-2">
            <button
 className={`bg-sky-300 hover:bg-sky-400 text-white font-bold py-2 px-4 rounded-full mt-2 ${
  isButtonDisabled ? "disabled opacity-50 cursor-not-allowed" : ""
}`}              onClick={(e) => saveVC(e)} disabled={isButtonDisabled}>
              Add Vaccination
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="sm:col-span-4">
          <label
            htmlFor="positive_corona"
            className="block text-sm font-medium leading-6 text-slate-900"
          >
            Positive to corona
          </label>
          <div className="mt-2">
            <div >
                 <DatePicker selected={newPositiveCorona} onChange={(date: Date) => setNewPositiveCorona(date)} /> 
            </div>
            <button
              className="bg-sky-300 hover:bg-sky-400 text-white font-bold py-2 px-4 rounded-full mt-2"
              onClick={() => handleUpdateDate("positive_corona")} >
              Add Date
            </button>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label
            htmlFor="date_of_recovery"
            className="block text-sm font-medium leading-6 text-slate-900"
          >
            Date of Recovery
          </label>
          <div className="mt-2">
            <div >
                <DatePicker selected={newDateOfRecovery} onChange={(date: Date) => setNewdateOfRecovery(date)} />
            </div>
            <button
              className="bg-sky-300 hover:bg-sky-400 text-white font-bold py-2 px-4 rounded-full mt-2"
              onClick={() => handleUpdateDate("date_of_recovery")} >
              Add Date
            </button>
          </div>
        </div>
        <div>  

            </div>
      </div>
    </div>
  );
}
