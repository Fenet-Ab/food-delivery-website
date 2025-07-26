# 🍕 Food Delivery System

A complete full-stack food delivery application with React frontend, Node.js/Express backend, MongoDB database, and admin panel for restaurant management.

## 🚀 Features

### 🛒 Customer Features
- **Browse Food Items**: View all available food items with images and descriptions
- **Category Filtering**: Filter food items by category (Salad, Rolls, Deserts, etc.)
- **Shopping Cart**: Add/remove items with quantity management
- **User Authentication**: Register and login with JWT tokens
- **Order Placement**: Complete checkout process with delivery information
- **Payment Integration**: Chapa payment gateway integration
- **Order Tracking**: View order history and status
- **Responsive Design**: Works on desktop, tablet, and mobile

### 👨‍💼 Admin Features
- **Food Management**: Add, edit, and remove food items
- **Image Upload**: Upload food images with drag-and-drop interface
- **Order Management**: View and manage all customer orders
- **Category Management**: Organize food items by categories
- **Real-time Updates**: See orders and inventory in real-time

### 🔧 Technical Features
- **JWT Authentication**: Secure user authentication and authorization
- **Cart Persistence**: Cart data persists across browser sessions
- **Image Storage**: Local file storage for food images
- **API Security**: Protected routes with middleware
- **Error Handling**: Comprehensive error handling and validation
- **Database Integration**: MongoDB with Mongoose ODM

## 📁 Project Structure

```
food/
├── admin/                    # Admin Panel (React)
│   ├── admin/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Navbar/
│   │   │   │   └── Sidebar/
│   │   │   ├── pages/
│   │   │   │   ├── Add/      # Add new food items
│   │   │   │   ├── List/     # View all food items
│   │   │   │   └── Orders/   # Manage orders
│   │   │   └── assets/
│   │   └── package.json
│   └── README.md
├── backend/                  # Node.js + Express API
│   ├── config/
│   │   └── db.js            # MongoDB connection
│   ├── controllers/
│   │   ├── foodController.js # Food CRUD operations
│   │   ├── userController.js # User authentication
│   │   ├── cartController.js # Cart management
│   │   └── orderController.js # Order processing
│   ├── middleware/
│   │   └── auth.js          # JWT authentication middleware
│   ├── models/
│   │   ├── foodModel.js     # Food schema
│   │   ├── userModel.js     # User schema
│   │   └── orderModel.js    # Order schema
│   ├── routes/
│   │   ├── foodRoute.js     # Food API routes
│   │   ├── userRoute.js     # User API routes
│   │   ├── cartRoute.js     # Cart API routes
│   │   └── orderRoute.js    # Order API routes
│   ├── uploads/             # Food images storage
│   ├── server.js            # Main server file
│   └── package.json
├── food-delivery/           # Customer Frontend (React)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header/
│   │   │   ├── Navbar/
│   │   │   ├── FoodDisplay/
│   │   │   ├── FoodItem/
│   │   │   ├── LoginPopup/
│   │   │   └── Footer/
│   │   ├── pages/
│   │   │   ├── Home/        # Main landing page
│   │   │   ├── Cart/        # Shopping cart
│   │   │   ├── PlaceOrder/  # Checkout process
│   │   │   ├── Verify/      # Payment verification
│   │   │   └── MyOrders/    # Order history
│   │   ├── context/
│   │   │   └── StoreContext.jsx # Global state management
│   │   └── assets/
│   └── package.json
└── README.md
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account (or local MongoDB)
- Git

### 1. Clone the Repository
```bash
git clone <repository-url>
cd food
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env
# Edit .env with your configuration

# Start the server
npm run dev
```

**Environment Variables (.env):**
```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CHAPA_SECRET_KEY=your_chapa_secret_key
NODE_ENV=development
```

### 3. Frontend Setup (Customer App)

```bash
# Navigate to frontend directory
cd food-delivery

# Install dependencies
npm install

# Start the development server
npm run dev
```

### 4. Admin Panel Setup

```bash
# Navigate to admin directory
cd admin/admin

# Install dependencies
npm install

# Start the admin panel
npm run dev
```

## 📡 API Endpoints

### Authentication
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login

### Food Items
- `GET /api/food/list` - Get all food items
- `POST /api/food/add` - Add new food item (admin only)
- `POST /api/food/remove` - Remove food item (admin only)

### Cart Management
- `POST /api/cart/add` - Add item to cart
- `POST /api/cart/remove` - Remove item from cart
- `POST /api/cart/get` - Get user's cart

### Orders
- `POST /api/order/place` - Place new order
- `POST /api/order/verify` - Verify payment
- `POST /api/order/userorders` - Get user's orders
- `GET /api/order/list` - Get all orders (admin only)
- `POST /api/order/status` - Update order status (admin only)

## 🎯 How to Use

### For Customers
1. **Browse Food**: Visit the main page to see all available food items
2. **Add to Cart**: Click the "+" button on any food item
3. **View Cart**: Click the cart icon to see your items
4. **Checkout**: Fill in delivery information and proceed to payment
5. **Track Orders**: View your order history and status

### For Admins
1. **Add Food Items**: Use the admin panel to add new food items with images
2. **Manage Inventory**: View and edit existing food items
3. **Process Orders**: View incoming orders and update their status
4. **Monitor Sales**: Track order history and customer data

## 🔧 Database Schema

### User Model
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  cartData: Object (default: {})
}
```

### Food Model
```javascript
{
  name: String (required),
  description: String (required),
  price: Number (required),
  category: String (required),
  image: String (required)
}
```

### Order Model
```javascript
{
  userId: String (required),
  items: Array (required),
  amount: Number (required),
  address: Object (required),
  status: String (default: "pending"),
  payment: Boolean (default: false)
}
```

## 🎨 Available Categories
- Salad
- Rolls
- Deserts
- Sandwich
- Cake
- Pure Veg
- Pasta
- Noodles

## 🔐 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcrypt for password security
- **Protected Routes**: Middleware for route protection
- **Input Validation**: Server-side validation for all inputs
- **CORS Configuration**: Proper cross-origin resource sharing

## 💳 Payment Integration

The system integrates with **Chapa** payment gateway:
- Secure payment processing
- Multiple payment methods
- Payment verification
- Order status updates

## 🚀 Deployment

### Backend Deployment
1. Set up environment variables
2. Deploy to Heroku, Vercel, or any Node.js hosting
3. Configure MongoDB connection
4. Set up image storage (consider cloud storage for production)

### Frontend Deployment
1. Build the React app: `npm run build`
2. Deploy to Netlify, Vercel, or any static hosting
3. Update API URLs for production environment

### Admin Panel Deployment
1. Build the admin React app: `npm run build`
2. Deploy to any static hosting service
3. Configure admin access and security

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection**
   - Check MongoDB connection string
   - Verify network access (for Atlas)
   - Ensure MongoDB service is running

2. **Image Upload Issues**
   - Check uploads directory permissions
   - Verify file size limits
   - Ensure proper file formats

3. **Authentication Issues**
   - Verify JWT_SECRET is set
   - Check token expiration
   - Ensure proper middleware setup

4. **Payment Issues**
   - Verify Chapa credentials
   - Check payment gateway status
   - Review error logs

### Debug Commands
```bash
# Check backend logs
cd backend && npm run dev

# Check frontend logs
cd food-delivery && npm run dev

# Check admin logs
cd admin/admin && npm run dev
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test thoroughly
5. Commit your changes: `git commit -m 'Add feature'`
6. Push to the branch: `git push origin feature-name`
7. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues:
1. Check the troubleshooting section
2. Review console logs and error messages
3. Verify all services are running
4. Check database connection status
5. Ensure all environment variables are set correctly

## 🔄 Updates and Maintenance

- Regularly update dependencies
- Monitor security vulnerabilities
- Backup database regularly
- Test payment integration
- Review and update API documentation

---

**Happy coding! 🍕✨** 