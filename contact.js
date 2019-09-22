    var dci_pos = { 
        lat: 53.551623,
        lng: 10.007720599999999
    }
    /*
    TODO :  onclick marker open link with key,
            on click icon route directions,

    */
    function initMarker () {
        var marker = new google.maps.Marker({
            position: dci_pos,
            map: map, 
            animation: google.maps.Animation.DROP,
            //icon: "dci_pin.png",
            title: 'DCI Hamburg'
        });
        window.setTimeout(function(){marker.setAnimation(google.maps.Animation.BOUNCE);},600);
    };
    let API_Key = "AIzaSyDLOKCxtRd_pEqn4_1eD2WjVXdtS8V4p3s";//Ahmads API Key
    var map;
    function initMap() {          
        map = new google.maps.Map(document.getElementById('map'), {
            center: dci_pos,
            zoom: 15
        });
        initMarker();
    }
    $(".buttonSubmit").on("click",function(e){
        e.preventDefault();
    });
    function returnRouteCall () {
        var _r_origin = "";
        var _r_destination = dci_pos;
        var RouteCall_URL = "https://maps.googleapis.com/maps/api/directions/json?origin="+_r_origin+"&destination="+_r_destination+"&key="+API_Key;
        return RouteCall_URL;
    }
    function succ (pos) {
        console.log(pos);
    }
    function err (error) {
        console.log(error);
    }
    var userOrigin = navigator.geolocation.getCurrentPosition(succ,err,{enableHighAccuracy: true,timeout: 5000,maximumAge: 10000});

    $(".btn.openRoute").on("click",function(e){
        
        e.preventDefault();
        
        let rurl = returnRouteCall();
        window.open("http://maps.googleapis.com/maps/api/directions/");
    });