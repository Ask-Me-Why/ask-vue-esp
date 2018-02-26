#关于vuex

dispatch 触发 actions.js里面相关的函数

commit 触发mutations里面相关的函数

actions.js 异步获取数据
mutations.js 里面对数据改变或数据状态更新

getters.js里面是操作已有的本地数据的方法

#关于detail页面

在vue中computed先于created触发

所有数据是共享的

如果进入页面之前公共数据是初始化的则去公共数据里面需找相关的数据，无需请求接口

如果进入页面之前公共数据未初始化的则去请求接口获取相关数据
