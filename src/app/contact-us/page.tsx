"use client";

import { z } from "zod";
import {
  Footer,
  Hero_Button,
  Navbar,
  Thank_You_Page,
} from "../Components/Globals";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const Contact_Schema = z.object({
  name: z.string().min(2, { message: "A name is required" }),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Your message is too short!" }),
});

type Contact_Type = z.infer<typeof Contact_Schema>;

export default function ContactUs() {
  const [requesting_Users_Name, set_Users_Name] = useState<string>("");
  const [Thank_You, set_Thank_You] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Contact_Type>({
    resolver: zodResolver(Contact_Schema),
  });

  const on_Contact_Submit: SubmitHandler<Contact_Type> = async (data, e) => {
    e?.preventDefault();
    //await info to send then
    set_Users_Name(data.name);
    set_Thank_You(true);
  };

  return (
    <main>
      <Navbar />
      {Thank_You === true ? (
        <Thank_You_Page
          name={requesting_Users_Name}
          message="We will be in contact with you shortly!"
        />
      ) : (
        <section id="contact-us-main">
          <div className=" mx-4 my-4">
            <h2 className="text-2xl">Contact Us!</h2>
          </div>
          <div className="flex h-[85vh] w-[100%]">
            <div className="flex mx-auto my-auto">
              <form
                onSubmit={handleSubmit(on_Contact_Submit)}
                className="flex flex-col gap-y-4"
              >
                <label
                  htmlFor="name"
                  className={`bg-mainDark text-xl flex flex-col border px-4 py-1 border-darkGrey rounded-md w-[100%] ${
                    errors.name ? "border-errorRed" : ""
                  }`}
                >
                  <div className="flex justify-between">
                    <span className="text-xs">Name:</span>
                    <span className="text-xs text-errorRed">
                      {errors.name?.message}
                    </span>
                  </div>
                  <input
                    {...register("name")}
                    type="text"
                    className="bg-mainDark"
                    placeholder="Name"
                    autoComplete="fullname"
                  />
                </label>
                <div>
                  <label
                    htmlFor="email"
                    className={`bg-mainDark text-xl flex flex-col border px-4 py-1 border-darkGrey rounded-tr-md rounded-tl-md w-[100%] ${
                      errors.email ? "border-errorRed" : ""
                    }`}
                  >
                    <div className="flex justify-between">
                      <span className="text-xs">Email:</span>
                      <span className="text-xs text-errorRed">
                        {errors.email?.message}
                      </span>
                    </div>
                    <input
                      {...register("email")}
                      type="text"
                      className="bg-mainDark"
                      placeholder="Example@example.com"
                      autoComplete="email"
                    />
                  </label>

                  <label
                    htmlFor="phone"
                    className={`bg-mainDark text-xl flex flex-col border px-4 py-1 border-darkGrey rounded-bl-md rounded-br-md w-[100%] ${
                      errors.phone ? "border-errorRed" : ""
                    }`}
                  >
                    <div className="flex justify-between">
                      <span className="text-xs">Phone: (Optional)</span>
                      <span className="text-xs text-errorRed">
                        {errors.phone?.message}
                      </span>
                    </div>
                    <input
                      {...register("phone")}
                      type="text"
                      className="bg-mainDark"
                      placeholder="(XXX)XXX-XXXX"
                      autoComplete="tel"
                    />
                  </label>
                </div>
                <label
                  htmlFor="message"
                  className={`bg-mainDark text-xl flex flex-col border px-4 py-1 border-darkGrey rounded-md w-[100%] ${
                    errors.message ? "border-errorRed" : ""
                  }`}
                >
                  <div className="flex justify-between">
                    <span className="text-xs">Message:</span>
                    <span className="text-xs text-errorRed">
                      {errors.message?.message}
                    </span>
                  </div>
                  <textarea
                    {...register("message")}
                    cols={25}
                    rows={8}
                    className="bg-mainDark"
                  ></textarea>
                </label>
                <div className="flex">
                  <Hero_Button text_feild="Submit" styles="w-[100%]" />
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
      <Footer />
    </main>
  );
}
