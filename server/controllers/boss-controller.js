import Boss from '../models/boss-model.js';

async function createBoss(req,res) {
    try {
        const newBoss = await Boss.create(req.body);
        res.status(201).json(newBoss);
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
}

async function getAllBosses(req,res) {
    try {
        const allBosses = await Boss.find().sort({fullName: 'asc'});
        res.status(200).json(allBosses);
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
}

async function getOneBoss(req,res) {
    try {
        const {id} = req.params;
        const boss = await Boss.findById(id);
        res.status(200).json(boss);
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
}

async function updateOneBoss(req,res) {
    try {
        const {id} = req.params;
        const updatedBoss = await Boss.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json(updatedBoss);
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
}

async function deleteOneBoss(req,res) {
    try {
        const {id} = req.params;
        const deletedBoss = await Boss.findByIdAndDelete(id);
        res.status(200).json(deletedBoss);
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
}

export {createBoss, getAllBosses, getOneBoss, updateOneBoss, deleteOneBoss};