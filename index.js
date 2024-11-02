const getBtn = document.querySelector(".get")
const clearBtn = document.querySelector(".clear")

getBtn.addEventListener("click", (event) => {
    event.preventDefault()
    document.querySelector(".itog").innerHTML = ""
    document.querySelector(".months").innerHTML = ""
    const loan = Number(document.getElementById("loan").value)
    const percent = Number(document.getElementById("percent").value / 100)
    const srok = Number(document.getElementById("srok").value)
    const months = document.querySelector(".months")
    if( isNaN(loan) || isNaN(percent) || isNaN(srok)){
        alert("введите корректные значения")
        return
    }
    let monthPay = 0;
    console.log(monthPay);
    let itogMonth = 0
    let total = loan * percent
    const info = `
    Сумма кредита: <strong>${loan} ₽ </strong> <br>
    Годовой процент: <strong>${percent * 100} % </strong> <br>
    Срок кредита: <strong>${srok} месяцев</strong> <br>
    Сумма переплаты: <strong>${total} </strong> <br>
    Полная стоимость: <strong>${loan + total} </strong> <br>
    `
    // for (let i = 1; i <= srok; i++) {
        monthPay = loan * ((percent / srok));
        console.log(monthPay);
        itogMonth = (loan / srok) + monthPay
        console.log(itogMonth);
        const m = document.createElement("p")
        m.textContent = `платеж за  месяц равен ${ itogMonth} руб`
        months.append(m)
    // }
    const itog = document.querySelector(".itog")

    itog.innerHTML = info
})

clearBtn.addEventListener("click" , () => {
    document.querySelector(".itog").innerHTML = ""
    document.querySelector(".months").innerHTML = ""

})