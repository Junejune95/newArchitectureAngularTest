import {NgModule} from '@angular/core';
import {BusinessRequirementsInjectionToken} from '@presentation/businesss-logic-requirements';
import {BusinessLogicRequirementsFake} from '@presentation/business-logic-requirements.fake';

@NgModule({
    imports: [],
    providers: [  {
        provide: BusinessRequirementsInjectionToken,
        useClass: BusinessLogicRequirementsFake
    }
    ]
})
export class PresentationModule {}
