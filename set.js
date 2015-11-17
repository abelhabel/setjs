MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

window.onload = function(e) {
  console.log('loaded');
  var observer = new MutationObserver(function(mutations, observer) {
    // fired when a mutation occurs
    console.log('observed');
    console.log(mutations, observer);
    for(var i = 0, l = mutations[0].addedNodes.length; i < l; i += 1){
      addElement(mutations[0].addedNodes[i]);
    }
    for(var i = 0, l = mutations[0].removedNodes.length; i < l; i += 1){
      addElement(mutations[0].removedNodes[i]);
      deleteElements();
    }
    // ...
  });
  observer.observe(document, {childList: true, subtree: true});
}


var elements = {
  id: {},
  clas: {}
};

function collectElements() {
  var nodeList = document.getElementsByTagName('*');
  var name, node, id, clas, finalName, id, suffix;

  for(var i = 0, l = nodeList.length; i < l; i += 1){
      addElement(nodeList[i]);
  }
}

function deleteElement(node) {

}
function addElement(node) {
  name = node.nodeName.toLowerCase();
  id = node.id;
  clas = node.className;

  if(id){
    elements[name + '#' + id] = node;
    elements.id[id] = node;
  }else if(clas) {
    if(elements.hasOwnProperty(name + '.' + clas)){
      elements[name + '.' + clas].push(node);
      elements.clas[clas].push(node);
    }else {
      elements[name + '.' + clas] = [node];
      elements.clas[clas] = [node];
    }
  }
  

  if(elements.hasOwnProperty(name)){
    elements[name].push(node);
  }else {
    elements[name] = [node];
  }
}

window.addEventListener('onreadystatechange', function(e){
  console.log('added', this, e);
}, false);

