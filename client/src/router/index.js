import{BrowserRouter as Browser,Route,Routes} from "react-router-dom"
import Homepage from "../components/homepage"
import Landing from "../components/landing"
import Post from "../components/post"
import Profile from "../components/profile"


const Router= ()=>{
    return(
        <Browser>
           
            <Routes>
                <Route path= "/homepage" element={<Homepage/>}/>
                <Route path= "/landing" element={<Landing/>}/>
                <Route path= "/post" element={<Post/>}/>
                <Route path= "/profile" element={<Profile/>}/>

            </Routes>
        </Browser>
    )
}
export default Router