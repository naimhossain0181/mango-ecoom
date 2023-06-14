<template>
<div class="container">
    <div>
        <h1>Product Details</h1>
        <div class="card-body">
            <div class="card">
                <div class="imgArea">
                    <img :src="product.image" alt="">
                </div>

                <h1>{{ product.title }}</h1>
                <h4>{{ product.description }}</h4>
                <h5>Product categories : {{ product.categories }}</h5>
                <h5>Product Size : {{ product.size}}</h5>
                <h3>Tk. {{ product.price }} /Kg</h3>
                <h5>color : {{ product.color }}</h5>

            </div>
        </div>
        <button @click="decreament">--</button>
        <input type="number" placeholder="quantity" v-model="products.quantity">
        <button @click=" increse">++</button>
        <button @click="addToCard">Add to cart</button>
    </div>
</div>
</template>

<script>
import NavBar from '../NavBar.vue';
import axios from 'axios';

export default {
    components: {
        NavBar
    },
    data() {
        return {
            product: "",
            products: {
                productId: "",
                quantity: "1"
            }
        }
    },



    async mounted() {
        const id = this.$route.params.id
        const data = await axios.get("http://localhost:3000/api/v1/products/" + id)
        this.product = data.data.product
        this.products.productId = data.data.product._id
    },
    methods: {
        // add to carts api 
        async addToCard() {
            const token = JSON.parse(localStorage.getItem('user'))
            console.log(token)
            console.log(this.products)
            const createCart = await axios.post("http://localhost:3000/api/v1/carts", {
                products: this.products
            }, {
                headers: {
                    token: token
                }
            })
        },

        // product quantity increamnet decreamnet
        increse(){
            this.products.quantity++
        },
        decreament(){
            if(this.products.quantity>1){

                this.products.quantity--
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.container {
    text-align: center;
}

.card-body {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    justify-content: space-around;
}

.card {
    height: 700px;
    width: 900px;
    text-align: center;
    align-items: center;
    justify-content: center;
}

.imgArea {
    height: 400px;
    width: 400px;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
}
</style>
