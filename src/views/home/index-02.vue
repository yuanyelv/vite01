<!--
 * @Author: yuanyelv 287142032@qq.com
 * @Date: 2022-05-21 00:17:13
 * @LastEditors: yuanyelv 287142032@qq.com
 * @LastEditTime: 2022-05-24 17:13:43
 * @FilePath: \vite01\src\views\home\index-02.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <h1>首页</h1>
  <p>{{ $store.state.count }}</p>
  <p>{{ store.state.count }}</p>
</template>

<script lang="ts" setup>
// import { useStore } from 'vuex'
import { useStore } from '../../store'
import User from '@/api/user'
console.log(User)
const store = useStore()

console.log(store.state.count)

</script>

<style lang="scss" scoped></style>
