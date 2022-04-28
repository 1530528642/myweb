<template>
  <!-- <el-row class="tac">
    <el-col :span="12"> -->
      <div class="homes">
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
                        <el-sub-menu :index="index">
                                <template #title>
                                  <el-icon><location /></el-icon>
                                  <span>{{items.name}}</span>
                                </template>
                              <div v-for="(itemss, indess) in items.children" :key="indess">
                                  <el-menu-item-group :title="itemss.name">
                                    <el-menu-item v-for="(itemsss, indesss) in itemss.children" :key="indesss">
                                      {{itemsss.name}}
                                    </el-menu-item>
                                  </el-menu-item-group>
                              </div>
                        </el-sub-menu>

                        <!-- <el-menu-item :index="index">
                          <span>{{items.name}}</span>
                        </el-menu-item> -->
                    </div>
                </el-menu>
                <router-view/>

        <el-upload action="#" list-type="picture-card"  :on-change="handleSuccess" :auto-upload="false">
            <el-icon><Plus /></el-icon>

            <template #file="{ file }">
              <div>
                <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
                <span class="el-upload-list__item-actions">
                  <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)"
                  >
                    <el-icon><zoom-in /></el-icon>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleDownload(file)"
                  >
                    <el-icon><Download /></el-icon>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleRemove(file)"
                  >
                    <el-icon><Delete /></el-icon>
                  </span>
                </span>
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
    // console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
    // console.log(key, keyPath)
  }
let menulist = ref([])
const dialogImageUrl = ref('')
const disabled = ref(false)

const handleRemove = (file: UploadFile) => {
  console.log(file)
}

const handlePictureCardPreview = (file: UploadFile) => {
  dialogImageUrl.value = file.url!
}

const handleDownload = (file: UploadFile) => {
  console.log(file)
}

const handleSuccess = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
      const data = new FormData()
      data.append('file', uploadFile.raw)
      axios.post('goods/isimg', data).then((res)=>{
                    console.log(res.data)
                })
}
onMounted(()=>{
  axios.post('menus/getmenuslist', {}).then(function(response){
                 menulist.value = response.data.data
                //  console.log(menulist)
          })
          .catch(function(err){
            console.log(err)
  })
})

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
  width: 250px;
  height: 100%;
  display: inline-block;
}
</style>