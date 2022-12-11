const Car = class {
    constructor(since, color, model) {
      this.since = since;
      this.color = color;
      this.model=model;
    }
  
    currentYear(){
      var current_year= new Date().getFullYear()
      return current_year
    }
    
    age() {
      return this.currentYear-this.since;
    }
  };
  