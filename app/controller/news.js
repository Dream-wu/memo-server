const Controller = require('egg').Controller;
class NewsController extends Controller {
  
  async list() {
    let data = await this.ctx.service.news.find(1);
      // const dataList = {
      //   list: [
      //     { id: 1, title: 'this is news 1', url: '/news/1' },
      //     { id: 2, title: 'this is news 2', url: '/news/2' }
      //   ]
      // };
    console.log('data', data)
    this.ctx.body = data;
    //   await this.ctx.rbodyender('news/list.tpl', dataList);
    }
}
  
module.exports = NewsController;