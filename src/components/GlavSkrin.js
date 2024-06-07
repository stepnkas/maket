import React from "react"
import Header from "../interface/header.js";
import Bodylvl1 from "../interface/bodylvl1.js";
import AboutUs from "../interface/AboutUs.js";
import FormatMer from "../interface/FormatMer.js";
import WhoExpIde from "../interface/WhoExpIde.js";
import CardPeople from "../interface/CardPeople.js";
import WhyIsThisKonver from "../interface/WhyIsThisKonver.js";
import DlaKogo from "../interface/DlaKogo.js";
import WhatWhere from "../interface/WhatWhere.js";
import TimeRegistration from "../interface/TimeRegistration.js";
import ARegist from "../interface/ARegist.js";
import YouwillFind from "../interface/YouwillFind.js";
import ThreeComp from "../interface/ThreeComp.js";
import General from "../interface/General.js";
import GlavRegistration from "../interface/GlavRegistration.js";
import Questions from "../interface/Questions.js";
import Bottom from "../interface/Bottom.js";


function GlavSkrin() {
    const str1 = "Кто поделится с вами "; const str3 = "Программа "; const str2 = "опытом и идеями?"; const str4 = "Конференции";
    
    const boo1 = false;
    const boo2 = true;

    return (
        <>
            <div className="lvl1">
                <Header />
                <Bodylvl1/>
                <AboutUs/>
                <FormatMer />
                <WhoExpIde str1={str1} str2={str2} boo={boo1}/>
                <CardPeople />
                <WhyIsThisKonver />
                <DlaKogo />
                <WhoExpIde str1={str3} str2={str4} boo={boo2}/>
                <WhatWhere />
                <ARegist />
                <TimeRegistration />
                <YouwillFind />
                <General />
                <ThreeComp />
                <GlavRegistration />
                <Questions />
                <Bottom />
            </div>
            <div style={{height: "400px"}}></div>
        </>
    )
}

export default GlavSkrin;