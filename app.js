const app = Vue.createApp({
    data() {
        return {
            url: 'http://www.google.com',
            showBooks: true,
            title: 'Shadow and bone',
            author: 'Sarah',
            age: 25,
            x:0,
            y:0,
        books: [
            {title: 'name of the wind', author: 'patrick roy', age: 30, img:"assets/1.jpg", isFav: true},
            {title: 'the way of kings', author: 'brandon sam', age: 45, img:"assets/2.jpg", isFav: true },
            {title: 'final empire', author: 'brandon sam', age: 45, img:"assets/3.jpg", isFav: true },
        ]
        }
    },
    methods: {
        // toggleShowBooks(book) {
        //     books.map((bk) => {
        //         if(this.bk.title == book.title)
        //         this.book.isFav=!this.book.isFav

        //     });
            // toggleShowBooks()
            // {
            //   this.showBooks= !this.showBooks
            // },
            toggleDisplay(book) {
                this.showBooks= !this.showBooks
                book.isFav= !book.isFav
                console.log(book.isFav)
            },
        // toggleDisplay: function(pbook){
        //     this.books.forEach(function(pbook){
        //         //pbook.$set('isDisplay', true);
        //         app.$set(app.pbook, 'isDisplay', true)


        //     });
        //     pbook.$set('isDisplay', false);

        // },
        
        handleEvent(e,data){
            console.log(e, e.type)
            if(data)
            {
                console.log(data)
            }
        },
        handleMousemove(e){
            this.x=e.offsetX
            this.y=e.offsetY
        }
    },
    computed: {
        filteredBooks(){
            return this.books.filter((book)=> book.isFav )
        },
        noFilteredBooks(){
            return this.books.filter((book)=> !book.isFav )
        }

    }
    })
    
app.mount('#app')