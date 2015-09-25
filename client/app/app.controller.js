class MainController {
    constructor($scope, Todos) {
        this.Todos = Todos;
    }

    getSystems() {
        return this.Todos.getSystems();
    }

}
MainController.$inject = ['$scope', 'Todos'];

export default MainController;