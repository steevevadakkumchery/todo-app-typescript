import React, { FunctionComponent } from 'react';

type InputBoxProps = {
    handleOnChange: Function,
    inputValue?: string
}
  

const InputBox: FunctionComponent<InputBoxProps> = ({ handleOnChange, inputValue = '' }) => {
    if(handleOnChange) {
        return <input onChange={(e) => handleOnChange(e.target.value)} value={inputValue}/>;
    } else {
        return null;
    }

}

export default InputBox;