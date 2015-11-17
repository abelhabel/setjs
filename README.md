# setjs
A live representation of the DOM

** Tags are grouped by tag name: elements[tagName],
** by ID: elements.id[idName],
** by class: elements.clas[className],
** by tag name and id: elements[tagName#idName],
** by tag name  and class: elements[tagName.className]

When an element is added to the DOM it is added to the elements object as well through a MutationObserver.

Suggestions for shorter accessors is welcome.
