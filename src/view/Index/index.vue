<template>
  <!-- <el-row class="tac">
    <el-col :span="12"> -->
      <div class="homes">
                ``<el-menu
                  active-text-color="#ffd04b"
                  background-color="#545c64"
                  class="el-menu-vertical-demo"
                  default-active="2"
                  text-color="#fff"
                  @open="handleOpen"
                  @close="handleClose"
                >
                  <el-sub-menu index="1">
                    <template #title>
                      <el-icon><location /></el-icon>
                      <span>Navigator One</span>
                    </template>
                    <el-menu-item index="1-1">item one</el-menu-item>
                    <el-menu-item index="1-2">item one</el-menu-item>
                    <el-menu-item index="1-3">item three</el-menu-item>
                    <el-sub-menu index="1-4">
                      <template #title>item four</template>
                      <el-menu-item index="1-4-1">item one</el-menu-item>
                    </el-sub-menu>
                  </el-sub-menu>
                  <el-menu-item index="2">
                    <el-icon><icon-menu /></el-icon>
                    <span>Navigator Two</span>
                  </el-menu-item>
                  <el-menu-item index="3" disabled>
                    <el-icon><document /></el-icon>
                    <span>Navigator Three</span>
                  </el-menu-item>
                  <el-menu-item index="4">
                    <el-icon><setting /></el-icon>
                    <span>Navigator Four</span>
                  </el-menu-item>
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
import {ref} from "vue"
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
interface  filetype {
  name: String;
  uid: Number;
  url: any
}
  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }


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
      // console.log(uploadFile.name,uploadFile.uid,uploadFile.url)
      // let filelis:filetype = {
      //     name: uploadFile.name as String,
      //     uid: uploadFile.uid as Number,
      //     url: uploadFile.url
      // }
      const data = new FormData()
      data.append('file', uploadFile)
      axios.post('goods/isimg', {}).then(function(response){
                    console.log(response)
                })
                .catch(function(err){
                  console.log(err)
        })
}

  const sotoken = () => {
      axios.post('users/getpage', {}).then(function(response){
                  if (response.data.status !== 200) {
                      ElMessage(response.data.msg)
                  } else {
                      ElMessage(response.data.msg)

                  }
          })
          .catch(function(err){
            console.log(err)
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