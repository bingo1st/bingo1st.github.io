$(function(){
	var _elYES = $("#yes");
	var _elNO = $("#no");
	var _rightAnswers = 0;
	var _questionStore = []; //选中的题集
	var _score = $(".cover p");
	var _animationMark;
	var _cover = $(".cover");
	var _sectionLength = "";
    var _questionLimitedNum = 5;

 	var config = [
        {
            "question": "王健林pia pia地走在通往成功的大路上，这条路道路应该是酱紫的：",
            "options": ["研究成功学 ", "轻松复制", "命中注定 ", "敢于创新"],
            "bg": '#799475', 
            "answer": 4,
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
                    "animation": "slideInLeft",
                    "duration": 1,
                    "delay": .5
                },
                {
                    "src":"1_2.png",
                    "left": "0",
                    "top": "0",
                    "animation": "flash",
                    "duration": .7,
                    "delay": 1.5
                }
            ]
        },
        {
            "question": "一只创业菜鸟来万达取经，王健林只是笑着摆出一个加油努力的手势，意思是创业者要：",
            "options": ["敢于创业  ", "等待时机", "使劲砸钱", "拼爹"],
            "bg":'#49675c', 
            "answer": 1,
            "elements": 
            [
                {
                    "src":"2_1.png",
                    "left": "0",
                    "top": "0",
                    "animation": "slideInLeft",
                    "duration": 1,
                    "delay": .8
                },
                {
                    "src":"2_2.png",
                    "left": "0",
                    "top": "0",
                    "animation": "slideInRight",
                    "duration": 1,
                    "delay": .8
                }
            ]
        },
        {
            "question": "王健林曾经为了一笔贷款跑了50多次，三年内打了222场官司，类似经历说明企业家精神的核心是：",
            "options": ["身体倍儿棒", "对自己狠", "坚持", "内心强大"],
            "bg": '#3c7985', 
            "answer": 3,
            "elements": 
            [
                {
                    "src":"3_1.png",
                    "left": "0",
                    "top": "0",
                    "animation": "slideInRight",
                    "duration": .5,
                    "delay": .5
                },
                {
                    "src":"3_2.png",
                    "left": "0",
                    "top": "0",
                    "animation": "flash",
                    "duration": 1,
                    "delay": 1.5
                }
            ]
        },
        {
            "question": "创业菜鸟问什么是企业家的创新精神，王健林竟然傲娇地跩出一句文言文：",
            "options": ["富贵险中求", "书中自有黄金屋", "窈窕淑女,君子好逑", "朝闻道夕死可矣"],
            "bg": '#54b4c1',
            "answer": 1,
            "elements": 
            [
                {
                    "src":"4_1.png",
                    "left": "0",
                    "top": "0",
                    "animation": "slideInLeft",
                    "duration": 1,
                    "delay": .5
                },
                {
                    "src":"4_2.png",
                    "left": "0",
                    "top": "0",
                    "animation": "slideInLeft",
                    "duration": 1,
                    "delay": 1
                }
            ]
        },
        {
            "question": "在讨论在模式创新的做法时，有一个提议当时就被王健林枪毙了：",
            "options": ["傍大款", "产业链", "标准化", "炒概念"],
            "bg": '#ffd591', 
            "answer": 4,
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
                    "animation": "zoomInDown",
                    "duration": 1,
                    "delay": .8
                },
                {
                    "src":"5_2.png",
                    "left": "0",
                    "top": "0",
                    "animation": "rubberBand",
                    "duration": .7,
                    "delay": 2
                }
            ]
        },
        {
            "question": "万达不动产规模已经全球第一，为啥非要转型发展“轻资产”模式？",
            "options": ["重资产没前途 ", " 快速扩大竞争优势", " 规避风险", "玩腻了"],
            "bg": '#77bc72', 
            "answer": 2,
            "elements": 
            [
                {
                    "src":"6_1.png",
                    "left": "0",
                    "top": "0",
                    "animation": "slideInLeft",
                    "duration": .7,
                    "delay": .5
                },
                {
                    "src":"6_2.png",
                    "left": "0",
                    "top": "0",
                    "animation": "flash",
                    "duration": .7,
                    "delay": 1.5
                }
            ]
        },
        {
            "question": "2014年第100座万达广场Duang~地开业了，万达广场兴旺的根本原因是？",
            "options": ["定位准确", "永不加赋", "购物狂出没", "高端消费"],
            "bg": '#956d5c', 
            "answer": 1,
            "elements": 
            [
                {
                    "src":"7_1.png",
                    "left": "0",
                    "top": "0",
                    "animation": "slideInUp",
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
            "question": "人人有颗八卦的心，扒一扒王健林的爱好，你觉得他可能不会喜欢：",
            "options": ["搞收藏", "跳广场舞", "唱歌 ", "钓鱼"],
            "bg": '#4d628a',  
            "answer": 2,
            "elements": 
            [
                {
                    "src":"8_1.png",
                    "left": "0",
                    "top": "0",
                    "animation": "shake",
                    "duration": .7,
                    "delay": .5
                },
                {
                    "src":"8_2.png",
                    "left": "0",
                    "top": "0",
                    "animation": "zoomInDown",
                    "duration": .7,
                    "delay": 1
                }
            ]
        },
        {
            "question": "万达吃掉了全球电影票房市场10%的份额，2020年将达到20%，胃口为啥这么好？",
            "options": ["签约著名导演和演员", "没有蛀牙", "炒绯闻", "现代企业制度"],
            "bg": '#d78152',  
            "answer": 4,
            "elements": 
            [
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
                    "animation": "flash",
                    "duration": .7,
                    "delay": 1.6
                }
            ]
        },
        {
            "question": "俗话说“相由心生”，慈眉善目的王健林做慈善靠的是什么？",
            "options": ["玩数字", "媒体炒", "面子大", "用真心"],
            "bg": '#5e996a',  
            "answer": 4,
            "elements": 
            [
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
            "question": " 创业菜鸟得到了梦寐以求的《万达管理秘笈》，但总学不会，因为企业管理的最高层次是：",
            "options": ["高额奖金", "股票期权", "等级森严", "文化管理"],
            "bg": '#a5b6a5', 
            "answer": 4,
            "elements": 
            [
                {
                    "src":"11_1.png",
                    "left": "0",
                    "top": "0",
                    "animation": "slideInUp",
                    "duration": .7,
                    "delay": .5
                },
                {
                    "src":"11_2.png",
                    "left": "0",
                    "top": "0",
                    "animation": "shake",
                    "duration": .7,
                    "delay": 1.3
                }
            ]
        },
        {
            "question": " 创业菜鸟去万达卧底，面试考官问万达最核心、最有效的竞争力是什么，应该回答：",
            "options": ["设计高bigger ", "时机把握", "有钱任性", "企业文化"],
            "bg": '#a5b6a5', 
            "answer": 4,
            "elements": 
            [
                {
                    "src":"12_1.png",
                    "left": "0",
                    "top": "0",
                    "animation": "slideInRight",
                    "duration": .7,
                    "delay": .5
                },
                {
                    "src":"12_2.png",
                    "left": "0",
                    "top": "0",
                    "animation": "flash",
                    "duration": .7,
                    "delay": 1.3
                }
            ]
        },
        {
            "question": "曾记否？王健林语重心长地对学习企业管理的年轻人说，最重要的就是学：",
            "options": ["刷朋友圈", "创富百招", "商德", "线性代数"],
            "bg": '#a5b6a5', 
            "answer": 3,
            "elements": 
            [
                {
                    "src":"13_1.png",
                    "left": "0",
                    "top": "0",
                    "animation": "slideInRight",
                    "duration": .7,
                    "delay": .5
                },
                {
                    "src":"13_2.png",
                    "left": "0",
                    "top": "0",
                    "animation": "flash",
                    "duration": .7,
                    "delay": 1.3
                }
            ]
        },
        {
            "question": "以“百年企业”为目标的万达追求的是做到最好，你认为最好的企业应该拥有：",
            "options": ["长期、稳定的现金流", "文艺青年", "存在感", "五险一金"],
            "bg": '#a5b6a5', 
            "answer": 1,
            "elements": 
            [
                {
                    "src":"14_0.png",
                    "left": "0",
                    "top": "0"
                },
                {
                    "src":"14_1.png",
                    "left": "0",
                    "top": "0",
                    "animation": "slideInRight",
                    "duration": .7,
                    "delay": .5
                },
                {
                    "src":"14_2.png",
                    "left": "0",
                    "top": "0",
                    "animation": "flash",
                    "duration": .7,
                    "delay": 1.3
                }
            ]
        },
        {
            "question": "万达广场说哪天开业就哪天开业，因为万达：",
            "options": ["执行力强", "骑虎难下", "任性", "算过黄道吉日"],
            "bg": '#a5b6a5', 
            "answer": 1,
            "elements": 
            [
                {
                    "src":"15_0.png",
                    "left": "0",
                    "top": "0"
                },
                {
                    "src":"15_1.png",
                    "left": "0",
                    "top": "0",
                    "animation": "slideInUp",
                    "duration": .7,
                    "delay": .5
                },
                {
                    "src":"15_2.png",
                    "left": "0",
                    "top": "0",
                    "animation": "flash",
                    "duration": .7,
                    "delay": 1.3
                }
            ]
        },
        {
            "question": "去年开始，万达已经开始实施历史上的第四次转型，以下哪个不是动因？",
            "options": ["符合国家战略", " 前三次跑偏了", " 行业趋势大变", "求变的企业文化"],
            "bg": '#a5b6a5', 
            "answer": 2,
            "elements": 
            [
                {
                    "src":"16_0.png",
                    "left": "0",
                    "top": "0"
                },
                {
                    "src":"16_1.png",
                    "left": "0",
                    "top": "0",
                    "animation": "slideInRight",
                    "duration": .7,
                    "delay": .5
                },
                {
                    "src":"16_2.png",
                    "left": "0",
                    "top": "0",
                    "animation": "flash",
                    "duration": .7,
                    "delay": 1.3
                }
            ]
        },
        {
            "question": "廊坊的“万达学院”人气很高，专门对新人做短期培训，成立万达学院的原因是：",
            "options": ["做行业“黄埔”", "招不到人才", "帮新人融入企业文化", "挑战蓝翔"],
            "bg": '#a5b6a5', 
            "answer": 3,
            "elements": 
            [
                {
                    "src":"17_1.png",
                    "left": "0",
                    "top": "0",
                    "animation": "flash",
                    "duration": .7,
                    "delay": .5
                },
                {
                    "src":"17_2.png",
                    "left": "0",
                    "top": "0",
                    "animation": "slideInLeft",
                    "duration": .7,
                    "delay": 1.3
                }
            ]
        },
        {
            "question": "万达喊出口号“国际万达，百年企业”，是什么促使万达走国际化路子？",
            "options": ["长远战略目标", "洋气", "就是介么自信", "一开始拒绝国内市场"],
            "bg": '#a5b6a5', 
            "answer": 1,
            "elements": 
            [
                {
                    "src":"18_1.png",
                    "left": "0",
                    "top": "0",
                    "animation": "slideInUp",
                    "duration": .7,
                    "delay": .5
                },
                {
                    "src":"18_2.png",
                    "left": "0",
                    "top": "0",
                    "animation": "flash",
                    "duration": .7,
                    "delay": 1.3
                }
            ]
        },
        {
            "question": "万达员工入职必须承诺参加义工，否则不会录用，这说明作为万达员工要有：",
            "options": ["公益情怀", "义气 ", "苦衷 ", "业余时间"],
            "bg": '#a5b6a5', 
            "answer": 1,
            "elements": 
            [
                {
                    "src":"19_1.png",
                    "left": "0",
                    "top": "0",
                    "animation": "slideInUp",
                    "duration": .7,
                    "delay": .5
                },
                {
                    "src":"19_2.png",
                    "left": "0",
                    "top": "0",
                    "animation": "flash",
                    "duration": .7,
                    "delay": 1.3
                }
            ]
        },
        {
            "question": "根据王健林的想法，最接近“轻资产”发展模式的阐述是？",
            "options": ["减持现金", "放贷收息", "商业投资服务", "投资轻工业"],
            "bg": '#a5b6a5', 
            "answer": 3,
            "elements": 
            [
                {
                    "src":"20_1.png",
                    "left": "0",
                    "top": "0",
                    "animation": "fadeInDown",
                    "duration": .7,
                    "delay": .5
                },
                {
                    "src":"20_2.png",
                    "left": "0",
                    "top": "0",
                    "animation": "slideInUp",
                    "duration": .7,
                    "delay": 1.3
                }
            ]
        }
    ];

    var answerConfig = [
        "哲学大湿， Bigger就是比普通人高二两！",
        "矮油还不错哦~文艺青年答到这份儿上也是一绝！",
        "骚年，竟然拥有K.O.早教机的恐怖实力，佩服！",
        "亲，你当初决定来地球发展是个美丽的错误！"
    ]

    
    $(document).ready(function() {
	    var _headPhone = $(".touchstyle-headphone");
        var _music = document.getElementById("music");
        var _touchIndicator = $(".cover i");

        _music.setAttribute("src", "images/pics/paopaotang.mp3");

        _cover.on("touchstart", function(){
        	if(_cover.hasClass("result")){return;}
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
        	_questionStore = randomArray(config, _questionLimitedNum);
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
            var _answerRate = _rightAnswers/_questionLimitedNum;
            var _scoreType = 3;
            $("title").text("我在玩万达哲商烧脑游戏，已击败全球" + (_rightAnswers*10) + "%的人，赶快来烧脑吧！");
            if(_answerRate > 0.4 && _answerRate <= 0.6){
                _scoreType = 2;
            }else if(_answerRate > 0.6 && _answerRate <= 0.8){
                _scoreType = 1;
            }else if(_answerRate > 0.8 && _answerRate <= 1){
                _scoreType = 0;
            }
            _score.html("你最终得分：<span style='font-size:18px'>" + 
                _rightAnswers*10 + "</span>分！<br/>" + answerConfig[_scoreType]);
            _cover.fadeIn().addClass("result").append('<img src="images/pics/followInstruction.png" style="position: absolute;bottom: 0;left: 0;width: 100%;">');
            
            return;
            if(_rightAnswers != _questionLimitedNum){
	            _score.html("你最终得分：<span style='font-size:18px'>" + 
	            _rightAnswers*10 + "</span>分！<br/>（轻触页面再玩一次！）");
	            _cover.fadeIn().addClass("result").addClass("result_" + _rightAnswers * 10);
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
                    _content += "<input type='radio' questionID='" + _i + "' id='options_" 
                                    + _i + "_" + _j +"' /><label questionID='" + _i + "' for='options_" 
                                    + _i + "_" + _j +"'>" + _options[_j] + "</label>"; 
                    _content += (_j == 1 ? "<br/>" : "");
                }); 
            }
            if(_item.elements){
                _elements = _item.elements;
                $.each(_elements, function(_j) {
                    _elements[_j].zIndex = (_elements[_j].zIndex ? _elements[_j].zIndex : (_j - 1));
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
                _pics += '<img class="question-bg animation-mark slideInUp" src="images/pics/bg_questions.png">'
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
        	_colorList[i] = "rgba(0,0,0,0)";//questions[i].bg;
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