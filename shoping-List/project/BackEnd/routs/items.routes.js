const express = require('express');
const router = express.Router();
const {addOptionsToDataBase, getItemFromDB, changeStatus, daleteOption, getItemFromDBForEditting, editItem} = require('../controlers/databaseAddOption.constroler')
//adding Item to DB route 
router.post("/addItems", addOptionsToDataBase)
// getting list from BD route
router.get("/getItem", getItemFromDB)

// changing status isDone in BD route
router.get("/status/:id", changeStatus )

router.delete("/delete/:id", daleteOption )

// Getting a Item for editing from BD route
router.get("/GetForEdit/:id", getItemFromDBForEditting)
router.put("/edit/:id", editItem) // sending editted item to DB route


module.exports= router;
