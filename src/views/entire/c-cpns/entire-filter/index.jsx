import React, { memo, useState } from 'react'
import classNames from 'classnames'

import { FilterWrapper } from './style'
import fData from '@/assets/data/filter_data.json'

const EntireFilter = memo(() => {
  const [selectItems, setSelectItems] = useState([])

  function itemClickHandle(item) {
    const newItems = [...selectItems]
    if (newItems.includes(item)) { // 移除
      const itemIndex = newItems.findIndex(filterItem => filterItem === item)
      newItems.splice(itemIndex, 1)
    } else { // 添加
      newItems.push(item)
    }
    setSelectItems(newItems)
  }

  return (
    <FilterWrapper>
      <div className="filter">
        {
          fData.map(item => {
            return (
              <div
                className={classNames('item', { active: selectItems.includes(item) })}
                key={item}
                onClick={() => itemClickHandle(item)}
              >
                {item}
              </div>
            )
          })
        }
      </div>
    </FilterWrapper>
  )
})

export default EntireFilter