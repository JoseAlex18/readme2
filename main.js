class alumno{

    constructor(numeroCta, nombre, calificacion, semestre){
  
      this.numeroCta=numeroCta;
  
      this.nombre=nombre;
  
      this.calificacion=calificacion;
  
      this.semestre=semestre;
  
      this.hi=null;
  
      this.hd=null;
  
    }
  
  }
  class arbolBinario{
  
    constructor(){
  
      this.raiz=null;
  
    }
  
    Agregar(n)
    {
        if(this.raiz==null)
        {
            this.raiz=n;
        }
        else
        {
            this.Agregar(n,this.raiz);
        }
    }
    Agregar(nuevo,nodoX)
    {
        if(nuevo.numeroCta<nodoX.numeroCta)
        {
            if(nodoX.hi==null)
            {
                nodoX.hi=nuevo;
            }
            else
            {
                this.Agregar(nuevo,nodoX.hi);
            }
        }
        else
        {
            if(nodoX.hd==null)
            {
                nodoX.hd=nuevo;
            }
            else
            {
                this.Agregar(nuevo,nodoX.hd);
            }
        }
    }
    InOrder()
    {
        if(this.raiz==null)
        {
            console.log("");
        }
        else
        {
            this.InorderRec(this.raiz);
        }
    }
    InorderRec(nodoX)
    {
        if(nodoX.hi!=null)
        {
            this.InorderRec(nodoX.hi);
        }
        console.log(nodoX);
        if(nodoX.hd!=null)
        {
            this.InorderRec(nodoX.hd);
        }
    }
    PreOrder()
    {
        if(this.raiz==null)
        {
            console.log("");
        }
        else
        {
            this.PreorderRec(this.raiz);
        }
    }
    PreorderRec(nodoX)
    {
        console.log(nodoX);
        if(nodoX.hi!=null)
        {
            this.PreorderRec(nodoX.hi);
        }
        if(nodoX.hd!=null)
        {
            this.PreorderRec(nodoX.hd);
        }
    }
    PosOrder()
    {
        if(this.raiz==null)
        {
            console.log("");
        }
        else
        {
            this.PosorderRec(this.raiz);
        }
    }
    PosorderRec(nodoX)
    {
        if(nodoX.hi!=null)
        {
            this.PosorderRec(nodoX.hi);
        }
        if(nodoX.hd!=null)
        {
            this.PosorderRec(nodoX.hd);
        }
        console.log(nodoX);
    }
  }