import React, {Component}from 'react';
import logo from './meu-template/images/logos/logo.svg';
import teladeFundo from './meu-template/images/telaHome.svg';
import sobre from './meu-template/uploads/pr_bg.jpg';
import time1 from './meu-template/uploads/matheus.jpg';
import time2 from './meu-template/uploads/augusto.jpg';
import time3 from './meu-template/uploads/mayara.jpg';
import time4 from './meu-template/uploads/douglas.jpg';
import time5 from './meu-template/uploads/luis.jpg';
import gambiarra from './meu-template/uploads/gambiarra.svg';

import {Link} from 'react-router-dom';


export default class Site extends Component {


render() {

    return (
            < >
            <div className="app_version" data-spy="scroll" data-target="#navbarApp" data-offset="98">
            <div className="teladeFundo"  style={{backgroundImage: `url(${teladeFundo})`}}>

                <header className="header header_style_01" >

                    <nav className="navbar header-nav navbar-expand-lg">

                        <div className="container">

                            <div className="collapse navbar-collapse justify-content-end" id="navbarApp">
                                <ul className="navbar-nav">
                                    <li><a className="nav-link active" href="#home"><b>Home</b></a></li>
                                    <li><a className="nav-link" href="#purchase"><b>Sobre nós</b></a></li>
                                    <li><a className="nav-link" href="#features"><b>Serviços</b></a></li>
                                    <li><a className="nav-link" href="#screenshots"><b>Screenshots</b></a></li>
                                    <li><a className="nav-link" href="#team"><b>Time</b></a></li>
                                    <li><a className="nav-link" href="#testimonials"><b>Cliente</b></a></li>

                                    <link to="/Interacao">
                                    <li><a className="nav-link" href="#"><b>Login</b></a></li>
                                    </link>

                                </ul>
                            </div>
                        </div>
                    </nav>
                    {/*papaparououoparoudsijsdhidhdffjhdsdbdvuddyvdgdwjgfuwfgefegfiegeufguf8*/}

                </header>
                <a className="navbar-brand " href="index.html"><img  src={logo} style={{ marginTop: '-120px' }}  /></a>

                <div id="home" className="parallax first-section" >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                
                            </div>

                        </div>{/* end row */}
                    </div>{/* end container */}
                </div>{/* end section */}
            </div>{/* Fim da imagem da home e navbar */}


            {/*Inicio do sobre nós*/}
            <div id="purchase" className="parallax section db" style={{backgroundImage: `url(${sobre})`}} >
                <div className="container">
                    <div className="section-title text-center">

                        <h3>Sobre nós</h3>
                        <p className="lead">Somos uma empresa formada por amantes de tecnologia e jogos, foi então que surgiu
                            uma ideia para criar uma solução voltada para  RPG de mesa.
            </p>
                    </div>{/* end title */}
                </div>{/* end container */}
            </div>{/* end section */}
            
            {/*Fim do sobre nós*/}

            <div id="features" className="section wb" >
                <div className="container" >
                    <div className="section-title text-center">
                        <h3>Recursos da nossa aplicação</h3>
                        {/*<p className="lead">Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum<br />auctor nisi elit consequat ipsum, nec sagittis sem!</p>*/}
                    </div>{/* end title */}

                    <div id="default" className="row clearfix zenith_slider">

                        {/*The First row*/}
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 left-row">
                            <ul className="features-left">
                                <li className="highlight lhgh" data-index="0">
                                    <i className="flaticon-wordpress-logo effect-1" ></i>
                                    <div className="fl-inner">
                                        <h4>Site responsivel</h4>
                                    </div>
                                </li>{/* .highlight .left-row */}

                                <li className="highlight lhgh" data-index="1">
                                    <i className="flaticon-windows effect-1"></i>
                                    <div className="fl-inner">
                                        <h4>Browser</h4>
                                        <p>Acessivel na maioria do navegadores</p>
                                    </div>
                                </li>{/* .highlight .left-row */}

                                <li className="highlight lhgh" data-index="1">
                                    <i className="flaticon-windows effect-1"></i>
                                    <div className="fl-inner">
                                        <h4>Browser</h4>
                                        <p>Acessivel na maioria do navegadores</p>
                                    </div>
                                </li>{/* .highlight .left-row */}
                               

                                <li className="highlight lhgh" data-index="3">
                                    <i className="flaticon-new-file effect-1"></i>
                                    <div className="fl-inner">
                                        <h4>Facil interação</h4>
                                        <p></p>
                                    </div>
                                </li>{/* .highlight .left-row */}
                            </ul>
                        </div>{/* .row .left-row */}

                        <div className="highlights-phone col-lg-4 col-md-4 col-sm-12 col-xs-12 wht">

                            <div className="phone-holder">
                                <div id="fon"></div>
                                <div className="hgh-linner hgi" data-index="0">
                                    <img width="190" height="320"   className="attachment-highlight wp-post-image" alt="screen" />
                                </div>
                                
                            </div>
                        </div>

                        {/*The Second row*/}
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 right-row">
                            <ul className="features-right">
                                <li className="highlight rhgh" data-index="4">
                                    <i className="flaticon-pantone effect-1"></i>
                                    <div className="fr-inner">
                                        <h4>Limitless Colors</h4>
                                        <p>Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet.</p>
                                    </div>
                                </li>{/* .highlight .left-row */}
                                <li className="highlight rhgh" data-index="5">
                                    <i className="flaticon-cloud-computing effect-1"></i>
                                    <div className="fr-inner">
                                        <h4>Lifetime Update</h4>
                                        <p>Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet.</p>
                                    </div>
                                </li>{/* .highlight .left-row */}
                                <li className="highlight rhgh" data-index="6">
                                    <i className="flaticon-line-graph effect-1"></i>
                                    <div className="fr-inner">
                                        <h4>SEO Friendly</h4>
                                        <p>Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. </p>
                                    </div>
                                </li>{/* .highlight .left-row */}
                                <li className="highlight rhgh" data-index="7">
                                    <i className="flaticon-coding effect-1"></i>
                                    <div className="fr-inner">
                                        <h4>Simple Clean Code</h4>
                                        <p>Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. </p>
                                    </div>
                                </li>{/* .highlight .left-row */}
                            </ul>
                        </div>{/* .row .left-row */}

                    </div>{/*Highlights close*/}
                </div>{/* end container */}
            </div>{/* end section */}

            <div className="how-its-work clearfix">
                <div className="hc colon1"style={{backgroundImage: `url(${gambiarra})`}}>
                    
                </div>{/* end col */}

            </div>{/* end how-its-work */}

            <div id="screenshots" className="section wb">
                <div className="container">
                    <div className="section-title text-center">
                        <h3>Screenshots da nossa aplicação</h3>
                        {/* <p className="lead">Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum<br />auctor nisi elit consequat ipsum, nec sagittis sem!</p>*/}
                    </div>{/* end title */}

                    <div className="owl-screenshots owl-carousel owl-theme">
                        <div className="owl-screen">
                            <div className="service-widget">
                                <div className="post-media entry wow fadeIn">
                                    <a href="uploads/sasas.png" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="flaticon-unlink"></i></a>
                                    <img src="uploads/sasas.png" alt="" className="img-fluid img-rounded" />
                                    <div className="magnifier"></div>
                                </div>
                            </div>{/* end service */}
                        </div>{/* end col */}

                        <div className="owl-screen">
                            <div className="service-widget">
                                <div className="post-media entry wow fadeIn">
                                    <a href="uploads/PrototicoFuncional.png" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="flaticon-unlink"></i></a>
                                    <img src="uploads/PrototicoFuncional.png" alt="" className="img-fluid img-rounded" />
                                        <div className="magnifier"></div>
                        </div>
                                </div>{/* end service */}
                            </div>{/* end col */}
                      
                        </div>{/* end row */}
                    </div>{/* end container */}
                </div>{/* end section */}



                <div id="team" className="section wb">
                    <div className="container">
                        <div className="section-title text-center">
                            <h3>O nosso time de desenvolvimento</h3>
                        </div>{/* end title */}

                        <div className="row dev-list text-center">
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                                <div className="widget clearfix">
                                    <img src={time1} alt="" className="img-fluid rounded-circle" />
                                    <div className="widget-title">
                                        <h3>Matheus Nunes</h3>
                                        <small>Scrum Master/ Full Stack</small>
                                    </div>
                                    {/* end title */}
                                    <p>Hello guys, I am Soren from Sirbistana. I am senior art director and founder of Violetta.</p>

                                    <div className="footer-social">
                                        <a href="https://www.facebook.com/profile.php?id=100031458586485" target="_blank" className="btn global-radius"><i className="fa fa-facebook"></i></a>
                                        <a href="https://github.com/MatheusFeNusi" target="_blank" className="btn global-radius"><i className="fa fa-github"></i></a>
                                    </div>
                                </div>{/*widget */}
                            </div>{/* end col */}

                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.4s">
                                <div className="widget clearfix">
                                    <img src={time4} alt="" className="img-fluid rounded-circle" />
                                    <div className="widget-title">
                                        <h3>Douglas Holanda</h3>
                                        <small>Creative Technologist Microsoft</small>
                                    </div>
                                    {/* end title */}
                                    <p>Hello guys, I am Soren from Sirbistana. I am senior art director and founder of Violetta.</p>

                                    <div className="footer-social">
                                        <a href="https://www.facebook.com/profile.php?id=100011323815007" target="_blank" className="btn global-radius"><i className="fa fa-facebook"></i></a>
                                        <a href="https://github.com/bolsonabo" target="_blank" className="btn global-radius"><i className="fa fa-github"></i></a>
                                    </div>
                                </div>{/*widget */}
                            </div>{/* end col */}

                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.6s">
                                <div className="widget clearfix">
                                    <img src={time5} alt="" className="img-fluid rounded-circle" />
                                    <div className="widget-title">
                                        <h3>Luis Augusto</h3>
                                        <small>Front End Developer</small>
                                    </div>
                                    {/* end title */}
                                    <p>Hello guys, I am Soren from Sirbistana. I am senior art director and founder of Violetta.</p>

                                    <div className="footer-social">
                                        <a href="https://www.facebook.com/luis.augusto.52831" target="_blank" className="btn global-radius"><i className="fa fa-facebook"></i></a>
                                        <a href="https://github.com/Luis-Augusto20" target="_blank" className="btn global-radius"><i className="fa fa-github"></i></a>
                                    </div>
                                </div>{/*widget */}
                            </div>{/* end col */}

                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.6s">
                                <div className="widget clearfix">
                                    <img src={time3} alt="" className="img-fluid rounded-circle" />
                                    <div className="widget-title">
                                        <h3>Mayara Mascarenhas</h3>
                                        <small>Front End Developer</small>
                                    </div>
                                    {/* end title */}
                                    <p>Hello guys, I am Soren from Sirbistana. I am senior art director and founder of Violetta.</p>

                                    <div className="footer-social">
                                        <a href="https://www.facebook.com/mayara.s.borges.75" target="_blank" className="btn global-radius"><i className="fa fa-facebook"></i></a>
                                        <a href="#" target="_blank" className="btn global-radius"><i className="fa fa-github"></i></a>
                                    </div>
                                </div>{/*widget */}
                            </div>{/* end col */}

                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.6s" style={{borderColor: 'rgb(87, 87, 87)'}}>
                                <div className="widget clearfix">
                                    <img src={time2} alt="" className="img-fluid rounded-circle" />
                                    <div className="widget-title">
                                        <h3>Augusto Ferreira</h3>
                                        <small>Back End Developer</small>
                                    </div>
                                    {/* end title */}
                                    <p>Hello guys, I am Soren from Sirbistana. I am senior art director and founder of Violetta.</p>

                                    <div className="footer-social">
                                        <a href="https://www.facebook.com/augusto.vieira.908" target="_blank" className="btn global-radius"><i className="fa fa-facebook"></i></a>
                                        <a href="https://github.com/Kuronami" target="_blank" className="btn global-radius"><i className="fa fa-github"></i></a>
                                    </div>
                                </div>{/*widget */}
                            </div>{/* end col */}
                        </div>{/* end row */}
                    </div>{/* end container */}
                </div>{/* end section */}

                

                <section className="section nopad cac text-center">
                    <a href="#"><h3>Interesting our awesome web design services? Just drop an email to us and get quote for free!</h3></a>
                </section>

                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                <div className="widget clearfix">
                                    <div className="widget-title">
                                        <img src="images/logos/logo-app.png" alt="" />
                                        <small>App Landing Template</small>                        </div>
                                    <p> Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus bibendum. Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis dis montes.</p>
                                    <p>Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis dis montes.</p>
                                </div>{/* end clearfix */}
                            </div>{/* end col */}

                            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                <div className="widget clearfix">
                                    <div className="widget-title">
                                        <h3>Contact Details</h3>
                                    </div>

                                    <ul className="footer-links">
                                        <li><a href="mailto:#">info@yoursite.com</a></li>
                                        <li><a href="#">www.yoursite.com</a></li>
                                        <li>91 Leeton Ridge Lane Bettendorf, IA 52722</li>
                                        <li>+61 3 8376 6000</li>
                                    </ul>{/* end links */}
                                </div>{/* end clearfix */}
                            </div>{/* end col */}

                            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                <div className="footer-distributed widget clearfix">
                                    <div className="widget-title">
                                        <h3>Newsletter</h3>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                                    </div>
                                    <div className="footer-right">
                                        <form method="get" action="#">
                                            <input placeholder="Subscribe our newsletter.." name="search" />
                                                <i className="fa fa-envelope-o"></i>
							</form>
						</div>
                                    </div>{/* end clearfix */}
                                </div>{/* end col */}

                                <div className="col-lg-2 col-md-6 col-sm-12 col-xs-12">
                                    <div className="widget clearfix">
                                        <div className="widget-title">
                                            <h3>Social</h3>
                                        </div>
                                        <ul className="footer-links">
                                            <li><a href="#"><i className="fa fa-facebook"></i> Facebook</a></li>
                                            <li><a href="#"><i className="fa fa-github"></i> Github</a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i> Twitter</a></li>
                                            <li><a href="#"><i className="fa fa-pinterest"></i> Pinterest</a></li>
                                        </ul>{/* end links */}
                                    </div>{/* end clearfix */}
                                </div>{/* end col */}
                            </div>{/* end row */}
                        </div>{/* end container */}
    </footer>{/* end footer */}

                    <div className="copyrights">
                        <div className="container">
                            <div className="footer-distributed">
                                <div className="footer-left">
                                    <p className="footer-company-name">Todos direitos reservados. &copy; 2019 <a href="#">EtherGAME</a></p>
                                </div>
                            </div>
                        </div>{/* end container */}
                    </div>{/* end copyrights */}

                     <a href="#home" data-scroll className="dmtop global-radius"><i className="fa fa-angle-up"></i></a>
                     </div>
    </>
                );
        }
}