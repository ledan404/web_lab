document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('typeForm');
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');

    const saveButton = document.getElementById('save_button');

    fetch(`http://127.0.0.1:8000/`)
        .then(response => response.json())
        .then(data => {
            const itemsData = data;
            const itemToEdit = itemsData[id];
            if (itemToEdit) {
                const titleSelect = document.getElementById('title');
                titleSelect.value = itemToEdit.title; // Remove the transformation
                document.getElementById('description').value = itemToEdit.description;
                document.getElementById('price').value = itemToEdit.price;
            } else {
                console.log(`Invalid itemIndex: ${id}`);
            }
        })

    saveButton.addEventListener('click', function () {
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const price = document.getElementById('price').value;
        const errorMessage = document.getElementById('error_message');

        errorMessage.textContent = "";

        if (!title || !description || price  === "" || price < 0) {
            errorMessage.textContent = "All fields are required and price can`t be less than 0!";
            return;
        }


        const updatedItem = {
            title: title,
            description: description,
            price: price
        };

        fetch(`http://127.0.0.1:8000/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
        .then(response => response.json())
        .then(data => {
            window.location.href = '/index.html';
        })
        .catch(error => {
            console.error("Error updating item: ", error);
        });
    });
});