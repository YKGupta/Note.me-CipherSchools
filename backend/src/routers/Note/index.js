const createNoteHandler = require('../../controllers/Note/Create');
const deleteNoteHandler = require('../../controllers/Note/Delete');
const readNoteHandler = require('../../controllers/Note/Read');
const updateNoteHandler = require('../../controllers/Note/Update');
const authenticate = require('../../middlewares/Authentication');
const NotesRouter = require('express').Router();

NotesRouter.post('/note/create', authenticate, createNoteHandler);
NotesRouter.get('/note/read', authenticate, readNoteHandler);
NotesRouter.put('/note/update/:id', authenticate, updateNoteHandler);
NotesRouter.delete('/note/delete/:id', authenticate, deleteNoteHandler);

module.exports = NotesRouter;