import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


export default function Member() {
    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        id_number: 1,
        email: "",
      });
      
    const [isNew, setIsNew] = useState(true);
    const params = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        async function fetchData() {
          const id = params.id?.toString() || undefined;
          if(!id) return;
          setIsNew(false);
          const response = await fetch(
            `http://localhost:5050/api/members/1`
            //    `http://localhost:5050/api/members/${params.id_number.toString()}`

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
    
      // These methods will update the state properties.
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
            response = await fetch("http://localhost:5050/record", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(person),
            });
          } else {
            // if we are updating a record we will PATCH to /record/:id.
            response = await fetch(`http://localhost:5050/record/${params.id}`, {
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
          setForm({ first_name: "", last_name: "", id_number: 1, email: ""});
          navigate("/");
        }
      }
    
      // This following section will display the form that takes the input from the user.
      return (
        <>
          <h3 className="text-lg font-semibold p-4">Create/Update Employee Record</h3>
          <form
            onSubmit={onSubmit}
            className="border rounded-lg overflow-hidden p-4"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-slate-900/10 pb-12 md:grid-cols-2">
              <div>
                <h2 className="text-base font-semibold leading-7 text-slate-900">
                  Member Info
                </h2>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  This information will be displayed publicly so be careful what you
                  share.
                </p>
              </div>
    
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
                        type="text"
                        name="first_name"
                        id="first_name"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="First Name"
                        value={form.first_name}
                        onChange={(e) => updateForm({ first_name: e.target.value })}
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
                        type="text"
                        name="last_name"
                        id="last_name"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Last Name"
                        value={form.last_name}
                        onChange={(e) => updateForm({ last_name: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="position"
                    className="block text-sm font-medium leading-6 text-slate-900"
                  >
                    ID :
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="number"
                        name="id_number"
                        id="id_number"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Developer Advocate"
                        value={form.id_number}
                        onChange={(e) => updateForm({ id_number: e.target.value })}
                      />
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
                        type="email"
                        name="email"
                        id="email"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Email"
                        value={form.email}
                        onChange={(e) => updateForm({ email: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <div>
                 
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