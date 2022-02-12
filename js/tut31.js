console.log("This is tutorial31.js ,Class and Inheritance");

class employee {
    constructor(givenName,givenExperience,givenDivision){
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }
    slogon(){
        return `I am ${this.name} and this company is the best`;
    }
    joiningYear(){
        return 2020 - this.experience;
    }
    // static method
    static add(a,b){
        return a + b;
    }
}

class programmer extends employee{
    constructor(givenName,givenExperience,givenDivision,language,github){
        super(givenName,givenExperience,givenDivision);
        this.language = language;
        this.github = github;
    }
    favoriteLanguage(){
        if(this.language == "Python"){
            return "python";
        }else{
            return "JavaScript";
        }
    }
    static multiply(a,b){
        return a * b;
    }
}

let krish = new employee("Murari",24,"Softwear");
console.log(krish);
console.log(krish.joiningYear());
//static console
console.log(employee.add(25,25));

let murli = new programmer("Murli",25,"SoftWear","Go","murli673");
console.log(murli);
console.log(murli.favoriteLanguage());
console.log(programmer.multiply(6,6));
 
