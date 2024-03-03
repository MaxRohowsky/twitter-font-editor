const svgBold = '<svg class="x-post-editor-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 64C0 46.3 14.3 32 32 32H80 96 224c70.7 0 128 57.3 128 128c0 31.3-11.3 60.1-30 82.3c37.1 22.4 62 63.1 62 109.7c0 70.7-57.3 128-128 128H96 80 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48V256 96H32C14.3 96 0 81.7 0 64zM224 224c35.3 0 64-28.7 64-64s-28.7-64-64-64H112V224H224zM112 288V416H256c35.3 0 64-28.7 64-64s-28.7-64-64-64H224 112z"/></svg>'
const svgItalic = '<svg class="x-post-editor-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M128 64c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H293.3L160 416h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H90.7L224 96H160c-17.7 0-32-14.3-32-32z"/></svg>'
const svgUnderline = '<svg class="x-post-editor-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M16 64c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H128V224c0 53 43 96 96 96s96-43 96-96V96H304c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H384V224c0 88.4-71.6 160-160 160s-160-71.6-160-160V96H48C30.3 96 16 81.7 16 64zM0 448c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z"/></svg>'

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

function toItalicUnicode(str) {
      const italicMap = {
            'a': '𝑎', 'b': '𝑏', 'c': '𝑐', 'd': '𝑑', 'e': '𝑒', 'f': '𝑓', 'g': '𝑔', 'h': 'ℎ', 'i': '𝑖', 'j': '𝑗', 'k': '𝑘', 'l': '𝑙', 'm': '𝑚', 'n': '𝑛', 'o': '𝑜', 'p': '𝑝', 'q': '𝑞', 'r': '𝑟', 's': '𝑠', 't': '𝑡', 'u': '𝑢', 'v': '𝑣', 'w': '𝑤', 'x': '𝑥', 'y': '𝑦', 'z': '𝑧',
            'A': '𝐴', 'B': '𝐵', 'C': '𝐶', 'D': '𝐷', 'E': '𝐸', 'F': '𝐹', 'G': '𝐺', 'H': '𝐻', 'I': '𝐼', 'J': '𝐽', 'K': '𝐾', 'L': '𝐿', 'M': '𝑀', 'N': '𝑁', 'O': '𝑂', 'P': '𝑃', 'Q': '𝑄', 'R': '𝑅', 'S': '𝑆', 'T': '𝑇', 'U': '𝑈', 'V': '𝑉', 'W': '𝑊', 'X': '𝑋', 'Y': '𝑌', 'Z': '𝑍',
            '0': '𝟎', '1': '𝟏', '2': '𝟐', '3': '𝟑', '4': '𝟒', '5': '𝟓', '6': '𝟔', '7': '𝟕', '8': '𝟖', '9': '𝟗'
      };

      let italicStr = '';
      for (let char of str) {
            italicStr += italicMap[char] || char;
      }
      return italicStr;
}

function toBoldItalicUnicode(str) {
      const boldItalicMap = {
            'a': '𝒂', 'b': '𝒃', 'c': '𝒄', 'd': '𝒅', 'e': '𝒆', 'f': '𝒇', 'g': '𝒈', 'h': '𝒉', 'i': '𝒊', 'j': '𝒋', 'k': '𝒌', 'l': '𝒍', 'm': '𝒎', 'n': '𝒏', 'o': '𝒐', 'p': '𝒑', 'q': '𝒒', 'r': '𝒓', 's': '𝒔', 't': '𝒕', 'u': '𝒖', 'v': '𝒗', 'w': '𝒘', 'x': '𝒙', 'y': '𝒚', 'z': '𝒛',
            'A': '𝑨', 'B': '𝑩', 'C': '𝑪', 'D': '𝑫', 'E': '𝑬', 'F': '𝑭', 'G': '𝑮', 'H': '𝑯', 'I': '𝑰', 'J': '𝑱', 'K': '𝑲', 'L': '𝑳', 'M': '𝑴', 'N': '𝑵', 'O': '𝑶', 'P': '𝑷', 'Q': '𝑸', 'R': '𝑹', 'S': '𝑺', 'T': '𝑻', 'U': '𝑼', 'V': '𝑽', 'W': '𝑾', 'X': '𝑿', 'Y': '𝒀', 'Z': '𝒁',
            '0': '𝟎', '1': '𝟏', '2': '𝟐', '3': '𝟑', '4': '𝟒', '5': '𝟓', '6': '𝟔', '7': '𝟕', '8': '𝟖', '9': '𝟗'
      };

      let boldItalicStr = '';
      for (let char of str) {
            boldItalicStr += boldItalicMap[char] || char;
      }
      return boldItalicStr;
}


function toUnderlineUnicode(str) {
      let underlineStr = '';
      for (let char of str) {
            underlineStr += char + '\u0332';
      }
      return underlineStr;
}


chrome.runtime.onMessage.addListener((message) => {
      if (message.request === "active") {
            console.log("active" + message.request);
            newPostLoaded();
      }
});




async function newPostLoaded() {
      let isInjected = $(' div #x-post-editor-container').length > 0;
      console.log("isInjected " + isInjected);

      if (!isInjected) {
            injectEditor();
      }

}




function injectEditor() {
      let selectionObj;
      let range;
      let str

      console.log("injecting editor");

      const element = $(' div .DraftEditor-root');
      console.log(element);

      let container = $('<div>').attr('id', 'x-post-editor-container');

      let boldbutton = $('<div>bold</div>')
            .attr('id', 'x-post-editor-bold')
            .addClass('x-post-editor-button')
            .html(svgBold);

      let italicbutton = $('<div>italic</div>')
            .attr('id', 'x-post-editor-italic')
            .addClass('x-post-editor-button')
            .html(svgItalic);


      let underlinebutton = $('<div>underline</div>')
            .attr('id', 'x-post-editor-underline')
            .addClass('x-post-editor-button')
            .html(svgUnderline);

      container.append(boldbutton, italicbutton, underlinebutton);
      element.append(container);



      $(document.body).off('mouseup').on('mouseup', (event) => {


            selectionObj = window.getSelection();


            if (selectionObj.rangeCount > 0) {
                  console.log(selectionObj);
                  console.log(selectionObj.getRangeAt(0));


            }

            //let s = object.anchorOffset;
            //let e = object.focusOffset;

            //selectedText = object.anchorNode.data.substring(s, e);
            //console.log(object);

            //range = object.getRangeAt(0);
            //console.log(object.getRangeAt(0));

            //str = range.toString();
            //event.stopPropagation()

      });



      //boldbutton.on('click', (event) => {
      /*
      range.deleteContents();

      let boldText = toBoldUnicode(str);

      range.insertNode(document.createTextNode(boldText));

      event.stopPropagation()*/
      //});


      /*
      italicbutton.on('click', (event) => {

            range.deleteContents();

            let italicText = toItalicUnicode(str);

            range.insertNode(document.createTextNode(italicText));

            event.stopPropagation()
      });

      underlinebutton.on('click', (event) => {
            range.deleteContents();

            let underlineText = toUnderlineUnicode(str);

            range.insertNode(document.createTextNode(underlineText));

            event.stopPropagation()
      });*/




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


}


