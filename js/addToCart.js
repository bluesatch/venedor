class Action {
    addToCart() {

        // set variables
        let buttons = document.querySelectorAll('.add-button');
        let cartItems = document.getElementById('cartItems');
        let cartSubTotal = document.getElementById('cartSubTotal');    
        let itemCount = 0;
        let price = 0;
    
        // for in loop to loop through this.inventory
        for (const key in this.inventory) {
            const item = this.inventory[key];
            // add event listener to each button
            buttons.forEach(button => {
                button.addEventListener('click', ()=> {
                    // if the id of the data attribute matches item.id
                    if (button.dataset['id'] == item.id) {
                        itemCount++;
                        price = price + item.price
                        // store changed itemCount and price into this.itemsInCart
                        this.itemsInCart.itemCount = itemCount;
                        this.itemsInCart.subTotal = price;
    
                        item.qty++
                        console.log(item);
                        console.log(this.itemsInCart);
                    }
                    // Send back to DOM
                    cartItems.innerText = itemCount;
                    cartSubTotal.innerText = price.toFixed(2);
                    })
                });
            
        }
       
    }
}



export default Action;