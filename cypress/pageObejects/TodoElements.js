export default class TodoElements{

    //Elementos
    newTodoInput = "#todotext";
    buttonAdd = "#addbutton";
    listTodoLI = ".ng-scope";
    listToDoUl = ".list-unstyled"
    checkboxes = ":checkbox";
    spanText = "body > div > div > div > ul > li:nth-child(1) > span";
    containerTodos = "body > div > div > div";
    archiveLink = "body > div > div > div > a";
    countRemaining = ".ng-binding";

    //Servicio
    endpoint = "/todo-app";

    //Pagina
    getTodoInput(){
        return cy.get(this.newTodoInput, {timeout: 5000});
    }
    getCountRemaining(){
        return cy.get(this.countRemaining, {timeout: 5000});
    }
    getArchiveLink(){
        return cy.get(this.archiveLink, {timeout: 5000});
    }
    getContainerTodos(){
        return cy.get(this.containerTodos, {timeout: 5000});    
    }
    getButtonAdd(){
        return cy.get(this.buttonAdd, {timeout: 5000});
    }
    getSpanText(){
        return cy.get(this.spanText, {timeout: 5000});
    }
    getListTodoChecked(){
        return cy.get(this.listToDoUl).within(() => {
            cy.get('li').find(this.checkboxes).each((checkbox) => {
                if(cy.wrap(checkbox).uncheck()){
                    cy.wrap(checkbox).check();
                }
            });
        });
    }
    getListTodoUnChecked(){
        return cy.get(this.listToDoUl).within(() => {
            cy.get('li').find(this.checkboxes).each((checkbox) => {
                cy.wrap(checkbox).check()
            })
            cy.get('li').find(this.checkboxes).each((checkbox) => {
                cy.wrap(checkbox).uncheck()
            })
        });
    }
    goToURL(){
        return cy.visit(this.endpoint);
    }
}