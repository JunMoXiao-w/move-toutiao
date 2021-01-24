/* 本地存储封装模块 */
// 获取
export const getItem = name => {
  const data = window.localStorage.getItem(name)
  /* data有可能不是JSON格式字符串 */
  try {
    return JSON.parse(data)
  } catch (err) {
    return data
  }
}
// 存储
export const setItem = (name, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(name, value)
}
// 删除
export const removeItem = name => {
  window.localStorage.removeItem(name)
}
