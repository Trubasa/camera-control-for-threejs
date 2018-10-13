
const utils={
  makeDom(id){
    let element=document.createElement('div');
    element.id=id?id:'app';
    element.innerHTML='<camera-control :camera="camera"></camera-control>'
    document.body.appendChild(element)
  },
  initVue(camera,selector){
    let app=new Vue({
      el:selector?selector:"#app",
      data(){
        return {
          camera:camera,
        }
      }
    });
    return app;
  }
}
export default utils;
