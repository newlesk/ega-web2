import React, {useRef} from "react";
import { withRouter } from "react-router";
import "./CSS/Select.css"
import Dronstatus from "../Asset/Select_Dronestatus.png";

const Select = ({ history }) => {

  const Dronestats = () => {
    window.location.href = '/Dronestats'; 
  };

  const ForestModel = () => {
    window.location.href = '/ForestModel';
  };


  return (
    <div className="page-container">
      <header>
        <img src="https://scontent.fcnx4-1.fna.fbcdn.net/v/t1.15752-9/370330936_1454588462047178_5474380015798559061_n.png?_nc_cat=105&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeE86BJeMGNK3bckPgAZAy8EZwHzFWuo9hxnAfMVa6j2HE6NNLKEh1nzpEc7RMeCRvuPQLkBZZ6WUFINCJbc2kfw&_nc_ohc=H7YZRw8q-9UAX9fw1xP&_nc_ht=scontent.fcnx4-1.fna&oh=03_AdTzKEx61ApXdgiXL-x0PoX6ardVBf3MQQzPT0Ch8YFtoA&oe=65732307" alt="Your Logo" />
      </header>
      <main>
        <button className="image-button" onClick={Dronestats}>
        <img
            src={Dronstatus}
            alt="Button Image"
          />

        </button>

        <button className="image-button" onClick={ForestModel}>
        <img
            src="https://images.unsplash.com/photo-1590273466070-40c466b4432d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JlZW4lMjBmb3Jlc3R8ZW58MHx8MHx8fDA%3D"
            alt="Button Image"
          />
        </button>
      </main>
    </div>
  );
};

export default withRouter(Select);
