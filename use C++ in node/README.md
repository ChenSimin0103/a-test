通过将 C++ 文件包装为nodejs插件 来使用

使用node-gyp 插件
需要配置 python 2.7+ 的环境

步骤：
1. 写一份 binding.gyp 的配置文件
2. 使用 `node-gyp configure` 生成build文件夹
3. 使用 `node-gyp build` build 出二进制文件
4. 通过 `require('./build/Release/addon.node')` 的方式导入c++ 模块使用

参考：(https://blog.csdn.net/liuyaqi1993/article/details/78729247)