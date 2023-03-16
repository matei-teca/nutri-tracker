import { validate } from "email-validator";
// const emailValidator = require('deep-email-validator');

export const searchByName = (inputValue, setSearchNames, setProduct) => {
  fetch(
    `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${inputValue}&search_simple=1&action=process&json=1&fields=code,product_name`
  )
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data.products);
      setSearchNames(data.products);
      setProduct(null);
    });
};

export const searchByBarcode = (barcode, setSearchNames, setProduct) => {
  fetch(
    `https://world.openfoodfacts.org/api/v2/product/${barcode}?fields=code,product_name,nutriments`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data["status_verbose"]);
      setSearchNames(null);
      data["status_verbose"] === "product found"
        ? setProduct({
            barcode: data.code,
            name: data.product["product_name"],
            nutriments: {
              kcal: data.product.nutriments["energy-kcal"],
              carbohydrates: data.product.nutriments.carbohydrates,
              fat: data.product.nutriments.fat,
              proteins: data.product.nutriments.proteins,
              fiber: data.product.nutriments.fiber,
              sugars: data.product.nutriments.sugars,
            },
          })
        : setProduct("Product Not Found");
    });
};

export const addingProduct = (product, useremail, grams) => {
  fetch(`http://localhost:3001/api/user/${useremail}/${grams}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    mode: "cors",
    body: JSON.stringify(product),
  })
};

export const checking = {
  name: (e) => {
    if (e.target.value.length < 5) {
      e.target.setCustomValidity("Invalid field.");
    } else {
      e.target.setCustomValidity("");
    }
  },
  email: (e) => {
    if (validate(e.target.value)) {
      e.target.setCustomValidity("");
    } else {
      e.target.setCustomValidity("Invalid field.");
    }
  },
  password: (e) => {
    if (e.target.value.length < 7) {
      e.target.setCustomValidity("Invalid field.");
    } else {
      e.target.setCustomValidity("");
    }
  },
};
