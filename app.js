const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        Img: "./img/buttermilk.jpg",
        desc: `These nutritious pancakes are made with whole-grain
      buckwheat, brown rice flour, banana, and chia seeds`
    },
    {
        id: 2,
        title: "double-duty dinner",
        category: "lunch",
        price: 13.99,
        img: "./img/double-dutydinner.jpg",
        desc: `These nutritious pancakes are made with whole-grain
        buckwheat, brown rice flour, banana, and chia seeds`
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./img/milo_godzilla.jpg",
        desc: `Chocolate malt drinks or Chocolate malt milkshakes are 
        highly popular in Southeast Asia, often enjoyed with a scoop of vanilla 
        ice cream, whipped cream and more! They are known as “Milo Dinosaur” and
         “Milo Godzilla”. `
    },

    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./img/countrydelight",
        desc: `Testimonial stories of real customers of Country Delight products from 
        across India. Some made the switch just a few months ago, and some are proudly 
        Country Delight homes for five or more years `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./img/eggs.jpg",
        desc: `Nutritionally, eggs have a lot to offer. With about 70 calories in one large egg,
         they're a great source of protein that helps stabilize blood sugar levels and provides 
         structure to the body. Egg protein is also high quality, providing all the essential amino
          acids.`,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./img/dreamOreo.jpg",
        desc: `Cadbury Dream with Oreo is smooth & creamy white chocolate with Oreo biscuit pieces.
        Contains: White Chocolate with Oreo Biscuit Pieces product contains White Chocolate (88%), 
        Oreo Biscuit Pieces (12%). Milk, Wheat, Gluten, Soy. White Chocolate contains Cocoa Solids 23%,
         Milk Solids 35%`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./img/bacon.jpg",
        desc: `Cured, smoked pork belly, which is delicious when had on bread, but also great for a fry up.
         This product can come in a round or flat shape. This product is also available in cubes or strips, 
         making it a great ingredient for a meal. `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./img/american.jpg",
        desc: `This fried chicken dish found at Chinese restaurants actually originated in the United States. It’s 
        coated in a sweet-and-salty sauce comprised of honey, ketchup, soy sauce, garlic, and sesame oil. Four years 
        ago, it was eclipsed by the similar General Tso’s chicken in Grubhub’s poll, but this year it reigns supreme. 
        Have you heard about these foods which taste like chicken? `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "./img/quarantine.jpg",
        desc: `When you’re pressed for time but don’t want to eat fast food for dinner, grabbing a meal replacement shake isn’t
         the worst idea. In fact, some of these grab-and-go drinks offer a good balance of proteins, fats, and carbs, making them
          a good solution when you’re hungry.`,
    },
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll('filter-btn')
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
});
filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        console.log(e.currentTarget.dataset);
    });
});

function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        // console.log(item);

        return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);

    sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
    const categories = menu.reduce(
        function (values, item) {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        },
        ["all"]
    );
    const categoryBtns = categories
        .map(function (category) {
            return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
        })
        .join("");

    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);

    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            // console.log(e.currentTarget.dataset);
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                // console.log(menuItem.category);
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === "all") {
                diplayMenuItems(menu);
            } else {
                diplayMenuItems(menuCategory);
            }
        });
    });
}