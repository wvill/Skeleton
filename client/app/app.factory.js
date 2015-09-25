function Todos($http) {

    var state = {
        todos: [{content:'yolo'}],
        findResult : null
    };

    var module = {
        getSystems: function () {
            return state.todos;
        }
    };

    return module;
}

Todos.$inject = ['$http'];
export default Todos;