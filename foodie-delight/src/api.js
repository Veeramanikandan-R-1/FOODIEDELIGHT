const restaurantMockData = [
    {   
        id: 1,
        restaurantName: "Anjappar",
        restaurantDesc: "South Indian Briyani",
        restaurantLocation: "Guindy",
        restaurantOwnerName: "User 1",
        contactNumber: '9898989898'   
    },
    {
        id: 2,
        restaurantName: "5 Knots at ECR",
        restaurantDesc: "North Indian Cuisine",
        restaurantLocation: "ECR, Chennai",
        restaurantOwnerName: "User 2",   
        contactNumber: '9898989891'  
    },
    {   
        id: 3,
        restaurantName: "Lassi Corner",
        restaurantDesc: "Soft Drinks Corner",
        restaurantLocation: "Thousand Lights",
        restaurantOwnerName: "user 3",   
        contactNumber: '9898989892'  
    },
    {
        id: 4,
        restaurantName: "Sizzlly Chicken",
        restaurantDesc: "Spicy Hot Chicken",
        restaurantLocation: "Chennai Central",
        restaurantOwnerName: "user 4",   
        contactNumber: '9898989893'  
    },
    {
        id: 5,
        restaurantName: "Dindigul Thalappakatti Biriyani",
        restaurantDesc: "Authentic South Indian Briyani",
        restaurantLocation: "Nungambakkam Chennai",
        restaurantOwnerName: "user 5",   
        contactNumber: '9898989894'  
    },
]
export const getRestaurantData = async () => {
    // TODO: need to replace with actual backend api using mock data for now
    try {
        return new Promise((res, rej) => {
         setTimeout(() => res(restaurantMockData), 3000)
        })
      } catch (err) {
        throw new Error("Error Occured in getting data");
      }

}