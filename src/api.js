import express from "express"
import UsersRouter from "./routes/user.routes.js"
import InstitutionsRouter from "./routes/institution.routes.js"
import AdministratorsRouter from "./routes/administrator.routes.js"
import StudyUnitsRouter from "./routes/studyUnit.routes.js"
import NotesRouter from "./routes/note.routes.js"


const ApiRouter = express.Router()

ApiRouter.use("/users", UsersRouter)
ApiRouter.use("/institutions", InstitutionsRouter)
ApiRouter.use("/administrators", AdministratorsRouter)
ApiRouter.use("/studyunits", StudyUnitsRouter)
ApiRouter.use("/notes", NotesRouter)


export default ApiRouter