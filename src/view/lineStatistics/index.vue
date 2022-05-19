<template>
 <div>
     折线统计
     {{moyt.obj.ll}}
     <span @click="add">+</span>--------
     <span @click="sount">-</span>
 </div>
</template>
<script setup lang="ts">
import { values } from "lodash";
import {ref, reactive, onMounted, watch, defineComponent} from "vue"
import Promise from '../../utils/index'
import { useRouter } from 'vue-router';
let router = useRouter()
console.log('router',router.currentRoute.value);


const p = new Promise((relave: any, rejiact: any)=>{
        setTimeout(()=>{
            relave(6666)
        },1000)
})

p.then((value: any)=>{
        // console.log(value)
        return  new Promise((relave: any, rejiact: any)=>{
        setTimeout(()=>{
            rejiact(894849884)
        },2000)
})
}).then((value: any) => {
     console.log(value)
}, (resonse: any) => {
    console.log(resonse, '----------')
})

const hoot = ref(1)
const moyt = reactive({
    names: 11,
    age: 22,
    obj:{
        ll: 999
    }
})

const add = () => {
    moyt.obj.ll ++ 
}
const sount = () => {
     moyt.obj.ll --
}
watch(()=>moyt.obj.ll,(newdata, olddata)=>{
    console.log(newdata, olddata)
},{immediate:true})
</script >

<style>
</style>
