(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{506:function(n,t,e){"use strict";e.r(t);var s=e(4),a=Object(s.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200622155936231.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgyNDgzOQ==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),n._v(" "),e("p",[e("strong",[n._v("报错")]),n._v("：超过最大更新深度。当组件在componentWillUpdate或componentDidUpdate中重复调用setState时，就会发生这种情况。React限制嵌套更新的数量，以防止无限循环。\n在componetDidMount和componentDidUpdate中：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("componentDidMount(): void {\n    const winW = document.documentElement.clientWidth || document.body.clientWidth;\n    const winH = document.documentElement.clientHeight || document.body.clientHeight;\n    const width = winW/2;\n    const height = winH/4;\n    const cx = winW/8;\n    const cy = winH/10;\n    this.setState({width,height,cx,cy})\n\n    if(this.props.pieName === 'dayElectric'){\n       var responece:object = FloorData.dayElectric.map((item:Electric,index:number)=>item)\n    }\n    if(this.props.pieName === 'monthElectric'){\n      var responece:object = FloorData.monthElectric.map((item:Electric,index:number)=>item)\n    }\n    if(this.props.pieName === 'yearElectric'){\n      var responece:object = FloorData.yearElectric.map((item:Electric,index:number)=>item)\n  \n    }\n\n  }\n\n  componentDidUpdate(prevProps: Readonly<RouteComponentProps>, prevState: Readonly<{}>, snapshot?: any): void {\n    const winW = document.documentElement.clientWidth || document.body.clientWidth;\n    const winH = document.documentElement.clientHeight || document.body.clientHeight;\n    const width = winW/2;\n    const height = winH/4;\n    const cx = winW/14;\n    const cy = winH/14;\n    this.setState({width,height,cx,cy})\n  }\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br")])]),e("p",[e("strong",[n._v("修改后：")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v(" // 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用\n  static getDerivedStateFromProps(nextProps:RouteComponentProps<{type:string}>, prevState:any) {\n    var responeceDate:any[] =[];\n    const winW = document.documentElement.clientWidth || document.body.clientWidth;\n    const winH = document.documentElement.clientHeight || document.body.clientHeight;\n    const width = winW/2;\n    const height = winH/4;\n    const {type} = nextProps;\n    if(type === '0'){\n      responeceDate = FloorData.dayElectric\n    }else if(type === '1'){\n      responeceDate = FloorData.monthElectric\n    }else if(type === '2'){\n      responeceDate = FloorData.yearElectric\n    }\n      return {//返回一个对象来更新 state，如果返回 null则不更新任何内容。\n        data:responeceDate,\n        width,height\n      };\n    // return null;\n  }\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br")])]),e("p",[e("strong",[e("strong",[n._v("componentDidMount()")])]),n._v("\n会在组件挂载后(插入DOM树中) 立即调用。如需通过网络请求获取数据，此处是实例化请求的好地方\n你可以在 componentDidMount() 里直接调用 setState()。它将触发额外渲染，但此渲染会发生在浏览器更新屏幕之前。如此保证了即使在 render() 两次调用的情况下，用户也不会看到中间状态。请谨慎使用该模式，因为它会导致性能问题。")]),n._v(" "),e("p",[e("strong",[n._v("componentDidUpdate()")]),n._v("\n会在更新后会被立即调用。首次渲染不会执行此方法。\n你也可以在 componentDidUpdate() 中直接调用 setState()，"),e("strong",[n._v("但请注意它必须被包裹在一个条件语句里")]),n._v("，正如上述的例子那样进行处理，否则会导致死循环。它还会导致额外的重新渲染，虽然用户不可见，但会影响组件性能。")]),n._v(" "),e("p",[e("strong",[n._v("conponentWillUnmount()")]),n._v("\n会在组件卸载及销毁之前调用。在此方法中执行必要的清理操作，例如清除timer，取消网络请求或清除在componentDidMount() 中创建的订阅等。\ncomponentWillUnMount() 中不应该调用setState()，因为该组件将永远不会重新渲染，组件实例卸载后将永远不会再挂载它。")]),n._v(" "),e("p",[e("strong",[n._v("static getDerivedStateFromProps(prps,state)")]),n._v("\n会因为props和state发生了改变而调用，会在初始化挂载及后续更新时都会被调用，它应返回一个对象来更新state，如果返回null则不更新任何内容。\n用例：即state的值在任何时候都取决于props\n例子：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v(" state = {\n    data:[],\n    width:0,\n    height:0,\n    pieName:'dayElectric',\n  }\n\n  componentDidMount(): void {\n    console.log('componentDidMount')\n  }\n\n  // 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用\n  static getDerivedStateFromProps(nextProps:RouteComponentProps<{type:string}>, prevState:any) {\n    console.log('getDerivedStateFromProps',nextProps)\n    var responeceDate:any[] =[];\n    const winW = document.documentElement.clientWidth || document.body.clientWidth;\n    const winH = document.documentElement.clientHeight || document.body.clientHeight;\n    const width = winW/2;\n    const height = winH/4;\n    const {type} = nextProps;\n    if(type === '0'){\n      responeceDate = FloorData.dayElectric\n    }else if(type === '1'){\n      responeceDate = FloorData.monthElectric\n    }else if(type === '2'){\n      responeceDate = FloorData.yearElectric\n    }\n    return {//返回一个对象来更新 state，如果返回 null则不更新任何内容。\n      data:responeceDate,\n      width,height\n    };\n    // return null;\n  }\n\n  componentDidUpdate(prevProps: Readonly<RouteComponentProps<{ type: string }>>, prevState: Readonly<{}>, snapshot?: any): void {\n    console.log('componentDidUpdate')\n  }\n\n  componentWillUnmount(): void {\n    console.log('componentWillUnmount')\n  }\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br"),e("span",{staticClass:"line-number"},[n._v("32")]),e("br"),e("span",{staticClass:"line-number"},[n._v("33")]),e("br"),e("span",{staticClass:"line-number"},[n._v("34")]),e("br"),e("span",{staticClass:"line-number"},[n._v("35")]),e("br"),e("span",{staticClass:"line-number"},[n._v("36")]),e("br"),e("span",{staticClass:"line-number"},[n._v("37")]),e("br"),e("span",{staticClass:"line-number"},[n._v("38")]),e("br"),e("span",{staticClass:"line-number"},[n._v("39")]),e("br"),e("span",{staticClass:"line-number"},[n._v("40")]),e("br"),e("span",{staticClass:"line-number"},[n._v("41")]),e("br")])]),e("p",[n._v("运行结果：\n//第一次： getDerivedStateFromProps componentDidMount\n//第二次更新：getDerivedStateFromProps componentDidUpdate\n"),e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200623104537777.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgyNDgzOQ==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),n._v(" "),e("p",[e("strong",[n._v("shouldComponentUpdate(nextProps,nextState)")]),n._v("\n根据 shouldComponentUpdate() 的返回值，判断 React 组件的输出是否受当前 state 或 props 更改的影响。默认行为是 state 每次发生变化组件都会重新渲染。\n此方法仅作为性能优化的方式而存在。不要企图依靠此方法来“阻止”渲染，因为这可能会产生 bug。你应该考虑使用内置的 PureComponent 组件，而不是手动编写 shouldComponentUpdate()。PureComponent 会对 props 和 state 进行浅层比较，并减少了跳过必要更新的可能性。")]),n._v(" "),e("p",[n._v("在class组件中写了getDerivedStateFromProps()生命周期函数就不能同时写componentWillMount和componentWillUpdate生命周期，不然会报以下错误：")]),n._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/2020062310360939.png",alt:"在这里插入图片描述"}})]),n._v(" "),e("p",[e("strong",[n._v("警告")]),n._v(":使用新的组件api的组件将不会调用不安全的遗留生命周期\n这是因为React16.8及以上版本将getDerivedStateFromProps该生命周期函数代替了componentWillMount和componentWillUpdate生命周期")])])}),[],!1,null,null,null);t.default=a.exports}}]);