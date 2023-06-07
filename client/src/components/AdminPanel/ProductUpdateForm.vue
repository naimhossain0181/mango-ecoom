<template>
<div class="container">
    <AdminNav />
    <div>
        <h1>Product Details</h1>
        <div class="container">

            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">title</label>
                    <input type="text" class="form-control" v-model="title" id="exampleInputEmail1" aria-describedby="emailHelp">

                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">description</label>
                    <textarea type="text" class="form-control" v-model="description" id="exampleInputPassword1" />
                    </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">image</label>
                    <input type="text" class="form-control" v-model="image" id="exampleInputPassword1">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">categories</label>
                    <input type="text" class="form-control" v-model="categories" id="exampleInputPassword1">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">size</label>
                    <input type="text" class="form-control" v-model="size" id="exampleInputPassword1">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">color</label>
                    <input type="text" class="form-control" v-model="color" id="exampleInputPassword1">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">price</label>
                    <input type="number" class="form-control" v-model="price" id="exampleInputPassword1">
                </div>
                <p>{{ msg }}</p>

                <button @click="submit()" type="button" class="btn btn-primary">Update</button>
            </form>
        </div>
    </div>
</div>
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
            product: "",
            title: "",
            description: "",
            image: "",
            categories: "",
            size: "",
            color: "",
            price: "",
            msg: ""
        }
    },
    async mounted() {
        const id = this.$route.params.id
        const data = await axios.get("http://localhost:3000/api/v1/products/" + id)
        this.product = data.data.product
        this.title = this.product.title
        this.description = this.product.description
        this.image = this.product.image
        this.categories = this.product.categories
        this.size = this.product.size
        this.color = this.product.color
        this.price = this.product.price
        console.log()

    },
    methods: {
        async submit() {
            const id = this.$route.params.id
            const token = JSON.parse(localStorage.getItem("admin"))
            const data = await axios.put("http://localhost:3000/api/v1/products/" + id, {
                title: this.title,
                description: this.description,
                image: this.image,
                categories: this.categories,
                size: this.size,
                color: this.color,
                price: this.price,
            }, {
                headers: {
                    token: token
                }
            })
            if (data) {
                this.title = ""
                this.description = ""
                this.image = ""
                this.categories = ""
                this.size = ""
                this.color = ""
                this.price = ""
            }
        }
    },
}
</script>

<style lang="scss" scoped>

</style>
