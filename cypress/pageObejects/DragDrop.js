export default class DragDrop {
    //elementos
    dragElement = "#draggable";
    dropElement = "#droppable";
    droppedText = "#droppable > p"
    dragMeText = "#draggable > p"

    //servicio
    endpoint = '/drag-and-drop';

    getDragElement(){
        return cy.get(this.dragElement, {timeout: 5000});
    }
    getDragMeText(){
        return cy.get(this.dragMeText, {timeout: 5000});
    }
    /*getDropElement(){
        return cy.get(this.dropElement, {timeout: 5000});
    }*/
    getDroppedText(){
        return cy.get(this.droppedText, {timeout: 5000});
    }
    goToURL(){
        return cy.visit(this.endpoint);
    }
}