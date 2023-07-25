"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Hero_Button, Navbar } from "../Components/Globals";
import { useSearchParams } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const Confirm_Schema = z.object({
  code: z
    .string({ required_error: "A code is required" })
    .min(8, "Code is too short")
    .max(8, "Code is too long"),
});

type Confirm_Type = z.infer<typeof Confirm_Schema>;

export default function Verify() {
  const url_Query = useSearchParams();

  const email = url_Query.get("email") || "";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Confirm_Type>({
    resolver: zodResolver(Confirm_Schema),
  });
  const onSubmit: SubmitHandler<Confirm_Type> = async (data, e) => {
    e?.preventDefault();
    console.log(data);
  };
  return (
    <main>
      <Navbar />
      <section className="flex w-[100vw] h-[75vh]">
        <div className="flex mx-auto my-auto">
          <div>
            <div className=" flex justify-center">
              <h2 className="text-bold text-2xl">Confirm your email!</h2>
            </div>
            <div className="text-center">
              <p>We've sent you a conformation email at {email}</p>
            </div>
            <form
              className="mx-auto mt-4 w-[80%]"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label
                htmlFor="verify-code"
                className="bg-mainDark text-xl flex flex-col border px-4 py-1 border-darkGrey rounded-md w-[100%]"
              >
                <div className="flex justify-between">
                  <span className="text-xs">Conformation code:</span>
                  <span className="text-xs text-errorRed">
                    {errors.code?.message}
                  </span>
                </div>
                <input
                  {...register("code")}
                  type="text"
                  id="verify-code"
                  className="bg-mainDark"
                  placeholder="Code"
                />
              </label>
              <div className="flex mt-2">
                <Hero_Button text_feild="Submit" styles="w-[100%]" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
