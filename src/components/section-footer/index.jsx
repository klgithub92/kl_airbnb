import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { FooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import { useNavigate } from 'react-router-dom'

const SectionFooter = memo((props) => {
  const { name } = props
  let showMsg = '显示全部'
  if (name) {
    showMsg = `显示更多${name}资源`
  }

  // 加载更多
  const navigate = useNavigate()
  function moreClickHandle() {
    navigate('/entire')
  }

  return (
    <FooterWrapper color={name ? '#00848A' : '#000'}>
      <div className="info" onClick={moreClickHandle}>
        <span className='text'>{showMsg}</span>
        <IconMoreArrow />
      </div>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string
}

export default SectionFooter