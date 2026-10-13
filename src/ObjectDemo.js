import React from 'react'

function ObjectDemo() {
    const cars = {
        name: "Citreon",
        price: "10,00,000",
        city: "salem",
        color: "black",
        model: "2026",
        variant: "shine",
        capacity: "45L",
        suspension: "mac",
        sunroof: "yes",
        wheelbase: "255mm",
        wheelsize: "15inch",
        dualtone: "yes"
    }

    const { name, price, city, color, ...remains } = cars

    const updatedCars = {
        ...cars,
        model: "2027"

    }

    console.log(updatedCars)
    return (
        <>
            <div>
                {price}

            </div>

        </>
    )
}

export default ObjectDemo