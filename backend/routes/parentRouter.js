const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Parent = require("../Models/parentsModel");

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

module.exports = router;