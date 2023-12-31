# 2023FZU_SE_sudoku
这个仓库是一个利用双缓冲机制完成多个数独并发生成的web端数独小游戏。
以下是关于这个游戏的一些说明：
## 使用说明
* **我应该如何开始游戏？**
请将文件**完整地**下载至自己的个人电脑，双击index.html，即可愉快地开始游戏。
* **每个文件的作用？**
sudo.js 实现数独生成和绘图的脚本文件
index.html 游戏的主线程，通过调用sudo.js中定义好的函数实现交互
styles.css 美化网页样式的文件
sudo.ico tab上的图标文件
* **视图解释**
当你输入有冲突的数字时，你输入的数字会和该冲突数字同时变红，请修改它。
当你成功完成任意一个9×9的数独时，网页上端将会弹出 You Win!!! 的信息提示。

## 功能展示
* **双缓冲**
你可以通过勾选左上角双缓冲选择框来选择是否使用双缓冲机制生成数独。
* **难度**
有 容易、一般、较难、困难 四个可选难度等级，难度根据空白格数量定义。
* **生成新数独**
点按该按钮，页面顶端将会弹出提示询问是否确认，若确认，将根据选取的难度同时重新生成全部九个数独。
* **编辑数独**
点按该按钮，即可进入自定义数独模式，可将你从他处获取的数独题输入此处。
输入完毕后务必点击 结束编辑 。
* **显示提示**
点击该按钮，将显示每个格子的候选数。同时，你的编辑板也会自动屏蔽冲突数字。
* **全部清除**
点击该按钮，页面顶端将会弹出提示询问是否确认，若确认，将会清除所有九个数独已填入的数字，请谨慎。
* **编辑板**
当你点击数独中的空白格时，将会自动弹出可供输入数字的编辑板，请选择你想要填入的数字。
如果你想什么也不想填就退出编辑板，那么请点击编辑板最下方的长条，或者任意该数独内的**不可编辑**数字；
如果你想临时换一个空白格编辑，请直接点击那个空白格，编辑板会自动切换至那个空白格处。
## 2023.10.7 Update
新增数独求解功能，可支持求解自定义数独！
如果自定义数独无解，网页顶部将弹出 No solution! 信息提示。