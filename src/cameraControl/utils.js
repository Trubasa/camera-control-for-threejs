/**
 * Created by Trubasa 1141521502@qq.com on 2018/10/9.
 */
const utils={
  makeDom(idVal){
    let element=document.createElement('div')
    element.innerHTML=`<div id="${idVal?idVal:'app'}">
      <camera-control :camera="camera" :renderer="renderer"></camera-control>
    </div>`;
    document.body.appendChild(element)
  },
  initVue(camera,selector){
    let app=new Vue({
      el:'#'+selector?selector:'app',
      data(){
        return {
          camera:camera
        }
      }
    })
    return app;
  }
}
export default utils
