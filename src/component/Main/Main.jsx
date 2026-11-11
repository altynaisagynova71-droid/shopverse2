import "./Main.css";

function Main() {
  return (
    <section id="main">
      <div className="container">
        <div className="main">
          <div className="main2">
            <div className="watch">
                <h1 className="ultra">Apple Watch Ultra 2</h1>
                <p className="most">The most rugged and capable Apple Watch pushes <br /> the limits again. Featuring the all-new S9 SiP.</p>
                <button className="button-one">Shop Now</button>
                <button className="button-two">Learn More</button>  

            </div>  
            <div className="aplee-watch">
              <img src="./watch.png" alt="" />  
            </div>          
          </div>

          <div className="treding">
            <h1>Treding Categories</h1>  
            <div className="mobile">
              <img src="./aplee.svg" alt="" />
              <img src="./nout.svg" alt="" />
              <img src="./hoco.svg" alt="" />
              <img src="./telick.svg" alt="" />
              <img src="./colonka.svg" alt="" />
            </div> 
            <div className="text-mobile">
              <h2>Mobiles</h2>  
              <h2>Laptops</h2>  
              <h2>Headphones</h2>  
              <h2>Monitors & TVs</h2>  
              <h2>Speakers</h2>
            </div>         
          </div>
          <div className="nike-ps">
            <img src="./nike.png" alt="" />
            <img src="./ps.png" alt="" />
          </div>
          <div className="popular">
            <h1>Popular Products</h1>
            <div className="popular1">
              <img src="1.png" alt="" />
              <img src="2.png" alt="" />
              <img src="3.png" alt="" />
              <img src="4.png" alt="" />
            </div>
            <div className="popular2">
              <img src="5.png" alt="" />
              <img src="6.png" alt="" />
              <img src="7.png" alt="" />
              <img src="8.png" alt="" />

            </div>


          </div>
            <img className="sam" src="./galaxy.png" alt="" />  
            <div className="tree">
              <div className="tree1">
                <img src="./telefon.png" alt="" />
                <h2 className="h1">Accessorize Like a Pro</h2>
              </div>
              <div className="tree2">
                <img src="./musor.png" alt="" />
                <h2 className="h1">10 Timeless Wardrobe Staples</h2>
              </div>
              <div className="tree3">
                <img src="./shkaf.png" alt="" />
                <h2 className="h1">Sustainable</h2>
              </div>

          </div>  
          <div className="footer">
            <div className="footer1">
              <h1>Shopverse</h1>
              <img src="./icon.png" alt="" />
            </div>
            <div className="footer2">
              <div className="div1">
                <p>Download</p>
                <p>Windows</p>
                <p>Mac OS</p>
                <p>Android</p>
                <p>iOS</p>
              </div>
              <div className="div2">
                <p>Resources</p>
                <p>About</p>
                <p>Shop</p>
                <p>Categories</p>
                <p>Help</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
