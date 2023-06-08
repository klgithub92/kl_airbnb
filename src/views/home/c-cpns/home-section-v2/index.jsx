import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import { SectionV2Wrapper } from './styled'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
  // 父组件传递数据
  const { infoData } = props

  // 组件内部数据
  // const initialName = Object.keys(infoData.dest_list ?? {})[0] ?? "" // useState只在初始化时渲染
  // 处理name方法一
  const initialName = Object.keys(infoData.dest_list)[0] // 已经确定有值了
  const [name, setName] = useState(initialName)
  // 处理卡片导航数据 处理成为字符串类型数组具有通用性
  const tabNames = infoData.dest_address?.map(item => item.name)
  // 处理name方法二 这样会调用3次 性能低 不怎么推荐
  // useEffect(() => { setName('xxx') }, [infoData])

  // 处理函数
  const tabClickHandle = useCallback((index, name) => {
    setName(name)
  }, [])

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
      <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth='33.3333%' />
      <SectionFooter name={name} />
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2