const Controller = require("egg").Controller

class ScheduleController extends Controller {
  async query() {
    const query = this.ctx.request.query
    const result = await this.ctx.service.schedule.query(
      query.year,
      query.month
    )
    this.ctx.body = { code: 200, data: result }
  }
  async create() {
    const schedule = this.ctx.request.body
    const result = await this.ctx.service.schedule.create(schedule)
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
    const result = await this.ctx.service.schedule.delete(query.id)
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
    const query = this.ctx.request.body
    const result = await this.ctx.service.schedule.update(query.id, query.content)
      if (result.affectedRows === 1) {
        this.ctx.body = {
          code: 200,
          data: "",
          message: "更新成功"
        }
      } else {
        this.ctx.body = {
          code: 1,
          data: "",
          message: "更新失败"
        }
      }
    }   
}

module.exports = ScheduleController
