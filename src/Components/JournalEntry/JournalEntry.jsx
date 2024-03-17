import React from 'react';
import './JournalEntry.css';

const JournalEntry = (props) => {
    return (
        <div class="yJournalEntrydiv">
            <input type="text" class=" div-2" value={props.settitle} placeholder="Journal Title" onChange={e=>props.callbackTitle(e.target.value)}/>
            {/* <div class="yJournalEntrydiv-2">Journal Title</div> */}
            <div class="yJournalEntrydiv-3"></div>
            <textarea class="yJournalEntrydiv-4 "name="" id="" cols="85" rows="20" placeholder="Content" value={props.setdesc} onChange={e=>props.callbackDesc(e.target.value)}></textarea>
            
            <div class="yJournalEntrydiv-5">
                <div class="yJournalEntrydiv-6">
                    <div class="yJournalEntrydiv-7">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2bb3107ac121bd42f904c1b795aac7cff22eddfc2866c25811fb987ae4b2ee55?apiKey=7a1f66b58e1f4817835f6b70858090a7&"
                            class="img"
                        />
                    </div>
                    <div class="yJournalEntrydiv-8">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/78a02781051e0e71dd116d19d8d61472bc782197fb3a271a244333d475cb3dcf?apiKey=7a1f66b58e1f4817835f6b70858090a7&"
                            class="img"
                        />
                    </div>
                    <div class="yJournalEntrydiv-9">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f13f8b83e20702e4cbc21198074830abaf308729686f2efd4c091234f194a21d?apiKey=7a1f66b58e1f4817835f6b70858090a7&"
                            class="img"
                        />
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fb84d03c30552d9ed11f48a41fdc7e658641b7572938091751975c0d900fbb6?apiKey=7a1f66b58e1f4817835f6b70858090a7&"
                        class="img-2"
                    />
                </div>
                <button class="yJournalEntrydiv-10" onClick={props.saveit}>Save</button>
            </div>
        </div>
    )
}

export default JournalEntry;