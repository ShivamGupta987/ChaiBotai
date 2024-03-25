import { useState } from 'react'

import './App.css'
import '@chatscope/chat-ui-kit-style/dist/default/styles.min.css'

import {MainContainer,ChatContainer,MessageList,MessageInput,TypingIndicator, Message} from '@chatscope/chat-ui-kit-react'

function App() {
  const [messages, setMessages] = useState([

    {
      messages : "hello I am ChatGpt!",
      sender : "ChatGpt"
    }
  ]) // []

  const handleSend = async (message) =>{
    const newMessage = {
      message : message,
      sender : "user",
      direction : "outgoing"

      // messgae in right for ui kit jo liye isliye 
    }
    // sattes se meesage lega
    const newMessages = [...messages,newMessage]; // all the old messages , + the new messages 


    // upadate or messages state 

    setMessages(newMessages)






    // process messages to cahtgpt (send krrhe and resposne dekhe)
  }

  return (
    <div className='App'>
      <div style={{position:"relative",height : "800px",width : "700px"}}>
        <MainContainer>
          <ChatContainer>
            <MessageList>
              {messages.map((message,i) => {
                return <Message key = {i} model = {message} />;

              })}
            </MessageList>
            <MessageInput placeholder= 'Type message here' onSend={handleSend}/>
          </ChatContainer>
        </MainContainer>

      </div>
   
    </div>
  )
}

export default App
