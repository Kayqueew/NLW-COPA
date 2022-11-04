function creategame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="bandeira do ${player2}" />
    </li>
  `
}

let delay = -0.4;
function createcard(date, day, games) {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
     <h2>${date} <span>${date}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}
document.querySelector("#cards").innerHTML = 
      createcard("24/11", "quinta", creategame("brasil", "16:00", "serbia"))+
      createcard("28/11", "segunda",creategame("brasil", "13:00","switzerland")
       +creategame("portugal", "16:00", "uruguay")
       ) +
      createcard("02/12","sexta", creategame("brasil", "16:00", "camaroon") 
       )

