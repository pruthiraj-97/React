import { nanoid } from "@reduxjs/toolkit"
const products=[
    {
        id:nanoid(),
        price:40,
        image:'https://vanninhealthcare.com/wp-content/uploads/2020/08/Hands-sanitiser75-500x500-1.png',
        name:"Sanitiser",
        about:"Emphasize the sanitizer's effectiveness in killing a broad spectrum of germs, including bacteria and viruses."
     },
     {
         id:nanoid(),
         price:45,
         image:"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-400x400.jpg",
         name:"Assort coffee",
         about:"Communicate the use of high-quality coffee beans sourced from reputable regions. Mention any special processing methods or roasting techniques that contribute to the exceptional taste and aroma."
     },
     {   
         id:nanoid(),
         price:80,
         image:"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/red-chillies-400x400.jpg",
         name:"Red Chillies",
         about:"Highlight the versatility of red chilies in adding a bold and spicy kick to various dishes, ranging from curries and sauces to marinades and salsas."
     },
     {   
         id:nanoid(),
         price:46,
         image:"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/edible-oil-400x400.jpg",
         name:"Edible Oil",
         about:"Emphasize the nutritional value of the edible oil. For example, if it's olive oil, highlight its monounsaturated fats and antioxidants. If it's another type of oil like coconut or avocado oil, focus on its unique health benefits."
     },
     {   
         id:nanoid(),
         price:90,
         image:"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-400x400.jpg",
         name:"coffee",
         about:"Emphasize the distinct and rich flavor profile of the coffee. Whether it's a single-origin bean or a carefully crafted blend, describe the tasting notes and aromas that make the coffee unique."
     },
     {   
         id:nanoid(),
         price:230,
         image:"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-400x400.jpg",
         name:"coffee-asorted",
         about:"Showcase popular coffee varieties included in the assortment, such as Colombian, Ethiopian, or flavored options like vanilla or hazelnut."
     },
     {   
         id:nanoid(),
         price:40,
         image:"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/organic-honey-400x400.jpg",
         name:"Honey",
         about:"Highlight the nutritional benefits of honey, including its natural sugars, vitamins, and antioxidants. Mention its potential health benefits, such as soothing a sore throat or serving as a natural sweetener."
     },
     {   
         id:nanoid(),
         price:40,
         image:"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/face-wash-400x400.jpg",
         name:"face-wash",
         about:"Communicate the skin benefits offered by the face wash, such as promoting a clear complexion, removing impurities, and maintaining skin hydration."
     },
     {   
         id:nanoid(),
         price:40,
         image:"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/pulses-400x400.jpg",
         name:"Organic Face Scrub",
         about:"Highlight key organic ingredients, such as botanical extracts, plant-based oils, or gentle exfoliants derived from nature."
     },
     {   
         id:nanoid(),
         price:120,
         image:"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/cashew-butter-500-400x400.jpg",
         name:"Cashew Butter",
         about:"Showcase the health benefits of cashew butter, including its high protein content, promoting healthy hair growth, and promoting healthy skin."
     },
     {
         id:nanoid(),
         price:40,
         image:"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/diabetic-cookies-400x400.jpg",
         name:"Diabetic Cookies",
         about:"Highlight the benefits of diabetic cookies, including their reduced risk of developing diabetes, promoting healthy hair growth, and promoting healthy skin."
     },
     {   
         id:nanoid(),
         price:60,
         image:"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/orage-juice-kariz-400x400.jpg",
         name:"fresh orange juice",
         about:"Communicate that the juice is made from freshly squeezed oranges, providing a taste that captures the essence of ripe, juicy oranges."
     },
     {   
         id:nanoid(),
         price:60,
         image:"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/eggs-400x400.jpg",
         name:"Fresh Egg",
         about:"Highlight the health benefits of fresh eggs, including their high protein content, promoting healthy hair growth, and promoting healthy skin."
     },
     {
         id:nanoid(),
         price:100,
         image:"https://img.freepik.com/free-psd/mix-fruits-png-isolated-transparent-background_191095-9864.jpg",
         name:"fresh fruits",
         about:"Highlight the health benefits of fresh fruits, including their high protein content, promoting healthy hair growth, and promoting healthy skin."
     },
     {   id:nanoid(),
         price:125,
         image:"https://sapinsdairy.com/wp-content/uploads/2021/12/milk-bottle.png",
         name:"Milk",
         about:"Showcase the health benefits of milk, including its protein content, promoting healthy hair growth, and promoting healthy skin."
     },
     {
         id:nanoid(),
         price:1000,
         image:"https://rukminim2.flixcart.com/image/850/1000/km2clu80/mobile/r/g/e/rog-phone-5-zs673ks-1a053in-asus-original-imagff5hp2scqwyn.jpeg?q=90&crop=false",
         name:"Asus",
         about:"Asus phones may run on either a near-stock version of Android or use the company's custom ZenUI skin, providing additional features and customization options."
     },
     {
         id:nanoid(),
         price:800,
         image:"https://www.leafstudios.in/cdn/shop/products/Main_a66bce90-71a9-4c4f-9469-078ec70933e0_800x.jpg?v=1673960414",
         name:"watch",
         about:"LEAF WATCH WIRELESS BT CALLING SMART WATCH-CARBON BLACK"
     },
     {
         id:nanoid(),
         price:500,
         image:"https://rukminim2.flixcart.com/image/850/1000/ktszgy80/kids-shoe/7/j/x/4-106072-puma-original-imag72e8ys2twasa.jpeg?q=90&crop=false",
         name:"puma",
         about:"Puma kids shoe, with its lightweight design and durable construction, making it a perfect choice for playing and exploring."
     }
]

export default products