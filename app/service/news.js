const Service = require('egg').Service;

class NewsService extends Service {
    async find(uid) {
      // 假如 我们拿到用户 id 从数据库获取用户详细信息
      const list = await this.app.mysql.get('news', { id: 1 });
      return { list };
    }
}
module.exports = NewsService;