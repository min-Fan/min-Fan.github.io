import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IUserInfo {
  account: string
}

// 使用该类型定义初始 state
const initialState = {
  userInfo: <IUserInfo>{
    account: ''
  }
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // 使用 PayloadAction 类型声明 `action.payload` 的内容
    updateAccount: (state, action: PayloadAction<string>) => {
      // Redux Toolkit 允许在 reducers 中编写 "mutating" 逻辑。
      // 它实际上并没有改变 state，因为使用的是 Immer 库，检测到“草稿 state”的变化并产生一个全新的
      // 基于这些更改的不可变的 state。
      state.userInfo.account = action.payload
    },
  }
})
export const { 
  updateAccount,
} = userSlice.actions
export default userSlice.reducer
