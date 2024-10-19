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
    let ret = 0;
    console.log(monthPay);
    let itogMonth = 0
    for (let i = 1; i <= srok; i++) {
        monthPay = loan * ((percent / 12));
        console.log(monthPay);
        
        itogMonth = Math.round(monthPay * 100 ) / 100;
        console.log(itogMonth);
        const m = document.createElement("p")
        m.textContent = `процент за ${i} месяц равен ${ itogMonth} руб`
        months.append(m)
        ret += itogMonth; 
    }
    ret = Math.round(ret + loan)
    const info = `
    сумма займа: <strong>${loan} ₽ </strong> <br>
    годовой процент: <strong>${percent * 100} % </strong> <br>
    срок кредита: <strong>${srok} месяцев</strong> <br>
    сумма переплаты: <strong>${ret - loan} </strong> <br>
    полная стоимость: <strong>${ret} </strong> <br>
    `
    const itog = document.querySelector(".itog")

    itog.innerHTML = info
})

clearBtn.addEventListener("click" , () => {
    document.querySelector(".itog").innerHTML = ""
    document.querySelector(".months").innerHTML = ""

})