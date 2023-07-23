"use client";
import { NextPage } from "next";
import { Hero_Button, Navbar } from "../Components/Globals";
import { useForm, SubmitHandler, UseFormRegister } from "react-hook-form";
import React from "react";

interface Name {
  first_Name: string;
  last_Name: string;
}

interface Contact {
  email: string;
  phone: string;
}

interface Register_Name {
  register: UseFormRegister<Name>;
}

interface Register_Contact {
  register: UseFormRegister<Contact>;
}

export default function SignUp() {
  const [formStep, setFormStep] = React.useState<number>(0);
  const { register, handleSubmit } = useForm<any>();

  const SubmitForm: SubmitHandler<Name> = async (data: any, e: any) => {
    console.log(data);
    e?.preventDefault();
    setFormStep(formStep + 1);
  };
  return (
    <main>
      <Navbar />
      <section id="sign-up-page" className="flex h-[68vh] w-[100%]">
        <div className="my-auto mx-auto">
          <h2 className="text-bold text-2xl">Let's get to know you!</h2>
          <form
            className="min-w-[33%] mt-4"
            onSubmit={handleSubmit(SubmitForm)}
          >
            {formStep === 0 ? (
              <StepOne register={register} />
            ) : (
              <StepTwo register={register} />
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

const StepOne: NextPage<Register_Name> = (Register) => {
  const { register } = Register;
  return (
    <div>
      <div>
        <label htmlFor="first-name">
          <input
            {...register("first_Name")}
            type="text"
            id="first-name"
            className="bg-mainDark text-xl focus-visible:border-mainContrast focus-visible:rounded-bl-md focus-visible:rounded-br-md focus-visible:outline-none flex flex-col border px-4 py-1 border-darkGrey rounded-tr-md rounded-tl-md w-[100%]"
            placeholder="First name"
          />
        </label>
      </div>
      <div>
        <label htmlFor="last-name">
          <input
            {...register("last_Name")}
            type="text"
            id="first-name"
            className="bg-mainDark text-xl focus-visible:border-mainContrast focus-visible:rounded-tl-md focus-visible:rounded-tr-md focus-visible:outline-none flex flex-col border px-4 py-1 border-darkGrey rounded-br-md rounded-bl-md w-[100%]"
            placeholder="Last Name"
          />
        </label>
      </div>
      <div className="flex mt-3">
        <Hero_Button text_feild="Continue" styles="w-[100%]" />
      </div>
    </div>
  );
};

const StepTwo: NextPage<Register_Contact> = (Register) => {
  const { register } = Register;
  return (
    <div>
      <button>Back</button>
      <div>
        <label htmlFor="first-name">
          <input
            {...register("email")}
            type="text"
            id="first-name"
            className="bg-mainDark text-xl focus-visible:border-mainContrast focus-visible:rounded-bl-md focus-visible:rounded-br-md focus-visible:outline-none flex flex-col border px-4 py-1 border-darkGrey rounded-tr-md rounded-tl-md w-[100%]"
            placeholder="Email"
          />
        </label>
      </div>
      <div>
        <label htmlFor="last-name">
          <input
            {...register("phone")}
            type="text"
            id="first-name"
            className="bg-mainDark text-xl focus-visible:border-mainContrast focus-visible:rounded-tl-md focus-visible:rounded-tr-md focus-visible:outline-none flex flex-col border px-4 py-1 border-darkGrey rounded-br-md rounded-bl-md w-[100%]"
            placeholder="Phone"
          />
        </label>
      </div>
      <div className="flex mt-3">
        <Hero_Button text_feild="Continue" styles="w-[100%]" />
      </div>
    </div>
  );
};
