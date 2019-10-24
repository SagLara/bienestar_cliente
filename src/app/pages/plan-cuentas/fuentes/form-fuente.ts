export let FORM_FUENTE = {

    tipo_formulario: 'mini',
    titulo: 'Fuente Financiamiento',
    btn: 'Guardar',
    alertas: true,
    modelo: 'FuenteFinanciamiento',
    campos: [
        {
            etiqueta: 'input',
            claseGrid: 'col-lg-6 col-md-6 col-sm-6 col-xs-6',
            nombre: 'Area Funcional',
            label_i18n: 'area_funcional',
            placeholder_i18n: 'area_funcional',
            deshabilitar: true,
            requerido: false,
            valor: '01 - Rector',
            tipo: 'text',
            prefix: {
                value: '01 - Rector',
            }
        },
        {
            etiqueta: 'input',
            claseGrid: 'col-lg-6 col-md-6 col-sm-6 col-xs-6',
            nombre: 'Centro Gestor',
            label_i18n: 'centro_gestor',
            placeholder_i18n: 'centro_gestor',
            deshabilitar: true,
            requerido: false,
            valor: '230 - UNIVERSIDAD DISTRITAL',
            tipo: 'text',
            prefix: {
                value: '230 - UNIVERSIDAD DISTRITAL',
            }
        },
        {
            etiqueta: 'select',
            claseGrid: 'col-lg-4 col-md-4 col-sm-4 col-xs-4',
            nombre: 'Vigencia',
            label_i18n: 'vigencia',
            placeholder_i18n: 'vigencia',
            requerido: true,
            tipo: 'Vigencia',
            key: 'vigencia',
            opciones: [
            ],
        },
        {
            etiqueta: 'input',
            claseGrid: 'col-lg-4 col-md-4 col-sm-4 col-xs-4',
            nombre: 'Codigo',
            label_i18n: 'codigo',
            placeholder_i18n: 'codigo',
            requerido: true,
            pattern: '^[A-Za-z0-9_]{1,10}$',
            tipo: 'text',
            prefix: {
                value: '',
            },
        },
        {
            etiqueta: 'input',
            claseGrid: 'col-lg-4 col-md-4 col-sm-4 col-xs-4',
            nombre: 'Nombre',
            label_i18n: 'nombre',
            placeholder_i18n: 'nombre',
            requerido: true,
            tipo: 'text',
        },
        // {
        //     etiqueta: 'input',
        //     claseGrid: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
        //     nombre: 'ValorOriginal',
        //     label_i18n: 'valor',
        //     placeholder_i18n: '$',
        //     requerido: true,
        //     tipo: 'number',
        //     prefix: {
        //         value: '',
        //     },
        // },
        {
            etiqueta: 'textarea',
            claseGrid: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
            nombre: 'Descripcion',
            label_i18n: 'descripcion',
            placeholder_i18n: 'descripcion',
            requerido: true,
            tipo: 'text',
        },
        {
            etiqueta: 'input',
            claseGrid: 'col-lg-4 col-md-4 col-sm-4 col-xs-4',
            nombre: 'NumeroDocumento',
            label_i18n: 'numero_documento',
            placeholder_i18n: 'numero_documento',
            requerido: true,
            pattern: '^[A-Za-z0-9_]{1,10}$',
            tipo: 'text',
            prefix: {
                value: '',
            },
        },
        {
            etiqueta: 'select',
            claseGrid: 'col-lg-4 col-md-4 col-sm-4 col-xs-4',
            nombre: 'TipoDocumento',
            label_i18n: 'tipo_documento',
            placeholder_i18n: 'tipo_documento',
            requerido: true,
            tipo: 'TipoDocumento',
            key: 'Valor',
            opciones: [
                { Id:1, Valor: 'ACTA' },
                { Id:2, Valor: 'RESOLUCION' },
                { Id:3, Valor: 'CONTRATO' },
            ],
        },
        {
            etiqueta: 'mat-date',
            claseGrid: 'col-lg-4 col-md-4 col-sm-4 col-xs-4',
            nombre: 'FechaCreacion',
            label_i18n: 'fecha_documento',
            placeholder_i18n: 'fecha_documento',
            requerido: true,
        },
    ],
};
