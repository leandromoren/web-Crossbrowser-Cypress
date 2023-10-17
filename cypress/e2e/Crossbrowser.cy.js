const LoginElements = require("../pageObejects/LoginElements");
const TodoElements = require("../pageObejects/TodoElements");
const DragDrop = require("../pageObejects/DragDrop");
const DatosBuilder = require("../builder/DatosBuilder");

import '@4tw/cypress-drag-drop';


describe('Web Crossbrowsertesting', () => {
    it("01 - Login test", () => {
        const pantallaLogin = new LoginElements();

        const dataUser = new DatosBuilder().userSuccess().build();

        pantallaLogin.goToURL();
        pantallaLogin.getUsernameInput().type(dataUser.name);
        pantallaLogin.getPasswordInput().type(dataUser.password);
        pantallaLogin.getLoginSubmitButton().click();

        expect(pantallaLogin.getWelcomeUserMsg().should('have.text', 'Welcome tester@crossbrowsertesting.com'));
        expect(pantallaLogin.getLoggedInMsg().should('have.text', 'You are now logged in!'));
    });

    it('02 - Login missed test', () => {
        const pantallaLogin = new LoginElements();

        const dataUserMissed = new DatosBuilder().userMissed().build();

        pantallaLogin.goToURL();
        pantallaLogin.getUsernameInput().type(dataUserMissed.name);
        pantallaLogin.getPasswordInput().type(dataUserMissed.password);
        pantallaLogin.getLoginSubmitButton().click();

        expect(pantallaLogin.getIncorrectUserMsg().should('have.text', 'Username or password is incorrect'));
        expect(pantallaLogin.getIncorrectUserMsg().should('have.class', 'alert-danger'));
    })

    it('03 - add new todo', () => {
        const viewTodoList = new TodoElements();

        const dataTodo = new DatosBuilder().newTodo().build();

        viewTodoList.goToURL();
        viewTodoList.getTodoInput().type(dataTodo.todo);
        viewTodoList.getButtonAdd().click();

        expect(viewTodoList.getContainerTodos().contains(dataTodo.todo));
    });

    it('04 - check checkboxes', () => {
        const viewTodoList = new TodoElements();

        viewTodoList.goToURL();
        viewTodoList.getListTodoChecked();

        expect(viewTodoList.getSpanText().should('have.class', 'done-true'));
    });

    it('05 - uncheck checkboxes', () => {
        const viewTodoList = new TodoElements();

        viewTodoList.goToURL();
        viewTodoList.getListTodoUnChecked();

        expect(viewTodoList.getSpanText().should('have.class', 'done-false'));
    });

    it('06 - archive ToDos', () => {
        const viewTodoList = new TodoElements();

        viewTodoList.goToURL();
        viewTodoList.getListTodoChecked();
        viewTodoList.getArchiveLink().click();

        expect(viewTodoList.getCountRemaining().should('have.text', '0 of 0 remaining'));
        
    });

    it('07 - Drag and dropp', () => {
        const dragAndDrop = new DragDrop();

        dragAndDrop.goToURL();

        expect(dragAndDrop.getDroppedText().should('have.text', "Drop here"));
        expect(dragAndDrop.getDragMeText().should('have.text', "Drag me to my target"));

        dragAndDrop.getDragElement().drag("#droppable", {force: true});

        expect(dragAndDrop.getDroppedText().should('have.text', "Dropped!"));
    });
})