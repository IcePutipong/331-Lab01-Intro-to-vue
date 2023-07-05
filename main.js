const {createApp, ref, computed} = Vue   

const app = createApp({
    setup(){
        const cart = ref([])
        const premium = ref(true)
        function updateCart(id){
            cart.value.push(id)
        }
        function removeCart(id){
            cart.value = []
            console.log(cart.value)
        }
        return {
            cart,
            premium,
            updateCart,
            removeCart
        }
    }
})

app.component('product-display', productDisplay)
app.component('product-details', productDetails)
app.mount('#app')