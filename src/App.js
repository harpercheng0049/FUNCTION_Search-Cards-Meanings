import "./styles.scss";
import React, { useState } from "react";
import cardData from "./cardstoreges";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // filterCards - 將是篩選後的結果所儲存的陣列
  /* 
  card.name.toLowerCase()：
  將 card 物件中的 name 屬性轉換成小寫字串
  以便進行大小寫不敏感的比較
  */
  /*
  .includes(searchTerm.toLowerCase())：
  這是 JavaScript 字串方法 includes，用來檢查一個字串是否包含另一個字串
  在這裡，它檢查已轉換為小寫的 name 是否包含轉換為小寫的 searchTerm
  也就是搜尋關鍵字
  */
  const filterCards = cardData.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="App">
      <h1>Card Meanings App</h1>
      <p className="subText">
        Here you can check the meanings of 182 symbol cards
      </p>
      <input
        type="text"
        placeholder="Search for card meanings..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {searchTerm && (
        <div className="item_container">
          {filterCards.map((card) => (
            <div key={card.id} className="itemBox">
              <div className="itemName">
                <p>{card.name}</p>
                <span>{card.name_CN}</span>
              </div>

              <div className="itemKeyword">{card.keyword}</div>

              <div className="itemContent">
                <p>{card.meaning_CN}</p>
                <span>{card.meaning_EN}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
