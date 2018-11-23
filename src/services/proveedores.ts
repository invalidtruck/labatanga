import { Observable } from 'rxjs/Observable';
import { Injectable } from "@angular/core";

@Injectable()
export class ProveedorService {
    ListProveedores: Observable<any>;

    getByType(type: number) {
        this.ListProveedores;
    }
    setList(prov: any) {
        return this.ListProveedores = prov;
    }
}