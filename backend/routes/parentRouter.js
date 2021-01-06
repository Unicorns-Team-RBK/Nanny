const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Parent = require("../Models/parentsModel");
require("dotenv").config();

router.post("/registerParent", async (req, res) => {
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

module.exports = router;