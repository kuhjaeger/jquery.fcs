# jquery.fcs
jQuery plugin that move focus with ENTER Key, forward, backward, and grouping any HTML elements.
エンターキーでフォーカスを移動するjQueryプラグインです。前方、後方に移動でき、フォームエレメントをグループ化して移動させることもできます。

## Introduction
This jQuery plugin provide UI, that move focus HTML elements with ENTER KEY, not only TAB KEY.
このjQueryプラグインは、TABキーだけでなくエンターキーでフォームエレメントのフォーカス移動を行うユーザーインターフェイスを提供します。

## Requirement
jQuery

## How to use this plugin
1. include jQuery and this plugin at the header.
2. Add a className for elements you want to focus with ENTER KEY.
3. call a method "$(document).fcs('.className');"
4. if you add more than one className for elements, they will independently works of each other grouping by className. 

1.jQueryをhead等で読み込んでください。
2.エンターキーでフォーカスを移動したいフォームエレメントに同一のclassnameを付加してください。
3.$(document).fcs('.classname');のようにメソッドをコールしてください。
4.複数のclassnameを使用すると、そのclassname毎にグループ化されエンターキーでのフォーカスが移動します。


## How to move focus
press ENTER KEY, the focus move forward. and press ENTER KEY with Shift KEY, the focus move backward.
エンターキーを押すと前方に、SHIFTキーを押しながらエンターキーを押すと後方にフォーカスが移動します。

If the element is &lt;INPUT&gt;&lt;SELECT&gt; and unedited &lt;TEXTAREA&gt;, the focus is move forward or backward with ENTER KEY.
エレメントがINPUTタグ、SELECTタグ、編集されていないTEXTAREAの場合、エンターキーの動作は上記のとおりです。

If the element is edited &lt;TEXTAREA&gt;, the ENTER KEY provides break line. pless ENTER KEY with Ctrl or Alt KEY to move focus.
エレメントが編集されたTEXTAREAの場合、CTRLかALTキーとエンターキーを押すことで、フォーカスが前方に移動します。

## Demo
http://kuhjaeger.github.io/

## Notice
This plugin doesn't needs a name parameter for every elements from version 1.1.
バージョン1.1から、エレメントのname属性が必須で無くなりました。

## License
This software is released under the MIT License.

