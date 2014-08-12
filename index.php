<!DOCTYPE html>
<html ng-app="laRogueApp">
<head>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/styles.css">
    <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
    <script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>	
    <script src="js/bootstrap.min.js"></script>
    <script src="js/TweenMax.min.js"></script>
    <script src="js/jquery.gsap.min.js"></script>
    <script type="text/javascript" src="js/angular.min.js"></script>
    <script src="js/script.js"></script>
    <script src="js/app.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js"></script>
    
    <title>La Rogue</title>
</head>
<body ng-controller="LaRougeCtrl as laRouge">
    <div id="main-angular" class="view-frame" ng-view></div>
    <footer id="footer">
        <div class="footer-subscribe">
            <div class="container text-center">
                <div class="row">	
                    <h1>Lorem ipsum dolor sit amet</h1>
                </div>
                <div class="row">
                    <form class="form-horizontal" role="form">
                        <div class="form-group form-group-lg">
                            <label class="col-sm-5 control-label" style="text-align: left; font-size: 16px; color: #ddccdc; padding-top: 0;" for="correo-footer">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nibh nulla, aliquet in sagittis et, aliquet id dolor.</label>
                            <div class="col-sm-4">
                                <input class="form-control" type="text" id="correo-footer" placeholder="Correo">
                            </div>
                            <div class="col-sm-3">
                                <button type="submit" class="btn btn-larouge-reverse pull-left">Inscribime</button>	
                            </div>
                        </div>
                    </form>		
                </div>
            </div>
        </div>
        <div class="footer-contact">
            <div class="container text-center">
                <div class="row">	
                    <div class="col-md-4 col-md-offset-2 margin-bottom">
                        <span class="green-icon telephone glyphicon"></span> Telefono: +511 225.2064
                    </div>
                    <div class="col-md-6 margin-bottom">
                        <span class="green-icon location glyphicon"></span> Direccion: Av. Las Arted Norte 364 San Borja - Lima Peru
                    </div>
                </div>
                <ul class="footer-menu">
                    <li class="footer-menu-item"><a href="javascript:void(0)">Home</a></li>
                    <li class="footer-menu-item"><a href="javascript:void(0)">Home</a></li>
                    <li class="footer-menu-item"><a href="javascript:void(0)">Home</a></li>
                    <li class="footer-menu-item"><a href="javascript:void(0)">Home</a></li>
                    <li class="footer-menu-item"><a href="javascript:void(0)">Home</a></li>
                    <li class="footer-menu-item"><a href="javascript:void(0)">Home</a></li>
                    <li class="footer-menu-item"><a href="javascript:void(0)">Home</a></li>
                    <li class="footer-menu-item"><a href="javascript:void(0)">Home</a></li>
                    <li class="footer-menu-item"><a href="javascript:void(0)">Home</a></li>
                    <li class="footer-menu-item"><a href="javascript:void(0)">Home</a></li>
                    <li class="footer-menu-item"><a href="javascript:void(0)">Home</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-logo">
            <div class="container text-center text-footer">
                <div class="row">	
                    <p><?php echo date("Y"); ?> @ Le Rogue Spa. Todos los derechos reservados.</p>
                    <a href="javascript:void(0)">Terminos & politicas</a>
                </div>
                <div class="row">
                    <span class="green-icon logo glyphicon"></span>
                    <a class="manya-link" href="javascript:void(0)"> Manya.pe</a>
                    <a href="javascript:void(0)"> Diseno de paginas Web</a>
                </div>
            </div>
        </div>
    </footer>
</body>
</html>