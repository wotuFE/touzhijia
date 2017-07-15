const koa = require('koa');
const app = new koa();
const co = require('co');
const path = require('path');
const render = require('koa-swig');
// 跨域中间件
const cors = require('koa-cors');
// 获取post参数中间件
const koaBody = require('koa-body');
// 设置静态资源目录
const serv = require('koa-static');
// 配置swig模板,root:后面跟的必须是views
app.context.render = co.wrap(render({root: './views', autoescape: true, cache: 'memory', writeBody: false, ext: 'html'}))
app.use(serv(__dirname + '/static'));
app.use(cors());
app.use(koaBody({
    formidable: {
        uploadDir: __dirname
    }
}));

const initController = require('./initController.js');
initController(app);
app.listen(7777, function() {
    console.log('server start at http://localhost:7777');
})
