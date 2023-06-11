import klRequest from ".."

export const getEntireRoomList = (offset = 0, size = 20) => {
  return klRequest.get({
    url: 'entire/list',
    params: {
      offset,
      size
    }
  })
}