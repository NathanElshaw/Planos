"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Hero_Button, Navbar } from "../Components/Globals";
import { useForm, SubmitHandler } from "react-hook-form";
import React from "react";
import { states } from "../Components/states";
import { sectors } from "../Components/sectors";
import { url } from "../Components/url";

const Name_Schema = z.object({
  first_Name: z.string().min(2, "First name is required!"),
  last_Name: z.string().min(2, "Last name is required!"),
});

const Contact_Schema = z.object({
  email: z.string({ required_error: "Email is required" }).email(),
  phone: z
    .string({ required_error: "Phone is required" })
    .min(14, "Phone number is too short!")
    .max(14, "Phone number is too long"),
  receive_Updates: z.boolean(),
});

const Login_Schema = z
  .object({
    username: z.string().min(6, "Username is too short"),
    password: z.string().min(6, "Password is too short"),
    confirm_Password: z.string().min(6, "Password is too short"),
  })
  .superRefine(({ confirm_Password, password }, _ctx) => {
    if (confirm_Password !== password) {
      _ctx.addIssue({
        path: ["password"],
        code: "custom",
        message: "Passwords do not match",
      });
    }
  });

const Company_Schema = z.object({
  company_Name: z.string(),
  company_Sector: z.string(),
  position: z.string(),
  company_Location: z.string(),
  company_Size: z.string(),
});

const Addition_Info_Schema = z.object({
  addition_Info: z.string().min(0),
});

type Name_Type = z.infer<typeof Name_Schema>;
type Contact_Type = z.infer<typeof Contact_Schema>;
type Login_Type = z.infer<typeof Login_Schema>;
type Company_Type = z.infer<typeof Company_Schema>;
type Addition_Info_Type = z.infer<typeof Addition_Info_Schema>;

export default function SignUp() {
  const [form_Step, set_Form_Step] = React.useState<number>(0);
  const [text_Input_Sector, set_Input_Sector] = React.useState<boolean>(false);
  const [full_Form, set_Full_Form] = React.useState<any>({});
  const [show_Password, set_Show_Password] = React.useState<boolean>(false);

  const {
    register: register_Name,
    handleSubmit: handle_Name_Submit,
    formState: { errors: Name_Errors },
  } = useForm<Name_Type>({
    resolver: zodResolver(Name_Schema),
  });

  const {
    register: register_Contact,
    handleSubmit: handle_Contact_Submit,
    setError: set_Error_Contact,
    clearErrors: clear_Error_Contact,
    formState: { errors: Contact_Errors },
  } = useForm<Contact_Type>({
    resolver: zodResolver(Contact_Schema),
  });

  const {
    register: register_Login,
    setError: set_Error_Login,
    clearErrors: clear_Error_Login,
    handleSubmit: handle_Login_Submit,
    formState: { errors: Login_Erros },
  } = useForm<Login_Type>({
    resolver: zodResolver(Login_Schema),
  });

  const {
    register: register_Company,
    handleSubmit: handle_Company_Submit,
    setValue: set_Company_Value,
    formState: { errors: Company_Errors },
  } = useForm<Company_Type>({
    resolver: zodResolver(Company_Schema),
  });

  const {
    register: register_Addition_Info,
    handleSubmit: handle_Addition_Info_Submit,
    formState: { errors: Addition_Info_Errors },
  } = useForm<Addition_Info_Type>({
    resolver: zodResolver(Addition_Info_Schema),
  });

  const Submit_Form_Name: SubmitHandler<Name_Type> = async (
    data: Name_Type,
    e: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => {
    e?.preventDefault();
    Object.assign(full_Form, { name: data.first_Name + " " + data.last_Name });
    set_Form_Step(form_Step + 1);
  };
  const Submit_Form_Contact: SubmitHandler<Contact_Type> = async (
    data: Contact_Type,
    e: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => {
    e?.preventDefault();
    const Email_Check = await fetch(`${url}/api/check/?email=${data.email}`, {
      method: "GET",
    });
    const return_Data = await Email_Check.json();
    if (return_Data.error)
      set_Error_Contact("email", { message: return_Data.error });
    else {
      Object.assign(full_Form, data);
      set_Form_Step(form_Step + 1);
    }
  };

  const Submit_Login: SubmitHandler<Login_Type> = async (
    data: Login_Type,
    e: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => {
    e?.preventDefault();
    const username_Check = await fetch(
      `${url}/api/check/?username=${data.username}`,
      { method: "GET" }
    );
    const return_Check = await username_Check.json();
    if (return_Check.error)
      set_Error_Login("username", { message: return_Check.error });
    else {
      Object.assign(full_Form, data);
      set_Form_Step(form_Step + 1);
    }
  };

  const Submit_Form_Company_Info: SubmitHandler<Company_Type> = async (
    data: Company_Type,
    e: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => {
    e?.preventDefault();
    Object.assign(full_Form, { company_Info: data });
    set_Form_Step(form_Step + 1);
  };

  const Submit_Form_Addition_Info: SubmitHandler<Addition_Info_Type> = async (
    data: Addition_Info_Type,
    e: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => {
    e?.preventDefault();
    Object.assign(full_Form, data);
    const submit_SignUp = await fetch(`${url}/api`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(full_Form),
    });
    window.location.replace(`/verify?email=${full_Form.email}`);
  };
  text_Input_Sector === true ? set_Company_Value("company_Sector", "") : "";

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <section id="sign-up-page" className="flex h-[68vh] w-[100%]">
        <div className="my-auto mx-auto">
          <h2 className="text-bold text-2xl">
            {form_Step === 0
              ? `Let's get to know you!`
              : form_Step === 1
              ? `How can we contact you?`
              : form_Step === 2
              ? "Lets make an account"
              : form_Step === 3
              ? `Tell us about your company!`
              : `Addition Info`}
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
                    className={`bg-mainDark text-xl flex flex-col border px-4 py-1 border-darkGrey rounded-tr-md rounded-tl-md w-[100%] ${
                      Name_Errors.first_Name ? "border-errorRed" : ""
                    }`}
                  >
                    <div className="flex justify-between">
                      <span className="text-xs">First name:</span>
                      <span className="text-xs text-errorRed">
                        {Name_Errors?.first_Name?.message}
                      </span>
                    </div>
                    <input
                      {...register_Name("first_Name")}
                      type="text"
                      id="first-name"
                      className="bg-mainDark"
                      placeholder="John"
                    />
                  </label>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className={`bg-mainDark text-xl flex flex-col border px-4 py-1 border-darkGrey rounded-br-md rounded-bl-md w-[100%] ${
                      Name_Errors.last_Name ? "border-errorRed" : ""
                    }`}
                  >
                    <div className="flex justify-between">
                      <span className="text-xs">Last name</span>
                      <span className="text-xs text-errorRed">
                        {Name_Errors.last_Name?.message}
                      </span>
                    </div>
                    <input
                      {...register_Name("last_Name")}
                      type="text"
                      id="last-name"
                      className="bg-mainDark"
                      placeholder="Doe"
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
                      htmlFor="phone"
                      className={`bg-mainDark text-xl flex flex-col border px-4 py-1 border-darkGrey rounded-tr-md rounded-tl-md w-[100%] ${
                        Contact_Errors.phone ? "border-errorRed" : ""
                      }`}
                    >
                      <div className="flex justify-between">
                        <span className="text-xs">Phone:</span>
                        <span className="text-xs text-errorRed">
                          {Contact_Errors.phone?.message}
                        </span>
                      </div>
                      <input
                        {...register_Contact("phone")}
                        type="tel"
                        id="phone"
                        className="bg-mainDark"
                        autoComplete="telephone"
                        placeholder="(XXX)XXX-XXXX"
                        maxLength={14}
                        onKeyUp={(e: any) => {
                          const input = e.target.value;
                          if (!e.code) {
                            input.charAt(5) !== " "
                              ? (e.target.value =
                                  input.substr(0, 5) +
                                  " " +
                                  input.substr(5, 15))
                              : "";
                          }
                        }}
                        onKeyDown={(e: any) => {
                          const input = e.target.value;
                          if (!e.code) {
                          } else
                            e.code === "Backspace"
                              ? input.length === 7
                                ? (e.target.value = input.substr(0, 5))
                                : input.length === 11
                                ? (e.target.value = input.substr(0, 10))
                                : ""
                              : e.code.substr(0, 5) !== "Digit"
                              ? e.preventDefault()
                              : input.length == 1 && input.charAt(0) != "("
                              ? (e.target.value = "(" + input)
                              : input.length === 4
                              ? (e.target.value = input + ") ")
                              : input.length === 9
                              ? (e.target.value = input + "-")
                              : "";
                        }}
                      />
                    </label>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className={`bg-mainDark text-xl flex flex-col border px-4 py-1 border-darkGrey rounded-br-md rounded-bl-md w-[100%] ${
                        Contact_Errors.email ? "border-errorRed" : ""
                      }`}
                    >
                      <div className="flex justify-between">
                        <span className="text-xs">Email:</span>
                        <span className="text-xs text-errorRed">
                          {Contact_Errors.email?.message}
                        </span>
                      </div>
                      <input
                        {...register_Contact("email")}
                        id="email"
                        className="bg-mainDark"
                        autoComplete="email address"
                        placeholder="Example@example.com"
                        onChange={() => {
                          clear_Error_Contact("email");
                        }}
                      />
                    </label>
                  </div>
                  <div>
                    <label
                      htmlFor="receive_Updates"
                      className="flex gap-x-2 items-center"
                    >
                      <input
                        {...register_Contact("receive_Updates")}
                        type="checkbox"
                        defaultChecked
                      />
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
              className="min-w-[50%] mt-4"
              onSubmit={handle_Login_Submit(Submit_Login)}
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
                  <label
                    htmlFor="username"
                    className={`bg-mainDark text-xl flex flex-col border px-4 py-1 border-darkGrey rounded-tr-md rounded-tl-md w-[100%] ${
                      Login_Erros.username ? "border-errorRed" : ""
                    }`}
                  >
                    <div className="flex justify-between">
                      <span className="text-xs">Username:</span>
                      <span className="text-xs text-errorRed">
                        {Login_Erros.username?.message}
                      </span>
                    </div>
                    <input
                      {...register_Login("username")}
                      type="text"
                      id="username"
                      className="bg-mainDark"
                      placeholder="Username"
                    />
                  </label>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className={`bg-mainDark text-xl flex flex-col border px-4 py-1 border-darkGrey w-[100%] ${
                      Login_Erros.password ? "border-errorRed" : ""
                    }`}
                  >
                    <div className="flex justify-between">
                      <span className="text-xs">Password:</span>
                      <span className="text-xs text-errorRed">
                        {Login_Erros.password?.message}
                      </span>
                    </div>
                    <div className="grid grid-cols-5">
                      <input
                        {...register_Login("password")}
                        type={show_Password === true ? "text" : "password"}
                        id="password"
                        className="bg-mainDark col-span-4"
                        placeholder="Password"
                      />
                      <button
                        className="text-xs flex"
                        onClick={(e) => {
                          e.preventDefault();
                          set_Show_Password(!show_Password);
                        }}
                      >
                        {show_Password === true
                          ? "Hide password"
                          : "Show Password"}
                      </button>
                    </div>
                  </label>
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className={`bg-mainDark text-xl flex flex-col border px-4 py-1 border-darkGrey border-br-md border-bl-md w-[100%] ${
                      Login_Erros.confirm_Password ||
                      Login_Erros.password?.message === "Passwords do not match"
                        ? "border-errorRed"
                        : ""
                    }`}
                  >
                    <div className="flex justify-between">
                      <span className="text-xs">Confirm password:</span>
                      <span className="text-xs text-errorRed">
                        {Login_Erros.confirm_Password?.message}
                      </span>
                    </div>
                    <input
                      {...register_Login("confirm_Password")}
                      type="password"
                      id="confirm-password"
                      className="bg-mainDark"
                      placeholder="Confirm password"
                    />
                  </label>
                </div>
                <div>
                  <p className="text-xs text-lightGrey mx-4">
                    Password must be longer than 8 chatarters and contain 1
                    special charater (!,?,#,$)
                  </p>
                </div>
                <div className="flex mt-3">
                  <Hero_Button text_feild="Continue" styles="w-[100%]" />
                </div>
              </div>
            </form>
          ) : form_Step === 3 ? (
            <form
              className="min-w-[33%] mt-4"
              onSubmit={handle_Company_Submit(Submit_Form_Company_Info)}
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
                        <div className="flex justify-between">
                          <span className="text-xs">Company name</span>
                          <span className="text-xs text-errorRed">
                            {Company_Errors.company_Name?.message}
                          </span>
                        </div>
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
                      <div>
                        <label
                          htmlFor="company-sector"
                          className="bg-mainDark text-xl flex flex-col border px-4 py-1 border-darkGrey rounded-br-md rounded-bl-md w-[100%]"
                        >
                          <div className="flex justify-between">
                            <span className="text-xs">Company sector</span>
                            <span className="text-xs text-errorRed">
                              {Company_Errors.company_Sector?.message}
                            </span>
                          </div>
                          <select
                            {...register_Company("company_Sector")}
                            id="company-sector"
                            className={
                              text_Input_Sector === true
                                ? "hidden"
                                : "bg-mainDark"
                            }
                            placeholder="Skilled trades"
                            onChange={(e) => {
                              e.target.value === "Other"
                                ? set_Input_Sector(!text_Input_Sector)
                                : "";
                            }}
                          >
                            {sectors.map((sector: string, index) => {
                              return (
                                <option
                                  key={`${sector}${index}`}
                                  value={sector}
                                >
                                  {sector}
                                </option>
                              );
                            })}
                          </select>
                          <input
                            {...register_Company("company_Sector")}
                            className={
                              text_Input_Sector === false
                                ? "hidden"
                                : "bg-mainDark"
                            }
                            type="text"
                            id="company_sector_text"
                            placeholder="Other"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div>
                      <label
                        htmlFor="company-size"
                        className="bg-mainDark text-xl flex flex-col border px-4 py-1 border-darkGrey rounded-tr-md rounded-tl-md w-[100%]"
                      >
                        <div className="flex justify-between">
                          <span className="text-xs">
                            {`Company size (employees)`}
                          </span>
                          <span className="text-xs text-errorRed">
                            {Company_Errors.company_Size?.message}
                          </span>
                        </div>
                        <input
                          {...register_Company("company_Size")}
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
                        <div>
                          <span className="text-xs">
                            Whats your position in the company?
                          </span>
                          <span className="text-xs text-errorRed">
                            {Company_Errors.position?.message}
                          </span>
                        </div>
                        <input
                          {...register_Company("position")}
                          type="text"
                          id="company-position"
                          className="bg-mainDark"
                          placeholder="Company position"
                        />
                      </label>
                    </div>
                  </div>

                  <div>
                    <div>
                      <label
                        htmlFor="state"
                        className="bg-mainDark text-xl flex flex-col border px-4 py-1 border-darkGrey rounded-br-md rounded-bl-md w-[100%]"
                      >
                        <div>
                          <span className="text-xs">State</span>
                          <span className="text-xs text-errorRed">
                            {Company_Errors.company_Location?.message}
                          </span>
                        </div>
                        <select
                          {...register_Company("company_Location")}
                          id="state"
                          className="bg-mainDark"
                          defaultValue={`Alabama`}
                        >
                          {states.map((state: string, index) => {
                            return (
                              <option key={index} value={state}>
                                {state}
                              </option>
                            );
                          })}
                        </select>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex mt-3">
                  <Hero_Button text_feild="Continue" styles="w-[100%]" />
                </div>
              </div>
            </form>
          ) : form_Step === 4 ? (
            <form
              className="min-w-[33%] mt-4"
              onSubmit={handle_Addition_Info_Submit(Submit_Form_Addition_Info)}
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
                <div>
                  <label
                    htmlFor="addition-info"
                    className="bg-mainDark text-xl flex flex-col border px-4 py-1 border-darkGrey rounded-tr-md rounded-tl-md w-[100%]"
                  >
                    <div className="flex justify-between">
                      <span className="text-xs">Addition Info (Optional)</span>
                      <span className="text-xs text-errorRed">
                        {Addition_Info_Errors.addition_Info?.message}
                      </span>
                    </div>
                    <textarea
                      {...register_Addition_Info("addition_Info")}
                      id="addition-info"
                      className="bg-mainDark"
                      cols={20}
                      rows={5}
                      placeholder="Features that could help your buisness"
                    ></textarea>
                  </label>
                </div>
              </div>
              <div className="mt-2">
                <Hero_Button text_feild="Submit" styles="w-[100%]" />
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
