class ItemsController {
    constructor($rootScope) {
        console.log("items controller");
        this.rootScope = $rootScope;
        this.pageSize = 50;
        this.page = 0;
        this.source = "items";
        this.nextPage();
    }

    getPage() {
        var query = this.rootScope.breeze.EntityQuery
            .from(this.source).orderBy("name").skip(this.pageSize * this.page - 1).take(this.pageSize);
        this.rootScope.entityManager.executeQuery(query)
            .then((result) => {
                this.items = result.results;
                console.log(this.items);
            });
    }

    nextPage() {
        this.page++;
        this.getPage();
    }

    fill() {
        this.source = "items";
        this.getPage();
    }

    selectItem(item) {
        this.item = item;
    }

    updateItem(item) {

    }
}
ItemsController.$inject = ['$rootScope'];
export default ItemsController;