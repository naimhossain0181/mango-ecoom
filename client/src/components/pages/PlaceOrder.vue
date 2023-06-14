<template>
<div>
    <h1>Order Place</h1>
    <input disabled type="text" placeholder="products title" v-model="cartData.productId.title">
    <input disabled type="text" placeholder="productsId" v-model="cartData.productId._id">
    <input disabled ref="price" type="number" placeholder="price/kg" v-model="cartData.productId.price">
    <input  disabled ref="quantity"  type="number" placeholder="quantity" v-model="cartData.quantity">
    <input disabled  type="number" placeholder="$amount" v-model="amount">
    <input   type="text" placeholder="Address" v-model="address" >
    <button @click="confirmOrder"> Order Confirm</button>
    {{ address }}
 </div>
</template>

<script>
import axios from 'axios'

export default {
    name:"Order",
    props:['msg'],
    data() {
        return {
            cartData:JSON.parse(this.$route.query.msg),   
            amount:"" ,
            address:""             
        }
    },
    methods: {
        async confirmOrder(){
            const token = JSON.parse(localStorage.getItem("user"))
            const id = JSON.parse(localStorage.getItem("id"))
            const result = await axios.post("http://localhost:3000/api/v1/orders",{
                products:{
                    productId:this.cartData.productId,
                    quantity:this.cartData.quantity
                },
                amount:this.amount,
                address:this.address
            },{
                headers:{
                    token: token,
                    id: id
                }
            })
            console.log(result)
        }
    },
  mounted() {
    let quantity=this.$refs.quantity.value
    let price=this.$refs.price.value
    this.amount=quantity*price
  },
  computed(){
    
  }



}
</script>

<style lang="scss" scoped>

</style>
