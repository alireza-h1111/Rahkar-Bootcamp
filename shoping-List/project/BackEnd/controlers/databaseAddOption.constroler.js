const sendingToDB = require('../models/databaseSendingItem.modules');

exports.addOptionsToDataBase = async (req, res, next) => {
    try {
        let result = await sendingToDB.addItem(req.body)
        res.status(200).json({ message: "successfully added" })
    }
    catch (err) {
        res.status(400).json({ message: "error can't add" })
    }

}
exports.getItemFromDB = async (req, res, next) => {
    try {
        let result = await sendingToDB.getItem()
        res.status(200).json({result})
    } catch (err) {
        res.json({ message: "error from getting of  database" }, 400)

    }

}

exports.changeStatus = async (req, res, next) => {
    try {
        let result = await sendingToDB.changeStatusInDB(req.params.id)
        res.status(200).json({ message: "successfully changed" })

    } catch (err) {
        res.status(400).json({ message: "error" })

    }

}

exports.daleteOption = async (req, res, next) => {
    try {
        let result = await sendingToDB.deleteOption(req.params.id)
        res.status(200).json({ message: "successfully deleted" })
    } catch (err) {
        res.status(400).json({ message: "error" })

    }

}

exports.getItemFromDBForEditting = async (req, res, next) => {
    try {
        let result = await sendingToDB.edittingOption(req.params.id)
        res.status(200).json({ result })
    } catch (err) {
        res.status(400).json({ message: "error" },)

    }

}

exports.editItem = async (req, res, next) => {
    try {
        let result = await sendingToDB.editItemBD(req.body.title, req.params.id)
        res.status(200).json({ message: "successfully changed" })
    } catch (err) {
        res.status(400).json({ message: "error" })

    }

}


// module.exports = { addOptionsToDataBase, getItemFromDB, changeStatus, daleteOption, getItemFromDBForEditting , editItem};