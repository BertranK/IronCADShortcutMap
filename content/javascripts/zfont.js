// Init Zfont plugin and bind to Zdog
Zfont.init(Zdog);

// Create Zdog Illustration
// https://zzz.dog/api#illustration
var illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  dragRotate: true,
  rotate: {x: -0.32, y: 0.64, z: 0},
  resize: 'fullscreen',
  onResize: function(width, height) {
    var minSize = Math.min(width, height);
    this.zoom = minSize / 420;
  }
});

// Create a Font object
// You can use any .ttf or .otf font!
// https://github.com/jaames/zfont#zdogfont
var font = new Zdog.Font({
  src: 'https://cdn.jsdelivr.net/gh/jaames/zfont/demo/fredokaone.ttf'
});

// Create a TextGroup object for the title
// https://github.com/jaames/zfont#zdogtextgroup
var title = new Zdog.TextGroup({
  addTo: illo,
  font: font,
  value: "IronCAD Keyboard Shortcuts Map",
  fontSize: 10,
  //translate: {y: -100},
  textAlign: 'center',
  textBaseline: 'middle',
  color: '#fff',
  fill: true
});

// Duplicate the title to create a shadow effect
var titleShadow = title.copyGraph({
  translate: { z: -6 },
  color: '#aab'
});


// Settings for the wave animation
var t = 0;
var tStep = 5;
var amplitude = 0.25;
var frequency = 50;

// Wave function
// This loops through every shape in a TextGroup and modifies its position according to a sine wave
function wave(group) {
  group.children.forEach(shape => {
    var x = shape.translate.x + t;
    shape.translate.y += amplitude * Math.sin(x / frequency);
  });
}

// Animation loop
function animate() {
  wave(title);
  wave(titleShadow);
  wave(sub);
  wave(subShadow);
  t += tStep;
  illo.updateRenderGraph();
  requestAnimationFrame(animate);
}
animate();