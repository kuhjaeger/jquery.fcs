/* *
 * 
 * jQuery.fcs.js v1.1
 * 
 * MIT License.
 * (c) 2005, 2014 jQuery Foundation, Inc.
 * 
 * */

(function ($)
{
	$.fn.fcs = function (selector) {
		try{
			var self = $(this);
			$(selector).each(function() {
				individual(this, $(this), selector);
			});
			return this;
		} catch(e){
			console.log(e.message);
			return false;
		}

		function individual(thisElem, thisSelf, thisSelector)
		{
			var elem = thisElem;    // DOM Object input
			var self = thisSelf;    // jQuery Object
			var selector = thisSelector;
			this.prevString = "";
	
			$.fn.getSelector = function () {
				return selector;
			};

			$.fn.setPreviousText = function (val) {
				this.prevString = val;
			};

			self.focus(function (e) {
				this.prevString = self.val();
			});
			
			// IE対応
			self.keydown(function(e)
			{
				if (e.keyCode == 13 && (e.ctrlKey || e.altKey)) {
					moveFocus(e);
					return false;
				}
			});

			self.keypress(function (e)
			{
				if (e.keyCode === 13) {
					if (this.tagName.toUpperCase() === "TEXTAREA") {
						// コンビネーションキーまたは編集されていないTEXTAREAではフォーカス移動
						if (e.shiftKey || e.ctrlKey || e.altKey || this.prevString === self.val()) {
							moveFocus(e);
							return false;
						}
					} else {
						moveFocus(e);
						return false;
					}
				}
			});

			function moveFocus(e) {
				if (e.shiftKey) {
					focusPrevious();
				} else {
					focusNext();
				}
			}

			function focusNext()
			{
				var fcs = $(selector + ":visible");
				var next = elem;
				var type = elem.type;
				var fineded = false;

				for (var i = 0; i < fcs.length; i++) {

					if (fcs[i] === elem) {
						fineded = true;
					}
					if (!fineded) {
						continue;
					}

					if (i === fcs.length - 1)
					{
						next = fcs[0];
					} else {
						next = fcs[i + 1];
					}

					if (fcs[i] !== elem)
					{
						if (i === fcs.length) {
							next = fcs[0];
						} else {
							for (var j = i; j < fcs.length; j++)
							{
								next = fcs[j];
								if (fcs[j] !== elem) {
									break;
								}
							}
						}
						break;
					}
				}
				focus(next);
			}

			function focusPrevious()
			{
				var fcs = $(selector + ":visible");
				var next = elem;
				var type = elem.type;
				var fineded = false;

				for (var i = 0; i < fcs.length; i++)
				{
					if (fcs[i] === elem) {
						fineded = true;
					}
					if (!fineded) {
						continue;
					}
					if (i === 0)
					{
						next = fcs[fcs.length - 1];
					} else {
						next = fcs[i - 1];
					}

					if (fcs[i] === elem) {
						if (i === 0) {
							next = fcs[fcs.length - 1];
						} else {
							for (var j = i; j >= 0; j--)
							{
								next = fcs[j];
								if (fcs[j] !== elem) {
									break;
								}
							}
						}
						break;
					}
				}
				focus(next);
			}

			function focus(next)
			{
				next.focus();
				
				// TEXTAREAの編集チェック用変数
				edited = false;

				// 文字入力がある要素は、文字列の最後にカーソルを立てる
				if (typeof next.select === "function") {
					var text = next.value;
					next.value = '';
					next.value = text;
					this.prevString = self.val();
				}
			}
		}
	};
})(jQuery);
