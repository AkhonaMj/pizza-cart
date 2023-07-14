function PizzaCart() {
    return {
        smallCost: 0.00,
        mediumCost: 0.00,
        largeCost: 0.00,
        totalCost: 0.00,
        payCost: 0,
        message: "",
        change: 0,


        addSmallPizza() {
            this.smallCost += 29.99
            this.totalCost += 29.99
        },

        removeSmallPizza() {
            if (this.smallCost >= 29.99) {
                this.smallCost -= 29.99
                this.totalCost -= 29.99
            }

        },

        addMediumPizza() {
            this.mediumCost += 69.99
            this.totalCost += 69.99
        },

        removeMediumPizza() {
            if (this.mediumCost >= 69.99) {
                this.mediumCost -= 69.99
                this.totalCost -= 69.99

            }
        },
        addLargePizza() {
            this.largeCost += 99.99
            this.totalCost += 99.99

        },
        removeLargePizza() {
            if (this.largeCost >= 99.99) {
                this.largeCost -= 99.99
                this.totalCost -= 99.99

            }
        },

        checkout() {
            if (this.payCost < this.totalCost) {
                this.message = "Not enough money"
                this.clearMessage()


            }

            else if (this.payCost >= this.totalCost) {
                this.message = "Enjoy your pizza!"
                this.clearMessage()
                this.smallCost = 0
                this.mediumCost = 0
                this.largeCost = 0
                this.change = this.payCost - this.totalCost
                this.totalCost = 0


            }
        },
        clearMessage() {
            
            setTimeout(()  => {
                this.message = "";
                
            }, 3000)
        },


    }

}
