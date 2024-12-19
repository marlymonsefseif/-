export const footer = `
  <div class="footer-content">
        <div class="footer-menu">
          <img src="images/main-logo.png" alt="Soapy Logo" />
          <p>
            Nunc tristique facilisis consectetur vivamus ut porta porta aliquam
            vitae vehicula leo nullam urna lectus.
          </p>
        </div>
      </div>
      <div class="footer-content">
        <div class="footer-menu" id="menu">
          <span><strong>Quick Links</strong></span>
          <ul>
            <li>About</li>
            <li>Shop</li>
            <li>Contact</li>
            <li>Account</li>
          </ul>
        </div>
      </div>
      <div class="footer-content">
        <div class="footer-menu">
          <span><strong>Contact Info</strong></span>
          <p>Assuit, EGYPT</p>
          <p>+20 123 456 789 11</p>
          <p>Soapy@gmail.com</p>
        </div>
      </div>
      <div class="footer-content">
        <div class="footer-menu">
          <span>You can follow us on our social platforms to get updates.</span>
          <div class="social-icons">
            <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://x.com/" target="_blank"><i class="fa-brands fa-twitter"></i></a>
            <a href="https://www.linkedin.com/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://www.youtube.com/" target="_blank"><i class="fa-brands fa-youtube"></i></a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <hr>
        © Copyright 2024 Soapy.
        <a href="#"><i class="fa-solid fa-arrow-up"></i></a>
      </div>
      </div>
<style>
#footer {
    padding: 2em 0;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.footer-content {
    flex: 1;
    max-width: 250px;
    margin: 1em;
}
.footer-menu img {
    max-width: 100%;
    margin-bottom: 1em;
}
.footer-menu p {
    margin: 0.5em 0;
    font-size: 20px;
    line-height: 1.5;
}
.footer-menu p:hover {
    color: #EDA3A6; 
}
.footer-menu span {
    text-align:left;
    font-size: 25px;
    font-style: italic;
}
.footer-menu span strong:hover {
   color: #EDA3A6;  
}
.footer-menu strong:hover{
    color: black;
}
.footer-menu ul {
    list-style: none;
    padding: 0;
}
.footer-menu ul li {
    margin: 0.3em 0;
    transition: color 0.3s;
}
.footer-menu ul li:hover {
    color: #EDA3A6;
}

#menu li{
display:block;
  padding-left:0;
}
.social-icons {
    margin-top: 1em;
}
.social-icons a {
    margin-right: 20px;
    font-size: 25px;
    color: black;
    transition: color 0.3s;
}
.social-icons a:hover {
    color: #EDA3A6;
}
.footer-bottom {
    width: 85%;
    padding: 0 4px;
    color: gray;
    font-size: 22px;
}
.footer-bottom a{
    color: black;
    float: right;
    font-size: xx-large;
    padding: 4px;
    background-color: #EDA3A6;
}
.footer-bottom a:hover{
    color: #EDA3A6;
    background-color: white;
}
    </style>`;
