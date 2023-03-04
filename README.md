### vite-svg-sprite-image


# 基于vite构建vue3插件,实现svg雪碧图功能。开发者可以复用一套基础icon，可以用于换肤、二次封装icon组件。

# 使用
 1. npm install vite-svg-sprite-image
 2. main.js中引入 vite-svg-sprite-image , 以Vue插件注册全局组件的形式使用


# 该版本为初版，持续维护中。


### 绘制表格 Tables

| 参数名       | 说明   |  类型  | 可选 | 默认值 |
| --------   | -----:  | :----:  |:----:|:----:
| address      | 必选,svg基于项目根路径的地址或者svg可解析字符串   |   string     | - | -
| color      | 可选,svg图片填充颜色   |   string     | - | -
| stroke        |  可选，边框颜色  |    string  | - | -
| width        |    可选,svg宽度   |  string  | - | -
| height        |    可选,svg高度    |  string  | - |  -