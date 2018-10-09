/**
 * Created by Trubasa 1141521502@qq.com on 2018/10/8.
 */
import cameraControl from './cameraControl'
import utils from './utils'
import './style.css'

const cameraControlPlugin={
  install(Vue,options){
    Vue.component(cameraControl.name,cameraControl);
  }
}
if(typeof window!=='undefined'&&window.Vue){
  window.Vue.use(cameraControlPlugin);

  window.$utils=utils;
}else{
  console.log('没有window或者Vue');
}

export default cameraControlPlugin;
