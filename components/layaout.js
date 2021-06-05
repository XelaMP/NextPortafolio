import Navbar from "./navbar";

const Layaout = ({children}) => (
    <>
        <Navbar></Navbar>
            {children}

    </>
)

export default Layaout
