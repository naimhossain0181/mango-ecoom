<template>
<div class="main">
    <RouterLink to="/deshboard/create"> Product Add</RouterLink>
    <RouterLink to="/deshboard/update"> Product Update</RouterLink>
    <RouterLink to="/deshboard/delete"> Product Delete</RouterLink>

</div>
</template>

<script>
export default {
    name: "AdminCRUD",
};
</script>

<style lang="scss" scoped>
.main {
    height: 500px;
    width: 700px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    align-self: center;
    background-color: rgb(188, 211, 211);
    flex-wrap: wrap;

    a {
        width: 250px;
        height: 200px;
        display: flex;
        background: rgb(43, 42, 42);
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: white;
        border-radius: 12px;

        &:hover {
            background: rgb(40, 53, 14);
        }

        &:nth-child(3) {
            background: rgb(192, 20, 20);

            &:hover {
                background: red;
            }
        }
    }

}
</style>
