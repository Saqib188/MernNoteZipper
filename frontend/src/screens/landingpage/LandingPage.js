import { Button, Container, Row } from "react-bootstrap";
import './LandingPage.css'
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import useNotes from "../../customHooks/useNotes";
export default function LandingPage(){
    const {userInfo} = useNotes();
const navigate = useNavigate(); 
      useEffect(()=>{
       
    if (userInfo){
        navigate('/mynotes')
    }
      },[])
    return <div className="main">
        <Container>
            <Row>
                <div className="intro-text ">
                    <h1 className="title"> WelCome to NOte Zipper</h1>
                    <p className="subtitle">one safe place for all your notes.</p>
                </div>
                <div className="buttonContainer">
                    <a  href="/login">
                    <Button size="lg" className="landingbutton">Login</Button>
                    </a>
                    <a  href="/signup">
                    <Button size="lg" className="landingbutton" variant="outline-primary">register</Button>
                    </a>
                </div>
            </Row>
        </Container>
    </div>
}