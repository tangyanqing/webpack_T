# webpack_T
> 一个简单直白的 webpack 新手案例

### 安装环境
* 安装 node.js
* 安装 淘宝镜像   $ npm install cnpm -g --registry=https://registry.npm.taobao.org
* 安装 依赖包   $npm install
* 安装 全局 webpack   $ npm install webpack -g  (mac 需要加sudo)

> 安装后，检测 $webpack -h

* 安装项目本地版本的webpack $ cnpm init （生成package.json文件）
* 安装本地项目 webpack  $ npm install webpack --save-dev

> 进入项目目录
> 确定已经有 package.json，没有就通过 npm init 创建
> 安装 webpack 依赖

* 查看 webpack 版本信息   $ npm info webpack
* 使用 Webpack 开发工具，要单独安装   $ npm install webpack-dev-server --save-dev

### 使用	
* 创建一个静态页面 index.html ，一个Js入口文件 entry.js

1. index.html

2. entry.js 

> 编译 entry.js 并打包到 bundle.js   $ webpack entry.js bundle.js

* 添加一个模块 module.js 并修改入口 entry.js

3. module.js ，修改 entry.js

> 再次，编译打包

### Loader

> webpack 本身只处理javascript 模块，通过loader转换后才能处理其他类型的文件

* loader 一般以 ***-loader 方式命名（css-loader、json-loader）

* 在页面中引入一个 css 文件，用css-loader 读取，再用style-loader 插入到页面

4. style.css ，修改 entry.js

> 安装 loader  $ npm install css-loader style-loader

> 再次，编译打包

### 配置文件 

* 在根目录创建 package.json ，添加webpack 需要的依赖

5. package.json

> 运行  $ npm install 

6. wabpack.config.js

> 配置文件 执行  $ webpack
 
> 命令行 执行 webpack entry.js bundle.js --module-bind 'css=style-loader!css-loader' 

### 插件

* BannerPlugin 内置插件，作用：给输出的文件头部添加注释信息

7. 修改 webpack.config.js （添加plugins）

> 配置文件 执行  $ webpack （打开 bundle.js，可以看到文件头部出现了我们指定的注释信息）

### 开发环境

* 当项目逐渐变大，webpack 的编译时间会变长，可以通过参数让编译的输出内容带有进度和颜色。

> $ sudo webpack --progress --colors

> 启动监听模式，实时更新修改的模块  $ webpack --progress --colors --watch


##  推荐使用 webpack2.0 


