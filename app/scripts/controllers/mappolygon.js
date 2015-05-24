'use strict';

/**
 * @ngdoc function
 * @name mmtApp.controller:MappolygonCtrl
 * @description
 * # MappolygonCtrl
 * Controller of the mmtApp
 */
angular.module('mmtApp')
  .controller('MapPolygonCtrl', function ($scope, uiGmapGoogleMapApi) {

    var activeShape = false,
        gmaps,
        fillColor = '#ffff00',
        fillOpacity =  0.5;

        $scope.render = true;
        $scope.currentShape = null;


    // Define Map

    $scope.map = {
      map: {},
      center: {
        latitude: 53.406754,
        longitude: -2.158843
      },
      pan: true,
      zoom: 14,
      refresh: false,
      options: {
        disableDefaultUI: false
      },
      events: {},
      bounds: {},

    };

    // Init Map

    uiGmapGoogleMapApi.then(function(maps) {

      gmaps = maps;

      $scope.drawingManagerOptions = {
        drawingMode: google.maps.drawing.OverlayType.MARKER,
        drawingControl: true,
        drawingControlOptions: {
          position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: [
              // google.maps.drawing.OverlayType.MARKER,
              // google.maps.drawing.OverlayType.CIRCLE,
              google.maps.drawing.OverlayType.POLYGON,
              // google.maps.drawing.OverlayType.POLYLINE,
              // google.maps.drawing.OverlayType.RECTANGLE
            ]
        },
        polygonOptions: {
          fillColor: fillColor,
          fillOpacity: fillOpacity,
          strokeWeight: 1,
          clickable: false,
          editable: true,
          zIndex: 1
        }
      };

      // Load POLYGON
      setTimeout(function() {

        loadPolygon($scope.$parent.saved_polygon);

    }, 1000);

    });

    $scope.drawingManagerControl = {};

    $scope.drawEventHandler = {
      polygoncomplete: function (dm, name, scope, objs) {
        setShape(objs[0]);
      }
    };

    // Delete current shape

    $scope.deleteShape = function() {

      if ($scope.currentShape) {
       $scope.currentShape.setMap(null);

       $scope.currentShape = null;
       $scope.$parent.polygon = null;
      }

      toggleDraw();

    };

   // Show/hide editor

   function toggleDraw() {

     var dm;

     if (!$scope.drawingManagerControl.getDrawingManager) {
       return;
     }

     activeShape = true;

     if ($scope.currentShape) {
       activeShape = false;
     }

     dm = $scope.drawingManagerControl.getDrawingManager();

     dm.setDrawingMode(null)
     dm.setOptions({
          drawingControl: activeShape
     });

   }

   // Set current shape

   function setShape(shape) {

     $scope.currentShape = shape;

     $scope.currentShape.setEditable(true);

     $scope.$parent.polygon = $scope.currentShape;
      toggleDraw();

   }

   // Load shape indide map

   function loadPolygon(p) {

     if (!p) {
       return;
     }

      var cc = [],
         polygon,
         point,
         map = $scope.map.map.getGMap();

     for(var i = 0; i < p.length; i++) {

       point = p[i];

       cc.push(new gmaps.LatLng(point.lat, point.lon));

     }

     polygon = new gmaps.Polygon({
       path: cc,
       strokeWeight: 1,
       fillColor: fillColor,
       fillOpacity: fillOpacity
     });

     polygon.setMap(map);

     setShape(polygon);

   }

  });
