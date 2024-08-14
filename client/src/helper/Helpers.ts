export function formatTime(minutes: number) {
  if (minutes >= 60) {
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    if (remainingMinutes === 0) {
      return `${hours} hour`
    }
    return `${hours} hour ${remainingMinutes} min`
  }
  return `${minutes} min`
}

export function parseTags(tagsParam: string | string[] | undefined): string[] {
  if (Array.isArray(tagsParam)) {
    return tagsParam
  } else if (typeof tagsParam === 'string') {
    return [tagsParam]
  } else {
    return []
  }
}

export const tags = [
  // Ingredient-Based Tags
  { value: 'chicken', label: 'Chicken' },
  { value: 'pasta', label: 'Pasta' },
  { value: 'tomato', label: 'Tomato' },
  { value: 'soy_sauce', label: 'Soy Sauce' },
  { value: 'tortilla', label: 'Tortilla' },
  { value: 'masala', label: 'Masala' },

  // Dietary Tags
  { value: 'vegetarian', label: 'Vegetarian' },
  { value: 'vegan', label: 'Vegan' },
  { value: 'gluten_free', label: 'Gluten-Free' },
  { value: 'low_carb', label: 'Low Carb' },
  { value: 'low_calorie', label: 'Low Calorie' },
  { value: 'high_protein', label: 'High Protein' },

  // Meal Type Tags
  { value: 'breakfast', label: 'Breakfast' },
  { value: 'lunch', label: 'Lunch' },
  { value: 'dinner', label: 'Dinner' },
  { value: 'appetizer', label: 'Appetizer' },
  { value: 'main_course', label: 'Main Course' },
  { value: 'dessert', label: 'Dessert' },

  // Cuisine Tags
  { value: 'italian', label: 'Italian' },
  { value: 'mexican', label: 'Mexican' },
  { value: 'indian', label: 'Indian' },
  { value: 'mediterranean', label: 'Mediterranean' },
  { value: 'asian', label: 'Asian' },
  { value: 'middle_eastern', label: 'Middle Eastern' },

  // Preparation Method Tags
  { value: 'grilled', label: 'Grilled' },
  { value: 'baked', label: 'Baked' },
  { value: 'fried', label: 'Fried' },
  { value: 'stir_fried', label: 'Stir-Fried' },
  { value: 'slow_cooked', label: 'Slow-Cooked' },
  { value: 'steamed', label: 'Steamed' },

  // Occasion or Seasonal Tags
  { value: 'christmas', label: 'Christmas' },
  { value: 'easter', label: 'Easter' },
  { value: 'thanksgiving', label: 'Thanksgiving' },
  { value: 'summer', label: 'Summer' },
  { value: 'fall', label: 'Fall' },
  { value: 'winter', label: 'Winter' },

  // Flavor Profile Tags
  { value: 'spicy', label: 'Spicy' },
  { value: 'sweet', label: 'Sweet' },
  { value: 'savory', label: 'Savory' },
  { value: 'garlic', label: 'Garlic' },
  { value: 'citrus', label: 'Citrus' },
  { value: 'ginger', label: 'Ginger' },

  // Miscellaneous Tags
  { value: 'quick', label: 'Quick' },
  { value: 'easy', label: 'Easy' },
  { value: '30_minutes_or_less', label: '30 Minutes or Less' },
  { value: 'party', label: 'Party' },
  { value: 'date_night', label: 'Date Night' },
  { value: 'kids_friendly', label: 'Kids-Friendly' }
]

export function generateRecipeURL(recipeName: string, recipeId: string) {
  const slug = recipeName.trim().toLowerCase().replace(/\s+/g, '-')

  return `recipes/${slug}?recipe=${recipeId}`
}
