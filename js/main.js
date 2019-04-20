var windowTop, windowHeight, steps = [], chartHeight;
init();
bindings();


function init() {
    this.onScroll();
}

function getSteps() {
    $('.comic__main--text--step').each(function(i, el) {
        steps.push($(el).attr('data-step'));
    }.bind(this));

}

function bindings() {
    $(window).scroll(function() {
        setTimeout( function(){
            this.onScroll();
        },100);
    }.bind(this));

    $(document).on('input', '#myRange', function() {
        var num = 50 / $(this).val();
        var bruh = -.7;
        $('.raindrop__fixed').each(function(i, el) {
            setTimeout( function(){
                $(el).css('animation', 'raindrop ' + num + 's linear infinite');
                $(el).css('animation-delay', bruh + 's');
                bruh = bruh - .4;
            },200);
        }.bind(this));
        $('.waves__fixed').css('animation', 'move ' + num + 's linear infinite alternate');
    });
}

function onScroll() {
    this.updateValues();
    this.setStep();
}

function updateValues() {
    windowTop = window.pageYOffset || document.documentElement.scrollTop;
    windowHeight = $(window).height();
}

function fixMap() {
    if (windowTop > $('.comic__main--text--start').offset().top - this.percentageOfHeight(5)) {
        $('.intro2').css('display', 'block');
    } else {
        $('.intro2').css('display', 'none');
    }
}

function setStep() {
    var stepToShow = null;
    $('.comic__main--text--step').each(function(i, el) {
        if (windowTop > $(el).offset().top - this.percentageOfHeight(90)) {
            stepToShow = $(el).data('step');
        }
    }.bind(this));
    this.highlightStates(stepToShow);
}

function highlightStates(currentStep) {
    switch (currentStep) {

        case 'intro':
        $('.page__1').addClass('image__shown');
        $('.page__0').addClass('image__shown');
        $('.page__6').removeClass('image__shown');
        $('.page__2').removeClass('image__shown');
        break

        case 'skills':
        $('.page__1').removeClass('image__shown');
        $('.page__2').addClass('image__shown');
        $('.page__0').removeClass('image__shown');
        $('.page__6').removeClass('image__shown');
        $('.page__5').removeClass('image__shown');
        break

        case 'proposal':
        $('.page__6').addClass('image__shown');
        $('.page__5').removeClass('image__shown');
        $('.page__10').removeClass('image__shown');
        break

        case 'tools':
        $('.page__4').addClass('image__shown');
        $('.page__3').removeClass('image__shown');
        $('.page__10').removeClass('image__shown');
        $('.page__2').removeClass('image__shown');
        $('.page__5').removeClass('image__shown');
        $('.page__7').removeClass('image__shown');
        $('.page__9').removeClass('image__shown');
        $('.page__10').removeClass('image__shown');
        $('.page__8').removeClass('image__shown');
        break

        case 'community':
        $('.page__4').removeClass('image__shown');
        $('.page__9').addClass('image__shown');
        break

        case 'budget':
        $('.page__4').removeClass('image__shown');
        $('.page__8').addClass('image__shown');
        break

        case 'cloud':
        $('.page__5').addClass('image__shown');

        $('.page__6').removeClass('image__shown');
        $('.page__7').removeClass('image__shown');

        $('.page__1').removeClass('image__shown');
        $('.page__2').removeClass('image__shown');
        $('.page__3').removeClass('image__shown');
        break

        case 'process':
        $('.page__7').removeClass('image__shown');
        $('.page__10').addClass('image__shown');
        $('.page__4').removeClass('image__shown');
        $('.page__6').removeClass('image__shown');
        break

        case 'timeline':
        $('.page__7').addClass('image__shown');
        $('.page__2').removeClass('image__shown');
        $('.page__5').removeClass('image__shown');
        $('.page__4').removeClass('image__shown');
        $('.page__10').removeClass('image__shown');
        break

        default:
        $('.page__7').removeClass('image__shown');
        $('.page__1').removeClass('image__shown');
        $('.page__0').removeClass('image__shown');
        $('.young__fixed').css('opacity', '0');
    }
}

function percentageOfHeight(percentage) {
    return (windowHeight / 100) * percentage;
}
