import React from 'react';

const Form = () => {
    return (
        <div>
        	<form>
        		<label>First Name:
              <input type="text" />
            </label>
            <label>Last Name:
            	<input type="text" />
            </label>
              <input type="submit" value="Submit" />
      			</form>
        </div>
    )
}

export default Form