const Mock = require('mockjs');
const { Random } = Mock;

module.exports = (ctx) => {
  const arr = ['新手福利，更高收益','活期灵活存取','由 @name 提供',''];
  const type = ['新手','活期','品牌','精选']
  const num1 = Random.integer(1,4)
  const num2 = Random.integer(1,4)
  const data = Mock.mock({
    code: '666',
    status: 'success',
    var: {
      'platformRecommend': [{
        id: Random.integer(1,100),
        name: Random.cname()+'贷',
        img: 'yixindai.png',
        desc: '安全评级 BB',
        returnRate: Random.float(5,20,2,2),
        time: Random.integer(5,100),
        limit: Random.float(1,100,1,1)
      },
      {
        id: Random.integer(1,100),
        name: Random.cname()+'贷',
        img: 'yixindai.png',
        desc: '安全评级 BB',
        returnRate: Random.float(5,20,2,2),
        time: Random.integer(5,100),
        limit: Random.float(1,100,1,1)
      }],
      'debtRecommend': [{
        id: Random.integer(1,100),
        name: Random.cname()+'贷',
        type: type[num1-1], // 1新手,2活期,3品牌,4精选
        desc: arr[num1-1],
        returnRate: Random.float(5,20,2,2),
        time: Random.integer(5,100),
        limit: Random.float(1,100,1,1)
      },
      {
        id: Random.integer(1,100),
        name: Random.cname()+'贷',
        type: type[num2-1], // 1新手,2活期,3品牌,4精选
        desc: arr[num2-1],
        returnRate: Random.float(5,20,2,2),
        time: Random.integer(5,100),
        limit: Random.float(1,100,1,1)
      }],
      banner: '87db755c047598fdec13123ba659ea7a-20170706.png'
    }
  })
  ctx.body = data
}