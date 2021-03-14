import React from "react";
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation,
    useRouteMatch,
    useParams
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './content.css'
import {
  Nav, Navbar, NavbarBrand,NavLink
} from 'react-bootstrap';

export default function OnlineShop(){
    return (
        <Router>
            <div>
                <Navbar bg="dark" variant="dark">
                    <NavbarBrand>
                        Shoopeng
                    </NavbarBrand>
                    <Nav className="mr-auto">
                        <NavLink>
                            <Link className="text-white" to="/home">Main</Link>
                        </NavLink>
                        <NavLink>
                            <Link className="text-white" to="/features">Contact</Link>
                        </NavLink>
                    </Nav>
                </Navbar>
                <Switch>
                    <Route path="/home">
                        <Home/>
                    </Route>
                    <Route path="/login">
                        <LoginPage/>
                    </Route>
                    <PrivateRoute path="/features">
                        <Features/>
                        <AuthButton />
                    </PrivateRoute>
                </Switch>
            </div>
        </Router>
    );
}

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100); 
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

function AuthButton() {
    let history = useHistory();
  
    return fakeAuth.isAuthenticated ? (
        <button className="btn btn-danger d-flex m-auto"
          onClick={() => {
            fakeAuth.signout(() => history.push("/home"));
        }}
        >
          Sign out
        </button>
    ) : (
      <p>You are not logged in.</p>
    );
  }

function PrivateRoute({children, ...rest}){
    return(
        <Route
            {...rest}
            render={({ location }) =>
                fakeAuth.isAuthenticated?(
                    children
                ):(
                    <Redirect
                        to={{
                            pathname:"/login",
                            state:{ from: location }
                        }}
                    />
                )
            }
        />
    );
}

function Features(){
    return (
        <div>
            <br/>
            <div className="artikel">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="gambar-artikel">
                            <img src="https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-circle-512.png" alt="Gambar Tumbnail Artikel" />
                        </div>
                    </div>
                    <div className="col-sm-9">
                        <div className="konten-artikel">
                            <p></p>
                            <b>Nama   :</b>
                            <div className="judul-artikel">fauzan</div>
                            <b>Alamat Cell:</b>
                            <div className="judul-artikel">malang</div>
                            <b>NoHp :</b>
                            <div className="judul-artikel">089</div>
                            <b>EMAIL :</b>
                            <div className="judul-artikel">ojan@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Home(){
    let { path, url } = useRouteMatch();

    return (
        <div>
            <br></br>
            <div>
                <button type="button" className="btn btn-outline-dark" onClick={`${url}/pakan ayam`}> <Link to={`${url}/pakan ayam`}>pakan ayam</Link></button>
                <space></space>
                <button type="button" className="btn btn-outline-dark" onClick={`${url}/pakan koceng`} align="center"> <Link to={`${url}/pakan koceng`}>pakan koceng</Link></button>

                <Switch>
                    <Route exact path={path}>

                    </Route>
                    <Route path={`${path}/:dataId`}>
                        <Homes/>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

function Homes(){
    let { dataId } = useParams();

    if(dataId === "pakan ayam"){
        return(
            <div>
                <h2 align="center">PAKAN AYAM</h2>
                <div className="row">
                    <div className="col col-sm-2 portofolio-item mt-4">
                        <div className="card h-100">
                            <img src="https://blog.broilerx.com/wp-content/uploads/2020/10/pakan_ayam.jpg"/>
                            <div className="card-body">
                                <h4 className="card-title w-75 float-left">Sentrat</h4>
                                <h5 className="card-title w-75 text-primary">Rp.10.000.00</h5>
                                <hr/>
                                <p className="card-text">Sentrat</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-2 portofolio-item mt-4">
                        <div className="card h-100">
                            <img src="https://blog.broilerx.com/wp-content/uploads/2020/10/pakan_ayam.jpg"/>
                            <div className="card-body">
                                <h4 className="card-title w-75 float-left">Sentrat</h4>
                                <h5 className="card-title w-75 text-primary">Rp.12.00.00</h5>
                                <hr/>
                                <p className="card-text">Sentrat</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-2 portofolio-item mt-4">
                        <div className="card h-100">
                        <img src="https://blog.broilerx.com/wp-content/uploads/2020/10/pakan_ayam.jpg"/>
                            <div className="card-body">
                                <h4 className="card-title w-75 float-left">Sentrat</h4>
                                <h5 className="card-title w-75 text-primary">Rp.10.000.00</h5>
                                <hr/>
                                <p className="card-text">Sentrat</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-2 portofolio-item mt-4">
                        <div className="card h-100">
                        <img src="https://blog.broilerx.com/wp-content/uploads/2020/10/pakan_ayam.jpg"/>
                            <div className="card-body">
                                <h4 className="card-title w-75 float-left">Sentrat</h4>
                                <h5 className="card-title w-75 text-primary">Rp.10.000.00</h5>
                                <hr/>
                                <p className="card-text">Sentrat</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-2 portofolio-item mt-4">
                        <div className="card h-100">
                            <img src="https://blog.broilerx.com/wp-content/uploads/2020/10/pakan_ayam.jpg"/>
                            <div className="card-body">
                                <h4 className="card-title w-75 float-left">Sentrat</h4>
                                <h5 className="card-title w-75 text-primary">Rp.10.000.00</h5>
                                <hr/>
                                <p className="card-text">Sentrat</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-2 portofolio-item mt-4">
                        <div className="card h-100">
                            <img src="https://blog.broilerx.com/wp-content/uploads/2020/10/pakan_ayam.jpg"/>
                            <div className="card-body">
                                <h4 className="card-title w-75 float-left">Sentrat</h4>
                                <h5 className="card-title w-75 text-primary">Rp.10.000.00</h5>
                                <hr/>
                                <p className="card-text">Sentrat</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-2 portofolio-item mt-4">
                        <div className="card h-100">
                            <img src="https://blog.broilerx.com/wp-content/uploads/2020/10/pakan_ayam.jpg"/>
                            <div className="card-body">
                                <h4 className="card-title w-75 float-left">Sentrat</h4>
                                <h5 className="card-title w-75 text-primary">Rp.12.000.00</h5>
                                <hr/>
                                <p className="card-text">Sentrat</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
       
    }else if(dataId === "pakan koceng"){
        return(
            <div>
                <h2 align="center">pakan koceng</h2>
                <div className="row">
                    <div className="col col-sm-2 portofolio-item mt-4">
                        <div className="card h-100">
                            <img src=" https://s3.bukalapak.com/img/3433273664/w-1000/Pakan_Makanan_Kucing_CP_Bolt_Tuna_Flavour_bentuk_ikan_1_Kg.png"/>
                            <div className="card-body">
                                <h4 className="card-title w-75 float-left">pakan koceng</h4>
                                <h5 className="card-title w-75 text-primary">Rp.10.000</h5>
                                <hr/>
                                <p className="card-text">Meong</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-2 portofolio-item mt-4">
                        <div className="card h-100">
                            <img src=" https://s3.bukalapak.com/img/3433273664/w-1000/Pakan_Makanan_Kucing_CP_Bolt_Tuna_Flavour_bentuk_ikan_1_Kg.png"/>
                            <div className="card-body">
                                <h4 className="card-title w-75 float-left">pakan koceng</h4>
                                <h5 className="card-title w-75 text-primary">Rp.10.000</h5>
                                <hr/>
                                <p className="card-text">Meong</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-2 portofolio-item mt-4">
                        <div className="card h-100">
                            <img src=" https://s3.bukalapak.com/img/3433273664/w-1000/Pakan_Makanan_Kucing_CP_Bolt_Tuna_Flavour_bentuk_ikan_1_Kg.png"/>
                            <div className="card-body">
                                <h4 className="card-title w-75 float-left">pakan koceng</h4>
                                <h5 className="card-title w-75 text-primary">Rp.20.000</h5>
                                <hr/>
                                <p className="card-text">Meong</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-2 portofolio-item mt-4">
                        <div className="card h-100">
                            <img src=" https://s3.bukalapak.com/img/3433273664/w-1000/Pakan_Makanan_Kucing_CP_Bolt_Tuna_Flavour_bentuk_ikan_1_Kg.png"/>
                            <div className="card-body">
                                <h4 className="card-title w-75 float-left">pakan koceng</h4>
                                <h5 className="card-title w-75 text-primary">Rp.10.000.00</h5>
                                <hr/>
                                <p className="card-text">Meong</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-2 portofolio-item mt-4">
                        <div className="card h-100">
                            <img src=" https://s3.bukalapak.com/img/3433273664/w-1000/Pakan_Makanan_Kucing_CP_Bolt_Tuna_Flavour_bentuk_ikan_1_Kg.png"/>
                            <div className="card-body">
                                <h4 className="card-title w-75 float-left">pakan koceng</h4>
                                <h5 className="card-title w-75 text-primary">Rp.20.000</h5>
                                <hr/>
                                <p className="card-text">Meong</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-2 portofolio-item mt-4">
                        <div className="card h-100">
                            <img src=" https://s3.bukalapak.com/img/3433273664/w-1000/Pakan_Makanan_Kucing_CP_Bolt_Tuna_Flavour_bentuk_ikan_1_Kg.png"/>
                            <div className="card-body">
                                <h4 className="card-title w-75 float-left">pakan koceng</h4>
                                <h5 className="card-title w-75 text-primary">Rp.20.000</h5>
                                <hr/>
                                <p className="card-text">Meong</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-2 portofolio-item mt-4">
                        <div className="card h-100">
                            <img src=" https://s3.bukalapak.com/img/3433273664/w-1000/Pakan_Makanan_Kucing_CP_Bolt_Tuna_Flavour_bentuk_ikan_1_Kg.png"/>
                            <div className="card-body">
                                <h4 className="card-title w-75 float-left">pakan koceng</h4>
                                <h5 className="card-title w-75 text-primary">Rp.30.000</h5>
                                <hr/>
                                <p className="card-text">Meong</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function LoginPage() {
    let history = useHistory();
    let location = useLocation();
  
    let { from } = location.state || { from: { pathname: "/"} };
    let login = () => {
        fakeAuth.authenticate(() => {
            history.replace(from);
        });
    };
  
    return (
        <div className="w-50 text-center cover-container d-flex h-100 p-3 mx-auto flex-column">
            <main role="main" class="inner cover">
            <h1 class="cover-heading">Auth.</h1>
            <p class="lead">You must log in to view the page at {from.pathname}</p>
            <p class="lead">
                <button className="btn btn-outline-primary" onClick={login}>Log in</button>
            </p>
            </main>
        </div>
    );
}
