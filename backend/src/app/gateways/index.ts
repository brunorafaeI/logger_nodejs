export interface IController {
  handle(router: any, options: Record<string, any>): Promise<void>
}

export interface IRouteService {}

export interface IService {}