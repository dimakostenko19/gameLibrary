import { useState, useEffect } from "react";

export default function Slider() {
    const data = [
        {
            name: "ROCKET LEAGUE",
            img_path: "img/slider1.jpg"
        },
        {
            name: "GTA V",
            img_path: "img/slider2.jpg"
        },
        {
            name: "DISHONORED",
            img_path: "img/slider3.jpg"
        }
    ]
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToNext = ()=>{
      setCurrentIndex((prevIndex)=>(prevIndex + 1) % data.length)
    }
    useEffect(()=>{
      const interval = setInterval(goToNext, 10000)
      return ()=>clearInterval(interval)
    }, [])

  return (
    <div className="item-slider">
      {data.map((slide, index)=>(
        <div className={`slide ${index===currentIndex ? 'active':''}`}>
            <img src={slide.img_path}/>
            <div className="logo-btn">
              <span>{slide.name}</span>
              <div className="text-btn">
                Get Now
              </div>
            </div>
        </div>
        ))}
    </div>
  );
}