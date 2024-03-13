import React,{useState} from 'react';
import '../SchemaDropdown/SchemaDropdown.scss';
import SchemaOption from '../SchemaOption/SchemaOption';

const SchemaDropdown = (props) => {
    const [openDropdown, setOpenDropdown ] = useState(false);
    const array = props.array;
    const setAddSchema = props.setAddSchema;
    const addSchemaObject = props.addSchemaObject;
const [selected, setSelected] = useState(null)
    
    const popupOpen = ()=>{
        setOpenDropdown(!openDropdown);
    }
    const addObject = (object) => {
        setAddSchema(object);
      };
      function closeDropdown(){
        setOpenDropdown(false)
      }
  return (
<>

    <div className='schema-dropdown-container'>
      {selected? <span className='add-schema-bullet' style={{backgroundColor:`${Object.values(selected)[1]}`}}></span>:  <span className='add-schema-bullet'></span>}
        <div className='add-schema-container' >

{selected?
            <div className='add-schema-segment-flex' onClick={popupOpen}>
                <span className='add-schema-text' > {selected[Object.keys(selected)[0]] }{openDropdown ? 
                <i className="fa fa-chevron-up" ></i>:
                <i className="fa fa-chevron-down" ></i>}</span>
            </div> :
<div className='add-schema-segment-flex' onClick={popupOpen}>
                <span className='add-schema-text' > Add schema to segment{openDropdown ? 
                <i className="fa fa-chevron-up" ></i>:
                <i className="fa fa-chevron-down" ></i>}</span>
            </div>}

            {openDropdown && <SchemaOption setSelected={setSelected} closeDropdown = {closeDropdown} array= {array} addObject = {addObject}  setOpenDropdown ={setOpenDropdown} />}
        </div>
        
        <div className='dash-icon'><i className="fa fa-minus" ></i></div>
    </div>
    
    
    <span className='add-new-schema' onClick={() =>{
       if (selected === null) {
        alert("Please select any schema.");
    } else {
        addSchemaObject();
        setSelected(null);
    }
    }}>+ 
<a href="#">
 
    Add new schema</a> </span>
</> 
  )
}
export default SchemaDropdown;


