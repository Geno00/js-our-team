const Team = [
                {
                    'nome': 'Wayne Barnett',
                    'ruolo': 'Founder & CEO',
                    'foto': 'wayne-barnett-founder-ceo.jpg'
                },

                {
                    'nome': 'Walter Gordon',
                    'ruolo': 'Office Manager',
                    'foto': 'walter-gordon-office-manager.jpg'
                },

                {
                    'nome': 'Angela Lopez',
                    'ruolo': 'Social Media Manage',
                    'foto': 'angela-lopez-social-media-manager.jpg'
                },

                {
                    'nome': 'Scott Estrada',
                    'ruolo': 'Developer',
                    'foto': 'scott-estrada-developer.jpg'
                },

                {
                    'nome': 'Barbara Ramos',
                    'ruolo': 'Graphic Designer',
                    'foto': 'barbara-ramos-graphic-designer.jpg'
                }
    
             ];

const teamDom = document.getElementById('container');

for (let chiave in Team) {
    teamDom.innerHTML += `<div class="elementi">${Team}</div>`
    console.log(teamDom)
};