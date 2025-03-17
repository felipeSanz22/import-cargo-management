inicio ()

function inicio(){
    ocultarTodo()
    document.querySelector("#PantallaDeInicio").style.display="block"
}

function ocultarTodo(){
    document.querySelector("#PantallaDeInicio").style.display="none"
    document.querySelector("#IngresarEnLaAplicacion").style.display="none"
    document.querySelector("#IngresarARegistro").style.display="none"
    document.querySelector("#RegistrarImportador").style.display="none"
    document.querySelector("#MenuImportador").style.display="none"
    document.querySelector("#CrearSolicitudCarga").style.display="none"
    document.querySelector("#ConsultarSolicitudesPendientes").style.display="none"
    document.querySelector("#CancelarSolicitudCarga").style.display="none"
    document.querySelector("#InformacionEstadistica").style.display="none"
    document.querySelector("#MenuEmpresa").style.display="none"
    document.querySelector("#CrearViajeDeUnBuque").style.display="none"
    document.querySelector("#AsignarBuque").style.display="none"
    document.querySelector("#RolloverDeCarga").style.display="none"
    document.querySelector("#BuquesAsignados").style.display="none"
    document.querySelector("#ManifiestoDeCarga").style.display="none"
    document.querySelector("#ListaDeCargaPeligrosa").style.display="none"
}


document.querySelector("#btnIngresarComoEmpresa").addEventListener("click", IngresarComoEmpresa);
document.querySelector("#btnIngresarComoImportador").addEventListener("click", IngresarComoImportador);
document.querySelector("#btnVolverAlingreso").addEventListener("click", VolverAlIngreso);
document.querySelector("#btnIngresoGeneral").addEventListener("click", IngresoGeneral);
document.querySelector("#btnRegistroToIngreso").addEventListener("click", RegistroToIngreso);
document.querySelector("#Registro").addEventListener("click", Registro);
document.querySelector("#btnRegistrarImportadores").addEventListener("click", RegistroDeImportadores);
document.querySelector("#btnLogoutImportador").addEventListener("click", LogoutImportador);
document.querySelector("#btnMenuImportadorToSolicitudCarga").addEventListener("click", MenuImportadorToSolicitudCarga);
document.querySelector("#btnMenuImportadorToSolicitudesPendientes").addEventListener("click", ImportadorToSolicitudesPendientes);
document.querySelector("#btnMenuImportadorToInformacionEstadistica").addEventListener("click", MenuImportadorToInformacionEstadistica);
document.querySelector("#btnSolicitudCargaToMenuImportador").addEventListener("click", SolicitudCargaToMenuImportador);
document.querySelector("#btnAccionarCargaImportador").addEventListener("click", AccionarCargaToMenuImportador);
document.querySelector("#btnSolicitudesPendientesToMenuImportador").addEventListener("click", SolicitudesPendientesToMenuImportador);
document.querySelector("#btnInformacionEstadisticaToMenuImportador").addEventListener("click", InformacionEstadisticaToMenuImportador);
document.querySelector("#btnConfirmarCancelacion").addEventListener("click", ConfirmarCancelacion);
document.querySelector("#btnCancelarCancelacion").addEventListener("click", CancelarCancelacion);
document.querySelector("#btnLogoutEmpresa").addEventListener("click", LogoutEmpresa);
document.querySelector("#btnMenuEmpresaToCrearViaje").addEventListener("click", MenuEmpresaToCrearViaje);
document.querySelector("#btnMenuEmpresaToAsignar").addEventListener("click", MenuEmpresaToAsignar);
document.querySelector("#btnMenuEmpresaToRollover").addEventListener("click", MenuEmpresaToRollover);
document.querySelector("#btnMenuEmpresaToVerBuques").addEventListener("click", MenuEmpresaToVerBuques);
document.querySelector("#btnCrearViajeToMenuEmpresa").addEventListener("click", CrearViajeToMenuEmpresa);
document.querySelector("#btnCrearViajeBuque").addEventListener("click", CrearViajeBuque);
document.querySelector("#btnAsignarToMenuEmpresa").addEventListener("click", AsignarToMenuEmpresa);
document.querySelector("#btnAsignarViajeBuque").addEventListener("click", AsignarViajeBuque);
document.querySelector("#btnRolloverToMenuEmpresa").addEventListener("click", RolloverToMenuEmpresa);
document.querySelector("#btnRollover").addEventListener("click", Rollover);
document.querySelector("#btnVerBuquesToMenuEmpresa").addEventListener("click", ManifiesToMenuEmpresa);
document.querySelector("#btnManifiesToMenuEmpresa").addEventListener("click", VerBuquesToMenuEmpresa);
document.querySelector("#btnVerificarCargasPeligrosas").addEventListener("click", VerificarCargasPeligrosas);
document.querySelector("#btnPeligrosaToManifiesto").addEventListener("click", PeligrosaToManifiesto);

let contadorImportador=1
let soyImportador=0

class Empresa{constructor(unId,unNombre,unUsuario,unaContraseña){
    this.idEmpresa=unId;
    this.nombreEmpresa=unNombre;
    this.usuarioEmpresa=unUsuario;
    this.contraseñaEmpresa=unaContraseña;
    }
}

class Importador{constructor(contadorImportador,unNombre,unUsuario,unaContraseña,unaFoto,unEstado){
    this.nombreImportador=unNombre;
    this.usuarioImportador=unUsuario;
    this.contraseñaimportador=unaContraseña;
    this.fotoImportador=unaFoto;
    this.estado=unEstado
    this.contador=contadorImportador
    }
}

let usuarioIngresado=""
let listaEmpresas= new Array()
let listaImportadores= new Array()

let empresa1= new Empresa(1,"FahrmutCompany","Fahrmut","Ort22");
let empresa2= new Empresa(2,"BooBooCompany","BooBoo","Ort22");
let empresa3= new Empresa(3,"LicanCompany","Licantropiano","Ort22");
let empresa4= new Empresa(4,"AlfitorexCompany","Alfitorex","Ort22");
listaEmpresas.push(empresa1);
listaEmpresas.push(empresa2);
listaEmpresas.push(empresa3);
listaEmpresas.push(empresa4);

let  importador1= new Importador(contadorImportador,"Matias","Mati","Ort22","foto","habilitado");
contadorImportador++
let  importador2= new Importador(contadorImportador,"Hatsujikan","Criterio","Ort22","foto","habilitado");
contadorImportador++
let  importador3= new Importador(contadorImportador,"Kuky","Kira","Ort22","foto","habilitado");
contadorImportador++
let  importador4= new Importador(contadorImportador,"DSonic","Ludicolo","Ort22","foto","habilitado");
listaImportadores.push(importador1);
listaImportadores.push(importador2);
listaImportadores.push(importador3);
listaImportadores.push(importador4);


function validarClave(unaClave){
    let valida= true;
    if (unaClave.length <5){valida= false}
    if (contarMayusculas(unaClave)<1){valida= false}
    if (contarMinusculas(unaClave)<1){valida= false}
    if (contarNumeros(unaClave)<1){valida= false}
    return valida
}

function validarContraseña(password){
    if (validarClave(password)===true){
        for(let i in listaEmpresas){
            let empresaIngresada=listaEmpresas[i].contraseñaEmpresa
            if(empresaIngresada==password){return true}
        }
        for(let i in listaImportadores){
            let importadorIngresado=listaEmpresas[i].contraseñaimportador
            if(importadorIngresado==password){return true}
        }
    }
}

function VerificrUsuario(unUsuario){
        unUsuario=document.querySelector("#txtNombreDeUsuario").value
    for(let i in listaEmpresas){
        let empresaIngresada=listaEmpresas[i].usuarioEmpresa
        if(empresaIngresada==unUsuario){return 0}
    }
    for(let i in listaImportadores){
        let importadorIngresado=listaImportadores[i].usuarioImportador
        if(importadorIngresado==unUsuario){return 1}
    }
}

function contarMayusculas(texto){
   
    texto=texto.replaceAll(" ", "");
    let cantidadMayusculas=0
    for (let i=0;i<texto.length;i++){
        if ((texto.charAt(i)==texto.charAt(i).toUpperCase())
         && (isNaN(texto.charAt(i)))) {
            cantidadMayusculas++
        }
    }
    return cantidadMayusculas 
}

function contarMinusculas(texto){
   
    texto=texto.replaceAll(" ", "");
    let cantidadMinusculas=0
    for (let i=0;i<texto.length;i++){
        if ((texto.charAt(i)==texto.charAt(i).toLowerCase()) 
        && (isNaN(texto.charAt(i)))){
            cantidadMinusculas++ 
        }
    }
    return cantidadMinusculas
}
function contarNumeros(texto){
    
    texto=texto.replaceAll(" ", "");
    let cantidadNumeros=0
    for (let i=0;i<texto.length;i++){
        if (!isNaN(texto.charAt(i))){
            cantidadNumeros++
        }
    }
    return cantidadNumeros 
}

function IngresarComoEmpresa(){
    document.querySelector("#PantallaDeInicio").style.display="none"
    document.querySelector("#IngresarEnLaAplicacion").style.display="block"
}

function IngresarComoImportador(){
    document.querySelector("#PantallaDeInicio").style.display="none"
    document.querySelector("#IngresarEnLaAplicacion").style.display="block"
    document.querySelector("#IngresarARegistro").style.display="block"
    soyImportador=1
}

function VolverAlIngreso(){
    inicio()
}

function IngresoGeneral(){
    ocultarTodo()
    let name=document.querySelector("#txtNombreDeUsuario").value
    let password=document.querySelector("#txtContraseñaIngreso").value

    unaContra=validarContraseña(password)
    unUser=VerificrUsuario(name)

    if((unaContra==true)){

        if ((unUser==0) && (soyImportador==0)){
            for(let i in listaEmpresas){
                let empresaIngresada=listaEmpresas[i].usuarioEmpresa
                if(empresaIngresada==name){
                    usuarioIngresado=listaEmpresas[i]
                    ocultarTodo()
                    document.querySelector("#MenuEmpresa").style.display="block"}
            }
        }
        else {if ((unUser==1)&&(soyImportador==1)){
                for(let i in listaImportadores){
                let importadorIngresado=listaImportadores[i].usuarioImportador
                if(importadorIngresado==name){
                    usuarioIngresado=listaImportadores[i]
                    ocultarTodo()
                    document.querySelector("#MenuImportador").style.display="block"}
                    }
            }
            else{if ((unUser==0) && (soyImportador==1)){
                    alert("Datos invalidos")
                    document.querySelector("#txtNombreDeUsuario").value=""
                    document.querySelector("#txtContraseñaIngreso").value=""
                    inicio()
                    soyImportador=0
                }
            }
        }

    }

    else{alert("Datos invalidos")
        document.querySelector("#txtNombreDeUsuario").value=""
        document.querySelector("#txtContraseñaIngreso").value=""
        inicio()
        soyImportador=0}

}

function RegistroToIngreso(){
    inicio()
}

function Registro(){
    let nombre=document.querySelector("#txtNombreImportador").value
    let id=document.querySelector("#txtIDImportador").value
    let contraseña=document.querySelector("#txtContraseñaImportador").value
    let confirmarContraseña=document.querySelector("#txtconfirmarContraseña").value
    let foto=document.querySelector("#imgImportador").value

    if (contraseña==confirmarContraseña){
        nombre=document.querySelector("#txtNombreImportador").value
        contadorImportador++
        let  importadorNuevo= new Importador(contadorImportador,nombre,id,contraseña,foto,"habilitado");
        listaImportadores.push(importadorNuevo);
        ocultarTodo()
        document.querySelector("#RegistrarImportador").style.display="block"}

    else{alert("Las contraseñas deben coicidir")}
}

function RegistroDeImportadores(){
    ocultarTodo()
    document.querySelector("#IngresarEnLaAplicacion").style.display="block"
}

function LogoutImportador(){
    inicio()
    usuarioIngresado=""
}

function MenuImportadorToSolicitudCarga(){
    ocultarTodo()
    document.querySelector("#CrearSolicitudCarga").style.display="block"
}

function ImportadorToSolicitudesPendientes(){
    ocultarTodo()
    document.querySelector("#ConsultarSolicitudesPendientes").style.display="block"
}

function MenuImportadorToInformacionEstadistica(){
    ocultarTodo()
    document.querySelector("#InformacionEstadistica").style.display="block"
}

function SolicitudCargaToMenuImportador(){
    ocultarTodo()
    document.querySelector("#CrearSolicitudCarga").style.display="block"
}

function SolicitudesPendientesToMenuImportador(){
    ocultarTodo()
    document.querySelector("#MenuImportador").style.display="block"
}

function AccionarCargaToMenuImportador(){
    ocultarTodo()
    document.querySelector("#MenuImportador").style.display="block"
}

function InformacionEstadisticaToMenuImportador(){
    ocultarTodo()
    document.querySelector("#MenuImportador").style.display="block"
}

function ConfirmarCancelacion(){
    ocultarTodo()
    ImportadorToSolicitudesPendientes()
}

function CancelarCancelacion(){
    ocultarTodo()
    ImportadorToSolicitudesPendientes()
}

function LogoutEmpresa(){
    inicio()
    usuarioIngresado=""
}

function MenuEmpresaToCrearViaje(){
    ocultarTodo()
    document.querySelector("#CrearViajeDeUnBuque").style.display="block"
}

function MenuEmpresaToAsignar(){
    ocultarTodo()
    document.querySelector("#AsignarBuque").style.display="block"
}

function MenuEmpresaToRollover(){
    ocultarTodo()
    document.querySelector("#RolloverDeCarga").style.display="block"
}

function MenuEmpresaToVerBuques(){
    ocultarTodo()
    document.querySelector("#BuquesAsignados").style.display="block"
}

function CrearViajeToMenuEmpresa(){
    ocultarTodo()
    document.querySelector("#MenuEmpresa").style.display="block"
}

function AsignarToMenuEmpresa(){
    ocultarTodo()
    document.querySelector("#MenuEmpresa").style.display="block"
}

function RolloverToMenuEmpresa(){
    ocultarTodo()
    document.querySelector("#MenuEmpresa").style.display="block"
}

function ManifiesToMenuEmpresa(){
    ocultarTodo()
    document.querySelector("#MenuEmpresa").style.display="block"
}

function VerBuquesToMenuEmpresa(){
    ocultarTodo()
    document.querySelector("#MenuEmpresa").style.display="block"
}

function CrearViajeBuque(){

}

function AsignarViajeBuque(){

}

function Rollover(){

}

function VerificarCargasPeligrosas(){

}

function PeligrosaToManifiesto(){

}


