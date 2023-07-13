function PizzaCart(){
    return {
        smallCost : 0.00,
        mediumCost : 0.00,
        largeCost : 0.00,
        totalCost : 0.00,


        addSmallPizza(){
            this.smallCost += 29.99
            this.totalCost += 29.99
        },
        addMediumPizza(){
            this.mediumCost+= 69.99
            this.totalCost += 69.99
        },
        addLargePizza(){
            this.largeCost += 99.99
            this.totalCost += 99.99

        },

        checkout(){
            
        }


    }
}