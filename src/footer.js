'use strict';

class Footer_c extends React.Component {
 
  render() {
 
    return (   
      <div class="footer">
      <div class="container text-center    ">
          <div class="row-fluid">          
          <div class="span4 smallspacetop">
            <p class="smaller">
              Copyright 2023 © Pingtung Peace Church.
            </p>
          </div>
         
          <div class="span4">
            <div class="text-center">
              <a class="totop" href='#'><i class="icon-chevron-up"></i></a>
            </div>
          </div>
          
          <div class="span4 smallspacetop">
            <ul class="social-links pull-right">
              
              <li class="facebook-link">
                <a
                  href="#"
                  class="facebook has-tip"
                  target="_blank"
                  title="Join us on Facebook"
                  >Facebook</a
                >
              </li>
              <li class="google-link">
                <a
                  href="#"
                  class="google has-tip"
                  title="Google +"
                  target="_blank"
                  >Google</a
                >
              </li>
              <li class="facebook-link">
                <a
                  href="#"
                  class="facebook has-tip"
                  target="_blank"
                  title="Join us on Facebook"
                  >Facebook</a
                >
              </li>
              <li class="facebook-link">
                <a
                  href="#"
                  class="facebook has-tip"
                  target="_blank"
                  title="Join us on Facebook"
                  >Facebook</a
                >
              </li>
            </ul>
            <div class="clearfix"></div>
          </div>          
        </div>
      </div>  
      </div>  
      );
  }
}

const root = ReactDOM.createRoot(document.getElementById('footer_c'));
root.render(<Footer_c />);

