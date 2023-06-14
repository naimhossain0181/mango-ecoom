<template>
<div>
    <h1>Your Card</h1>
    <div class="card-body" v-for="cart in carts" key="cart._id">

        <div class="cartItem" v-for="product in cart.products" key="product.productId._id ,product.productId.price ,product.quantity ">
            <div class="img">
                <img :src="product.productId.image" alt="">
            </div>
            <div>
                <h2>## {{product.productId._id}}</h2>
                <h3> {{product.productId.title}}</h3>
                <h5>Price per kg {{product.productId.price}} Tk.</h5>
               
                <h5>Quantity  <button>--</button> <input type="text"  v-model="product.quantity">  <button>++</button></h5>
               
                <h4>Total price= {{ product.productId.price*product.quantity}} Tk.</h4>
                <button>
                <router-link :to="{ path: '/order', query: { msg: JSON.stringify(product)} }">Place Order</router-link>
                </button>
            </div>

        </div>
        <div class="card-action">
            <button @click="remove(cart._id)">remove</button>
        </div>
    </div >
</div>
</template>

<script>
import axios from 'axios';
import Order from './PlaceOrder.vue';

export default {
    name: "MyCard",
    components:{
        Order
    },
    data() {
        return {
            carts: "",
            productId:"",
            quantity:"",
            price:"123"
            
        }
    },
    methods: {
       
        async remove(cart_id) {
            const token = JSON.parse(localStorage.getItem("user"))
            const id = JSON.parse(localStorage.getItem("id"))
            let result = await axios.delete("http://localhost:3000/api/v1/carts/" + cart_id, {
                headers: {
                    token: token,
                    id: id
                }
            })
            if (result) {
                this.$router.go("/card");
            }
        },
    },
    async mounted() {
        const token = JSON.parse(localStorage.getItem("user"))
        const id = JSON.parse(localStorage.getItem("id"))
        const result = await axios.get("http://localhost:3000/api/v1/carts/all", {
            headers: {
                token: token,
                id: id
            }
        })
        this.carts = result.data.addtocard
    },

}
</script>

<style lang="scss" scoped>
a{
    text-decoration: none;
}
.card-body {
    color: rgb(149, 202, 248);
    background: #727272;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4px;

    .img {
        width: 200px;
        height: 200px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}

.cartItem {
    display: flex;
    width: 80%;
    align-items: center;
    gap: 16px;
    h4{
        color: rgb(233, 220, 106);
    }
}

</style>
