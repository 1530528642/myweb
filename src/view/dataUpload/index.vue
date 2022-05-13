<template>
 <div>
     <el-upload action="#" list-type="picture-card"  :on-change="handleSuccess" :auto-upload="false">
            <el-icon><Plus /></el-icon>

            <template #file="{ file }">
              <div>
                  <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
              </div>
            </template>
          </el-upload>
          <button style="height: 30px;" @click="sotoken">请求token是否过期</button>
 </div>
</template>
<script setup lang="ts">
import {ref, reactive, onMounted} from "vue"
import serveapi from "../../http/api"
import { Delete, Download, Plus, ZoomIn } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import type { UploadFile, UploadFiles } from 'element-plus'

const handleSuccess = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
      const data = new FormData()
      data.append('file', uploadFile.raw)
      serveapi.isimg(data).then((res: any)=>{
                    console.log(res.data)
                })
}

const sotoken = () => {
        serveapi.getpage({}).then(function(response: any){
                    if (response.data.status !== 200) {
                        ElMessage(response.data.msg)
                    } else {
                        ElMessage(response.data.msg)
                    }
            })
            .catch(function(err: any){
        })
}
</script>
<style>
</style>
