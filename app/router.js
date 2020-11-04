module.exports = app => {
  const { router, controller } = app
    router.get("/", controller.home.index)
    router.get('/news', controller.news.list);
    router.get('/schedule/query', controller.schedule.query);
    router.post('/schedule/create', controller.schedule.create);
    router.post('/schedule/update', controller.schedule.update);
    router.delete('/schedule/delete', controller.schedule.delete);
    router.get('/backlog/modules/query', controller.backlog.queryModules);
    router.post('/backlog/modules/create', controller.backlog.createModule);
    router.post('/backlog/modules/update', controller.backlog.updateModule);
    router.delete('/backlog/modules/delete', controller.backlog.deleteModule);
    router.get('/backlog/query', controller.backlog.query);
    router.post('/backlog/create', controller.backlog.create);
    router.post('/backlog/update', controller.backlog.update);
    router.delete('/backlog/delete', controller.backlog.delete);
}
