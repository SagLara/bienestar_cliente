import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CRPHelper } from '../../../../@core/helpers/crp/crpHelper';
import { RequestManager } from '../../../../@core/managers/requestManager';
import { PopUpManager } from '../../../../@core/managers/popUpManager';
import { Router } from '@angular/router';
import { CDPHelper } from '../../../../@core/helpers/cdp/cdpHelper';

@Component({
  selector: 'ngx-ver-solicitud-crp',
  templateUrl: './ver-solicitud-crp.component.html',
  styleUrls: ['./ver-solicitud-crp.component.scss']
})
export class VerSolicitudCrpComponent implements OnInit {


  @Input('solicitudcrp') solicitud: object;
  @Input('expedido') expedido: boolean;
  @Output() eventChange = new EventEmitter();
  cdpInfo: any = {};
  TrNecesidad: any;
  beneficiario: any = {};
  tipoID: string;
  doc: string;
  objetoNecesidad: any = {};
  mostrandoPDF: boolean = false;
  enlacePDF: string = 'assets/images/crp-ejemplo.pdf';
  tituloPDF: string = '';
  areas = [{ Id: 1, Nombre: 'Rector' }, { Id: 2, Nombre: 'Convenios' }];
  entidades = [{ Id: 1, Nombre: 'Universidad Distrital Francisco José de Caldas' }];
  area: any;
  entidad: any;
  tCompromiso: any;
  r = /\d+/;
  constructor(
    private crpHelper: CRPHelper,
    private cdpHelper: CDPHelper,
    // tslint:disable-next-line
    private rqManager: RequestManager,
    private popManager: PopUpManager,
    private router: Router,
  ) { }

  ngOnInit() {
    if (this.solicitud != undefined) {

      this.crpHelper.getCompromiso(this.solicitud['compromiso']['tipoCompromiso']).subscribe(resC => {
        this.tCompromiso = resC;
        console.info(this.tCompromiso);
      });
    
      this.doc = this.solicitud['beneficiario'].match(this.r)
      this.tipoID = this.solicitud['beneficiario'].match(/[a-zA-Z]+/g);


      this.crpHelper.getInfoCDP(this.solicitud['consecutivoCdp']).subscribe(resCdp => {
        this.cdpInfo = resCdp;       

        if (this.cdpInfo) {
          this.area = this.areas.filter(i => {
            return i.Id === this.cdpInfo.centroGestor;
          });
  
          this.entidad = this.entidades.filter(j => {
            return j.Id === this.cdpInfo.entidad;
          });
        
          
          this.cdpHelper.getFullNecesidad(this.cdpInfo.necesidad).subscribe(res => {
            this.TrNecesidad = res;
            if (this.TrNecesidad.Rubros) {
              this.TrNecesidad.Rubros.forEach(rubro => {
                rubro.MontoParcial = 0
                if (rubro.Metas) {
                  rubro.Metas.forEach(meta => {
                    if (meta.Actividades) {
                      meta.Actividades.forEach(act => {
                        if (act.FuentesActividad) {
                          act.FuentesActividad.forEach(fuente => {
                            rubro.MontoParcial += fuente.MontoParcial
                          });
                        }
                      });
                    }
                  });
                }
                if (rubro.Fuentes) {
                  rubro.Fuentes.forEach(fuente => {
                    rubro.MontoParcial += fuente.MontoParcial
                  });

                }

              });
            }

            if (this.TrNecesidad) {
              this.objetoNecesidad = this.TrNecesidad.Necesidad.Objeto;
            }
            this.crpHelper.getInfoNaturalJuridica(this.solicitud['beneficiario'].match(this.r)).subscribe(respuesta => {
              this.beneficiario = respuesta[0];
            
              
            });

          });
        }
      });
    }
  }



  cambioTab() {
    this.eventChange.emit(false);
  }

  expedirCRP(consecutivo) {
    this.popManager.showAlert('warning', `Expedir CRP ${consecutivo}`, '¿está seguro?')
      .then((result) => {
        if (result.value) {
          this.crpHelper.expedirCRP(this.solicitud["_id"]).subscribe(res => {
            if (res) {
              this.popManager.showSuccessAlert(`Se expidió con exito el CRP ${res.infoCrp.consecutivo}`)
              this.router.navigate(['/pages/plan-cuentas/crp']);
            }

          })

        }
      });
  }

  mostrarPDF(consecutivo) {
    this.tituloPDF = `Certificado de Registro Presupuestal N° ${consecutivo}`;
    this.mostrandoPDF = !this.mostrandoPDF;
  }
}
