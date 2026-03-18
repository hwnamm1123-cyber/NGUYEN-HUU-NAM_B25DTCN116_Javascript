let contacs = [];

let form = document.getElementById('contact-form');
let nameInput = document.getElementById('contact-name');
let phoneInput = document.getElementById('contact-phone');
let emailInput = document.getElementById('contact-email');
let tableInput = document.getElementById('contact-table');
let submitBnt = document.getElementById('btn-add');

//render
function renderTable(){
    tableInput.innerHTML  = '';
    contacs.forEach((contacs, index) => {

        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${contacs.name}</td>
        <td>${contacs.phone}</td>
        <td>${contacs.email}</td>
        <td>
            <button onclick="editContact(${index})">Sửa</button>
            <button onclick="deleteContact(${index})">Xóa</button>
        </td>
        `;

        tableBody.appendChild(tr);
    });

}

//Kiểm tra
function valiDateInput(name, phone, email){
    if(!name){
        alert("Họ và tên không được để trống!");
        return false;
    }
     if (!phone) {
        alert('Số điện thoại không được để trống!');
        return false;
    }
      const phoneCheck = /^(0|\+84)[0-9]{9,10}$/;
    if (!phoneCheck.test(phone)) {
        alert('Số điện thoại không hợp lệ!');
        return false;
    }

    if (!email) {
        alert('Email không được để trống!');
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Email không hợp lệ!');
        return false;
    }
}

//skien
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const email = emailInput.value.trim();

  if (!valiDateInput(name, phone, email)) return;
  if (editingIndex === null) {
    contacs.push({ name, phone, email });
    alert('Thêm liên hệ thành công!');
  } else {
    contacs[editingIndex] = { name, phone, email };
    editingIndex = null;
    submitBnt.textContent = 'Thêm';
    alert('Cập nhật liên hệ thành công!');
  }

  form.reset();
  renderTable();
});

renderTable();