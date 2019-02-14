import { Controller } from "./base";

export default class User extends Controller {
  async user() {
    this.ctx.body = '新的用户列表'
  }

  async userInfo() {
    this.ctx.body = '新的用户信息'
  }
}
