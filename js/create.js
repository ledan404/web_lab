

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('typeForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const price = document.getElementById('price').value;
        const errorMessage = document.getElementById('error_message');

        errorMessage.textContent = "";

        if (!title || !description || !price) {
            errorMessage.textContent = "All fields are required!";
            return;
        }

        const newItemData = {
            title: title,
            description: description,
            price: price
        };

        fetch('http://127.0.0.1:8000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newItemData),
        })
        .then(response => response.json())
        .then(data => {
            window.location.href = '/index.html';
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});