const Note = require("../../../models/Note");

// Authentication needed
const deleteNoteHandler = async (req, res) => {

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

        const deletedNote = await Note.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: "Note deleted successfully",
            deletedNote
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

module.exports = deleteNoteHandler;