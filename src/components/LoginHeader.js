import img1 from "./../images/fitness3.jpg"; 

const LoginHeader = () => {
    return (
        <div>
            <div className="image">  
                <img src={img1} width="1200" height="350" alt="fit chick"/>
            </div>
            <div className="title">
                <h1>Welcome To AnyWhere Fitness! <br/> Login below to schedule a class!</h1>
            </div> 
        </div>
    )
}

export default LoginHeader