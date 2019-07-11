var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: './images/green-socks.jpg',
        inStock: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: './images/green-socks.jpg',
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: './images/blue-socks.jpg',
            }
        ],
        cart: 0
    },
    methods: {
        addToCart: function () {
            this.cart += 1
        },
        updateProduct: function (variantImage) {
            this.image = variantImage
        }
    }
});