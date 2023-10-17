export default class DatosBuilder {

    userSuccess(){
        this.name = "tester@crossbrowsertesting.com";
        this.password = "test123";
        return this;
    }

    userMissed(){
        this.name = "testercrossbrow@sertesting.com";
        this.password = "123";
        return this;
    }

    newTodo(){
        this.todo = "Cypress is the best framework of the world!"; 
        return this;
    }

    build(){
        return this;
    }
}