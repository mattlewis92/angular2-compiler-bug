import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DemoModule } from 'mwl-example-ng2-module';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [AppComponent],
                    exports: [AppComponent],
                    imports: [DemoModule],
                    bootstrap: [AppComponent]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map