export const setStorage = (name, value) => localStorage.setItem(name, JSON.stringify(value));
export const getStorage = (name) => JSON.parse(localStorage.getItem(name));

export const getDate = () => {
    const date = new Date();
    const [
        month,
        day,
        year,
        hour,
        minutes
    ] = [
            (date.getMonth() + 1).toString().padStart(2, 0),
            date.getDate().toString().padStart(2, 0),
            date.getFullYear(),
            date.getHours().toString().padStart(2, 0),
            date.getMinutes().toString().padStart(2, 0)
        ];

    return [[hour, minutes].join(':'), [month, day, year].join('/')].join(' ');
}