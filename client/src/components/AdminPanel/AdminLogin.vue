<template>
<div class="container">

    <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Username</label>
            <input type="email" class="form-control" v-model="username" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your username with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" v-model="password" id="exampleInputPassword1">
        </div>
        <div class="mb-3 form-check">
            <p>{{ msg }}</p>
        </div>
        <button @click="submit()" type="button" class="btn btn-primary">Login</button>
       <RouterLink to="/signup">
        <button type="button" class="btn btn-primary signup">SignUp</button>
       </RouterLink> 
    </form>
</div>
</template>

<script>

import axios from 'axios'
import NavBar from './SignUp.vue'
export default {

    name: "Login",
    components: {
        NavBar
    },
    data() {
        return {
            username: "",
            password: "",
            msg: ""
        }
    },
    methods: {
        async submit() {
            try {
                const result = await axios.post("http://localhost:3000/api/v1/auth/login", {
                    username: this.username,
                    password: this.password

                })
                if (result.data.isAdmin) {
                    localStorage.setItem("admin", JSON.stringify(result.data.accessToken))
                    this.$router.go({
                        name: "Deshboard"
                    })
                } else if (result.data.isAdmin === false) {
                    localStorage.setItem("user", JSON.stringify(result.data.accessToken))
                    localStorage.setItem("id", JSON.stringify(result.data._id))
                    this.$router.go({
                        name: "Home"
                    })
                } else {
                    this.msg = "Your are not access this website contact your admin"
                }
            } catch (error) {
                this.msg = "Your are not access this website. please contact your admin"
            }
        }

    },
    mounted() {
        let admin = localStorage.getItem("admin")
        let user = localStorage.getItem("user")
        if (admin) {
            this.$router.push({
                name: "Deshboard"
            })
        }
        if (user) {
            this.$router.push({
                name: "Home"
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.signup{
    margin-left: 10px;
}
</style>
