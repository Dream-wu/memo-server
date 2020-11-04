const Service = require('egg').Service;

class ScheduleService extends Service {
    async query(year, month) {
        const sql = `SELECT * FROM schedule WHERE year(date)=${year} and month(date)=${month}`;
        const result = await this.app.mysql.query(sql);
        return JSON.parse(JSON.stringify(result));
    }
    async create(schedule) {
      const result = await this.app.mysql.insert("schedule", schedule);
      return result;
    }
    async delete(id) {
        const result = await this.app.mysql.delete("schedule", {id});
        return result;
    }
    async update(id, content) {
        const result = await this.app.mysql.update("schedule", {content}, {where: {id}});
        return result;
    }
}
module.exports = ScheduleService;