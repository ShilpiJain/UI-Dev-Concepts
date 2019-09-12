# CSS codebases are sometimes developed without any structure or naming conventions. This leads to an unmaintainable CSS codebase in the long term.
Ref:- (https://seesparkbox.com/foundry/bem_by_example)
# BEM (Block-Element-Modifier) is a naming convention standard for CSS class names.
# 1. Block: The outermost parent element of the component is defined as the block.
# 2. Element: Inside of the component may be one or more children called elements.
# 3. Modifier: Either a block or element may have a variation signified by a modifier.
If all three are used in a name it would look something like this:
[block]__[element]--[modifier]

Example :-
1. Component With No Elements or Modifiers (Simple components may only employ a single element and thus a single class which would be the block.) 
  <button class=”btn”></button>

2. 2.1). Component With A Modifier (A component may have a variation. The variation should be implemented with a modifier class.)
  <button class="btn btn--secondary"></button>
  2.2) Don’t use the modifier class by itself. The modifier class is intended to augment, not replace, the base class.
    <button class="btn--secondary"></button>
    <style>
      .btn--secondary {
        display: inline-block;
        color: green;
      }  
    </style>
3. Component With Elements
More complex components will have child elements. Each child element that needs styled should include a named class.
  <figure class="photo">
    <img class="photo__img" src="me.jpg">
    <figcaption class="photo__caption">Look at me!</figcaption>
  </figure>
  <style>
    .photo { } 
    .photo__img { } 
    .photo__caption { } 
  </style>
4. Element With Modifier
you may want to vary a single element in a component. In those cases add a modifier to the element instead of the component. I’ve found that modifying elements is much less common and less useful than modifying entire components.
  <figure class="photo">
    <img class="photo__img photo__img--framed" src="me.jpg">
    <figcaption class="photo__caption photo__caption--large">Look at me!</figcaption>
  </figure>
  <style>
    .photo__img--framed { }
    .photo__caption--large { }
  </style>
5. Style Elements Based on the Component Modifier
If you find yourself consistently modifying elements of the same component together in the same way, then consider adding the modifier to the base of the component and adjusting styles for each child element based on that one modifier. 
  <figure class="photo photo--highlighted">
    <img class="photo__img" src="me.jpg">
    <figcaption class="photo__caption">Look at me!</figcaption>
  </figure>
  <style>
    .photo--highlighted .photo__img { }
    .photo--highlighted .photo__caption { }
  </style>
6. Multi-word Names
BEM names intentionally use double underscores and double hyphens instead of single to separate Block-Element-Modifier. The reason is so that single hyphens can be used as word separators. Class names should be very readable, so abbreviation isn’t always desirable unless the abbreviations are universally recognizable.
  <div class="some-thesis some-thesis--fast-read">
    <div class="some-thesis__some-element"></div>
  </div>
  <style>
    .some-thesis { }
    .some-thesis--fast-read { }
    .some-thesis__some-element { }
  </style>