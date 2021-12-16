const data = [{ userName: "Sagar", password: "tomar123", amount: 20000 }, { userName: "Rewati Raman", password: "neha", amount: 25000 }, { userName: "Tarun", password: "qwert123", amount: 50000 },{userName:"Abuzar", password:"0000",amount:20000}]

var count = 0


function call() {
     name = document.getElementById("name").value
    
    if (count <= 3) {
        for (let x of data) {


            if (x.userName == name) {

                document.getElementById("msg1").style.display = "none"
                document.getElementById("con").style.display = "none"
                document.getElementById("con2").style.display = "block"



            } else {
                if (x.userName != name)
                    document.getElementById("msg1").innerText = "You Entered Wrong Username, enter again"

            }

            count++
        }
    } else {
        document.getElementById("con").style.display = "none"
        document.write("Your Account is Blocked")
    }

}
function call2() {
    pass = document.getElementById("password").value
    console.log(name)
    if (count >= 3) {
        for (let x of data) {
            if (x.userName == name && x.password == pass) {
                document.getElementById("con3").style.display = "block"
                document.getElementById("con2").style.display = "none"
                document.getElementById("msg2").style.display = "none"

            } else {
                document.getElementById("msg2").innerText = "You Entered Wrong Password, enter again"
            }

        }
    } else {
        document.getElementById("con2").style.display = "none"
        document.write("Your Account is Blocked")
        count++
    }

}
function call3() {

    let withdrawl = document.getElementById("debit").value
    for (let x of data) {
        if (x.userName == name && x.password == pass && x.amount >= withdrawl) 
        {
            console.log(withdrawl)
            x.amount = x.amount - withdrawl
            document.getElementById("msg3").innerText = `Withdrawl Sucessfull ${x.amount}`
            document.getElementById("debit").style.display = "none"
            document.getElementById("btn").style.display = "none"
            break;

        }
        else {
            document.getElementById("msg3").innerText = "Enter Amount Again"
        }

    }
}