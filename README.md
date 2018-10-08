# camera-control

> 动态设置threejs的position参数

[在线demo（example目录下）](https://trubasa.github.io/camera-control-for-threejs/example/index.html)

## 使用

引用依赖，mdui、vue、threejs、camera-control-js
```html
<link rel="stylesheet" href="//cdnjs.loli.net/ajax/libs/mdui/0.4.1/css/mdui.min.css">
<script src="//cdnjs.loli.net/ajax/libs/mdui/0.4.1/js/mdui.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
<script src="../static/three.js/three.js"></script>
<script src="../dist/camera-control.js"></script>
```

标签
```html
 <camera-control :camera="camera"></camera-control>
```

实际使用请参考example目录下的index.html

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
