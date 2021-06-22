class Base{
    constructor(Nombre,Hora,Minutos,segundos){
        this.Nombre=Nombre;
        this.Hora=Hora;
        this.Minutos=Minutos;
        this.segundos=segundos;
        this.siguiente=null;
        this.anterior=null;
    }
    info(){
        return this.Nombre + "("+ this.Hora + this.Minutos + this.segundos + ")";
    }
}
class ListaCircular {
    constructor(){
        this.inicio=null;
    }
    agregar(nuevo){
        if (this.inicio==null){
            this.inicio=nuevo;
            nuevo.siguiente=this.inicio;
            this.inicio.anterior=nuevo;
        }else{

           let ultimo=this.inicio.anterior;
           ultimo.siguiente=nuevo;
           nuevo.siguiente=this.inicio;
           this.inicio.anterior=nuevo;

            let t=this.inicio;
            while(t.siguiente=this.inicio)
               t=t.siguiente;
               this.inicio.anterior=nuevo;
               nuevo.siguiente=this.inicio;
        }
    }
Listar(){
    let res="";
    let temp=this.inicio;
    if(this.inicio!=null){
        ret=temp.info();
        while (temp.siguiente!=inicio){
            temp=temp.siguiente;
            res+=temp.info();
        }
    }
    return res;
}
buscar(dato){
    let temp=this.inicio;
    do{
        if (temp.dato==dato){
            return temp;
        }
        temp=temp.siguiente;
    }while (temp!=this.inicio)
    return null;
}
recorrido(Base,Hi,Mi,Si,Hf,Mf,Sf){
    let baseIni=buscar(Base);
    if (baseIni!=null){
      let hoy=now()
    }
}
eliminar(dato){
    let temp=this.inicio;
    do{
        if (temp.dato==dato){
            return temp;
        }
        temp=temp.siguiente;
    }while (temp!=this.inicio)
    return null;
}
}