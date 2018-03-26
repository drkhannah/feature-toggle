import { APP_INITIALIZER, NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FeatureToggleServiceService } from "./services/feature-toggle.service";

export function featureToggleServiceFactory(featureToggleService: FeatureToggleServiceService) {
    return () => featureToggleService.loadFeatures();
}

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpClientModule
    ],
    declarations: [
        AppComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [
        FeatureToggleServiceService,
        {
            // Provider for APP_INITIALIZER
            provide: APP_INITIALIZER,
            useFactory: featureToggleServiceFactory,
            deps: [FeatureToggleServiceService],
            multi: true
        }
    ]
})
export class AppModule { }
