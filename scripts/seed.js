const db = require("../models");
const mongoose = require("mongoose");
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/GoKart");
var mongooseUser;

const user = {
    user: "demo",
    password: "demo",
    cart: [],
}

const recipes = [{
        user: mongooseUser,
        cartTotal: 0,
        src: "https://paleoleap.com/pictures/butternut-squash-soup.jpg",
        name: "Roasted Butternut Squash Soup",
        ingredients: [{
                name: "Salt",
                amount: 5,
                product: {
                    user: mongooseUser,
                    name: "salt",
                    walmartlink: "https://grocery.walmart.com/ip/Great-Value-Iodized-Salt-26-oz/10448316",
                    category: "spice",
                    measurement: "g",
                    amount: 737,

                }
            },
            {
                name: "Pepper",
                amount: 1,
                product: {
                    user: mongooseUser,
                    name: "pepper",
                    walmartlink: "https://grocery.walmart.com/ip/Great-Value-Pure-Ground-Black-Pepper-3-oz/44662573",
                    category: "spice",
                    measurement: "g",
                    amount: 85,

                },
            },
            {
                name: "Butternut Squash",
                amount: 680,
                product: {
                    user: mongooseUser,
                    name: "butternut squash",
                    walmartlink: "https://grocery.walmart.com/ip/Marketside-Butternut-Squash-16-oz/51259258",
                    category: "vegetable",
                    measurement: "g",
                    amount: 454,

                },
            },
            {
                name: "Onion",
                amount: 1,
                product: {
                    user: mongooseUser,
                    name: "onion",
                    walmartlink: "https://grocery.walmart.com/ip/Yellow-Onions-each/51259212",
                    category: "vegetable",
                    measurement: "whole",
                    amount: 1,

                },
            },
            {
                name: "Vegetable Stock",
                amount: 1000,
                product: {
                    user: mongooseUser,
                    name: "vegetable stock",
                    walmartlink: "https://grocery.walmart.com/ip/Great-Value-Organic-Low-Sodium-Chicken-Broth-32-oz/194668698",
                    category: "other",
                    measurement: "ml",
                    amount: 960,

                },
            }
        ]
    },
    {
        user: mongooseUser,
        cartTotal: 0,
        src: "https://www.culinarypage.com/wp-content/uploads/2018/09/Homemade-CHeese-Pizza-1x1-featured-1.jpg",
        name: "Cheese Pizza",
        ingredients: [{
                name: "Shredded Cheese",
                amount: 150,
                product: {
                    user: mongooseUser,
                    name: "pizza cheese blend",
                    walmartlink: "https://grocery.walmart.com/ip/Great-Value-Shredded-Pizza-Blend-Cheese-8-oz/10452563",
                    category: "dairy",
                    measurement: "g",
                    amount: 227,
                }
            },
            {
                name: "Salt",
                amount: 5,
                product: {
                    user: mongooseUser,
                    name: "salt",
                    walmartlink: "https://grocery.walmart.com/ip/Great-Value-Iodized-Salt-26-oz/10448316",
                    category: "spice",
                    measurement: "g",
                    amount: 737,

                }
            },
            {
                name: "Pepper",
                amount: 1,
                product: {
                    user: mongooseUser,
                    name: "pepper",
                    walmartlink: "https://grocery.walmart.com/ip/Great-Value-Pure-Ground-Black-Pepper-3-oz/44662573",
                    category: "spice",
                    measurement: "g",
                    amount: 85,

                },
            },
            {
                name: "Pizza Crust",
                amount: 1,
                product: {
                    user: mongooseUser,
                    name: "pizza crust",
                    walmartlink: "https://grocery.walmart.com/ip/Mama-Mary-s-12-inch-Thin-and-Crispy-Crust-2ct/10311926",
                    category: "grain",
                    measurement: "whole",
                    amount: 2,
                },
            },
            {
                name: "Pizza Sauce",
                amount: 397,
                product: {
                    user: mongooseUser,
                    name: "pizza sauce",
                    walmartlink: "https://grocery.walmart.com/ip/Great-Value-Pizza-Sauce-14-oz/12444468",
                    category: "other",
                    measurement: "ml",
                    amount: 397,
                },
            }
        ]
    },
    {
        user: mongooseUser,
        cartTotal: 0,
        src: "https://i.pinimg.com/originals/75/47/ea/7547ea51e984ed1d19952068a7cc51ce.jpg",
        name: "Hummus Pasta",
        ingredients: [{
                name: "Salt",
                amount: 5,
                product: {
                    user: mongooseUser,
                    name: "salt",
                    walmartlink: "https://grocery.walmart.com/ip/Great-Value-Iodized-Salt-26-oz/10448316",
                    category: "spice",
                    measurement: "g",
                    amount: 737,

                }
            },
            {
                name: "Pepper",
                amount: 1,
                product: {
                    user: mongooseUser,
                    name: "pepper",
                    walmartlink: "https://grocery.walmart.com/ip/Great-Value-Pure-Ground-Black-Pepper-3-oz/44662573",
                    category: "spice",
                    measurement: "g",
                    amount: 85,

                }
            },

            {
                name: "Hummus",
                amount: 100,
                product: {
                    user: mongooseUser,
                    name: "hummus",
                    walmartlink: "https://grocery.walmart.com/ip/Marketside-Classic-Hummus-10-oz/128642379",
                    category: "other",
                    measurement: "g",
                    amount: 283,

                }
            },

            {
                name: "Pasta",
                amount: 250,
                product: {
                    user: mongooseUser,
                    name: "Great Value Shells Pasta 16oz",
                    walmartlink: "https://grocery.walmart.com/ip/Great-Value-Shells-Pasta-16-oz/10534077",
                    category: "grain",
                    measurement: "g",
                    amount: 454,
                }
            },

            {
                name: "Cherry Tomatoes",
                amount: 60,
                product: {
                    user: mongooseUser,
                    name: "cherry tomatoes",
                    walmartlink: "https://grocery.walmart.com/ip/Grape-Tomatoes-1-pint/10451313",
                    category: "vegetable",
                    measurement: "g",
                    amount: 148,

                }
            }
        ]
    },
    {
        user: mongooseUser,
        cartTotal: 0,
        src: "https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18145111/fc77qd003-04-main.jpg",
        name: "Cheat's Chili",
        ingredients: [{
                name: "Salt",
                amount: 5,
                product: {
                    user: mongooseUser,
                    name: "salt",
                    walmartlink: "https://grocery.walmart.com/ip/Great-Value-Iodized-Salt-26-oz/10448316",
                    category: "spice",
                    measurement: "g",
                    amount: 737,

                }
            },
            {
                name: "Pepper",
                amount: 1,
                product: {
                    user: mongooseUser,
                    name: "pepper",
                    walmartlink: "https://grocery.walmart.com/ip/Great-Value-Pure-Ground-Black-Pepper-3-oz/44662573",
                    category: "spice",
                    measurement: "g",
                    amount: 85,

                }
            },

            {
                name: "Canned Chili",
                amount: 1,
                product: {
                    user: mongooseUser,
                    name: "canned vegetarian chili",
                    walmartlink: "https://grocery.walmart.com/ip/Hormel-Chili-Vegetarian-with-Beans-15-Ounce/10290948",
                    category: "other",
                    measurement: "whole",
                    amount: 1,

                }
            },

            {
                name: "Brown Rice",
                amount: 60,
                product: {
                    user: mongooseUser,
                    name: "brown rice",
                    walmartlink: "https://grocery.walmart.com/ip/Great-Value-Brown-Rice-16-oz/13045034",
                    category: "grain",
                    measurement: "g",
                    amount: 454,
                }
            },

            {
                name: "Avacado",
                amount: 1,
                product: {
                    user: mongooseUser,
                    name: "avacado",
                    walmartlink: "https://grocery.walmart.com/ip/Hass-Avocados-each/44390949",
                    category: "fruit",
                    measurement: "whole",
                    amount: 1,

                }
            }
        ]
    }
]
async function createRecipes(user) {
    for (let i = 0; i < recipes.length; i++) {
        recipes[i].user = user
        let products = []
        for(let j= 0; j < recipes[i].ingredients.length; j++){
            const product = recipes[i].ingredients[j].product
            product.user = user
            await db.Product
            .findOneAndUpdate({ name: product.name }, product, {upsert:true,new: true})
            .then(dbModel => recipes[i].ingredients[j].product = dbModel)
            .catch(err => console.log("ingredients failed. " + err));
        }
        await db.Recipe
        .create(recipes[i])
        .then(dbModel => console.log(dbModel))
        .catch(err => console.log("recipes failed. " + err));    
    }
}

async function createUser() {
    await db.User
        .create(user)
        .then(dbModel => {
                createRecipes(dbModel._id)
            }

        )
        .catch(err => console.log("user failed. " + err));
}

createUser()




const products = [{
        user: mongooseUser,
        name: "salt",
        walmartlink: "https://grocery.walmart.com/ip/Great-Value-Iodized-Salt-26-oz/10448316",
        category: "spice",
        measurement: "g",
        amount: 737,

    },
    {
        user: mongooseUser,
        name: "pepper",
        walmartlink: "https://grocery.walmart.com/ip/Great-Value-Pure-Ground-Black-Pepper-3-oz/44662573",
        category: "spice",
        measurement: "g",
        amount: 85,

    },
    {
        user: mongooseUser,
        name: "hummus",
        walmartlink: "https://grocery.walmart.com/ip/Marketside-Classic-Hummus-10-oz/128642379",
        category: "other",
        measurement: "g",
        amount: 283,

    },
    {
        user: mongooseUser,
        name: "cherry tomatoes",
        walmartlink: "https://grocery.walmart.com/ip/Grape-Tomatoes-1-pint/10451313",
        category: "vegetable",
        measurement: "g",
        amount: 148,

    },
    {
        user: mongooseUser,
        name: "butternut squash",
        walmartlink: "https://grocery.walmart.com/ip/Marketside-Butternut-Squash-16-oz/51259258",
        category: "vegetable",
        measurement: "g",
        amount: 454,

    },
    {
        user: mongooseUser,
        name: "onion",
        walmartlink: "https://grocery.walmart.com/ip/Yellow-Onions-each/51259212",
        category: "vegetable",
        measurement: "whole",
        amount: 1,

    },
    {
        user: mongooseUser,
        name: "vegetable stock",
        walmartlink: "https://grocery.walmart.com/ip/Great-Value-Organic-Low-Sodium-Chicken-Broth-32-oz/194668698",
        category: "other",
        measurement: "ml",
        amount: 960,

    },
    {
        user: mongooseUser,
        name: "canned vegetarian chili",
        walmartlink: "https://grocery.walmart.com/ip/Hormel-Chili-Vegetarian-with-Beans-15-Ounce/10290948",
        category: "other",
        measurement: "whole",
        amount: 1,

    },
    {
        user: mongooseUser,
        name: "avacado",
        walmartlink: "https://grocery.walmart.com/ip/Hass-Avocados-each/44390949",
        category: "fruit",
        measurement: "whole",
        amount: 1,

    },
    {
        user: mongooseUser,
        name: "brown rice",
        walmartlink: "https://grocery.walmart.com/ip/Great-Value-Brown-Rice-16-oz/13045034",
        category: "grain",
        measurement: "g",
        amount: 454,
    },
    {
        user: mongooseUser,
        name: "pizza crust",
        walmartlink: "https://grocery.walmart.com/ip/Mama-Mary-s-12-inch-Thin-and-Crispy-Crust-2ct/10311926",
        category: "grain",
        measurement: "whole",
        amount: 2,
    },
    {
        user: mongooseUser,
        name: "pizza sauce",
        walmartlink: "https://grocery.walmart.com/ip/Great-Value-Pizza-Sauce-14-oz/12444468",
        category: "other",
        measurement: "ml",
        amount: 397,
    },
    {
        user: mongooseUser,
        name: "pizza cheese blend",
        walmartlink: "https://grocery.walmart.com/ip/Great-Value-Shredded-Pizza-Blend-Cheese-8-oz/10452563",
        category: "dairy",
        measurement: "g",
        amount: 227,
    },
    {
        user: mongooseUser,
        name: "Great Value Shells Pasta 16oz",
        walmartlink: "https://grocery.walmart.com/ip/Great-Value-Shells-Pasta-16-oz/10534077",
        category: "grain",
        measurement: "g",
        amount: 454,
    },
]