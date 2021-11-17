import Button from "./components/Button/Button";
import "./App.css";
import Carousel from "./components/Carousel/Carousel";
import LazyLoad from "./components/LazyLoad/LazyLoad";

function App() {
    return (
        <>
            <Carousel delay={2000} children={["one", 2, 3, "four", 5, 6]} />
            <Carousel delay={2000} children={[]} />
            <Button initLikeValue={20} initDisLikeValue={10} />
            <LazyLoad />
        </>
    );
}

export default App;
