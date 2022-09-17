// Zdog for IronCAD by Bertrand Kim
let isSpinning = true;

// create illo
let illo = new Zdog.Illustration({
  // set canvas with selector
  element: '.zdog-canvas',
  dragRotate: true,
  // stop rotation when dragging starts
  onDragStart: function() {
    isSpinning = false;
  },
});

// add circle
new Zdog.Ellipse({
  addTo: illo,
  diameter: 80,
  stroke: 20,
  color: '#FFF',
});

// update & render
function animate() {
  // rotate
  if ( isSpinning ) {
    illo.rotate.y += 0.03;
  }
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}
animate();