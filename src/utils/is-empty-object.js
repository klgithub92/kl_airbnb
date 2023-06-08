// 判断对象是否有值
export function isEmptyObject(obj) {
  return !!Object.keys(obj).length
}