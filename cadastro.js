document.addEventListener('DOMContentLoaded', () => {
    const user = sessionStorage.getItem('user');
    if (!user) {
        alert('Você precisa estar logado para acessar esta página!');
        window.location.href = 'login.html';
    }

    const lastAccess = document.cookie.split('; ').find(row => row.startsWith('lastLogin='));
    if (lastAccess) {
        document.getElementById('lastAccess').textContent = 'Último acesso: ' + new Date(lastAccess.split('=')[1]).toLocaleString();
    }

    const productForm = document.getElementById('productForm');
    const productTable = document.getElementById('productTable').querySelector('tbody');

    const products = JSON.parse(localStorage.getItem('products') || '[]');
    products.forEach(addProductToTable);

    productForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const product = {
            barcode: document.getElementById('barcode').value,
            description: document.getElementById('description').value,
            costPrice: document.getElementById('costPrice').value,
            salePrice: document.getElementById('salePrice').value,
            expiryDate: document.getElementById('expiryDate').value,
            stock: document.getElementById('stock').value,
            manufacturer: document.getElementById('manufacturer').value,
        };

        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
        addProductToTable(product);
        productForm.reset();
    });

    function addProductToTable(product) {
        const row = productTable.insertRow();
        Object.values(product).forEach(value => {
            const cell = row.insertCell();
            cell.textContent = value;
        });
    }
});