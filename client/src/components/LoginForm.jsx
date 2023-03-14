import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
  MDBValidation
}
from 'mdb-react-ui-kit';

import Form from 'react-bootstrap/Form';

function LoginForm({setIsLogin, isLogin}) {
    const [justifyActive, setJustifyActive] = useState(isLogin ? 'tab1' : 'tab2');
    const [formValue, setFormValue] = useState({
        email: "",
        password: "",
        fName: "",
        lName: ""
    })

    const {email, password, fName, lName} = formValue;

    const onChangeInput = (e) => {
        const {name, value} = e.target;
        setFormValue({ ...formValue, [name]: value})
    }

    const handleJustifyClick = (value) => {
      if (value === justifyActive) {
        return;
      }
  
      setJustifyActive(value);
      setIsLogin(prev => !prev)
    };

  return (
    <MDBContainer className="p-3 d-flex flex-column" style ={{backgroundColor: "none ", width: "80%"}}>

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

        <MDBValidation noValidate>
          <div className="text-center mb-3">
            <p>Sign in with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' 
            value = {email} 
            name = "email" 
            onChange={onChangeInput}
            required 
            // validation = "Plsease provide an email adress"
            invalid
          />
          <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'
            value = {password} 
            name = "password" 
            onChange={onChangeInput}
            required 
            // validation = "Plsease provide"
            invalid
          />

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4 w-100" type="submit">Sign in</MDBBtn>
          <p className="text-center">Not a member? <a href="#!">Register</a></p>
          </MDBValidation>

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>
        <MDBValidation noValidate>
          <div className="text-center mb-3">
            <p>Sign up with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='First Name' id='form1' type='text'
            value = {fName} 
            name = "fName" 
            onChange={onChangeInput}
            required 
            // validation = "Plsease provide an "
            invalid
            />
          <MDBInput wrapperClass='mb-4' label='Last Name' id='form1' type='text'
            value = {lName} 
            name = "lName" 
            onChange={onChangeInput}
            required 
            // validation = "Plsease provide an "
            invalid
          />
          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'
            value = {email} 
            name = "email" 
            onChange={onChangeInput}
            required 
            // validation = "Plsease provide an "
            invalid
          />
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'
            value = {password} 
            name = "password" 
            onChange={onChangeInput}
            required 
            // validation = "Plsease provide an "
            invalid
            />

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div>

          <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>

        </MDBValidation>
        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
  );
}

export default LoginForm;