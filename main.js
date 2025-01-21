let teams = '';


updateView()
function updateView() {

  let  app = document.getElementById('app');
  app.innerHTML = `
  <div class="container">
    <table>
        <tr>
            <th>Teams</th>
        </tr>
        <tr>
        <td><button onclick="fetchTeam(1)"> team 1</button></td>
        <td><button onclick="fetchTeam(2)"> team 2</button></td>
        <td><button onclick="fetchTeam(3)"> team 3</button></td>
        <td><button onclick="fetchTeam(4)"> team 4</button></td>
        <td><button onclick="fetchTeam(5)"> team 5</button></td>
        <td><button onclick="fetchTeam(6)"> team 6</button></td>
        <td><button onclick="fetchTeam(7)"> team 7</button></td>
        </tr>
    </table>
  </div>
  ` ;
}

async function fetchTeam(teamId) {
    let response = await axios.get(`http://localhost:5196/teams/${teamId}`); 
    teams = response.data;
    console.log(teams);
    updateView();
}

function renderStudentTable() {
    
}