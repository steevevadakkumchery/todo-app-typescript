import React, { FunctionComponent } from 'react';

type InputBoxProps = {
    handleOnChange: Function,
    inputValue?: string,
    handleSubmit: Function
}
  

const InputBox: FunctionComponent<InputBoxProps> = ({ handleOnChange, inputValue = '', handleSubmit}) => {
    if(handleOnChange && handleSubmit) {
        return (
            <div>
                <input onChange={(e) => handleOnChange(e.target.value)} value={inputValue}/>
                <button onClick={(e) => handleSubmit()}>Submit</button>
            </div>
        );
    } else {
        return null;
    }

}

export default InputBox;