// configureStore: store配置项
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
// combineReducers： 组合reducers目录下的所有reducer模块
import { combineReducers } from 'redux'
// 数据持久化
import { persistStore, persistReducer } from 'redux-persist'
// defaults to localStorage for web
import localForage from 'localforage'

// 导入自己封装好的reducers
import userReducer from './reducers/userSlice'
import { updateVersion } from './global/actions'
// 持久化存储配置对象
const persistConfig = {
  key: 'interface',
  storage: localForage.createInstance({
    name: 'redux',
  }),
  throttle: 1000, // ms
  serialize: false,
  // The typescript definitions are wrong - we need this to be false for unserialized storage to work.
  // We need unserialized storage for inspectable db entries for debugging.
  // @ts-ignore
  deserialize: false,
}
// 持久化处理后的reducers
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    // 数据切片
    userReducer
  })
)
// 将初九话插件和store通过middleware关联起来
const store = configureStore({
  // userReducer 模块名
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: false
    })
})

// 可以订阅 store
// store.subscribe(() => console.log(store.getState(), 'userSlice'))

// 持久化的store
const persistor = persistStore(store)

setupListeners(store.dispatch)

store.dispatch(updateVersion())

export { store, persistor }
