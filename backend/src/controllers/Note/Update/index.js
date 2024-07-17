const Note = require("../../../models/Note");

// Authentication needed
const updateNoteHandler = async (req, res) => {

    try
    {
        const note = await Note.findById(req.params.id);

        if(!note)
        {
            return res.status(404).json({
                success: false,
                message: "Note not found"
            });
        }

        const newNote = {
            ...req.body
        };

        const updatedNote = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });

        res.status(200).json({
            success: true,
            message: "Note updated successfully",
            updatedNote
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

module.exports = updateNoteHandler;