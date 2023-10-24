import {
  renderItemsList,
  clearInputs,
  dogs,
} from "./dom_util.js"

const searchButton = document.getElementById("search_button");
const clearButton = document.getElementById("clear_find_button");
const findInput = document.getElementById("search_input");
const sortSwitch = document.getElementById("sort_switch");
const countButton = document.getElementById("count_button");
const totalPriceLabel = document.getElementById("total_price");
const submitButton = document.getElementById("submit_button");

let descendingSort = false;

searchButton.addEventListener("click", () => {
  const searchTerm = findInput.value.toLowerCase();
  const foundDogs = dogs.filter((dog) => {
    const dogTitle = dog.title.toLowerCase();
    return dogTitle.includes(searchTerm);
  });
  const sortedDogs = sortSwitch.checked
    ? sortDogsByPrice(foundDogs)
    : foundDogs;

  renderItemsList(sortedDogs);
});

clearButton.addEventListener("click", () => {
  clearInputs();
  renderItemsList(dogs);
});

function calculateTotalPrice() {
  const displayedDogs = document.querySelectorAll(".first_dog");
  let total = 0;
  displayedDogs.forEach((dog) => {
    const dogPriceElement = dog.querySelector(".dog_price");
    if (dogPriceElement) {
      const dogPriceText = dogPriceElement.textContent.trim();
      const dogPrice = parseFloat(dogPriceText.replace("$", ""));
      if (!isNaN(dogPrice)) {
        total += dogPrice;
      }
    }
  });
  return total;
}

countButton.addEventListener("click", () => {
  const total = calculateTotalPrice();
  totalPriceLabel.textContent = total + "$";
});

sortSwitch.addEventListener("change", () => {
  descendingSort = sortSwitch.checked;
  const displayedDogs = document.querySelectorAll(".first_dog");

  const displayedDogsData = Array.from(displayedDogs).map((dogElement) => {
    const dogTitle = dogElement.querySelector(".dog_title")?.textContent.trim();
    const dogDescription = dogElement.querySelector(".dog_description")?.textContent.trim();
    const dogPriceElement = dogElement.querySelector(".dog_price");
    const dogPriceText = dogPriceElement ? dogPriceElement.textContent.trim() : "0";
    const dogPrice = parseFloat(dogPriceText.replace("$", ""));

    return {
      title: dogTitle || "",
      description: dogDescription || "",
      price: dogPrice || 0,
    };
  });

  const sortedDogs = displayedDogsData.slice().sort((a, b) => {
    const priceA = a.price;
    const priceB = b.price;
    return descendingSort ? priceB - priceA : priceA - priceB;
  });
  renderItemsList(sortedDogs);
});

submitButton.addEventListener("click", () => {
  const titleInput = document.getElementById("dog-select");
  const descriptionInput = document.getElementById("description_input");
  const expensesInput = document.getElementById("expenses_input");

  const title = titleInput.value;
  const description = descriptionInput.value;
  const price = expensesInput.value;

  if (title && description && price >= 1) {
    const newDog = {
      title: title,
      description: description,
      price: price,
    };

    dogs.push(newDog);

    renderItemsList(dogs);

    titleInput.value = "";
    descriptionInput.value = "";
    expensesInput.value = "";

  } else {
    alert("Please fill in all fields and ensure that the price is greater than or equal to 1.");
  }
});


const itemsContainer = document.getElementById("items_container");

itemsContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("edit-button")) {
    const index = Array.from(itemsContainer.querySelectorAll(".edit-button")).indexOf(event.target);
    const dogToEdit = dogs[index];

    createEditWindow(dogToEdit, index);
  }
});

function createEditWindow(dog, index) {
  const editWindow = document.createElement("div");
  editWindow.classList.add("edit-window");
  editWindow.innerHTML = `
    <h3>Edit Dog</h3>
    <div><label for="edit-dog-select">Title:</label>
    <select name="dogs" id="edit-dog-select" required>
      <option value="GoldenRetriever">Golden Retriever</option>
      <option value="LabradorRetriever">Labrador Retriever</option>
      <option value="PesPatron">PesPatron</option>
    </select>
    </div>
    <div>
    <label for="edit-description">Description:</label>
    <input type="text" id="edit-description" value="${dog.description}">
    </div>
    <div>
    <label for="edit-price">Price:</label>
    <input type="number" id="edit-price" min="1" value="${dog.price}">
    </div>
    <button id="submit-edit">Submit Changes</button>
  `;


  const dogSelect = editWindow.querySelector("#edit-dog-select");
  dogSelect.value = dog.title;

  const itemsContainer = document.getElementById("items_container");
  itemsContainer.appendChild(editWindow);

  configureSubmitEditButton(editWindow, index);
}

function configureSubmitEditButton(editWindow, index) {
  const submitEditButton = editWindow.querySelector("#submit-edit");
  submitEditButton.addEventListener("click", () => {
    const editedTitle = editWindow.querySelector("#edit-dog-select").value;
    const editedDescription = editWindow.querySelector("#edit-description").value;
    const editedPrice = editWindow.querySelector("#edit-price").value;
    const priceInput = editWindow.querySelector("#edit-price");
  const priceValue = parseInt(priceInput.value);
  if (priceValue < 1) {
    alert("Price cannot be less than 1");
  } else if (isNaN(priceValue)) {
    alert("Price must be a number");
  } else if (editedDescription.length < 1) {
    alert("Description cannot be empty");
  }
  else {
    dogs[index].title = editedTitle;
    dogs[index].description = editedDescription;
    dogs[index].price = editedPrice;

    renderItemsList(dogs);
    editWindow.remove();
  
  }
}
  );
}


window.addEventListener("DOMContentLoaded", () => {
  renderItemsList(stones);
});
