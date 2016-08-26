import "phoenix_html"
import $ from "jquery"
import SVG from 'svgjs'
import velocity from 'velocity-animate'
import socket from "./socket"
import "./game"

var draw = SVG('screen').size(800, 600)
var circ = draw.circle(20).attr({ fill: '#f06' })
circ.id = "banana"

circ.velocity({ fill: "#ff0000", stroke: "#000000" });
