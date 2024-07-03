
import ReactDOM from 'react-dom/client';
import "./CSS/style.css";

function MainHeader(){
    return(<h1 className="heading1">REACT COURSE</h1>)
}

const subHeaderStyle = {
    color:"blueviolet",
    backgroundColor:"lightgray"
}


function SubHeader(){
    return(<p style={subHeaderStyle}>This is an exciting course</p>)
}


function Header(){
    return(
        <div>
    <MainHeader></MainHeader>
    <SubHeader></SubHeader>
       </div>
    )
}

function MainBody(){
    return(
        <div>
            <p>In this course, we will learn react js by building Task-Opedia</p>
            <ul>
                <li>Call Ben</li>
                <li>Go to walmart</li>
            </ul>
        </div>
    );
}

function Footer(){
    return(<p style={{color:"gray",backgroundColor:"black"}}>Happy Coding!</p>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
    
    Hello World
    <Header/>
    <MainBody/>
    <Footer/>

</div>


);

