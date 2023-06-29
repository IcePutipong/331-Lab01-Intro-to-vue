const {createApp, ref } = Vue   

createApp({
    setup(){
        const product = ref('Boots')
        return {
            product
        }
    }
}).mount('#app')