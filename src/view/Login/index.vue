<template>
  <!-- {{msg}} -->
  <div class="is_login">
    <img src="../../assets/beijin.png" alt="" />
    <div class="is_card">
      <el-card class="box-card">
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          status-icon
          :rules="rules"
          label-width="120px"
          class="demo-ruleForm"
          label-position="left"
        >
          <el-form-item label="用户名" label-width="90px" prop="name">
            <el-input v-model="ruleForm.name" type="text" />
          </el-form-item>
          <el-form-item label="密码" label-width="90px" prop="password">
            <el-input v-model="ruleForm.password" type="password" />
          </el-form-item>
          <el-form-item>
            <el-button type="success" @click="submitForm(ruleFormRef,1)"
              >登 录</el-button>
            <el-button type="primary" @click="submitForm(ruleFormRef,2)"
              >注 册</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { ref, reactive, getCurrentInstance} from "vue"
import { ref, reactive} from "vue"
import type { FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'
import axios from "axios"
const ruleFormRef = ref<FormInstance>()

const ruleForm = reactive({
  name: "",
  password: "",
})

const rules = reactive({
  name: [{ required: true, message: "请填写账号名", trigger: "blur" }],
  password: [{ required: true, message: "请填写密码", trigger: "blur" }],
})

const submitForm = (formEl: FormInstance | undefined, type: number) => {
     if (!formEl) return
      formEl.validate((valid) => {
        if (valid) {
          if(type === 1){
              axios.post('users/bar', ruleForm).then(function(response){
                if (response.data.length === 0) {
                    ElMessage('账户或密码错误')
                }
              })
              .catch(function(err){
                console.log(err)
              })
          } else {
               axios.post('users/addUser', ruleForm).then(function(response){
                if (response.data.data.length === 0) {
                    ElMessage(response.data.msg)
                }
              })
              .catch(function(err){
                console.log(err)
              })
          }
        
        } else {
          console.log('error submit!')
          return false
        }
      })
}
</script>

<style lang="less" scoped>
.is_login {
  display: inline-block;
  width: 100%;
  height: 100%;
  position: relative;
}
.is_login img {
  width: 100%;
  height: 100%;
}
.is_card {
  width: 500px;
  height: 250px;
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.box-card {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
/deep/ .el-card__body {
    width: 80%;
  }
.is-always-shadow {
  width: 100%;
}
.el-input__inner {
  width: 300px;
}
</style>