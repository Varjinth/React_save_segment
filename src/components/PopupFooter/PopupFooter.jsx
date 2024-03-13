import React from 'react';
import '../PopupFooter/PopupFooter.scss';
import axios from 'axios';

 const PopupFooter = (props) => {
    const setOpenPopup = props.setOpenPopup;
    const inputData = props.inputData;
    const array = props.array;
   
function handleSubmit(event) {
  event.preventDefault();
  
  if (inputData !== "") {
    const result = array.map(obj => {
      const [firstKey, firstValue] = Object.entries(obj)[0];
      return { [firstKey]: firstValue };
    });
    
    const payload = {
      "segment_name": inputData,
      "schema": result
    };
    console.log(payload);

    axios.post("/0c8e3ba0-0089-46d7-af45-7921a5394123", payload)
      .then(function(response) {
        console.log(response.data);
        setOpenPopup(false);
alert("Segment Saved Sucessfully");
      })
      .catch(function(error) {
        console.error(error);
      });
  }
  else{
    alert("Please enter the Name of the Segment");
  }
}

  
    
  return (
    <div className='footer-container'>
        <div className='popup-btn-wrapper' onClick={(event) => handleSubmit(event)}><button className='popup-save-btn'>Save the Segment</button></div>
        <div className='popup-btn-wrapper' onClick={()=>{
            setOpenPopup(false);
        }}><button className='popup-close-btn'>Cancel</button></div>
    </div>
  )
}
export default PopupFooter;