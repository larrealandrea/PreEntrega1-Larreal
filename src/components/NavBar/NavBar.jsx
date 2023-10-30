import CartWidget from "../CartWidget/CartWidget"
import icon from "../../assets/duraznologo.png"
import Button from "@mui/material/Button"


const NavBar = ()=> {
    return (
        <nav>
            <img src={icon} alt="logo de durazno kids"></img>
            <div style={{display:"flex",justifyContent:"center", gap: "0.5rem" }}>
                <Button variant="contained">Vestidos</Button>
                <Button variant="contained">Zapatos</Button>
                <Button variant="contained">Accesorios</Button>
                <Button variant="contained">Liquidación</Button>
            </div>
            <CartWidget/>
        </nav>
        
    )
}

export default NavBar 