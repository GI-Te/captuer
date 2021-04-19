// const {} require("../validation/userValidation");
// const jwt = require("jsonwebtoken");

const { validate } = require("../../models/captuerSchema")

const addUser =async (res, req)=>{
    const {error}= validateAddUser.validate(req.body)
    if(error) return res.status(402).send("error.detail[0].masage");

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password,salt);

    const userEmail =await User.findOne({email:req.body.email})
    if(userEmail) return  res.status(403).send("email already exist")

    const newUser = new User ({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    })
    await newUser .save(),
    res.status(201).json(newUser)
}

const userLogin =async (req, res)=>{

    const user =await User.findOne({email:req.body.email});
    if(!user) return res.status(404).send("account is not valid");

    const varifidedPassword = await bcrypt.compare(req.body.email,password);
    if(!varifidedPassword) return res.status(404).send("")
}