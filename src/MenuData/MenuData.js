let burgers = [
    {
        name: "The G.O.A.T Burger",
        price: 9.50,
        description: "6oz Angus Beef Patty, Goat Cheese, Arugula, Braised Tomato, Sautéed Mushrooms"
    },
    {
        name: "The Pickle Rick Burger",
        price: 9.50,
        description: "6oz Angus Dried Aged Patty, Fried pickles, Pickled Onions, Provolone Cheese, Szechuan-Mayo",
        isNew: true
    },
    {
        name: "Three Little Pigs Burger",
        price: 9.95,
        description: "6oz Angus Dried Aged Patty, Slab Bacon, BBR Pulled Pork, Grilled Onion, Smoked Gouda Cheese, Bacon Dressing",
        isNew: true
    },
    {
        name: "The Forager Burger",
        price: 9.50,
        description: "6oz Angus Dried Aged Patty, Roasted Portobello, Pickled Ramps, Brie Cheese, Tomato Jam"
    },
    {
        name: "The Classic Burger",
        price: 8.50,
        description: "6oz Angus Dried Aged Patty, Lettuce, Tomato, Onion, Mayo, Ketchup, Mustard",
        options: [
            {
                option_name: "Add Cheese",
                option_price: 1
            },
            {
                option_name: "Add Slab Bacon",
                option_price: 1
            }
        ]
    },
    {
        name: "The Red, White, & Bleu Burger",
        price: 9.50,
        description: "6oz Angus Dried Aged Patty, Tomato Jam, Charred Onion, Blue Cheese"
    },
    {
        name: "Truffle Hunter Burger",
        price: 10.50,
        description: "6oz Angus Beef Patty, Fried Onion, Truffle Mayo, Balsamic Reduction, Shaved Parmesan, Arugula, Sliced Steak"
    },
    {
        name: "Charred Burger",
        price: 9.50,
        description: "6oz Angus Dried Aged Patty, Slabbed Cheddar, Bourbon-Bacon Jam, Caramelized Onion, Sweet Mustard"
    }
]

let chicken_sandwiches = [
    {
        name: "The Parm Sandwich",
        price: 8.75,
        description: "Buttermilk Fried Chicken Breast, Braised Tomato, Fresh Sliced Mozzarella, Olive Oil, Salt & Pepper served on a Potato Bun"
    },
    {
        name: "Kick-Fil-A Sandwich",
        price: 8.00,
        description: "Char-Fried or Grilled Chicken Breast, Tangy Slaw, Fresh Pickle -- Choice of Mild, Spicy or HOT!"
    }
]

let fish_veg = [
    {
        name: "The Meatless",
        price: 8.49,
        description: "Black Beans, Rice & Walnut Patty, Pickled Onion, Lettuce, Tomato and Mayo, Fresh Pickle on the side",
        isNew: true
    },
    {
        name: "The Garden Sandwich",
        price: 7.00,
        description: "Chargrilled Eggplant, Zucchini Relish, Pimento-Garlic Mayo, Provolone Cheese, Fresh Pickle on the side"
    },
    {
        name: "The Anchor Sandwich",
        price: 9.50,
        description: "Chargrilled Salmon Filet, Brussel Sprout Slaw, Pineapple Chutney, Tartar Sauce, Fresh Lemon"
    }
]

let specials = [
    {
        name: "Cheesesteak Sub",
        price: 12.50,
        description: "6oz shaved steak, Charred Onion, Roasted Red Pepper, Provolone Cheese, Parsley, Creamy Mayo, Fresh Pickle on the side"
    },
    {
        name: "BBQ Shredded Pork",
        price: 8.50,
        description: "Pulled BBQ Pork on Potato Bun, Grilled Onions, Mustard, Cole Slaw"
    },
    {
        name: "BBQ Brisket Sandwich",
        price: 9.00,
        description: "Pulled/Sliced BBQ Brisket on Potato bun,  Gouda cheese, Brussel Slaw, Horseradish"
    },
    {
        name: "Steak Wrap",
        price: 8.25,
        description: "Grilled Steak, Hearty Kale, Red Pepper, Avocado, Quinoa, Sweet Potato, Lemon Pepper Dressing"
    },
    {
        name: "Garden Wrap",
        price: 6.50,
        description: "Roasted Vegetable Medley, Mixed Greens, Quinoa, Sunflower Seeds, Caramelized Onion, Citrus Vinaigrette"
    },
    {
        name: "Charred Chicken Wrap",
        price: 7.50,
        description: "Flour Tortilla, Charred Grill Chicken, Red Pepper, Kale, Avocado, Creamy Dressing"
    }
]

let salads = [
    {
        name: "The UNBEETABLE Salad",
        price: 7.50,
        description: "Roasted Beets, Arugula, Goat Cheese,  Caramelized Onion,  Balsamic Reduction, Crispy Onions"
    },
    {
        name: "Caesar Chicken Salad",
        price: 7.50,
        description: "Charred Chicken Breast, Parmesan, Romaine, Croutons, Caesar Dressing"
    },
    {
        name: "Kale Salad",
        price: 6.00,
        description: "Chopped Kale, Dried Apricots, Sweet Potato, Sunflower Seeds, Caramelized Onion, Parmesan Cheese, Tangy Vinaigrette",
        options: [
            {
                option_name: "Add Chicken",
                option_price: 2.50
            },
            {
                option_name: "Add Steak",
                option_price: 3.00
            }
        ]
    },
    {
        name: "Charred Corn Cobb Salad",
        price: 6.00,
        description: "Mixed Greens, Charred sweet corn, Crispy Bacon, Avocado, Egg, Aged Cheddar Cheese, Creamy Dressing",
        options: [
            {
                option_name: "Add Chicken",
                option_price: 2.50
            },
            {
                option_name: "Add Steak",
                option_price: 3.00
            }
        ]
    }
]

let sides = [
    {
        name: "MAC & CHEESE",
        price: 5.00,
        description: "Freshly Made Pasta & 100% Real Cheese Sauce"
    },
    {
        name: "Roasted Brussel Sprouts",
        price: 4.25
    },
    {
        name: "Fries",
        price: 2.50,
        options: [
            {
                option_name: "Make It Large",
                option_price: 2.00
            }
        ]
    },
    {
        name: "Sweet Potato Fries",
        price: 3.00,
        options: [
            {
                option_name: "Make It Large",
                option_price: 2.00
            }
        ]
    }
]

let bevs = [
    {
        name: "Bottled Water",
        price: 1.5
    },
    {
        name: "Fountain Soda or Bottled Soda",
        price: 2.50
    }
]

// let test = [
//     {
//         name: "Test Item",
//         price: 1.5
//     },
//     {
//         name: "Test Item 2",
//         price: 2.50
//     }
// ]

let menuObj = {
    angus_burgers: {
        header: "Angus Burgers",
        note: "All burgers served with a fresh pickle on the side",
        menuItems: burgers,
        categoryID: "angus_burgers"
    },
    chicken_sandwiches: {
        header: "Chicken Sandwiches",
        menuItems: chicken_sandwiches,
        categoryID: "chicken_sandwiches"
    },
    fish_veg: {
        header: "Fish & Veggie",
        menuItems: fish_veg,
        categoryID: "fish_veg"
    },
    specials: {
        header: "Specials",
        menuItems: specials,
        categoryID: "specials"
    },
    // test: {
    //     header: "Test Category",
    //     menuItems: test,
    //     categoryID: "test"
    // },
    salads: {
        header: "Salads",
        menuItems: salads,
        categoryID: "salads"
    },
    sides_bevs: {
        header: "Sides & Bev",
        menuItems: [...sides, ...bevs],
        categoryID: "sides_bevs"
    }
}

export default menuObj;