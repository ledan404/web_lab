import {
    toggleSort,
    searchItems,
    countTotalExpenses,
    setCountButtonClicked
} from './dom_util.js';

const backendUrl = 'http://127.0.0.1:8000'; // Ваша адреса бекенду

function createItem(item) {
    const { id, title, description, price } = item;
    const itemBlock = document.createElement('div');
    itemBlock.classList.add('item__block');

    const titleParagraph = document.createElement('p');
    titleParagraph.classList.add('item__paragraph');
    titleParagraph.textContent = title;

    const descParagraph = document.createElement('p');
    descParagraph.classList.add('item__description');
    descParagraph.textContent = description;

    const priceDiv = document.createElement('div');
    priceDiv.classList.add('item__price');
    priceDiv.textContent = price;

    const editRemoveButtons = document.createElement('div');
    editRemoveButtons.classList.add('edit-remove__buttons');

    const editButton = document.createElement('input');
    editButton.type = 'button';
    editButton.value = 'Edit';
    editButton.classList.add('edit__button');
    editButton.addEventListener('click', function () {
        window.location.href = `/edit.html?id=${id}`;
    });

    const removeButton = document.createElement('input');
    removeButton.classList.add('remove__button');
    removeButton.type = 'button';
    removeButton.value = 'Remove';

    removeButton.addEventListener('click', function() {
        if (window.confirm('Are you sure you want to remove this item?')) {
            itemBlock.remove();

fetch(`${backendUrl}/${id}`, {
    method: 'DELETE',
})
.then(response => response.json())
.then(data => {
    console.log(data.message);
})
.catch(error => {
    console.error("Error deleting item: ", error);
});
        }
    });

    editRemoveButtons.appendChild(editButton);
    editRemoveButtons.appendChild(removeButton);

    itemBlock.appendChild(titleParagraph);
    itemBlock.appendChild(descParagraph);
    itemBlock.appendChild(priceDiv);
    itemBlock.appendChild(editRemoveButtons);

    return itemBlock;
}

document.addEventListener('DOMContentLoaded', function () {
    const itemsContainer = document.getElementById('items_container');

    fetch(`${backendUrl}/`)
        .then(response => response.json())
        .then(itemsData => {
            itemsData.forEach(item => {
                const newItem = createItem(item);
                itemsContainer.appendChild(newItem);
            });
        })
        .catch(error => {
            console.error("Error fetching items: ", error);
        });

    const sortSwitch = document.getElementById('sort_switch');
    const searchButton = document.getElementById('search_button');
    const clearFindButton = document.getElementById('clear_find_button');
    const countButton = document.getElementById('count_button');

    sortSwitch.addEventListener('change', toggleSort);
    searchButton.addEventListener('click', searchItems);

    clearFindButton.addEventListener('click', function () {
        document.getElementById('search_input').value = '';
        searchItems();
    });

    countButton.addEventListener('click', function () {
        setCountButtonClicked();
        countTotalExpenses();
    });

    countTotalExpenses();
});
