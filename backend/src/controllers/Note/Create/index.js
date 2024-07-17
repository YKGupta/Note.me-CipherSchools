const Note = require("../../../models/Note");

// Authentication needed
const createNoteHandler = async (req, res) => {

    try
    {
        const note = new Note({
            user: req.id,
            ...req.body
        });
        await note.save();

        res.status(200).json({
            success: true,
            message: "Note created successfully",
            note
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

module.exports = createNoteHandler;