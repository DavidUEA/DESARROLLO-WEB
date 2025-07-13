const productos = [
    {
        nombre: "Cafetera Expresso",
        precio: 150.00,
        descripcion: "Prepara café gourmet en casa con facilidad."
    },
    {
        nombre: "Batidora de Mano",
        precio: 45.99,
        descripcion: "Ideal para mezclar y batir ingredientes rápidamente."
    },
    {
        nombre: "Tostadora Compacta",
        precio: 25.00,
        descripcion: "Dora tu pan a la perfección cada mañana."
    }
];

// 2. Función para renderizar los productos en el HTML:
function renderizarProductos() {
    // Obtenemos la lista <ul> por su ID
    const listaDeProductos = document.getElementById('listaDeProductos');
    
    // Limpiamos la lista para evitar duplicados cada vez que renderizamos
    listaDeProductos.innerHTML = '';

    // Iteramos sobre cada producto en nuestro array 'productos'
    productos.forEach(producto => {
        // Creamos un nuevo elemento <li> para cada producto
        const itemDeLista = document.createElement('li');
        
        // Usamos plantillas de cadena (template literals) para construir el HTML del producto
        itemDeLista.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio.toFixed(2)}</p>
            <p>${producto.descripcion}</p>
        `;
        
        // Agregamos el <li> recién creado a la lista <ul>
        listaDeProductos.appendChild(itemDeLista);
    });
}

// 3. Renderizar los productos al cargar la página:
// Usamos 'DOMContentLoaded' para asegurarnos de que el HTML esté completamente cargado antes de intentar manipularlo.
document.addEventListener('DOMContentLoaded', renderizarProductos);

// 4. Lógica para el botón "Agregar Nuevo Producto":
const btnAgregarProducto = document.getElementById('btnAgregarProducto');

btnAgregarProducto.addEventListener('click', () => {
    // Creamos un objeto para el nuevo producto
    const nuevoProducto = {
        nombre: "Hervidor Eléctrico",
        precio: 30.75,
        descripcion: "Calienta agua rápidamente para tus infusiones."
    };

    // Agregamos el nuevo producto al final de nuestro array 'productos'
    productos.push(nuevoProducto);

    // Volvemos a renderizar la lista completa para que el nuevo producto aparezca
    renderizarProductos();
});