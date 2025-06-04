
import React from 'react';


const coffeeData = {
  hotCoffeeVarieties: [
    { id: 1, name: "Hot Coffee", description: "The general go-to; plain or milk-based.", image: "https://static.vecteezy.com/system/resources/previews/029/557/207/large_2x/hot-coffee-isolated-on-white-background-generative-ai-free-photo.jpg", price: "₹60" },
    { id: 2, name: "Black Coffee", description: "No milk, no sugar (just brewed coffee).", image: "https://us.images.westend61.de/0000522564pw/cup-of-black-coffee-on-white-background-RAMF000048.jpg", price: "₹50" },
    { id: 3, name: "Milk Coffee", description: "Coffee with boiled milk and sugar.", image: "https://media.istockphoto.com/id/1174632449/photo/side-view-of-hot-latte-coffee-with-latte-art-in-a-ceramic-green-cup-and-saucer-isolated-on.jpg?s=612x612&w=0&k=20&c=J4ZxqJk3EG2f4l-qcr-S1ZYOvKmzM7IXOmsdi1QmzoE=", price: "₹65" },
    { id: 4, name: "Filter Coffee", description: "South Indian-style strong coffee with milk.", image: "https://static.vecteezy.com/system/resources/thumbnails/049/376/953/small_2x/cup-of-coffee-with-creamy-frothy-top-and-coffee-beans-free-png.png", price: "₹70" },
    { id: 5, name: "Instant Coffee", description: "Quick to make using instant powder (like Bru, Nescafé).", image: "https://img.freepik.com/premium-photo/close-up-one-white-cup-full-black-instant-coffee-saucer-isolated-white-background-elevated-top-view-directly_273651-412.jpg", price: "₹55" },
    { id: 6, name: "Espresso", description: "Small, strong shot of coffee.", image: "https://media.istockphoto.com/id/2153935192/photo/cup-of-coffee-isolated-on-white-background-file-contains-clipping-path.jpg?s=612x612&w=0&k=20&c=NGUFxoxU5hc5C6JhljN2zGSdM3epRWGu8n11HhLHQGI=", price: "₹80" },
    { id: 7, name: "Cappuccino", description: "Espresso with milk and foam.", image: "https://www.shutterstock.com/image-photo/cup-coffee-latte-beans-isolated-600nw-583224151.jpg", price: "₹90" },
    { id: 8, name: "Latte", description: "Milkier and softer than cappuccino.", image: "https://img.freepik.com/free-photo/latte-coffee_1122-2728.jpg", price: "₹95" },
    { id: 9, name: "Affogato", description: "Espresso poured over vanilla ice cream.", image: "https://th.bing.com/th/id/OIP.2Y8b9ebYUHREjLu8Ua_KSQAAAA?rs=1&pid=ImgDetMain", price: "₹105" },
    { id: 10, name: "Macchiato", description: "Espresso with a small amount of milk.", image: "https://th.bing.com/th/id/OIP.GgsJxjQ-_GcMXukapQ53MwAAAA?rs=1&pid=ImgDetMain", price: "₹85" }
  ],
  coldCoffeeVarieties: [
    { id: 11, name: "Cold Coffee", description: "Blended coffee with milk, sugar, ice (often served chilled).", image: "https://static.vecteezy.com/system/resources/previews/038/079/087/non_2x/iced-coffee-cup-on-a-wooden-bar-at-the-coffee-shop-free-photo.jpg", price: "₹80" },
    { id: 12, name: "Iced Latte", description: "Cold milk + espresso + ice.", image: "https://media.istockphoto.com/id/1409749018/photo/iced-latte-coffee-on-plastic-glass-and-tube-sucking-isolated-white-background-summer-drink.jpg?s=612x612&w=0&k=20&c=GMZsopCg-V6Ayu0puSuhwl6VcvfIoYwmzqVz5eJy9bw=", price: "₹90" },
    { id: 13, name: "Frappe", description: "Frothy cold coffee, usually with sugar and ice.", image: "https://img.freepik.com/premium-photo/chocolate-frappe-isolated-white-background_536380-34.jpg", price: "₹100" },
    { id: 14, name: "Mocha Shake", description: "Cold coffee with chocolate flavor.", image: "https://th.bing.com/th/id/OIP.GdJGjbyfhdeYPlCJ7i143AHaEJ?cb=iwp2&rs=1&pid=ImgDetMain", price: "₹110" },
    { id: 15, name: "Iced Americano", description: "Espresso with cold water and ice.", image: "https://t4.ftcdn.net/jpg/06/17/75/75/360_F_617757534_6PD52MoPi8htLyt9130k8I8EiIelYSvR.jpg", price: "₹85" },
    { id: 16, name: "Iced Mocha", description: "Espresso, chocolate, milk, and ice.", image: "https://i.pinimg.com/1200x/28/82/e1/2882e1b6c3a0af694c21f7e4343ffb7b.jpg", price: "₹115" },
    {
      id: 17,
      name: "Coffee Float",
      description: "Iced coffee with a scoop of ice cream.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe-I224pUOsddEVtFNHApm6GKRuHhkWBsrXDbme6Y2gFqnLYJlHTqJibGoGRHGd2hHXpk&usqp=CAU",
      price: "₹130"
    },
    { id: 18, name: "Vietnamese Iced Coffee", description: "Strong coffee with sweetened condensed milk and ice.", image: "https://static.vecteezy.com/system/resources/thumbnails/030/212/599/small/of-a-iced-coffee-drink-isolated-on-white-background-generative-ai-photo.jpg", price: "₹125" }
  ],
  localCommonNames: [
    { id: 19, name: "Normal Coffee", description: "Usually refers to hot milk coffee.", image: "https://img.freepik.com/free-psd/delicious-coffee-cup-isolated_23-2151806499.jpg?semt=ais_hybrid&w=740", price: "₹60" },
    { id: 20, name: "Strong Coffee", description: "Locally used to mean highly brewed or thick coffee.", image: "https://img.freepik.com/premium-photo/aromatic-hot-coffee-coffee-white-cup-white-background_49059-834.jpg", price: "₹65" },
    { id: 21, name: "Madras Filter Kaapi", description: "Classic Tamil Nadu filter coffee.", image: "https://static.wixstatic.com/media/b4b7b0_4e4f72b14f5744b48a176cea18d0e9d4~mv2.jpg/v1/fit/w_1000%2Ch_1000%2Cal_c%2Cq_80/file.jpg", price: "₹75" },
    { id: 22, name: "Kerala Coffee", description: "Coffee with coconut milk, Kerala style.", image: "https://static.vecteezy.com/system/resources/previews/030/665/792/non_2x/coffee-with-white-background-high-quality-ultra-hd-free-photo.jpg", price: "₹80" },
    { id: 23, name: "Chicory Coffee", description: "Coffee blended with chicory root.", image: "https://th.bing.com/th/id/R.057857fd6ceb6d4497267ea2ef59d9dd?rik=ucyI0kRmp7EyjA&riu=http%3a%2f%2fcoffeesuperstar.com%2fwp-content%2fuploads%2f2024%2f02%2fad510267a69e9023fe7408b320d8edc7.png&ehk=adYhSqlKvZWmBf3QBp0SzU%2bRPKw2Gj1z8zVY3CyKr78%3d&risl=&pid=ImgRaw&r=0", price: "₹70" },
    { id: 24, name: "Dabara Coffee", description: "Served in a traditional South Indian dabara set.", image: "https://sutracoffee.com/cdn/shop/products/Darbarah-set_DSC_7103.jpg?v=1631078785", price: "₹75" },
    { id: 25, name: "Tandoori Coffee", description: "Coffee served in a clay cup, tandoor-smoked.", image: "https://c.ndtvimg.com/2023-01/89jncoto_tandoori-coffee_625x300_07_January_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675", price: "₹90" },
    { id: 26, name: "Mysore Coffee", description: "Rich, aromatic coffee from Mysore.", image: "https://im.hunt.in/cg/mysore/City-Guide/Filtercoffee.jpg", price: "₹85" },
    { id: 27, name: "Butterscotch Coffee", description: "Rich coffee with sweet butterscotch flavor.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDssac66FiptXyqAKfmX0Ym3kTDSu6CZy9X0mv604F6MlamTTwouBIvg3-sAjImOuef9o&usqp=CAU", price: "₹110" }
  ]
};


const coffeeProducts = [
  ...coffeeData.hotCoffeeVarieties,
  ...coffeeData.coldCoffeeVarieties,
  ...coffeeData.localCommonNames
];

const Menu = () => {
  const addToCart = (coffeeItem) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = existingCart.findIndex(item => item.id === coffeeItem.id);

    if (existingItemIndex !== -1) {
      existingCart[existingItemIndex].quantity += 1;
    } else {
      existingCart.push({ ...coffeeItem, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
    alert(`${coffeeItem.name} added to cart!`);
  };

    return (
    <div className="menu-container">
      <h2 className="menu-title">Our Coffee Menu</h2>
      <div className="coffee-grid">
        {coffeeProducts.map((coffee) => (
          <div key={coffee.id} className="coffee-card">
            <div>
              <img src={coffee.image} alt={coffee.name} className="coffee-image" />
            </div>
            <div className="coffee-details">
              <h3 className="coffee-name">{coffee.name}</h3>
              <p className="coffee-price">{coffee.price}</p>
              <p className="coffee-description">{coffee.description}</p>
              <button 
                className="add-to-cart-btn" 
                onClick={() => addToCart(coffee)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Menu;