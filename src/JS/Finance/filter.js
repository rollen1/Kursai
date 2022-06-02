import { paginate } from "./pagination.js";
import { data } from "./table.js";

// Type
export let filteredData = [];
export let isFiltered = false;

const filterByType = () => {
    const inputValue = document.querySelector('input[name=filterType]:checked').getAttribute('data-type');
    const filterType = inputValue === 'income' ? false : true;
    if (inputValue !== 'all') {
        filteredData = data.filter(item => item.type === filterType)
        isFiltered = true;
    } else {
        isFiltered = false;
    }

    paginate();
}

document.querySelectorAll('input[name=filterType]').forEach(el => el.onclick = () => filterByType());

// Date

const fromInput = document.getElementById('dateFrom');
const toInput = document.getElementById('dateTo');

const filterByDate = () => {
    isFiltered = true;
    let dateFrom = new Date(fromInput.value);
    let dateTo = new Date(toInput.value);
    filteredData = data.filter(item => {
        const isInBetweenFromAndTo = new Date(item.date) >= dateFrom && new Date(item.date) <= dateTo;
        const isAfterDateFrom = new Date(item.date) >= dateFrom;
        const isBeforeDateTo = new Date(item.date) <= dateTo;

        // jei isInBetweenFromAndTo

        if (isInBetweenFromAndTo) {
            return item;
        }
        // else {
        // if (isAfterDateFrom) return item;
        // if (isBeforeDateTo) return item;
        // }
    })

    console.log(filteredData);

    paginate();
}

fromInput.onchange = () => filterByDate()


toInput.onchange = () => filterByDate()
