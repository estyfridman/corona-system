import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import IMember from "./../Models/IMember.tsx";
// import { useForm } from "react-hook-form";

export default function FullMember() {
  // const { handleSubmit, register, formState: { errors } } = useForm();

    const [form, setForm] = useState<IMember>({
        first_name: "",
        last_name: "",
        id_number: 123456789,
        email: "",
        city: "",
        street: "",
        house_number: "",
        birth_date: new Date(),
        phone_number: "",
        mobile_number: "",
        image: "",
      });
      
    const [isNew, setIsNew] = useState(true);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
          const id = params.id?.toString() || undefined;
          if(!id) return;
          // if not returned, This is an edit mode
          setIsNew(false);
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
          setForm(record);
        }
        fetchData();
        return;
      }, [params.id, navigate]);
    
      //update the state properties
      function updateForm(value) {
        return setForm((prev) => {
          return { ...prev, ...value };
        });
      }
    
      // This function will handle the submission.
      async function onSubmit(e) {
        e.preventDefault();
        const person = { ...form };
        try {
          let response;
          if (isNew) {
            // if we are adding a new record we will POST to /record.
            response = await fetch("http://localhost:5050/api/members/new", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(person),
            });
          } else {
            // if we are updating a record we will PATCH to /record/:id.
            response = await fetch(`http://localhost:5050/api/members/${params.id}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(person),
            });
          }
    
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        } catch (error) {
          console.error('A problem occurred with your fetch operation: ', error);
        } finally {
          setForm({ first_name: "", last_name: "", id_number: 0, email: ""});
          navigate("/");
        }
      }
    
      // This following section will display the form that takes the input from the user.
      return (
        <>
          <h3 className="text-lg font-semibold p-4">Create/Update Employee Record</h3>              
          <div className="p-4">
                <h2 className="text-base font-semibold leading-7 text-slate-900">
                  Member Info
                </h2>
              </div>
          <form
            onSubmit={onSubmit}
            className="border rounded-lg overflow-hidden p-4"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-slate-900/10 pb-12 md:grid-cols-2">
              <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 ">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium leading-6 text-slate-900"
                  >
                    First Name
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text" minLength={2} 
                        name="first_name"
                        id="first_name"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="First Name"
                        value={form.first_name}
                        onChange={(e) => updateForm({ first_name: e.target.value })}
                        onBlur={(e) => {
                            if (!e.target.value.trim()) {
                              alert("First Name cannot be empty!");
                            }
                          }}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="sm:col-span-4">
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium leading-6 text-slate-900"
                  >
                    Last Name
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text" minLength={2} 
                        name="last_name"
                        id="last_name"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Last Name"
                        value={form.last_name}
                        onChange={(e) => updateForm({ last_name: e.target.value })}
                        onBlur={(e) => {
                            if (!e.target.value.trim()) {
                              alert("First Name cannot be empty!");
                            }
                          }}
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="id_number"
                    className="block text-sm font-medium leading-6 text-slate-900"
                  >
                    ID :
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      {isNew && 
                      (<div>
                        <input
                        type="text" maxLength={9} minLength={8} 
                        name="id_number"
                        id="id_number"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Id"
                        value={form.id_number}
                        onChange={(e) => {
                            // Restrict input to digits only
                            const regex = /^[0-9]*$/;
                            if (regex.test(e.target.value) || e.target.value === "") {
                              updateForm({ id_number: e.target.value });
                            }else{
                                alert("digits only!");}
                          }}
                        />
                        </div>)}
                      
                      {!isNew && form.id_number} 
                    </div>
                  </div>
                </div>
                
                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-slate-900"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="email" required
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        name="email"
                        id="email"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Email@example"
                        value={form.email}
                        onChange={(e) => updateForm({ email: e.target.value })}
                      />                        
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium leading-6 text-slate-900">
                    City
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="City"
                        value={form.city}
                        onChange={(e) => updateForm({ city: e.target.value })}
                      />
                    </div>
                  </div>
                </div>


                <div className="sm:col-span-4">
                  <label
                    htmlFor="street"
                    className="block text-sm font-medium leading-6 text-slate-900"
                  >
                    Street
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="street"
                        id="street"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Street"
                        value={form.street}
                        onChange={(e) => updateForm({ street: e.target.value })}
                      />
                    </div>
                  </div>
                </div>


                <div className="sm:col-span-4">
                  <label
                    htmlFor="house_number"
                    className="block text-sm font-medium leading-6 text-slate-900"
                  >
                    House_number: 
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="house_number"
                        id="house_number"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="House_number"
                        value={form.house_number}
                        onChange={(e) => updateForm({ house_number: e.target.value })}
                      />
                    </div>
                  </div>
                </div>


                <div className="sm:col-span-4">
                  <label
                    htmlFor="birth_date"
                    className="block text-sm font-medium leading-6 text-slate-900"
                  >
                    Birth Date
                  </label>
                  <div className="mt-2">
                    <div>
                      <DatePicker selected={form.birth_date} onChange={(birth_date: Date) => updateForm({ birth_date: new Date(birth_date) })} />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="phone_number"
                    className="block text-sm font-medium leading-6 text-slate-900">
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="tel"
                        pattern="[0-9]{10}"
                        name="phone_number"
                        id="phone_number"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="phone_number"
                        value={form.phone_number}
                        onChange={(e) => updateForm({ phone_number: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="mobile_number"
                    className="block text-sm font-medium leading-6 text-slate-900">
                    Mobile Number: 
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="tel"
                        pattern="[0-9]{10}"
                        name="mobile_number"
                        id="mobile_number"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="mobile_number"
                        value={form.mobile_number}
                        onChange={(e) => updateForm({ mobile_number: e.target.value })}
                      />
                    </div>
                  </div>
                </div>                 
              </div>
            </div>
            <input
              type="submit"
              value="Save Member Record"
              className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 hover:text-accent-foreground h-9 rounded-md px-3 cursor-pointer mt-4"
            />
          </form>
        </>
      );
};