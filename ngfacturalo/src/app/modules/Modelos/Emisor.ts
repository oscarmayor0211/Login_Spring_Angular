// export class Emisor{
//     id: number;
//     nombre:string;
//     nit: number;
//     direccion: string;
//     ciudad: string;
//     telefono: string;
//     email: string;
//     actividad_eco: string;
//     detalles_tribu: string;
//     responsabilidad_fiscal: string;
//     contrasena_ce: string;
//     id_software: string;
//     pin_software: string;
//     nombre_software: string;


    
// }

export interface Emisor{
    
    v_name: string;
    i_nit: string;
    v_address: string;
    v_city:  string;
    v_telephone: string;
    v_email: string;
    v_industry_clasification: string;
    v_tax_level_code: string;
    v_tax_list: string;
    file: File; 
    v_sw_id: string;
    v_sw_name: string;
    v_sw_pin: string;
    i_level: number; //por defecto uno(1)
    c_dv: string; //por defecto '7'
    v_contact: string; //por defecto cualquier cosa
    v_signature: string; // por defecto 'firmafira'
    v_sw_key: string; //por defecto 'fc8eac422eba16e22ffd8c6f94b3f40a6e38162c'
    i_contract_available: number; //por defecto 100
    resolucionesLista:  Resolucion[] ;
    i_file_server: number; //por defecto 1
    i_entity_outbox: number;//por defecto 2
    i_file_outbox: number; //por defecto 3
    i_email_outbox: number; //por defecto 5
    id: number;
    v_passsword: string; //por defecto cualquiero cosa
    
}


export interface Resolucion{
    s_id: number;
    v_prefix: string; //Por defecto cualquier cosa
    v_resoluction: string;
    i_num_begin: number;
    i_num_end: number;
    d_date: Date ;
    i_type: number; //  1: Autorizacion 2: Habilitacion
    i_class: number; // Factura:1  Nota credito: 5  Nota debito:8
    d_expiry: Date;
    v_tec_key: string;
    i_supplier: number ; //id del emisor
}
   