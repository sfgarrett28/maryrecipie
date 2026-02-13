const SECTION_ORDER = ["produce", "dairy", "meat", "pantry", "spices"];

const meals = [
  {
    id: "chicken-taco-rice-bowls",
    name: "Chicken Taco Rice Bowls",
    timeMinutes: 25,
    servings: 4,
    complexity: "quick",
    categories: ["mexican", "kid-friendly"],
    recipeUrl: "https://www.skinnytaste.com/chicken-taco-poblano-rice-bowls/",
    ingredients: [
      { name: "chicken breast", qty: 1.5, unit: "lb", section: "meat" },
      { name: "bell peppers", qty: 3, unit: "", section: "produce" },
      { name: "onion", qty: 1, unit: "", section: "produce" },
      { name: "rice", qty: 2, unit: "cup", section: "pantry" },
      { name: "fajita seasoning", qty: 2, unit: "tbsp", section: "spices" },
      { name: "lime", qty: 1, unit: "", section: "produce" },
      { name: "sour cream", qty: 0.5, unit: "cup", section: "dairy" },
    ],
  },
  {
    id: "beef-mushroom-greens-stir-fry",
    name: "Beef, Mushroom & Greens Stir-Fry",
    timeMinutes: 20,
    servings: 4,
    complexity: "quick",
    categories: ["asian", "quick"],
    recipeUrl: "https://www.bbcgoodfood.com/recipes/beef-mushroom-greens-stir-fry/",
    ingredients: [
      { name: "beef strips", qty: 1.25, unit: "lb", section: "meat" },
      { name: "mushrooms", qty: 8, unit: "oz", section: "produce" },
      { name: "spring greens", qty: 6, unit: "cup", section: "produce" },
      { name: "soy sauce", qty: 0.25, unit: "cup", section: "pantry" },
      { name: "garlic", qty: 2, unit: "clove", section: "produce" },
      { name: "rice", qty: 2, unit: "cup", section: "pantry" },
      { name: "ginger", qty: 1, unit: "tbsp", section: "produce" },
    ],
  },
  {
    id: "pork-medallions",
    name: "Pork Medallions & Green Beans",
    timeMinutes: 25,
    servings: 4,
    complexity: "quick",
    categories: ["american"],
    recipeUrl:
      "https://www.foodnetwork.com/recipes/sauteed-pork-tenderloin-medallions-recipe-1955940",
    ingredients: [
      { name: "pork tenderloin", qty: 1.5, unit: "lb", section: "meat" },
      { name: "green beans", qty: 4, unit: "cup", section: "produce" },
      { name: "butter", qty: 2, unit: "tbsp", section: "dairy" },
      { name: "garlic", qty: 2, unit: "clove", section: "produce" },
      { name: "paprika", qty: 1, unit: "tsp", section: "spices" },
      { name: "lemon", qty: 1, unit: "", section: "produce" },
    ],
  },
  {
    id: "salmon-tacos-pineapple",
    name: "Salmon Tacos with Pineapple Salsa",
    timeMinutes: 20,
    servings: 4,
    complexity: "quick",
    categories: ["seafood", "tacos"],
    recipeUrl:
      "https://www.eatingwell.com/recipe/267836/salmon-tacos-with-pineapple-salsa/",
    ingredients: [
      { name: "salmon fillets", qty: 1.25, unit: "lb", section: "meat" },
      { name: "corn tortillas", qty: 8, unit: "", section: "pantry" },
      { name: "cabbage", qty: 2, unit: "cup", section: "produce" },
      { name: "pineapple salsa", qty: 0.75, unit: "cup", section: "pantry" },
      { name: "lime", qty: 1, unit: "", section: "produce" },
      { name: "chili powder", qty: 1, unit: "tsp", section: "spices" },
    ],
  },
  {
    id: "quick-turkey-meatballs",
    name: "Quick Turkey Meatballs",
    timeMinutes: 20,
    servings: 4,
    complexity: "quick",
    categories: ["italian"],
    recipeUrl:
      "https://www.foodnetwork.com/recipes/turkey-meatballs-recipe0-1915533",
    ingredients: [
      { name: "ground turkey", qty: 1.25, unit: "lb", section: "meat" },
      { name: "breadcrumbs", qty: 1, unit: "cup", section: "pantry" },
      { name: "parmesan", qty: 0.25, unit: "cup", section: "dairy" },
      { name: "onion", qty: 1, unit: "", section: "produce" },
      { name: "garlic", qty: 2, unit: "clove", section: "produce" },
      { name: "oregano", qty: 1, unit: "tsp", section: "spices" },
    ],
  },
  {
    id: "thai-style-chicken-fried-rice",
    name: "Thai-Style Chicken Fried Rice",
    timeMinutes: 22,
    servings: 4,
    complexity: "quick",
    categories: ["asian", "kid-friendly"],
    recipeUrl:
      "https://www.simplyrecipes.com/thai-style-chicken-fried-rice-recipe-8683137",
    ingredients: [
      { name: "chicken thigh", qty: 1.25, unit: "lb", section: "meat" },
      { name: "rice", qty: 2, unit: "cup", section: "pantry" },
      { name: "peas", qty: 1, unit: "cup", section: "produce" },
      { name: "carrots", qty: 2, unit: "", section: "produce" },
      { name: "eggs", qty: 3, unit: "", section: "dairy" },
      { name: "soy sauce", qty: 0.25, unit: "cup", section: "pantry" },
    ],
  },
  {
    id: "beef-taco-skillet",
    name: "Beef Taco Skillet",
    timeMinutes: 25,
    servings: 4,
    complexity: "quick",
    categories: ["comfort"],
    recipeUrl:
      "https://www.foodnetwork.com/recipes/beef-taco-skillet-recipe-1970466",
    ingredients: [
      { name: "ground beef", qty: 1.25, unit: "lb", section: "meat" },
      { name: "tortillas", qty: 6, unit: "", section: "pantry" },
      { name: "salsa", qty: 0.5, unit: "cup", section: "pantry" },
      { name: "diced tomatoes", qty: 1, unit: "can", section: "pantry" },
      { name: "onion", qty: 1, unit: "", section: "produce" },
      { name: "cheddar", qty: 1, unit: "cup", section: "dairy" },
      { name: "chili powder", qty: 1.5, unit: "tsp", section: "spices" },
    ],
  },
  {
    id: "sausage-peppers-foil",
    name: "Sausage & Peppers Foil Packets",
    timeMinutes: 30,
    servings: 4,
    complexity: "quick",
    categories: ["sheet-pan"],
    recipeUrl:
      "https://www.budgetbytes.com/grilled-sausage-and-peppers-foil-packet/",
    ingredients: [
      { name: "smoked sausage", qty: 1.5, unit: "lb", section: "meat" },
      { name: "bell peppers", qty: 3, unit: "", section: "produce" },
      { name: "onion", qty: 1, unit: "", section: "produce" },
      { name: "olive oil", qty: 2, unit: "tbsp", section: "pantry" },
      { name: "garlic powder", qty: 1, unit: "tsp", section: "spices" },
    ],
  },
  {
    id: "garlic-butter-shrimp-penne",
    name: "Garlic Butter Shrimp Penne",
    timeMinutes: 30,
    servings: 4,
    complexity: "quick",
    categories: ["seafood", "italian"],
    recipeUrl:
      "https://www.foodnetwork.com/recipes/ree-drummond/garlic-butter-shrimp-penne-13767500",
    ingredients: [
      { name: "shrimp", qty: 1.25, unit: "lb", section: "meat" },
      { name: "pasta", qty: 12, unit: "oz", section: "pantry" },
      { name: "butter", qty: 3, unit: "tbsp", section: "dairy" },
      { name: "garlic", qty: 3, unit: "clove", section: "produce" },
      { name: "parsley", qty: 0.5, unit: "cup", section: "produce" },
      { name: "lemon", qty: 1, unit: "", section: "produce" },
    ],
  },
  {
    id: "sweet-chili-chicken-bowls",
    name: "Sweet Chili Chicken Stir-Fry Bowls",
    timeMinutes: 25,
    servings: 4,
    complexity: "quick",
    categories: ["asian"],
    recipeUrl:
      "https://www.budgetbytes.com/sweet-chili-chicken-stir-fry-bowls/",
    ingredients: [
      { name: "chicken breast", qty: 1.5, unit: "lb", section: "meat" },
      { name: "rice", qty: 2, unit: "cup", section: "pantry" },
      { name: "broccoli florets", qty: 3, unit: "cup", section: "produce" },
      { name: "sweet chili sauce", qty: 0.5, unit: "cup", section: "pantry" },
      { name: "sesame seeds", qty: 1, unit: "tbsp", section: "spices" },
    ],
  },
  {
    id: "bbq-chicken-flatbreads",
    name: "BBQ Chicken Flatbreads",
    timeMinutes: 20,
    servings: 4,
    complexity: "quick",
    categories: ["quick"],
    recipeUrl:
      "https://www.foodnetwork.com/recipes/ree-drummond/bbq-chicken-flatbread-10078922",
    ingredients: [
      { name: "cooked chicken", qty: 1.25, unit: "lb", section: "meat" },
      { name: "flatbreads", qty: 4, unit: "", section: "pantry" },
      { name: "bbq sauce", qty: 0.5, unit: "cup", section: "pantry" },
      { name: "mozzarella", qty: 1.5, unit: "cup", section: "dairy" },
      { name: "red onion", qty: 1, unit: "", section: "produce" },
    ],
  },
  {
    id: "turkey-sweet-potato-bowls",
    name: "Turkey Sweet Potato Taco Bowls",
    timeMinutes: 25,
    servings: 4,
    complexity: "quick",
    categories: ["mexican"],
    recipeUrl:
      "https://www.skinnytaste.com/ground-turkey-skillet-with-sweet-potatoes-and-black-bean/",
    ingredients: [
      { name: "ground turkey", qty: 1.25, unit: "lb", section: "meat" },
      { name: "black beans", qty: 1, unit: "can", section: "pantry" },
      { name: "sweet potatoes", qty: 2, unit: "", section: "produce" },
      { name: "corn", qty: 1, unit: "cup", section: "pantry" },
      { name: "cheddar", qty: 1, unit: "cup", section: "dairy" },
      { name: "tomatoes", qty: 2, unit: "", section: "produce" },
      { name: "cumin", qty: 1, unit: "tsp", section: "spices" },
    ],
  },
  {
    id: "baked-fish-sticks",
    name: "Baked Fish Sticks",
    timeMinutes: 30,
    servings: 4,
    complexity: "quick",
    categories: ["seafood"],
    recipeUrl:
      "https://www.foodnetwork.com/recipes/melissa-darabian/baked-fish-sticks-3414872",
    ingredients: [
      { name: "white fish", qty: 1.5, unit: "lb", section: "meat" },
      { name: "breadcrumbs", qty: 1, unit: "cup", section: "pantry" },
      { name: "eggs", qty: 2, unit: "", section: "dairy" },
      { name: "flour", qty: 0.5, unit: "cup", section: "pantry" },
      { name: "garlic powder", qty: 1, unit: "tsp", section: "spices" },
    ],
  },
  {
    id: "cheesy-baked-taco-skillet",
    name: "Cheesy Baked Taco Skillet",
    timeMinutes: 25,
    servings: 4,
    complexity: "quick",
    categories: ["comfort", "kid-friendly"],
    recipeUrl: "https://www.simplyrecipes.com/cheesy-baked-taco-skillet-recipe-11822419",
    ingredients: [
      { name: "ground beef", qty: 1, unit: "lb", section: "meat" },
      { name: "black beans", qty: 1, unit: "can", section: "pantry" },
      { name: "diced tomatoes", qty: 1, unit: "can", section: "pantry" },
      { name: "rice", qty: 2, unit: "cup", section: "pantry" },
      { name: "cheddar", qty: 1, unit: "cup", section: "dairy" },
      { name: "taco seasoning", qty: 2, unit: "tbsp", section: "spices" },
    ],
  },
  {
    id: "turkey-meatballs-cranberry",
    name: "Turkey Meatballs with Cranberry Glaze",
    timeMinutes: 30,
    servings: 4,
    complexity: "quick",
    categories: ["comfort"],
    recipeUrl:
      "https://www.foodnetwork.com/recipes/eddie-jackson/turkey-meatballs-with-cranberry-glaze-22809400",
    ingredients: [
      { name: "ground turkey", qty: 1.5, unit: "lb", section: "meat" },
      { name: "panko breadcrumbs", qty: 0.75, unit: "cup", section: "pantry" },
      { name: "cranberry sauce", qty: 0.75, unit: "cup", section: "pantry" },
      { name: "onion", qty: 0.5, unit: "", section: "produce" },
      { name: "garlic", qty: 2, unit: "clove", section: "produce" },
      { name: "thyme", qty: 1, unit: "tsp", section: "spices" },
    ],
  },
  {
    id: "beef-broccoli-bowls",
    name: "Beef & Broccoli Bowls",
    timeMinutes: 25,
    servings: 4,
    complexity: "quick",
    categories: ["asian", "kid-friendly"],
    recipeUrl: "https://www.budgetbytes.com/beef-and-broccoli/",
    ingredients: [
      { name: "beef strips", qty: 1.25, unit: "lb", section: "meat" },
      { name: "broccoli florets", qty: 4, unit: "cup", section: "produce" },
      { name: "rice", qty: 2, unit: "cup", section: "pantry" },
      { name: "soy sauce", qty: 0.33, unit: "cup", section: "pantry" },
      { name: "garlic", qty: 2, unit: "clove", section: "produce" },
      { name: "cornstarch", qty: 1, unit: "tbsp", section: "pantry" },
    ],
  },
  {
    id: "lemon-garlic-chicken",
    name: "Lemon Garlic Chicken Skillet",
    timeMinutes: 25,
    servings: 4,
    complexity: "quick",
    categories: ["american", "quick"],
    recipeUrl: "https://www.foodnetwork.com/recipes/lemon-garlic-chicken-1961482",
    ingredients: [
      { name: "chicken breast", qty: 1.5, unit: "lb", section: "meat" },
      { name: "lemon", qty: 2, unit: "", section: "produce" },
      { name: "garlic", qty: 3, unit: "clove", section: "produce" },
      { name: "butter", qty: 2, unit: "tbsp", section: "dairy" },
      { name: "parsley", qty: 0.5, unit: "cup", section: "produce" },
      { name: "paprika", qty: 1, unit: "tsp", section: "spices" },
    ],
  },
  {
    id: "shrimp-fajita-skillet",
    name: "Shrimp Fajita Skillet",
    timeMinutes: 20,
    servings: 4,
    complexity: "quick",
    categories: ["mexican", "seafood"],
    recipeUrl: "https://www.eatingwell.com/recipe/270418/shrimp-fajitas/",
    ingredients: [
      { name: "shrimp", qty: 1.25, unit: "lb", section: "meat" },
      { name: "bell peppers", qty: 3, unit: "", section: "produce" },
      { name: "onion", qty: 1, unit: "", section: "produce" },
      { name: "tortillas", qty: 8, unit: "", section: "pantry" },
      { name: "fajita seasoning", qty: 2, unit: "tbsp", section: "spices" },
      { name: "lime", qty: 1, unit: "", section: "produce" },
    ],
  },
  {
    id: "turkey-burgers",
    name: "Turkey Burgers & Salad",
    timeMinutes: 25,
    servings: 4,
    complexity: "quick",
    categories: ["american", "kid-friendly"],
    recipeUrl: "https://www.simplyrecipes.com/recipes/turkey_burgers/",
    ingredients: [
      { name: "ground turkey", qty: 1.25, unit: "lb", section: "meat" },
      { name: "burger buns", qty: 4, unit: "", section: "pantry" },
      { name: "lettuce", qty: 1, unit: "head", section: "produce" },
      { name: "tomatoes", qty: 2, unit: "", section: "produce" },
      { name: "cheddar", qty: 4, unit: "slice", section: "dairy" },
      { name: "garlic powder", qty: 1, unit: "tsp", section: "spices" },
    ],
  },
  {
    id: "pork-fried-rice",
    name: "Pork Fried Rice",
    timeMinutes: 25,
    servings: 4,
    complexity: "quick",
    categories: ["asian"],
    recipeUrl: "https://www.recipetineats.com/pork-fried-rice/",
    ingredients: [
      { name: "pork loin", qty: 1, unit: "lb", section: "meat" },
      { name: "rice", qty: 2, unit: "cup", section: "pantry" },
      { name: "peas", qty: 1, unit: "cup", section: "produce" },
      { name: "carrots", qty: 2, unit: "", section: "produce" },
      { name: "eggs", qty: 2, unit: "", section: "dairy" },
      { name: "soy sauce", qty: 0.25, unit: "cup", section: "pantry" },
    ],
  },
  {
    id: "chicken-pesto-pasta",
    name: "Chicken Pesto Pasta",
    timeMinutes: 25,
    servings: 4,
    complexity: "quick",
    categories: ["italian"],
    recipeUrl: "https://www.budgetbytes.com/chicken-pesto-pasta/",
    ingredients: [
      { name: "chicken breast", qty: 1.25, unit: "lb", section: "meat" },
      { name: "pasta", qty: 12, unit: "oz", section: "pantry" },
      { name: "pesto", qty: 0.5, unit: "cup", section: "pantry" },
      { name: "parmesan", qty: 0.5, unit: "cup", section: "dairy" },
      { name: "cherry tomatoes", qty: 1.5, unit: "cup", section: "produce" },
      { name: "spinach", qty: 3, unit: "cup", section: "produce" },
    ],
  },
  {
    id: "honey-garlic-salmon",
    name: "Honey Garlic Salmon",
    timeMinutes: 20,
    servings: 4,
    complexity: "quick",
    categories: ["seafood", "quick"],
    recipeUrl: "https://www.foodnetwork.com/recipes/food-network-kitchen/honey-garlic-salmon-3362887",
    ingredients: [
      { name: "salmon fillets", qty: 1.5, unit: "lb", section: "meat" },
      { name: "honey", qty: 2, unit: "tbsp", section: "pantry" },
      { name: "soy sauce", qty: 2, unit: "tbsp", section: "pantry" },
      { name: "garlic", qty: 3, unit: "clove", section: "produce" },
      { name: "green beans", qty: 4, unit: "cup", section: "produce" },
      { name: "sesame seeds", qty: 1, unit: "tbsp", section: "spices" },
    ],
  },
  {
    id: "chicken-quesadillas",
    name: "Chicken Quesadillas",
    timeMinutes: 20,
    servings: 4,
    complexity: "quick",
    categories: ["mexican", "kid-friendly"],
    recipeUrl: "https://www.simplyrecipes.com/recipes/chicken_quesadillas/",
    ingredients: [
      { name: "cooked chicken", qty: 1.25, unit: "lb", section: "meat" },
      { name: "flour tortillas", qty: 8, unit: "", section: "pantry" },
      { name: "cheddar", qty: 2, unit: "cup", section: "dairy" },
      { name: "salsa", qty: 0.5, unit: "cup", section: "pantry" },
      { name: "bell peppers", qty: 2, unit: "", section: "produce" },
      { name: "cumin", qty: 1, unit: "tsp", section: "spices" },
    ],
  },
  {
    id: "beef-stroganoff",
    name: "Quick Beef Stroganoff",
    timeMinutes: 30,
    servings: 4,
    complexity: "quick",
    categories: ["comfort"],
    recipeUrl: "https://www.bbcgoodfood.com/recipes/beef-stroganoff",
    ingredients: [
      { name: "beef strips", qty: 1.25, unit: "lb", section: "meat" },
      { name: "mushrooms", qty: 8, unit: "oz", section: "produce" },
      { name: "onion", qty: 1, unit: "", section: "produce" },
      { name: "egg noodles", qty: 10, unit: "oz", section: "pantry" },
      { name: "sour cream", qty: 0.75, unit: "cup", section: "dairy" },
      { name: "paprika", qty: 1, unit: "tsp", section: "spices" },
    ],
  },
  {
    id: "chicken-parm-skillet",
    name: "Chicken Parmesan Skillet",
    timeMinutes: 30,
    servings: 4,
    complexity: "quick",
    categories: ["italian", "kid-friendly"],
    recipeUrl: "https://www.eatingwell.com/recipe/252610/skillet-chicken-parmesan/",
    ingredients: [
      { name: "chicken breast", qty: 1.5, unit: "lb", section: "meat" },
      { name: "marinara sauce", qty: 2, unit: "cup", section: "pantry" },
      { name: "mozzarella", qty: 1.5, unit: "cup", section: "dairy" },
      { name: "parmesan", qty: 0.5, unit: "cup", section: "dairy" },
      { name: "breadcrumbs", qty: 1, unit: "cup", section: "pantry" },
      { name: "basil", qty: 0.25, unit: "cup", section: "produce" },
    ],
  },
  {
    id: "beef-bourguignon",
    name: "Beef Bourguignon",
    timeMinutes: 105,
    servings: 4,
    complexity: "complex",
    categories: ["french", "slow-cooked"],
    recipeUrl:
      "https://www.foodnetwork.com/recipes/ina-garten/beef-bourguignon-recipe-1942045",
    ingredients: [
      { name: "beef chuck", qty: 2.5, unit: "lb", section: "meat" },
      { name: "carrots", qty: 3, unit: "", section: "produce" },
      { name: "onion", qty: 2, unit: "", section: "produce" },
      { name: "mushrooms", qty: 8, unit: "oz", section: "produce" },
      { name: "red wine", qty: 3, unit: "cup", section: "pantry" },
      { name: "beef broth", qty: 2, unit: "cup", section: "pantry" },
      { name: "thyme", qty: 1, unit: "tsp", section: "spices" },
    ],
  },
  {
    id: "chicken-pot-pie",
    name: "Chicken Pot Pie",
    timeMinutes: 90,
    servings: 4,
    complexity: "complex",
    categories: ["comfort"],
    recipeUrl: "https://www.allrecipes.com/recipe/26318/chicken-pot-pie-viii/",
    ingredients: [
      { name: "cooked chicken", qty: 2, unit: "cup", section: "meat" },
      { name: "mixed vegetables", qty: 3, unit: "cup", section: "produce" },
      { name: "onion", qty: 1, unit: "", section: "produce" },
      { name: "pie crusts", qty: 2, unit: "", section: "pantry" },
      { name: "chicken broth", qty: 2, unit: "cup", section: "pantry" },
      { name: "butter", qty: 4, unit: "tbsp", section: "dairy" },
      { name: "black pepper", qty: 1, unit: "tsp", section: "spices" },
    ],
  },
  {
    id: "worlds-best-lasagna",
    name: "World's Best Lasagna",
    timeMinutes: 90,
    servings: 4,
    complexity: "complex",
    categories: ["italian"],
    recipeUrl: "https://www.allrecipes.com/recipe/23600/worlds-best-lasagna/",
    ingredients: [
      { name: "ground beef", qty: 1.5, unit: "lb", section: "meat" },
      { name: "lasagna noodles", qty: 12, unit: "", section: "pantry" },
      { name: "ricotta", qty: 2, unit: "cup", section: "dairy" },
      { name: "mozzarella", qty: 2, unit: "cup", section: "dairy" },
      { name: "marinara sauce", qty: 4, unit: "cup", section: "pantry" },
      { name: "onion", qty: 1, unit: "", section: "produce" },
      { name: "oregano", qty: 1, unit: "tsp", section: "spices" },
    ],
  },
  {
    id: "slow-cooker-beef-stew",
    name: "Slow Cooker Beef Stew",
    timeMinutes: 240,
    servings: 4,
    complexity: "complex",
    categories: ["comfort", "slow-cooker"],
    recipeUrl: "https://www.allrecipes.com/recipe/14685/slow-cooker-beef-stew-iv/",
    ingredients: [
      { name: "beef stew meat", qty: 2, unit: "lb", section: "meat" },
      { name: "potatoes", qty: 4, unit: "", section: "produce" },
      { name: "carrots", qty: 3, unit: "", section: "produce" },
      { name: "celery", qty: 3, unit: "stalk", section: "produce" },
      { name: "beef broth", qty: 3, unit: "cup", section: "pantry" },
      { name: "tomato paste", qty: 2, unit: "tbsp", section: "pantry" },
      { name: "thyme", qty: 1, unit: "tsp", section: "spices" },
    ],
  },
  {
    id: "chicken-tikka-masala",
    name: "Chicken Tikka Masala",
    timeMinutes: 60,
    servings: 4,
    complexity: "complex",
    categories: ["indian"],
    recipeUrl: "https://www.simplyrecipes.com/recipes/chicken_tikka_masala/",
    ingredients: [
      { name: "chicken thigh", qty: 2, unit: "lb", section: "meat" },
      { name: "yogurt", qty: 1, unit: "cup", section: "dairy" },
      { name: "crushed tomatoes", qty: 2, unit: "cup", section: "pantry" },
      { name: "onion", qty: 1, unit: "", section: "produce" },
      { name: "garlic", qty: 3, unit: "clove", section: "produce" },
      { name: "garam masala", qty: 2, unit: "tsp", section: "spices" },
      { name: "rice", qty: 2, unit: "cup", section: "pantry" },
    ],
  },
  {
    id: "pork-carnitas",
    name: "Pork Carnitas",
    timeMinutes: 180,
    servings: 4,
    complexity: "complex",
    categories: ["mexican", "slow-cooked"],
    recipeUrl: "https://www.allrecipes.com/recipe/246332/pork-carnitas/",
    ingredients: [
      { name: "pork shoulder", qty: 3, unit: "lb", section: "meat" },
      { name: "orange", qty: 1, unit: "", section: "produce" },
      { name: "onion", qty: 1, unit: "", section: "produce" },
      { name: "garlic", qty: 4, unit: "clove", section: "produce" },
      { name: "tortillas", qty: 8, unit: "", section: "pantry" },
      { name: "cumin", qty: 2, unit: "tsp", section: "spices" },
    ],
  },
  {
    id: "shepherds-pie",
    name: "Shepherd's Pie",
    timeMinutes: 75,
    servings: 4,
    complexity: "complex",
    categories: ["comfort"],
    recipeUrl: "https://www.bbcgoodfood.com/recipes/no-fuss-shepherds-pie",
    ingredients: [
      { name: "ground lamb", qty: 1.5, unit: "lb", section: "meat" },
      { name: "potatoes", qty: 4, unit: "", section: "produce" },
      { name: "carrots", qty: 2, unit: "", section: "produce" },
      { name: "peas", qty: 1, unit: "cup", section: "produce" },
      { name: "butter", qty: 4, unit: "tbsp", section: "dairy" },
      { name: "beef broth", qty: 1.5, unit: "cup", section: "pantry" },
      { name: "thyme", qty: 1, unit: "tsp", section: "spices" },
    ],
  },
  {
    id: "baked-ziti",
    name: "Baked Ziti",
    timeMinutes: 75,
    servings: 4,
    complexity: "complex",
    categories: ["italian", "comfort"],
    recipeUrl: "https://www.allrecipes.com/recipe/11758/baked-ziti-i/",
    ingredients: [
      { name: "ziti", qty: 16, unit: "oz", section: "pantry" },
      { name: "ground beef", qty: 1, unit: "lb", section: "meat" },
      { name: "ricotta", qty: 1.5, unit: "cup", section: "dairy" },
      { name: "mozzarella", qty: 2, unit: "cup", section: "dairy" },
      { name: "marinara sauce", qty: 3, unit: "cup", section: "pantry" },
      { name: "onion", qty: 1, unit: "", section: "produce" },
      { name: "basil", qty: 0.25, unit: "cup", section: "produce" },
    ],
  },
  {
    id: "beef-enchiladas",
    name: "Beef Enchiladas",
    timeMinutes: 60,
    servings: 4,
    complexity: "complex",
    categories: ["mexican"],
    recipeUrl: "https://www.allrecipes.com/recipe/8694/beef-enchiladas/",
    ingredients: [
      { name: "ground beef", qty: 1.5, unit: "lb", section: "meat" },
      { name: "enchilada sauce", qty: 2, unit: "cup", section: "pantry" },
      { name: "tortillas", qty: 8, unit: "", section: "pantry" },
      { name: "cheddar", qty: 2, unit: "cup", section: "dairy" },
      { name: "onion", qty: 1, unit: "", section: "produce" },
      { name: "cumin", qty: 2, unit: "tsp", section: "spices" },
    ],
  },
  {
    id: "chicken-enchiladas",
    name: "Chicken Enchiladas",
    timeMinutes: 60,
    servings: 4,
    complexity: "complex",
    categories: ["mexican"],
    recipeUrl: "https://www.allrecipes.com/recipe/8692/chicken-enchiladas/",
    ingredients: [
      { name: "cooked chicken", qty: 2, unit: "cup", section: "meat" },
      { name: "enchilada sauce", qty: 2, unit: "cup", section: "pantry" },
      { name: "tortillas", qty: 8, unit: "", section: "pantry" },
      { name: "cheddar", qty: 2, unit: "cup", section: "dairy" },
      { name: "onion", qty: 1, unit: "", section: "produce" },
      { name: "chili powder", qty: 1, unit: "tsp", section: "spices" },
    ],
  },
  {
    id: "pot-roast",
    name: "Classic Pot Roast",
    timeMinutes: 180,
    servings: 4,
    complexity: "complex",
    categories: ["comfort", "slow-cooked"],
    recipeUrl: "https://www.allrecipes.com/recipe/14670/easy-pot-roast/",
    ingredients: [
      { name: "beef chuck roast", qty: 3, unit: "lb", section: "meat" },
      { name: "potatoes", qty: 4, unit: "", section: "produce" },
      { name: "carrots", qty: 3, unit: "", section: "produce" },
      { name: "onion", qty: 1, unit: "", section: "produce" },
      { name: "beef broth", qty: 2, unit: "cup", section: "pantry" },
      { name: "garlic", qty: 3, unit: "clove", section: "produce" },
      { name: "rosemary", qty: 1, unit: "tsp", section: "spices" },
    ],
  },
  {
    id: "meatloaf",
    name: "Classic Meatloaf",
    timeMinutes: 75,
    servings: 4,
    complexity: "complex",
    categories: ["comfort", "kid-friendly"],
    recipeUrl: "https://www.allrecipes.com/recipe/16354/easy-meatloaf/",
    ingredients: [
      { name: "ground beef", qty: 2, unit: "lb", section: "meat" },
      { name: "breadcrumbs", qty: 1, unit: "cup", section: "pantry" },
      { name: "eggs", qty: 2, unit: "", section: "dairy" },
      { name: "onion", qty: 1, unit: "", section: "produce" },
      { name: "ketchup", qty: 0.5, unit: "cup", section: "pantry" },
      { name: "garlic powder", qty: 1, unit: "tsp", section: "spices" },
    ],
  },
  {
    id: "jambalaya",
    name: "Jambalaya",
    timeMinutes: 75,
    servings: 4,
    complexity: "complex",
    categories: ["cajun"],
    recipeUrl: "https://www.allrecipes.com/recipe/31848/jambalaya/",
    ingredients: [
      { name: "andouille sausage", qty: 1, unit: "lb", section: "meat" },
      { name: "chicken thigh", qty: 1, unit: "lb", section: "meat" },
      { name: "shrimp", qty: 1, unit: "lb", section: "meat" },
      { name: "rice", qty: 2, unit: "cup", section: "pantry" },
      { name: "bell peppers", qty: 2, unit: "", section: "produce" },
      { name: "onion", qty: 1, unit: "", section: "produce" },
      { name: "cajun seasoning", qty: 2, unit: "tbsp", section: "spices" },
    ],
  },
  {
    id: "paella",
    name: "Paella",
    timeMinutes: 90,
    servings: 4,
    complexity: "complex",
    categories: ["spanish"],
    recipeUrl: "https://www.bbcgoodfood.com/recipes/paella",
    ingredients: [
      { name: "chicken thigh", qty: 1, unit: "lb", section: "meat" },
      { name: "shrimp", qty: 1, unit: "lb", section: "meat" },
      { name: "rice", qty: 2, unit: "cup", section: "pantry" },
      { name: "bell peppers", qty: 2, unit: "", section: "produce" },
      { name: "tomatoes", qty: 2, unit: "", section: "produce" },
      { name: "saffron", qty: 0.25, unit: "tsp", section: "spices" },
    ],
  },
  {
    id: "chicken-noodle-soup",
    name: "Chicken Noodle Soup",
    timeMinutes: 75,
    servings: 4,
    complexity: "complex",
    categories: ["comfort"],
    recipeUrl: "https://www.simplyrecipes.com/recipes/chicken_noodle_soup/",
    ingredients: [
      { name: "chicken", qty: 2, unit: "lb", section: "meat" },
      { name: "carrots", qty: 3, unit: "", section: "produce" },
      { name: "celery", qty: 3, unit: "stalk", section: "produce" },
      { name: "onion", qty: 1, unit: "", section: "produce" },
      { name: "egg noodles", qty: 10, unit: "oz", section: "pantry" },
      { name: "chicken broth", qty: 8, unit: "cup", section: "pantry" },
      { name: "thyme", qty: 1, unit: "tsp", section: "spices" },
    ],
  },
  {
    id: "beef-barley-soup",
    name: "Beef & Barley Soup",
    timeMinutes: 120,
    servings: 4,
    complexity: "complex",
    categories: ["comfort"],
    recipeUrl:
      "https://www.allrecipes.com/recipe/23180/slow-cooker-beef-barley-soup/",
    ingredients: [
      { name: "beef stew meat", qty: 1.5, unit: "lb", section: "meat" },
      { name: "pearled barley", qty: 1, unit: "cup", section: "pantry" },
      { name: "carrots", qty: 3, unit: "", section: "produce" },
      { name: "celery", qty: 3, unit: "stalk", section: "produce" },
      { name: "onion", qty: 1, unit: "", section: "produce" },
      { name: "beef broth", qty: 6, unit: "cup", section: "pantry" },
      { name: "bay leaf", qty: 2, unit: "", section: "spices" },
    ],
  },
  {
    id: "perfect-roast-chicken",
    name: "Perfect Roast Chicken",
    timeMinutes: 90,
    servings: 4,
    complexity: "complex",
    categories: ["american"],
    recipeUrl:
      "https://www.foodnetwork.com/recipes/ina-garten/perfect-roast-chicken-recipe-1940592",
    ingredients: [
      { name: "whole chicken", qty: 1, unit: "", section: "meat" },
      { name: "lemons", qty: 2, unit: "", section: "produce" },
      { name: "onion", qty: 1, unit: "", section: "produce" },
      { name: "garlic", qty: 4, unit: "clove", section: "produce" },
      { name: "butter", qty: 4, unit: "tbsp", section: "dairy" },
      { name: "rosemary", qty: 1, unit: "tbsp", section: "spices" },
    ],
  },
  {
    id: "stuffed-peppers",
    name: "Stuffed Peppers",
    timeMinutes: 70,
    servings: 4,
    complexity: "complex",
    categories: ["comfort"],
    recipeUrl: "https://www.allrecipes.com/recipe/16363/stuffed-peppers/",
    ingredients: [
      { name: "bell peppers", qty: 4, unit: "", section: "produce" },
      { name: "ground beef", qty: 1.25, unit: "lb", section: "meat" },
      { name: "rice", qty: 1, unit: "cup", section: "pantry" },
      { name: "diced tomatoes", qty: 1, unit: "can", section: "pantry" },
      { name: "cheddar", qty: 1, unit: "cup", section: "dairy" },
      { name: "garlic powder", qty: 1, unit: "tsp", section: "spices" },
    ],
  },
  {
    id: "braised-short-ribs",
    name: "Red Wine-Braised Short Ribs",
    timeMinutes: 195,
    servings: 4,
    complexity: "complex",
    categories: ["slow-cooked"],
    recipeUrl:
      "https://www.foodnetwork.com/recipes/ina-garten/red-wine-braised-short-ribs-8732915",
    ingredients: [
      { name: "beef short ribs", qty: 3, unit: "lb", section: "meat" },
      { name: "carrots", qty: 2, unit: "", section: "produce" },
      { name: "onion", qty: 1, unit: "", section: "produce" },
      { name: "red wine", qty: 2, unit: "cup", section: "pantry" },
      { name: "beef broth", qty: 2, unit: "cup", section: "pantry" },
      { name: "thyme", qty: 1, unit: "tsp", section: "spices" },
    ],
  },
  {
    id: "pork-ragu",
    name: "Pork Ragu",
    timeMinutes: 120,
    servings: 4,
    complexity: "complex",
    categories: ["italian", "slow-cooked"],
    recipeUrl: "https://www.bbcgoodfood.com/recipes/pork-ragu",
    ingredients: [
      { name: "pork shoulder", qty: 2.5, unit: "lb", section: "meat" },
      { name: "pasta", qty: 12, unit: "oz", section: "pantry" },
      { name: "crushed tomatoes", qty: 2, unit: "cup", section: "pantry" },
      { name: "onion", qty: 1, unit: "", section: "produce" },
      { name: "carrots", qty: 2, unit: "", section: "produce" },
      { name: "bay leaf", qty: 2, unit: "", section: "spices" },
    ],
  },
  {
    id: "chicken-parmesan-bake",
    name: "Chicken Parmesan Bake",
    timeMinutes: 60,
    servings: 4,
    complexity: "complex",
    categories: ["italian"],
    recipeUrl: "https://www.allrecipes.com/recipe/223042/chicken-parmesan/",
    ingredients: [
      { name: "chicken breast", qty: 1.5, unit: "lb", section: "meat" },
      { name: "breadcrumbs", qty: 1, unit: "cup", section: "pantry" },
      { name: "marinara sauce", qty: 2, unit: "cup", section: "pantry" },
      { name: "mozzarella", qty: 2, unit: "cup", section: "dairy" },
      { name: "parmesan", qty: 0.5, unit: "cup", section: "dairy" },
      { name: "basil", qty: 0.25, unit: "cup", section: "produce" },
    ],
  },
  {
    id: "turkey-chili",
    name: "Turkey Chili",
    timeMinutes: 75,
    servings: 4,
    complexity: "complex",
    categories: ["comfort"],
    recipeUrl: "https://www.allrecipes.com/recipe/80969/simple-turkey-chili/",
    ingredients: [
      { name: "ground turkey", qty: 1.5, unit: "lb", section: "meat" },
      { name: "kidney beans", qty: 2, unit: "can", section: "pantry" },
      { name: "diced tomatoes", qty: 2, unit: "can", section: "pantry" },
      { name: "onion", qty: 1, unit: "", section: "produce" },
      { name: "bell peppers", qty: 1, unit: "", section: "produce" },
      { name: "chili powder", qty: 2, unit: "tsp", section: "spices" },
    ],
  },
  {
    id: "boilermaker-chili",
    name: "Boilermaker Tailgate Chili",
    timeMinutes: 120,
    servings: 4,
    complexity: "complex",
    categories: ["comfort", "slow-cooked"],
    recipeUrl: "https://www.allrecipes.com/recipe/78299/boilermaker-tailgate-chili/",
    ingredients: [
      { name: "ground beef", qty: 1.5, unit: "lb", section: "meat" },
      { name: "italian sausage", qty: 1, unit: "lb", section: "meat" },
      { name: "kidney beans", qty: 2, unit: "can", section: "pantry" },
      { name: "diced tomatoes", qty: 2, unit: "can", section: "pantry" },
      { name: "onion", qty: 1, unit: "", section: "produce" },
      { name: "chili powder", qty: 2, unit: "tbsp", section: "spices" },
    ],
  },
  {
    id: "seafood-chowder",
    name: "Seafood Chowder",
    timeMinutes: 60,
    servings: 4,
    complexity: "complex",
    categories: ["seafood"],
    recipeUrl: "https://www.simplyrecipes.com/recipes/seafood_chowder/",
    ingredients: [
      { name: "fish fillets", qty: 1, unit: "lb", section: "meat" },
      { name: "shrimp", qty: 1, unit: "lb", section: "meat" },
      { name: "potatoes", qty: 3, unit: "", section: "produce" },
      { name: "celery", qty: 2, unit: "stalk", section: "produce" },
      { name: "cream", qty: 1.5, unit: "cup", section: "dairy" },
      { name: "corn", qty: 1, unit: "cup", section: "pantry" },
      { name: "bay leaf", qty: 2, unit: "", section: "spices" },
    ],
  },
  {
    id: "mushroom-risotto",
    name: "Mushroom Risotto",
    timeMinutes: 60,
    servings: 4,
    complexity: "complex",
    categories: ["italian"],
    recipeUrl: "https://www.simplyrecipes.com/recipes/mushroom_risotto/",
    ingredients: [
      { name: "arborio rice", qty: 1.5, unit: "cup", section: "pantry" },
      { name: "mushrooms", qty: 10, unit: "oz", section: "produce" },
      { name: "onion", qty: 1, unit: "", section: "produce" },
      { name: "parmesan", qty: 0.75, unit: "cup", section: "dairy" },
      { name: "butter", qty: 3, unit: "tbsp", section: "dairy" },
      { name: "vegetable broth", qty: 6, unit: "cup", section: "pantry" },
      { name: "black pepper", qty: 1, unit: "tsp", section: "spices" },
    ],
  },
];

const dayLabels = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const planList = document.getElementById("planList");
const shoppingList = document.getElementById("shoppingList");
const historySelect = document.getElementById("historySelect");
const generateBtn = document.getElementById("generateBtn");
const saveBtn = document.getElementById("saveBtn");
const downloadBtn = document.getElementById("downloadBtn");
const complexToggle = document.getElementById("complexToggle");
const starredOnlyToggle = document.getElementById("starredOnlyToggle");
const listStarredOnlyToggle = document.getElementById("listStarredOnlyToggle");
const hideDislikedToggle = document.getElementById("hideDislikedToggle");
const listComplexityFilter = document.getElementById("listComplexityFilter");
const recipeUrlInput = document.getElementById("recipeUrlInput");
const addRecipeBtn = document.getElementById("addRecipeBtn");
const recipeAddStatus = document.getElementById("recipeAddStatus");

const HISTORY_KEY = "mealPlannerHistory";
const STARRED_KEY = "mealPlannerStarredIds";
const DISLIKED_KEY = "mealPlannerDislikedIds";
const CUSTOM_RECIPES_KEY = "mealPlannerCustomRecipes";
const MAX_HISTORY = 8;

let weeklyPlan = [];
let starredRecipeIds = new Set();
let dislikedRecipeIds = new Set();

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function slugToTitleCase(text) {
  return text
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function parseRecipeUrl(rawUrl) {
  const parsed = new URL(rawUrl);
  if (!["http:", "https:"].includes(parsed.protocol)) {
    throw new Error("Recipe URL must start with http:// or https://");
  }
  return parsed;
}

function deriveRecipeNameFromUrl(parsedUrl) {
  const segments = parsedUrl.pathname.split("/").filter(Boolean);
  if (segments.length > 0) {
    const last = decodeURIComponent(segments[segments.length - 1]);
    const title = slugToTitleCase(last);
    if (title) return title;
  }
  return parsedUrl.hostname.replace(/^www\./, "");
}

function createCustomMealFromUrl(rawUrl) {
  const parsed = parseRecipeUrl(rawUrl);
  return {
    id: `custom-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    name: deriveRecipeNameFromUrl(parsed),
    timeMinutes: 45,
    servings: 4,
    complexity: "complex",
    categories: ["custom"],
    recipeUrl: parsed.toString(),
    ingredients: [],
    isCustom: true,
  };
}

function loadStarredIds() {
  const raw = localStorage.getItem(STARRED_KEY);
  if (!raw) return new Set();
  try {
    const values = JSON.parse(raw);
    if (!Array.isArray(values)) return new Set();
    return new Set(values);
  } catch (error) {
    return new Set();
  }
}

function saveStarredIds() {
  localStorage.setItem(STARRED_KEY, JSON.stringify(Array.from(starredRecipeIds)));
}

function loadDislikedIds() {
  const raw = localStorage.getItem(DISLIKED_KEY);
  if (!raw) return new Set();
  try {
    const values = JSON.parse(raw);
    if (!Array.isArray(values)) return new Set();
    return new Set(values);
  } catch (error) {
    return new Set();
  }
}

function saveDislikedIds() {
  localStorage.setItem(DISLIKED_KEY, JSON.stringify(Array.from(dislikedRecipeIds)));
}

function loadCustomRecipes() {
  const raw = localStorage.getItem(CUSTOM_RECIPES_KEY);
  if (!raw) return [];
  try {
    const items = JSON.parse(raw);
    if (!Array.isArray(items)) return [];
    return items;
  } catch (error) {
    return [];
  }
}

function saveCustomRecipes() {
  const customMeals = meals.filter((meal) => meal.isCustom);
  localStorage.setItem(CUSTOM_RECIPES_KEY, JSON.stringify(customMeals));
}

function setRecipeStatus(message) {
  recipeAddStatus.textContent = message;
}

function getListFilteredMeals() {
  const complexityFilter = listComplexityFilter ? listComplexityFilter.value : "all";
  const starredOnly = listStarredOnlyToggle ? listStarredOnlyToggle.checked : false;
  const hideDisliked = hideDislikedToggle ? hideDislikedToggle.checked : true;
  let filtered = hideDisliked ? meals.filter((meal) => !dislikedRecipeIds.has(meal.id)) : [...meals];
  if (complexityFilter !== "all") {
    filtered = filtered.filter((meal) => meal.complexity === complexityFilter);
  }
  if (starredOnly) {
    filtered = filtered.filter((meal) => starredRecipeIds.has(meal.id));
  }
  return filtered;
}

function generateWeek() {
  const starredOnly = starredOnlyToggle ? starredOnlyToggle.checked : false;
  const nonDislikedMeals = meals.filter((meal) => !dislikedRecipeIds.has(meal.id));
  const pool = starredOnly
    ? nonDislikedMeals.filter((meal) => starredRecipeIds.has(meal.id))
    : nonDislikedMeals;
  if (starredOnly && pool.length === 0) {
    setRecipeStatus("No starred recipes yet. Star meals first, then generate.");
    return;
  }
  if (!starredOnly && pool.length === 0) {
    setRecipeStatus("No recipes available. Remove a dislike or add a new recipe URL.");
    return;
  }
  const selectionPool = pool.length ? pool : meals;
  const shuffled = shuffle(selectionPool);
  weeklyPlan = shuffled.slice(0, 7).map((meal) => meal.id);
  setRecipeStatus("");
  render();
}

function getMealById(id) {
  return meals.find((meal) => meal.id === id);
}

function render() {
  renderPlan();
  renderShoppingList();
}

function renderPlan() {
  planList.innerHTML = "";
  weeklyPlan.forEach((mealId, index) => {
    const meal = getMealById(mealId) || meals[0];
    if (!meal) return;
    const card = document.createElement("article");
    card.className = "plan-card";

    const header = document.createElement("div");
    header.className = "plan-header";

    const left = document.createElement("div");
    left.className = "plan-header__left";

    const day = document.createElement("div");
    day.className = "plan-day";
    day.textContent = dayLabels[index];

    const meta = document.createElement("div");
    meta.className = "plan-meta";
    meta.textContent = `${meal.timeMinutes} min • ${meal.servings} servings`;

    left.append(day, meta);

    const starButton = document.createElement("button");
    starButton.type = "button";
    starButton.className = "star-btn";
    if (starredRecipeIds.has(meal.id)) {
      starButton.classList.add("is-starred");
      starButton.textContent = "★ Starred";
    } else {
      starButton.textContent = "☆ Star";
    }
    starButton.addEventListener("click", () => {
      if (starredRecipeIds.has(meal.id)) {
        starredRecipeIds.delete(meal.id);
      } else {
        starredRecipeIds.add(meal.id);
        dislikedRecipeIds.delete(meal.id);
      }
      saveStarredIds();
      saveDislikedIds();
      renderPlan();
    });

    const dislikeButton = document.createElement("button");
    dislikeButton.type = "button";
    dislikeButton.className = "dislike-btn";
    if (dislikedRecipeIds.has(meal.id)) {
      dislikeButton.classList.add("is-disliked");
      dislikeButton.textContent = "👎 Disliked";
    } else {
      dislikeButton.textContent = "👎 Dislike";
    }
    dislikeButton.addEventListener("click", () => {
      if (dislikedRecipeIds.has(meal.id)) {
        dislikedRecipeIds.delete(meal.id);
      } else {
        dislikedRecipeIds.add(meal.id);
        starredRecipeIds.delete(meal.id);
      }
      saveDislikedIds();
      saveStarredIds();
      renderPlan();
    });

    const actions = document.createElement("div");
    actions.className = "plan-actions";
    actions.append(starButton, dislikeButton);
    header.append(left, actions);

    const mealName = document.createElement("p");
    mealName.className = "plan-meal";
    mealName.textContent = meal.name;

    const recipeLink = document.createElement("a");
    recipeLink.className = "recipe-link";
    recipeLink.href = meal.recipeUrl;
    recipeLink.target = "_blank";
    recipeLink.rel = "noreferrer";
    recipeLink.textContent = "View recipe";

    const tags = document.createElement("div");
    tags.className = "plan-tags";
    const complexity = meal.complexity || "quick";
    const complexityTag = document.createElement("span");
    complexityTag.className = `tag tag--${complexity}`;
    complexityTag.textContent = complexity;
    tags.appendChild(complexityTag);
    meal.categories.forEach((tag) => {
      const span = document.createElement("span");
      span.className = "tag";
      span.textContent = tag;
      tags.appendChild(span);
    });

    const select = document.createElement("select");
    select.className = "meal-select";
    const filteredOptions = getListFilteredMeals();
    const hasCurrentMealInFilter = filteredOptions.some((item) => item.id === mealId);

    if (!hasCurrentMealInFilter && meal) {
      const selectedOption = document.createElement("option");
      selectedOption.value = meal.id;
      selectedOption.textContent = `${meal.name} (outside list filter)`;
      selectedOption.selected = true;
      select.appendChild(selectedOption);
    }

    filteredOptions.forEach((optionMeal) => {
      const option = document.createElement("option");
      option.value = optionMeal.id;
      const complexityLabel = optionMeal.complexity === "complex" ? "Complex" : "Quick";
      let iconPrefix = "";
      if (starredRecipeIds.has(optionMeal.id)) iconPrefix = "★ ";
      if (dislikedRecipeIds.has(optionMeal.id)) iconPrefix = "👎 ";
      option.textContent = `${iconPrefix}${optionMeal.name} (${complexityLabel})`;
      if (optionMeal.id === mealId) option.selected = true;
      select.appendChild(option);
    });

    select.addEventListener("change", (event) => {
      weeklyPlan[index] = event.target.value;
      render();
    });

    card.append(header, mealName, recipeLink, tags, select);
    planList.appendChild(card);
  });
}

function aggregateIngredients() {
  const totals = new Map();

  weeklyPlan.forEach((mealId) => {
    const meal = getMealById(mealId);
    if (!meal) return;
    meal.ingredients.forEach((ingredient) => {
      const key = `${ingredient.section}|${ingredient.name.toLowerCase()}|${ingredient.unit}`;
      const current = totals.get(key) || { ...ingredient };
      current.qty = (current.qty || 0) + ingredient.qty;
      totals.set(key, current);
    });
  });

  const grouped = {};
  SECTION_ORDER.forEach((section) => {
    grouped[section] = [];
  });

  totals.forEach((item) => {
    if (!grouped[item.section]) grouped[item.section] = [];
    grouped[item.section].push(item);
  });

  SECTION_ORDER.forEach((section) => {
    grouped[section].sort((a, b) => a.name.localeCompare(b.name));
  });

  return grouped;
}

function formatQuantity(qty) {
  if (Number.isInteger(qty)) return qty.toString();
  return qty.toFixed(2).replace(/\.00$/, "");
}

function renderShoppingList() {
  shoppingList.innerHTML = "";
  const grouped = aggregateIngredients();

  SECTION_ORDER.forEach((section, index) => {
    const items = grouped[section];
    const card = document.createElement("div");
    card.className = "section-card";
    card.style.animationDelay = `${index * 0.05}s`;

    const title = document.createElement("h3");
    title.textContent = section.charAt(0).toUpperCase() + section.slice(1);

    const list = document.createElement("ul");
    if (items.length === 0) {
      const li = document.createElement("li");
      li.textContent = "No items this week";
      list.appendChild(li);
    } else {
      items.forEach((item) => {
        const li = document.createElement("li");
        const qtyText = formatQuantity(item.qty);
        const unitText = item.unit ? ` ${item.unit}` : "";
        li.textContent = `${qtyText}${unitText} ${item.name}`;
        list.appendChild(li);
      });
    }

    card.append(title, list);
    shoppingList.appendChild(card);
  });
}

function loadHistory() {
  const raw = localStorage.getItem(HISTORY_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch (error) {
    return [];
  }
}

function saveHistory(history) {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

function refreshHistorySelect() {
  const history = loadHistory();
  historySelect.innerHTML = '<option value="">Choose saved week</option>';

  history.forEach((entry) => {
    const option = document.createElement("option");
    option.value = entry.id;
    option.textContent = `${entry.label}`;
    historySelect.appendChild(option);
  });
}

function saveCurrentWeek() {
  const history = loadHistory();
  const now = new Date();
  const label = now.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const entry = {
    id: `${now.getTime()}`,
    label: `Week of ${label}`,
    plan: weeklyPlan,
  };
  history.unshift(entry);
  const trimmed = history.slice(0, MAX_HISTORY);
  saveHistory(trimmed);
  refreshHistorySelect();
  historySelect.value = entry.id;
}

function loadWeekById(id) {
  const history = loadHistory();
  const entry = history.find((item) => item.id === id);
  if (!entry) return;
  weeklyPlan = [...entry.plan];
  render();
}

function addRecipeFromUrl() {
  const raw = recipeUrlInput.value.trim();
  if (!raw) {
    setRecipeStatus("Enter a recipe URL first.");
    return;
  }

  let parsed;
  try {
    parsed = parseRecipeUrl(raw);
  } catch (error) {
    setRecipeStatus(error.message);
    return;
  }

  const duplicate = meals.find((meal) => meal.recipeUrl === parsed.toString());
  if (duplicate) {
    setRecipeStatus("Recipe URL already exists in your list.");
    return;
  }

  const customMeal = createCustomMealFromUrl(parsed.toString());
  meals.push(customMeal);
  saveCustomRecipes();
  setRecipeStatus(`Added "${customMeal.name}" to available recipes.`);
  recipeUrlInput.value = "";
  renderPlan();
}

historySelect.addEventListener("change", (event) => {
  if (!event.target.value) return;
  loadWeekById(event.target.value);
});

generateBtn.addEventListener("click", () => {
  generateWeek();
});

saveBtn.addEventListener("click", () => {
  saveCurrentWeek();
});

if (complexToggle) {
  complexToggle.addEventListener("change", () => {
    setRecipeStatus("");
  });
}

if (starredOnlyToggle) {
  starredOnlyToggle.addEventListener("change", () => {
    setRecipeStatus("");
  });
}

if (listStarredOnlyToggle) {
  listStarredOnlyToggle.addEventListener("change", () => {
    renderPlan();
  });
}

if (listComplexityFilter) {
  listComplexityFilter.addEventListener("change", () => {
    renderPlan();
  });
}

if (hideDislikedToggle) {
  hideDislikedToggle.addEventListener("change", () => {
    renderPlan();
  });
}

if (addRecipeBtn) {
  addRecipeBtn.addEventListener("click", () => {
    addRecipeFromUrl();
  });
}

if (recipeUrlInput) {
  recipeUrlInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addRecipeFromUrl();
    }
  });
}

downloadBtn.addEventListener("click", () => {
  const grouped = aggregateIngredients();
  const lines = ["Shopping List"];
  SECTION_ORDER.forEach((section) => {
    lines.push("");
    lines.push(section.toUpperCase());
    const items = grouped[section];
    if (!items || items.length === 0) {
      lines.push("  - No items this week");
      return;
    }
    items.forEach((item) => {
      const qtyText = formatQuantity(item.qty);
      const unitText = item.unit ? ` ${item.unit}` : "";
      lines.push(`  - ${qtyText}${unitText} ${item.name}`);
    });
  });

  const blob = new Blob([lines.join("\n")], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const now = new Date();
  const stamp = now.toISOString().slice(0, 10);
  link.href = url;
  link.download = `shopping-list-${stamp}.txt`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
});

starredRecipeIds = loadStarredIds();
dislikedRecipeIds = loadDislikedIds();
const customRecipes = loadCustomRecipes();
customRecipes.forEach((meal) => {
  meals.push({ ...meal, isCustom: true, ingredients: Array.isArray(meal.ingredients) ? meal.ingredients : [] });
});

refreshHistorySelect();
if (weeklyPlan.length === 0) {
  generateWeek();
}
