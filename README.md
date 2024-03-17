# Miatsa Pizza Single Page Application

Miatsa Pizza is a mobile-first single-page application built using React, React Router, Redux Toolkit, and styled with Tailwind CSS, ensuring responsiveness across various devices.

## Usage

To use the project, input your full name in the provided field. This action will display a button and a form. Upon clicking 'Enter', the page navigates to the '/menu' link, where a loader is activated before rendering the pizza menu. Users can only select available pizzas that are not sold out. If a pizza is added to the cart, its quantity, along with options to increase, decrease, or delete the pizza from the cart, will be displayed. Additionally, the cart is conditionally hidden at the bottom of the app if it is empty. After selecting pizzas and navigating to the cart, users can review their selections, view the total price and quantity, and adjust quantities or delete items by clicking "CLEAR CART" or "ORDER PIZZAS". Clicking "ORDER PIZZAS" navigates to the "/order/new" link, where a form is displayed. The name field is automatically filled with the user's input from the homepage but can also be edited. The number input is validated using the API provided by UI Bakery. If the input is invalid, an error is shown, preventing the user from proceeding until the number is corrected. In the address input, users can click the "My Location" button to automatically fill the input. This action calls an asynchronous Redux Thunk function that utilizes the browser's built-in API for location (longitude, latitude) and a reverse geocoding API to convert the coordinates into a readable address. After completing all inputs, users can choose whether the order should be prioritized, which incurs a 20% increase in the total price for faster delivery. The price is displayed on the button. Upon clicking, the website navigates to the "/order/Id" link, displaying the user's order details including pizza ingredients, delivery time, total price, and an option to update the priority. Users can also search for their order by entering the order ID in the search bar.

## APIs

The project utilizes the following APIs:

- **React Fast Pizza API**: Used for uploading the pizza menu and posting orders.
  - Base URL: `https://react-fast-pizza-api.onrender.com/api`

- **UI Bakery Phone Number Validation API**: Utilized for validating phone numbers.
  - Base URL: `https://uibakery.io/regex-library/phone-number`

- **Reverse Geocoding API**: Used for converting coordinates into a readable address.
  - Base URL: `https://api.bigdatacloud.net/data/reverse-geocode-client`


## Features

### cartSlice

The cartSlice is a Redux slice that contains reusable logic for managing the shopping cart functionality of the application. It provides actions and selectors to manipulate and retrieve cart-related data. Here's an overview of its features:

#### Actions

- `addItem`: Adds a new item to the shopping cart.
- `deleteItem`: Deletes an item from the shopping cart based on its pizzaId.
- `increaseItemQuantity`: Increases the quantity of a specific item in the shopping cart.
- `decreaseItemQuantity`: Decreases the quantity of a specific item in the shopping cart. If the quantity becomes zero, the item is removed from the cart.
- `clearCart`: Clears the entire shopping cart.

#### Selectors

- `getCart`: Retrieves the entire shopping cart array.
- `getTotalCartQuantity`: Calculates the total quantity of items in the shopping cart.
- `getTotalCartPrice`: Calculates the total price of all items in the shopping cart.
- `getCurQuantityById`: Retrieves the quantity of a specific item in the shopping cart based on its pizzaId.

### userSlice

#### Thunk Function for Location (fetchAddress)

- Uses createAsyncThunk to create an asynchronous thunk action named fetchAddress.
- Retrieves the user's geolocation position.
- Utilizes a reverse geocoding API to obtain a description of the user's address.
- Dispatches pending, fulfilled, and rejected actions based on the status of the asynchronous operation.

#### Initial State

Defines the initial state of the userSlice, including username, status, position, address, and error.

#### Reducers

Includes a reducer named updateName to update the user's name.

#### Extra Reducers

Manages the state transitions for the fetchAddress action, updating the status, position, address, and error accordingly.

## Folder Structure

The folder structure follows a feature-based approach. Within the 'features' directory, there are 'cart', 'menu', 'order', and 'user' folders, each containing relevant content. Adjacent to the 'features' directory, there are 'service' folder for APIs, 'ui' folder for reusable components, and 'utils' folder for helper functions.

The project utilizes React Router for routing and creating a Single Page Application.
