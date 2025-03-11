import { Router, Response, Request } from "express"
import { checkAuth } from "../middleware/auth.middleware"
import { User } from "../types/user"

const pageRouter = Router()
const users: User[] = [
  { id: 1, username: 'admin', password: 'admin12345' },
]


export default pageRouter