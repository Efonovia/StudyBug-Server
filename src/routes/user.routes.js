import express from "express"
import {
    addUserToInstitution,
    createUser, 
    editUserMainDetails, 
    getUser, 
    loginUser,
    removeUserFromInstitution,
    searchFilterAndSortAllResources,
} from "../controllers/user.controllers.js"


const UsersRouter = express.Router()


UsersRouter.post("/create", createUser)
UsersRouter.post("/login", loginUser)
UsersRouter.get("/id/:id", getUser)
UsersRouter.get("/resources", searchFilterAndSortAllResources)
UsersRouter.post("/edit/main-details", editUserMainDetails)
UsersRouter.post("/edit/institution/add", addUserToInstitution)
UsersRouter.post("/edit/institution/remove/:userId", removeUserFromInstitution)


export default UsersRouter