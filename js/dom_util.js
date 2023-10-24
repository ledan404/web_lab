export const dogs = [
  {
    title: "GoldenRetriever",
    description: "A friendly and intelligent dog breed",
    price: "1000",
  },
  {
    title: "LabradorRetriever",
    description: "One of the most popular dog breeds",
    price: "800",
  },
  {
    title: "PesPatron",
    description: "A versatile and highly trainable breed",
    price: "900",
  },
];

export const renderItemsList = (dogArray) => {
  const itemsContainer = document.getElementById("items_container");
  itemsContainer.innerHTML = '';

  dogArray.forEach((dog) => {
    const listItem = addItemToPage(dog);
    itemsContainer.appendChild(listItem);
  });
};

export const clearInputs = () => {
  const searchInput = document.getElementById("search_input");
  searchInput.value = "";
};

export const addItemToPage = (dog) => {
  const listItem = document.createElement("li");
  listItem.classList.add("first_dog", "col-md-2.5", "mt-2");
  listItem.innerHTML = `
    <div class="first_dog_item">
      <img class="first_dog_photo ml-1 mt-1" src="img/${dog.title}.jpeg" height="130" width="185" alt="${dog.title}">
      <h5 class="dog_title">${dog.title} </h5>
      <div class="dog_description">${dog.description} </div>
      <div class="dog_price ml-2 mt-2">${dog.price} $</div>
      <div class="edit-remove-buttons mt-3">
        <input class="edit-button" type="button" value="Edit">
      </div>
    </div>
  `;
  return listItem;
};

export function createEditForm(dog, onSave) {
  const editForm = document.createElement("div");
  editForm.classList.add("edit-form");
  editForm.innerHTML = `
    <h3>Edit Dog</h3>
    <label for="edit-title">Title:</label>
    <input type="text" id="edit-title" value="${dog.title}">
    <label for="edit-description">Description:</label>
    <input type="text" id="edit-description" value="${dog.description}">
    <label for="edit-price">Price:</label>
    <input type="number" id="edit-price" value="${dog.price}">
    <button id="submit-edit">Submit Changes</button>
  `;

  const submitEditButton = editForm.querySelector("#submit-edit");
  submitEditButton.addEventListener("click", () => {
    const editedTitle = editForm.querySelector("#edit-title").value;
    const editedDescription = editForm.querySelector("#edit-description").value;
    const editedPrice = editForm.querySelector("#edit-price").value;

    const updatedDog = {
      title: editedTitle,
      description: editedDescription,
      price: editedPrice,
    };

    onSave(updatedDog);
    editForm.remove();
  });

  return editForm;
}
