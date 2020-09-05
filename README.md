# SpaceX

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


angular 10
===========
first create project with ng new spaceX
cd spaceX
create component "home" by using 'ng g c home' and set routing in app.component.ts - in this we set the component home as a landing page.
create services folder which contain the spaceX service by using 'ng g service services/spaceX' - service is used for calling data by API and used all over the application.
import httpClientModule in app-module.ts
import httpClient and httpHEaders in spaceX.service.ts .
