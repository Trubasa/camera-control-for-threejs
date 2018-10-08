<template>
  <div id="app">
    <camera-control :camera="camera" :renderer="renderer"></camera-control>
  </div>
</template>

<script>

  // var renderer=null;   // 渲染器
  var camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,1000);
  camera.position.z = 5;
  var renderer=new THREE.WebGLRenderer({
    antialias: true //抗锯齿
  });
  renderer.setSize(window.innerWidth,window.innerHeight)
  console.log('camera',camera);
  console.log('renderer',renderer);
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      camera:camera,
      renderer:renderer
    }
  },
  mounted(){
    var scene=null;  //场景
    var that=this;
    function initThree() {
      scene=new THREE.Scene();
      // camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,1000);


      document.body.appendChild(renderer.domElement);
    }

    var geometry=null; //几何结构
    var material=null; //材料
    var color1=new THREE.Color("tan");
    var color2=new THREE.Color("red");
    function line(){
      geometry=new THREE.Geometry();
      material=new THREE.LineBasicMaterial({
        vertexColors:true //顶点颜色
      })
      geometry.vertices.push(-100,0,100);
      geometry.vertices.push(100,0,-100);
      geometry.colors.push(color1,color2);
      var line=new THREE.Line(geometry,material,THREE.LineSegments);
      scene.add(line)
    }

    var cube=null
    function makeCube() {
      geometry=new THREE.CubeGeometry(2,2,2)
      material=new THREE.MeshBasicMaterial({color:'tan'});
      cube=new THREE.Mesh(geometry,material)
      scene.add(cube)
    }

    function changing() {
      cube.rotation.x+=0.01;
      cube.rotation.y+=0.01;
      requestAnimationFrame(changing);
    }

    function render(){
      renderer.render(scene,camera);
      requestAnimationFrame(render);
    }
    initThree();
    // line();
    makeCube();
    changing()
    render();
  }
}
</script>

<style>
#app {
  position: fixed;
  top: 0;
  bottom: 0;
  background-color: rgb(255, 255, 255);
  padding: 10px;
}
body,html{
  padding: 0;
  margin: 0;
  list-style: none;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
