import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router";
import Layout from "./components/Layout.jsx";
import UserRegister from "./components/User/UserRegister.jsx";
import UserLogin from "./components/User/UserLogin.jsx";
import DashboardLayout from "./components/DashboardLayout.jsx";
import UserProfile from "./components/User/UserProfile.jsx";
import UserLogout from "./components/User/UserLogout.jsx";
import CreateContacts from "./components/CreateContacts/CreateContacts.jsx";
import ContactList from "./components/CreateContacts/ContactList.jsx";
import ContactDetail from "./components/CreateContacts/ContactDetail.jsx";
import ContactEdit from "./components/CreateContacts/ContactEdit.jsx";
import CreateAddresses from "./components/Addresses/CreateAddresses.jsx";
import AddressesEdit from "./components/Addresses/AddressesEdit.jsx";
import RedirectLogin from "./components/RedirectLogin.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

        <Routes>

             <Route element={<Layout/>}>
                 <Route path="/" element={<RedirectLogin/>}/>
                 <Route path="/register" element={<UserRegister/>}/>
                 <Route path="/login" element={<UserLogin/>}/>
             </Route>

             <Route path="/dashboard" element={<DashboardLayout/>}>
                 <Route path="users"     >
                     <Route path="profile" element={<UserProfile/>}/>
                     <Route path="logout" element={<UserLogout/>} />
                 </Route>


                 <Route path="contacts">
                     <Route index element={<ContactList/>}/>
                     <Route path="create" element={<CreateContacts/>}/>

                     <Route path=":id">
                         <Route index element={<ContactDetail/>}/>
                         <Route path="edit" element={<ContactEdit/>}/>

                         <Route path="addresses">
                             <Route path="create" element={<CreateAddresses/>}/>
                             <Route path=":addressId/edit" element={<AddressesEdit/>}/>
                         </Route>


                     </Route>

                 </Route>

             </Route>



        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
