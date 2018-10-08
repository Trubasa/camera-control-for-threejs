<template>
  <div class="camera-control" v-if="camera&&camera.position" style="width: 200px;">
    <div class="mdui-panel" mdui-panel>

      <div class="mdui-panel-item">
        <div class="mdui-panel-item-header">
          <div class="mdui-panel-item-title">camera</div>
          <div class="mdui-panel-item-summary">相机参数</div>
          <i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
        </div>
        <div class="mdui-panel-item-body">
          <div class="mdui-textfield">
            <label class="mdui-textfield-label">position.x</label>
            <input class="mdui-textfield-input" type="number" v-model="camera.position.x"/>
          </div>
          <div class="mdui-textfield">
            <label class="mdui-textfield-label">position.y</label>
            <input class="mdui-textfield-input" type="number" v-model="camera.position.y"/>
          </div>
          <div class="mdui-textfield">
            <label class="mdui-textfield-label">position.z</label>
            <input class="mdui-textfield-input" type="number" v-model="camera.position.z"/>
          </div>
          <div class="mdui-textfield">
            <label class="mdui-textfield-label">up.x</label>
            <input class="mdui-textfield-input" type="number" v-model="camera.up.x"/>
          </div>
          <div class="mdui-textfield">
            <label class="mdui-textfield-label">up.y</label>
            <input class="mdui-textfield-input" type="number" v-model="camera.up.y"/>
          </div>
          <div class="mdui-textfield">
            <label class="mdui-textfield-label">up.z</label>
            <input class="mdui-textfield-input" type="number" v-model="camera.up.z"/>
          </div>
          <div class="mdui-textfield">
            <label class="mdui-textfield-label">lookAt</label>
            <div style="display: flex;">
              <input style="flex: 1;" class="mdui-textfield-input" type="number" v-model="lookAtParam.x"/>
              <input style="flex: 1;" class="mdui-textfield-input" type="number" v-model="lookAtParam.y"/>
              <input style="flex: 1;" class="mdui-textfield-input" type="number" v-model="lookAtParam.z"/>
            </div>

          </div>
        </div>
      </div>

      <!--<div class="mdui-panel-item">
        <div class="mdui-panel-item-header">
          <div class="mdui-panel-item-title">renderer</div>
          <div class="mdui-panel-item-summary">渲染器参数</div>
          <i class="mdui-panel-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
        </div>
        <div class="mdui-panel-item-body">
          <div class="mdui-textfield">
            <label class="mdui-textfield-label">position.x</label>
            <input class="mdui-textfield-input" type="number" v-model="camera.position.x"/>
          </div>
        </div>
      </div>-->
    </div>




  </div>
</template>

<script>
    export default {
      name: "camera-control",
      props:['camera','renderer'],
      data(){
        return {
          lookAtParam:{
            x:0,
            y:0,
            z:0
          }
        }
      },
      watch:{
        lookAtParam(val){
          this.renderer.lookAt(val.x,val.y,val.z);
        }
      },
      mounted(){

      }
    }
</script>

<style scoped>

</style>
