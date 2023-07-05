const {createApp, ref, computed, reactive, toRefs} = Vue   

const app = createApp({
    setup(){
        const cart = ref([])
        const premium = ref(true)
        function updateCart(id){
            cart.value.push(id)
        }
        function removeCart(id){
            cart.value.pop(id)
            
        }
        return {
            cart,
            premium,
            updateCart,
            removeCart,
            cartDisplay: computed(() =>
                    cart.value.reduce((acc, curr) => {
                        if (acc[curr]) {
                             acc[curr]++;
                        } else {
                            acc[curr] = 1;
                    }
                return acc;
            }, {})
      ),
        }
    }
})

app.component('product-display', productDisplay)
app.component('product-details', productDetails)
app.component('review-form', reviewForm)
app.component('review-list', reviewList)

app.mount('#app')