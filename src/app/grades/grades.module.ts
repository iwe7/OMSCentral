import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeModule } from '../pipes/pipe.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, PipeModule, NgbModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [],
})
export class GradesModule {}
