import React, { useState } from 'react'
import { Link } from 'react-router-dom/'
function Home() {

    
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    // const { handleUser } = useContext(AuthContext)

    // let navigate = useNavigate();
    function goToHome() {
        // navigate("/home");
    }

    const handleOnClick = (e) => {
        e.preventDefault()
        if(email && pass) {

        } else {
            alert('Enter email and password')
        }    
    }

  return (
        <div className="container mt-4 home text-center align-self-center">
       <div className='loginSignin'>
            <div className='ls__right'>
                <div className='ls__right_container'>
                    <form className='loginSignin__form' onSubmit={handleOnClick}>
                        <h1>Welcome to University Library</h1>
                     
                    </form>
                </div>
            </div>
        </div>
            </div>
        );

}

export default Home