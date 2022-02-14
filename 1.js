const input = document.querySelector("input");
const btnWacha = document.querySelector(".btn.whachame");

btnWacha.addEventListener("click", () => {

    if (input.value != "") {

        if (input.value == "Maria Margarita Celeste") {
            document.location.href = './vd.html'

        } else {
            alert("Fuera de aqui sapo")

            window.location.href = "https://i2.wp.com/acuariomichin.com/wp-content/uploads/2020/08/sapos-croan-fuerte.jpg?resize=1024%2C640&ssl=1";
        }
    }
    else {
        alert("Llena porfavor")

    }


})
