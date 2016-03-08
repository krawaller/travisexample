function Hero(name, powers) {
  this.name = name
  this.powers = powers
  this.stamina = 10
}

Hero.prototype.seepStamina = function (amount) {
  this.stamina = this.stamina - amount; // Math.max(this.stamina - amount, 0)
}

Hero.prototype.fly = function () {
  if (!this.powers.flight) {
    console.log(this.name + ' flaps his arms wildly but nothing happens!')
  } else if (!this.stamina) {
    console.log(this.name + ' rises from the ground a few centimeters but then sinks back down.')
  } else {
    console.log(this.name + ' soars high!')
    this.seepStamina(this.powers.flight)
  }
}

module.exports = Hero
