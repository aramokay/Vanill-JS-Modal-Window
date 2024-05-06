let buttons = document.querySelectorAll(".vjs-modal");
let modal_close = document.getElementById('vjs-modal-close')

for (i = 0; i < buttons.length; ++i) {
  buttons[i].onclick = function (e)  {

    var d_type = e.target.dataset.vjs_type; 
    var d_content = e.target.dataset.vjs_content; 
    if(d_type){
     var modal = document.createElement('div');
     modal.style.cssText = '';
     modal.classList.add('modal')
     modal.id = 'MyModal'
     modal.innerHTML = '<div class="modal-content animate"><span id="vjs-modal-close" onclick="vjsModalClose()">&times;</span><p>'+d_content+'</p></div>'
     document.body.appendChild(modal);

    }else{
      alert('no type')
    }

  };

};

function vjsModalClose(modal){
  document.getElementById('MyModal').remove()
 // modal.remove()
}

modal_close.onclick = function (e)  {
  alert('ok')
}

