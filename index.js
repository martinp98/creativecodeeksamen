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
      height: heightvalue,
      wireframes: false
    }
  });

  Render.run(render);

  var runner = Runner.create();
  Runner.run(runner, engine);

  const size = 4.5;

  let total = document.getElementById('guessvalue').value;

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