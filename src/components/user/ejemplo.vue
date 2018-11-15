<template>
  <div id="">
    <div id="app" class="container-fluid slider d-flex justify-content-center " >
      <!-- form card login with validation feedback -->
               <div class="card card-outline-secondary">
                   <div class="card-header">
                       <h3 class="mb-0">Login</h3>
                   </div>
                   <div class="card-body">
                       <form class="form" role="form" autocomplete="off" id="loginForm" novalidate="" method="POST">
                           <div class="form-group">
                               <label for="uname1">Username</label>
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
               <div class=" cnt d-flex">
                 <div id="myDivI" class="container mt-1 ml-3 mr-1 mb-1 "></div>
                 <div id="myDivV1" class="container mt-1 ml-1 mr-2 mb-1"></div>
               </div>

               <div class="cnt d-flex">
                 <div id="myDivII" class="container mt-1 ml-3 mr-1 mb-1 "></div>
                 <div id="myDivV2" class="container mt-1 ml-1 mr-2 mb-1 "></div>
               </div>

               <div class="cnt d-flex">
                 <div id="myDivIII" class="container mt-1 ml-3 mr-1 mb-1 "></div>
                 <div id="myDivV3" class="container mt-1 ml-1 mr-2 mb-1 "></div>
               </div>

               <div class="cnt d-flex">
                 <div id="myDivAVR" class="container mt-1 ml-3 mr-1 mb-1 "></div>
                 <div id="myDivV4" class="container mt-1 ml-1 mr-2 mb-1 "></div>
               </div>

               <div class="cnt d-flex">
                 <div id="myDivAVL" class="container mt-1 ml-3 mr-1 mb-1 "></div>
                 <div id="myDivV5" class="container mt-1 ml-1 mr-2 mb-1 "></div>
               </div>

               <div class="cnt d-flex">
                 <div id="myDivAVF" class="container mt-1 ml-3 mr-1 mb-1 "></div>
                 <div id="myDivV6" class="container mt-1 ml-1 mr-2 mb-1 "></div>
               </div>
     </div>
  </div>
</template>
<script>
export default {
  name: "",
  data: () => ({
    methods: {
      GraficarSeña() {

    				var time = new Date();

    				var data = [{
    				 x: [time],
    				 y: arguments[0],
    				  mode: 'lines',
    				  line: {
    						color: '#80CAF6',
    						shape: 'spline'
    					},
    				}]

    				var layout = {
    	          hovermode:'closest',
    	          title:'Señal ECG Paciente: '+arguments[1]+'   	Id: '+arguments[2]+'     Edad: '+arguments[3]+'     Derivacion:'+arguments[4],
    						paper_bgcolor: 'rgba(24, 36, 37, 0.98)',
    						plot_bgcolor: 'rgba(35, 47, 48, 0.96)',

    	          margin: {
    	            l:30,
    	            r:30,
    	            b:30,
    	            t:40,
    	            pad:4
    	          },
    	          font: {
    	            size: 10,
    	            color: 'rgb(242, 242, 242)'
    	          },
    						xaxis: {
    	            type: 'date',
    	            title: 'Hora',
    	            color:'rgb(11, 141, 235)',
    	            titlefont: {
    	              color: 'rgb(170, 161, 162)',
    	              size: 10
    	            }
    	          },

    	          yaxis: {
    	            title: 'Amplitud ',
    	            color:'rgb(11, 141, 235)',
    	            titlefont: {
    	              color: 'rgb(170, 161, 162)',
    	              size: 10
    	            }
    	          }
    	       }

    				Plotly.newPlot('graph', data, layout);

    				var cnt = 0;

    				var interval = setInterval(function() {
    				  var time = new Date();
    				  var update = {
    						x: [[time]],
    					  y: [[arguments[0]]]
    				  }

    				  Plotly.extendTraces('graph', update, [0])

    				  if(cnt === 100) clearInterval(interval);
    				}, 250);
    		  },
          graph() {
            var trace1 = {
              x:arguments[0],
              y:this.I,
              type:'scatter',
              name: 'DI',
              mode:'lines',
               line: {
                 color: '#76e20a',
                 shape: 'spline',
                }
            }
            var trace2 = {
              x:arguments[0],
              y:this.II,
              type:'scatter',
              name: 'DII',
               line: {
                 color: '#76e20a',
                 shape: 'spline',
              }
            }
            var trace3 = {
              x:arguments[0],
               y:this.III,
              type:'scatter',
              name: 'DIII',
              mode:'lines',
               line: {
                 color: '#76e20a',
                 shape: 'spline',
                  }
            }
            var traceAVR = {
              x:arguments[0],
              y:this.AVR,
              type:'scatter',
              name: 'AVR',
              mode:'lines',
               line: {
                 color: '#76e20a',
                 shape: 'spline',
                  }
            }
            var traceAVL = {
              x:arguments[0],
              y:this.AVL,
              type:'scatter',
              name: 'AVL',
              mode:'lines',
               line: {
                 color: '#76e20a',
                 shape: 'spline',
                  }
            }
            var traceAVF = {
              x:arguments[0],
              y:this.AVF,
              type:'scatter',
              name: 'AVF Low',
              mode:'lines',
               line: {
                 color: '#76e20a',
                 shape: 'spline',
                  }
            }
            var traceV1 = {
              x:arguments[0],
              y:this.V1,
              type:'scatter',
              name: 'V1',
              mode:'lines',
               line: {
                 color: '#76e20a',
                 shape: 'spline',
                  }
            }
            var traceV2 = {
              x:arguments[0],
              y:this.V2,
              type:'scatter',
              name: 'V2',
              mode:'lines',
               line: {
                 color: '#76e20a',
                 shape: 'spline',
                  }
            }
            var traceV3 = {
              x:arguments[0],
              y:this.V3,
              type:'scatter',
              name: 'V3',
              mode:'lines',
               line: {
                 color: '#76e20a',
                 shape: 'spline',
                  }
            }
            var traceV4 = { x:arguments[0], y:this.V4,
              type:'scatter',
              name: 'V4',
              mode:'lines',
               line: {
                 color: '#76e20a',
                 shape: 'spline',
                  }
            }
            var traceV5 = { x:arguments[0], y:this.V5,
              type:'scatter',
              name: 'V5',
              mode:'lines',
               line: {
                 color: '#76e20a',
                 shape: 'spline',
                  }
            }
            var traceV6 = { x:arguments[0], y:this.V6,
              type:'scatter',
              name: 'V6',
              mode:'lines',
               line: {
                 color: '#76e20a',
                 shape: 'spline',
                  }
            }

            var dataI = [trace1], dataII = [trace2], dataIII = [trace3], dataAVR = [traceAVR], dataAVL = [traceAVL],dataAVF = [traceAVF],
            dataV1 = [traceV1], dataV2 = [traceV2], dataV3 = [traceV3], dataV4 = [traceV4], dataV5 = [traceV5], dataV6 = [traceV6],



            layout = {
                title:'Paciente: '+arguments[13],
                paper_bgcolor: 'rgba(24, 36, 37, 0.98)',
      					plot_bgcolor: 'rgba(35, 47, 48, 0.96)',
                  width: 660,
                  height: 250,
                  margin: {
                  l:25,
                  r:25,
                  b:25,
                  t:30,
                },
                showlegend: true,
                hoverlabel:{
                  bgcolor:'rgb(159, 19, 65)',
                  bordercolor:'rgb(249, 239, 242)'
                },

                font: {
                  size: 10,
                  color: 'rgb(242, 242, 242)'
                },
                xaxis: {
                  type: 'date',
                  title: 'Hora',
                  color:'rgb(11, 141, 235)',
                  titlefont: {
                    color: 'rgb(170, 161, 162)',
                    size: 10
                  }
                },

                yaxis: {
                  title: 'Amplitud ',
                  color:'rgb(11, 141, 235)',
                  titlefont: {
                    color: 'rgb(170, 161, 162)',
                    size: 10
                  }
                }

             }


              Plotly.newPlot('myDivI', dataI, layout );
              Plotly.newPlot('myDivII', dataII, layout);
              Plotly.newPlot('myDivIII', dataIII, layout);
              Plotly.newPlot('myDivAVR', dataAVR, layout);
              Plotly.newPlot('myDivAVL', dataAVL, layout);
              Plotly.newPlot('myDivAVF', dataAVF, layout);
              Plotly.newPlot('myDivV1', dataV1, layout);
              Plotly.newPlot('myDivV2', dataV2, layout);
              Plotly.newPlot('myDivV3', dataV3, layout);
              Plotly.newPlot('myDivV4', dataV4, layout);
              Plotly.newPlot('myDivV5', dataV5, layout);
              Plotly.newPlot('myDivV6', dataV6, layout);

          }
    }
  })
}
</script>
<style lang="scss" scoped>
</style>
