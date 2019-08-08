import React from 'react'

export default function Form(props) {
    const {getAllFormData, getFormValues} = props

    return (
      <form action="/" method="post">
        <label>First Name: </label>
        <input max='1' type="text" name="firstName" onChange={(e) => getFormValues(e, 'firstName')} />

        <label>Last Name: </label>
        <input type="text" name="lastName" onChange={(e) => getFormValues(e, 'lastName')} />

        <label>Email: </label>
        <input type="text" name="email" onChange={(e) => getFormValues(e, 'email')} />

        <input type="submit" value="Submit" onClick={getAllFormData} />
      </form>
    );
}
