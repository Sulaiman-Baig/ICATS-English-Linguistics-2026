/**
 * ICATS English Linguistics - Focused Learning Mode
 * Grade 1-2 (Toddlers) Answer Review System
 *
 * Clean, distraction-free learning experience
 * - Show/Hide answers only
 * - Passage toggle
 * - Smooth animations
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all show/hide answer buttons
    initAnswerToggles();

    // Initialize passage toggle
    initPassageToggle();

    // Initialize global controls
    initGlobalControls();

    // Initialize quick answer navigation
    initQuickNavigation();

    console.log('Focused Learning Mode Ready!');
});

/**
 * Initialize individual answer toggle buttons
 */
function initAnswerToggles() {
    const toggleButtons = document.querySelectorAll('.learning-show-btn');

    toggleButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const questionItem = this.closest('.learning-question-item');
            const answerSide = questionItem.querySelector('.learning-a-side');
            const isVisible = answerSide.classList.contains('visible');

            if (isVisible) {
                // Hide answer
                answerSide.classList.remove('visible');
                this.innerHTML = '<span>Show Answer</span>';
                this.classList.remove('showing');
            } else {
                // Show answer
                answerSide.classList.add('visible');
                this.innerHTML = '<span>Hide Answer</span>';
                this.classList.add('showing');
            }
        });
    });
}

/**
 * Initialize passage toggle functionality
 */
function initPassageToggle() {
    const toggleButtons = document.querySelectorAll('.passage-toggle-btn');

    toggleButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const container = this.closest('.passage-sticky-container');
            const content = container.querySelector('.passage-sticky-content');
            const isCollapsed = content.classList.contains('collapsed');

            if (isCollapsed) {
                content.classList.remove('collapsed');
                this.textContent = 'Collapse';
            } else {
                content.classList.add('collapsed');
                this.textContent = 'Expand';
            }
        });
    });
}

/**
 * Initialize global Show All / Hide All controls
 */
function initGlobalControls() {
    const showAllBtn = document.getElementById('show-all-answers');
    const hideAllBtn = document.getElementById('hide-all-answers');

    if (showAllBtn) {
        showAllBtn.addEventListener('click', function() {
            const allAnswerSides = document.querySelectorAll('.learning-a-side');
            const allButtons = document.querySelectorAll('.learning-show-btn');

            allAnswerSides.forEach(side => side.classList.add('visible'));
            allButtons.forEach(btn => {
                btn.innerHTML = '<span>Hide Answer</span>';
                btn.classList.add('showing');
            });
        });
    }

    if (hideAllBtn) {
        hideAllBtn.addEventListener('click', function() {
            const allAnswerSides = document.querySelectorAll('.learning-a-side');
            const allButtons = document.querySelectorAll('.learning-show-btn');

            allAnswerSides.forEach(side => side.classList.remove('visible'));
            allButtons.forEach(btn => {
                btn.innerHTML = '<span>Show Answer</span>';
                btn.classList.remove('showing');
            });
        });
    }
}

/**
 * Initialize quick answer navigation (click to scroll)
 */
function initQuickNavigation() {
    const quickAnswerItems = document.querySelectorAll('.quick-answer-item');

    quickAnswerItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            const questionItems = document.querySelectorAll('.learning-question-item');
            if (questionItems[index]) {
                questionItems[index].scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Briefly highlight the question
                questionItems[index].style.boxShadow = '0 0 0 4px #3b82f6';
                setTimeout(() => {
                    questionItems[index].style.boxShadow = '';
                }, 1500);
            }
        });
    });
}
