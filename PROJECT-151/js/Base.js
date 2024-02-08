AFRAME.registerComponent("base", {
    schema: {
      radius: { type: "number", default: 150 },
      height: { type: "number", default: 3 }
    },
  
    init: function() {
      this.el.setAttribute("geometry", {
        primitive: "cylinder",
        radius: this.data.radius,
        height: this.data.height
      });
      this.el.setAttribute("material", { color: "#213343" });
    }
  });