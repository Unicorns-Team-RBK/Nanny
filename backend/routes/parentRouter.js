const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth"); 
const Parent = require("../Models/parentsModel");
require("dotenv").config();

router.post("/RegisterParent", async (req, res) => {
    try {
      const { firstName, lastName, email, password, passwordCheck} = req.body;
  
      // validate
  
      if (!firstName || !lastName || !email || !password || !passwordCheck)
        return res.status(400).json({ msg: "Not all fields have been entered." });

      if (password.length < 6)
        return res
          .status(400)
          .json({ msg: "The password needs to be at least 6 characters long." });
      if (password !== passwordCheck)
        return res
          .status(400)
          .json({ msg: "Enter the same password twice for verification." });
  
      const existingParent = await Parent.findOne({ email: email });
      if (existingParent)
        return res
          .status(400)
          .json({ msg: "An account with this email already exists." });
  
  
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);
  
      const newParent = new Parent({
        firstName,
        lastName,
        email,
        password: passwordHash,
      });

      const savedParent = await newParent.save();
      res.json(savedParent);
    }catch (err) {
        res.status(500).json({ error: err.message });
      }
     });


router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
        
      // validate
    if (!email || !password)
    return res.status(400).json({ msg: "Not all fields have been entered." });
        
    const parent = await Parent.findOne({ email: email });
    if (!parent)
    return res
      .status(400)
      .json({ msg: "No account with this email has been registered." });
        
    const isMatch = await bcrypt.compare(password, parent.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });
        
    const token = jwt.sign({ id: parent._id }, process.env.JWT_SECRET);
    res.json({
      token,
      parent: {
        id: parent._id,
        firstName: parent.firstName,
        lastName: parent.lastName
         },
     });
   } catch (err) {
      res.status(500).json({ error: err.message });
   }
});

router.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);
        
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);
        
    const user = await User.findById(verified.id);
    if (!user) return res.json(false);
        
    return res.json(true);
  } catch (err) {
     res.status(500).json({ error: err.message });
  }
});

router.get("/", auth, async (req, res) => {
  const parent = await Parent.findById(req.parent);
  res.json({
    firstName: parent.firstName,
    lastName: parent.lastName,
    id: parent._id,
  });
});

module.exports = router;