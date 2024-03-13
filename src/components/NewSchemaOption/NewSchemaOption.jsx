import React from 'react';
import {schemas} from '../../common/Schemas'

const NewSchemaOption = (props) => {
    const elements = props.elements;
    const editNewSchema = props.editNewSchema;
    const setOpenIndex = props.setOpenIndex;


  return (
        <div className='dropdown-options-container' style={{ zIndex: '1007' }}>
            {schemas.filter((schema) => !elements.some((ele) => Object.values(ele)[0] === Object.values(schema)[0])).map((ele) => (
                <div className='dropdown-option-wrapper' onClick={() => {
                    setOpenIndex(null);

                    editNewSchema(ele, props.current);
                }} key={Object.values(ele)[0]}> 
                    <span className='dropdown-option-bullet' style={{ backgroundColor: `${Object.values(ele)[1]}` }}></span>
                    <span className='dropdown-option-text'>{Object.values(ele)[0]}</span>
                </div>
            ))}
        </div>
    );
}
export default NewSchemaOption;
