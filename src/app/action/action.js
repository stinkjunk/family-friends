"use server";
export const submitProduct = async (prevState, formData) => {
  const error = {};
  const productname = formData.get("productname");
  const productprice = Number(formData.get("productprice"));

  console.log("productprice: ", productprice);
  if (!productname || productname.length < 3) {
    error.productname = "Name must be at least 3 characters long.";
  }
  if (productprice < 0.5) {
    error.productprice = "The price must be at least 50 cents.";
  }
  return { error, productname, productprice };
};
