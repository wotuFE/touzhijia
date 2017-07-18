#运行项目
- - -
 **npm install     安装依赖**
  - - -
 **npm start       运行工程**
- - -
 **npm run build   打包**
- - -
 **默认端口 3000 在webpack.config.js中可修改**
- - -

- - -
 **企业级应用结构**  
 
    common              //公共文件/组件  
    static              //静态资源 
    xxx                 //组件文件夹 
    xxx                 //组件文件夹 
    home                //组件文件夹 
      -actions           //组件指令
      -omponents        //ui组件
        -styles          //ui组件样式
      -containers        //组件容器
      -reducers          //组件状态
    App.js              //入口
    index.tmpl.html     //模板
    mainReducer.js      //状态树
    Routes.js           //路由
    public              //打包



**ui渲染流程**
> html --> App.js --> Routes.js --> home文件夹中(containers容器组件) --> ui组件(components)


**状态(state)流程**
> reducers文件夹(创建初始化状态) --> 注入mainReduces.js状态树 --> ui组件使用(redux提供mapStateToProps连接方法获取想要的state) 


**指令(action)流程**
> actions文件夹(创建指令且合并至index.js) --> ui组件使用(redux提供mapDispatchToProps连接方法获取想要的指令) 
--> 执行action
记住，先mapStateToProps，再mapDispatchToProps.

**执行指令(action)会发生什么？**
> ui组件先获取到初始数据(initialState) --> 执行action改变它 --> 通过reducer文件中定义的switch判断是哪条action 
--> 返回给状态树新状态(mainReduces.js) 

>为什么新状态不说返回给组件对应的reducer？ 因为它已经合并到状态树了，这棵树mainReduces.js就代表着整个工程的状态.

>*如果是异步请求 那么那是在action中获取到的数据 初始化的state可以定义为{} || [].*

**状态树如何知道你执行的是哪条指令(action)?**
> 每条指令都有特定的type，通常使用大写的字母来辨识 例如：{type：'OPEN_ROOM'} 不要重复.


> 后续更新 搭建日期2017/7/5



