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

  const size = 10;

  shapeRan = Math.floor((Math.random() * 3) + 1);
  frictionRan = Math.floor((Math.random() * 3) + 1);

  if(shapeRan == 1)
  {
    setInterval(() => {
      if (total-- > 0) {
        const circle = Bodies.circle(Math.floor((Math.random() * (widthvalue * 1/3) * 1/3) + (widthvalue * 1/3) * 1/3), 0, size, {
          density: 1,
          frictionAir: 0.05 * frictionRan,
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
  }

  if(shapeRan == 2)
  {
    setInterval(() => {
      if (total-- > 0) {
        const triangle = Bodies.polygon(Math.floor((Math.random() * (widthvalue * 1/3) * 1/3) + (widthvalue * 1/3) * 1/3), 0, 3, size, {
          density: 1,
          frictionAir: 0.05 * frictionRan,
          render: {
            visible: true
          }
        });
  
        Matter.Events.on(triangle, "sleepStart", () => {
          Matter.Body.setStatic(triangle, true);
        });
        World.add(world, triangle);
      }
    }, 10);
  }

  if(shapeRan == 3)
  {
    setInterval(() => {
      if (total-- > 0) {
        const square = Bodies.rectangle(Math.floor((Math.random() * (widthvalue * 1/3) * 1/3) + (widthvalue * 1/3) * 1/3), 0, size, size, {
          density: 1,
          frictionAir: 0.05 * frictionRan,
          render: {
            visible: true
          }
        });
  
        Matter.Events.on(square, "sleepStart", () => {
          Matter.Body.setStatic(square, true);
        });
        World.add(world, square);
      }
    }, 10);
  }


    World.add(world, Bodies.circle(widthvalue * 0.1 * Math.floor((Math.random() * 3) + 1), heightvalue * 0.2 * Math.floor((Math.random() * 3) + 1), widthvalue * 0.02 * Math.floor((Math.random() * 3) + 1), {
      isStatic: true,
      render: {
        fillStyle: "#000000",
        visible: true
      }
    })
  );

  World.add(world, Bodies.circle(widthvalue * 0.1 * Math.floor((Math.random() * 3) + 1), heightvalue * 0.2 * Math.floor((Math.random() * 3) + 1), widthvalue * 0.02 * Math.floor((Math.random() * 3) + 1), {
    isStatic: true,
    render: {
      fillStyle: "#000000",
      visible: true
    }
  })
);

World.add(world, Bodies.circle(widthvalue * 0.1 * Math.floor((Math.random() * 3) + 1), heightvalue * 0.2 * Math.floor((Math.random() * 3) + 1), widthvalue * 0.02 * Math.floor((Math.random() * 3) + 1), {
  isStatic: true,
  render: {
    fillStyle: "#000000",
    visible: true
  }
})
);

  World.add(world, Bodies.rectangle(0, heightvalue * 0.9, widthvalue, 5,{
    isStatic: true,
    render: {
      fillStyle: "#FFFFFF",
      visible: true
    }
  })
);

World.add(world, Bodies.rectangle(widthvalue * 1/3, heightvalue * 0.6 , 5, heightvalue,{
  isStatic: true,
  render: {
    fillStyle: "#FFFFFF",
    visible: true
  }
})
);

World.add(world, Bodies.rectangle(0, heightvalue * 0.6 , 5, heightvalue,{
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