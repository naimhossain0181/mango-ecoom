<template>
<div class="container">
    <AdminNav />
</div>
<RouterView>
    <div class="deletemsg" ref="deletemsg">
       <h1>Are You Sure ? </h1>
        <button @click="clickYes">Ok</button>
        <button @click="clickNo">No</button>
    </div>

    <div class="card-body">
        <div v-for="product in products" :key="product._id" class="card">
            <div class="imgArea">
                <img :src="product.image" alt="">
            </div>

            <h1>{{ product.title }}</h1>
            <h6>{{ product.description }}</h6>
            <h3>Tk. {{ product.price }} /Kg</h3>
            <h5>color : {{ product.color }}</h5>
            <button @click="productOnclick(product._id)">Delete</button>

        </div>
    </div>
</RouterView>
</template>

<script>
import axios from 'axios';
import AdminNav from './AdminNav.vue';
export default {
    components: {
        AdminNav
    },
    data() {
        return {
            products: [],
            productId: ""
        }
    },
    methods: {
        async productOnclick(productId) {
            if (this.productOnclick) {
                this.productId = productId
                this.$refs.deletemsg.classList.add("deletemsgShow")
            }
        },
        async clickYes() {
            const id = this.productId
            const token = JSON.parse(localStorage.getItem("admin"))
            const data = await axios.delete("http://localhost:3000/api/v1/products/delete/" + id, {
                headers: {
                    token: token
                }
            })
            if (data) {
                console.log("item delete successfully")
                this.$router.go(0);
            }
        },
        clickNo() {
            this.$refs.deletemsg.classList.remove("deletemsgShow")
        }
    },
    async mounted() {
        const data = await axios.get("http://localhost:3000/api/v1/products/")
        this.products = data.data.products
    },
}
</script>

<style lang="scss" scoped>
.deletemsg {
    display: none;
}

.deletemsgShow {

    position: fixed;
    height: 400px;
    width: 500px;
    background: rgb(216, 186, 179);
    z-index: 9999;
    top: 10%;
    left: 32%;
    align-items: center;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

}

.card-body {
    display: flex;
    flex-wrap: wrap;

    justify-content: space-between;
}

.card {
    margin: 10px;
    height: 400px;
    width: 300px;
    text-align: center;
    align-items: center;
    justify-content: center;
}

.imgArea {
    height: 200px;
    width: 200px;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
}
</style>
