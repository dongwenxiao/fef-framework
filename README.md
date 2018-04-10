# FE Factory - Framework

## 目录

```
/build              // webpack
/config             // 程序配置
/src                // 框架源码
/src/components     // 组件库
/tool               // 转换工具
/dist               // 打包结果
/ini                // App初始化数据
```

## 自动生成文件

**容器**

>```/src/containers/auto__*``` </br>
>```/src/containers/auto__index.js```

**逻辑**

> ```/src/redux/logic/auto__*/*```</br>
> ```/src/redux/logic/auto__*/index.js```</br>
> ```/src/redux/auto__action-types.js```

**路由**

> ```/src/router/auto__routes.js```

**动作**

> ```/src/auto/all-default-actions.js```
> ```/src/auto/user-fetch-actions.js```


## TODO

* 思考包装后的组件如何暴露他的```__events``` \ ```props```
* convert tool 改成传递整个 page config [✓]
* 如果用非本页的state，如何查找载入
* 使用模拟接口，做一个公共Fetch测试 [✓]
* action返回promise [✓]
* 使用自写代码扩展：配置require或import
* Auth问题：可以自行附加一个登陆也，把token放在cookie、localstroge里面