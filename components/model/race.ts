/// <reference path="../../bower_components/letsrace-typescript-model/components/model/model.ts" />
module LetsRace.RestModule {

  export class Race implements LetsRace.ModelModule.IRace{

    name:string = "";
    description:string = "";

    httpService: ng.IHttpService;
    url: string = "http://localhost:8000/races/?format=json";

    constructor( $http: ng.IHttpService ) {
      this.httpService = $http;
    }

    list(params:any):ng.IPromise<LetsRace.ModelModule.IModel>{
      var result: ng.IPromise< any > = this.httpService.get( this.url, params )
        .then( ( response: any ): ng.IPromise< any > => this.handlerResponded( response, params ) );
      return result;
    }

    handlerResponded( response: any, params: any ): any {
      response.data.requestParams = params;
      return response.data;
    }

    get():ng.IPromise<LetsRace.ModelModule.IModel>{
      console.log('Error: Not Implemented Yet');
      return;
    }

    save():ng.IPromise<LetsRace.ModelModule.IModel>{
      console.log('Error: Not Implemented Yet');
      return;
    }

    update():ng.IPromise<LetsRace.ModelModule.IModel>{
      console.log('Error: Not Implemented Yet');
      return;
    }

    destroy():ng.IPromise<LetsRace.ModelModule.IModel>{
      console.log('Error: Not Implemented Yet');
      return;
    }
  }
}
