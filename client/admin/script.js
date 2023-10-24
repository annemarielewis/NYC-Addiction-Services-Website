document.addEventListener("DOMContentLoaded", function () {
  const rehabForm = document.getElementById("rehabForm");

  rehabForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;
    const description = document.getElementById("description").value;
    const coconditions = document.getElementById("coconditions").checked;
    const detox = document.getElementById("detox").checked;
    const sexseparated = document.getElementById("sexseparated").checked;
    const address = document.getElementById("address").value;
    const county = document.getElementById("county").value;
    const url = document.getElementById("url").value;

    const rehabData = {
      name: name,
      number: number,
      description: description,
      coconditions: coconditions,
      detox: detox,
      sexseparated: sexseparated,
      address: address,
      county: county,
      url: url,
    
    };

    // Make an HTTP POST request to create the "Rehab" on the server.
    axios
      .post("http://localhost:3001/newrehab", rehabData)
      .then((response) => {
        // Handle a successful response (e.g., display a success message or redirect the user).
        console.log("Rehab created successfully:", response.data);
        alert("Rehab created successfully!");
      })
      .catch((error) => {
        // Handle an error response (e.g., show an error message to the user).
        console.error("Error creating Rehab:", error);
        alert("Error creating Rehab. Please try again.");
      });
      console.log("Rehab data:", rehabData);
  });
});
const rehabDeleteForm = document.getElementById("rehabDeleteForm");
rehabDeleteForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const id = document.getElementById("id").value;
  console.log("id", id);

  const rehabDeleteData = { id: id };

  axios
    .delete(`http://localhost:3001/deleterehab/${id}`, rehabDeleteData)
    .then((response) => {
      // Handle a successful response (e.g., display a success message or redirect the user).
      console.log("Rehab deleted successfully:", response.data);
      alert("Rehab deleted successfully!");
    })
    .catch((error) => {
      // Handle an error response (e.g., show an error message to the user).
      console.error("Error creating Rehab:", error);
      alert("Error deleting Rehab. Please try again.");
    });
});

//CRUD: update

// const updateRehabForm = document.getElementById("updateRehabForm");
// updateRehabForm.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const rehabId = "your_rehab_id"; // Replace with the actual rehab ID
//   const updatedFields = {
//     name: document.getElementById("name").value,
//     number: document.getElementById("number").value,
//     description: document.getElementById("description").value,
//     coconditions: document.getElementById("coconditions").checked,
//     detox: document.getElementById("detox").checked,
//     sexseparated: document.getElementById("sexseparated").checked,
//     address: document.getElementById("address").value,
//     county: document.getElementById("county").value,
//     url: document.getElementById("url").value,
//   };

//   // Send a PATCH request
//   axios
//     .patch(`http://localhost:3001/patchrehabs/${rehabId}`, updatedFields)
//     .then((response) => {
//       console.log("Rehab updated successfully:", response.data);
//     })
//     .catch((error) => {
//       console.error("Error updating rehab:", error);
//     });
// });
