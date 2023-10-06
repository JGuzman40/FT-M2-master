
var traverseDomAndCollectElements = function (
  matchFunc,
  startEl,
  resultSet = []
) {
  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  // (elementDom) =>
  //matchFunctionMaker(tag)(elementDom) &&
  // matchFunctionMaker(`.${clase}`)(elementDom);
  // if (matchFunc(startEl) === true) resultSet.push(startEl);
  // for (let i = 0; i < startEl.children.length; i++) {
  //   traverseDomAndCollectElements(matchFunc, startEl.children[i], resultSet);
  // }
  // return resultSet;
  if (matchFunc(startEl)) {
    resultSet.push(startEl);
  }

  for (var i = 0; i < startEl.children.length; i++) {
    traverseDomAndCollectElements(matchFunc, startEl.children[i], resultSet);
  }

  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // "span.myClass"
  // tu código aquí
  // #myId -> id
  // .myClass
  // div.myClass
  // div
  if (selector[0] === "#") return "id";
  if (selector[0] === ".") return "class";
  // ""
  if (selector.includes(".")) return "tag.class";
  return "tag";
};
// Array-like -> string, nodelist

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  // "span.myClass"
  var selectorType = selectorTypeMatcher(selector);
  // "tag.class"
  var matchFunction;
  if (selectorType === "id") {
    // element -> nodo del dom en el que estoy parado
    // <div id="myId">...</div>
    matchFunction = (elementDom) => `#${elementDom.id}` === selector;
  } else if (selectorType === "class") {
    matchFunction = (elementDom) => {
      /* const selectorWord = selector.slice(1);
      let a = element.getAttribute("class") ?? "";
      let b = a.split(" ");
      return b.some((e) => e === selectorWord); */
      for (const clases of elementDom.classList) {
        // ["lkj", "myClass", "kjhkashofik"]
        if (`.${clases}` === selector) return true;
      }
      return false;
    };
  } else if (selectorType === "tag.class") {
    // "span.myClass";
    const [tag, clase] = selector.split(".");
    // tag -> span , clase -> myClass
    matchFunction = (elementDom) =>
      matchFunctionMaker(tag)(elementDom) &&
      matchFunctionMaker(`.${clase}`)(elementDom);
  } else if (selectorType === "tag") {
    matchFunction = (elementDom) =>
      elementDom.tagName.toLowerCase() === selector.toLowerCase();
  } else if (selectorType === "child") {
    const selectors = selector.split(">");
    matchFunction = function (el) {
      let currentEl = el;
      for (let i = selectors.length - 1; i >= 0; i--) {
        currentEl = currentEl.parentElement;
        if (!currentEl || !matchFunctionMaker(selectors[i])(currentEl)) return false;
      }
      return true;
    };
}

  return matchFunction;
};

var $ = function (selector) {
  // selector ->"span.myClass"
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  // (elementDom) =>
  //matchFunctionMaker(tag)(elementDom) &&
  // matchFunctionMaker(`.${clase}`)(elementDom);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
  
// function traverseDomAndCollectElements(matchFunc) {
//   var matches = [];

//   function traverse(node) {
//     if (matchFunc(node)) {
//       matches.push(node);
//     }
//     for (var i = 0; i < node.children.length; i++) {
//       traverse(node.children[i]);
//     }
//   }

//   traverse(document.body);
//   return matches;
// }

// function matchFunctionMaker(selector) {
//   if (selector.includes(">")) {
//     var selectors = selector.split(">");
//     return function (node) {
//       var currentNode = node;
//       for (var i = selectors.length - 1; i >= 0; i--) {
//         if (currentNode && currentNode.matches(selectors[i].trim())) {
//           currentNode = currentNode.parentElement;
//         } else {
//           return false;
//         }
//       }
//       return true;
//     };
//   } else {
//     return function (node) {
//       return node.matches(selector);
//     };
//   }
// }


// var $ = function (selector) {
//   var elements;
//   if (typeof selector === "function") {
//     elements = traverseDomAndCollectElements(selector);
//   } else {
//     var selectorMatchFunc = matchFunctionMaker(selector);
//     elements = traverseDomAndCollectElements(selectorMatchFunc);
//   }
//   return elements;
// };


// CODIGO SIN EXTRAS
// var traverseDomAndCollectElements = function (
//   matchFunc, 
//   startEl, 
//   resultSet = []
// ) {
//   if (typeof startEl === "undefined") {
//     startEl = document.body;
//   }

//   // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
//   // usa matchFunc para identificar elementos que matchien

//   // TU CÓDIGO AQUÍ
//   if(matchFunc(startEl)) resultSet.push(startEl);

//   for(let i = 0; i < startEl.children.length; i++) {
//     traverseDomAndCollectElements(matchFunc, startEl.children[i], resultSet);
//   }
//   return resultSet;
// };

// // Detecta y devuelve el tipo de selector
// // devuelve uno de estos tipos: id, class, tag.class, tag

// var selectorTypeMatcher = function (selector) {
//   // tu código aquí
//   if (selector[0] === "#") return "id"
//   if (selector[0] === ".") return "class"
//   if (selector.includes(".")) return "tag.class"
//   return "tag";
// };

// // NOTA SOBRE LA FUNCIÓN MATCH
// // recuerda, la función matchFunction devuelta toma un elemento como un
// // parametro y devuelve true/false dependiendo si el elemento
// // matchea el selector.

// var matchFunctionMaker = function (selector) {    // el los test esta '#price'
//     // "span.myClass"
//     var selectorType = selectorTypeMatcher(selector);
//     // "tag.class"
//     var matchFunction;
//     if (selectorType === "attribute") {
//       // element -> nodo del dom en el que estoy parado
//       // <div id="myId">...</div>
//       const [tag, attrValue] = selector.split("[");
//       matchFunction = (elementDom) => 
      
      
//       `#${elementDom.id}` === selector;
//     } else if (selectorType === "class") {
//       matchFunction = (elementDom) => {
//         /* const selectorWord = selector.slice(1);
//         let a = element.getAttribute("class") ?? "";
//         let b = a.split(" ");
//         return b.some((e) => e === selectorWord); */
//         for (const clases of elementDom.classList) {
//           // ["lkj", "myClass", "kjhkashofik"]
//           if (`.${clases}` === selector) return true;
//         }
//         return false;
//       };
//     } else if (selectorType === "tag.class") {
//       // "span.myClass";
//       const [tag, clase] = selector.split(".");
//       // tag -> span , clase -> myClass
//       matchFunction = (elementDom) =>
//         matchFunctionMaker(tag)(elementDom) &&
//         matchFunctionMaker(`.${clase}`)(elementDom);
//     } else if (selectorType === "tag") {
//       matchFunction = (elementDom) =>
//         elementDom.tagName.toLowerCase() === selector.toLowerCase();
//     }
//     return matchFunction;
//   };

// var $ = function (selector) {
//   var elements;
//   var selectorMatchFunc = matchFunctionMaker(selector);
//   elements = traverseDomAndCollectElements(selectorMatchFunc);
//   return elements;
// };
