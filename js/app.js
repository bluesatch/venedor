class Store {
    constructor() {
        
        this.itemsInCart = {
            itemCount: 0,
            subTotal: 0
        }

        this.inventory = {
            item1: {
                id: 1,
                img: 'media/ring.png',
                alt: 'bracelet',
                class: 'latest-img',
                price: 40.00,
                qty: 0,
                name: 'bracelet',
                productCode: 'PH879042'
            },

            item2: {
                id: 2,
                img: 'media/trenchcoat.png',
                alt: 'trenchcoat',
                class: 'latest-img',
                price: 435.00,
                qty: 0,
                name: 'trenchcoat',
                productCode: 'YR940345'
            },

            item3: {
                id: 3,
                img: 'media/gloves.png',
                alt: 'gloves',
                class: 'latest-img',
                price: 19.00,
                qty: 0,
                name: 'gloves',
                productCode: 'TT743923'
            },

            item4: {
                id: 4,
                img: 'media/sweater2.png',
                alt: 'sweater',
                class: 'latest-img',
                price: 19.00,
                qty: 0,
                name: 'sweater',
                productCode: 'LM112309'
            },

            item5: {
                id: 5,
                img: 'media/wedge.png',
                alt: 'wedge',
                class: 'bestsellers-img',
                price: 40.00,
                qty: 0,
                name: 'wedge',
                productCode: 'PH778932'
            },

            item6: {
                id: 6,
                img: 'media/clutch.png',
                alt: 'clutch',
                class: 'bestsellers-img',
                price: 435.00,
                qty: 0,
                name: 'clutch',
                productCode: 'MN556832'
            },

            item7: {
                id: 7,
                img: 'media/shoes.png',
                alt: 'shoes',
                class: 'bestsellers-img',
                price: 19.00,
                qty: 0,
                name: 'shoes',
                productCode: 'KG320563'
            },

            item8: {
                id: 8,
                img: 'media/trenchcoat2.png',
                alt: 'trenchcoat2',
                class: 'bestsellers-img',
                price: 435.00,
                qty: 0,
                name: 'trenchcoat',
                productCode: 'YR094562'
            }

        }

        this.friends = {
            friend1: {
                name: 'Alex',
                img: 'media/alex.jpeg', 
                alt: 'alex'
            },

            friend2: {
                name: 'Crutch',
                img: 'media/crutch.jpeg',
                alt: 'crutch'
            },

            friend3: {
                name: 'Joseph',
                img: 'media/joseph.jpeg',
                alt: 'Joseph'
            },

            friend4: {
                name: 'Satch',
                img: 'media/djdaddybug.jpeg',
                alt: 'Satch'
            },

            friend5: {
                name: 'Marlon',
                img: 'media/marlon.jpeg',
                alt: 'Marlon'
            },

            friend6: {
                name: 'Toya',
                img: 'media/toya.jpeg',
                alt: 'Toya'
            }

            
        }

    }


    loadItems() {
        // load items on page
        let count = 0;

        //  when I reach 4 go to the next DOM element
        let products1 = document.getElementById('products1');
        let products2 = document.getElementById('products2');
        
        for (const key in this.inventory) {
            const item = this.inventory[key];
            const product = document.createElement('div');
            product.className = 'col-md-3 product';
            product.innerHTML = `
                <img src="${item.img}" alt="${item.alt}" class="img-fluid ${item.class}">
                <button class="btn btn-secondary add-button" data-id="${item.id}">Add to Cart</button>`;
            if (count < 4) {
                products1.append(product);
            } else {
                products2.append(product);
            }
            count++;
        }


        // facebook friends
        let fbFriends1 = document.querySelector('.fb-friends2');
        let fbFriends2 = document.querySelector('.fb-friends2')

        for (const key in this.friends) {
            const item = this.friends[key];
            const friend = document.createElement('div');
            friend.className = 'col-sm-4';

            friend.innerHTML = `
                <figure>
                    <img src='${item.img}' alt='${item.alt}' class="img=fluid facebook-img">
                    <figcaption>${item.name}</figcaption>
                </figure>
            `;

            if (count < 3) {
                fbFriends1.append(friend);
            } else {
                fbFriends2.append(friend);
            }

            count++
        }


        //  manufacturers
        
        
    }

    
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

    checkout() {
        let table = document.getElementById('tbody');
        let checkout = document.getElementById('checkout');
        let checkoutPage = document.querySelector('.checkout-page');
        let homePage = document.querySelector('.home-page');
        let subTimesQty = 0;
        let subtotalValue = document.getElementById('subtotalValue')
        let taxValue = document.getElementById('taxValue');
        let totalValue = document.getElementById('totalValue');
        let tax = 0;
        let shippingValue = document.getElementById('shippingValue');
        let checkoutItemCount = document.getElementById('checkoutItemCount');
        let shipping = 6;

        checkout.addEventListener('click', ()=> {
            checkoutPage.classList.remove('d-none');
            homePage.classList.add('d-none')
            
            if (this.itemsInCart.itemCount == 1) {
                checkoutItemCount.innerText = `${this.itemsInCart.itemCount} item`;
            } else {
                checkoutItemCount.innerText = `${this.itemsInCart.itemCount} items`;
            }

            // checkoutItemCount.innerText = this.itemsInCart.itemCount;
            // load content on checkout page
            for (const key in this.inventory) {
                const item = this.inventory[key];

                subTimesQty = (item.qty * item.price).toFixed(2);
                subtotalValue.innerText = this.itemsInCart.subTotal.toFixed(2);
                shippingValue.innerText = shipping.toFixed(2);
                tax = this.itemsInCart.subTotal * .07;
                taxValue.innerText = tax.toFixed(2);
                totalValue.innerText = (this.itemsInCart.subTotal + tax + shipping).toFixed(2)

                // if qty > 0 (item has been added to cart);
                if (item.qty > 0) {

                    

                    const tableRow = document.createElement('tr');
                    tableRow.className = 'product-checkout';

                    tableRow.innerHTML += `
                    <td class="checkoutImg">
                        <img src="${item.img}" alt="${item.alt}
                        class="img-fluid checkout-img">
                        <div class="product-desc">
                            <p class="item-name">${item.name}</p>
                        </div>
                    </td>
                    <td id="productCode">${item.productCode}</td>
                    <td>
                        <p class="unit-price">${item.price.toFixed(2)}</p>
                    </td>
                    <td>
                        <div id="itemQuantity">
                            <p id="qtyInput">${item.qty}</p>
                        </div>
                    </td>
                    <td id="itemSubtotal">${subTimesQty}</td>`;


                    table.append(tableRow);

              

                }
            }
        })

    }

}

let action = new Store();

action.loadItems();
action.addToCart();
action.checkout();