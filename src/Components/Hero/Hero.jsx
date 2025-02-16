import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Edusity chào đón bạn!</h1>
            <p>Chương trình giảng dạy tiên tiến của chúng tôi được thiết kế để trang bị cho sinh viên kiến ​​thức, kỹ năng và kinh nghiệm cần thiết để thành công trong lĩnh vực giáo dục năng động.</p>
            <button className='btn'>Tìm hiểu thêm <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero