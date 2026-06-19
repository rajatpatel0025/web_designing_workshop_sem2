const products = [
  { name: "HP Victus AMD Ryzen 7, 6GB RTX 4050, 16GB", price: "₹79,900", image: "https://m.media-amazon.com/images/I/71r2ySSfgBL._SY450_.jpg", category: "Laptops", description: "Powerful gaming laptop with AMD Ryzen 7 processor and dedicated RTX 4050 GPU. Perfect for gaming, video editing and heavy multitasking." },
  { name: "boAt Nirvana Zenith Pro (2025), 50dB Hybrid ANC, Spatial Audio", price: "₹2,999", image: "https://m.media-amazon.com/images/I/41QwSzPBJOL._SY300_SX300_QL70_FMwebp_.jpg", category: "Electronics", description: "Premium wireless earbuds with 50dB hybrid ANC and spatial audio. Up to 40 hours total playback with fast charging support." },
  { name: "Logitech G502 Hero High Performance Wired Gaming Mouse", price: "₹2,799", image: "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_UY327_FMwebp_QL65_.jpg", category: "Electronics", description: "High performance gaming mouse with HERO 25K sensor. Features 11 programmable buttons and adjustable weight system." },
  { name: "MSI Crosshair A16, Ryzen 9, RTX 5060, 16GB/1TB NVMe", price: "₹1,24,990", image: "https://m.media-amazon.com/images/I/51EWytLLqAL._SY450_.jpg", category: "Laptops", description: "Top tier gaming laptop with latest Ryzen 9 processor and RTX 5060 GPU. Features a stunning QHD+ 240Hz display for competitive gaming." },
  { name: "Wembley Rock Crawler Monster Truck Remote Control Car", price: "₹2,499", image: "https://m.media-amazon.com/images/I/41YNE+k+oEL._SY300_SX300_QL70_FMwebp_.jpg", category: "Toys", description: "All terrain RC monster truck with powerful motor and shock absorbers. Works on sand, grass, mud and rocky surfaces." },
  { name: "Y39 5G (Lotus Purple, 8GB RAM, 128GB Storage)", price: "₹15,999", image: "https://m.media-amazon.com/images/I/51Kk6rjcOXL._SX425_.jpg", category: "Mobiles", description: "Sleek 5G smartphone with 8GB RAM and 128GB storage. Features a stunning display and long lasting battery life." },
  { name: "Nike Downshifter 13 Running Shoes", price: "₹4,295", image: "https://m.media-amazon.com/images/I/6149-ZNfTKL._SY535_.jpg", category: "Fashion", description: "Lightweight running shoes with breathable mesh upper and responsive cushioning. Designed for everyday training and casual wear." },
  { name: "Samsung Galaxy S25 Ultra 5G AI Smartphone", price: "₹1,50,999", image: "https://m.media-amazon.com/images/I/71rs4Aer71L._SX425_.jpg", category: "Mobiles", description: "Samsung's flagship AI smartphone with built in S Pen, 200MP camera and Snapdragon 8 Elite processor. The ultimate Android experience." },
  { name: "Tommy Hilfiger Multifunction Navy Dial Stainless Steel Watch", price: "₹10,999", image: "https://m.media-amazon.com/images/I/51bbLkXsL1L._SX679_.jpg", category: "Fashion", description: "Classic multifunction watch with navy dial and stainless steel bracelet. Water resistant with chronograph functionality." },
  { name: "Marshall Kilburn II 36W Portable Bluetooth Speaker", price: "₹21,999", image: "https://m.media-amazon.com/images/I/31RnuvCDlhL._SX300_SY300_QL70_FMwebp_.jpg", category: "Electronics", description: "Iconic portable speaker with 36W powerful sound and signature Marshall design. Up to 20 hours battery with multi host functionality." },
  { name: "NEXA Fronx Compact SUV", price: "₹8,67,000", image: "https://img.autocarindia.com/mmv_images/colors/20250620010815_Maruti_Suzuki_Fronx_Opulent_Red[1].jpg?w=640&q=75", category: "Automotive", description: "Stylish compact SUV with bold coupe design and feature packed interior. Available with petrol and mild hybrid engine options." },
  { name: "Voltas Vectra Elite 2 Ton 3 Star Inverter Split AC", price: "₹46,990", image: "https://m.media-amazon.com/images/I/61nv5TqjBoL._SX466_.jpg", category: "Appliances", description: "Energy efficient inverter AC with 4 in 1 adjustable modes. Features anti dust filter and auto cleanser for low maintenance." },
  { name: "Logitech G102 USB LightSync Gaming Mouse with RGB", price: "₹1,499", image: "https://m.media-amazon.com/images/I/61RYwHoeHjL._AC_UY327_FMwebp_QL65_.jpg", category: "Electronics", description: "Budget friendly gaming mouse with LightSync RGB and 8000 DPI optical sensor. Lightweight design at just 85 grams." },
  { name: "Havells Aqua Plus Electric Kettle 1.2 Litre, 1250W", price: "₹1,499", image: "https://m.media-amazon.com/images/I/31S74o1sCSS._SX300_SY300_QL70_FMwebp_.jpg", category: "Appliances", description: "Fast boiling electric kettle with 1250W power and auto shutoff safety feature. Food grade stainless steel interior." },
  { name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones", price: "₹24,990", image: "https://d1ncau8tqf99kp.cloudfront.net/converted/103364_original_local_1200x1050_v3_converted.webp", category: "Electronics", description: "Industry leading noise cancelling headphones with 30 hour battery life. Features multipoint connection and crystal clear call quality." },
  { name: "Tommy Hilfiger Men Black Dial Quartz Multifunction Watch", price: "₹14,299", image: "https://m.media-amazon.com/images/I/71TtTKwu0PL._SY741_.jpg", category: "Fashion", description: "Premium quartz watch with black dial and leather strap. Features day date display and elegant Tommy Hilfiger styling." },
  { name: "Samsung 653L 3 Star Frost Free Double Door Fridge", price: "₹79,499", image: "https://m.media-amazon.com/images/I/61Cblx5LWAL._SX466_.jpg", category: "Appliances", description: "Large capacity frost free refrigerator with convertible 5 in 1 modes. Features digital inverter technology for energy savings." },
  { name: "Realme Neckband Pro Bluetooth Earphones with ENC", price: "₹1,299", image: "https://m.media-amazon.com/images/I/31K5oAhDs3L._SY300_SX300_QL70_FMwebp_.jpg", category: "Electronics", description: "Comfortable neckband earphones with environmental noise cancellation and fast charging. Up to 30 hours playback on single charge." }
];

const productSection = document.querySelector(".products");
const featuredSection = document.querySelector(".featuredProducts");
const featuredtitle = document.querySelector(".featured-title");

function renderProducts(list, container, baseHeading = "Top Choices For You") {
    
    for (let i = 0; i < list.length; i += 4) {
        const chunk = list.slice(i, i + 4);
        if (chunk.length === 0) continue;
        
        const cardBox = document.createElement("div");
        cardBox.className = "product-card-container";
        
        const titleText = i === 0 ? baseHeading : "More items to explore";
        cardBox.innerHTML = `<h2 class="product-card-title">${titleText}</h2>`;
        
        const quadGrid = document.createElement("div");
        quadGrid.className = "product-quad-grid";
        
        chunk.forEach(item => {
            const originalIndex = products.indexOf(item);
            
            const itemElement = document.createElement("div");
            itemElement.className = "quad-item";
            itemElement.setAttribute("data-category", item.category);
           
            itemElement.addEventListener("click", (e) => {
                if (!e.target.closest("button")) {
                    window.location.href = `product.html?id=${originalIndex}`;
                }
            });
            
            itemElement.innerHTML = `
                <div class="quad-image-wrapper">
                    <img src="${item.image}" alt="${item.category}">
                </div>
                <h3>${item.name}</h3>
                <p class="quad-price">${item.price}</p>
                <div class="btn-group">
                    <button class="btn-cart">Add to Cart</button>
                    <button class="btn-buy">Buy Now</button>
                </div>
            `;
            quadGrid.appendChild(itemElement);
        });
        
        cardBox.appendChild(quadGrid);
        
        const seeMore = document.createElement("a");
        seeMore.className = "card-see-more";
        seeMore.href = "#";
        seeMore.innerText = "See more";
        cardBox.appendChild(seeMore);
        
        container.appendChild(cardBox);
    }
    attachCartEvents();
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let t = array[i];
        array[i] = array[j];
        array[j] = t;
    }
    return array;
}

const freshPool = shuffle([...products]);

featuredSection.innerHTML = ""; 

const techDeals = freshPool.filter(p => p.category === "Laptops" || p.category === "Mobiles").slice(0, 4);
const audioAccessories = freshPool.filter(p => p.category === "Electronics").slice(0, 4);
const homeLifestyle = freshPool.filter(p => p.category === "Appliances" || p.category === "Fashion").slice(0, 4);

renderProducts(techDeals, featuredSection, "Lightning Deals on Tech");
renderProducts(audioAccessories, featuredSection, "Trending Audio & Accessories");
renderProducts(homeLifestyle, featuredSection, "Upgrade Your Home & Style");

productSection.innerHTML = "";
renderProducts(products, productSection, "Explore All Categories");

function attachCartEvents() {
    const cartCountElement = document.querySelector("#cartCount");
    let count = parseInt(localStorage.getItem("cartCount") || "0", 10);
    if (cartCountElement) cartCountElement.textContent = count;

    document.querySelectorAll(".btn-cart").forEach(btn => {
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);

        newBtn.addEventListener("click", function (e) {
            e.stopPropagation();
            count++;
            localStorage.setItem("cartCount", count);
            if (cartCountElement) cartCountElement.textContent = count;
            
            const productName = this.closest(".quad-item").querySelector("h3").textContent;
            alert("Added to cart:\n" + productName);
        });
    });
}

const searchFound = document.querySelector("#noResults");
const result = document.querySelector(".search-box input");

result.addEventListener("input", function () {
    const searchValue = result.value.toLowerCase();
    let totalMatches = 0;

    document.querySelectorAll(".quad-item").forEach(item => {
        const title = item.querySelector("h3").textContent.toLowerCase();
        if (title.includes(searchValue)) {
            item.style.display = "flex";
            totalMatches++;
        } else {
            item.style.display = "none";
        }
    });

    document.querySelectorAll(".product-card-container").forEach(box => {
        const remainingItems = box.querySelectorAll('.quad-item:not([style*="display: none"])');
        box.style.display = remainingItems.length === 0 ? "none" : "block";
    });

    if (searchFound) searchFound.style.display = totalMatches === 0 ? "block" : "none";

    if (searchValue !== "") {
        featuredtitle.style.display = "none";
        featuredSection.style.display = "none";
    } else {
        featuredtitle.style.display = "block";
        featuredSection.style.display = "grid";
    }
});

function filterCategory(cate) {
    featuredtitle.style.display = "none";
    featuredSection.style.display = "none";

    document.querySelectorAll(".quad-item").forEach(item => {
        if (cate === "All" || item.dataset.category === cate) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });

    document.querySelectorAll(".product-card-container").forEach(box => {
        const remainingItems = box.querySelectorAll('.quad-item:not([style*="display: none"])');
        box.style.display = remainingItems.length === 0 ? "none" : "block";
    });

    if (cate === "All") {
        featuredtitle.style.display = "block";
        featuredSection.style.display = "grid";
    }
}

let slideIndex = 0;
let autoPlayTimer;

showSlide(slideIndex);
startAutoPlay();

function showSlide(index) {
    const slides = document.getElementsByClassName("slide");
    if (slides.length === 0) return;
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[slideIndex].classList.add("active");
}

function plusSlides(n) {
    clearTimeout(autoPlayTimer);
    slideIndex += n;
    showSlide(slideIndex);
    startAutoPlay();
}

function startAutoPlay() {
    autoPlayTimer = setTimeout(function () {
        slideIndex++;
        showSlide(slideIndex);
        startAutoPlay();
    }, 5000);
}

const darkBtn = document.querySelector("#darkModeBtn");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    if (darkBtn) darkBtn.textContent = "☀️";
}

if (darkBtn) {
    darkBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            darkBtn.textContent = "☀️";
            localStorage.setItem("theme", "dark");
        } else {
            darkBtn.textContent = "🌙";
            localStorage.removeItem("theme");
        }
    });
}

const backToTopBtn = document.querySelector("#back-to-top");
window.addEventListener("scroll", function () {
    if (backToTopBtn) {
        backToTopBtn.style.display = window.scrollY > 400 ? "block" : "none";
    }
});
if (backToTopBtn) {
    backToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}