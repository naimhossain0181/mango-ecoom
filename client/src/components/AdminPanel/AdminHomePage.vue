<template>
<div class="container">
    <div class="body">
        <AdminNav />
        <AdminCrud />
    </div>

</div>
</template>

<script>
import AdminCrud from './AdminCrud.vue';
import AdminNav from './AdminNav.vue';
export default {
    name: "AdminHomePage",
    components: {
        AdminCrud,
        AdminNav
    },

};
</script>

<style lang="scss" scoped>
.body {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    align-items: center;
    flex-direction: column;
    gap: 16px;
}
</style>
