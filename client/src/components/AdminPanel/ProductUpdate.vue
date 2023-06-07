<template>
<div class="container">
    <AdminNav />
</div>
<RouterView>

    <div class="card-body">
        <div @click="productOnclick(product._id)" v-for="product in products" :key="product._id" class="card">
            <div class="imgArea">
                <img :src="product.image" alt="">
            </div>

            <h1>{{ product.title }}</h1>
            <h6>{{ product.description }}</h6>
            <h3>Tk. {{ product.price }} /Kg</h3>
            <h5>color : {{ product.color }}</h5>
            <RouterLink :to="'/deshboard/update/'+product._id"><button>Edit</button></RouterLink>

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
            products: []
        }
    },
    methods: {
        productOnclick(productId) {

        }
    },
    async mounted() {
        const data = await axios.get("http://localhost:3000/api/v1/products/")
        this.products = data.data.products
    },
}
</script>

<style lang="scss" scoped>
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
