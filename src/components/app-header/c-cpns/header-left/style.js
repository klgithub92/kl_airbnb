import styled from "styled-components";

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  /* less定义变量方法 */
  /* color: var(--primary-color); */
  /* 使用styled-components主题 */
  color: ${props => props.theme.isAlpha ? "#fff" : props.theme.color.primaryColor};

  .logo {
    margin-left: 24px;
    cursor: pointer;
  }
`