const tableBody = document.getElementById('table');
const planetList = document.getElementById('planetList')
const keys = ['name', 'height', 'mass', 'eye_color', 'gender', 'homeworld'];

let characters = [];
let fetchUrl = 'https://swapi.dev/api/people/';
let previousPage;
let nextPage;

function getCharacters(url, wasNextClicked) {
    tableBody.textContent = 'Loading...';

    fetch(url).then((response) => {
        response.json().then((data) => {
            if (wasNextClicked) {
                characters = characters.concat(data.results);
            } else {
                characters = data.results;
            }
            previousPage = data.previous;
            nextPage = data.next;
            renderTableData(characters);
        })
    })
}

getCharacters(fetchUrl);

function renderTableData(array) {
    tableBody.innerHTML = ''

    array.map((character) => {
        const rowElement = document.createElement('tr');

        for (let key of keys) {
            const dataCellElement = document.createElement('td');

            if (key === 'homeworld') {
                const buttonElement = document.createElement('button');
                buttonElement.textContent = 'Homeworld';
                buttonElement.onclick = () => getHomeworld(character[key]);
                buttonElement.classList.add('btn');
                dataCellElement.appendChild(buttonElement);
            } else {
                dataCellElement.textContent = character[key];
            }

            rowElement.appendChild(dataCellElement);
        }

        tableBody.appendChild(rowElement);
    })

    buildTotalRow();
}

function buildTotalRow() {
    const rowElement = document.createElement('tr');

    for (let key of keys) {
        const dataCellElement = document.createElement('td');
        dataCellElement.classList.add('fw-bold');

        if (key === 'name') {
            dataCellElement.textContent = `Simboliu suma ${getCharacterNamesLengthSum()}`
        }

        if (key === 'height' || key === 'mass') {
            dataCellElement.textContent = getCharacterPropertySum(key);
        }

        rowElement.appendChild(dataCellElement);
    }

    tableBody.appendChild(rowElement);
}

function getHomeworld(url) {
    planetList.innerHTML = 'Loading...';
    // fetch(url) -> Kad istraukti informacija is serverio, pagal nurodyta url (nuoroda)
    // then(atsakymas) -> Promise (pazadas) kuris grazina atsakyma is serverio (kolkas netinktantis)
    fetch(url).then((response) => {
        // json() response konvertuojam (parsinam) i mum supranta objiekta
        // json() metodas kaip ir fetch yra promise (pazadas) kad jei imanoma kazka gauti is tos informacijos, tada galim atlikti kazkoki veiksma
        response.json().then((data) => {
            renderHomeworldData(data);
        })
    })
}

function renderHomeworldData(data) {
    planetList.innerHTML = '';
    const keys = ['name', 'population', 'terrain', 'climate', 'gravity']

    for (let key of keys) {
        const listItem = document.createElement('li');
        listItem.textContent = `${key}: ${data[key]}`;

        planetList.appendChild(listItem);
    }
}

// Praktines uzduotys

function getAllFirstNames() {
    console.log(characters.map((character) => character.name.split(' ')));
}

const getCharacterPropertySum = (property) =>
    characters.reduce((prev, current) => prev + Number(current[property]), 0);

const getCharacterNamesLengthSum = () => characters.reduce((prev, current) => prev + current.name.length, 0);


// Sortinimas

const sortByNumber = (property) => renderTableData(characters.sort((a, b) => a[property] - b[property]));
const sortByAlphabet = (property) => renderTableData(characters.sort((a, b) => a[property].localeCompare(b[property])));

// Filtravimas

const charactersWithGreaterMassThan80 = () => characters.filter((character) => character.mass > 80);
const charactersWithLessHeightThan180 = () => characters.filter((character) => character.height < 180);
const charatersMale = () => characters.filter((character) => character.gender === 'male');
const charatersWithBlueEyes = () => characters.filter((character) => character.eye_color === 'blue');

// Prideti

function addCharacter() {
    const nameInput = document.getElementById('name').value;
    const heightInput = document.getElementById('height').value;
    const massInput = document.getElementById('mass').value;
    const eyeColorInput = document.getElementById('eye_color').value;
    const genderInput = document.getElementById('gender').value;

    const newCharacter = {
        name: nameInput,
        height: heightInput,
        mass: massInput,
        eye_color: eyeColorInput,
        gender: genderInput
    }

    characters.push(newCharacter);

    renderTableData(characters);
}