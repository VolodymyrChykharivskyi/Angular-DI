import {ChangeDetectorRef, Compiler, Component, ComponentFactoryResolver, Injector, ViewChild, ViewContainerRef} from '@angular/core';
import {LazyFeatureModule} from "./modules/lazy-feature/lazy-feature.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  @ViewChild('lazyComponent', { read: ViewContainerRef }) public container!: ViewContainerRef;

  constructor( private compiler: Compiler,
               private injector: Injector,
               private cd: ChangeDetectorRef) {}

  showLazyComponent() {
    import('./modules/lazy-feature/lazy-feature.module').then(({ LazyFeatureModule }) => {
      this.compiler
        .compileModuleAsync(LazyFeatureModule)
        .then((moduleFactory) => {
          const moduleReference = moduleFactory.create(this.injector);
          const componentFactory = moduleReference.instance.resolveLazyloadedComponent();
          this.container.createComponent( componentFactory, undefined, moduleReference.injector );
          this.cd.detectChanges(); // tells change detection to refresh the view
        });
    });
  }
}
