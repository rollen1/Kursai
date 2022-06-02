import { setStorage, getDate } from "./util.js";
import { data, headers, modifyData, populateTableData } from "./table.js";
import { paginate, paginationData } from "./pagination.js";
let order = null

export const headerClickHandler = (col, header) => {
    col.onclick = () => {
        order = !order
        switch (header) {
            case 'Name':
                data.sort((a, b) => order ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
                break;
            case 'Amount':
                data.sort((a, b) => order ? a.amount - b.amount : b.amount - a.amount);
                break;
            case 'Date':
                data.sort((a, b) => order ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date));
                break;
            default:
                break;
        }
        paginate();
    }
}

export const configurePopup = (popup) => {
    const style = `
        position: fixed;
        top: 50%;
        transform: translateY(-50%);
        border: 1px solid #333;
        border-radius: 5px;
    `;
    popup.classList.add('d-flex', 'justify-content-between', 'align-items-center');
    popup.style = style;
    popup.open = true;
}

export const configureNameInput = (entry) => {
    const nameInput = document.createElement('input');
    nameInput.value = entry.name;

    return nameInput
}

export const configureAmountInput = (entry) => {
    const amountInput = document.createElement('input');
    amountInput.classList.add('mx-3')
    amountInput.value = entry.amount;
    amountInput.type = 'number';

    return amountInput;
}

export const configureConfirmButton = ({ entry, popup, nameInput, amountInput }) => {
    const confirm = document.createElement('button');
    confirm.classList.add('btn', 'btn-primary', 'mx-3')
    confirm.textContent = 'Save'
    confirm.onclick = () => {
        entry.name = nameInput.value
        entry.amount = amountInput.value
        entry.date = getDate()

        setStorage('data', data)
        paginate();
        document.body.removeChild(popup);
    }

    return confirm;
}

export const configureCancelButton = (popup) => {
    const cancel = document.createElement('button');
    cancel.classList.add('btn', 'btn-secondary')
    cancel.textContent = 'Cancel'
    cancel.onclick = () => {
        document.body.removeChild(popup);
    }

    return cancel
}

export const deleteEntry = (id) => {
    modifyData(data.filter((item) => item.id !== id))

    paginate();
}

export const renderTotalRow = () => {
    const tfooter = document.querySelector('tfoot');
    tfooter.innerHTML = '';
    const row = document.createElement('tr');
    const paginationRow = document.createElement('tr');

    headers.map(key => {
        const dataCell = document.createElement('td');

        if (key === 'Amount') {
            const reducer = (sum, val) => sum + Number(val.amount);
            dataCell.innerHTML = `
            <b>Page Total: ${paginationData.paginatedArray.reduce(reducer, 0)}</b>
            <br>
            <b>Data total: ${data.reduce(reducer, 0)}</b>`;
        }

        row.appendChild(dataCell);
    })

    const pages = document.createElement('span')
    pages.textContent = `${paginationData.page} - ${paginationData.totalPages}`
    pages.classList.add('align-middle');
    const classes = ['btn', 'btn-outline-secondary', 'mx-3', 'mt-2']

    const prevButton = document.createElement('button')
    prevButton.classList.add(...classes)
    prevButton.textContent = "Previous"
    prevButton.onclick = () => paginate(false)
    const nextButton = document.createElement('button')
    nextButton.classList.add(...classes)
    nextButton.textContent = "Next"
    nextButton.onclick = () => paginate(true)


    paginationRow.append(prevButton, nextButton, pages)

    tfooter.appendChild(row);
    tfooter.appendChild(paginationRow);
}
