import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt='' className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={() =>{
              setPlayState(true)
            }} />
        </div>
        <div className="about-right">
          <h3>TRƯỜNG HỌC TRỰC TUYẾN CỦA CHÚNG TÔI</h3>
          <h2>Chắp cánh cho những nhà lãnh đạo tương lai ngày hôm nay</h2>
          <p>Hãy bắt đầu hành trình giáo dục chuyển mình cùng các chương trình đào tạo toàn diện tại 
            trường học của chúng tôi. Chương trình học tiên tiến được thiết kế để trang bị cho sinh viên kiến 
            thức, kỹ năng và trải nghiệm cần thiết để xuất sắc trong lĩnh vực giáo dục đầy năng động.
          </p>
          <p>Với trọng tâm là đổi mới sáng tạo, học tập thực hành và sự hướng dẫn cá nhân hóa, các chương trình đào tạo của chúng tôi giúp sinh viên tương lai của ngành giáo dục tạo ra những ảnh hưởng sâu sắc tại các lớp học, trường học và cộng đồng.
          </p>
          <p>Dù bạn mong muốn trở thành giáo viên, quản lý, tư vấn viên hay nhà lãnh đạo giáo dục, các chương trình đào tạo đa dạng của chúng tôi sẽ là con đường lý tưởng để bạn đạt được mục tiêu và phát huy tiềm năng trong việc định hình tương lai của ngành giáo dục.
          </p>
        </div>
    </div>
  )
}

export default About