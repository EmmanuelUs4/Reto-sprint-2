const productos = [
    {
        name:"Papa",
        price: "121232133",
        amount: "5213123",
        productType: "vegetal",
    }
]

//Imprimir los productos en tabla

const printProductos = (listProduct, contenedor) => {
    contenedor.innerHTML= "";

    listProduct.forEach((producto)=> {
        const tr = document.createElement("tr");
        tr.classList.add("td");
        tr.innerHTML = `
        <tr>
        <td>${producto.name}</td>
        <td>${producto.price}</td>
        <td>${producto.amount}</td>
        <td>${producto.productType}</td>
    </tr>
        
        `;
        contenedor.appendChild(tr);
    });
}