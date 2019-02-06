$(document).ready(function () {
    toolbar = '<div id="sideToolbar" style="display:none;">\
                <div class="sideCatalogBg" id="sideCatalog">\
                  <div id="sideCatalog-sidebar">\
                    <div class="sideCatalog-sidebar-top">\
                    </div>\
                    <div class="sideCatalog-sidebar-bottom">\
                    </div>\
                  </div>\
                  <div id="sideCatalog-catalog">\
                    <ul class="nav" style="width:305px;zoom:1">\
                    </ul>\
                  </div>\
                </div>\
                <a href="javascript:void(0);" id="sideCatalogBtn" class="sideCatalogBtnDisable"></a>\
                <a href="javascript:void(0);" id="sideToolbar-up"></a>\
              </div>',
         catalog_item = '',
        l = 1, m = 1, n = 1,
        s = $('#touslescours'); //#touslescours c'est le div qui contient tous les contenus des cours
    if (s.length === 0) {
        return
    }
    ;
    $('body').append(toolbar);
    headers = s.find(':header'); //chercher tous les titres h1~h6 dans #touslescours
    catalog_item += '<li><span style="font-size: 14pt; font-weight: bold;">Les Cours</span></li>';
    headers.each(function () { //traverser tous les header
        var xheader = $(this), //l'objet de header présent
            v = xheader[0];

        var text = xheader.text();

        xheader.attr('id', 'autoid-' + l + '-' + m + '-' + n)

        if (v.localName === 'h2') {
            level1 = l + '.';
            
            catalog_item += '<li><a href="#' + xheader.attr('id') + '" title="' + text + '">' +  text + '</a><span class="sideCatalog-dot pointer"></span></li>';
            l++;
        }
    });
    $('#sideCatalog-catalog>ul.nav').html(catalog_item);
	$('[data-spy="scroll"]').each(function () {
		var $spy = $(this).scrollspy('refresh');
	});
    $('body').scrollspy({
        offset: 50,
        target: '.sideCatalogBg'
    });

    $('body').on('activate.bs.scrollspy', function () {
        $("ul.nav li.active span").toggleClass("highlight");
    });

    $sideCatelog = $('#sideCatalog');
    $('#sideCatalogBtn').on('click', function () {
        if ($(this).hasClass('sideCatalogBtnDisable')) {
            $sideCatelog.css('visibility', 'hidden');
			$("#sideToolbar").css("z-index",0);
        } else {
            $sideCatelog.css('visibility', 'visible');
			$("#sideToolbar").css("z-index",999);
        }
        $(this).toggleClass('sideCatalogBtnDisable');
    });


    $('#sideToolbar-up').on('click', function () {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    });

    setTimeout(function () {
        //sidebar_height = $('#touslescours').offset().top;
		sidebar_height = $('#touslescours').offset().top;
		sidebar_low = $('#Biblio').offset().top;
        $sideToolbar = $('#sideToolbar');
        $(document).on('scroll', function () {
            var t = $(document).scrollTop();
            if (t > sidebar_height) {
                $sideToolbar.css('display', 'block')
            } else {
                $sideToolbar.css('display', 'none')
            }
        })
    }, 1000);
});