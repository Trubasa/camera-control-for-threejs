/**
 * Created by Trubasa 1141521502@qq.com on 2018/10/8.
 */
import cameraControl from './cameraControl'

const cameraControlPlugin={
  install(Vue,options){
    Vue.component(cameraControl.name,cameraControl);
  }
}
if(typeof window!=='undefined'&&window.Vue){
  window.Vue.use(cameraControlPlugin);
}

export default cameraControlPlugin;
