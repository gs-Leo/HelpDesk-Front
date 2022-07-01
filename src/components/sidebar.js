import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css';


export default function Sidebar() {
    return (

        <aside id="sidebar" class="sidebar">

            <ul class="sidebar-nav" id="sidebar-nav">

                <li class="nav-item">
                    <a class="nav-link " href="/Home">
                        <i class="bi bi-grid"></i>
                        <span>Home</span>
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link collapsed" href="/Profile">
                        <i class="bi bi-person"></i>
                        <span>Profile</span>
                    </a>
                </li>
                    
                <li class="nav-heading">User Management</li>            


                <li class="nav-item">
                    <a class="nav-link collapsed" href="#">
                        <i class="bi bi-person"></i>
                        <span>Users</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link collapsed" href="/NewUser">
                        <i class="bi bi-person"></i>
                        <span>New User</span>
                    </a>
                </li>
                
                <li class="nav-heading">Cards</li>     
                <li class="nav-item">
                    <a class="nav-link collapsed" href="pages-blank.html">
                        <i class="bi bi-file-earmark"></i>
                        <span>Card List</span>
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link collapsed" href="/NewCard">
                        <i class="bi bi-file-earmark"></i>
                        <span>New Card</span>
                    </a>
                </li>

                <li class="nav-heading"></li> 
                <li class="nav-item">
                    <a class="nav-link collapsed" href="pages-blank.html">
                        <i class="bi bi-file-earmark"></i>
                        <span>Sign Out</span>
                    </a>
                </li>

            </ul>

        </aside>

    );
}

