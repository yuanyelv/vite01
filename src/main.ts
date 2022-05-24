/*
 * @Author: yuanyelv 287142032@qq.com
 * @Date: 2022-05-20 20:42:28
 * @LastEditors: yuanyelv 287142032@qq.com
 * @LastEditTime: 2022-05-24 23:23:59
 * @FilePath: \vite01\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import './styles/index.scss'

createApp(App)
  .use(router)
  .use(store, key)
  .mount('#app')
