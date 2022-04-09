## 仿Antd组件库
本项目模仿ant-design设计自己的组件库bull-design,目的是为了提高组件设计能力。<br>
<br>
技术栈：React Hooks + Typescript + axios + scss + jest
<br>
下载依赖：
```
npm install
```
启动Story book
```
npm run storyBook
```
也可以在自己的项目中使用下面的命令下载组件库
```
npm i bull-design
```
组件文档地址，使用netiffy自动部署的地址，推荐使用Chrome浏览器观看，可能需要外网才能看，
后面会在阿里云服务器上部署<br>
[bull-design文档](https://bulldesign.netlify.app)<br>
**计划完成的组件以及进度**：
- Button : 按钮组件 （已完成）
- Alert  : 消息提示组件（已完成）
- Menu   : 菜单组件，包括MenuItem和SubMenu(已完成)
- Tabs   : 选项卡组件,包括TabItem(已完成)
- Icon   : 图标组件，计划封装FontAwesome图标完成Icon组件（已完成）
- Modal  : 对话框(完成大体内容，需要优化动画)
- Input  ： 输入框(已完成)
- Select : 选择器（完成基本骨架）
- AutoComplete : 根据输入框的内容自动提示信息(已完成)
- Upload : 上传(完成)
- Carousel : 走马灯(轮播图)组件(基本完成，需要优化ScrollX动画的逻辑)
- Drawer ：抽屉组件
- Table  : 表格
- Calender : 日历组件
- MarkDown : MarkDown 编辑器

以及添加StoriesBook 完成组件文档化（未完成）<br>
最后计划上传至npm，可以利用下面命令下载使用(已完成)
