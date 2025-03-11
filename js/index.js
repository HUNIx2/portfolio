//달 에니메이션
document.addEventListener("DOMContentLoaded", () => {
    const moon = document.getElementById("moon");
    let opacity = 0;
    let scale = 0.8;
    let step = 0.02;  

    function fadeIn() {
        if (opacity < 1) {
            opacity += step;
            scale += 0.005;
            moon.style.opacity = opacity;
            moon.style.transform = `translateX(-50%) scale(${scale})`;
            requestAnimationFrame(fadeIn);
        }
    }

    setTimeout(fadeIn, 500); 
});


document.addEventListener("DOMContentLoaded", () => {
    const text = "#사회성 만렙 #유쾌함 #패기";
    const typingElement = document.getElementById("typing-text");
    let index = 0;

    function type() {
        if (index < text.length) {
            typingElement.innerHTML += text[index];
            index++;
            setTimeout(type, 150); // 글자 나타나는 속도 조절
        } else {
            typingElement.style.borderRight = "none";
        }
    }

    setTimeout(type, 2000); 
});

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    function showPage() {
        sections.forEach(section => section.classList.add("show"));
    }

    // 페이지 로딩 시 애니메이션 적용
    setTimeout(showPage, 300);

    // 스크롤 이벤트 감지하여 부드러운 전환 효과 적용
    let isScrolling;
    window.addEventListener("scroll", () => {
        clearTimeout(isScrolling);
        document.body.classList.add("scrolling");

        isScrolling = setTimeout(() => {
            document.body.classList.remove("scrolling");
        }, 500);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const slideImages = document.querySelectorAll(".slide img");
    let currentIndex = 0;

    setInterval(() => {
        // 현재 이미지에서 active 제거
        slideImages[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % slideImages.length;
        // 다음 이미지에 active 추가
        slideImages[currentIndex].classList.add("active");
    }, 3000); // 3초마다 전환
});

// 커리어 
document.addEventListener("DOMContentLoaded", () => {
    const arrows = document.querySelectorAll(".arrow-item");
    const page2 = document.querySelector(".page2"); // page2 감지

    function showArrows() {
        arrows.forEach((arrow, index) => {
            setTimeout(() => {
                arrow.classList.add("show");
            }, index * 500); // 왼쪽부터 0.5초 간격으로 등장
        });
    }

    function hideArrows() {
        arrows.forEach((arrow) => {
            arrow.classList.remove("show");
        });
    }

    function onScroll() {
        const page2Top = page2.offsetTop;
        const page2Bottom = page2Top + page2.clientHeight;
        const scrollPosition = window.scrollY + window.innerHeight / 2; 

        if (scrollPosition >= page2Top && scrollPosition <= page2Bottom) {
            showArrows();
        } else {
            hideArrows();
        }
    }

    window.addEventListener("scroll", onScroll);
});

// 모달창
document.addEventListener("DOMContentLoaded", function () {
    const modalTriggers = document.querySelectorAll(".arrow-item"); 
    const modals = document.querySelectorAll(".modal"); 
    const closeButtons = document.querySelectorAll(".close"); 
    
    modals.forEach(modal => {
        modal.style.display = "none";
    });
    // 모달 오픈
    modalTriggers.forEach(trigger => {
        trigger.addEventListener("click", function (event) {
            event.preventDefault(); 
            const modalId = this.getAttribute("data-modal");
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = "flex"; 
            }
        });
    });

    // 모달 닫기 (X버튼 클릭 시)
    closeButtons.forEach(button => {
        button.addEventListener("click", function () {
            this.closest(".modal").style.display = "none";
        });
    });

    // 모달 닫기 (배경 클릭 시)
    modals.forEach(modal => {
        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none"; 
            }
        });
    });
});

// 페이지 이동버튼
document.addEventListener("DOMContentLoaded", () => {
    const toPage2 = document.getElementById("toPage2");
    const toPage3 = document.getElementById("toPage3");
    const toTop = document.getElementById("toTop");

    function scrollToSection(section) {
        section.scrollIntoView({ behavior: "smooth" });
    }

    // Page1 => Page2 이동
    toPage2.addEventListener("click", () => {
        scrollToSection(document.querySelector(".page2"));
    });

    // Page2 => Page3 이동
    toPage3.addEventListener("click", () => {
        scrollToSection(document.querySelector(".page3"));
    });

    // Page3 => Page1 (Top btn)
    toTop.addEventListener("click", () => {
        scrollToSection(document.querySelector(".page1"));
    });
});