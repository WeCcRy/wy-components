组件演示文档待开发。
支持按需导入和完整导入
使用前需要在全局中导入css
import '@wy_sh/wy-components/dist/wy-components.css'
# component
# Button
该组件大部分封装为样式封装，使其根据组件props改变样式，样式部分通过postcss编写,功能部分由vue的透传实现 <br/>
支持type,size,plain,round,circle,disabled,nativeType,autofocus,loading,icon

# Collpase
该组件由header和content组成，支持点击header后显示隐藏/content，支持手风琴显示（只显示单一的content），样式统一

# Icon
该组件二次封装了FontAwesome，支持FontAwesome的相关功能，同时支持设置type或color来统一样式风格

# Alert
由内容和关闭按钮组成，可根据type更改样式。可通过content传入固定内容，或使用插槽传入

# ToolTip
在popper上进行开发，支持popper显示在不同位置，支持hover，click，手动三种模式，手动模式需要调用实例中的open,close方法<br/>
支持打开延时openDelay和关闭延时closeDelay

# Dropdown
基于ToolTip实现Dropdown框，支持设置hideAfterSelect来点击后隐藏，通过传入对象来自定义Dropdown内容，支持文本和对象<br/>
{ label: string | VNode<br/>
  key: string | number<br/>
  disabled?: boolean<br/>
  divided?: boolean}<br/>

# Message
基于Tooltip实现Message框，通过createMessage函数创建，支持多种样式，自定义显示时间和手动显示隐藏。按下ESC后可关闭消息提示框，鼠标悬浮在提示框上时，会保持常驻。

# Input组件
支持原生事件，支持Prepend，Prefix，Suffix和Append，支持手动清除和密码框显示

# Switch组件
基于input type="checkbox"进行样式和功能设计。支持通过activeText/inActiveText自定义显示内容，通过activeValue/inActiveValue来影响组件emits的值，activeValue需要与modelValue对应。支持默认，large，small三种尺寸设计。

# Form组件
使用async-validator支持输入的表单验证