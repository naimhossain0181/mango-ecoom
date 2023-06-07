<template>
<div class="AdminNav">
    <h1>Welcome To Admin Deshboard</h1>

    <div class="NavLink">
        <RouterLink to="/deshboard">Home</RouterLink>
        <button @click="logout()">Logout</button>
    </div>

</div>
</template>

<script>
export default {
    methods: {
        async logout() {
            localStorage.clear();
            this.$router.push({
                name: "AdminLogin"
            });

            // refresh page
        },
    },
}
</script>

<style lang="scss" scoped>
.AdminNav {
    margin-top: 30px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    h1 {
        color: rgb(92, 124, 45);
    }

}

.NavLink {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin-bottom: 30px;

    a {
        display: flex;
        height: 40px;
        widows: 50px;
        text-decoration: none;
        padding-left: 10px;
        padding-right: 10px;
        background: rgb(12, 124, 87);
        color: white;
        text-align: center;
        align-items: center;

    }

    button {
        display: flex;
        height: 40px;
        widows: 50px;
        background: rgb(247, 32, 32);
        color: white;
        align-items: center;
        border: none;
    }
}
</style>
