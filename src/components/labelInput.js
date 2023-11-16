import {React} from 'react';

function App({labelName, inputPlaceholder, saveInputToState, onEnter}) {
    return (
        <div>
            <label className="LoginBoxLabels" id="LabelBox"><b>{labelName}</b></label>

            <input 
                className="LoginBoxInputs" 
                type="text" 
                placeholder={inputPlaceholder} 
                onChange={(e)=> saveInputToState(e.target.value)}
                name="uname" required
                onKeyDown={e=> {
                    if (e.key === "Enter") onEnter()}
                }
            />
        </div>
    );
}


export default App;