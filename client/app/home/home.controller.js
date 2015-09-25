class HomeController {
    constructor($rootScope) {
        console.log("home controller");
        console.log($rootScope.entityManager);

    }
}
HomeController.$inject = ['$rootScope'];
export default HomeController;