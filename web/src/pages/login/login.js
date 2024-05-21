import "./login.css"
import Header from "../../components/header/header.js"
import Footer from "../../components/footer/footer.js"

function Login() {
    const SubmitForm = () => {
        var form = document.getElementById("myForm");
        form.submit();
    }

    return (
        <div className="login">

            {/* Import Header */}
            <div>
                { Header() }
            </div>

            <div className="frame">
                <div className='login_sub'>
                    <div className='title'>Login</div>
                        <div className='biao'>
                            <form id="myForm" action="/login_process" method='post'>
                                <div id="boxs">
                                    <div className="box1">
                                        <label>Username: </label>
                                        <label>Password: </label>
                                    </div>
                                    <div className="box2">
                                        <input  type="username" name='user' />
                                        <input  type="password" name='pwd' />
                                    </div>
                                </div>
                                <div className="container2">
                                    <button onClick={SubmitForm} type="submit" value="log in" className="button">
                                        <div className="button__line"></div>
                                        <div className="button__line"></div>
                                        <span className="button__text">Login</span>
                                    </button>
                                    <p><a href="/register" id="go_to_register">I don't have an account. I want to sign up!</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            {/* Import Footer */}
            <div>
                { Footer() }
            </div>

        </div>
    );
}

export default Login;