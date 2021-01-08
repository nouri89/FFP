import React from "react";

const CreateRoles = () =>{
    return (
    <div className="row-10 ">
        <h4 className="container col-8 my-2 mt-2"><strong>Create a new class</strong></h4>
            <form class=" container col-8 mt-2">
              <div className="form-inline mt-2">
                <div class="form-group mx-2 mb-2 ">
    <label for="inputFullName2" class="sr-only">Cohort</label>
    <input type="text" class="form-control" id="inputFullName2" placeholder="Cohort"/>
  </div>
  <div class="form-group mx-2 mb-2">
    <label for="staticEmail2" class="sr-only">Lesson</label>
    <input type="text" class="form-control" id="staticEmail2" placeholder="Lesson"/>
  </div>
  <div class="form-group mx-2 mb-2">
    <label for="staticEmail2" class="sr-only">Date</label>
    <input type="text" class="form-control" id="staticEmail2" placeholder="Date"/>
  </div>
  </div>
  <div className="form-inline mt-2">
                <div class="form-group mx-2 mb-2 ">
    <label for="inputFullName2" class="sr-only">Module</label>
    <input type="text" class="form-control" id="inputFullName2" placeholder="Module"/>
  </div>
  <div class="form-group mx-2 mb-2">
    <label for="staticEmail2" class="sr-only">Material</label>
    <input type="text" class="form-control" id="staticEmail2" placeholder="Material"/>
  </div>
  <div class="form-group mx-2 mb-2">
    <label for="staticEmail2" class="sr-only">Time</label>
    <input type="text" class="form-control" id="staticEmail2" placeholder="Time"/>
  </div>
  </div>
  <h4 className="container my-2 mt-2 text-left"><strong>Roles:</strong></h4>
<div className="row mt-2 ml-4">
      <div className="col mx-4">
                <div class="form-check ">
  <input class="form-check-input position-static" type="checkbox" name="blankRadio" id="blankRadio1" value="option1" aria-label="..."/>
   <label class="form-check-label" for="inlineRadio1">Lead Teacher</label>
</div>
      <div class="form-check">
  <input class="form-check-input position-static" type="checkbox" name="blankRadio" id="blankRadio1" value="option1" aria-label="..."/>
  <label class="form-check-label" for="inlineRadio1">Assistant Teacher</label>
</div>
      <div class="form-check">
  <input class="form-check-input position-static" type="checkbox" name="blankRadio" id="blankRadio1" value="option1" aria-label="..."/>
  <label class="form-check-label" for="inlineRadio1">Coordinator</label>
</div>
      <div class="form-check">
  <input class="form-check-input position-static" type="checkbox" name="blankRadio" id="blankRadio1" value="option1" aria-label="..."/>
  <label class="form-check-label" for="inlineRadio1">Zoom Admin</label>
</div>
</div>
 <div className="col mx-4">
   <div class="form-check ">
  <input class="form-check-input position-static" type="checkbox" name="blankRadio" id="blankRadio1" value="option1" aria-label="..."/>
   <label class="form-check-label" for="inlineRadio1">Host</label>
</div>
      <div class="form-check">
  <input class="form-check-input position-static" type="checkbox" name="blankRadio" id="blankRadio1" value="option1" aria-label="..."/>
  <label class="form-check-label" for="inlineRadio1">Personal Development</label>
</div>
      <div class="form-check">
  <input class="form-check-input position-static" type="checkbox" name="blankRadio" id="blankRadio1" value="option1" aria-label="..."/>
  <label class="form-check-label" for="inlineRadio1">Zoom Assistant</label>
</div>
      <div class="form-check">
  <input class="form-check-input position-static" type="checkbox" name="blankRadio" id="blankRadio1" value="option1" aria-label="..."/>
  <label class="form-check-label" for="inlineRadio1">General Assistant</label>
</div>
</div>
</div>
<div className="container col-5 mt-2 m-auto">
  <button type="submit" class="btn btn-danger col-8 mt-2 ">Create Class</button>
  </div>
</form>
        </div>
    )
}

export default CreateRoles;