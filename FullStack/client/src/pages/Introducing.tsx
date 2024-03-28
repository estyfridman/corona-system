import React from "react";
import { useState, useEffect } from "react";
import IMember from "./../Models/IMember.tsx";
import ICorona from "./../Models/ICorona.tsx";
import { useParams, useNavigate } from "react-router-dom";


export default function Introducing(){
    const [member, setMember] = useState<IMember>();
    const [coronaDetails, setCoronaDetails] = useState<ICorona>();
    const params = useParams();
    const navigate = useNavigate();

    
    useEffect(() => {
        async function fetchMember() {
          const id = params.id?.toString() || undefined;
          if(!id) return;

          const response = await fetch(
            `http://localhost:5050/api/members/${id.toString()}`
          );
          if (!response.ok) {
            const message = `An error has occurred: ${response.statusText}`;
            console.error(message);
            return;
          }
          const record = await response.json();
          if (!record) {
            console.warn(`Record with id ${id} not found`);
            navigate("/");
            return;
          }
          setMember(record);
        }
        fetchMember();

        async function fetchCoronaDetail(){
            const id = params.id?.toString() || undefined;
            if(!id) return;
            const response = await fetch(
                `http://localhost:5050/api/corona/${id.toString()}`
              );
            if (!response.ok) {
                const message = `An error has occurred: ${response.statusText}`;
                console.error(message);
                return;
            } 
            const corona = await response.json();
            if (!corona) {
                console.warn(`Corona detail with id ${id} not found`);
                navigate("/");
                return;
            }
            setCoronaDetails(corona)
        }

        fetchCoronaDetail()
        return;
      }, [params.id, navigate]);
    
    return (
        <div className="p-4">
            <h3 className="text-lg font-semibold p-4 bg-sky-100">Member Details</h3> 
            <section>
                <h6>Personal Information</h6>
                <div>
                    <div>First Name: {member?.first_name}</div>
                    <div>Last Name: {member?.last_name}</div>
                    <div>ID : {member?.id_number}</div>
                    <div>Email : {member?.email}</div>
                    <div>City : {member?.city}</div>
                    <div>Street : {member?.street}</div>
                    <div>House_number : {member?.house_number}</div>
                    {/* <div>Birth Date : {member?.birth_date?.getDay()} / {member?.birth_date?.getMonth()} / {member?.birth_date?.getFullYear()}</div> */}
                    <div>Birth Date: 
                         {member?.birth_date ? (
                            member?.birth_date?.toString()).slice(0,10) : ( " " )
                        }
                    </div>
                    <div>Phone Number : {member?.phone_number}</div>
                    <div>Mobile Number : {member?.mobile_number}</div>

                </div>
            </section>

            <section>
                <h6>A summary of his COVID-19 vaccination</h6>
                <div>
                    <div>Date of receiving a positive answer to Corona: {coronaDetails?.positive_corona ? (coronaDetails?.positive_corona?.toString()).slice(0,10) : ("Not sick yet")}</div>
                    <div>Date of recovery from corona: {coronaDetails?.date_of_recovery ? (coronaDetails?.date_of_recovery?.toString()).slice(0,10) : ("still not recovered")}</div>
                    
                    <div>
                        Vaccinations History: 
                         <ul>
                            {coronaDetails?.vaccinations?.map((vaccination) => (
                             <li key={vaccination.date_of_vaccination.toString()}>
                                <p>Date: {vaccination.date_of_vaccination.toString().slice(0,10)}</p>
                               <p>Manufacturer: {vaccination.manufacturer}</p>
                             </li>
                            ))}
                        </ul>
                    </div>
                
                </div>
            </section>
        </div>
    )
}