import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeModule } from '../pipes/pipe.module';
import { ReviewComponent } from './review/review.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule } from 'angular2-markdown';
import { AppRoutingModule } from '../app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewReviewComponent } from './new-review/new-review.component';

@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MarkdownModule,
    NgbModule,
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  declarations: [ReviewComponent, NewReviewComponent],
  exports: [ReviewComponent],
})
export class ReviewsModule {}
