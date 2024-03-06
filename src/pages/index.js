import React from 'react';

export default function Index(){
    return(
        <div>
            <form action="login" >
			    <input type="submit" value="LOGIN" id = "loginbutton"/>
            </form><br/><br/>
            
            <form action="registration">
                <input type="submit" value="REGISTER" id = "registerbutton"/>
            </form>
        </div>
    );
}