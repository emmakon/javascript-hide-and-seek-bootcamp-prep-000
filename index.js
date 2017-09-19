function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(target) {
  return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list')

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = ((parseInt(lis[i].innerHTML)) + n)
  }

  return lis
}

function deepestChild(deep) {
  const deepen = document.getElementById('grand-node')

  for (let i = 0; i < deepen.length; i++) {
    querySelectorAll('div')[4]
  }
} 