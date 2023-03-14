import "dotenv/config"
import cors from "cors"

import { logger, readLog } from "@common/utils/logger"
import express, { Request, Response} from "express"

const app = express()

app.use(cors())
app.use(express.json())

app.get(
  "/api/time",
  (req: Request, res: Response) => {
    const today = new Date()
    const now = today.toLocaleTimeString('fr-FR', { timeZone: "UTC" })

    logger.info(`Time requested at ${now}`)
    res.status(200).json({ time: now })

  }
)

app.get(
  "/api/logs",
  (req: Request, res: Response) => {
    const { authorization } = req.headers
    const result = readLog()
    const auth = "Bearer " + process.env.ACCESS_KEY;

    if (result instanceof Error) {
      return res.status(500).json(result)
    }

    if (authorization === auth) {
      return res.status(200).json(result)
    }

    res.status(401).json({ message: "Unauthorized access!"})
  }
)

const APP_PORT = Number(process.env.APP_PORT) || 8080

app.listen(APP_PORT, "0.0.0.0", () => {
  logger.info(`Stated on port ${APP_PORT}`)
})
