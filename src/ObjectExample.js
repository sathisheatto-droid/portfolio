import React from "react";



const ObjectExample = () => {

    const student = [{
        id: 1,
        name: "lokesh",
        age: 21,
        department: "MCA",
        marks: 90
    },
    {
        id: 12,
        name: "supriya",
        age: 27,
        department: "MCA",
        marks: 99
    },

    ]

    // const data = student.map((i) => {
    //     return (<>
    //         {console.log(i.name)}
    //     </>
    //     )
    // })
    const numbers = [1, 2, 3, 4, 5, 6];

    // console.log("pop", numbers.pop(), numbers)
    // console.log("push", numbers.push(7), numbers)
    // console.log("shift", numbers.shift(), numbers)
    // console.log("unshift", numbers.unshift(0), numbers)

    const filtered = numbers.filter(
        function (x) {
            return x > 5
        }
    )

    // console.log(filtered)
    const names = ["nadhhu", "supriya", "lokesh", "praveen"]
    // const result = names.slice(1, 3)
    // console.log("result", result, names)

    const spliceresult = names.splice(3, 0, "jay") // start from 1  till the count 2 add the value   splice(index,count,add)


    console.log(">>>>>", spliceresult)
    console.log(names)
    // const datamark = student.filter(
    //     function (i) {
    //         return i.marks > 95
    //     }
    // )
    // console.log(datamark)
    const datamark = student.filter((i) => i.marks > 89)
    // console.log(datamark)
    return (
        <>

            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>Age</th>
                        <th>Marks</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>lokesh</td>
                        <td>20</td>
                        <td>98</td>
                    </tr>
                    <tr>
                        <td>praveen</td>
                        <td>20</td>
                        <td>98</td>
                    </tr>
                </tbody>

            </table>

            {datamark.map((i) => {
                return (
                    <>
                        {i.name}
                    </>
                )
            })}
        </>
    )

}
export default ObjectExample