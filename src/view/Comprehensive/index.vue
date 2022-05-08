<template>
  <!-- <el-row class="tac">
    <el-col :span="12"> -->
      <div class="homes">
                <el-menu
                  active-text-color="#ffd04b"
                  background-color="#545c64"
                  class="el-menu-vertical-demo"
                  :default-active="defaultActive"
                  text-color="#fff"
                  router="true"
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
                              <el-menu-item  :index="itemss.url" v-else>
                                      {{itemss.name}}
                              </el-menu-item>
                              </div>
                        </el-sub-menu>
                        <el-menu-item :index="items.url" v-else>
                          <span>{{items.name}}</span>
                        </el-menu-item>
                    </div>
                </el-menu>
                <router-view/>
      </div>

    <!-- </el-col>
  </el-row> -->
</template>

<script lang="ts" setup>
import {ref, reactive, onMounted} from "vue"
import axios from "axios"
import { Delete, Download, Plus, ZoomIn } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import type { UploadFile, UploadFiles } from 'element-plus'

import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'

const defaultActive = ref('/dataUpload')

let menulist: any= ref([])

let menudata: any = ref({
  dataUpload: '/dataUpload',
  lineStatistics: '/lineStatistics',
  menuone: '/serviceCentre/menuone'
})

const recursion = (data:any[]) => {
  data.forEach(it => {
      if(it.children && it.children.length > 0) {
          recursion(it.children)
      } else {
        it.url = menudata.value[it.url]
      }
  })
  return data
}

onMounted(()=>{
  axios.post('menus/getmenuslist', {}).then(function(response){
                menulist.value = recursion(response.data.data)
          })
          .catch(function(err){
            console.log(err)
  })
})



</script>

<style>
.homes{
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