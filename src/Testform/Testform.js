import React, { Component } from 'react'
import { reduxForm, Field, getFormValues } from 'redux-form'
import { connect } from 'react-redux'
const Testform = props => {
    // const info=[]
    // const info = this.props.data
    const { handleSubmit, pristine, reset, submitting,data } = props
    console.log("data:", data)
    return (
        console.log("data2:", data),
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name: </label>
                <Field
                    component="input"
                    name="firstname" />
            </div>
            <br></br>
            <div>
                <label>Last Name: </label>
                <Field
                    component="input"
                    name="lastname" />
            </div>
            <br />
            <div>
                <label>Gender: </label>
                <label>
                    <Field
                        component="input"
                        type="radio" value="male"
                        name="gender" />
                    Male
           </label>
                <label>
                    <Field
                        component="input"
                        type="radio" value="female"
                        name="gender" />
                    Female
           </label>
                <label>
                    <Field
                        component="input"
                        type="radio" value="others"
                        name="gender" />
                    Others
           </label>
            </div>
            <br />
            <div>
                <label>Subject: </label>
                <Field name="subject" component="select">
                    <option value="MATHS">MATHS</option>
                    <option value="ENGLISH">ENGLISH</option>
                    <option value="SCIENCE">SCIENCE</option>
                    <option value="HISTORY">HISTORY</option>
                </Field>
            </div>
            <br />
            <div>
                <label>Experienced: </label>
                <Field
                    name="experienced"
                    id="experienced"
                    component="input"
                    type="checkbox" />
            </div>
            <br />
            <div>
                <button type="submit" disabled={pristine || submitting}>
                    Submit
                   </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Reset
                   </button></div>
            
                <div>Value: {  JSON.stringify(props.data) } </div>           
            
        </form>
    )
}
const mapStateToProps = (state) => {
    const fvalues = getFormValues('test')(state)
    console.log("Values", fvalues)
    return {
        isData: state.isData,
        data: fvalues
    }
}
// const mapDispatchToProps=(dispatch)=>{
//     // console.log("STATE",state)
//     return {
//         loadData: () => dispatch(loadData()),
//     }
// }
const form = reduxForm({
    form: 'test'
})(Testform)
export default connect(mapStateToProps)(form)