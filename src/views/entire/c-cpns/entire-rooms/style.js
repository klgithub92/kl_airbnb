import styled from 'styled-components'

export const RoomsWrapper = styled.div`
  position: relative;
  padding: 40px 20px;
  margin-top: 118px;

  .title {
    margin: 0 0 10px 10px;
    font-size: 22px;
    font-weight: 700;
    color: #222;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }

  .room-cover {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255,255,255,.7);
  }
`
