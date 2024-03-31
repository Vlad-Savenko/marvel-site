import { useState } from "react";

import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoudnary from "../ErrorBoundary/ErrorBoudnary";

import decoration from '../../resources/img/vision.png';

const MainPage = () => {

    const [selectedChar,setChar] = useState(null)

    const onCharSelected = (id) => {
        setChar(id);
    }

    return (
        <>
            <ErrorBoudnary>
                <RandomChar/>
            </ErrorBoudnary>
            <div className="char__content">
                <ErrorBoudnary>
                    <CharList onCharSelected={onCharSelected}/>
                </ErrorBoudnary>
                <ErrorBoudnary>
                    <CharInfo charId={selectedChar}/>
                </ErrorBoudnary>
            </div>
            <img className="bg-decoration" src={decoration} alt="vision"/>
        </>
    )
}

export default MainPage;