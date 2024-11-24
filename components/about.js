import TypingEffect from 'react-typing-effect'
export function About(){
    return(
        <div className="text-white flex gap-3 text-xl font-bold hover:cursor-pointer max-w-[400px] flex-wrap text-center">
        <TypingEffect
          text={["Сайн байна уу. Анарчулуу байна. Mиний портфолио хуудсанд тавтай морил ✌️"]}
          speed={100} 
          eraseSpeed={50} 
          typingDelay={500} 
          cursor="|"  
          displayTextRenderer={(text) => <p>{text}</p>} 
        />
      </div>
    )
}