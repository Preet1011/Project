import React from 'react'

export default function Contacts() {
  const sendMSG=e=>{
    let a=document.getElementById("cname").value;
    let b=document.getElementById("cemail").value;
    let c=document.getElementById("cmsg").value;
    if(a==""||a==" "||b==""||b==" "||c==""||c==" "){
      alert("PLEASE ENTER ALL THE DETAILS.");
    }else{
      alert("Your message is Sent.")
    }
    
  }
  return (
    <div style={{display:"flex",backgroundImage:"url('https://www.hospitalitynet.org/picture/xxl_153087381.jpg?t=1520263441')",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundAttachment:"fixed"}}>
      <div className="mapouter" >
        <div className="gmap_canvas">
          <iframe className="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
             src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=pallavi grand&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          </iframe><a href="https://mcpenation.com/">https://mcpenation.com</a>
          </div>
        </div>
        <div id="contactDiv">
          <h1>Contact Us</h1>
          
          <from  id="form">
                <table id="table">
                    <tr>
                        <td colSpan="2"><input id="cname" type="text" name="name" className='form-control' required placeholder='Enter the Name'/></td>
                    </tr>
                    <tr>
                        <td colSpan="2"><input id="cemail" type="email" name="email"className='form-control' required placeholder='Enter the Email' /></td>
                    </tr>
                    <tr>
                        <td colSpan="2"><textarea id="cmsg"name="message"required className='form-control'placeholder='Enter the message' /></td>
                    </tr>
                    <tr>
                        <td colSpan="2" >
                            <button className="btn btn-success form-control" onClick={e=>sendMSG(e)} >Send Message</button>
                        </td>
                    </tr>
                    
                </table>
                
              </from>
        </div>
    </div>
  )
}
