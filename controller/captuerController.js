const Trainees = require("../models/captuerSchema");
const Trainee = require("../models/captuerSchema");
const { param } = require("../routes/captuerRoute");

const createCaptuer = async(req, res)=>{
    const newCaptuer = new Captuer ({
        name: rep.body.name,
        location: req.body.location,
        email: req.body.email,
        DoB: req.body.DoB,
        age:rep.body.age,
    });


    await newCaptuer.save();
    res.status(201).json(newCaptuer);
};

const getAllCaptuer =async (req, res) => {
    const Captuer = await Captuer.find();
    res.json(Captuer);
};

const getSingleCaptuer =async (req, res) =>{
    const Captuer = await Captuer.findbyid(req,params._id);
    res.json(Captuer);
};
const updateCaptuer =async (req,res) =>{
    const Captuer = await Captuer.findById(req.params._id);
    if(foundCaptuer) {
        foundCaptuer.name =res.body.name,
        foundCaptuer.location =res.body.location,
        foundCaptuer.email =res.body.email,
        foundCaptuer.DoB =res.body.DoB,
        foundCaptuer.age =res.body.age;

        const updateCaptuer = await foundCaptuer.save();
        res.json({updateCaptuer});
    };
};
const captuer = async (req,res)=>{
    const foundCaptuer =await Captuer.findById(req,params._id)
    if(foundCaptuer) {
        foundCaptuer.remove()
        res.json({msg:`${foundCaptuer.name}deleted`});

    }
    else{
        res.status(404).json({error:"Captuer notfound"});
    }
};

module.exports= {createCaptuer,
     getAllCaptuer,
     getSingleCaptuer,
     updateCaptuer,
    captuer};