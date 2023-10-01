const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)


// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
// mongoose.connect('mongodb://localhost:27017/courses', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });
try {
    mongoose.connect('mongodb+srv://admin:ctrl4545@cluster0.0tn1hlx.mongodb.net/Courses', {
        
        dbName: "Courses"
    });
    console.log("Connected to MongoDB successfully!");
    // You can perform operations with the database here
} catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    // Handle the error (e.g., retry the connection, terminate the application, etc.)
}


// mongodb+srv://admin:ctrl4545@cluster0.0tn1hlx.mongodb.net/Courses

app.listen(3000, () => console.log('Server running on port 3000'));
