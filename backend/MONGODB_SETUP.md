# MongoDB Atlas Setup Guide

## 🚀 Quick Setup Steps

### 1. Create MongoDB Atlas Account
1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Click "Try Free" or "Sign Up"
3. Create your account

### 2. Create a New Cluster
1. Click "Build a Database"
2. Choose "FREE" tier (M0)
3. Select your preferred cloud provider (AWS, Google Cloud, or Azure)
4. Choose a region close to you
5. Click "Create"

### 3. Set Up Database Access
1. Go to "Database Access" in the left sidebar
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Create a username and password (save these!)
5. Set privileges to "Read and write to any database"
6. Click "Add User"

### 4. Set Up Network Access
1. Go to "Network Access" in the left sidebar
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (for development)
4. Click "Confirm"

### 5. Get Your Connection String
1. Go back to "Database" in the left sidebar
2. Click "Connect"
3. Choose "Connect your application"
4. Copy the connection string

### 6. Update Your Code
Replace the connection string in `config/db.js`:

```javascript
const mongoURI = 'mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/food-delivery?retryWrites=true&w=majority';
```

## 🔧 Troubleshooting

### If Connection Fails:
1. **Check IP Whitelist**: Make sure your IP is allowed
2. **Verify Credentials**: Username and password must be correct
3. **Check Cluster Status**: Ensure cluster is running
4. **Network Issues**: Try different network or VPN

### Common Issues:
- **Authentication Failed**: Check username/password
- **IP Not Whitelisted**: Add your IP to Network Access
- **Cluster Down**: Wait for cluster to be ready
- **DNS Issues**: Try using a VPN

## 📊 Database Structure

The application will automatically create these collections:
- `foods` - Food items
- `users` - User accounts (if you add authentication)
- `orders` - Order information (if you add ordering)

## 🧪 Testing Connection

Run the test script:
```bash
node test-connection.js
```

Or start the server:
```bash
npm run dev
```

## 💡 Tips

1. **Use Strong Passwords**: For production, use complex passwords
2. **Restrict IP Access**: In production, only allow specific IPs
3. **Monitor Usage**: Free tier has limits
4. **Backup Data**: Set up regular backups for production

## 🔗 Useful Links

- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [MongoDB Connection String Guide](https://docs.mongodb.com/manual/reference/connection-string/)
- [Mongoose Documentation](https://mongoosejs.com/docs/) 