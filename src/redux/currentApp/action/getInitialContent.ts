import { ActionContent, ActionType } from "./actionState"
import { MysqlActionInitial } from "./mysqlAction"
import { RestApiActionInitial } from "./restapiAction"
import { MongodbActionInitial } from "./mongodbAction"
import { PostgresqlActionInitial } from "@/redux/currentApp/action/postgresqlAction"
import { RedisActionInitial } from "@/redux/currentApp/action/redisAction"
import { TransformerActionInitial } from "@/redux/currentApp/action/transformerAction"

export function getInitialContent(actionType: ActionType): ActionContent {
  switch (actionType) {
    case "mongodb":
      return MongodbActionInitial
    case "mysql":
      return MysqlActionInitial
    case "postgresql":
      return PostgresqlActionInitial
    case "redis":
      return RedisActionInitial
    case "restapi":
      return RestApiActionInitial
    case "transformer":
      return TransformerActionInitial
  }
}
