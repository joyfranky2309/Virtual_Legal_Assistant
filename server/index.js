require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const cors = require('cors');
const User = require("./schema/userSchema");

const Lawyer = require("./Model/lawyers");

const app = express();
app.use(express.json());
app.use(cors());

const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB!"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));

app.get("/", (req, res) => {
    res.json({message:"Welcome to backend"});
    console.log("Welcome to backend")
});

app.get('/recommend-lawyers', async (req, res) => {
    const { query } = req.query;
  
    // Sample query parsing logic (you can improve it)
    let practiceArea;
    if (query.includes('divorce')) {
      practiceArea = 'Family Law';
    } else if (query.includes('corporate')) {
      practiceArea = 'Corporate Law';
    }
  
    try {
      const lawyers = await Lawyer.find({ practice_area: practiceArea, availability: true });
      res.json(lawyers);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch lawyer recommendations' });
    }
  });


app.post("/register", async (req, res) => {
    try {
        const { username, age, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = new User({ username, age, email, password: hash });
        await newUser.save();
        res.status(200).json({ message: "User created successfully" });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});


const seedLawyers = async () => {
    await Lawyer.create([
      { name: 'John Doe', practice_area: 'Family Law', location: 'New York', years_of_experience: 10, availability: true, contact_info: 'johndoe@example.com' },
      { name: 'Jane Smith', practice_area: 'Corporate Law', location: 'California', years_of_experience: 15, availability: true, contact_info: 'janesmith@example.com' },
      { name: 'Robert Johnson', practice_area: 'Criminal Law', location: 'Texas', years_of_experience: 8, availability: true, contact_info: 'robertj@example.com' },
    ]);
  
    console.log('Lawyers seeded');
  };
  
  seedLawyers().then(() => {
    mongoose.connection.close();
  });

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });
        console.log("user"+password);
        console.log(user.password);
        const validPassword = await bcrypt.compare(password, user.password);
        console.log("check: "+validPassword);
        if (!validPassword) return res.status(400).json({ message: "Invalid credentials" });

        // const secretKey = process.env.JWT_SECRET;
        const payload = { user: user._id };
        // jwt.sign(payload, secretKey, { expiresIn: "1h" }, (err, token) => {
        //     if (err) throw err;
        //     res.status(200).json({ "message": "User login successful", "token": token,"userDetails": {email:user.email,username:user.username,age:user.age}});
        // });
    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
app.post("/Chatbot", async (req, res) => {
    try {
        const { query } = req.body;
        const newQuery = new Query({ query });
        await newQuery.save();
        res.status(200).json({ message: "Query stored successfully" });
    } catch (error) {
        console.error("Error storing query:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on 
    port ${port} 🔥`));
