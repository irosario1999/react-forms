import React from 'react'

export default function Form(props) {
    const {getAllFormData, getFormValues} = props

    return (
      <form action="" method="post" onSubmit={getAllFormData}>
        <label>First Name: </label>
        <input type="text" name="firstName" required onChange={(e) => getFormValues(e, 'firstName')} />

        <label>Last Name: </label>
        <input type="text" name="lastName" required onChange={(e) => getFormValues(e, 'lastName')} />

        <label>Email: </label>
        <input type="email" name="email" required onChange={(e) => getFormValues(e, 'email')} />

        <input type="submit" value="Submit" />
        <input type="reset" value="Reset"/>
      </form>
    );
}
