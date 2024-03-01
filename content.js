function toBoldUnicode(str) {
      const boldMap = {
            'a': '𝐚', 'b': '𝐛', 'c': '𝐜', 'd': '𝐝', 'e': '𝐞', 'f': '𝐟', 'g': '𝐠', 'h': '𝐡', 'i': '𝐢', 'j': '𝐣', 'k': '𝐤', 'l': '𝐥', 'm': '𝐦', 'n': '𝐧', 'o': '𝐨', 'p': '𝐩', 'q': '𝐪', 'r': '𝐫', 's': '𝐬', 't': '𝐭', 'u': '𝐮', 'v': '𝐯', 'w': '𝐰', 'x': '𝐱', 'y': '𝐲', 'z': '𝐳',
            'A': '𝐀', 'B': '𝐁', 'C': '𝐂', 'D': '𝐃', 'E': '𝐄', 'F': '𝐅', 'G': '𝐆', 'H': '𝐇', 'I': '𝐈', 'J': '𝐉', 'K': '𝐊', 'L': '𝐋', 'M': '𝐌', 'N': '𝐍', 'O': '𝐎', 'P': '𝐏', 'Q': '𝐐', 'R': '𝐑', 'S': '𝐒', 'T': '𝐓', 'U': '𝐔', 'V': '𝐕', 'W': '𝐖', 'X': '𝐗', 'Y': '𝐘', 'Z': '𝐙',
            '0': '𝟎', '1': '𝟏', '2': '𝟐', '3': '𝟑', '4': '𝟒', '5': '𝟓', '6': '𝟔', '7': '𝟕', '8': '𝟖', '9': '𝟗'
      };

      let boldStr = '';
      for (let char of str) {
            boldStr += boldMap[char] || char;
      }
      return boldStr;
}


function applyBoldText() {
      let selection = window.getSelection();


      let range = selection.getRangeAt(0);

      range.deleteContents();

      range.insertNode(document.createTextNode("Hello, world!"));

      /* Create a new element to hold the bold text
      let boldElement = document.createElement('b');
      boldElement.textContent = boldText;

      // Replace the selected text with the bold text
      range.deleteContents();
      range.insertNode(boldElement);*/

}



$(function () {

      let element = $('div[role="tablist"][data-testid="ScrollSnap-List"]');
      let button = $('<button>Test</button>').attr('id', 'x-post-editor-bold');
      element.append(button);

      let object;
      let selectedText;
      let range;
      let str

      $(document.body).on('mouseup', () => {
            object = window.getSelection();

            console.log(object);


            let s = object.anchorOffset;
            let e = object.focusOffset;

            //selectedText = object.anchorNode.data.substring(s, e);
            //console.log(object);

            range = object.getRangeAt(0);
            console.log(object.getRangeAt(0));

            str = range.toString();





      });


      button.on('click', (event) => {
            
            range.deleteContents();

            let boldText = toBoldUnicode(str);

            range.insertNode(document.createTextNode(boldText));

            event.stopPropagation()
      });
      /*
      button.click((event) => {


            let selection = window.getSelection();

            console.log(selection);
            //console.log(selection.data);
            console.log(selection.anchorNode.data);

            let range = selection.getRangeAt(0);

            range.deleteContents();

            let text = selection.anchorNode.data;

            let boldText = toBoldUnicode(text);



            range.insertNode(document.createTextNode(boldText));



      });*/

      




      // Get the current selection


});


