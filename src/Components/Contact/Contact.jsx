import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ef1da925-c5d5-4b24-80ed-a9ab9a2f439b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Hãy gửi tin nhắn cho chúng tôi<img src={msg_icon} alt="" /></h3>
            <p>Vui lòng liên hệ qua biểu mẫu liên hệ hoặc tìm thông tin liên hệ của chúng tôi bên dưới.
Phản hồi, câu hỏi và đề xuất của bạn rất quan trọng đối với chúng tôi khi chúng tôi nỗ lực cung cấp dịch vụ đặc biệt
cho cộng đồng trường đại học của mình.
            </p>
            <ul>
                <li> <img src={mail_icon} alt="" />
                    phamlien1016@gmail.com
                </li>
                <li> <img src={phone_icon} alt="" />0862690409</li>
                <li><img src={location_icon} alt="" />Hà Nội</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label >Tên của bạn</label>
                <input type="text"  name='name' placeholder='Enter your name' required/>
                <label>Điện thoại</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
                <label>Nhập tin nhắn ở đây</label>
                <textarea name="message" id="" rows="6" placeholder='Điền tin nhắn của bạn vào đây' required></textarea>
                <button type='submit' className='btn dark-btn'>Gửi đi<img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact