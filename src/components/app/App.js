import { Component } from "react";

import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoudnary from "../ErrorBoundary/ErrorBoudnary";

import decoration from '../../resources/img/vision.png';

class App extends Component {

    state = {
        selectedChar:null
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar:id
        })
    }

    render () {
        return (
            <div className="app">
                <AppHeader/>
                <main>
                    <ErrorBoudnary>
                        <RandomChar/>
                    </ErrorBoudnary>
                    <div className="char__content">
                        <ErrorBoudnary>
                            <CharList onCharSelected={this.onCharSelected}/>
                        </ErrorBoudnary>
                        <ErrorBoudnary>
                            <CharInfo charId={this.state.selectedChar}/>
                        </ErrorBoudnary>
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision"/>
                </main>
            </div>
        )
    }
}

export default App;