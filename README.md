# Exam System Teacher Readme Text

### 通过yarn add安装的依赖

1. nanoid——唯一标识符生成器
2. pubsub-js——消息订阅与发布
3. react-router-dom——React路由（@5.2.0）
4. antd——Ant Design企业级UI设计语言和React组件库
5. @ant-design/charts——React图表库Ant Design Charts
6. react-app-rewired——对create-react-app脚手架进行自定义配置的社区解决方案
7. customize-cra——为了能够使用react-app-rewired@2.x而需要的插件
8. babel-plugin-import——按需加载组件代码和样式的Babel插件
9. less——向后兼容的 CSS 扩展语言库
10. less-loader—— 用于处理编译.less文件，将其转为css文件代码（@7.1.0）
11. @craco/craco——对create-react-app脚手架进行自定义配置的社区解决方案（Ant Design官方文档推荐）
12. craco-less——支持覆写webpack loader相关配置的库
13. redux——专门用于做状态管理的JS库
14. redux-thunk——Redux异步中间件
15. react-redux——专门用来简化react应用中使用redux的库
16. redux-devtools-extension——结合Chrome浏览器插件调试Redux的工具依赖包
17. react-highlight-words——React中用于高亮展示某段文本的组件
18. draft-js——一款用来构建React富文本编辑器的框架
19. axios——一个基于 promise 的网络请求库
20. array-move——用于数组项移动的函数库
21. react-sortable-hoc——一个React的排序组件库

### 项目运行

1. 安装最新的稳定版`Node.js`，下载地址`https://nodejs.org/en/`。安装后在终端中运行 `node -v` 可以看到版本号，建议下载 14.x 最新稳定版
2. 通过`https://git-scm.com/`安装，安装后可以在终端执行 `git --version` 命令确认版本为 2.0 以上（VSCode安装插件-`GitLens`和`Git History`后，可以在VSCode中绑定GitHub账号并实现仓库管理和同步上传）
4. 在该项目根目录下打开终端，输入`npm install`安装项目依赖（有可能会比较慢，可以考虑翻个墙或者更换淘宝镜像，亦或者替换为第5步）
5. 在终端通过`npm i -g create-react-app`命令，全局安装React脚手架，用`create-react-app hello-react`创建一个新项目，将项目源码中的`public`、`src`、`craco.config.js`和`README.md`文件和文件夹粘贴替换到新项目中，通过`yarn add xxx`安装依赖，例如`yarn add nanoid`（具体需要的依赖详见上一节“通过yarn add安装的依赖”中所述，或根据`package.json`的`dependencies`安装，该步骤可替换第4步）
6. 在该项目根目录下打开终端，输入`yarn start`运行项目（没有yarn命令的话安装一下，或者用npm应该也可以的）
7. 项目启动后，登录用户名：Zhang San，密码：zhangsan

### 项目结构

```
|—— node_modules //相关依赖
|—— public //静态资源文件夹
|—————— favicon.icon //网站页签图标
|—————— index.html //主页面
|—— src //源码文件夹
|—————— assets //资源文件夹
|—————————— iconfont.js //iconfont的图标资源
|—————— components //公共组件文件夹
|—————————— Frame //布局框架组件
|—————————— InfoTable //表格通用样式组件
|—————— pages //页面文件夹
|—————————— //旗下包含登录及导航所对应的七个页面文件夹
|—————————————— //单页面文件夹下的components中为该页面中仅供自身使用的组件
|—————— App.js //App组件（包裹所有项目组件的最外层父组件，直接包裹布局框架）
|—————— App.less //App组件的样式
|—————— index.js //入口文件
|—————— router.js //路由配置
|—— //其他的配置文件
```

