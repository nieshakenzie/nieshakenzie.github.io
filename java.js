document.querySelector('.copy-button').addEventListener('click', function() {
    var text = document.querySelector('.text-content');
    var range = document.createRange();
    range.selectNode(text);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Text copied to clipboard!');
  });


  