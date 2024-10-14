function Vehiculo(marca, modelo, velocidadMaxima) {
    this.marca = marca;
    this.modelo = modelo;
    this.velocidadMaxima = velocidadMaxima;
    this.velocidadActual = 0;
}

Vehiculo.prototype.acelerar = function(velocidad) {
    this.velocidadActual += velocidad;
    if (this.velocidadActual > this.velocidadMaxima) {
        this.velocidadActual = this.velocidadMaxima;
    }
    return `El vehiculo va a ${this.velocidadActual} por hora`
};

Vehiculo.prototype.detener = function() {
    this.velocidadActual = 0;
    return `El vehiculo freno`
};

Vehiculo.prototype.mostrarInfo = function() {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Velocidad Maxima: ${this.velocidadMaxima}`;
};

Vehiculo.prototype.compararVelocidad = function(otroVehiculo){
    if (this.velocidadMaxima > otroVehiculo.velocidadMaxima){
        return `El ${this.marca} ${this.modelo} es mas rapido`
    } else if (this.velocidadMaxima < otroVehiculo.velocidadMaxima){
        return `El ${otroVehiculo.marca} ${otroVehiculo.modelo} es mas rapido`
    }else{
        return `Los 2 vehiculos son igual de rapidos`
    }
}

function Auto(marca, modelo, velocidadMaxima, puertas) {
    Vehiculo.call(this, marca, modelo, velocidadMaxima);
    this.puertas = puertas;
}

Object.setPrototypeOf(Auto.prototype, Vehiculo.prototype);

Auto.prototype.abrirPuertas = function() {
    return `Se abrieron las ${this.puertas} puertas`
};

function Moto(marca, modelo, velocidadMaxima, sidecar) {
    Vehiculo.call(this, marca, modelo, velocidadMaxima);
    this.sidecar = sidecar;
}

Object.setPrototypeOf(Moto.prototype, Vehiculo.prototype);

Moto.prototype.mostrarSidecar = function() {
    if(this.sidecar){
        return `Tiene sidecar`
    }else{
        return `No tiene sidecar`
    }
};

const auto1 = new Auto('Toyota', 'Corolla', 180, 4);
const auto2 = new Auto('Ford', 'Mustang', 250, 2);
const moto1 = new Moto('Yamaha', 'MT-07', 200, false);
const moto2 = new Moto('Harley-Davidson', 'Fat Boy', 160, true);

console.log(auto1.mostrarInfo());
console.log(auto2.mostrarInfo());
console.log(moto1.mostrarInfo());
console.log(moto2.mostrarInfo());

console.log(auto1.abrirPuertas());
console.log(auto2.abrirPuertas());
console.log(moto1.mostrarSidecar());
console.log(moto2.mostrarSidecar());

console.log(auto1.acelerar(60)); 
console.log(auto2.acelerar(120)); 
console.log(auto2.acelerar(100)); 
console.log(moto1.acelerar(100)); 
console.log(moto2.acelerar(80)); 

console.log(auto1.detener());
console.log(moto1.detener());

console.log(auto1.compararVelocidad(moto1));
console.log(auto2.compararVelocidad(moto2));