alsharq.service("Admob", [
    'admobSvc',
    function(admobSvc){
        this.show = function(){
            var options = {
                publisherId:          "pub-5044923081076791",
                interstitialAdId:     "ca-app-pub-5044923081076791/1925090666",
                autoShowBanner:       true,
                autoShowInterstitial: true,
                bannerAtTop:          false,
                overlap:              false,
            };
            admobSvc.createBannerView(options, this.onSuccess, this.onFail);
        };
        
        this.onSuccess = function(){
            console.log('Ad displayed');
        };
        
        this.onFail = function(){
            console.log("can't display the Ad");
        };
    }
]);
