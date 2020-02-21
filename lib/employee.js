class Employee {
    constructor(name, id, email, title) {
        this.name = name;
       this.id = id;
       this.email = email;
       this.title = title;
    }

 getName() {
        return `${this.name}`;
    }

getEmail() {
  return  `${this.email}`;
}

getId() {
    return parseInt(`${this.id}`) ;
}


getRole() {
    return `Employee`;
}

}




module.exports = Employee