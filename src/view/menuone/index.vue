<template>
 <div class="menuone">
    <el-table :data="list" border style="width:  100%; ">
        <el-table-column prop="StudentN" label="学号"/>
        <el-table-column prop="name" label="姓名"/>
        <el-table-column prop="age" label="年龄"/>
        <el-table-column prop="sex" label="性别" />
        <el-table-column prop="banji" label="班级"/>
    </el-table>
    <el-pagination style="margin-top: 20px" background @size-change="sizechange" @current-change="handleCurrentChange" layout="prev, pager, next" :total="total" />
 </div>
</template>
<script setup lang="ts">
// import axios from "axios"
import serveapi from "../../http/api"
import {Ref, ref} from "vue"
interface St  {
    page: number,
    pageSize: number
}
const list = ref([])
const total = ref()
const page = ref(1)
const pageSize = ref(10)

const getList = (prmis: St)=>{
            serveapi.getStudentlist(prmis).then(function(response: any){
                list.value = response.data.data
                total.value = response.data.count
            })
            .catch(function(err: any){
            console.log(err)
  })
}

getList({page: page.value, pageSize: pageSize.value})

const sizechange = (x: number) => {
    getList({page: x, pageSize: pageSize.value})
}
const handleCurrentChange = (x: number) => {
    getList({page: x, pageSize: pageSize.value})
}

</script>
<style>
.menuone{
    width:100%;
    padding: 20px;
}
</style>
