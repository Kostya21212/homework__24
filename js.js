let ladder = {
    step: 0,
    up() {
      this.step++;
      console.log(this)
      return this

    },
    down() {
        console.log(this)
      this.step--;
      return this
    },
    showStep: function() { 
      alert(this.step);
      console.log(this)
      return this
    }
  };
console.log(ladder.up().up().down().showStep().down().showStep());