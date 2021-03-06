import React, {useState} from "react";
import MySelect from "./FormMySelect";

function FormStep2(props) {

    const selectedOptionStep2 = props.selectedOptionStep2;
    const handlerSelectStep2 = props.handlerSelectStep2;
    const [warning, setWarning] = useState('');

    const handlerClick = () => {
        if (selectedOptionStep2 !== 'choose') {
            props.handlerStepUp()
        } else {
            let newWarning = <div className='warning'>Please choose quantity before go further</div>;
            setWarning(newWarning)
        }
    };

    return (
        <>
            <div className='FormStep1Warning'>
                <h2>Important!</h2>
                <p>Pack all items to be returned in 60l bags. You can find detailed instructions on how to properly pack
                    things HERE.</p>
            </div>
            <div className='Step2'>
                <div className='top'>
                    <p className='stepNumber'>Step 2/4</p>
                    <h2>Enter the number of 60l bags, which you packed in:</h2>
                    <div className='labelWithSelect'>
                        <label>Quantity of 60l bags:</label>
                        <div className='selectContainer'>
                            <MySelect selectedOptionStep2={selectedOptionStep2}
                                      handlerSelectStep2={handlerSelectStep2}/>
                        </div>
                    </div>
                </div>
                <div className='bottom'>
                    {warning}
                    <div className='buttons'>
                        <div className='button' onClick={props.handlerStepDown}>Back</div>
                        <div className='button' onClick={handlerClick}>Next</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormStep2;