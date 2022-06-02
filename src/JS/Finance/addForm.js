import { data } from "./table.js";
import { setStorage, getDate } from "./util.js";
import { paginate } from "./pagination.js";

const addForm = document.getElementById('addForm');

const add = (event) => {
    event.preventDefault();
    const name = document.querySelector('#name').value;
    const type = document.querySelector('input[name=type]:checked').getAttribute('data-type') === 'income' ? false : true;
    const amountValue = document.querySelector('#amount').value
    const amount = type ? -Math.abs(amountValue) : amountValue;
    const id = data.length + name + amount;

    const date = getDate();

    const entry = { id, name, amount, date, type }
    data.push(entry);

    console.log(entry);

    document.querySelector('#name').value = '';
    document.querySelector('#amount').value = '';

    setStorage('data', data);
    paginate();
}


addForm.onsubmit = (event) => add(event);




