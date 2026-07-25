<section id="master-wrap">
<script src="/Scripts/PublicService/public-service.js" type="text/javascript"></script>
<input id="scrollPosY" name="scrollPosY" type="hidden" value="">
<div class="empty-box">
    <div class="RunningBoards-header">
        Approved Route Overview
    </div>
    <div class="public-service-search-cntainer">

        <div id="SearchBox">
<form action="/PublicService/PublicServiceData" id="-1258051932" method="post" novalidate="novalidate">        <input type="text" id="PublicServiceData-1258051932searchbox" name="PublicServiceData-1258051932" value="Search" onblur="if (this.value=='') this.value='Search';" onfocus="if (this.value=='Search') this.value='';" class="ui-corner-all ui-widget-content">
        <button type="button" id="PublicServiceData-1258051932" value="Search">
            Go</button>
</form></div>
<script type="text/javascript">
    $(function () {
        Icarus.SearchAjax_Old.init('PublicServiceData', '-1258051932', 'PublicServiceGrid', '/PublicService/PublicServiceData', 'PublicService.OverView.searchCallBack()', 'PublicService.OverView.searchCallBefore()');
    });
</script>

    </div>
</div>
<div class="data-container">
    <div id="PublicServiceGrid" class="outer-round-brdr">
    </div>
</div>
<div class="empty-box1">
    <div class="tbl-foot">
        <label style="font-size: 11px; display: none; float: left" id="total-services">
        </label>
    </div>
    <div class="tbl-footFilter">
        <div style="width: 10px; height: 20px;" id="padding-div">
        </div>
    </div>
    
       
 <label id="lastRefreshedTime"></label>
 


<script type="text/javascript">
    function setRefreshLabel() {
        if (window.CurrentTime) {
            $('#lastRefreshedTime').text('Last refreshed: ' + window.CurrentTime.format(window.DateTimeFormatForMomentJS));
            $('#lastRefreshedTime').attr('title', 'Refresh interval: ' + ($('#hdnRefreshMapInterval').val() / (1000*60)) + ' minute(s)');
}
    }
</script>
</div>
<div id="vector-container" style="display: none" title="">
    <center>
        <img src="/Images/ajax-loader.gif">
    </center>
</div>
<script type="text/javascript">
    $(document).ready(function () {
        var Url = '/PublicService/PublicServiceData';
        PublicService.OverView.init(Url);
        PublicService.OverView.refreshGrid(Url);
    });
    $.getScrollBarSize = function () {
        var inner = $('<p></p>').css({
            'width': '100%',
            'height': '100%'
        });
        var outer = $('<div></div>').css({
            'position': 'absolute',
            'width': '100px',
            'height': '100px',
            'top': '0',
            'left': '0',
            'visibility': 'hidden',
            'overflow': 'hidden'
        }).append(inner);

        $(document.body).append(outer);

        var w1 = inner.width(), h1 = inner.height();
        outer.css('overflow', 'scroll');
        var w2 = inner.width(), h2 = inner.height();
        if (w1 == w2 && outer[0].clientWidth) {
            w2 = outer[0].clientWidth;
        }
        if (h1 == h2 && outer[0].clientHeight) {
            h2 = outer[0].clientHeight;
        }

        outer.detach();
        return [(w1 - w2), (h1 - h2)];
    };
    
   
</script>
</section>