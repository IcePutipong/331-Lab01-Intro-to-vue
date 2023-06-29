const {createApp, ref } = Vue   

createApp({
    setup(){
        const product = ref('Boots')
        const image = ref('./assets/images/socks_green.jpg')
        const inStock = ref(true)
        const onSale = ref(false)
        const inventory = ref(100)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const link = ref('https://www.camt.cmu.ac.th')
        return {
            product,
            image,
            inStock,
            inventory,
            details,
            onSale,
            link
        }
    }
}).mount('#app')