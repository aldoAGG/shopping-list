import '../scss/app.scss'

// const backButton = document.getElementById('back-button');
const menuToggle = document.querySelectorAll('.jsMenuToggle');
const checklistSections = document.querySelectorAll('.checklist-container');
const checklistItems = document.querySelectorAll('li');
const navLinks = document.querySelectorAll('.nav-links');
const sortButton = document.querySelectorAll('.jsSortList');
const resetListButton = document.getElementById('jsResetList');
let selectedItemsCounter = 0;

menuToggle.forEach(e => {
    e.addEventListener('click', () => {
        document.querySelector('.nav--list').classList.toggle('nav--show');

        if (document.querySelector('.nav--list').classList.contains('nav--show')) {
            checkSectionCompletion();
            saveToLocalStorage();
            selectedItemsCounter = 0;
        }
    });
});

navLinks.forEach(e => {
    e.addEventListener('click', () => {
        document.querySelector('.nav--list').classList.toggle('nav--show');
    });
});

// Add relevant class to item based on current state
const itemClassAdd = function (i) {
    if (i.classList.contains('selected')) {
        i.classList.remove('selected');
        i.classList.add('done');
        moveCompletedListItem(i);
    } else {
        i.classList.add('selected');
    }
};

// Click listener for all checklist items
for (let i = 0, n = checklistItems.length; i < n; i++) {
    checklistItems[i].addEventListener('click', (e) => {
        // Fixes classList.add on input element clicks by ensuring the class is only added when the parent li is clicked.
        if(e.target !== e.currentTarget) return;
        itemClassAdd(checklistItems[i]);
    });
}

const moveCompletedListItem = function (listItem) {
    // Select the parent UL for clicked item
    let ulParent = listItem.parentElement;
    // Append the passed item to parent element
    ulParent.append(listItem);
}

resetListButton.addEventListener('click', function () {
    let resetCheck = window.confirm("Are you sure you want to reset your list?");
    if (resetCheck) {
        localStorage.clear();
    }
});

const saveToLocalStorage = function () {
    // Create an array to store the li values
    let toStorage = [];
    let values = checklistItems;

    for (let i = 0, n = values.length; i < n; i++) {
        if (values[i].classList.length > 0) {
            toStorage.push(values[i].innerHTML+':'+values[i].className);
        }
    }
    console.log(toStorage);
    localStorage.setItem('items', JSON.stringify(toStorage));
    console.log(localStorage);
}

// const loadAll = function () {
//     const storedvalue = JSON.parse(localStorage.getItem('items'));
//     console.log(storedvalue);
//     //Load your list here
// }


// Checks if checklist items are done or not. Will be used to mark the nav button as incomplete or done.
const checkSectionCompletion = function () {
    for (let i = 0, n = checklistSections.length;  i < n; i++) {
        // Selects all the list items for the specified section
        const sectionTitle = checklistSections[i].firstElementChild.innerHTML;
        const checklistItems = checklistSections[i].querySelectorAll('li');

        for (let i = 0, n = checklistItems.length; i < n; i++) {
            const selected = checklistItems[i].classList.contains('selected');
            const done = checklistItems[i].classList.contains('done');

            // Confirming a given list item has a class at all
            if (checklistItems[i].classList.length > 0) {
                // If item has a class, assume the list is incomplete
                if (selected) {
                    selectedItemsCounter += 1;
                    if (selectedItemsCounter !== 0) {
                        console.log(`${sectionTitle} is incomplete`);
                    }
                } else if (selectedItemsCounter === 0) {
                    console.log(`${sectionTitle} is done`);
                }
            }
        }
    }
}
