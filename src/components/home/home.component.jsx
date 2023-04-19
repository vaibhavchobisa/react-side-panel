const Home = ({ setPath }) => {
    setPath(window.location.pathname);
    return (
        <div className="home">
            Welcome to home
        </div>
    )
}

export default Home;