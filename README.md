# jquery.fcs
jQuery plugin that move focus with ENTER Key, forward, backward, and grouping any HTML elements.

## Introduction
This jQuery plugin provide UI, that move focus HTML elements with ENTER KEY, not only TAB KEY.

## Requirement
jQuery

## How to use this plugin
1. include this jQuery and this plugin at the header.
2. Add a className for elements you want to focus with ENTER KEY.
3. call method "$(document).fcs('.className')";
4. if you add more than one className for elements, they will independently works of each other grouping by className. 

## How to move focus
press ENTER KEY, the focus move forward. and press Shift KEY with ENTER KEY, the focus move backward.

If the element is <INPUT>, the focus is move forward or backward with ENTER KEY.

If the element is <TEXTAREA>, the ENTER KEY is provide break line. pless Ctrl or Alt KEY with ENTER KEY to move focus.

## Notice
This plugin needs a correct "unique name parameter" for all elements that you want to focus with ENTER KEY. Because Radio buttons and checkboxes have to use same name property for same group, this plugin judges next element to move focus by looks the name propery of elements and element type.
