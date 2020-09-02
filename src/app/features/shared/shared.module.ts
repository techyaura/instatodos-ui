import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { QuilljsModule } from 'ngx-quilljs';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { AppService } from '../../service';
import { FooterComponent } from '../shared/section/footer/footer.component';
import { FileUploadComponent } from '../shared/file-upload/file-upload.component';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';
import { GoalDialogComponent } from '../goal/goal-dialog/goal-dialog.component';
import { CustomDateModalComponent } from './custom-date-modal/custom-date-modal.component';import {TodoProjectListComponent} from '../todo/todo-project-list/todo-project-list.component';
import { MultilingualComponent } from '../../utilities/components/multilingual/multilingual.component';
@NgModule({
  declarations: [
    TodoProjectListComponent,
    InfiniteScrollComponent,
    GoalDialogComponent,
    FileUploadComponent,
    CustomDateModalComponent,
    FooterComponent,
    MultilingualComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    TranslateModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }),
    QuilljsModule,
    LazyLoadImageModule
  ],
  exports: [
    TodoProjectListComponent,
    InfiniteScrollComponent,
    GoalDialogComponent,
    TranslateModule,
    FileUploadComponent,
    CustomDateModalComponent,
    FooterComponent,
    LazyLoadImageModule,
    MultilingualComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [ AppService ]
    };
  }
}
