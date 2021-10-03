import React, { Component } from "react";    
import './AdmissionForm.css'
class AdmissionForm extends Component {    
    constructor(props) {    
        super(props);    
        this.state = {    
            firstName: '', 
            lastName: '',  
            gender: 'select', 
            dob: '',     
            emailId: '',    
            
            
            phoneNumber: '',    
            state: 'select', 
          district:'select',
          address: '',
            formErrors: {}    
        };    
    
        this.initialState = this.state;    
    }    
    
    handleFormValidation() {    
        const { firstName , lastName, gender, dob, emailId, phoneNumber, state, district, address  } = this.state;    
        let formErrors = {};    
        let formIsValid = true;    
    
        //First name     
        if (!firstName) {    
            formIsValid = false;    
            formErrors["firstNameErr"] = "Name is required.";    
        }    
         //Last name     
         if (!lastName) {    
            formIsValid = false;    
            formErrors["lastNameErr"] = " Name is required";    
        }  
          //Gender    
          if (gender === '' || gender === "select") {    
            formIsValid = false;    
            formErrors["genderErr"] = "Select gender.";    
        }    
      
        //DOB    
        if (!dob) {    
            formIsValid = false;    
            formErrors["dobErr"] = "Date of birth is required.";    
        }    
        else {    
            var pattern = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;    
            if (!pattern.test(dob)) {    
                formIsValid = false;    
                formErrors["dobErr"] = "Invalid date of birth";    
            }    
        }    
    
        //Email    
        if (!emailId) {    
            formIsValid = false;    
            formErrors["emailIdErr"] = "Email id is required.";    
        }    
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId))) {    
    
            formIsValid = false;    
            formErrors["emailIdErr"] = "Invalid email id.";    
        }    
    
    
      
        //Phone number    
        if (!phoneNumber) {    
            formIsValid = false;    
            formErrors["phoneNumberErr"] = "Phone number is required.";    
        }    
        else {    
            var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;    
            if (!mobPattern.test(phoneNumber)) {    
                formIsValid = false;    
                formErrors["phoneNumberErr"] = "Invalid phone number.";    
            }    
        }    
    
        //State   
        if (state === '' || state === "select") {    
            formIsValid = false;    
            formErrors["stateErr"] = "Select state.";    
        }    
    
        this.setState({ formErrors: formErrors });    
        return formIsValid;    

          //District   
          if (district === '' || district === "select") {    
            formIsValid = false;    
            formErrors["districtErr"] = "Select district.";    
        } 
      
    
        this.setState({ formErrors: formErrors });    
        return formIsValid; 

         //Address    
         if (!address) {    
            formIsValid = false;    
            formErrors["addressErr"] = " address is required";    
        }  

    }

   
    
    handleChange = (e) => {    
        const { name, value } = e.target;    
        this.setState({ [name]: value });    
    }    
    
    handleSubmit = (e) => {    
        e.preventDefault();    
    
        if (this.handleFormValidation()) {    
            alert('You have been successfully registered.')    
            this.setState(this.initialState)    
        }    
    }    
    
    render() {
    
        const { firstNameErr, lastNameErr, genderErr, dobErr, emailIdErr,  phoneNumberErr, stateErr, districtErr, addressErr  } = this.state.formErrors;    
    
        return (    
            <div className="formDiv">    
                <h3 style={{ textAlign: "center" }} > Registration Form </ h3>    
                <div>    
                    <form onSubmit={this.handleSubmit}>    
                        <div>    
                            <label htmlFor="firstName"> First Name *</label>    
                            <input type="text" name="firstName"    
                                value={this.state.firstName}    
                                onChange={this.handleChange}    
                                placeholder="Your  first name.."    
                                className={firstNameErr ? ' showError' : ''} />    
                            {firstNameErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{firstNameErr}</div>    
                            }    
    
                        </div>    
                        <div>    
                            <label htmlFor="lastName"> Last Name </label>    
                            <input type="text" name="lastName"    
                                value={this.state.lastName}    
                                onChange={this.handleChange}    
                                placeholder="Your last name.."    
                                className={lastNameErr ? ' showError' : ''} />    
                            {lastNameErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{lastNameErr}</div>    
                            }    
    
                        </div> 
                        <div>    
                            <label htmlFor="gender">Gender *</label>    
                            <select name="gender" onChange={this.handleChange}    
                                className={genderErr ? ' showError' : ''}    
                                value={this.state.gender} >    
                                <option value="select">--Select--</option>    
                                <option value="male">Male</option>    
                                <option value="female">Female</option>    
                                  
                            </select>    
                            {genderErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{genderErr}</div>    
                            }    
                        </div>
                        <div>    
                            <label htmlFor="text">Date of Birth *</label>    
                            <input type="text" name="dob"    
                                value={this.state.dob}    
                                onChange={this.handleChange}    
                                placeholder="DD/MM/YYYY.."    
                                className={dobErr ? ' showError' : ''} />    
                            {dobErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{dobErr}</div>    
                            }    
                        </div>       
                        <div>    
                            <label htmlFor="emailId">Email Id *</label>    
                            <input type="text" name="emailId"    
                                value={this.state.emailId}    
                                onChange={this.handleChange}    
                                placeholder="Your email id.."    
                                className={emailIdErr ? ' showError' : ''} />    
                            {emailIdErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{emailIdErr}</div>    
                            }    
    
                        </div>    
                       
                           
                        <div>    
                            <label htmlFor="phoneNumber">Phone Number</label>    
                            <input type="text" name="phoneNumber"    
                                onChange={this.handleChange}    
                                value={this.state.phoneNumber}    
                                placeholder="Your phone number.."    
                                className={phoneNumberErr ? ' showError' : ''} />    
                            {phoneNumberErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{phoneNumberErr}</div>    
                            }    
                        </div>    
                        <div>    
                            <label htmlFor="state">State *</label>    
                            <select name="state"    
                                value={this.state.state}    
                                onChange={this.handleChange}    
                                className={stateErr ? ' showError' : ''} >    
                                <option value="select">--Select--</option>    
                                <option value="Andrapradesh">AndraPradesh</option>    
                                <option value="Assam">Karnataka</option>    
                                <option value="Arunachal Pradesh">Kerala</option>    
                            </select>    
                            {stateErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{stateErr}</div>    
                            }    
                        </div>    
                        <div>    
                            <label htmlFor="district">District *</label>    
                            <select name="district"    
                                value={this.state.district}    
                                onChange={this.handleChange}    
                                className={districtErr ? ' showError' : ''} >    
                                <option value="select">--Select--</option>    
                                <option value="Anantpur ">Anantpur </option>    
                                <option value="Chittoor">Chittoor</option>    
                                <option value="Nellore">Nellore</option>   
                                <option value="Prakasam">Prakasam</option>  
                                <option value="Anjaw">Anjaw</option>  
                                <option value="Changlang">Changlang</option>  
                                <option value="East Siang">East Siang</option>  
                                <option value="Tawang">Tawang</option>  
                                <option value="West Kameng">West Kameng</option>  
                                <option value="Baksa">Baksa</option>  
                                <option value="Barpeta">Barpeta</option>  
                                <option value="Bongaigaon">Bongaigaon</option>  
                                <option value="Cachar">Cachar</option>  
                                <option value="Chirang">Chirang</option>  
                                <option value="Darrang">Darrang</option>  
                                <option value="Dhemaji">Dhemaji</option>  
                            </select>    
                            {districtErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{districtErr}</div>    
                            }    
                        </div>  
                        <div>    
                           <label>Address</label>
                           <textarea row="25" col="50" id="adr" placeholder = "Enter your Address" ></textarea>
                        </div>   
                       
                        <input type="submit" value="Submit" />    
                    </form>    
                </div>    
            </div >   
        )    
    }    
}
    
export default AdmissionForm;