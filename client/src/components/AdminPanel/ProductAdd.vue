<template>
<div class="container">

    <AdminNav />
    <h1>Create Product</h1>
    <div class="container">
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">title</label>
                <input type="text" class="form-control" v-model="title" id="exampleInputEmail1" aria-describedby="emailHelp">

            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">description</label>
                <input type="text" class="form-control" v-model="description" id="exampleInputPassword1">
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
                <input type="number" class="form-control" v-model="size" id="exampleInputPassword1">
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

            <button @click="submit()" type="button" class="btn btn-primary">Submit</button>
        </form>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import AdminNav from './AdminNav.vue';
export default {
    name: "ProductAdd",
    components: {
        AdminNav
    },
    data() {
        return {
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
    methods: {
        async submit() {
            const token = JSON.parse(localStorage.getItem('admin'))
            let result = await axios.post("http://localhost:3000/api/v1/products/create", {
                title: this.title,
                description: this.description,
                image: this.image,
                categories: this.categories,
                size: this.size,
                color: this.color,
                price: this.price
            }, {
                headers: {
                    token: token
                }
            })
            if (result.status === 201) {
                this.title = ""
                this.description = ""
                this.image = ""
                this.categories = ""
                this.size = ""
                this.color = ""
                this.price = ""
                this.msg = "Product Successfully Creaated"

            } else {
                this.msg = "Something Went Wrong Try again or Contract with Developer"
            }
        }
    },
}
</script>

<style lang="scss" scoped>
</style>
