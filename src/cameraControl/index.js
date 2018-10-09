/**
 * Created by Trubasa 1141521502@qq.com on 2018/10/8.
 */
import cameraControl from './cameraControl'
import utils from './utils'
/*console.log('utils',utils);*/
const cameraControlPlugin={
  install(Vue,options){
    Vue.component(cameraControl.name,cameraControl);
  }
}
if(typeof window!=='undefined'&&window.Vue){
  window.Vue.use(cameraControlPlugin);
}
if(typeof window!=='undefined'&&window.Vue){
  /*var element = document.createElement('div');
  element.innerHTML = '<div id="app">\n      <camera-control :camera="camera" :renderer="renderer"></camera-control>\n    </div>';
  document.body.appendChild(element)
  console.log(element);*/

  window.$makeDom=utils.makeDom
  window.$initVue=utils.initVue
  console.log($makeDom,$initVue);
  window.$makeDom();
}else{
  console.error('找不到windows对象');
}

export default cameraControlPlugin;
