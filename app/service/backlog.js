const Service = require('egg').Service;

class BacklogService extends Service {
    async queryModules() {
        const result = [];
        const sql1 = `SELECT * FROM backlog_module`;
        const modules = JSON.parse(JSON.stringify(await this.app.mysql.query(sql1)));
        for (let i = 0; i < modules.length; i++) {
            const items = JSON.parse(JSON.stringify(await this.app.mysql.query(`SELECT * FROM backlog where module_id=${modules[i].id} and status=1`)));
            result.push({...modules[i], items })
        }
        return result;
    }
    async createModule(module) {
        const result = await this.app.mysql.insert("backlog_module", module);
        return result;
    }
    async deleteModule(id) {
        const result = await this.app.mysql.beginTransactionScope(async conn => {
            await conn.delete("backlog_module", {id});
            await conn.delete("backlog", {module_id: id});
            return { success: true };
        }, this.ctx);
        return result;
    }
    async updateModule(id, name) {
        const result = await this.app.mysql.update("backlog_module", {name}, {where: {id}});
        return result;
    }
    async query(option) {
        const result = await this.app.mysql.select('backlog', {
            where: option
        }) || [];
        return JSON.parse(JSON.stringify(result));
    }
    async create(backlog) {
      const result = await this.app.mysql.insert("backlog", backlog);
      return result;
    }
    async delete(id) {
        const result = await this.app.mysql.delete("backlog", {id});
        return result;
    }
    async update(id, backlog) {
        const result = await this.app.mysql.update("backlog", {...backlog, id: backlog.id}, {where: {id}});
        return result;
    }
}
module.exports = BacklogService;