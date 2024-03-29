// Immediately-Invoked Function Expression (IIFE)
(() => {

      // Debug option to toggle console logs
      let debug = false
      if (debug) console.log("Hello from content.js");

      // Bold
      const normalToBoldMap = {
            'a': '𝗮', 'b': '𝗯', 'c': '𝗰', 'd': '𝗱', 'e': '𝗲', 'f': '𝗳', 'g': '𝗴', 'h': '𝗵', 'i': '𝗶', 'j': '𝗷', 'k': '𝗸', 'l': '𝗹', 'm': '𝗺', 'n': '𝗻', 'o': '𝗼', 'p': '𝗽', 'q': '𝗾', 'r': '𝗿', 's': '𝘀', 't': '𝘁', 'u': '𝘂', 'v': '𝘃', 'w': '𝘄', 'x': '𝘅', 'y': '𝘆', 'z': '𝘇',
            'A': '𝗔', 'B': '𝗕', 'C': '𝗖', 'D': '𝗗', 'E': '𝗘', 'F': '𝗙', 'G': '𝗚', 'H': '𝗛', 'I': '𝗜', 'J': '𝗝', 'K': '𝗞', 'L': '𝗟', 'M': '𝗠', 'N': '𝗡', 'O': '𝗢', 'P': '𝗣', 'Q': '𝗤', 'R': '𝗥', 'S': '𝗦', 'T': '𝗧', 'U': '𝗨', 'V': '𝗩', 'W': '𝗪', 'X': '𝗫', 'Y': '𝗬', 'Z': '𝗭',
            '0': '𝟬', '1': '𝟭', '2': '𝟮', '3': '𝟯', '4': '𝟰', '5': '𝟱', '6': '𝟲', '7': '𝟳', '8': '𝟴', '9': '𝟵'
      };

      const boldToNormalMap = {};
      for (let key in normalToBoldMap) {
            boldToNormalMap[normalToBoldMap[key]] = key;
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

      // SVG Icons
      const svgBold = '<svg class="twitter-post-editor-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 64C0 46.3 14.3 32 32 32H80 96 224c70.7 0 128 57.3 128 128c0 31.3-11.3 60.1-30 82.3c37.1 22.4 62 63.1 62 109.7c0 70.7-57.3 128-128 128H96 80 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48V256 96H32C14.3 96 0 81.7 0 64zM224 224c35.3 0 64-28.7 64-64s-28.7-64-64-64H112V224H224zM112 288V416H256c35.3 0 64-28.7 64-64s-28.7-64-64-64H224 112z"/></svg>'
      const svgItalic = '<svg class="twitter-post-editor-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M128 64c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H293.3L160 416h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H90.7L224 96H160c-17.7 0-32-14.3-32-32z"/></svg>'
      const svgUnderline = '<svg class="twitter-post-editor-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M16 64c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H128V224c0 53 43 96 96 96s96-43 96-96V96H304c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H384V224c0 88.4-71.6 160-160 160s-160-71.6-160-160V96H48C30.3 96 16 81.7 16 64zM0 448c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z"/></svg>'

      // XPath for the Post Parent
      const POST_PARENT = '//*[@id="layers"]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div/div[3]/div[2]';

      // Vars
      let selectionObj;


      // Listen for Messages from Background
      chrome.runtime.onMessage.addListener((obj, sender, response) => {
            const { type } = obj;

            // Check if User is making a new Post
            if (type === "POST") {
                  if (debug) console.log("POST")

                  // Inject Buttons
                  let postCount = setInterval(() => {

                        let postParent = document.evaluate(POST_PARENT, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

                        // If the post window is shown, inject the font editor buttons
                        if (postParent) {
                              if (debug) console.log(`Element has ${postParent.children.length} children`);
                              injectEditor();

                        } else {
                              if (debug) console.log('Element not found');
                              clearInterval(postCount);
                        }
                  }, 500);

            }
      });


      // If the editor is not injected, inject it
      function injectEditor() {
            let editorExists = $('div#twitter-post-editor-container').length > 0;
            if (debug) console.log("Editor Exists: " + editorExists);

            let injectionTarget = $('div[aria-labelledby="modal-header"] nav[aria-live="polite"][role="navigation"] div[role="tablist"][data-testid="ScrollSnap-List"]');
            let injectionTargetExists = injectionTarget.length > 0;
            if (debug) console.log("Injection Target Exists: " + injectionTargetExists);

            // Build the font editor and add event listener
            if (!editorExists && injectionTargetExists) {
                  buildEditor(injectionTarget);
                  addEventListener();
            }
      }

      // Add event listener to save the selection
      function addEventListener() {
            $(document).off('selectionchange').on('selectionchange', () => {
                  selectionObj = window.getSelection();
                  
                  if (selectionObj.toString().length > 1) {
                        $('#twitter-post-editor-bold').addClass('twitter-post-editor-active');
                        $('#twitter-post-editor-italic').addClass('twitter-post-editor-active');
                        $('#twitter-post-editor-underline').addClass('twitter-post-editor-active');
                  } 
                  
                  if (selectionObj.toString().length === 0) {
                        $('#twitter-post-editor-bold').removeClass('twitter-post-editor-active');
                        $('#twitter-post-editor-italic').removeClass('twitter-post-editor-active');
                        $('#twitter-post-editor-underline').removeClass('twitter-post-editor-active');
                  }

            });
      }

      

      // Add the UI Elements to the DOM
      function buildEditor(element) {
            let container = element
                  .attr('id', 'twitter-post-editor-container');

            let boldBtn = $('<div>bold</div>')
                  .attr('id', 'twitter-post-editor-bold')
                  .addClass('twitter-post-editor-button')
                  .html(svgBold)
                  .on('click.namespace', boldBtnHandler)


            let italicBtn = $('<div>italic</div>')
                  .attr('id', 'twitter-post-editor-italic')
                  .addClass('twitter-post-editor-button')
                  .html(svgItalic)
                  .on('click.namespace', italicBtnHandler)


            let underlineBtn = $('<div>underline</div>')
                  .attr('id', 'twitter-post-editor-underline')
                  .addClass('twitter-post-editor-button')
                  .html(svgUnderline)
                  .on('click.namespace', underlineBtnHandler)



            container.append(boldBtn, italicBtn, underlineBtn);

            element.append(container);
      }



      function boldBtnHandler() {
            let outputText;

            console.log('selectionObj', selectionObj.toString());

            // If entire selection is bold, make it normal
            if (isBoldUnicode(selectionObj.toString())) {
                  let regularText = '';
                  for (let char of selectionObj.toString()) {
                        regularText += boldToNormalMap[char] || char;
                  }
                  outputText = regularText;
                  document.execCommand('insertText', false, outputText);
                  return;
            }

            // If selection is not only bold, make it all bold
            if (!isBoldUnicode(selectionObj.toString())) {

                  // Make all text regular
                  let regularText = '';
                  for (let char of selectionObj.toString()) {
                        regularText += boldToNormalMap[char] || italicToNormalMap[char] || char;
                  }

                  // Make all text bold
                  let boldText = toBoldUnicode(regularText);
                  outputText = boldText;
                  document.execCommand('insertText', false, outputText);
                  return;
            }

      }

      // Return True if string is bold
      function isBoldUnicode(str) {
            for (let char of str) {
                  // If char is not a space and not in the boldToNormalMap, return false
                  if (char !== ' ' && !(char in boldToNormalMap)) {
                        return false;
                  }
            }
            return true;
      }

      // Convert string to bold
      function toBoldUnicode(str) {
            let boldStr = '';
            for (let char of str) {
                  boldStr += normalToBoldMap[char] || char;
            }
            return boldStr;
      }


      function italicBtnHandler() {
            let outputText;

            // If entire selection is italic, make it normal
            if (isItalicUnicode(selectionObj.toString())) {
                  let regularText = '';
                  for (let char of selectionObj.toString()) {
                        regularText += italicToNormalMap[char] || char;
                  }
                  outputText = regularText;
                  document.execCommand('insertText', false, outputText);
                  return;

            }

            // If selection is not only italic, make it all italic
            if (selectionObj.toString().length > 1) {
                  // Make all text regular
                  let regularText = '';
                  for (let char of selectionObj.toString()) {
                        regularText += italicToNormalMap[char] || boldToNormalMap[char] || char;
                  }

                  // Make all text italic
                  let italicText = toItalicUnicode(regularText);
                  outputText = italicText;
                  document.execCommand('insertText', false, outputText);
                  return;
            }
      }

      // Return True if string is italic
      function isItalicUnicode(str) {
            for (let char of str) {
                  if (char !== ' ' && !(char in italicToNormalMap)) {
                        return false;
                  }
            }
            return true;
      }

      // Convert string to italic
      function toItalicUnicode(str) {
            let italicStr = '';
            for (let char of str) {
                  italicStr += normalToItalicMap[char] || char;
            }
            return italicStr;
      }


      function underlineBtnHandler() {
            // Only Underline selected text
            if (selectionObj.toString().includes('\u0332')) {
                  let regularText = '';
                  for (let char of selectionObj.toString()) {
                        regularText += char.replace('\u0332', '');
                  }
                  document.execCommand('insertText', false, regularText);
                  return;
            }

            // Mix of underline and non-underline text
            if (selectionObj.toString().length > 1) {
                  // Make all text underline
                  let underlineText = toUnderlineUnicode(selectionObj.toString());
                  document.execCommand('insertText', false, underlineText);

                  return;
            }
      }


      function toUnderlineUnicode(str) {
            let underlineStr = '';
            for (let char of str) {
                  underlineStr += char + '\u0332';
            }
            return underlineStr;
      }




})();