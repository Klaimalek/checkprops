import React from 'react'

function User(props) {
    
  return (
    <div class="col-md-7 col-lg-4 mb-5 mb-lg-0 wow fadeIn">
    <div class="card border-0 shadow">
                    <img src="https://www.bootdey.com/img/Content/avatar/avatar6.png" alt="..."/>
                    <div class="card-body p-1-9 p-xl-5">
                        <div class="mb-4">
                            <h3 class="h4 mb-0"> {props.title}</h3>
                            <span class="text-primary"> {props.profession}</span>
                        </div>
                        <ul class="list-unstyled mb-4">
                            <li class="mb-3"><a href="#!"><i class="far fa-envelope display-25 me-3 text-secondary"></i>absimalekmootez@gmail.com</a></li>
                            <li class="mb-3"><a href="#!"><i class="fas fa-mobile-alt display-25 me-3 text-secondary"></i>0665376151</a></li>
                            <li><a href="#!"><i class="fas fa-map-marker-alt display-25 me-3 text-secondary"></i>16 rue Cécile Brunschvicg</a></li>
                        </ul>
                        <ul class="social-icon-style2 ps-0">
                            <li><a href="#!" class="rounded-3"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#!" class="rounded-3"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#!" class="rounded-3"><i class="fab fa-youtube"></i></a></li>
                            <li><a href="#!" class="rounded-3"><i class="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
    /</div>
  )
}

export default User