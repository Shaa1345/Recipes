import "../styles/Main.css";
import Title from "../components/Title";
import AddBookBut from "../components/AddBookButton";
import React from "react";
import { useState } from "react";
import BookForm from "../components/AddBookForm.js";

function Main() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div>
      <div className="Add_Buttons">
        <div id="Add_Book">
          <AddBookBut togglePopup={() => setIsPopupOpen(true)}/>
        </div>
      </div>
      <div id="Title">
        <Title
          text_color="#767B8B"
          color="#BCF9F6"
          text="Recipe Books"
          border_color="#196C4E"
        />
        {isPopupOpen && <BookForm onClose={() => setIsPopupOpen(false)} />}
      </div>
      
    </div>
  );
}

export default Main;
