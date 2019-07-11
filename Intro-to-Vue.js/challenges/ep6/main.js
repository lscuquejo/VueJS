var app = new Vue({
    el: '#app',
    data: {
        inventory: 20,
        product: 'Socks',
        image: './images/green-socks.jpg',
        inStock: true,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: './images/green-socks.jpg'
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: './images/blue-socks.jpg'
            }
        ],
        cart: 0
    },
    computed: {
        cpHasInInventory() {
            return this.hasInInventory()
        }
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
        updateProduct: function (variantImage) {
            this.image = variantImage
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
    }
})