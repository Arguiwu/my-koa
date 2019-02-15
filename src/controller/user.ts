import { Controller } from "./base";

export default class User extends Controller {
  getConfig() {
    return (<any>this.app)['config']
  }
  async user() {
    this.ctx.body = '新的用户列表' + this.ctx.service.check.index();
  }

  async userInfo() {
    this.ctx.body = '新的用户信息' + this.getConfig().middleware[0]
  }
}
