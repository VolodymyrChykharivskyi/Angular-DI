import {inject} from "@angular/core";
import {InformerService} from "../services/informer.service";

export class BaseClass {
    public informer = inject(InformerService)
}
