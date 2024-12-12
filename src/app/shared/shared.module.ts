import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedSidebarComponent } from './components/shared-sidebar/shared-sidebar.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SnipperLoadingComponent } from './components/snipper-loading/snipper-loading.component';




@NgModule({
  declarations: [
    SharedSidebarComponent,
    SearchBoxComponent,
    SnipperLoadingComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SharedSidebarComponent,
    SearchBoxComponent,
    SnipperLoadingComponent
  ]
})
export class SharedModule { }
