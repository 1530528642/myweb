<template>
  <!-- <el-row class="tac">
    <el-col :span="12"> -->
      <div class="homes">
                <!-- <el-menu
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
                </el-menu> -->
                <router-view/>

        <el-upload action="#" list-type="picture-card"  :on-change="handleSuccess" :auto-upload="false">
            <el-icon><Plus /></el-icon>

            <template #file="{ file }">
              <div>
                  <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
              </div>
            </template>
          </el-upload>
          <button style="height: 30px;" @click="sotoken">请求token是否过期</button>``
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
  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }

// let menulist = ref([])
interface fileType {

}
const handleSuccess = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
      const data = new FormData()
      console.log(uploadFile.raw)
      console.log(uploadFile)
      data.append('file', uploadFile.raw)
      axios.post('goods/isimg', data).then((res)=>{
                    console.log(res.data)
                })
}

// onMounted(()=>{
//   axios.post('menus/getmenuslist', {}).then(function(response){
//                 menulist.value = response.data.data
//           })
//           .catch(function(err){
//             console.log(err)
//   })
// })

const sotoken = () => {
      axios.post('users/getpage', {}).then(function(response){
                  if (response.data.status !== 200) {
                      ElMessage(response.data.msg)
                  } else {
                      ElMessage(response.data.msg)
                  }
          })
          .catch(function(err){
            console.log(err, 99999999)
      })
}
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