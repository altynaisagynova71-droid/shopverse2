import "./Header.css"

function Header() {
  return <header id="header">
    <div className="conteiner">
      <div className="header">
        <div className="shop">
            <h1><b>ShopVerse</b></h1>
        </div>
        <div className="About">
            <p>About</p>
            <p>Shop</p>
            <p>Categories</p>
            <p>Help</p>
        </div>
        <div className="Search">
            <input className="input1" type="text"placeholder="Search for “Phones”" />
            <img className="heart1" src="./heart.png" alt="" />
            <img className="shoping1" src="./shoping.png" alt="" />
                
        </div>
      </div>
    </div>
  </header>
  
}
export default Header