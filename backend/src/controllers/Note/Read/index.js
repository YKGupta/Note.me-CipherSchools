const Note = require("../../../models/Note");

// Authentication needed
const readNoteHandler = async (req, res) => {

    try
    {
        const notes = await Note.find({ user: req.id });

        res.status(200).json({
            success: true,
            message: "Notes fetched successfully",
            notes
        });
    }
    catch(error)
    {
        res.status(500).json({
            success: false,
            message: error
        });
    }

};

module.exports = readNoteHandler;