import React from 'react';

const validation = (props) => {
    let validationMessage = "text is enough";
    const classes = [];
    if(props.inputLenght <= 5){
        validationMessage = "text is short";
        classes.push('danger', 'bold');
    }else {
        classes.push('success', 'bold');
    }
      
  
    return (
        <div>
            <p className={ classes.join(' ') }>{ validationMessage }</p>
        </div>
    );
};
export default validation;