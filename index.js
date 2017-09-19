function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(target) {
  return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list')

  for (let i = 0; i < lis.length; i++) {
    list[i].innerHTML = ((parseInt(list[i].innerHTML)) + n)
  }

  return lis
}
