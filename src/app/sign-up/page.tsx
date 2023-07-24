"use client";
import { NextPage } from "next";
import { Hero_Button, Navbar } from "../Components/Globals";
import { useForm, SubmitHandler } from "react-hook-form";
import React from "react";
import { states } from "../Components/states";

interface Name {
  first_Name: string;
  last_Name: string;
}

interface Contact {
  email: string;
  phone: string;
  receive_Updates: boolean;
}

interface Company {
  company_Name: string;
  postition: string;
  company_Location: string;
  company_Size: number;
}

export default function SignUp() {
  const [form_Step, set_Form_Step] = React.useState<number>(0);
  const [full_Form, set_Full_Form] = React.useState<{}>({});

  const { register: register_Name, handleSubmit: handle_Name_Submit } =
    useForm<Name>();

  const { register: register_Contact, handleSubmit: handle_Contact_Submit } =
    useForm<Contact>();

  const { register: register_Company, handleSubmit: handle_Company_Submit } =
    useForm<Company>();

  const {
    register: register_Company_Status,
    handleSubmit: handle_Company_Status_Submit,
  } = useForm<Contact>();

  const Submit_Form_Name: SubmitHandler<Name | Contact> = async (
    data: any,
    e: any
  ) => {
    console.log(data);
    e?.preventDefault();
    set_Full_Form({ ...full_Form, data });
    set_Form_Step(form_Step + 1);
  };
  const Submit_Form_Contact: SubmitHandler<Contact> = async (
    data: any,
    e: any
  ) => {
    console.log(data);
    e?.preventDefault();
    set_Full_Form({ ...full_Form, data });
    set_Form_Step(form_Step + 1);
  };
  const Submit_Form_Company_Info: SubmitHandler<Company> = async (
    data: any,
    e: any
  ) => {
    console.log(data);
    e?.preventDefault();
    set_Full_Form({ ...full_Form, data });
    set_Form_Step(form_Step + 1);
  };
  return (
    <main>
      <Navbar />
      <section id="sign-up-page" className="flex h-[68vh] w-[100%]">
        <div className="my-auto mx-auto">
          <h2 className="text-bold text-2xl">
            {form_Step === 0
              ? `Let's get to know you!`
              : form_Step === 1
              ? `How can we contact you?`
              : form_Step === 2
              ? `Tell us about your company!`
              : `Error`}
          </h2>
          {form_Step === 0 ? (
            <form
              className="min-w-[33%] mt-4"
              onSubmit={handle_Name_Submit(Submit_Form_Name)}
            >
              <div>
                <div>
                  <label
                    htmlFor="first-name"
                    className="bg-mainDark text-xl flex flex-col border px-4 py-1 border-darkGrey rounded-tr-md rounded-tl-md w-[100%]"
                  >
                    <div className="flex justify-between">
                      <span className="text-xs">First name:</span>
                      <span className="text-xs text-errorRed">Error</span>
                    </div>
                    <input
                      {...register_Name("first_Name")}
                      type="text"
                      id="first-name"
                      className="bg-mainDark"
                      placeholder="Foo"
                      required
                    />
                  </label>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="bg-mainDark text-xl flex flex-col border px-4 py-1 border-darkGrey rounded-br-md rounded-bl-md w-[100%]"
                  >
                    <span className="text-xs">Last name</span>
                    <input
                      {...register_Name("last_Name")}
                      type="text"
                      id="last-name"
                      className="bg-mainDark"
                      placeholder="Bar"
                    />
                  </label>
                </div>
                <div className="flex mt-3">
                  <Hero_Button text_feild="Continue" styles="w-[100%]" />
                </div>
              </div>
            </form>
          ) : form_Step === 1 ? (
            <form
              className="min-w-[33%] mt-4"
              onSubmit={handle_Contact_Submit(Submit_Form_Contact)}
            >
              <div>
                <div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      set_Form_Step(form_Step - 1);
                    }}
                  >
                    Back
                  </button>
                </div>
                <div>
                  <div>
                    <label
                      htmlFor="first-name"
                      className="bg-mainDark text-xl flex flex-col border px-4 py-1 border-darkGrey rounded-tr-md rounded-tl-md w-[100%]"
                    >
                      <span className="text-xs">Phone:</span>
                      <input
                        {...register_Contact("phone")}
                        type="text"
                        id="phone"
                        className="bg-mainDark"
                        autoComplete="telephone"
                        placeholder="Phone"
                      />
                    </label>
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="bg-mainDark text-xl flex flex-col border px-4 py-1 border-darkGrey rounded-br-md rounded-bl-md w-[100%]"
                    >
                      <span className="text-xs">Email:</span>
                      <input
                        {...register_Contact("email")}
                        id="email"
                        className="bg-mainDark"
                        autoComplete="email address"
                        placeholder="Email"
                      />
                    </label>
                  </div>
                  <div>
                    <label
                      htmlFor="receive_Updates"
                      className="flex gap-x-2 items-center"
                    >
                      <input type="checkbox" defaultChecked />
                      <span>Receive updates?</span>
                      <span className="text-xs text-mainWhite mt-auto">
                        We promise no spam!
                      </span>
                    </label>
                  </div>
                </div>
                <div className="flex mt-3">
                  <Hero_Button text_feild="Continue" styles="w-[100%]" />
                </div>
              </div>
            </form>
          ) : form_Step === 2 ? (
            <form
              className="min-w-[33%] mt-4"
              onSubmit={handle_Name_Submit(Submit_Form_Name)}
            >
              <div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    set_Form_Step(form_Step - 1);
                  }}
                >
                  Back
                </button>
                <div className="flex flex-col gap-y-4">
                  <div>
                    <div>
                      <label
                        htmlFor="first-name"
                        className="bg-mainDark text-xl flex flex-col border px-4 py-1 border-darkGrey rounded-tr-md rounded-tl-md w-[100%]"
                      >
                        <span className="text-xs">Company name</span>
                        <input
                          {...register_Company("company_Name")}
                          type="text"
                          id="first-name"
                          className="bg-mainDark"
                          placeholder="The best company ever"
                        />
                      </label>
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="bg-mainDark text-xl flex flex-col border px-4 py-1 border-darkGrey rounded-br-md rounded-bl-md w-[100%]"
                      >
                        <span className="text-xs">Address</span>
                        <select
                          {...register_Company("company_Location")}
                          id="last-name"
                          className="bg-mainDark"
                          defaultValue={`Alabama`}
                        >
                          {states.map((state: string) => {
                            return <option value={state}>{state}</option>;
                          })}
                        </select>
                      </label>
                    </div>
                  </div>
                  <div>
                    <div>
                      <label
                        htmlFor="company-size"
                        className="bg-mainDark text-xl flex flex-col border px-4 py-1 border-darkGrey rounded-tr-md rounded-tl-md w-[100%]"
                      >
                        <span className="text-xs">Company size</span>
                        <input
                          {...register_Company("company_Name")}
                          type="number"
                          id="company-size"
                          className="bg-mainDark"
                          placeholder="25"
                        />
                      </label>
                    </div>
                    <div>
                      <label
                        htmlFor="company-position"
                        className="bg-mainDark text-xl flex flex-col border px-4 py-1 border-darkGrey rounded-br-md rounded-bl-md w-[100%]"
                      >
                        <span className="text-xs">
                          Whats your position in the company?
                        </span>
                        <input
                          {...register_Company("company_Location")}
                          type="text"
                          id="last-name"
                          className="bg-mainDark"
                          placeholder="Company position"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex mt-3">
                  <Hero_Button text_feild="Continue" styles="w-[100%]" />
                </div>
              </div>
            </form>
          ) : (
            <></>
          )}
        </div>
      </section>
    </main>
  );
}
