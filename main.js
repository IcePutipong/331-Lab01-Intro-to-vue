const {createApp, ref } = Vue   

createApp({
    setup(){
        const product = ref('Boots')
        const image = ref('./assets/images/socks_green.jpg')
        const inStock = ref(true)
        const onSale = ref(true)
        const inventory = ref(100)
        const link = ref('https://www.camt.cmu.ac.th')
        return {
            product,
            image,
            inStock,
            inventory,
            onSale,
            link
        }
    }
}).mount('#app')