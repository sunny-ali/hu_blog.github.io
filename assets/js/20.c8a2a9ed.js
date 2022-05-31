(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{502:function(e,s,t){"use strict";t.r(s);var a=t(4),p=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("本项目：React 版本 16.13.1，使用create-react-app脚手架工具搭建。")]),e._v(" "),t("p",[e._v("在react中使用less文件运行不会报错，但是样式会无效")]),e._v(" "),t("p",[e._v("原因：create-react-app是由React官方提供并推荐使用构建新的React单页面应用程序的最佳方式,其构建的项目默认是不支持less的,需要我们手动集成")]),e._v(" "),t("p",[e._v("解决：")]),e._v(" "),t("p",[e._v("安装less和less-loader插件包")]),e._v(" "),t("p",[t("code",[e._v("npm install less-loader less")])]),e._v(" "),t("p",[e._v("暴露webpack配置文件，注意eject命令是一次性命令，运行后无法恢复")]),e._v(" "),t("p",[t("code",[e._v("npm run eject")])]),e._v(" "),t("p",[e._v("这时项目结构就会多出了一个config文件，以及package.json 文件中多了很多内容")]),e._v(" "),t("p",[e._v("接下来就是配置less-loader了")]),e._v(" "),t("p",[e._v("在config/webpack.config.js文件中修改以下配置：")]),e._v(" "),t("p",[e._v("1，修改style files regexes（样式文件正则），在这部分最后添加如下两行代码：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200523223139106.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgyNDgzOQ==,size_16,color_FFFFFF,t_70",alt:""}})]),e._v(" "),t("p",[e._v("2，修改 getStyleLoaders 函数，添加代码:\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200523223212357.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgyNDgzOQ==,size_16,color_FFFFFF,t_70",alt:""}})]),e._v(" "),t("p",[e._v("3，最后一处修改大约在451行左右，模仿代码中提供的sassRegex代码，添加如下代码：\n"),t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200523223524300.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgyNDgzOQ==,size_16,color_FFFFFF,t_70",alt:""}})]),e._v(" "),t("p",[e._v("就这样webpack.config.js文件修改完成，重新运行就可以看到效果了~")])])}),[],!1,null,null,null);s.default=p.exports}}]);