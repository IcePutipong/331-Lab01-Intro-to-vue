const productDisplay = {
    template:
    `

        <div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img :src="image" :class = "{'out-of-stock-img': !inStock}">
                </div>
            </div>
        </div>
        <div class="product<-info">
            <h1><a :href="link" >{{ title }}</a></h1>
            <h1>{{description}}</h1>
            <p v-if="inventory > 10 ">In Stock</p>
            <p v-else-if="inventory <= 10 && inventory > 5">Almost out of Stock</p>
            <p v-else>Out of Stock</p>
            <p>Shipping: {{shipping}}</p>
            <p v-if="onSale">On Sale</p>

            <product-details :details="details"></product-details>

            <ul>
                <br>
                <li v-for="size in sizes">{{size}}</li>

            </ul>
            <div v-for="(variant, index) in variants" :key="variant.id"
        @mouseover="updateVariant(index)"
                     class="color-circle" :style="{backgroundColor: variant.color}">

            </div>
            <div>
                <button class="button" :disabled='!inStock' @click="addToCart" 
                :class="{disableButton: !inStock}">
                    Add to Cart</button>

                <button class="button" @click="updateStock">Update Stock</button>
                <button class="button" @:click="removeCart">Remove</button>
            </div>

            <review-form @review-submitted = "addReview"></review-form>
            <review-list :reviews = "reviews"></review-list>            
    
        </div>
        
    
   

    `,props :{
        premium: Boolean
    },
    setup(props, {emit}){
        const shipping = computed(() =>{
            if(props.premium){
                return 'Free'
            }else{
                return 30
            }
        })
        const product = ref('Boots')
        // const image = ref('./assets/images/socks_green.jpg')
        // const inStock = ref(true)
        const onSale = ref(true)
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
            emit('add-to-cart', variants.value[selectedVariant.value].id)
        }

        function removeCart(){
            emit('remove-from-cart', variants.value[selectedVariant.value].id)
        }

        const title = computed(() => {
            if(onSale.value === true){
                return brand.value+ ' ' + product.value+ " Is on Sale!!"
            }
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

        const reviews = ref([])

        function addReview(review){
            reviews.value.push(review)
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
            removeCart,
            updateImage,
            onSale,
            updateVariant,
            updateStock,
            link,
            shipping,
            reviews,
            addReview
        }
    }
    


}