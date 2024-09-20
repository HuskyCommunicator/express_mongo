//数据库的配置信息
const mongoose = require("mongoose");
mongoose.connect("mongodb://admin:123456@127.0.0.1:27017/user", {
  authSource: "admin",
});
