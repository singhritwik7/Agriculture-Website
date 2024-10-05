
import "../styles/layouts/footer.css"

export const Footer = ()=>{
    return( 
    <footer className="flex-column-center pd-sm">
        <p className="mg-bottom-xsm">Made by Ritwik Singh</p>
        <div className="footer-links mg-bottom-xsm">
        <a className="mg-xsm fs-sm-plus" href="https://github.com/singhritwik7"  target="_blank" rel="noreferrer"
            ><i className="fab fa-github"></i
        ></a>
        <a
            className="mg-xsm fs-sm-plus"
            href="http://www.linkedin.com/in/ritwik-singh-63932b321"
            target="_blank" rel="noreferrer"
            ><i className="fab fa-linkedin-in"></i
        ></a>
        </div>
        <p className="copyright mg-bottom-xsm">© 2022 AgriHub</p>
  </footer>
  );
}
