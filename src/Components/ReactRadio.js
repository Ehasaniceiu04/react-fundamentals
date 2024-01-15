import React,{useState} from "react";

function ReactRadio() {
    const [gender,setGender]=useState('other');
    function handleGenderChange(event){
        setGender(event.target.value);
    }
  return <div>
    <h2>Choose Gender</h2>
      <div className="mt-5">
        <div className="form-check-inline">
          <input className="form-check-input" id="male" name="gender" onChange={handleGenderChange} value="male"  checked={gender==='male'} type="radio"></input>
          <label className="form-check-label" for="male">
            Male
          </label>
        </div>
        <div className="form-check-inline">
          <input className="form-check-input" name="gender" onChange={handleGenderChange} value="female"  id="female" type="radio" checked={gender==='female'}></input>
          <label className="form-check-label" for="female">
            Female
          </label>
        </div>
        <div className="form-check-inline">
          <input className="form-check-input" name="gender" id="other" onChange={handleGenderChange} value="other"  type="radio" checked={gender==='other'}></input>
          <label className="form-check-label" for="other">
            Other
          </label>
        </div>
      </div>
    
  <div>Selected Gender: {gender}</div>
  </div>;
}

export default ReactRadio;
