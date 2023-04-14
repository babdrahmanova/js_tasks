const form = document.getElementById('user-form');
const getFormValues = (event) => {
    event.preventDefault();

    const values = {};

    for (let field of form) {
        if (field.name) {

            values[field.name] = field.value;

        }

    }
}
console.log(values);
form.addEventListener('submit', getFormValues);