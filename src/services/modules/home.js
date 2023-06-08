import klRequest from ".."

// 性价比好的
export const getHomeGoodPriceData = () => {
  return klRequest.get({
    url: '/home/goodprice'
  })
}

// 高评分
export const getHomeHighScoreData = () => {
  return klRequest.get({
    url: '/home/highscore'
  })
}

// 折扣优惠
export const getHomeDiscountData = () => {
  return klRequest.get({
    url: '/home/discount'
  })
}

// 热门推荐
export function getHomeHotRecommendData() {
  return klRequest.get({
    url: "/home/hotrecommenddest"
  })
}

// 向外的城市
export function getHomeLongforData() {
  return klRequest.get({
    url: '/home/longfor'
  })
}

// plus房源
export function getHomePlusData() {
  return klRequest.get({
    url: '/home/plus'
  })
}