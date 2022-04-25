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

        <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        list-type="picture"
      >
        <el-button type="primary">Click to upload</el-button>
        <template #tip>
          <div class="el-upload__tip">
            jpg/png files with a size less than 500kb
          </div>
        </template>
      </el-upload>

        <button style="height: 30px;" @click="sotoken">请求token是否过期</button>
      </div>
     
    <!-- </el-col>
  </el-row> -->
</template>

<script lang="ts" setup>
import {ref} from "vue"
import axios from "axios"
import { ElMessage } from 'element-plus'
import type { UploadProps, UploadUserFile } from 'element-plus'
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

  const fileList = ref<UploadUserFile[]>([])

  const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
      console.log(uploadFile, uploadFiles)
    }

  const handlePreview: UploadProps['onPreview'] = (file) => {
      console.log(file)
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