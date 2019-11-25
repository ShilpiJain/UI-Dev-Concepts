# CSS codebases are sometimes developed without any structure or naming conventions. This leads to an unmaintainable CSS codebase in the long term.
Ref:- (https://seesparkbox.com/foundry/bem_by_example)
# BEM (Block-Element-Modifier) is a naming convention standard for CSS class names.
# 1. Block: The outermost parent element of the component is defined as the block.
# 2. Element: Inside of the component may be one or more children called elements.
# 3. Modifier: Either a block or element may have a variation signified by a modifier.
If all three are used in a name it would look something like this:
[block]__[element]--[modifier]
