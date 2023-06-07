import klRequest from ".."

export const getHomeGoodPriceData = () => {
  return klRequest.get({
    url: '/home/goodprice'
  })
}