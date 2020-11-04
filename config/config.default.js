exports.keys = "12342"
exports.security = {
  csrf: {
    enable: false
  }
}

exports.mysql = {
  // 单数据库信息配置
  client: {
    // host
    host: "localhost",
    // 端口号
    port: "3306",
    // 用户名
    user: "root",
    // 密码
    password: "password",
    // 数据库名
    database: "memo_electron",
    // 强制日期类型(TIMESTAMP, DATETIME, DATE)以字符串返回，而不是一javascript Date对象返回. (默认: false)  
    dateStrings: true,
    charset: 'UTF8MB4_GENERAL_CI',
  },
  // 是否加载到 app 上，默认开启
  app: true,
  // 是否加载到 agent 上，默认关闭
  agent: false
}
