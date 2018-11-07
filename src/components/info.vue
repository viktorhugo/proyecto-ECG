<template>
  <div id="info">
       <div id="app" class="container-fluid slider d-flex justify-content-center " >
         <!-- form card login with validation feedback -->
                  <div class="card card-outline-secondary">
                      <div class="card-header">
                          <h3 class="mb-0">Login</h3>
                      </div>
                      <div class="card-body">
                          <form class="form" role="form" autocomplete="off" id="loginForm" novalidate="" method="POST">
                              <div class="form-group">
                                  <label >Username</label>
                                  <input type="text" class="form-control" name="uname1" id="uname1" required="">
                                  <div class="invalid-feedback">Please enter your username or email</div>
                              </div>
                              <div class="form-group">
                                  <label>Password</label>
                                  <input type="password" class="form-control" id="pwd1" required="" autocomplete="new-password">
                                  <div class="invalid-feedback">Please enter a password</div>
                              </div>
                              <div class="form-check small">
                                  <label class="form-check-label">
                                      <input type="checkbox" class="form-check-input"> <span>Remember me on this computer</span>
                                  </label>
                              </div>
                              <button type="submit" class="btn btn-success btn-lg float-right" id="btnLogin">Login</button>
                          </form>
                      </div>
                      <!--/card-body-->
                  </div>
                  <!-- /form card login -->

              </div>


              <i class="fas fa-times fa-2x text-danger bg-white m-2 p-2 " :class="{'fas fa-user-check fa-2x':this.password === this.password2}"></i>

              <div class="col-md-6 offset-md-3">
                  <span class="anchor" id="formRegister"></span>
                  <hr class="mb-5">

                  <!-- form card register -->
                  <div class="card card-outline-secondary">
                      <div class="card-header">
                          <h3 class="mb-0">Sign Up</h3>
                      </div>
                      <div class="card-body">
                          <form class="form" role="form" autocomplete="off">
                              <div class="form-group">
                                  <label for="inputName">Name</label>
                                  <input type="text" class="form-control" id="inputName" placeholder="Full name">
                              </div>
                              <div class="form-group">
                                  <label for="inputEmail3">Email</label>
                                  <input type="email" class="form-control" id="inputEmail3" placeholder="Email" required="">
                              </div>
                              <div class="form-group">
                                  <label for="inputPassword3">Password</label>
                                  <input type="password" class="form-control" id="inputPassword3" placeholder="Password" required="">
                              </div>
                              <div class="form-group">
                                  <label for="inputVerify3">Verify</label>
                                  <input type="password" class="form-control" id="inputVerify3" placeholder="Password (again)" required="">
                              </div>
                              <div class="form-group">
                                  <button type="submit" class="btn btn-success btn-lg float-right">Register</button>
                              </div>
                          </form>
                      </div>
                  </div>
                  <!-- /form card register -->

              </div>
              <div class="col-md-6 offset-md-3">
                  <span class="anchor" id="formChangePassword"></span>
                  <hr class="mb-5">

                  <!-- form card change password -->
                  <div class="card card-outline-secondary">
                      <div class="card-header">
                          <h3 class="mb-0">Change Password</h3>
                      </div>
                      <div class="card-body">
                          <form class="form" role="form" autocomplete="off">
                              <div class="form-group">
                                  <label for="inputPasswordOld">Current Password</label>
                                  <input type="password" class="form-control" id="inputPasswordOld" required="">
                              </div>
                              <div class="form-group">
                                  <label for="inputPasswordNew">New Password</label>
                                  <input type="password" class="form-control" id="inputPasswordNew" required="">
                                  <span class="form-text small text-muted">
                                          The password must be 8-20 characters, and must <em>not</em> contain spaces.
                                      </span>
                              </div>
                              <div class="form-group">
                                  <label for="inputPasswordNewVerify">Verify</label>
                                  <input type="password" class="form-control" id="inputPasswordNewVerify" required="">
                                  <span class="form-text small text-muted">
                                          To confirm, type the new password again.
                                      </span>
                              </div>
                              <div class="form-group">
                                  <button type="submit" class="btn btn-success btn-lg float-right">Save</button>
                              </div>
                          </form>
                      </div>
                  </div>
                  <!-- /form card change password -->

              </div>
              <div class="col-md-6 offset-md-3">
                  <span class="anchor" id="formResetPassword"></span>
                  <hr class="mb-5">

                  <!-- form card reset password -->
                  <div class="card card-outline-secondary">
                      <div class="card-header">
                          <h3 class="mb-0">Password Reset</h3>
                      </div>
                      <div class="card-body">
                          <form class="form" role="form" autocomplete="off">
                              <div class="form-group">
                                  <label for="inputResetPasswordEmail">Email</label>
                                  <input type="email" class="form-control" id="inputResetPasswordEmail" required="">
                                  <span id="helpResetPasswordEmail" class="form-text small text-muted">
                                          Password reset instructions will be sent to this email address.
                                      </span>
                              </div>
                              <div class="form-group">
                                  <button type="submit" class="btn btn-success btn-lg float-right">Reset</button>
                              </div>
                          </form>
                      </div>
                  </div>
                  <!-- /form card reset password -->

              </div>
              <div class="col-md-6 offset-md-3">
                  <span class="anchor" id="formPayment"></span>
                  <hr class="my-5">

                  <!-- form card cc payment -->
                  <div class="card card-outline-secondary">
                      <div class="card-body">
                          <h3 class="text-center">Credit Card Payment</h3>
                          <hr>
                          <div class="alert alert-info p-2 pb-3">
                              <a class="close font-weight-normal initialism" data-dismiss="alert" href="#"><samp>&times;</samp></a>
                              CVC code is required.
                          </div>
                          <form class="form" role="form" autocomplete="off">
                              <div class="form-group">
                                  <label for="cc_name">Card Holder's Name</label>
                                  <input type="text" class="form-control" id="cc_name" pattern="\w+ \w+.*" title="First and last name" required="required">
                              </div>
                              <div class="form-group">
                                  <label>Card Number</label>
                                  <input type="text" class="form-control" autocomplete="off" maxlength="20" pattern="\d{16}" title="Credit card number" required="">
                              </div>
                              <div class="form-group row">
                                  <label class="col-md-12">Card Exp. Date</label>
                                  <div class="col-md-4">
                                      <select class="form-control" name="cc_exp_mo" size="0">
                                          <option value="01">01</option>
                                          <option value="02">02</option>
                                          <option value="03">03</option>
                                          <option value="04">04</option>
                                          <option value="05">05</option>
                                          <option value="06">06</option>
                                          <option value="07">07</option>
                                          <option value="08">08</option>
                                          <option value="09">09</option>
                                          <option value="10">10</option>
                                          <option value="11">11</option>
                                          <option value="12">12</option>
                                      </select>
                                  </div>
                                  <div class="col-md-4">
                                      <select class="form-control" name="cc_exp_yr" size="0">
                                          <option>2018</option>
                                          <option>2019</option>
                                          <option>2020</option>
                                          <option>2021</option>
                                          <option>2022</option>
                                      </select>
                                  </div>
                                  <div class="col-md-4">
                                      <input type="text" class="form-control" autocomplete="off" maxlength="3" pattern="\d{3}" title="Three digits at back of your card" required="" placeholder="CVC">
                                  </div>
                              </div>
                              <div class="row">
                                  <label class="col-md-12">Amount</label>
                              </div>
                              <div class="form-inline">
                                  <div class="input-group">
                                      <div class="input-group-prepend"><span class="input-group-text">$</span></div>
                                      <input type="text" class="form-control text-right" id="exampleInputAmount" placeholder="39">
                                      <div class="input-group-append"><span class="input-group-text">.00</span></div>
                                  </div>
                              </div>
                              <hr>
                              <div class="form-group row">
                                  <div class="col-md-6">
                                      <button type="reset" class="btn btn-default btn-lg btn-block">Cancel</button>
                                  </div>
                                  <div class="col-md-6">
                                      <button type="submit" class="btn btn-success btn-lg btn-block">Submit</button>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
                  <!-- /form card cc payment -->

              </div>
              <!--/col-->
              <div class="col-md-8 offset-md-2">
                  <span class="anchor" id="formUserEdit"></span>
                  <hr class="my-5">

                  <!-- form user info -->
                  <div class="card card-outline-secondary">
                      <div class="card-header">
                          <h3 class="mb-0">User Information</h3>
                      </div>
                      <div class="card-body">
                          <form class="form" role="form" autocomplete="off">
                              <div class="form-group row">
                                  <label class="col-lg-3 col-form-label form-control-label">First name</label>
                                  <div class="col-lg-9">
                                      <input class="form-control" type="text" value="Jane">
                                  </div>
                              </div>
                              <div class="form-group row">
                                  <label class="col-lg-3 col-form-label form-control-label">Last name</label>
                                  <div class="col-lg-9">
                                      <input class="form-control" type="text" value="Bishop">
                                  </div>
                              </div>
                              <div class="form-group row">
                                  <label class="col-lg-3 col-form-label form-control-label">Email</label>
                                  <div class="col-lg-9">
                                      <input class="form-control" type="email" value="email@gmail.com">
                                  </div>
                              </div>
                              <div class="form-group row">
                                  <label class="col-lg-3 col-form-label form-control-label">Company</label>
                                  <div class="col-lg-9">
                                      <input class="form-control" type="text" value="">
                                  </div>
                              </div>
                              <div class="form-group row">
                                  <label class="col-lg-3 col-form-label form-control-label">Website</label>
                                  <div class="col-lg-9">
                                      <input class="form-control" type="url" value="">
                                  </div>
                              </div>
                              <div class="form-group row">
                                  <label class="col-lg-3 col-form-label form-control-label">Time Zone</label>
                                  <div class="col-lg-9">
                                      <select id="user_time_zone" class="form-control" size="0">
                                          <option value="Hawaii">(GMT-10:00) Hawaii</option>
                                          <option value="Alaska">(GMT-09:00) Alaska</option>
                                          <option value="Pacific Time (US &amp; Canada)">(GMT-08:00) Pacific Time (US &amp; Canada)</option>
                                          <option value="Arizona">(GMT-07:00) Arizona</option>
                                          <option value="Mountain Time (US &amp; Canada)">(GMT-07:00) Mountain Time (US &amp; Canada)</option>
                                          <option value="Central Time (US &amp; Canada)" selected="selected">(GMT-06:00) Central Time (US &amp; Canada)</option>
                                          <option value="Eastern Time (US &amp; Canada)">(GMT-05:00) Eastern Time (US &amp; Canada)</option>
                                          <option value="Indiana (East)">(GMT-05:00) Indiana (East)</option>
                                      </select>
                                  </div>
                              </div>
                              <div class="form-group row">
                                  <label class="col-lg-3 col-form-label form-control-label">Username</label>
                                  <div class="col-lg-9">
                                      <input class="form-control" type="text" value="janeuser">
                                  </div>
                              </div>
                              <div class="form-group row">
                                  <label class="col-lg-3 col-form-label form-control-label">Password</label>
                                  <div class="col-lg-9">
                                      <input class="form-control" type="password" value="11111122333">
                                  </div>
                              </div>
                              <div class="form-group row">
                                  <label class="col-lg-3 col-form-label form-control-label">Confirm</label>
                                  <div class="col-lg-9">
                                      <input class="form-control" type="password" value="11111122333">
                                  </div>
                              </div>
                              <div class="form-group row">
                                  <label class="col-lg-3 col-form-label form-control-label"></label>
                                  <div class="col-lg-9">
                                      <input type="reset" class="btn btn-secondary" value="Cancel">
                                      <input type="button" class="btn btn-primary" value="Save Changes">
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
                  <!-- /form user info -->

        </div>
  </div>
</template>
<script>
export default {
  name: "info",
  data: () => ({

  }),
  methods: {

  }
}
</script>
<style  scoped>
@import url('https://fonts.googleapis.com/css?family=Chelsea+Market|Finger+Paint|Happy+Monkey|Londrina+Sketch|Love+Ya+Like+A+Sister|The+Girl+Next+Door');
 #app {

  height: 100vh;
   align-items: center;
   text-align: center;

}
.jumbo{
  background: rgba(125, 120, 46, 0.5);
  border-radius: 9%;
}
button {
  cursor: pointer;
}
#info{
  height: 100vh;
    background-image: url("https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
    background-size: cover;
}
</style>
