const Controller = require("egg").Controller

class BacklogController extends Controller {
  async queryModules() {
    const result = await this.ctx.service.backlog.queryModules()
    this.ctx.body = { code: 200, data: result }
  }
  async createModule() {
    const module = this.ctx.request.body
    const result = await this.ctx.service.backlog.createModule(module)
    if (result.affectedRows === 1) {
      this.ctx.body = {
        code: 200,
        data: { id: result.insertId }
      }
    } else {
      this.ctx.body = {
        code: 1,
        data: "",
        message: "创建失败"
      }
    }
  }
  async deleteModule() {
    const query = this.ctx.request.query
    if (!query.id) {
      this.ctx.body = "参数不完整！"
      return
    }
    const result = await this.ctx.service.backlog.deleteModule(query.id)
    // console.log(result)
    if (result.success) {
      this.ctx.body = {
        code: 200,
        data: "",
        message: "删除成功"
      }
    } else {
      this.ctx.body = {
        code: 500,
        data: "",
        message: "删除失败"
      }
    }
  }
  async updateModule() {
    const query = this.ctx.request.body
    const result = await this.ctx.service.backlog.updateModule(
      query.id,
      query.name
    )
    //   console.log(result)
    if (result.affectedRows === 1) {
      this.ctx.body = {
        code: 200,
        data: "",
        message: "更新成功"
      }
    } else {
      this.ctx.body = {
        code: 500,
        data: "",
        message: "更新失败"
      }
    }
  }

  async query() {
    const query = this.ctx.request.query
    const result = await this.ctx.service.backlog.query(query)
    this.ctx.body = { code: 200, data: result }
  }
    
  async create() {
    const backlog = this.ctx.request.body
    const result = await this.ctx.service.backlog.create({...backlog, status: 1})
    if (result.affectedRows === 1) {
      this.ctx.body = {
        code: 200,
        data: { id: result.insertId }
      }
    } else {
      this.ctx.body = {
        code: 1,
        data: "",
        message: "创建失败"
      }
    }
  }
    
  async delete() {
    const query = this.ctx.request.query
    if (!query.id) {
      this.ctx.body = "参数不完整！"
      return
    }
    const result = await this.ctx.service.backlog.delete(query.id)
    if (result.affectedRows === 1) {
      this.ctx.body = {
        code: 200,
        data: "",
        message: "删除成功"
      }
    } else {
      this.ctx.body = {
        code: 1,
        data: "",
        message: "删除失败"
      }
    }
  }
    
  async update() {
    const backlog = this.ctx.request.body
    const result = await this.ctx.service.backlog.update(backlog.id, backlog)
    if (result.affectedRows === 1) {
      this.ctx.body = {
        code: 200,
        data: "",
        message: "更新成功"
      }
    } else {
      this.ctx.body = {
        code: 500,
        data: "",
        message: "更新失败"
      }
    }
  }
}

module.exports = BacklogController
