// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return Math.PI * 2 * this.radius
    }


    set diameter(diameter) {
        this.radius = diameter / 2
    }

    set area(area) {
        this.radius = Math.sqrt(area / Math.PI)
    }

    set circumference(circumference) {
        this.radius = circumference / (Math.PI * 2)
    }

    get area() {
        return this.radius ** 2 * Math.PI
    }



}