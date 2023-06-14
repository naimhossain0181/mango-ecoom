<template>
<div v-if="!admin">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/">Home</RouterLink>
                    </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/cart">Carts</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/order/myorders">My orders</RouterLink>
                </li>
                </ul>
                <RouterLink to="/login">
                    <button class="navbar-nav" v-show="!user">Login</button>
                </RouterLink>
                <RouterLink to="/">
                    <button class="navbar-nav  " @click="logout" v-show="user">logout</button>
                </RouterLink>
              

                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
</div>
</template>

<script>
export default {
    name: "NavBar",
    data() {
        return {
            user:"",
            admin:""
        }
    },

    mounted() {
        let user= localStorage.getItem('user')
        let admin= localStorage.getItem('admin')
        this.admin=admin
        this.user=user
    },

    methods: {
        logout(){
           if(localStorage.getItem('user')) {
            localStorage.clear()
            this.$router.go(0);
            $router.push({
                name:"Home"
            })
           }
           
        }
    },
}
</script>

<style lang="scss" scoped>

</style>
