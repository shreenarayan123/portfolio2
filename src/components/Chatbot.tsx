'use client'
import { useEffect } from "react";
  
  const ChatBotIframe = () => {
    useEffect(() => {
      const iframe = document.createElement("iframe");
      iframe.src = "http://localhost:3000/chatbot?id=1be80cb1-33f2-48e8-bb69-8a2d5433b611";
      iframe.classList.add("chat-frame");
  
     
      document.body.appendChild(iframe);
  
     
      const style = document.createElement("style");
      style.textContent = `
     .chat-frame {
       position: fixed;
       bottom: 50px;
       right: 50px;
       border: none;
     }
   `;
      document.head.append(style);
  
      
      const handleMessage = (e: MessageEvent) => {
        try {
          // Check if e.data is already an object or needs parsing
          let dimensions;
          if (typeof e.data === 'string') {
            dimensions = JSON.parse(e.data);
          } else if (typeof e.data === 'object' && e.data !== null) {
            dimensions = e.data;
          } else {
            console.log("Received non-object data:", e.data);
            return;
          }
          
          if (iframe && dimensions.width && dimensions.height) {
            iframe.width = dimensions.width;
            iframe.height = dimensions.height;
          }
        } catch (error) {
          console.error("Error processing iframe message:", error);
          console.log("Raw message data:", e.data);
        }
      };
  
      window.addEventListener("message", handleMessage);
      return () => {
        window.removeEventListener("message", handleMessage);
        if (iframe && iframe.parentNode) {
          iframe.parentNode.removeChild(iframe);
        }
        if (style && style.parentNode) {
          style.parentNode.removeChild(style);
        }
      };
    }, []);
  
    return null;
  };
  
  export default ChatBotIframe;