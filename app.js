let words = [ ]
var input = document.getElementById('input').value = words
// console.log(input)
 var space = document.getElementById('space').value = '  '
class Kays{
  static click(e) {
    if (e.classList.contains('keys')) {
      words.push(e.textContent)
      document.getElementById('input').value= words.join('')
      console.log(words)
    }
  }

  static del(e){
    if (e.classList.contains('delete')) {
      console.log(e)
      words.pop()
      document.getElementById('input').value= words.join('')
      // console.log(words)
    }
}

static spce(e){
  if(e.classList.contains('space')){
    words.push(' ')
    document.getElementById('input').value= words.join('')
    // console.log(words)
  }
}

static clear(e){
  if(e.classList.contains('clear')){
    words = []
    document.getElementById('input').value= words.join('')
    // console.log(words)
  }
}


static submit(e){
  if (e.classList.contains('enter')) {
    var ink = document.getElementById('input').value
    var out =  document.getElementById('output')
    var div = document.createElement('div')
    div.className = 'spread'
    div.innerHTML = ink 

    out.append(div)
  }
}

static clear2(){
  words = []
  var ink = document.getElementById('input').value =  words ;
}
}


document.getElementById('numlet').addEventListener('click', (el) =>{
  Kays.click(el.target)
})

document.getElementById('numlet').addEventListener('click', (el) =>{
  Kays.del(el.target)
}
)// console.log(space)

document.getElementById('numlet').addEventListener('click', (el) =>{
  Kays.spce(el.target)
}
)

document.getElementById('numlet').addEventListener('click', (el) =>{
  Kays.clear(el.target)
}
)

document.getElementById('numlet').addEventListener('click', (el) =>{
  Kays.submit(el.target)
  // Kays.clear2()
}
)