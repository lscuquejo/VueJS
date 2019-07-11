var app = new Vue({
    el: '#app',
    data: {
        inventory: 20,
        brand: 'Vue Mastery ',
        product: 'Socks ',
        selectedVariant: 0,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: './images/green-socks.jpg',
                variantQuantity: 10
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: './images/blue-socks.jpg',
                variantQuantity: 0
            }
        ],
        cart: 0
    },
    methods: {
        hasInCart() {
            return this.cart > 0
        },
        hasInInventory() {
            return this.inventory > 0
        },
        decrementFromCart() {
            this.cart -= 1
        },
        incrementToCart() {
            this.cart += 1
        },
        decrementFromInventory() {
            this.inventory -= 1
        },
        incrementToInventory() {
            this.inventory += 1
        },
        updateProduct(index) {
            this.selectedVariant = index
            console.log(index)
        },
        addToCart() {
            if (this.hasInInventory()) {
                this.incrementToCart()
                this.decrementFromInventory()
            }
        },
        removeFromCart() {
            if (this.hasInCart()) {
                this.decrementFromCart()
                this.incrementToInventory()
            }
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        }
    }
})