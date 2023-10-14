const bar = document.getElementById("bar");
const close = document.getElementById("close");
const navbar = document.getElementById("navbar");

if (bar) {
    bar.addEventListener("click", () => {
        navbar.classList.add("active");
    })
}

if (close) {
    close.addEventListener("click", () => {
        navbar.classList.remove("active");
    })
}

let list = document.querySelector(".books");

let products = [
    {
        id: 1,
        name: 'Bước đi ngẫu nhiên trên phố Wall',
        author: "Burton G. Malkiel",
        price: 160000,
        img: 'book1.jpg'
    },
    {
        id: 2,
        name: "Cà phê cùng Tony",
        author: "Tony Buổi Sáng",
        price: 75000,
        img: "book2.jpg"
    },
    {
        id: 3,
        name: "Càng kỷ luật, càng tự do",
        author: "Ca Tây",
        price: 78000,
        img: "book3.jpg"
    },
    {
        id: 4,
        name: "Colorful",
        author: "Mori Eto",
        price: 80000,
        img: "book4.jpg"
    },
    {
        id: 5,
        name: "Cho tôi xin một vé đi tuổi thơ",
        author: "Nguyễn Nhật Ánh",
        price: 64000,
        img: "book5.jpg"
    },
    {
        id: 6,
        name: "Đắc Nhân Tâm",
        author: "Dale Carnegie",
        price: 70000,
        img: "book6.jpg"
    },
    {
        id: 7,
        name: "Đi khi ta còn trẻ",
        author: "Trương Ánh Ngọc",
        price: 100000,
        img: "book7.jpeg"
    },
    {
        id: 8,
        name: "Điều kỳ diệu của tiệm tạp hóa Namiya",
        author: "Higashino Keigo",
        price: 84000,
        img: "book8.jpg"
    },
    {
        id: 9,
        name: "Điều vĩ đại đời thường",
        author: "Robin Sharma",
        price: 76000,
        img: "book9.jpg"
    },
    {
        id: 10,
        name: "Giữa hai vương quốc",
        author: "Suleika Jaouad",
        price: 130000,
        img: "book10.jpg"
    },
    {
        id: 11,
        name: "Hãy khiến tương lai biết ơn vì hiện tại bạn đã cố gắng hết mình",
        author: "Bạch Tô",
        price: 74000,
        img: "book11.jpg"
    },
    {
        id: 12,
        name: "Làm chủ thị trường chứng khoáng",
        author: "Rodney Hobson",
        price: 140000,
        img: "book12.jpg"
    },
    {
        id: 13,
        name: "Lối sống tối giản của người Nhật",
        author: "Sasaki Fumio",
        price: 100000,
        img: "book13.jpg"
    },
    {
        id: 14,
        name: "Ngày mai tôi sẽ khác",
        author: "Gilles Legardinier",
        price: 90000,
        img: "book14.jpeg"
    },
    {
        id: 15,
        name: "Nhà giả kim",
        author: "Paulo Coelho",
        price: 79000,
        img: "book15.jpg"
    },
    {
        id: 16,
        name: "Nhà hàng không bao giờ nói không",
        author: "Yaginuma Kenichi",
        price: 60000,
        img: "book16.jpg"
    },
    {
        id: 17,
        name: "Ổn định hay tự do",
        author: "Trương Học Vĩ",
        price: 100000,
        img: "book17.jpg"
    },
    {
        id: 18,
        name: "Rừng Na-Uy",
        author: "Haruki Murakami",
        price: 130000,
        img: "book8.jpg"
    },
    {
        id: 19,
        name: "Sách tâm lý dành cho người nhạy cảm",
        author: "Hiroko Mizushima",
        price: 89000,
        img: "book19.jpg"
    },
    {
        id: 20,
        name: "Tâm lý học hành vi",
        author: "Khương Nguy",
        price: 79000,
        img: "book20.png"
    },
    {
        id: 21,
        name: "Tuổi trẻ đáng giá bao nhiêu",
        author: "Rosie Nguyễn",
        price: 89000,
        img: "book21.jpg"
    },
    {
        id: 22,
        name: "Thần chết làm thêm 300 yên/giờ",
        author: "",
        price: 83000,
        img: "book22.jpg"
    },
    {
        id: 23,
        name: "Thư viên nửa đêm",
        author: "Matt Haig",
        price: 100000,
        img: "book23.jpg"
    },
    {
        id: 24,
        name: "Trên đường băng",
        author: "Tony Buổi Sáng",
        price: 100000,
        img: "book24.jpg"
    },
    {
        id: 25,
        name: "Khi bạn đang mơ thì người khác đang nỗ lực",
        author: "Vĩ Nhân",
        price: 100000,
        img: "book25.jpg"
    }
];


let initBook = () => {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add("book-card");
        newDiv.innerHTML = `
            <img src="./pics/library/${value.img}" alt="" />
            <div class="desc">
                <h5>${value.name}</h5>
                <div class="rate">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half"></i>
                </div>
                <h4>${value.price.toLocaleString()} vnd</h4>
            </div>
            <a href="#" onclick="addToCard(${key})" ><i class="fa-solid fa-cart-plus add-cart"></i></a>
        `;
        
        list.appendChild(newDiv);
        
    })

}

initBook();

