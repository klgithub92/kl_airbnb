import React, { memo, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import { CenterWrapper } from './style'
import IconSearchBar from '@/assets/svg/icon-search-bar'
import SearchTabs from './c-cpns/search-tabs'
import SearchTitles from '@/assets/data/search_titles.json'
import SearchSections from './c-cpns/search-sections'

const HeaderCenter = memo((props) => {
  const { isSearch, searchBarClick } = props
  const [tabIndex, setTabIndex] = useState(0)
  const titles = SearchTitles.map(item => item.title)

  /** 让父组件处理修改isSearch*/
  function searchBarClickHandle() {
    searchBarClick && searchBarClick()
  }

  return (
    <CenterWrapper>
      <CSSTransition
        in={!isSearch}
        timeout={250}
        unmountOnExit={true} // 动画执行完卸载
        classNames='bar'
      >
        <div className='search-bar' onClick={searchBarClickHandle}>
          <div className='text'>
            搜索房源和体验
          </div>
          <div className='icon'>
            <IconSearchBar />
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={isSearch}
        timeout={250}
        unmountOnExit={true}
        classNames='detail'
      >
        <div className="search-detail">
          <SearchTabs titles={titles} tabClick={setTabIndex} />
          <div className="infos">
            <SearchSections searchInfos={SearchTitles[tabIndex].searchInfos} />
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  )
})

export default HeaderCenter