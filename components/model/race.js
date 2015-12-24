/// <reference path="../../bower_components/letsrace-typescript-model/components/model/model.ts" />
var LetsRace;
(function (LetsRace) {
    var RestModule;
    (function (RestModule) {
        var Race = (function () {
            function Race($http) {
                this.name = "";
                this.description = "";
                this.url = "http://localhost:8000/races/?format=json";
                this.httpService = $http;
            }
            Race.prototype.list = function (params) {
                var _this = this;
                var result = this.httpService.get(this.url, params).then(function (response) { return _this.handlerResponded(response, params); });
                return result;
            };
            Race.prototype.handlerResponded = function (response, params) {
                response.data.requestParams = params;
                return response.data;
            };
            Race.prototype.get = function () {
                console.log('Error: Not Implemented Yet');
                return;
            };
            Race.prototype.save = function () {
                console.log('Error: Not Implemented Yet');
                return;
            };
            Race.prototype.update = function () {
                console.log('Error: Not Implemented Yet');
                return;
            };
            Race.prototype.destroy = function () {
                console.log('Error: Not Implemented Yet');
                return;
            };
            return Race;
        })();
        RestModule.Race = Race;
    })(RestModule = LetsRace.RestModule || (LetsRace.RestModule = {}));
})(LetsRace || (LetsRace = {}));
//# sourceMappingURL=race.js.map