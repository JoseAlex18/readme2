class Producto{
    constructor (ID, Nombre, Cantidad, Precio ){
        this.ID=ID;
        this.Nombre=Nombre;
        this.Precio=Cantidad;
        this.Precio=Precio;
      this.siguiente=null;
    }
    info(){
        return "<h3>" + this.ID + "</h3>" +
               "<p>" + this.Nombre+ 
               ":::  Promedio= " + this.Cantidad + "<br>" +
                + this.Precio + "</p>";
    }
    }
class Inventario{
    constructor(){
      this.inicio=null;
    }
    agregar(nuevo){
      if(this.inicio==null){
        this.inicio=nuevo;
      }
      let n=nuevo;
                let t=this.Inicio
                while(t.siguiente!=null){
                    t=t.siguiente;
                }
                if (n.Id<t.Id){
                  n.siguiente=t;
                  n.anterior=t.anterior;
                  t.anterior.siguiente=n;
                  t.anterior=n;
                }
                else{
                  t.siguiente=n
                  n.anterior=t
                }
    }
listar(){
      let res="";
      if(this.inicio!=null)
          res=this._listarRec(this.inicio);
      return res;
  }
  _listarRec(nodo){
      if (nodo.siguiente=null)
          return nodo.info();
      else
          return nodo.info() + this._listarRec(nodo.siguiente);
  }    
    eliminar(ID){
      //destructores
      if (this.inicio!=null){
          if (this.inicio.ID==ID)
          this.inicio=this.inicio.siguiente;
          else{
          let t=this.inicio;
            while( t.siguiente!=null){
            if (t.siguiente.ID==ID){
                t.siguiente=t.siguiente.siguiente;
                return true;
            }
              else
              t=t.siguiente;
            }
            return false;
        }
      }
    }
    
    buscar(ID){
      let temp=this.inicio;
      while(temp!=null){
        if (ID==temp.ID)
          return temp;
        else
          temp=temp.siguiente;
      }
      return null;
    }
  }

let btnGuardar=document.getElementById('btnGuardar');

btnGuardar.addEventListener('click',()=>{

    let ID, Nom, Cant, Pre;

    ID=document.getElementById('txtID').value;

    Nom=document.getElementById('txtNombre').value;

    Cant=document.getElementById('txtCantidad').value;

    Pre=document.getElementById('txtPrecio').value;
})