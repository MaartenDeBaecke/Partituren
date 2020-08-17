import React from "react";

function Register(){
  return(
    <div class="col-sm-4">
      <div class="card social-block">
        <div class="card-body">
          <a class="btn btn-block btn-social btn-google" href="http://localhost:4000/auth/google" role="button">
            <i class="fab fa-google"></i>
            Sign Up with Google
          </a>
        </div>
      </div>
    </div>
  );
}

export default Register;
