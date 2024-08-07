import mongoose from "mongoose";


const NoteSchema = mongoose.Schema({
    name: {
        type: String,
        default: "",
        required: true,
        min: 1,
        max: 150,
        trim: true
    },
    content: {
        type: String,
        default: "",
        required: true,
        min: 1
    },
    studyUnit: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "StudyUnit",
        default: null,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null,
        required: true
    }
}, { timestamps: true })


const Note = mongoose.model("Note", NoteSchema)
export default Note