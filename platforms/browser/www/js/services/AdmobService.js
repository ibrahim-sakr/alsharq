alsharq.service("Admob", [
    'admobSvc',
    function(admobSvc){
        this.show = function(){
            var options = {
                publisherId:          "pub-7692991725635166",
                interstitialAdId:     "ca-app-pub-7692991725635166~3801390136",
                autoShowBanner:       true,
                autoShowInterstitial: true,
                bannerAtTop:          false,
                overlap:              false,
                isTesting:            true,
            };
            admobSvc.createBannerView(options, this.onSuccess, this.onFail);
        };

        this.hide = function () {
            admobSvc.showBannerAd(false)
        },
        
        this.onSuccess = function(){
            console.log('Ad displayed');
        };
        
        this.onFail = function(){
            console.log("can't display the Ad");
        };
    }
]);
