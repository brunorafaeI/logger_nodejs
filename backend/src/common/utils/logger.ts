import log4js from "log4js"
import fs from "node:fs"

log4js.configure({
  appenders: {
    stdout: { type: "stdout" },
    file: { type: "file", filename: "logs/out.log" }
  },
  categories: {
    default: { appenders: [ "stdout", "file" ], level: "info" }
  }
})

export const logger = log4js.getLogger()
export const readLog = () => {
  try {
    return fs.readFileSync('logs/out.log', { encoding: 'utf-8' })
  } catch (err) {
    log4js.getLogger().error(err)
    return err
  }
}
