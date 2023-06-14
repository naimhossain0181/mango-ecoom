<template>
<div class="container">

    <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Username</label>
            <input type="username" class="form-control" v-model="username" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your username with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input type="email" class="form-control" v-model="email" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your username with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" v-model="password" id="exampleInputPassword1">
        </div>
        <div class="mb-3 form-check">
            <p>{{ msg }}</p>
        </div>
        <button @click="submit()" type="button" class="btn btn-primary">Submit</button>
    </form>
</div>
</template>

    
<script>
import axios from 'axios'
import NavBar from '../NavBar.vue'
export default {

    name: "Signup",
    components: {
        NavBar
    },
    data() {
        return {
            username: "",
            email: "",
            password: "",
            msg: ""
        }
    },
    methods: {
        async submit() {
            try {
                const result = await axios.post("http://localhost:3000/api/v1/auth/register", {
                    username: this.username,
                    email: this.email,
                    password: this.password
                })
                if(result){
                    this.msg="signup"
                    this.$router.push("/login")
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
