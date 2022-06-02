import { getStorage, setStorage } from "./util.js";
import {
    configurePopup,
    configureNameInput,
    configureAmountInput,
    configureConfirmButton,
    configureCancelButton,
    deleteEntry,
    renderTotalRow,
    headerClickHandler
} from "./tableUtils.js";
import { paginationData } from "./pagination.js";

export const headers = ['#', 'Name', 'Amount', 'Date', ''];
export let data = getStorage('data') || [];

const theadRow = document.querySelector('thead').children[0];
const tbody = document.querySelector('tbody');



headers.map(header => {
    const col = document.createElement('th');
    col.textContent = header
    col.style.cursor = 'pointer'
    headerClickHandler(col, header)

    theadRow.appendChild(col)
})



export const modifyData = (array) => {
    data = [...array];
    setStorage('data', data);
}

export const populateTableData = (array) => {
    tbody.innerHTML = '';

    array.map((entry, index) => {
        tbody.appendChild(createRow(entry, index))
    })

    renderTotalRow();
}

const createRow = (entry, index) => {
    const row = document.createElement('tr');
    row.classList.add(entry.type ? 'text-danger' : 'text-success')

    row.addEventListener('mouseover', () => {
        row.classList.add('text-primary');
        row.classList.remove(entry.type ? 'text-danger' : 'text-success');
    })

    row.addEventListener('mouseleave', () => {
        row.classList.add(entry.type ? 'text-danger' : 'text-success');
        row.classList.remove('text-primary');
    })

    headers.map((key) => {
        if (key) {
            row.appendChild(createColumn(key, entry, index))
        } else {
            const col = createColumn(key, entry, index)
            col.classList.add('text-end')

            col.appendChild(editButton(entry))
            col.appendChild(deleteButton(entry.id))
            row.appendChild(col);
        }
    })

    return row;
}

const createColumn = (key, entry, index) => {
    const col = document.createElement('td');
    col.classList.add('align-middle')

    if (key === '#') {
        col.textContent = paginationData.page === 1 ? index + 1 : (paginationData.resultsPerPage * (paginationData.page - 1)) + index + 1;
    } else {
        if (key !== '') col.textContent = entry[key.toLowerCase()];
    }

    return col;
}

const createButton = (handleOnClick, text, classes) => {
    const button = document.createElement('button');
    button.onclick = (param) => handleOnClick(param)

    button.textContent = text;
    button.classList.add(...classes)

    return button
}

const editButton = (entry) => {
    const classes = ['btn', 'btn-outline-primary', 'mx-3']
    return createButton(() => openPopup(entry), 'Edit', classes)
}

const deleteButton = (id) => {
    const classes = ['btn', 'btn-outline-danger']
    return createButton(() => deleteEntry(id), 'Remove', classes)
}

const openPopup = (entry) => {
    const popup = document.createElement('dialog');
    configurePopup(popup);

    const nameInput = configureNameInput(entry)

    const amountInput = configureAmountInput(entry);

    const confirm = configureConfirmButton({ entry, popup, nameInput, amountInput });

    const cancel = configureCancelButton(popup)

    popup.appendChild(nameInput);
    popup.appendChild(amountInput);
    popup.appendChild(confirm);
    popup.appendChild(cancel);

    document.body.appendChild(popup);
}

