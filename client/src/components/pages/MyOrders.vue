<template>
<div>
    <h1>My Orders List</h1>
    <div>
        <table>
            <tr>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Amount (Taka) </th>
                <th>Process</th>   
            </tr>
                <tr v-for="order in orders" key="">
                <td>{{ order.products[0].productId.title}}</td>
                <td>{{ order.products[0].quantity}}</td>
                <td>{{ order.amount }}</td>
                <td>{{ order.status }}</td>
            </tr>
       
        </table>
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            orders: ""
        }
    },
    async mounted() {
        const token = JSON.parse(localStorage.getItem("user"))
        const id = JSON.parse(localStorage.getItem("id"))
        const result = await axios.get("http://localhost:3000/api/v1/orders/myorders", {
            headers: {
                token: token,
                id: id
            }
        })
        this.orders = result.data.orders
    }

}
</script>


<style lang="scss" scoped>
table {
  
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
      }
      tr:nth-child(even) {
        background-color: #dddddd;
      }
  }
  

  

</style>
