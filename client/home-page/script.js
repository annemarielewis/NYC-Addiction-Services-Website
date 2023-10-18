//call in html elements: top row
const rehabButton = document.querySelector(".data-rehab");
const detoxButton = document.querySelector(".data-detox");
console.log("hi");

detoxButton.addEventListener("click", async () => {
  try {
    const apiResponse = await axios.get(`http://localhost:3001/detoxes`);

    apiResponse.data.forEach((response) => {
      // Create a new 'responseDiv' for each response.
      const responseDiv = document.createElement("div");
      responseDiv.classList.add("response");

      // Create inner divs for each property and set their classes and text content.
      const nameDiv = document.createElement("div");
      nameDiv.classList.add("name");
      nameDiv.textContent = "Name: " + response.name;
      console.log(response.name);

      const numberDiv = document.createElement("div");
      numberDiv.classList.add("number");
      numberDiv.textContent = "Number: " + response.number;

      const addressDiv = document.createElement("div");
      addressDiv.classList.add("address");
      addressDiv.textContent = "Address: " + response.address;

      const countyDiv = document.createElement("div");
      countyDiv.classList.add("county");
      countyDiv.textContent = "County: " + response.county;

      const urlDiv = document.createElement("div");
      urlDiv.classList.add("url");
      urlDiv.textContent = "URL: " + response.url;

      // Append the property divs to the 'responseDiv'.
      responseDiv.appendChild(nameDiv);
      responseDiv.appendChild(numberDiv);
      responseDiv.appendChild(addressDiv);
      responseDiv.appendChild(countyDiv);
      responseDiv.appendChild(urlDiv);

      const responsesContainer = document.querySelector("#responsesContainer");
      //append data to responses container
      responsesContainer.appendChild(responseDiv);
    });
  } catch (error) {
    console.error(error);
  }
});

//call in html elements for second row
const rehabBtn = document.querySelector("#rehab");
const secondRow = document.querySelector("#second-row");

rehabBtn.addEventListener("click", async () => {
  secondRow.style.display = "flex";
  rehabBtn.style.backgroundColor = "rgb(245, 209, 141)";
  scrollToDistance();
});

//call in html elements for third row
const allWomens = document.querySelector("#womens");
const allMens = document.querySelector("#mens");
const neutral = document.querySelector("#neutral");
const thirdRow = document.querySelector("#third-row");

//empty clicksequence array

let clickSequence = [];

allWomens.addEventListener("click", async () => {
  thirdRow.style.display = "flex";
  allWomens.style.backgroundColor = "rgb(245, 209, 141)";
  clickSequence.push(1);
  checkSequence();
  scrollToDistance17();
});

allMens.addEventListener("click", async () => {
  thirdRow.style.display = "flex";
  allMens.style.backgroundColor = "rgb(245, 209, 141)";
  clickSequence.push(2);
  checkSequence();
  scrollToDistance();
});

neutral.addEventListener("click", async () => {
  thirdRow.style.display = "flex";
  neutral.style.backgroundColor = "rgb(245, 209, 141)";
  clickSequence.push(3);
  checkSequence();
  scrollToDistance();
});

//highlight what's clicked in third row
const yes = document.querySelector("#yes");
const no = document.querySelector("#no");

yes.addEventListener("click", async () => {
  yes.style.backgroundColor = "rgb(245, 209, 141)";
  clickSequence.push(4);
  checkSequence();
  scrollToDistance();
});

no.addEventListener("click", async () => {
  no.style.backgroundColor = "rgb(245, 209, 141)";
  clickSequence.push(5);
  checkSequence();
  scrollToDistance();
});

function checkSequence() {
  const sequences = {
    14: () => {
      resultDiv.textContent =
        "All-womens rehabs that treat co-occurring conditions are listed below!"; // Display "Sequence Completed!"
      apiCall14(); // Make the API call
      clickSequence = [];
    },
    15: () => {
      resultDiv.textContent = "All-womens rehabs are listed below!";
      // Perform a different action here
      apiCall15();
      clickSequence = []; // Reset the sequence for the next attempt
    },
    24: () => {
      resultDiv.textContent =
        "All-mens rehabs that treat co-occurring conditions are listed below!";
      // Perform a different action here
      apiCall24();
      clickSequence = []; // Reset the sequence for the next attempt
    },
    25: () => {
      resultDiv.textContent = "All-mens rehabs are listed below!";
      // Perform a different action here
      apiCall25();
      clickSequence = []; // Reset the sequence for the next attempt
    },
    34: () => {
      resultDiv.textContent =
        "rehabs that treat co-occurring conditions are listed below";
      // Perform a different action here
      apiCall34();
      clickSequence = []; // Reset the sequence for the next attempt
    },
    35: () => {
      resultDiv.textContent = "rehabs are listed below";
      // Perform a different action here
      apiCall35();
      clickSequence = []; // Reset the sequence for the next attempt
    },
    // You can define more sequences and actions here
  };

  const sequenceKey = clickSequence.join("");
  if (sequences[sequenceKey]) {
    sequences[sequenceKey]();
  }
}

//api calls:
async function apiCall35() {
  try {
    const apiResponse = await axios.get(`http://localhost:3001/rehabs`);
    html(apiResponse);
  } catch (error) {
    console.error(error);
  }
}

async function apiCall15() {
  try {
    const apiResponse = await axios.get(`http://localhost:3001/divided`);
    html(apiResponse);
  } catch (error) {
    console.error(error);
  }
}

async function apiCall25() {
  try {
    const apiResponse = await axios.get(`http://localhost:3001/divided`);
    html(apiResponse);
  } catch (error) {
    console.error(error);
  }
}

async function apiCall34() {
  try {
    const apiResponse = await axios.get(`http://localhost:3001/coconditions`);
    html(apiResponse);
  } catch (error) {
    console.error(error);
  }
}

async function apiCall14() {
  try {
    const apiResponse = await axios.get(`http://localhost:3001/combined`);
    html(apiResponse);
  } catch (error) {
    console.error(error);
  }
}

async function apiCall24() {
  try {
    const apiResponse = await axios.get(`http://localhost:3001/combined`);
    html(apiResponse);
  } catch (error) {
    console.error(error);
  }
}

function html(apiResponse) {
  apiResponse.data.forEach((response) => {
    // Create a new 'responseDiv' for each response.
    const responseDiv = document.createElement("div");
    responseDiv.classList.add("response");

    // Create inner divs for each property and set their classes and text content.
    const nameDiv = document.createElement("div");
    nameDiv.classList.add("name");
    nameDiv.textContent = "Name: " + response.name;
    console.log(response.name);

    const numberDiv = document.createElement("div");
    numberDiv.classList.add("number");
    numberDiv.textContent = "Number: " + response.number;

    const addressDiv = document.createElement("div");
    addressDiv.classList.add("address");
    addressDiv.textContent = "Address: " + response.address;

    const countyDiv = document.createElement("div");
    countyDiv.classList.add("county");
    countyDiv.textContent = "County: " + response.county;

    const urlDiv = document.createElement("div");
    urlDiv.classList.add("url");
    urlDiv.textContent = "URL: " + response.url;

    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("description");
    descriptionDiv.textContent = "Description: " + response.description;

    // Append the property divs to the 'responseDiv'.
    responseDiv.appendChild(nameDiv);
    responseDiv.appendChild(numberDiv);
    responseDiv.appendChild(addressDiv);
    responseDiv.appendChild(countyDiv);
    responseDiv.appendChild(urlDiv);
    responseDiv.appendChild(descriptionDiv);

    const responsesContainer = document.querySelector("#responsesContainer");
    //append data to responses container
    responsesContainer.appendChild(responseDiv);
  });
}

function scrollToBottom() {
  window.scrollTo(0, document.body.scrollHeight);
}

function scrollToDistance() {
  const distanceToScroll =
    5 * parseFloat(getComputedStyle(document.documentElement).fontSize);
  window.scrollBy(0, distanceToScroll);
}

function scrollToDistance17() {
  const distanceToScroll =
    17 * parseFloat(getComputedStyle(document.documentElement).fontSize);
  window.scrollBy(0, distanceToScroll);
}

// //adding event listener to allwomen a-tag
// allWomen.addEventListener("click", async () => {
//   try {
//     const apiResponse = await axios.get(`http://localhost:3001/divide`);
//     res.redirect("../rehab-co-occurrent/index.html");
//   } catch (error) {
//     console.error(error);
//   }
//);

// //call in html elements:
// const rehabButton = document.querySelector(".data-rehab");
// const detoxButton = document.querySelector(".data-detox");
// console.log("hi");

// //perform event listener on the html elements:
// detoxButton.addEventListener("click", async () => {
//   let apiResponse = await axios.get(`http://localhost:3001/detoxes`);
//   console.log("hi");
//   await apiResponse.data.forEach((response) => {
//     // Create a new 'responseDiv' for each response.
//     const responseDiv = document.createElement("div");
//     responseDiv.classList.add("response");

//     // Create divs for each property and set their classes and text content.
//     const nameDiv = document.createElement("div");
//     nameDiv.classList.add("name");
//     nameDiv.textContent = "Name: " + response.name;
//     console.log(response.name);

//     const numberDiv = document.createElement("div");
//     numberDiv.classList.add("number");
//     numberDiv.textContent = "Number: " + response.number;

//     const addressDiv = document.createElement("div");
//     addressDiv.classList.add("address");
//     addressDiv.textContent = "Address: " + response.address;

//     const boroughDiv = document.createElement("div");
//     boroughDiv.classList.add("borough");
//     boroughDiv.textContent = "Boro: " + response.borough;

//     // Append the property divs to the 'responseDiv'.
//     responseDiv.appendChild(nameDiv);
//     responseDiv.appendChild(numberDiv);
//     responseDiv.appendChild(addressDiv);
//     responseDiv.appendChild(boroughDiv);

//     const iframe = document.getElementById("responsesContainer");
//     iframe.onload = function () {
//       // Access the document inside the iframe
//       const iframeDocument = iframe.contentDocument;
//       // Access the element in the iframe's document
//       const responsesContainer =
//         iframeDocument.getElementById("responsesContainer");
//       //append data to responses container
//       responsesContainer.appendChild(responseDiv);
//     };
//   });
//   res.redirect("http://127.0.0.1:5500/client/rehab-co-occurrent/index.html");
// });
// // Append the 'responseDiv' to detox-list HTML document, to the container div with an id "responsesContainer".
