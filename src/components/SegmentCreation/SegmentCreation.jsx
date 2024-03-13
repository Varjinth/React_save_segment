import React from 'react';
import '../SegmentCreation/SegmentCreation.scss';

const SegmentCreation = (props) => {
    const setOpenPopup = props.setOpenPopup;
    const handlePopup = () => {
        setOpenPopup(true);
    }
  return (
    <div className='about-segment-creation-section'>
        <div className='left-section'>
            <h3>React: A Brief Overview</h3>
            <p >React is a popular JavaScript library for building user interfaces. It's known for its component-based architecture,
 which promotes reusable and modular code. With React, developers can create interactive web applications efficiently by breaking down complex 
UIs into smaller, manageable components.</p>
<p> One of its key features is the virtual DOM, which improves performance by minimizing DOM manipulation. 
React's declarative syntax simplifies state management and makes it easier to maintain and update UIs. 
Additionally, its vibrant ecosystem and strong community support offer a wealth of resources, including libraries, tools, and 
documentation, making it a top choice for frontend development.
</p>
            <div className='save-btn-container' onClick={handlePopup}> 
                <button className='save-segment-btn'>Save segment</button>
            </div>
        </div>
        
    </div>
  )
}
export default SegmentCreation;