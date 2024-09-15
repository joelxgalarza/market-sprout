export type data = {
  ingredients: { name: string; cost: number }[];
  days: { breakfast: string; lunch: string; dinner: string }[];
};
export const mealPlan: data = {
  ingredients: [
    { name: "Eggs", cost: 2.5 },
    { name: "Bread", cost: 1.2 },
    { name: "Chicken", cost: 5.0 },
    { name: "Rice", cost: 1.0 },
    { name: "Vegetables", cost: 3.5 },
    { name: "Oats", cost: 1.8 },
    { name: "Milk", cost: 0.9 },
    { name: "Fish", cost: 6.0 },
    { name: "Pasta", cost: 1.2 },
    { name: "Tomato sauce", cost: 2.0 },
    { name: "Beef", cost: 7.5 },
    { name: "Cheese", cost: 3.0 },
  ],
  days: [
    {
      breakfast: "Oatmeal with Milk",
      lunch: "Chicken Salad",
      dinner: "Grilled Chicken with Rice and Vegetables",
    },
    {
      breakfast: "Scrambled Eggs on Toast",
      lunch: "Grilled Fish with Vegetables",
      dinner: "Pasta with Tomato Sauce",
    },
    {
      breakfast: "Pancakes with Syrup",
      lunch: "Beef Stir-Fry",
      dinner: "Spaghetti with Beef and Tomato Sauce",
    },
    {
      breakfast: "Fruit and Oats",
      lunch: "Grilled Cheese Sandwich",
      dinner: "Roasted Chicken and Vegetables",
    },
    {
      breakfast: "Egg and Cheese Sandwich",
      lunch: "Caesar Salad with Chicken",
      dinner: "Baked Fish with Potatoes",
    },
    {
      breakfast: "Smoothie Bowl",
      lunch: "Vegetable Stir-Fry",
      dinner: "Rice with Chicken and Tomato Sauce",
    },
    {
      breakfast: "Eggs and Sausages",
      lunch: "Grilled Fish Tacos",
      dinner: "Beef Burrito with Vegetables",
    },
  ],
};
