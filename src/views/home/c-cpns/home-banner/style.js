import styled from "styled-components";
// react使用图片方法三
// import coverImg from '@/assets/img/cover_01.jpeg'
/* background: url(${coverImg}) center/cover; */


export const BannerWrapper = styled.div`
  height: 529px;
  /* react使用图片方法二：背景图片 */
  background: url(${require("@/assets/img/cover_01.jpeg")}) center/cover;
`