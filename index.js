const arrayy = [10, 1, 9, 5, 15]

const draw = arr => {
    const greatest = arr.reduce((grt, curr) => curr > grt ? curr : grt)
    const cols = arr.length

    for(let i = greatest; i>=0; i--) {
        let str = ""
        for(let j = 0; j < cols; j++) {
            if(arr[j] > i){
                str += " |    | "
            }
            if(arr[j] === i) {
                str += "  ____  "
            }

            if(arr[j] < i) {
                str += "........"
            }
        }
        str += ` ${i == greatest ? "^" : "|"} ${i}\n`;
        console.log(str)
    }
}

draw(arrayy)