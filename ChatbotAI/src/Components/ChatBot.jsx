import React, { useState } from 'react'
import axios from 'axios';
import './ChatBot.css'
const ChatBot = () => {
    const apiKey="YOUR_API_KEY";

    const [message,setMessage] = useState("Hii ! This is EJOB AI Bot How can I help u with today !!!!");
    const newMessage = [
        {role:"system",content:`Recognized as the No.1 Fresher Placement Center in Kolkata, EjobIndia consistently achieves an impressive record of around 400 fresher placements every year. We are a trusted name among technical institutions (B.Tech, MCA, BCA) and software companies throughout West Bengal, with over 200 reputed software companies regularly recruiting freshers trained by us.

Our greatest strength lies in our unwavering dedication to helping students launch their careers in the IT industry. Over the past 20 years, this commitment has built a strong reputation for EjobIndia, with 80% of our students coming to us through references from friends and seniors who have successfully established their careers with our support.

EjobIndia’s growth is entirely reference-driven — a testament to the trust and satisfaction of our students and alumni. With a strong network of over 15,000 alumni, we continue to thrive and remain resilient, even in the face of changing market dynamics, ensuring that we consistently deliver results for aspiring IT professionals.
Software Development Unit -
EjobIndia has a strong industry background being a wing of Open Solutions for Education India Pvt. Ltd. (OS4Ed), a globally recognized educational product development company. OS4Ed is renowned for developing openSIS (www.opensis.com), a popular educational ERP product used by many big and prominent educational institutes worldwide.
Trainers Profile :
Sourav Kundu Jr
React Course 13000 rs.
Angular Course 12000 rs.
PHP Course 11000 rs.

If you need more information or have any other queries, feel free to mail us at admin@ejobindia.com or visit our website

`},
        {role:"user",content:`${message}`}
    ];
    const handleChange =(event)=>{
        setMessage(event.target.value);
    }
    const sendMessage = async()=>{
          console.log(message);
          const response = await axios.post("https://api.openai.com/v1/chat/completions",
                           {
                            model:"gpt-3.5-turbo",
                            messages:newMessage,

                           },
                           {
                           headers:{
                            "Authorization":`Bearer ${apiKey}`,
                            "Content-Type":"application/json"
                           }
                        }

          );
          console.log(response.data.choices[0].message.content);
          setMessage(response.data.choices[0].message.content);
          //Now speking by the voice agent
          //await speakAgent(response.data.choices[0].message.content);

        }
    const resetForm = (event)=>{
           setMessage("");
    }
    const speakAgent =async (str)=>{
           
            const utterance = new SpeechSynthesisUtterance(str);
            utterance.lang = 'en-US';
            speechSynthesis.speak(utterance);
           

    }
    const cancelSpeakAgent =()=>{
            speechSynthesis.cancel();

    }
    return (
    <div>
        <header className="modal-header">
         <h2>Simple OpenAI Customize ChatBot Implementations:</h2>
     
        </header>
      <div className="container">
        <div className="form-group">
         <textarea name="chatAgent" id="chatAgent" className='form-control' onChange={handleChange} cols="30" rows="10" value={message}></textarea>
         
      </div>
      <div align="center" className="form-group">
        <button type='button' onClick={sendMessage} className='btn btn-sm btn-outline-dark'>Send</button> |
        <button className="btn btn-sm btn-outline-primary" onClick={resetForm}>Reset</button>
        <button className='btn btn-sm btn-outline-info' onClick={()=>speakAgent(message)}>Speak :</button>
        <button className='btn btn-sm btn-outline-danger' onClick={cancelSpeakAgent}>Cancel</button>
     
      </div>
      </div>
           
    </div>
  )
}

export default ChatBot