(() => {
      console.log("Hello from content.js");
})();

//let element = $('div[aria-labelledby="modal-header"][role="dialog"]');

function onPageLoad() {
      // Call the function to inject the button when the page is loaded
      console.log("Page loaded");
  }
  
  // Add event listener for when the DOM content is loaded
document.addEventListener('DOMContentLoaded', onPageLoad);

const svgBold = '<svg class="linkedin-post-editor-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 64C0 46.3 14.3 32 32 32H80 96 224c70.7 0 128 57.3 128 128c0 31.3-11.3 60.1-30 82.3c37.1 22.4 62 63.1 62 109.7c0 70.7-57.3 128-128 128H96 80 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48V256 96H32C14.3 96 0 81.7 0 64zM224 224c35.3 0 64-28.7 64-64s-28.7-64-64-64H112V224H224zM112 288V416H256c35.3 0 64-28.7 64-64s-28.7-64-64-64H224 112z"/></svg>'
const svgItalic = '<svg class="linkedin-post-editor-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M128 64c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H293.3L160 416h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H90.7L224 96H160c-17.7 0-32-14.3-32-32z"/></svg>'
const svgUnderline = '<svg class="linkedin-post-editor-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M16 64c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H128V224c0 53 43 96 96 96s96-43 96-96V96H304c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H384V224c0 88.4-71.6 160-160 160s-160-71.6-160-160V96H48C30.3 96 16 81.7 16 64zM0 448c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z"/></svg>'

let selectionObj;
let range;

// Bold
const normalToBoldMap = {
      'a': '𝐚', 'b': '𝐛', 'c': '𝐜', 'd': '𝐝', 'e': '𝐞', 'f': '𝐟', 'g': '𝐠', 'h': '𝐡', 'i': '𝐢', 'j': '𝐣', 'k': '𝐤', 'l': '𝐥', 'm': '𝐦', 'n': '𝐧', 'o': '𝐨', 'p': '𝐩', 'q': '𝐪', 'r': '𝐫', 's': '𝐬', 't': '𝐭', 'u': '𝐮', 'v': '𝐯', 'w': '𝐰', 'x': '𝐱', 'y': '𝐲', 'z': '𝐳',
      'A': '𝐀', 'B': '𝐁', 'C': '𝐂', 'D': '𝐃', 'E': '𝐄', 'F': '𝐅', 'G': '𝐆', 'H': '𝐇', 'I': '𝐈', 'J': '𝐉', 'K': '𝐊', 'L': '𝐋', 'M': '𝐌', 'N': '𝐍', 'O': '𝐎', 'P': '𝐏', 'Q': '𝐐', 'R': '𝐑', 'S': '𝐒', 'T': '𝐓', 'U': '𝐔', 'V': '𝐕', 'W': '𝐖', 'X': '𝐗', 'Y': '𝐘', 'Z': '𝐙',
      '0': '𝟎', '1': '𝟏', '2': '𝟐', '3': '𝟑', '4': '𝟒', '5': '𝟓', '6': '𝟔', '7': '𝟕', '8': '𝟖', '9': '𝟗'
};

const boldToNormalMap = {};
for (let key in normalToBoldMap) {
      boldToNormalMap[normalToBoldMap[key]] = key;
}

function isBoldUnicode(str) {
      for (let char of str) {
            if (char !== ' ' && !(char in boldToNormalMap)) {
                  return false;
            }
      }
      return true;
}

function toBoldUnicode(str) {

      let boldStr = '';
      for (let char of str) {
            boldStr += normalToBoldMap[char] || char;
      }
      return boldStr;
}

// Italic
const normalToItalicMap = {
      'a': '𝑎', 'b': '𝑏', 'c': '𝑐', 'd': '𝑑', 'e': '𝑒', 'f': '𝑓', 'g': '𝑔', 'h': 'ℎ', 'i': '𝑖', 'j': '𝑗', 'k': '𝑘', 'l': '𝑙', 'm': '𝑚', 'n': '𝑛', 'o': '𝑜', 'p': '𝑝', 'q': '𝑞', 'r': '𝑟', 's': '𝑠', 't': '𝑡', 'u': '𝑢', 'v': '𝑣', 'w': '𝑤', 'x': '𝑥', 'y': '𝑦', 'z': '𝑧',
      'A': '𝐴', 'B': '𝐵', 'C': '𝐶', 'D': '𝐷', 'E': '𝐸', 'F': '𝐹', 'G': '𝐺', 'H': '𝐻', 'I': '𝐼', 'J': '𝐽', 'K': '𝐾', 'L': '𝐿', 'M': '𝑀', 'N': '𝑁', 'O': '𝑂', 'P': '𝑃', 'Q': '𝑄', 'R': '𝑅', 'S': '𝑆', 'T': '𝑇', 'U': '𝑈', 'V': '𝑉', 'W': '𝑊', 'X': '𝑋', 'Y': '𝑌', 'Z': '𝑍'
};

const italicToNormalMap = {};
for (let key in normalToItalicMap) {
      italicToNormalMap[normalToItalicMap[key]] = key;
}

function isItalicUnicode(str) {
      for (let char of str) {
            if (char !== ' ' && !(char in italicToNormalMap)) {
                  return false;
            }
      }
      return true;
}

function toItalicUnicode(str) {
      let italicStr = '';
      for (let char of str) {
            italicStr += normalToItalicMap[char] || char;
      }
      return italicStr;
}

// Underline
function toUnderlineUnicode(str) {
      let underlineStr = '';
      for (let char of str) {
            underlineStr += char + '\u0332';
      }
      return underlineStr;
}


// Listen for messages from the popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      if (request.message === "check") {
            sendResponse({ status: "Yes, I'm here" });
      }
      //console.log("Message received from popup");
      console.log("hi");
      if (message.request === "active") {
            console.log("Message received from popup -> injecting");
            newPostLoaded();
            sendResponse({ status: "success" });
      }
});


function newPostLoaded() {
      let element = $('div[role="tablist"]');
      let container = $('#linkedin-post-editor-container');
      //let isInjected = $('div.css-175oi2r.r-1wbh5a2.r-htvplk.r-1udh08x.r-1867qdf.r-rsyp9y.r-1pjcn9w.r-1potc6q').length > 0;
      console.log(element);
      console.log(!container.length);
      if (element.length && !container.length) {
            console.log("Injection crit met");
            injectEditor();
      }
      else {
            console.log("Injection crit not met");
      }

}

function boldBtnHandler() {
      console.log("Bold button clicked");
      let boldText


      console.log(selectionObj.toString());
      console.log(selectionObj);
      console.log(selectionObj.anchorNode.data);

      //boldText = toBoldUnicode(selectionObj.anchorNode.data);
      boldText = toBoldUnicode(selectionObj.toString());
      console.log("boldText");
      console.log(toBoldUnicode(selectionObj.toString()));
      console.log("boldText2");
      //console.log(toBoldUnicode(selectionObj.anchorNode.data));

      if (selectionObj.toString().length === 1) {
            //boldText = toBoldUnicode(selectionObj.toString());
            //range.deleteContents();
            //range.insertNode(document.createTextNode(boldText));



      }

      //document.execCommand('delete', false, null);
      document.execCommand('insertText', false, boldText);



      /*
      console.log(document.activeElement.nodeName);
      console.log(document.activeElement.isContentEditable);
      //document.activeElement.deleteContents;

      const replyNode = document.createTextNode(`HI𝑒`);
      const selection = window.getSelection();
      

      if (selection.rangeCount === 0) {
            selection.addRange(document.createRange());
            selection.getRangeAt(0).collapse(activeElement, 1);
      }

      const rangex = selection.getRangeAt(0);
      rangex.collapse(false);

      //Insert reply
      rangex.insertNode(replyNode);

      // Move the cursor to the end
      selection.collapse(replyNode, replyNode.length);*/

      //let evt = new Event('click', { bubbles: true });
      //document.activeElement.dispatchEvent(evt);

}


function italicBtnHandler() {

      // Only Italic selected text
      if (isItalicUnicode(selectionObj.toString())) {
            let regularText = '';
            for (let char of selectionObj.toString()) {
                  regularText += italicToNormalMap[char] || char;
            }
            range.deleteContents();
            range.insertNode(document.createTextNode(regularText));
            return;
      }

      // Mix of bold, italic, and non-bold text
      if (selectionObj.toString().length > 1) {
            // Make all text regular
            let regularText = '';
            for (let char of selectionObj.toString()) {
                  regularText += boldToNormalMap[char] || italicToNormalMap[char] || char;
            }

            // Make all text italic
            let italicText = toItalicUnicode(regularText);
            range.deleteContents();
            range.insertNode(document.createTextNode(italicText));
            return;
      }

      // Only non-italic text
      if (selectionObj.toString().length === 1) {
            let italicText = toItalicUnicode(selectionObj.toString());
            range.deleteContents();
            range.insertNode(document.createTextNode(italicText));
            return;
      }
}


function underlineBtnHandler() {
      // Only Underline selected text
      if (selectionObj.toString().includes('\u0332')) {
            let regularText = '';
            for (let char of selectionObj.toString()) {
                  regularText += char.replace('\u0332', '');
            }
            range.deleteContents();
            range.insertNode(document.createTextNode(regularText));
            return;
      }

      // Mix of underline and non-underline text
      if (selectionObj.toString().length > 1) {
            // Make all text underline
            let underlineText = toUnderlineUnicode(selectionObj.toString());
            range.deleteContents();
            range.insertNode(document.createTextNode(underlineText));
            return;
      }




}


// Add the UI Elements to the DOM
function buildEditor(element) {
      let container = $('div[role="tablist"]')
            .attr('id', 'linkedin-post-editor-container');

      let boldBtn = $('<div>bold</div>')
            .attr('id', 'linkedin-post-editor-bold')
            .addClass('linkedin-post-editor-button')
            .html(svgBold)
            .on('click.namespace', boldBtnHandler);

      let italicBtn = $('<div>italic</div>')
            .attr('id', 'linkedin-post-editor-italic')
            .addClass('linkedin-post-editor-button')
            .html(svgItalic)
            .on('mousedown', italicBtnHandler);

      let underlineBtn = $('<div>underline</div>')
            .attr('id', 'linkedin-post-editor-underline')
            .addClass('linkedin-post-editor-button')
            .html(svgUnderline)
            .on('mousedown', underlineBtnHandler);

      container.append(boldBtn, italicBtn, underlineBtn);

      element.append(container);
}


// Add event listener to save the selection
function addEventListener() {
      $(document).off('mouseup').on('mouseup', (event) => {
            selectionObj = window.getSelection();
            if (selectionObj.rangeCount > 0) {
                  range = selectionObj.getRangeAt(0);
            }
            //event.preventDefault();
            //event.stopPropagation();
      });
}


/* Inject the buttons*/



function injectEditor() {
      console.log("injecting editor");

      let element = $('div[role="tablist"]');
      //let element = $('.css-175oi2r.r-13qz1uu');
      console.log(element);
      if (element.length > 0) {
            buildEditor(element);
            addEventListener();
      }
}









