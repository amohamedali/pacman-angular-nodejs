'use strict';

angular.module('pacman', [])
  .service('PacmanService', SPacman);

var SPacman = function () {

  var life = 0;
  var score = 0;
  var pos = {x: 0, y: 0};
  var direction = 'left';
  var killer = false;
  var speed = 1;
  var self = this;

  this.init =  function() {
    life = 3;
    score = 0;
    pos = {x: 0, y: 0};
    direction = 'left';
    killer = false;
    speed = 1;
  }

  this.die = function() {
    life -= 1;
    pos = {x: 0, y: 0};
    killer = false;
    speed = 1;
  }

  this.getPill = function() {
    score += 10;
  }

  this.kill = function() {
    score += 100;
  }

  this.getBonus = function() {
    killer = true;
    speed = 2;
  }

  this.endBonus = function() {
    killer = false;
    speed = 1;
  }

  this.setDirection = function(dir) {
    direction = dir;
  }

}