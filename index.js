const shuffle = function (array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
}
window.onload = function(){
    loadTagInput();
    let getTags = () =>{
        let tagsObj = []
        ;[...document.getElementsByClassName('js-tag')].forEach(
            el =>{
               tagsObj.push (  el.innerText.slice( 0 , el.innerText.length -2 ) )
            }
        )
        return tagsObj
    }
    // add members button
    document.getElementById('lMemBtn').addEventListener('click', ()=>{
        let membersList = document.querySelector('#member-list ul')
        ;[...membersList.childNodes].forEach( el => el.remove() )

        getTags().forEach(
            ( el )=>{
                let li = document.createElement('li')
                li.innerText = el;
                li.classList.add('list-group-item')
                membersList.append(li)
            }
        )
    })
    // add teams button
    document.getElementById('lTeamBtn').addEventListener('click', ()=>{
        let teamList = document.querySelector('#team-list > .card > ul')
        ;[...teamList.childNodes].forEach( el => el.remove() )

        getTags().forEach(
            ( el )=>{
                let h6 = document.createElement('h6')
                h6.innerText = el;
                let li = document.createElement('li')
                li.classList.add('list-group-item')
                li.setAttribute('TeamName', el )
                li.append(h6)
                teamList.append(li)
            }
        )
    })
    document.getElementById('assignMemBtn').addEventListener('click', ()=>{
        let teamLists =[...document.querySelectorAll('#team-list li[teamName]')]
        let membersArray = [...document.querySelectorAll('#member-list ul li') ]
        let ulQty =  Math.floor( teamLists.length / membersArray.length + 1 )
        shuffle( membersArray )
        shuffle( teamLists )
        let targetTeam = teamLists[0]
        let targetMember = membersArray[0]
        if (targetTeam.querySelector('ul') === null ){
            let ul = document.createElement('ul')
            ul.classList.add('list-group')
            ul.classList.add('m-3')
            targetTeam.append(ul)
        }

        //that make more probable to balance squads but isn't the most efficient algorithm,
        let i=0;
        while( targetTeam.querySelector('ul').childElementCount >= ulQty ){
            shuffle( teamLists )
            targetTeam = teamLists[0]
             if ( i<5 ) i++ else break;
        }
        let ul = targetTeam.querySelector('ul')
        let li = targetMember.cloneNode()
        li.innerText = targetMember.innerText

        ul.append(li)
        targetMember.remove()
    } )
}
/*
    document.getElementById('assignMemBtn').addEventListener('click', ()=>{
        let teamLists =[...document.querySelectorAll('#team-list ul li')]
        let membersArray = [...document.querySelectorAll('#member-list ul li') ]
        let ulQty =  Math.floor( teamLists.length / membersArray.length )

        teamLists.forEach( (team, i ) => {
            for ( let i = 0; i < ulQty ; i++){

            }
            let li = document.createElement('li')
            li.classList.add('list-group-item')
            li.innerText = membersArray[i].innerText;
            team.append( li )
                membersArray[i].remove()
            }
        )
    })
*/


