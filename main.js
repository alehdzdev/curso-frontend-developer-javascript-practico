const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const cartIcon = document.querySelector('.navbar-shopping-cart')
const cartAside = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container')
const productDetail = document.querySelector('#productDetail')
const closeIconProductDetail = document.querySelector('.product-detail-close')

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleCartAside);
closeIconProductDetail.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu() {
    const isCartAsideOpen = !cartAside.classList.contains('inactive')
    const isProductDetailOpen = !productDetail.classList.contains('inactive')
    if (isCartAsideOpen) {
        toggleCartAside()
    }
    if (isProductDetailOpen) {
        closeProductDetailAside()
    }
    mobileMenu.classList.toggle('inactive')
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    const isCartAsideOpen = !cartAside.classList.contains('inactive')
    const isProductDetailOpen = !productDetail.classList.contains('inactive')
    if (isCartAsideOpen) {
        toggleCartAside()
    }
    if (isProductDetailOpen) {
        closeProductDetailAside()
    }
    mobileMenu.classList.toggle('inactive')
}

function toggleCartAside() {
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive')
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive')
    const isProductDetailOpen = !productDetail.classList.contains('inactive')
    if (isMobileMenuOpen) {
        toggleMobileMenu()
    }
    if (isDesktopMenuOpen) {
        desktopMenu.classList.add('inactive')
    }
    if (isProductDetailOpen) {
        closeProductDetailAside()
    }
    cartAside.classList.toggle('inactive')
}

function openProductDetailAside() {
    const isCartAsideOpen = !cartAside.classList.contains('inactive')
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive')
    if (isDesktopMenuOpen) {
        desktopMenu.classList.add('inactive')
    }
    if (isCartAsideOpen) {
        cartAside.classList.add('inactive')
    }
    productDetail.classList.remove('inactive')
}

function closeProductDetailAside() {
    productDetail.classList.add('inactive')
}

const productList = []
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Laptop',
    price: 2000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Monitor',
    price: 300,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

function renderProducts(arr) {
    for (product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image)
        productImg.addEventListener('click', openProductDetailAside)

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)

        const productInfoFigure = document.createElement('figure');
        const ProductImgCart = document.createElement('img');
        ProductImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')

        productInfoFigure.appendChild(ProductImgCart)

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)

        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)