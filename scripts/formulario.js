// nombre, precio, cantidad y categoría
const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();


    const valuesFormulario = Object.values(formulario);


    const nuevoProducto = {};
    valuesFormulario.forEach(valueInput => {
        if (valueInput.id) {
            nuevoProducto[valueInput.id] = valueInput.value
        }
        nuevoProducto[valueInput.id] = valueInput.value;
    });
})



