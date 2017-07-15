const router = require('koa-simple-router');
const fs = require("fs");
const path = require('path')

function initController(app) {
    // 存放列表接口的数据
    const interfaceList = [];
    // 获取project目录下的所有文件夹
    const directories = fs.readdirSync("./project");
    directories.forEach(function(dir) {
        // 读取文件信息
        fs.stat('./project/' + dir, function(err, stats) {
            // 如果是文件是目录
            if (stats.isDirectory()) {
                const files = fs.readdirSync("./project/" + dir);
                files.forEach((file) => {
                    // 判断文件是不是js文件,只有js文件才生成接口
                    if (file.match('.js')) {
                        // 获取模块
                        const module = require("./project/" + dir + '/' + file);
                        // 获取文件名,不包含后缀
                        const filename = path.basename(file, '.js');
                        // 构造请求接口名
                        const interfaceName = '/' + dir + '/' + filename;
                        // 生成接口
                        const insObj = {
                            filename,
                            interfaceName
                        }
                        interfaceList.push(insObj);
                        app.use(router(_ => {
                            _.all(interfaceName, module);
                        }));
                    }
                })
            }
        })
    })
    app.use(router(_ => {
        _.all('/', async(ctx) => {
            ctx.body = await ctx.render('index', {list: interfaceList})
        });
    }));
}
module.exports = initController;
