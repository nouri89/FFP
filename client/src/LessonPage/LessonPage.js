import React from "react";

// import bootstrap css file here
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "../Header/Header";
import LessonPage_Info from "./LessonPage_Info";
import LessonPage_Volunteers from "./LessonPage_Volunteers";
import Footer from "../Footer/Footer";
import AvailableRoles from "./AvailableRoles";


const LessonPage = ({lessonId}) => {
    return (
        <div className="App">
            <Header />
            <LessonPage_Info />
            <AvailableRoles/>
            <LessonPage_Volunteers />
            <Footer />
        </div>
    );
}
  
export default LessonPage; 