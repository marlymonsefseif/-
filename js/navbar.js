export const navbar = `
        <ul>
        <li><a href="about.html">About</a></li>
        <li><a href="products.html">Products</a></li>
        <li><a href="#">Content</a></li>
        <li><a href="home.html"><img src="images/main-logo.png" width="90"></a></li>
        <li><a href="#">Search</a></li>
        <li><a href="cart.html">Cart</a></li>
        <li><a href="index.html" id="logOut">log out</a></li>
      </ul>
      <style>
      #navbar {
    position: sticky;
    top: 0;
    background-color: white;
    padding-top: 4px;
    padding-bottom: 4px;
    z-index: 10;
    border-bottom: 1px solid black;
}

li {
    display: inline-block;
    padding-left: 4.7em;
    font-size: x-large;
}

li a {
    text-decoration: none;
    color: black;
}
      </style>`;

