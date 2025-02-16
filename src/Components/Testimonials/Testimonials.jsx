import React, {useRef}from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () =>{
    if (tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }

  const slideBackward = () =>{
    if (tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }

  return (
    <div className="testimonials">
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_1} alt="" />
                  <div>
                    <h3>Nguyễn Minh Châu </h3>
                    <span>Edusity, Việt Nam</span>
                  </div>
                </div>
                <p>Quyết định theo đuổi bằng cấp của tôi tại Edusity là một trong những
quyết định tốt nhất mà tôi từng đưa ra. Cộng đồng hỗ trợ, cơ sở vật chất hiện đại và cam kết về sự xuất sắc trong học tập thực sự đã vượt quá
mong đợi của tôi.
                </p>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_2} alt="" />
                  <div>
                    <h3>Phan Gia Bảo </h3>
                    <span>Edusity, Việt Nam</span>
                  </div>
                </div>
                <p>Môi trường học tập thân thiện, đội ngũ giảng viên nhiệt tình và cơ sở vật chất hiện đại đã giúp tôi phát triển không chỉ về kiến thức mà còn về kỹ năng thực tiễn. Những cam kết về chất lượng đào tạo và sự hỗ trợ tận tâm từ nhà trường đã thực sự vượt xa kỳ vọng của tôi.
                </p>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_3} alt="" />
                  <div>
                    <h3>Phạm Bảo Vy</h3>
                    <span>Edusity, Việt Nam</span>
                  </div>
                </div>
                <p>Những buổi học thú vị, các dự án thực tế và cơ hội giao lưu với các chuyên gia trong ngành đã mở ra nhiều cơ hội nghề nghiệp cho tôi. Tôi thực sự cảm thấy may mắn khi được là một phần của cộng đồng này và tin tưởng rằng con đường phía trước sẽ đầy hứa hẹn nhờ nền tảng vững chắc mà trường đã mang lại.
                </p>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_4} alt="" />
                  <div>
                    <h3>Vũ Như Ý</h3>
                    <span>Edusity, Việt Nam</span>
                  </div>
                </div>
                <p>Những khóa học ngoại khóa và các buổi hội thảo chuyên đề giúp tôi mở rộng kiến thức, đồng thời xây dựng các mối quan hệ giá trị với bạn bè và các chuyên gia trong ngành. Trường không chỉ đào tạo chúng tôi để trở thành những người giỏi chuyên môn mà còn giúp chúng tôi phát triển toàn diện, sẵn sàng đóng góp vào cộng đồng và xã hội.
                </p>
              </div>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Testimonials