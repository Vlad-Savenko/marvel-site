import { useState } from "react";

import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoudnary from "../ErrorBoundary/ErrorBoudnary";
import ComicsList from "../comicsList/ComicsList";

import decoration from '../../resources/img/vision.png';

const App = () => {

    const [selectedChar,setChar] = useState(null)

    const onCharSelected = (id) => {
        setChar(id);
    }

        return (
            <div className="app">
                <AppHeader/>
                {/* <main>
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
                </main> */}
                <ComicsList/>
            </div>
        )
}

export default App;