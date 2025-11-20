"use client";
import { useActionState } from "react";
import { submitProduct } from "@/app/action/action";

const addProduct = () => {
  const [state, postProduct] = useActionState(submitProduct, { error: {} });
  console.log("state", state);
  return (
    // <div className="flex justify-center items-center h-lvh">
    <div className="flex flex-col justify-center items-center h-[calc(100vh-var(--headerHeight))]">
      <h1 className="text-3xl font-bold my-5">Add product</h1>
      <form
        action={postProduct}
        className="px-7
      w-full md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 mb-[var(--headerHeight)]
      "
      >
        <div className="mb-5">
          {state.error.productname && (
            <p className="text-rose-400 text-sm py-0.5">
              *{state.error.productname}
            </p>
          )}
          <input
            type="text"
            name="productname"
            placeholder="Product name"
            className={`border-1 p-1 mr-2 h-10 rounded-full w-full px-4
             ${
               state.error.productname &&
               "border-rose-400 bg-red-100 placeholder-red-400"
             }`}
          />
        </div>
        <div className="mb-5">
          {state.error.productprice && (
            <p className="text-rose-400 text-sm py-0.5">
              *{state.error.productprice}
            </p>
          )}
          <input
            step="any"
            type="number"
            name="productprice"
            placeholder="Product price (In USD)"
            className={`border-1 p-1 mr-2 h-10 rounded-full w-full px-4
             ${
               state.error.productprice &&
               "border-rose-400 bg-red-100 placeholder-red-400"
             }`}
          />
        </div>
        <button className="bg-[var(--praimory)] border-1 p-1 mr-2 h-10 rounded-full w-full px-4 text-[var(--background)]">
          Add product
        </button>
      </form>
    </div>
  );
};

export default addProduct;
