const Person = function(firstAndLast) {
    // Cambia solo el código debajo de esta línea
    // Completa el método de abajo e implementa los otros de    manera similar
  
    if(typeof firstAndLast !== "string") return false;
    let array = firstAndLast.split(" "),
      fullName = firstAndLast;
    let properties={
  
      firstName: array[0],
      lastName: array[1]
    }
    
  
    this.getFullName = function() {
      return `${properties.firstName} ${properties.lastName}`;
    };
  
    this.getFirstName = function() {
      return properties.firstName;
    };
  
      this.getLastName = function() {
      return properties.lastName;
    };
  
      this.setFirstName = function(name) {
      properties.firstName=name;
    };
  
      this.setLastName = function(last) {
        properties.lastName=last;
      };
  
      this.setFullName = function(name){
  
        fullName = name;
      };
    
    
    
  };
  
const bob = new Person('Bob Ross');
bob.getFullName();