import React, {useState} from "react";
import InputComp from "../InputComp/InputComp";

const Login = () => {

    const [defVal, clearData] = useState('');

    const ClearHandler = () =>{
        clearData('');
    }


  return (
    <div>
      <h1>Please Login to the System</h1>
        <InputComp label = {'User Name'} type = {'Text'} defvalue = {{defVal}}></InputComp>
        <InputComp label = {'Password'} type = {'Password'} defvalue = {{defVal}}></InputComp>
        <button>Submit</button>
        <button onClick = {ClearHandler}>Clear</button>
    </div>
  );
};

export default Login;
