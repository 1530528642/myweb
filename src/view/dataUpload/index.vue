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
import SparkMD5 from "spark-md5"
import { reject } from "lodash"
const handleSuccess = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
    // console.log(uploadFile.raw?.slice())
    let readFile = new FileReader(),
        max = 1024 * 100,
        count = Math.ceil(<number>uploadFile.size / max),
        sport,
        Hash,
        filenase,
        index = 0,
        chunks:any[] = [],
        Files = uploadFile
    
    if (count > 100) {
        max = <number>uploadFile.size / 100
        count = 100
    }
    
    const hashFile = new Promise((relove, reject) => {
        
        readFile.readAsArrayBuffer(<Blob>Files.raw)
        readFile.onload = (data)=> {
            sport = new SparkMD5.ArrayBuffer()
            sport.append(data.target?.result as any)
            Hash = sport.end()
            filenase = /\.([a-zA-Z0-9]+)$/.exec(uploadFile.name)[1]
            relove({Hash: Hash, filenase: filenase})
            // console.log(Hash, filenase)
        }
    })

    hashFile.then((res: any) => {
        while(index < count) {
            chunks.push({
                file: uploadFile.raw?.slice(index*max, (index+1)*max),
                filename: `${res.Hash}_${index+1}.${res.filenase}`
            })
            index ++
        }
        console.log(chunks)
    })
    

    //   const data = new FormData()
    //   data.append('file', uploadFile.raw)
    //   serveapi.isimg(data).then((res: any)=>{
    //                 console.log(res.data)
    //             })
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
