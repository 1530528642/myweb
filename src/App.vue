<template>
   <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!--<HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <div class="is_app">
      <el-menu
                  active-text-color="#ffd04b"
                  background-color="#545c64"
                  class="el-menu-vertical-demo"
                  default-active="2"
                  text-color="#fff"
                  @open="handleOpen"
                  @close="handleClose"
                >
                    <div v-for="(items, index) in menulist" :key="index">
                        <el-sub-menu :index="items.url" v-if="items.children.length > 0">
                                <template #title>
                                  <el-icon><location /></el-icon>
                                  <span>{{items.name}}</span>
                                </template>
                              <div v-for="(itemss, indess) in items.children" :key="indess">
                                <el-sub-menu  :index="items.url+1" v-if="itemss.children.length > 0">
                                      <template #title>
                                        <span>{{itemss.name}}</span>
                                      </template>
                                    <el-menu-item v-for="(itemsss, indesss) in itemss.children"  :index="itemsss.url"  :key="indesss">
                                      {{itemsss.name}}
                                    </el-menu-item>
                                </el-sub-menu>
                              <el-menu-item  :index="itemss.url+1" v-else>
                                      {{itemss.name}}
                                </el-menu-item>
                              </div>
                        </el-sub-menu>
                        <el-menu-item :index="items.url" v-else>
                          <span>{{items.name}}</span>
                        </el-menu-item>
                    </div>
      </el-menu>
  </div>
  <router-view></router-view>
</template>
<script setup lang="ts">
import {ref, reactive, onMounted} from "vue"
import axios from "axios"
import { Location,Document,Menu as IconMenu,Setting } from '@element-plus/icons-vue'

  let menulist = ref([])
  onMounted(()=>{
  axios.post('menus/getmenuslist', {}).then(function(response){
                menulist.value = response.data.data
          })
          .catch(function(err){
            console.log(err)
  })
})
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.is_app{
  width: 100%;
  height: 100%;
  display: flex;
}
.el-menu-vertical-demo{
  width: 210px;
  height: 100%;
  display: inline-block;
}
</style>
