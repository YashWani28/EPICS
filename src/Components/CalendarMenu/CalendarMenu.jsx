import React from 'react';
import './CalendarMenu.css';
import { useState } from 'react';
const CalendarMenu = () => {
    const [calendararr,setcalendararr] = useState(["Journal Title"]);
    const handleAdd = ()=>{
        // console.log(calendararr);
        setcalendararr([...calendararr,"Journal Title"])
    }
    return (
        <div className="yCalendarMenudiv">
            <div classNameName="calendarMenuContainer">
                {
                    calendararr.map((ele)=>{
                        return(
                            <div className="yCalendarMenudiv-2">
                                <div className="yCalendarMenudiv-3">
                                    <img
                                        loading="lazy"
                                        srcset="https://cdn.builder.io/api/v1/image/assets/TEMP/5597649af9e1245ef2026abd6c1cbae19fe15202824fcffd16d4500343400c1e?apiKey=7a1f66b58e1f4817835f6b70858090a7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5597649af9e1245ef2026abd6c1cbae19fe15202824fcffd16d4500343400c1e?apiKey=7a1f66b58e1f4817835f6b70858090a7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5597649af9e1245ef2026abd6c1cbae19fe15202824fcffd16d4500343400c1e?apiKey=7a1f66b58e1f4817835f6b70858090a7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5597649af9e1245ef2026abd6c1cbae19fe15202824fcffd16d4500343400c1e?apiKey=7a1f66b58e1f4817835f6b70858090a7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5597649af9e1245ef2026abd6c1cbae19fe15202824fcffd16d4500343400c1e?apiKey=7a1f66b58e1f4817835f6b70858090a7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5597649af9e1245ef2026abd6c1cbae19fe15202824fcffd16d4500343400c1e?apiKey=7a1f66b58e1f4817835f6b70858090a7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5597649af9e1245ef2026abd6c1cbae19fe15202824fcffd16d4500343400c1e?apiKey=7a1f66b58e1f4817835f6b70858090a7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5597649af9e1245ef2026abd6c1cbae19fe15202824fcffd16d4500343400c1e?apiKey=7a1f66b58e1f4817835f6b70858090a7&"
                                        className="img"
                                    />
                                    <div className="yCalendarMenudiv-4">
                                        <div className="yCalendarMenudiv-5">{ele}</div>                
                                    </div>
                                </div>
                                <button className="yCalendarMenudiv-7">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5fafdbdbe77873c68f122aa9767d1102fb9842acd00031cb8f7c61eaf78d46c?apiKey=7a1f66b58e1f4817835f6b70858090a7&"
                                        className="img-2"
                                    />
                                </button>
                            </div>                           
                        )
                    })
                }
            </div>
            <button className="yCalendarMenudiv-20" onClick={handleAdd}>
                <div className="yCalendarMenudiv-21">
                    <div className="yCalendarMenudiv-22">New</div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c974fcbb6ba762ced9fe8cbcc99300af2dc1377f8b56f92c7cc4ac1ba4ea7563?apiKey=7a1f66b58e1f4817835f6b70858090a7&"
                        className="img-5"
                    />
                </div>
            </button>
        </div>
    )
}
export default CalendarMenu;