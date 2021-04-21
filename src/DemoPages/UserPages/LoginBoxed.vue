<template>
    <div>
        <div style="background-color : #8f0808;" class="h-100  bg-animation">
            <div class="d-flex h-100 justify-content-center align-items-center">
                <b-col md="8" class="mx-auto app-login-box">
                    <div class=" mx-auto mb-3"/>

                    <div class="modal-dialog w-100 mx-auto">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div class="h5 modal-title text-center">
                                    <h4 class="mt-2">
                                         <a href="https://usad.com/">
              <img style="width: 350px; height: 100px" src="usad.png" />
            </a><br/><br/>
                                        <span>Enter your credentials</span>
                                    </h4>
                                </div>
                                <b-form-group id="exampleInputGroup1"
                                              label-for="exampleInput1"
                                              description="We'll never share your email with anyone else.">
                                    <b-form-input id="exampleInput1"
                                                  type="email"
                                                  required
                                                  placeholder="Enter email...">
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group id="exampleInputGroup2"
                                              label-for="exampleInput2">
                                    <b-form-input id="exampleInput2"
                                                  type="password"
                                                  required
                                                  placeholder="Enter password...">
                                    </b-form-input>
                                </b-form-group>
                              
                            </div>
                            <div class="modal-footer clearfix">
                               
                                <div class="float-right">
                                    <b-button variant="dark" size="lg">Login</b-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center text-white opacity-8 mt-3">
                        &copy; 2021 by USA Digital Communications, Inc.
                    </div>
                </b-col>
            </div>
        </div>
    </div>
</template>
