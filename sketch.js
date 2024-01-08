

class Particle {
    constructor(x,y,dx,dy,r) {
      this.x = x
      this.y = y
      this.dx = dx
      this.dy = dy
      this.r = r
    }
    
    draw() {
      ellipse(this.x,this.y,this.r*2,this.r*2)
      
      // checks for direction change
      if(this.x + this.r > width || this.x - this.r < 0) this.dx *= -1
      if(this.y + this.r > height || this.y - this.r < 0) this.dy *= -1
      
      this.x += this.dx
      this.y += this.dy
      
    }
  }
  
  var particles = []

  var num_particles = 0
  
  function setup() {
    createCanvas(windowWidth, windowHeight);

    particles = []

    num_particles = Math.floor(windowWidth*windowHeight/20000)
    
    for(let i = 0;i< num_particles; i++) {
      
      var rad = Math.random()*2 + 3
      
      var x = Math.random()*(width - rad*2) + rad
      var y = Math.random()*(height - rad*2) + rad
      
      var dx = Math.sin(x)
      var dy = Math.cos(y)
      particles.push( new Particle(x,y,dx,dy,rad))
    }  
    
  }
  
  function draw() {
    background(0);
    
    for(let i = 0;i < particles.length; i++) {
      particles[i].draw()
    }
    
    //lines between particles
    
    for(let i = 0;i<particles.length; i++) {
      for(let j = 0; j < particles.length; j++) {
        
        var d = dist(particles[i].x, particles[i].y, particles[j].x, particles[j].y)
        
        if( d < 200) {
           stroke(`rgba(255,255,255,${1 - d/200})`)
          line(particles[i].x, particles[i].y, particles[j].x, particles[j].y)
        }
      }
    }
     
  }

  function windowResized() {
	resizeCanvas(windowWidth, windowHeight);

    particles = []
    num_particles = Math.floor(windowWidth*windowHeight/20000)
    
    for(let i = 0;i< num_particles; i++) {
      
      var rad = Math.random()*2 + 3
      
      var x = Math.random()*(width - rad*2) + rad
      var y = Math.random()*(height - rad*2) + rad
      
      var dx = Math.sin(x)
      var dy = Math.cos(y)
      particles.push( new Particle(x,y,dx,dy,rad))
    }
}