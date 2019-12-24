import {NgModule} from '@angular/core';
import {BusinessRequirementsInjectionToken} from '@presentation/businesss-logic-requirements';
import {BusinessLogicRequirementsFake} from '@presentation/business-logic-requirements.fake';
import {BusinessLogicFacade} from '@business-logic/business-logic.facade';

@NgModule({
    imports: [
        BusinessLogicFacade
    ],
    providers: [  {
        provide: BusinessRequirementsInjectionToken,
        useClass: BusinessLogicFacade
    }
    ]
})
export class PresentationModule {}
