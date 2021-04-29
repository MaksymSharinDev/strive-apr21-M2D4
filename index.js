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
                li.append(h6)
                teamList.append(li)
            }
        )
    })

}