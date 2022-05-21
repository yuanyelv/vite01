/*
 * @Author: yuanyelv 287142032@qq.com
 * @Date: 2022-05-21 10:07:03
 * @LastEditors: yuanyelv 287142032@qq.com
 * @LastEditTime: 2022-05-21 10:08:40
 * @FilePath: \vite01\src\vuex.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// vuex.d.ts
// eslint-disable-next-line no-unused-vars
import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import { State } from './store/index'

declare module '@vue/runtime-core' {
  // 声明自己的 store state
//   interface State {
//     count: number
//   }

  // 为 `this.$store` 提供类型声明
  // eslint-disable-next-line no-unused-vars
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
