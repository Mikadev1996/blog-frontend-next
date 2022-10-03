
export default function SignUp() {
    const url = config.url.BASE_URL;
    return (
        <div className='app'>
            <div className="signin-content account-content">
                <div id='sign-up-page-header' className='title-container'><h1>Mika's facebook</h1></div>
                <div id="form-container">
                    <div className="form-header">
                        <h2>Create a new account</h2>
                        <p>It's quick and easy</p>
                    </div>
                    <form className='account-form'  action={`${url}/user/sign-up`}method='POST'>
                        <div className="form-control name-info">
                            <input type="text" placeholder="First name" id="firstname" name='firstname'/>
                            <input type="text" placeholder="Surname" id="surname" name='surname'/>
                        </div>

                        <div className="form-control">
                            <label htmlFor="username">Username</label>
                            <input type="text" placeholder="Username" id="username" name='username'/>
                            <small>Error Message</small>
                        </div>

                        <div className="form-control">
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder="New password" id="password" maxLength="16" name='password'/>
                            <small>Error Message</small>
                        </div>

                        <div className='form-control'>
                            <label htmlFor='date_of_birth'>Date of Birth</label>
                            <input type='date' id='date_of_birth' name='date_of_birth'/>
                            <small>Error Message</small>
                        </div>

                        <div>
                            <button className='form-submit' type="submit">Sign Up</button>
                        </div>
                        <div className='already-have'>
                            <a href='/'><p>Already have an account?</p></a>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    )
}