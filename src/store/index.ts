/*
 * @Author: yuanyelv 287142032@qq.com
 * @Date: 2022-05-21 09:51:01
 * @LastEditors: yuanyelv 287142032@qq.com
 * @LastEditTime: 2022-05-21 11:34:53
 * @FilePath: \vite01\src\store\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'

export interface State {
    count: number
    foo: String
}

// 定义injection key
export const key: InjectionKey<Store<State>> = Symbol('store')

export const store = createStore<State>({
  state () {
    return {
      count: 0,
      foo: 'hello'
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

// 定义自己的'useStore'组合函数
export function useStore () {
  return baseUseStore(key)
}
