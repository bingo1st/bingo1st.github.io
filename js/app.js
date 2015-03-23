$(function(){
	var _elYES = $("#yes");
	var _elNO = $("#no");
	var _rightAnswers = 0;
	var _questionStore = []; //选中的题集
	var _score = $(".cover p");
	var _animationMark;
	var _cover = $(".cover");
	var _sectionLength = "";

 	var config = [
        {
            "question": "楼梯陡、门口窄，太容易发生踩踏事故找谁？",
            "options": ["规划局", "社区居委会", "安监局"],
            "bg": '#799475', 
            "answer": 3,
            "elements": 
            [
                {
                    "src":"1_0.png",
                    "left": "0",
                    "top": "0"
                },
                {
                    "src":"1_1.png",
                    "left": "0",
                    "top": "0",
                    "animation": "rubberBand",
                    "duration": 1,
                    "delay": 1
                },
                {
                    "src":"1_2.png",
                    "left": "0",
                    "top": "0",
                    "animation": "wobble",
                    "duration": .7,
                    "delay": .5
                }
            ]
        },
        {
            "question": "圈地私建堵了胡同口，咋弄？",
            "options": ["规划局", "城管", "土行孙"],
            "bg":'#49675c', 
            "answer": 2,
            "elements": 
            [
                {
                    "src":"2_0.png",
                    "left": "0",
                    "top": "0"
                },
                {
                    "src":"2_1.png",
                    "left": "0",
                    "top": "0",
                    "animation": "rubberBand",
                    "duration": 1,
                    "delay": .8
                }
            ]
        },
        {
            "question": "隔壁的仓库乱扯电线，有火灾隐患！",
            "options": ["蝙蝠侠", "安监局", "119"],
            "bg": '#3c7985', 
            "answer": 3,
            "elements": 
            [
                {
                    "src":"3_0.png",
                    "left": "0",
                    "top": "0"
                },
                {
                    "src":"3_1.png",
                    "left": "0",
                    "top": "0",
                    "animation": "flash",
                    "duration": 1,
                    "delay": .9
                }
            ]
        },
/*        {
            "question": "邻居的破猫成宿叫春，闹挺！",
            "options": ["社区", "人口计生委", "黑猫警长"],
            "bg": '#54b4c1',
            "elements": 
            [
                {
                    "src":"4_0.png",
                    "left": "0",
                    "top": "0"
                },
                {
                    "src":"4_1.png",
                    "left": "0",
                    "top": "0",
                    "animation": "flash",
                    "duration": 1,
                    "delay": .8
                },
                {
                    "src":"4_2.png",
                    "left": "0",
                    "top": "0",
                    "animation": "rubberBand",
                    "duration": .7,
                    "delay": 1.1
                }
            ]
        },*/
        {
            "question": "井盖不翼而飞，谁管？",
            "options": ["忍者神龟", "产权单位", "城管"],
            "bg": '#ffd591', 
            "answer": 2,
            "elements": 
            [
                {
                    "src":"5_0.png",
                    "left": "0",
                    "top": "0"
                },
                {
                    "src":"5_1.png",
                    "left": "0",
                    "top": "0",
                    "animation": "flash",
                    "duration": 1,
                    "delay": .8
                },
                {
                    "src":"5_2.png",
                    "left": "0",
                    "top": "0",
                    "animation": "rubberBand",
                    "duration": .7,
                    "delay": 1.5
                }
            ]
        },
        {
            "question": "没有暖气，也要倔强地活到春天！",
            "options": ["质监局", "供暖办", "民政局"],
            "bg": '#77bc72', 
            "answer": 2,
            "elements": 
            [
                {
                    "src":"6_0.png",
                    "left": "0",
                    "top": "0"
                },
                {
                    "src":"6_1.png",
                    "left": "0",
                    "top": "0",
                    "animation": "shake",
                    "duration": .7,
                    "delay": .5
                },
                {
                    "src":"6_2.png",
                    "left": "0",
                    "top": "0",
                    "animation": "fadeIn",
                    "duration": .7,
                    "delay": 1.5
                }
            ]
        },
        {
            "question": "乱砍乱罚谁来管？",
            "options": ["光头强", "环保局", "园林绿化局"],
            "bg": '#956d5c', 
            "answer": 3,
            "elements": 
            [
                {
                    "src":"7_0.png",
                    "left": "0",
                    "top": "0"
                },
                {
                    "src":"7_1.png",
                    "left": "0",
                    "top": "0",
                    "animation": "rubberBand",
                    "duration": .7,
                    "delay": .5
                },
                {
                    "src":"7_2.png",
                    "left": "0",
                    "top": "0",
                    "animation": "tada",
                    "duration": .7,
                    "delay": 1.8
                }
            ]
        },
        {
            "question": "到药店买到假药啦！",
            "options": ["消费者协会", "工商局", "食药监局"],
            "bg": '#4d628a',  
            "answer": 3,
            "elements": 
            [
                {
                    "src":"8_0.png",
                    "left": "0",
                    "top": "0"
                },
                {
                    "src":"8_1.png",
                    "left": "0",
                    "top": "0",
                    "animation": "slideInLeft",
                    "duration": .7,
                    "delay": .5
                },
                {
                    "src":"8_2.png",
                    "left": "0",
                    "top": "0",
                    "animation": "flash",
                    "duration": .7,
                    "delay": 1.5
                }
            ]
        },
        {
            "question": "老婆我错了，别动刀，救命啊！",
            "options": ["社区居委会", "110", "隔壁大婶"],
            "bg": '#d78152',  
            "answer": 1,
            "elements": 
            [
                {
                    "src":"9_0.png",
                    "left": "0",
                    "top": "0"
                },
                {
                    "src":"9_1.png",
                    "left": "0",
                    "top": "0",
                    "animation": "slideInRight",
                    "duration": .7,
                    "delay": .5
                },
                {
                    "src":"9_2.png",
                    "left": "0",
                    "top": "0",
                    "animation": "shake",
                    "duration": .7,
                    "delay": 1.6
                }
            ]
        },
        {
            "question": "养老保险查询应该问谁？",
            "options": ["社保中心", "邻居王大妈", "民政局"],
            "bg": '#5e996a',  
            "answer": 1,
            "elements": 
            [
                {
                    "src":"10_0.png",
                    "left": "0",
                    "top": "0"
                },
                {
                    "src":"10_1.png",
                    "left": "0",
                    "top": "0",
                    "animation": "rubberBand",
                    "duration": .7,
                    "delay": .5
                },
                {
                    "src":"10_2.png",
                    "left": "0",
                    "top": "0",
                    "animation": "zoomInDown",
                    "duration": .7,
                    "delay": 1.2
                }
            ]
        },
        {
            "question": "路边乱停车谁管？",
            "options": ["110", "车管所", "交通支队"],
            "bg": '#a5b6a5', 
            "answer": 3,
            "elements": 
            [
                {
                    "src":"11_0.png",
                    "left": "0",
                    "top": "0"
                },
                {
                    "src":"11_1.png",
                    "left": "0",
                    "top": "0",
                    "animation": "slideInRight",
                    "duration": .7,
                    "delay": .5
                },
                {
                    "src":"11_2.png",
                    "left": "0",
                    "top": "0",
                    "animation": "flash",
                    "duration": .7,
                    "delay": 1.3
                }
            ]
        }
    ];

    
    $(document).ready(function() {
	    var _headPhone = $(".touchstyle-headphone");
        var _music = document.getElementById("music");
        var _touchIndicator = $(".cover i");

        _music.setAttribute("src", "images/pics/paopaotang.mp3");

        _cover.on("touchstart", function(){
        	if(_cover.hasClass("result_positive")){return;}
            _cover.hide();
            _headPhone.addClass("play");
        	_music.play();
        	_touchIndicator.remove();
        	$(".animation-mark").removeClass("animated");
            setTimeout(function(){
	        	$(".section1 .animation-mark").addClass("animated");
	        }, 10);
        });

        setTimeout(function(){
        	_questionStore = randomArray(config, 5);
            initPages(_questionStore);
        }, 500);

		setTimeout(function(){
        	_touchIndicator.show();
        }, 3000);

        _headPhone.click(function(){
            _headPhone.hasClass("play")? _music.pause() : _music.play();
            _headPhone.toggleClass("play");
        });
    });

    function randomArray(array, amount){
    	var result = [];
    	for (var i = amount - 1; i >= 0; i--) {
		    //从原数组中随机取一个元素出来
		    var index = Math.floor(Math.random() * array.length);
		    //压入结果数组
		    result.push(array[index]);
		    //将该元素从原数组中删除
		    array.splice(index, 1);
		};
		return result;
    }

    function nextQuestion(_index){
    	checkAnswer(_index);
        setTimeout(function(){
            $.fn.fullpage.moveSectionDown();
        }, 500);
    }
	
	function checkAnswer(_index){
		var answerIndex = _questionStore[_index].answer;
		if($("#options_" + _index + "_" + (answerIndex-1)).prop("checked")){
			_elYES.addClass("animated");
			_rightAnswers ++;
		}else{
			_elNO.addClass("animated");
		}

		if(_index >= _sectionLength - 1){
            if(_rightAnswers != 5){
	            _score.html("你最终得分：<span style='font-size:18px'>" + 
	            _rightAnswers*20 + "</span>分！<br/>（轻触页面再玩一次！）");
	            _cover.fadeIn().addClass("result")
	            _cover.on("touchstart", function(){window.location.reload();});
	        }else{
	            var _resultNo = new Date().getTime();
	            _score.html("抽奖编号:" + _resultNo + 
	                "<br/><span>请截图发至'北京东城'微信公众号</span>");
	            _cover.fadeIn().addClass("result_positive");
	        }
        }
	}

    function initPages(questions){
        var _html     = "";
        var _content  = "";
        var _i        = 0;
        var _item     = null;
        var _options  = null;
        var _elements = null;
        var _pics     = "";
        var _container = $('#fullpage');

        while(questions[_i]){
            _item = questions[_i];
            _pics = "";
            _content = "";

            if(_item.question && _item.options){
                _options = _item.options;
                _content = "<div class='question-title'>" + _item.question + "</div>";
                $.each(_options, function(_j) {     
                     _content += "<input type='radio' questionID='" + _i + "' id='options_" + _i + "_" + _j +"' /><label questionID='" + _i + "' for='options_" + _i + "_" + _j +"'>" + _options[_j] + "</label>"; 
                }); 
            }
            if(_item.elements){
                _elements = _item.elements;
                $.each(_elements, function(_j) {
                    _elements[_j].zIndex = (_elements[_j].zIndex ? _elements[_j].zIndex : 0);
                    _elements[_j].width = (_elements[_j].width ? _elements[_j].width : "100%");
                    _elements[_j].top = (_elements[_j].top ? _elements[_j].top : "auto");
                    _elements[_j].left = (_elements[_j].left ? _elements[_j].left : "auto");
                    _elements[_j].right = (_elements[_j].right ? _elements[_j].right : "auto");
                    _elements[_j].bottom = (_elements[_j].bottom ? _elements[_j].bottom : "auto");
                    _elements[_j].delay = (_elements[_j].delay ? _elements[_j].delay : "0");
                    _elements[_j].opacity = (_elements[_j].delay*1 ? "0" : "1");


                    _pics += "<img style='animation-duration: " + _elements[_j].duration + 
                            "s;-webkit-animation-duration:" + _elements[_j].duration +
                            "s;animation-delay:" + _elements[_j].delay +
                            "s;-webkit-animation-delay:" + _elements[_j].delay + 
                            "s;top:"  + _elements[_j].top + 
                            ";opacity:" + _elements[_j].opacity + 
                            ";left:" + _elements[_j].left + 
                            ";right:" + _elements[_j].right + 
                            ";bottom:" + _elements[_j].bottom + 
                            ";z-index:" + _elements[_j].zIndex + 
                            ";width:" + _elements[_j].width + 
                            ";' src='images/pics/" + _elements[_j].src + 
                            "' class='animation-mark " + _elements[_j].animation + "'/>";
                });
                _pics += '<img class="question-bg animation-mark slideInUp" src="images/pics/bg_questions_' + (_i + 1) + '.png">'
            }

            _html += "<div class='section section" + (_i + 1) + "'><div class='question animation-mark slideInUp'>"+
                        _content + '</div>' +
                        _pics +
                     "</div>";
            _i++;
        }

        _container.html(_html);

        var _colorList = [];
        for(var i = 0; i < questions.length; i++){
        	_colorList[i] = questions[i].bg;
        }

        _container.fullpage({
            navigation: false,
            /*navigationPosition: 'right',*/
            css3: true,
            scrollingSpeed: 300,
            /*easingcss3: "cubic-bezier(0.175, 0.885, 0.420, 1.310)",*/
            /*scrollOverflow: true,*/
            /*touchSensitivity: 2,*/
            /*controlArrows: true,*/
            aotoScrolling: false,
            verticalCentered: true,
            /*resize : true,*/
            sectionsColor : _colorList,
            /*normalScrollElementTouchThreshold: 5,*/
            afterRender: function(){
                setTimeout(function(){$('#fullpage,#fp-nav').fadeIn();},100);
                $(".section1 .animation-mark").addClass("animated");
                $(".question input").click(function(){
                	var _index = $(this).attr("questionID");
                	nextQuestion(_index);
                });
                _animationMark = $(".animation-mark");
                _sectionLength = $(".section").length;
            },
            afterLoad: function(anchorLink, index){
                $(".section" + index + " .animation-mark").addClass("animated");
            },
            onLeave: function(index, nextIndex, direction){
                _animationMark.removeClass("animated");
            }
        });

        $.fn.fullpage.setAllowScrolling(false);
    }
 });