import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const schemaValidation = yup.object({
  firstName: yup.string().required("Please fill out this field").max(10),
});

const SignUpFormHook = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    resetField, //reset 1 trường cụ thể
    setFocus,
    setValue,
    formState: { errors, isSubmitting, isValid, isDirty, dirtyFields },
  } = useForm({
    resolver: yupResolver(schemaValidation),
    mode: "onChange",
  });
  // console.log(isDirty);
  // console.log(isValid);
  const watchShowAge = watch("showAge", false);
  console.log(watchShowAge);
  const onSubmit = async (values) => {
    if (isValid) {
      console.log("Send data to backend");
      // sử dụng khi dã submit thành công
      reset({
        firstName: "",
        lastName: "",
        email: "",
      });
    }
    // const response = await axios.get(
    //   "https://hn.algolia.com/api/v1/search?query=react"
    // );
    // return response.data;
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve();
    //     console.log(values);
    //   }, 1000);
    // });
  };
  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);
  const handleSetDem0Data = () => {
    setValue("firstName", "evondev", {});
    setValue("lastName", "Tram");
    setValue("email", "tram@gmail.com");
  };
  return (
    <div>
      <form
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        className="p-10 w-full max-w-[500px] mx-auto"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName">FirstName</label>
          <input
            type="text"
            id="firstName"
            placeholder="Enter your firstName"
            className="p-4 rounded-md border border-gray-100"
            {...register("firstName", {
              required: true,
              maxLength: 10,
            })}
          />
          {errors?.firstName && (
            <div className="text-red-500 text-sm">
              {errors.firstName?.message}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter your lastName"
            className="p-4 rounded-md border border-gray-100"
            // {...formik.getFieldProps("lastName")}
            {...register("lastName")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="p-4 rounded-md border border-gray-100"
            {...register("email")}
          />
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <input type="checkbox" name="" id="" {...register("showAge")} />
          {watchShowAge && (
            <input
              type="number"
              name=""
              id=""
              placeholder="Please enter your age"
            />
          )}
        </div>
        <div>
          <button
            // loadding={formState.isSubmitting}
            type="submit"
            className="p-3 rounded-lg w-full bg-blue-600 text-white "
          >
            {isSubmitting ? (
              <div className="w-5 mx-auto h-5 border-4 border-White rounded-full animate-spin border-t-2 border-t-transparent"></div>
            ) : (
              "SUBMIT"
            )}
          </button>
        </div>
        <div>
          <button
            className=" mt-3 p-3 rounded text-white bg-black"
            onClick={handleSetDem0Data}
          >
            demo data
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpFormHook;
