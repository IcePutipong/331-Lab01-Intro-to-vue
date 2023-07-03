const {createApp, ref, computed} = Vue   

createApp({
    setup(){
        const product = ref('Boots')
        // const image = ref('./assets/images/socks_green.jpg')
        // const inStock = ref(true)
        const onSale = ref(false)
        // const inventory = ref(100)
        const brand = ref('SE 331')
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const description = ref('description')
        const sizes = ref([
            'S', 
            'M',
            'L'
        ])
        const variants = ref ([
            { id: 2234, color: ' green', image: './assets/images/socks_green.jpg',quantity:50},
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity:0}
        ])
         const selectedVariant = ref(0)

         function updateVariant(index){
            selectedVariant.value = index;
         }

         const image = computed(() => {
            return variants.value[selectedVariant.value].image
         })
         const inStock = computed(() =>{
            return variants.value[selectedVariant.value].quantity > 0
         })
         const inventory = computed(() =>{
            return variants.value[selectedVariant.value].quantity
         })


        const cart = ref(0)

        function addToCart(){
            cart.value += 1
        }

        const title = computed(() => {
            return brand.value + ' ' + product.value
        })
        function updateImage(variantImage){
            image.value = variantImage
        }

        function updateStock(){
            if(inStock.value === false) {
                variants.value[selectedVariant.value].quantity = 100
            
            }
            else{
                variants.value[selectedVariant.value].quantity = 0
            }
        }


        const link = ref('https://www.camt.cmu.ac.th')

        return {
            title,
            description,
            image,
            sizes,
            inStock,
            inventory,
            details,
            variants,
            cart,
            addToCart,
            updateImage,
            onSale,
            updateVariant,
            updateStock,
            link
        }
    }
}).mount('#app')