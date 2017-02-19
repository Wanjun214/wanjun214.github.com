document.addEventListener("DOMContentLoaded", function() {
	(function() {
	    var oBox = document.querySelector("#boom-box");
	    var oBox2 = document.querySelector("#boom-box2");
	    var oBtn1 = oBox2.children[0];
	    var oBtn2 = oBox2.children[1];
	    var oBtn3 = oBox2.children[2];
	    var oBtn4 = oBox2.children[3];
	    var oBtn5 = oBox2.children[4];
	    var aS = oBox.getElementsByTagName("span");
	    var R = 4;
	    var C = 7;
	    var bOk = true;
	    var arr = ["b1.jpg", "b2.jpg", "b3.jpg"];
	    var iNow = 0;

	    function createBoom(iNow) {
	        for (var i = 0; i < R; i++) {
	            for (var j = 0; j < C; j++) {
	                var oS = document.createElement("span");
	                oS.style.width = oBox.offsetWidth / C + "px";
	                oS.style.height = oBox.offsetHeight / R + "px";
	                oBox.appendChild(oS);
	                oS.style.left = j * oBox.offsetWidth / C + "px";
	                oS.style.top = i * oBox.offsetHeight / R + "px";
	                oS.style.background = "url(img/" + arr[iNow] + ") -" + oS.offsetLeft + "px -" + oS.offsetTop + "px";
	                oS.style.WebkitTransform = "perspective(800px) rotateX(0) rotateY(0) translateX(0) translateY(0)";
	                oS.style.MozTransform = "perspective(800px) rotateX(0) rotateY(0) translateX(0) translateY(0)";
	                oS.style.msTransform = "perspective(800px) rotateX(0) rotateY(0) translateX(0) translateY(0)";
	                oS.style.transform = "perspective(800px) rotateX(0) rotateY(0) translateX(0) translateY(0)";
	                oS.R = i;
	                oS.C = j
	            }
	        }
	    }
	    oBtn1.onclick = function() {
	        if (bOk) {
	            bOk = false;
	            createBoom(iNow % arr.length);
	            oBox.style.background = "url(img/" + arr[(iNow + 1) % arr.length] + ")";
	            var divX = oBox.offsetWidth / 2;
	            var divY = oBox.offsetHeight / 2;
	            for (var i = 0; i < aS.length; i++) {
	                var sX = aS[i].offsetLeft + aS[i].offsetWidth / 2;
	                var sY = aS[i].offsetTop + aS[i].offsetHeight / 2;
	                var disX = (sX - divX) * 2 * Math.random();
	                var disY = (sY - divY) * 2 * Math.random();
	                aS[i].style.WebkitTransition = "0.5s all ease";
	                aS[i].style.MozTransition = "0.5s all ease";
	                aS[i].style.msTransition = "0.5s all ease";
	                aS[i].style.transition = "0.5s all ease";
	                aS[i].style.WebkitTransform = "perspective(800px) translateX(" + disX + "px) translateY(" + disY + "px) rotateX(" + (Math.random() * 360 + 180) + "deg) rotateY(" + (Math.random() * 360 + 180) + "deg) scale(" + (Math.random() * 2) + "," + (Math.random() * 2) + ")";
	                aS[i].style.MozTransform = "perspective(800px) translateX(" + disX + "px) translateY(" + disY + "px) rotateX(" + (Math.random() * 360 + 180) + "deg) rotateY(" + (Math.random() * 360 + 180) + "deg) scale(" + (Math.random() * 2) + "," + (Math.random() * 2) + ")";
	                aS[i].style.msTransform = "perspective(800px) translateX(" + disX + "px) translateY(" + disY + "px) rotateX(" + (Math.random() * 360 + 180) + "deg) rotateY(" + (Math.random() * 360 + 180) + "deg) scale(" + (Math.random() * 2) + "," + (Math.random() * 2) + ")";
	                aS[i].style.transform = "perspective(800px) translateX(" + disX + "px) translateY(" + disY + "px) rotateX(" + (Math.random() * 360 + 180) + "deg) rotateY(" + (Math.random() * 360 + 180) + "deg) scale(" + (Math.random() * 2) + "," + (Math.random() * 2) + ")";
	                aS[i].style.opacity = 0
	            }
	            setTimeout(function() {
	                oBox.innerHTML = "";
	                iNow++;
	                bOk = true
	            }, 500)
	        }
	    };
	    oBtn2.onclick = function() {
	        if (bOk) {
	            bOk = false;
	            createFilp(iNow % arr.length);
	            oBox.style.background = "none";
	            for (var i = 0; i < aS.length; i++) {
	                (function(index) {
	                    setTimeout(function() {
	                        aS[index].style.WebkitTransition = "0.5s all ease";
	                        aS[index].style.MozTransition = "0.5s all ease";
	                        aS[index].style.msTransition = "0.5s all ease";
	                        aS[index].style.transition = "0.5s all ease";
	                        aS[index].style.WebkitTransform = "perspective(800px) rotateY(180deg)"
	                        aS[index].style.MozTransform = "perspective(800px) rotateY(180deg)"
	                        aS[index].style.msTransform = "perspective(800px) rotateY(180deg)"
	                        aS[index].style.transform = "perspective(800px) rotateY(180deg)"
	                    }, (aS[i].C + aS[i].R) * 100)
	                })(i)
	            }
	            setTimeout(function() {
	                oBox.style.background = "url(img/" + arr[(iNow + 1) % arr.length] + ")";
	                oBox.innerHTML = "";
	                iNow++;
	                bOk = true
	            }, (aS[aS.length - 1].C + aS[aS.length - 1].R) * 100 + 500)
	        }
	    };

	    function createFilp(iNow) {
	        for (var i = 0; i < R; i++) {
	            for (var j = 0; j < C; j++) {
	                var oS = document.createElement("span");
	                oS.style.width = oBox.offsetWidth / C + "px";
	                oS.style.height = oBox.offsetHeight / R + "px";
	                oBox.appendChild(oS);
	                oS.style.left = j * oBox.offsetWidth / C + "px";
	                oS.style.top = i * oBox.offsetHeight / R + "px";
	                oS.style.background = "url(img/" + arr[iNow] + ") -" + oS.offsetLeft + "px -" + oS.offsetTop + "px";
	                oS.style.WebkitTransform = "perspective(800px) rotateY(0)";
	                oS.style.MozTransform = "perspective(800px) rotateY(0)";
	                oS.style.msTransform = "perspective(800px) rotateY(0)";
	                oS.style.transform = "perspective(800px) rotateY(0)";
	                oS.R = i;
	                oS.C = j;
	                var oBack = document.createElement("em");
	                oS.appendChild(oBack);
	                oBack.style.WebkitTransform = "translateZ(-1px) scale(-1,1)";
	                oBack.style.MozTransform = "translateZ(-1px) scale(-1,1)";
	                oBack.style.msTransform = "translateZ(-1px) scale(-1,1)";
	                oBack.style.transform = "translateZ(-1px) scale(-1,1)";
	                oBack.style.background = "url(img/" + arr[(iNow + 1) % arr.length] + ") -" + oS.offsetLeft + "px -" + oS.offsetTop + "px";
	                var oFront = document.createElement("em");
	                oS.appendChild(oFront);
	                oFront.style.WebkitTransform = "translateZ(1px)";
	                oFront.style.MozTransform = "translateZ(1px)";
	                oFront.style.msTransform = "translateZ(1px)";
	                oFront.style.transform = "translateZ(1px)";
	                oFront.style.background = "url(img/" + arr[iNow] + ") -" + oS.offsetLeft + "px -" + oS.offsetTop + "px"
	            }
	        }
	    }
	    oBtn3.onclick = function() {
	        if (bOk) {
	            bOk = false;
	            createTurn(iNow % arr.length);
	            var oPage = oBox.children[0];
	            oPage.style.WebkitTransform = "perspective(800px) rotateY(-180deg)";
	            oPage.style.MozTransform = "perspective(800px) rotateY(-180deg)";
	            oPage.style.msTransform = "perspective(800px) rotateY(-180deg)";
	            oPage.style.transform = "perspective(800px) rotateY(-180deg)";
	            var oShadow = oBox.children[1];
	            oShadow.style.opacity = "0";
	            setTimeout(function() {
	                oBox.style.background = "url(img/" + arr[(iNow + 1) % arr.length] + ")";
	                oBox.innerHTML = "";
	                iNow++;
	                bOk = true
	            }, 1000)
	        }
	    };

	    function createTurn(iNow) {
	        var oPage = document.createElement("div");
	        oPage.className = "page-boom";
	        var oShadow = document.createElement("div");
	        oShadow.className = "shadow";
	        var oBottom = document.createElement("div");
	        oBottom.className = "bottom";
	        var oFront = document.createElement("span");
	        oFront.style.WebkitTransform = "translateZ(1px)";
	        oFront.style.MozTransform = "translateZ(1px)";
	        oFront.style.msTransform = "translateZ(1px)";
	        oFront.style.transform = "translateZ(1px)";
	        oPage.appendChild(oFront);
	        oFront.style.background = "url(img/" + arr[iNow] + ") -" + oBox.offsetWidth / 2 + "px 0";
	        var oBack = document.createElement("span");
	        oBack.style.WebkitTransform = "translateZ(-1px) scale(-1,1)";
	        oBack.style.MozTransform = "translateZ(-1px) scale(-1,1)";
	        oBack.style.msTransform = "translateZ(-1px) scale(-1,1)";
	        oBack.style.transform = "translateZ(-1px) scale(-1,1)";
	        oPage.appendChild(oBack);
	        oBack.style.background = "url(img/" + arr[(iNow + 1) % arr.length] + ")";
	        oBox.appendChild(oPage);
	        var oShadow = document.createElement("div");
	        oBox.appendChild(oShadow);
	        oShadow.className = "shadow";
	        var oBottom = document.createElement("div");
	        oBottom.style.background = "url(img/" + arr[(iNow + 1) % arr.length] + ") -" + oBox.offsetWidth / 2 + "px 0";
	        oBox.appendChild(oBottom)
	    }
	    oBtn4.onclick = function() {
	        if (bOk) {
	            bOk = false;
	            var oCube = createCube(iNow % arr.length);
	            oBox.style.background = "none";
	            setTimeout(function() {
	                oCube.style.WebkitTransform = "perspective(800px) translateZ(-350px) rotateY(-90deg)";
	                oCube.style.MozTransform = "perspective(800px) translateZ(-350px) rotateY(-90deg)";
	                oCube.style.msTransform = "perspective(800px) translateZ(-350px) rotateY(-90deg)";
	                oCube.style.transform = "perspective(800px) translateZ(-350px) rotateY(-90deg)"
	            }, 10);
	            setTimeout(function() {
	                oBox.style.background = "url(img/" + arr[(iNow + 1) % arr.length] + ")";
	                oBox.innerHTML = "";
	                iNow++;
	                bOk = true
	            }, 1000)
	        }
	    };

	    function createCube(iNow) {
	        var oCube = document.createElement("div");
	        oCube.className = "cubeBox";
	        oBox.appendChild(oCube);
	        var oLeft = document.createElement("div");
	        oLeft.className = "left";
	        oCube.appendChild(oLeft);
	        var oRight = document.createElement("div");
	        oRight.className = "right";
	        oCube.appendChild(oRight);
	        oLeft.style.background = "url(img/" + arr[iNow] + ")";
	        oRight.style.background = "url(img/" + arr[(iNow + 1) % arr.length] + ")";
	        oLeft.style.WebkitTransform = "translateZ(350px)";
	        oLeft.style.MozTransform = "translateZ(350px)";
	        oLeft.style.msTransform = "translateZ(350px)";
	        oLeft.style.transform = "translateZ(350px)";
	        oRight.style.WebkitTransform = "translateX(350px) rotateY(90deg)";
	        oRight.style.MozTransform = "translateX(350px) rotateY(90deg)";
	        oRight.style.msTransform = "translateX(350px) rotateY(90deg)";
	        oRight.style.transform = "translateX(350px) rotateY(90deg)";
	        return oCube
	    }
	    oBtn5.onclick = function() {
	        if (bOk) {
	            bOk = false;
	            createBar(iNow);
	            oBox.style.background = "none";
	            setTimeout(function() {
	                var aBar = oBox.children;
	                for (var i = 0; i < aBar.length; i++) {
	                    aBar[i].style.WebkitTransition = "0.5s all ease";
	                    aBar[i].style.MozTransition = "0.5s all ease";
	                    aBar[i].style.msTransition = "0.5s all ease";
	                    aBar[i].style.transition = "0.5s all ease";
	                    (function(index) {
	                        setTimeout(function() {
	                            if (index >= Math.floor(C / 2)) {
	                                aBar[index].style.zIndex = (10 - index)
	                            }
	                            aBar[index].style.WebkitTransformOrigin = (350 - (index * 100 + 50)) + "px center";
	                            aBar[index].style.MozTransformOrigin = (350 - (index * 100 + 50)) + "px center";
	                            aBar[index].style.msTransformOrigin = (350 - (index * 100 + 50)) + "px center";
	                            aBar[index].style.transformOrigin = (350 - (index * 100 + 50)) + "px center";
	                            aBar[index].style.WebkitTransform = "perspective(800px) translateZ(-200px) rotateX(-90deg)"
	                            aBar[index].style.MozTransform = "perspective(800px) translateZ(-200px) rotateX(-90deg)"
	                            aBar[index].style.msTransform = "perspective(800px) translateZ(-200px) rotateX(-90deg)"
	                            aBar[index].style.transform = "perspective(800px) translateZ(-200px) rotateX(-90deg)"
	                        }, 100 * index)
	                    })(i)
	                }
	                setTimeout(function() {
	                    oBox.style.background = "url(img/" + arr[(iNow + 1) % arr.length] + ")";
	                    oBox.innerHTML = "";
	                    oBox.style.WebkitTransformStyle = "flat";
	                    oBox.style.MozTransformStyle = "flat";
	                    oBox.style.msTransformStyle = "flat";
	                    oBox.style.transformStyle = "flat";
	                    iNow++;
	                    bOk = true
	                }, 1000)
	            }, 100)
	        }
	    };

	    function createBar(iNow) {
	        for (var i = 0; i < C; i++) {
	            var oBar = document.createElement("div");
	            oBar.className = "sCube";
	            oBar.innerHTML = '<span class="first"></span><span class="second"></span><span class="bLeft"></span><span class="bRight"></span>';
	            oBar.style.position = "absolute";
	            oBar.style.WebkitTransformStyle = "preserve-3d";
	            oBar.style.MozTransformStyle = "preserve-3d";
	            oBar.style.msTransformStyle = "preserve-3d";
	            oBar.style.transformStyle = "preserve-3d";
	            oBar.style.WebkitTransform = "perspective(800px) translateZ(-200px) rotateX(0)";
	            oBar.style.MozTransform = "perspective(800px) translateZ(-200px) rotateX(0)";
	            oBar.style.ksTransform = "perspective(800px) translateZ(-200px) rotateX(0)";
	            oBar.style.transform = "perspective(800px) translateZ(-200px) rotateX(0)";
	            oBar.style.width = oBox.offsetWidth / C + "px";
	            oBar.style.left = oBox.offsetWidth / C * i + "px";
	            oBar.style.top = 0;
	            oBar.style.height = "100%";
	            var oFirst = oBar.children[0];
	            oFirst.style.background = "url(img/" + arr[iNow % arr.length] + ") -" + oBox.offsetWidth / C * i + "px";
	            var oSecond = oBar.children[1];
	            oSecond.style.background = "url(img/" + arr[(iNow + 1) % arr.length] + ") -" + oBox.offsetWidth / C * i + "px";
	            var oLeft = oBar.children[2];
	            oLeft.style.width = "400px";
	            oLeft.style.height = "400px";
	            oLeft.style.left = "50%";
	            oLeft.style.marginLeft = "-200px";
	            oLeft.style.WebkitTransform = "translateX(-50px) rotateY(-90deg)";
	            oLeft.style.MozTransform = "translateX(-50px) rotateY(-90deg)";
	            oLeft.style.mstTransform = "translateX(-50px) rotateY(-90deg)";
	            oLeft.style.transform = "translateX(-50px) rotateY(-90deg)";
	            var oRight = oBar.children[3];
	            oRight.style.width = "400px";
	            oRight.style.height = "400px";
	            oRight.style.left = "50%";
	            oRight.style.marginLeft = "-200px";
	            oRight.style.WebkitTransform = "translateX(50px) rotateY(-90deg)";
	            oRight.style.MozTransform = "translateX(50px) rotateY(-90deg)";
	            oRight.style.msTransform = "translateX(50px) rotateY(-90deg)";
	            oRight.style.transform = "translateX(50px) rotateY(-90deg)";
	            oLeft.style.background = "#ccc";
	            oRight.style.background = "#ccc";
	            oBox.appendChild(oBar)
	        }
	    }
	})();
	(function() {
	    var oBox3d = document.getElementById("box3d");
	    var oBox = oBox3d.children[0];
	    var timer = null;
	    var x = 0;
	    var y = 0;
	    var bLeft = false;
	    var bRight = false;
	    var bTop = false;
	    var bBottom = false;
	    timer = setInterval(function() {
	        if (bRight) {
	            x += 15;
	            oBox.style.WebkitTransform = "perspective(800px) rotateX(" + -y / 5 + "deg) rotateY(" + x / 5 + "deg)";
	            oBox.style.MozTransform = "perspective(800px) rotateX(" + -y / 5 + "deg) rotateY(" + x / 5 + "deg)";
	            oBox.style.msTransform = "perspective(800px) rotateX(" + -y / 5 + "deg) rotateY(" + x / 5 + "deg)";
	            oBox.style.transform = "perspective(800px) rotateX(" + -y / 5 + "deg) rotateY(" + x / 5 + "deg)"
	        }
	        if (bLeft) {
	            x -= 15;
	            oBox.style.WebkitTransform = "perspective(800px) rotateX(" + -y / 5 + "deg) rotateY(" + x / 5 + "deg)";
	            oBox.style.MozTransform = "perspective(800px) rotateX(" + -y / 5 + "deg) rotateY(" + x / 5 + "deg)";
	            oBox.style.msTransform = "perspective(800px) rotateX(" + -y / 5 + "deg) rotateY(" + x / 5 + "deg)";
	            oBox.style.transform = "perspective(800px) rotateX(" + -y / 5 + "deg) rotateY(" + x / 5 + "deg)"
	        }
	        if (bTop) {
	            y -= 15;
	            oBox.style.WebkitTransform = "perspective(800px) rotateX(" + -y / 5 + "deg) rotateY(" + x / 5 + "deg)";
	            oBox.style.MozTransform = "perspective(800px) rotateX(" + -y / 5 + "deg) rotateY(" + x / 5 + "deg)";
	            oBox.style.msTransform = "perspective(800px) rotateX(" + -y / 5 + "deg) rotateY(" + x / 5 + "deg)";
	            oBox.style.transform = "perspective(800px) rotateX(" + -y / 5 + "deg) rotateY(" + x / 5 + "deg)"
	        }
	        if (bBottom) {
	            y += 15;
	            oBox.style.WebkitTransform = "perspective(800px) rotateX(" + -y / 5 + "deg) rotateY(" + x / 5 + "deg)";
	            oBox.style.MozTransform = "perspective(800px) rotateX(" + -y / 5 + "deg) rotateY(" + x / 5 + "deg)";
	            oBox.style.msTransform = "perspective(800px) rotateX(" + -y / 5 + "deg) rotateY(" + x / 5 + "deg)";
	            oBox.style.transform = "perspective(800px) rotateX(" + -y / 5 + "deg) rotateY(" + x / 5 + "deg)"
	        }
	    }, 30);
	    document.onkeydown = function(ev) {
	        if (ev.keyCode == 37) {
	            bLeft = true
	        }
	        if (ev.keyCode == 38) {
	            bTop = true
	        }
	        if (ev.keyCode == 39) {
	            bRight = true
	        }
	        if (ev.keyCode == 40) {
	            bBottom = true
	        }
	    };
	    document.onkeyup = function(ev) {
	        if (ev.keyCode == 37) {
	            bLeft = false
	        }
	        if (ev.keyCode == 38) {
	            bTop = false
	        }
	        if (ev.keyCode == 39) {
	            bRight = false
	        }
	        if (ev.keyCode == 40) {
	            bBottom = false
	        }
	    };
	    oBox3d.addEventListener("mousedown", fnDown3d, false);

	    function fnDown3d(ev) {
	        var oldX = ev.pageX - x;
	        var oldY = ev.pageY - y;
	        document.addEventListener("mousemove", fnMove3d, false);
	        document.addEventListener("mouseup", fnUp3d, false);

	        function fnMove3d(ev) {
	            x = ev.pageX - oldX;
	            y = ev.pageY - oldY;
	            oBox.style.WebkitTransform = "perspective(800px) rotateX(" + -y / 5 + "deg) rotateY(" + x / 5 + "deg)";
	            oBox.style.MozTransform = "perspective(800px) rotateX(" + -y / 5 + "deg) rotateY(" + x / 5 + "deg)";
	            oBox.style.msTransform = "perspective(800px) rotateX(" + -y / 5 + "deg) rotateY(" + x / 5 + "deg)";
	            oBox.style.transform = "perspective(800px) rotateX(" + -y / 5 + "deg) rotateY(" + x / 5 + "deg)"
	        }
	        function fnUp3d() {
	            document.removeEventListener("mousemove", fnMove3d, false);
	            document.removeEventListener("mouseup", fnUp3d, false)
	        }
	        ev.preventDefault();
	        return false
	    }
	})();
	(function() {
	    var oSwitch = document.getElementById("switch");
	    var oPrev = oSwitch.getElementsByTagName("button")[0];
	    var oNext = oSwitch.getElementsByTagName("button")[1];
	    var oUl = oSwitch.getElementsByTagName("ul")[0];
	    var aLi = oUl.children;
	    var iNow = 2;
	    oPrev.onclick = function(ev) {
	        var oDiv = this.children[0];
	        var oSon = oDiv.children[0];
	        var x = ev.pageX - this.offsetLeft;
	        var y = ev.pageY - this.offsetTop;
	        oSon.style.left = x + "px";
	        oSon.style.top = y + "px";
	        addClass(oDiv, "is-active");
	        oDiv.addEventListener("animationend", function(ev) {
	            removeClass(oDiv, "is-active")
	        }, false);
	        oDiv.addEventListener("webkitAnimationEnd", function(ev) {
	            removeClass(oDiv, "is-active")
	        }, false);
	        oDiv.addEventListener("MSAnimationEnd", function(ev) {
	            removeClass(oDiv, "is-active")
	        }, false);
	        iNow--;
	        for (var i = 0; i < aLi.length; i++) {
	            aLi[i].className = ""
	        }
	        if (iNow == 1) {
	            iNow = 13
	        }
	        aLi[(iNow - 2) % aLi.length].className = "l2";
	        aLi[(iNow - 1) % aLi.length].className = "l1";
	        aLi[iNow % aLi.length].className = "cur";
	        aLi[(iNow + 1) % aLi.length].className = "r1";
	        aLi[(iNow + 2) % aLi.length].className = "r2"
	    };
	    oNext.onclick = function(ev) {
	        var oDiv = this.children[0];
	        var oSon = oDiv.children[0];
	        var x = ev.pageX - this.offsetLeft;
	        var y = ev.pageY - this.offsetTop;
	        oSon.style.left = x + "px";
	        oSon.style.top = y + "px";
	        addClass(oDiv, "is-active");
	        oDiv.addEventListener("animationend", function(ev) {
	            removeClass(oDiv, "is-active")
	        }, false);
	        oDiv.addEventListener("webkitAnimationEnd", function(ev) {
	            removeClass(oDiv, "is-active")
	        }, false);
	        oDiv.addEventListener("MSAnimationEnd", function(ev) {
	            removeClass(oDiv, "is-active")
	        }, false);
	        iNow++;
	        for (var i = 0; i < aLi.length; i++) {
	            aLi[i].className = ""
	        }
	        aLi[(iNow - 2) % aLi.length].className = "l2";
	        aLi[(iNow - 1) % aLi.length].className = "l1";
	        aLi[iNow % aLi.length].className = "cur";
	        aLi[(iNow + 1) % aLi.length].className = "r1";
	        aLi[(iNow + 2) % aLi.length].className = "r2"
	    }
	})();
	(function() {
	    var oC = document.getElementById("c1");
	    var gc = oC.getContext("2d");
	    var arr = [67, 321, 287, 34, 150, 210, 400, 340, rnd(0, 401), rnd(0, 401), rnd(0, 401), rnd(0, 401)];
	    var space = oC.width / (arr.length * 4 - 1);
	    var w = space * 3;
	    var max = Math.max.apply(null, arr);
	    for (var i = 0; i < arr.length; i++) {
	        var h = arr[i] / max * oC.height;
	        gc.beginPath();
	        gc.fillStyle = "rgb(" + rnd(0, 256) + "," + rnd(0, 256) + "," + rnd(0, 256) + ")";
	        gc.fillRect(i * (w + space), oC.height - h, w, h)
	    }
	})();
	(function() {
        var oC = document.getElementById("c3");
        var gd = oC.getContext("2d");
        gd.strokeStyle = "#22C3AA";
        gd.lineWidth = 5;
        gd.beginPath();
        oC.onmousedown = function(ev) {
            gd.moveTo(ev.pageX - oC.offsetLeft, ev.pageY - oC.offsetTop);
            document.addEventListener("mousemove", fnMovePic, false);
            document.addEventListener("mouseup", fnUpPic, false);

            function fnMovePic(ev) {
                gd.clearRect(0, 0, oC.width, oC.height);
                gd.lineTo(ev.pageX - oC.offsetLeft, ev.pageY - oC.offsetTop);
                gd.stroke()
            }
            function fnUpPic() {
                document.removeEventListener("mousemove", fnMovePic, false);
                document.removeEventListener("mouseup", fnUpPic, false)
            }
            return false
        }
    })();
    (function(){
		var canvas = document.getElementById('canvas2');

		var ctx = canvas.getContext('2d');

		var oImage = new Image();

		oImage.src = 'img/bear.png';

		var index = 0;

		function bear(){
			oImage.onload = function(){			
				setInterval(function(){
					ctx.clearRect(0,0,300,300)

					ctx.drawImage(oImage,
						(index%8)*200,0,200,100,
						0,0,200,100
					)
				},16)

				setInterval(function(){
					index ++;
				},60);
			}
		}
		bear();
    })();
    (function(){
    	var canvas = document.getElementById('canvas3');

    	var ctx = canvas.getContext('2d');

    	var images = [
    		"img/2d-2.png",
    		"img/2d-1.png"
    	];

    	var statics = {};
    	var index = 0;

    	loadResource(images,function(){
    		setInterval(function(){
    			ctx.clearRect(0,0,canvas.width,canvas.height);

    			ctx.drawImage(statics[images[0]],
    				(index%4)*96,0,96,96,
    				0,0,96,96
    			)

    			ctx.drawImage(statics[images[1]],
    				(index%4)*96,0,96,96,
    				70,0,40,40
    			)
    		},16)

    		setInterval(function(){
    			index++
    		},80)
    	})

    	// 加载资源
    	function loadResource(resourceArray,callback){
    		var count = 0;

    		resourceArray.forEach(function(src,index){
    			var oImage = new Image();
    			oImage.src = src;

    			oImage.onload = function(){

    				statics[src] = oImage;

    				count++

    				if( count == resourceArray.length ){
    					callback && callback();
    				}
    			}
    		})
    	}
    })();
    (function(){
    	var aBlock = document.querySelectorAll('#show > div');

    	var classArray = ['current','right1','right2','left2','left1'];

    	var bReady = true;

    	document.onkeyup = function(ev){

    		if( !bReady ) return;

    		if( ev.keyCode != 37 &&  ev.keyCode != 39) return;

    		bReady = false;

    		if( ev.keyCode == 37 ){ // 左键
    			classArray.unshift(classArray.pop())
    		} else if( ev.keyCode == 39 ){ // 右键
    			classArray.push(classArray.shift())
    		}

    		setClass();
    	}

    	function setClass(){
    		for (var i = aBlock.length - 1; i >= 0; i--) {
    			aBlock[i].className = classArray[i];
    		}
    	}

    	setClass();

    	aBlock[2].addEventListener('transitionend',function(){
    		bReady = true;
    	},false)
    })();
},false);