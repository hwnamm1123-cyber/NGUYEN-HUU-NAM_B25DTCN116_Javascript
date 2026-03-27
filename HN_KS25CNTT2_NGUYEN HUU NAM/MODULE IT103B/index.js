//khoi tao
let products = JSON.parse(localStorage.getItem("products_data")) || [];
let editId = null;

//dom
const tbody = document.getElementById("tbody");
const formTitle = document.getElementById("formTitle");
const btnSubmit = document.getElementById("btnSubmit");
const searchInput = document.getElementById("searchInput");

//read
function renderTable(){
    const keyword = searchInput.value.toLowerCase();

    //loc
    const filteredData = products.filter(p => 
        p.name.toLowerCase().includes(keyword)
    );

    tbody.innerHTML = ""; 

    if (filteredData.length === 0){
        document.getElementById("emptyState").style.display = "block";
    } else {
        document.getElementById("emptyState").style.display = "none";
        filteredData.forEach((item, index) => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${index + 1}</td>
                <td class="td-name">${item.name}</td>
                <td class="td-price">${Number(item.price).toLocaleString("vi-VN")} ₫</td>
                <td class="center" style="font-weight: 700">${item.stock}</td>
                <td>
                    <div class="td-actions">
                        <button class="btn btn-sm btn-edit" onclick="handleEdit(${item.id})">✏ Sửa</button>
                        <button class="btn btn-sm btn-del" onclick="handleDelete(${item.id})">✕ Xóa</button>
                    </div>
                </td>
            `;
            tbody.appendChild(tr);
        });
    }

}

//update
function submitForm(){
    const name = document.getElementById("iName").value.trim();
    const price = document.getElementById("iPrice").value;
    const stock = document.getElementById("iStock").value;

    //vld
    if (!name || price <= 0 || stock < 0){
        alert("Vui long nhap day du thong tin!");
        return;
    }

    if (editId){
        //sua1
        const index = products.findIndex(p => p.id === editId);
        products[index] = { ...products[index], name, price: Number(price), stock: Number(stock) };
        alert("Cap nhat thanh cong!");
    } else {
        //them
        const maxId = products.length > 0 ? Math.max(...products.map(p => p.id)) : 0;
        products.push({ id: maxId + 1, name, price: Number(price), stock: Number(stock) });
        alert("Them thanh cong!");
    }   
    saveAndRefresh();
}

//xoa
function handleDelete(id) {
    if (confirm("Ban co muon xoa?")){
        products = products.filter(p => p.id !== id);
        saveAndRefresh();
    }
}

//sua2
function handleEdit(id){
    const product = products.find(p => p.id === id);
    if (product){
        editId = id;
        document.getElementById("iName").value = product.name;
        document.getElementById("iPrice").value = product.price;
        document.getElementById("iStock").value = product.stock;

        formTitle.innerText = "Chinh sua san pham";
        btnSubmit.innerText = "Luu thay doi";
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

//luu va ref
function saveAndRefresh() {
    localStorage.setItem("products_data", JSON.stringify(products));
    resetForm();
    renderTable();
}

function resetForm() {
    editId = null;
    document.getElementById("iName").value = "";
    document.getElementById("iPrice").value = "";
    document.getElementById("iStock").value = "";
    formTitle.innerText = "Them san pham moi";
    btnSubmit.innerText = "Them san pham";
}

//sk
searchInput.oninput = renderTable;

//start
renderTable();