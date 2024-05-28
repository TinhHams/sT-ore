let body = document.querySelector('body');
let bar = document.getElementById('bar');
let close = document.getElementById('close');
let navbar = document.getElementById('navbar');
let listBook = document.querySelector('.list-book');
let quantity = document.querySelector('.quantity');
let cartTotal = document.querySelector('.cart-total');
let openCart = document.querySelector('.cart');
let closeCart = document.querySelector('.closeCart');
let modal = document.querySelector('.modal');
let total = document.querySelector('.total');
let shipCost = document.querySelector('ship');
let list = document.querySelector('.books');
let bookDetail = document.querySelector('#book-detail');
let deleteProduct = document.querySelector('.delete-product');

if (bar) {
    bar.addEventListener('click', () => {
        navbar.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
}

openCart.addEventListener('click', () => {
    document.getElementById('cart').classList.toggle('cart-modal');
    document.getElementById('bookshelf').classList.toggle('display-off');
});

// closeCart.addEventListener('click', () => {
//     body.classList.remove("acitve");
// })

let products = [
    {
        id: 1,
        name: 'Bước đi ngẫu nhiên trên phố Wall',
        author: 'Burton G. Malkiel',
        price: 160000,
        img: 'book1.jpg',
    },
    {
        id: 2,
        name: 'Cà phê cùng Tony',
        author: 'Tony Buổi Sáng',
        price: 75000,
        img: 'book2.jpg',
    },
    {
        id: 3,
        name: 'Càng kỷ luật, càng tự do',
        author: 'Ca Tây',
        price: 78000,
        img: 'book3.jpg',
    },
    {
        id: 4,
        name: 'Colorful',
        author: 'Mori Eto',
        price: 80000,
        img: 'book4.jpg',
    },
    {
        id: 5,
        name: 'Cho tôi xin một vé đi tuổi thơ',
        author: 'Nguyễn Nhật Ánh',
        price: 64000,
        img: 'book5.jpg',
    },
    {
        id: 6,
        name: 'Đắc Nhân Tâm',
        author: 'Dale Carnegie',
        price: 70000,
        img: 'book6.jpg',
    },
    {
        id: 7,
        name: 'Đi khi ta còn trẻ',
        author: 'Trương Ánh Ngọc',
        price: 100000,
        img: 'book7.jpeg',
    },
    {
        id: 8,
        name: 'Tuổi trẻ đáng giá bao nhiêu',
        author: 'Rosie Nguyễn',
        price: 89000,
        img: 'book8.jpg',
    },
    {
        id: 9,
        name: 'Điều vĩ đại đời thường',
        author: 'Robin Sharma',
        price: 76000,
        img: 'book9.jpg',
    },
    {
        id: 10,
        name: 'Giữa hai vương quốc',
        author: 'Suleika Jaouad',
        price: 130000,
        img: 'book10.jpg',
    },
    {
        id: 11,
        name: 'Thần chết làm thêm 300 yên/giờ',
        author: '',
        price: 83000,
        img: 'book11.jpg',
    },
    {
        id: 12,
        name: 'Làm chủ thị trường chứng khoáng',
        author: 'Rodney Hobson',
        price: 140000,
        img: 'book12.jpg',
    },
    {
        id: 13,
        name: 'Lối sống tối giản của người Nhật',
        author: 'Sasaki Fumio',
        price: 100000,
        img: 'book13.jpg',
    },
    {
        id: 14,
        name: 'Ngày mai tôi sẽ khác',
        author: 'Gilles Legardinier',
        price: 90000,
        img: 'book14.jpeg',
    },
    {
        id: 15,
        name: 'Nhà giả kim',
        author: 'Paulo Coelho',
        price: 79000,
        img: 'book15.jpg',
    },
    {
        id: 16,
        name: 'Thư viên nửa đêm',
        author: 'Matt Haig',
        price: 100000,
        img: 'book16.jpg',
    },
    {
        id: 17,
        name: 'Ổn định hay tự do',
        author: 'Trương Học Vĩ',
        price: 100000,
        img: 'book17.jpg',
    },
    {
        id: 18,
        name: 'Rừng Na-Uy',
        author: 'Haruki Murakami',
        price: 130000,
        img: 'book18.jpg',
    },
    {
        id: 19,
        name: 'Trên đường băng',
        author: 'Tony Buổi Sáng',
        price: 100000,
        img: 'book19.jpg',
    },
    {
        id: 20,
        name: 'Tâm lý học hành vi',
        author: 'Khương Nguy',
        price: 79000,
        img: 'book20.png',
    },
    {
        id: 21,
        name: 'Điều kỳ diệu của tiệm tạp hóa Namiya',
        author: 'Higashino Keigo',
        price: 84000,
        img: 'book21.jpg',
    },
    {
        id: 22,
        name: 'Hãy khiến tương lai biết ơn vì hiện tại bạn đã cố gắng hết mình',
        author: 'Bạch Tô',
        price: 74000,
        img: 'book22.jpg',
    },
    {
        id: 23,
        name: 'Nhà hàng không bao giờ nói không',
        author: 'Yaginuma Kenichi',
        price: 60000,
        img: 'book23.jpg',
    },
    {
        id: 24,
        name: 'Sách tâm lý dành cho người nhạy cảm',
        author: 'Hiroko Mizushima',
        price: 89000,
        img: 'book24.jpg',
    },
    {
        id: 25,
        name: 'Khi bạn đang mơ thì người khác đang nỗ lực',
        author: 'Vĩ Nhân',
        price: 100000,
        img: 'book25.jpg',
    },
];

let listBooks = [];

function initBook() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('book-card');
        newDiv.innerHTML = `
            <a href="./bookdetail.html"><img src="./pics/library/${value.img}" alt="" /></a>
            <div class="desc">
                <h5>${value.name}</h5>
                <div class="rate">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half"></i>
                </div>
                <h4 class="price">${value.price.toLocaleString()} vnd</h4>
            </div>
            <button class="add-btn" onclick="addToCart(${key})">Add to Cart</button>
        `;
        list.appendChild(newDiv);
    });
}

initBook();

// function initBookInfo (){
//     products.forEach((value) => {
//         let bookInfo = document.createElement('div');
//         bookInfo.classList.add("book-img");
//         bookInfo.innerHTML = `
//             <img id="mainImg" src="./pics/library/${value.img}" alt=""/>
//         `;
//         bookDetail.appendChild(bookInfo);
//     })
// }

// initBookInfo();

function addToCart(key) {
    if (listBooks[key] == null) {
        // copy product form list to list book
        listBooks[key] = JSON.parse(JSON.stringify(products[key]));
        listBooks[key].quantity = 1;
    }
    reloadCart();
}

function reloadCart() {
    listBook.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    // let shipCost = 0;

    listBooks.forEach((value, key) => {
        totalPrice = totalPrice + value.price * value.quantity;
        // count = count + value.quantity;
        count = 1 + listBook.children.length;

        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                    <div class="product-name">${value.name}</div>
                    <div><img src="./pics/library/${value.img}" alt="" /></div>
                    <div>${value.price.toLocaleString()} vnd</div>
                    <div class="quantity-box">
                        <button class="cartBtn" onclick="changeQuantity(${key}, ${value.quantity - 1})" >
                        -
                        </button>
                        <div class="count">${value.quantity}</div>
                        <button class="cartBtn" onclick="changeQuantity(${key}, ${value.quantity + 1})" >
                        +
                        </button>
                    </div>
                    <div>${(value.price * value.quantity).toLocaleString()} vnd</div>
                    <div onclick="changeQuantity(${key}, 0)"><i class="fa-regular fa-circle-xmark delete-product"></i></div>
                `;

            listBook.appendChild(newDiv);
        }
    });
    cartTotal.innerText = totalPrice.toLocaleString() + ' vnd';
    quantity.innerText = count;
    // Giá tổng khi chưa cộng thêm phí giao hàng
    total.innerText = totalPrice.toLocaleString() + ' vnd';
}

function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listBooks[key];
    } else {
        listBooks[key].quantity = quantity;
        // listBooks[key].price = quantity * products[key].price;
    }

    reloadCart();
}
