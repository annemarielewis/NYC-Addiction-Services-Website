const buttonArray = [];

document.addEventListener("DOMContentLoaded", async function () {
  //await getRehabs();

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const responsesContainer = document.querySelector("#responsesContainer"); // Define the container outside of the loop

  for (let rehabId of cart) {
    try {
      const response = await axios.get(
        `http://localhost:3001/rehabs/${rehabId}`
      );
      const rehab = response.data;
      const rehabDiv = document.createElement("div");
      rehabDiv.setAttribute("data-rehab-id", rehab._id);
      rehabDiv.classList.add("response");

      const nameDiv = document.createElement("div");
      nameDiv.classList.add("name");
      nameDiv.textContent = "Name: " + rehab.name;
      console.log(rehab.name);

      const numberDiv = document.createElement("div");
      numberDiv.classList.add("number");
      numberDiv.textContent = "Number: " + rehab.number;

      const addressDiv = document.createElement("div");
      addressDiv.classList.add("address");
      addressDiv.textContent = "Address: " + rehab.address;

      const countyDiv = document.createElement("div");
      countyDiv.classList.add("county");
      countyDiv.textContent = "County: " + rehab.county;

      const urlDiv = document.createElement("div");
      urlDiv.classList.add("url");
      urlDiv.textContent = "URL: " + rehab.url;

      const descriptionDiv = document.createElement("div");
      descriptionDiv.classList.add("description");
      descriptionDiv.textContent = "Description: " + rehab.description;

      const deleteButton = document.createElement("button");
      deleteButton.classList.add("deleteButton");
      deleteButton.textContent = "delete";
      deleteButton.setAttribute("data-rehab-id", rehab._id);

      rehabDiv.appendChild(deleteButton);
      rehabDiv.appendChild(nameDiv);
      rehabDiv.appendChild(numberDiv);
      rehabDiv.appendChild(addressDiv);
      rehabDiv.appendChild(countyDiv);
      rehabDiv.appendChild(urlDiv);
      rehabDiv.appendChild(descriptionDiv);

      buttonArray.push(deleteButton);
      // Append each rehabDiv to the responsesContainer
      responsesContainer.appendChild(rehabDiv);

      //const buttons = document.querySelector(".deleteButton");

      deleteButton.addEventListener("click", function () {
        console.log("click delete");
        // Get the rehabID associated with the clicked button
        const rehabId = deleteButton.getAttribute("data-rehab-id");
        removeFromCart(rehabId);
      });
    } catch (error) {
      console.error(error);
    }
  }
});
console.log(buttonArray);
//create event listener for this function w/in function above
function removeFromCart(rehabId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(cart);
  // Find the index of the product ID in the cart array
  const index = cart.indexOf(rehabId);
  console.log(index);
  // If the product ID is found, remove it from the cart array
  if (index) {
    cart.splice(index, 1);
  }
  console.log(cart);
  localStorage.setItem("cart", JSON.stringify(cart));
  // Remove the product div from the cartItemsContainer
  const rehabDiv = document.querySelector(`div[data-rehab-id="${rehabId}"]`);
  if (rehabDiv) {
    rehabDiv.remove();
  }
}
// let rehabs = [];
// async function getRehabs() {
//   const response = await axios.get("http://localhost:3001/rehabs");
//   rehabs = response.data;
//   console.log(rehabs);
//   return rehabs;
// }

// document.addEventListener('DOMContentLoaded', async function() {

// let cart = JSON.parse(localStorage.getItem('cart')) || [];

// for (let rehabId of cart) {
//     const response = await axios.get(`http://localhost:3001/rehabs/${rehabId}`);
//     const rehab = response.data;
//     const rehabDiv = document.createElement('div');
//     rehabDiv.setAttribute('data-product-id', rehab._id);

//     const nameDiv = document.createElement("div");
//       nameDiv.classList.add("name");
//       nameDiv.textContent = "Name: " + rehab.name;
//       console.log(rehab.name);

//       const numberDiv = document.createElement("div");
//       numberDiv.classList.add("number");
//       numberDiv.textContent = "Number: " + rehab.number;

//       const addressDiv = document.createElement("div");
//       addressDiv.classList.add("address");
//       addressDiv.textContent = "Address: " + rehab.address;

//       const countyDiv = document.createElement("div");
//       countyDiv.classList.add("county");
//       countyDiv.textContent = "County: " + rehab.county;

//       const urlDiv = document.createElement("div");
//       urlDiv.classList.add("url");
//       urlDiv.textContent = "URL: " + rehab.url;

//       rehabDiv.appendChild(nameDiv);
//       rehabDiv.appendChild(numberDiv);
//       rehabDiv.appendChild(addressDiv);
//       rehabDiv.appendChild(countyDiv);
//       rehabDiv.appendChild(urlDiv);

//       const responsesContainer = document.querySelector("#responsesContainer");
//       //append data to responses container
//       responsesContainer.appendChild(rehabDiv);
//   } catch (error) {
//     console.error(error);
//   }
// });
