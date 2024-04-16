import { useState } from "react";
import {Helmet} from "react-helmet"

import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoudnary from "../ErrorBoundary/ErrorBoudnary";
import FindChar from "../findChar/FindChar";

import decoration from '../../resources/img/vision.png';

const MainPage = () => {

    const [selectedChar,setChar] = useState(null)

    const onCharSelected = (id) => {
        setChar(id);
    }

    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Marvel information portal"
                />
                <title>Marvel information portal</title>
            </Helmet>
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
                <ErrorBoudnary>
                    <FindChar/>
                </ErrorBoudnary>
            </div>
            <img className="bg-decoration" src={decoration} alt="vision"/>
        </>
    )
}

export default MainPage;