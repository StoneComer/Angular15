import { Component, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import { FactoryComponentComponent } from './factory-component/factory-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular15';
  @ViewChild('dynamicComp', {read: ViewContainerRef})
  private viewRef!: ViewContainerRef;
  private componentRef!: ComponentRef<FactoryComponentComponent>;

  addComponent(){
    //this.viewRef.clear();
    this.componentRef = this.viewRef.createComponent(FactoryComponentComponent);
  }
  deleteComponent(){
    this.viewRef.clear();
  }
}
