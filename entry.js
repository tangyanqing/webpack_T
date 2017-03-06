/**
 * Created by yqtang on 17/3/3.
 */
//require("!style-loader!css-loader!./style.css") // 载入 style.css
require("./style.css") // 方法二
/**
 * 编译打包 命令
 * 方法一：webpack entry.js bundle.js
 * 方法二：webpack entry.js bundle.js --module-bind 'css=style-loader!css-loader'
 */

document.write('Is works!')
document.write(require('./module.js')) // 添加模块