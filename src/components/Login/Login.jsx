import { Field, reduxForm } from "redux-form"


const LoginForm = (props) => {
    console.log(props)

    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
            <Field placeholder={"login"} component={'input'} name={'login'} />
            </div>
            <div>
            <Field placeholder={"password"} component={'input'} name={'password'} />
            </div>
            <div>
            <Field component={'input'} type={"checkbox"} name={'rememberMe'} /> remember me
            </div>
            <div>
                <button type={"submit"} >Login</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
            console.log(formData)
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login