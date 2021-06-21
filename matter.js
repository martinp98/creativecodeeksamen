var physicssim = physicssim || {};

physicssim.guessinggame = function() {
  var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composite = Matter.Composite,
    Composites = Matter.Composites,f
    Common = Matter.Common,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World,
    Bodies = Matter.Bodies;

  var engine = Engine.create({
      enableSleeping: true
    }),
    world = engine.world;

  var heightvalue = window.innerHeight;  
  var widthvalue = window.innerWidth;

  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: widthvalue * 1/3,
      height: heightvalue * 0.9,
      wireframes: false,
      background: 'white'
    }
  });

  Render.run(render);

  var runner = Runner.create();
  Runner.run(runner, engine);

  function spawnObjects()
  {

  World.clear(world);

  let total = Math.floor((Math.random() * 500) + 30);
  document.getElementById('guessvalue').setAttribute('value', total);

  const size = 4.5;

  setInterval(() => {
    if (total-- > 0) {
      const circle = Bodies.circle((widthvalue * 1/3) * 0.5, 0, size, {
        density: 1,
        frictionAir: 0.05,
        render: {
          visible: true
        }
      });

      Matter.Events.on(circle, "sleepStart", () => {
        Matter.Body.setStatic(circle, true);
      });
      World.add(world, circle);
    }
  }, 10);

  World.add(world, Bodies.rectangle(widthvalue * 1/3 * 0.5, heightvalue * 0.8, widthvalue * 1/3 * 2/3, 5,{
    isStatic: true,
    render: {
      fillStyle: "#FFFFFF",
      visible: true
    }
  })
);

World.add(world, Bodies.rectangle(widthvalue * 1/3 * 5/6, heightvalue * 0.6 , 5, heightvalue * 0.4,{
  isStatic: true,
  render: {
    fillStyle: "#FFFFFF",
    visible: true
  }
})
);

World.add(world, Bodies.rectangle(widthvalue * 1/3 * 1/6, heightvalue * 0.6 , 5, heightvalue * 0.4,{
  isStatic: true,
  render: {
    fillStyle: "#FFFFFF",
    visible: true
  }
})
);
};

window.onload = function () 
{

  spawnObjects();
  setInterval(function(){

  if(+document.getElementById("progressBar").value >= 30)
  {
    document.getElementById("progressBar").value = 0;
    spawnObjects();
    document.getElementById('guessbutton').disabled = false;
  }
  document.getElementById("progressBar").value = +document.getElementById("progressBar").value + 1;
}, 1000);
  
}
  return {
    engine: engine,
    runner: runner,
    render: render,
    canvas: render.canvas,
    stop: function() {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
    }
  };
};

physicssim.guessinggame();


/*
spawnObjects();
  setInterval(function () 
  {
    spawnObjects();
    document.getElementById('guessbutton').style.display = 'block'; 
    this.style.display = 'block';
    
    

  
  }, 10000);*/