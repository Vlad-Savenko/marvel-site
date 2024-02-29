import { Component } from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";

class ErrorBoudnary extends Component {
    state = {
        error:false
    }

    // static GetDerivedStateFromError(error){
    //     return {error:true};
    //     //Тыльки Обновляе состояние
    // }

    componentDidCatch(error,errorInfo){
        console.log(error,errorInfo)
        this.setState({
            error:true
        })
    }

    render() {
        if(this.state.error) {
            return <ErrorMessage/>
        }
        return this.props.children;
    }
}

export default ErrorBoudnary
// Ловить ошибки лише в методі render в методах жизненного цикла і в конструкторах дочірніх компонентів
// 1не ловлять помилки в середині обробника подій,
// 2 Асинхронний код
// 3 в Самого себе
// 4 Серверний рендеринг