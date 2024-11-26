const products = [
    {
        "id": 1,
        "name": " Daybreak Blend Coffee 100% Arabica Medium-Dark, Ground, Net WT 12 OZ (.75 LB)",
        "price": 14.99,
        "image": "images/1.png",
        "description": "Daybreak coffee blend is a mix of two premium single-origin coffee beans to create a rich excellent tasting cup of coffee."
    },
    {
        "id": 2,
        "name": " Panama Coffee 100% Arabica Medium-Dark, Whole Bean, Net WT 12 OZ (.75 LB)",
        "price": 14.99,
        "image": "images/2.png",
        "description": "Panama coffee is distinct from the more renowned Geisha coffee. While Panama Geisha is grown in the Chiriqui highlands of Panama, Panama coffee is grown elsewhere and apart from the high altitudes, is nurtured by a climate similar to that of Geisha. These beans offer a comparable and perhaps a more uniquely sweet and aromatic flavor profile as Geisha."
    },
    {
        "id": 3,
        "name": " Morning Freedom Blend Coffee 100% Arabica Medium-Dark, Whole Bean, Net WT 12 OZ (.75 LB)",
        "price": 14.99,
        "image": "images/3.png",
        "description": "Organic agriculture produces natural-tasting coffee beans. It promotes forest preservation, minimization of soil erosion, participation in a health ecosystem and supports Climate Change initiative."
    },
    {
        "id": 4,
        "name": " Sultan Kudarat Coffee 100% Robusta Medium-Dark, Ground, Net WT 16 OZ (1LB)",
        "price": 14.99,
        "image": "images/4.png",
        "description": "Sultan Kudarat, Region 12 of the Philippines is one of the top coffee producers. It's a single-origin coffee, which offers a distinct and smooth taste. It has potential to become popular among coffee drinkers across the world."
    },
    {
        "id": 5,
        "name": " Brazil Coffee 100% Arabica Medium-Dark, Ground, Net WT 16 OZ (1LB)",
        "price": 14.99,
        "image": "images/5.png",
        "description": "Its origin has the perfect geography for growing coffee. The perfect climate creates rich, mild flavor, well-balanced and less acidic coffee beans. A strong caramel sweetness, with a nutty undertone makes the most recognizable coffee flavor to most coffee drinkers across the world."
    },
    {
        "id": 6,
        "name": " Colombia Supremo Coffee 100% Arabica Medium-Dark, Ground, Net WT 16 OZ (1LB)",
        "price": 14.99,
        "image": "images/6.png",
        "description": " Its origin has the perfect geography for growing coffee. The perfect climate creates rich, mild flavor, well-balanced and less acidic coffee beans. A strong caramel sweetness, with a nutty undertone makes the most recognizable coffee flavor to most coffee drinkers across the world."
    },
    {
        "id": 7,
        "name": " Breakfast Blend Coffee Medium-Dark, Ground, Net WT 8 OZ (.5 LB)",
        "price": 6.99,
        "image": "images/7.jpg",
        "description": "Its origin has the perfect geography for growing coffee. The perfect climate creates rich, mild flavor, well-balanced and less acidic coffee beans. A strong caramel sweetness, with a nutty undertone makes the most recognizable coffee flavor to most coffee drinkers across the world."
    },
    {
        "id": 8,
        "name": " Arabica Seeds",
        "price": 10.99,
        "image": "images/8.png",
        "description": " Coffee tree is a tropical shrub native to southern Africa and Asia. It is exceptionally high quality at high altitudes. This packet contains 36 seeds. Some seeds germinate in 6 weeks while other seeds germinate in 6 months."
    },
    {
        "id": 9,
        "name": " Sultan Kudarat Coffee (Set of 2) 100% Robusta Medium-Dark, Ground, Net WT 3.5 OZ (.22 LB) 100 grams",
        "price": 14.99,
        "image": "images/9.png",
        "description": " Sultan Kudarat, Region 12 of the Philippines is one of the top coffee producers. It's a single-origin coffee, which offers a distinct and smooth taste. It has potential to become popular among coffee drinkers across the world. "
    },
    {
        "id": 10,
        "name": " Breakfast Blend (Set of 2) 100% Robusta Medium-Dark, Ground, Net WT 3.5 OZ (.22 LB) 100 grams",
        "price": 200,
        "image": "images/10.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
    {
        "id": 11,
        "name": " Colombia Supremo (Set of 2) 100% Robusta Medium-Dark, Ground, Net WT 3.5 OZ (.22 LB) 100 grams",
        "price": 200,
        "image": "images/11.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
    {
        "id": 12,
        "name": "  Sultan Kudarat Blend Medium-Dark, Ground, Net WT 12 OZ (.75 LB)",
        "price": 200,
        "image": "images/12.png",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
    {
        "id": 13,
        "name": "  Sultan Kudarat KCup 100% Robusta Medium-Dark, Ground ",
        "price": 200,
        "image": "images/13.jpeg",
        "description": "No Artificial Flavors."
    },
    {
        "id": 14,
        "name": "  Colombia Supremo KCup 100% Arabica Medium-Dark, Ground ",
        "price": 200,
        "image": "images/14.png",
        "description": "No Artificial Flavors."
    },
    {
        "id": 15,
        "name": "  Brazil KCup 100% Arabica Medium-Dark, Ground ",
        "price": 200,
        "image": "images/15.png",
        "description": "No Artificial Flavors."
    },
    {
        "id": 16,
        "name": "  Panama KCup 100% Arabica Medium-Dark, Ground ",
        "price": 200,
        "image": "images/16.png",
        "description": "No Artificial Flavors."
    },
    {
        "id": 17,
        "name": "  Cafe Verraco KCup 100% Liberica Medium-Dark, Ground ",
        "price": 200,
        "image": "images/17.png",
        "description": "No Artificial Flavors."
    },
    {
        "id": 18,
        "name": "  Breakfast Blend KCup 100% Arabica Medium-Dark, Ground ",
        "price": 200,
        "image": "images/18.jpg",
        "description": "No Artificial Flavors."
    },

    {
        "id": 19,
        "name": " Hibiscus Berry 24 Pods 100% Natural",
        "price": 200,
        "image": "images/19.jpg",
        "description": "Packed with antioxidants. May help lower blood pressure. May help improve blood fat levels."
    },
    {
        "id": 20,
        "name": " Nitro Coffee Cold Brew Machines",
        "price": 200,
        "image": "images/20.png",
        "description": "Nitro Coffee Cold Brew Machines"
    },

    {
        "id": 21,
        "name": "  Tropic Roast Favorites 24 Pods 100% Natural",
        "price": 19.99,
        "image": "images/21.jpg",
        "description": "K-Cup Pods are designed for use in all single serve brewing systems. Each K-Cup Pod contains the precise amount of ground and natural coffee." },
    {
        "id": 22,
        "name": "  Sultan Kudarat 100% Robusta, Natural",
        "price": 200,
        "image": "images/22.jpg",
        "description": " Sultan Kudarat, Region 12 of the Philippines is one of the top coffee producers. It's a single-origin coffee, which offers a distinct and smooth taste. It has potential to become popular among coffee drinkers across the world. "

    },
    {
        "id": 23,
        "name": "  Hibiscus Berry, Natural",
        "price": 200,
        "image": "images/23.png",
        "description": "Packed with antioxidants. May help lower blood pressure. May help improve blood fat levels."
    }


];
export default products;