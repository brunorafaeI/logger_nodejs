import { IController, IService, IRouteService } from "@app/gateways";

export class UserController implements IController {

  constructor(
    private readonly _userService: IService
  ) { }

  async handle(router: IRouteService, options: Record<string, any>): Promise<void> {
    
  }
  
}