alsharq.service('Time', [
    function(){
        this.format = function(past){
            var past        = new Date(past),
                current     = new Date(),
                msPerMinute = 60 * 1000,
                msPerHour   = msPerMinute * 60,
                msPerDay    = msPerHour * 24,
                msPerMonth  = msPerDay * 30,
                msPerYear   = msPerDay * 365,
                elapsed     = past - current;

            if (elapsed < msPerMinute) {
                 return "منذ " + Math.round(elapsed/1000) + ' ثانية';   
            }
            else if (elapsed < msPerHour) {
                 return "منذ " + Math.round(elapsed/msPerMinute) + ' دقيقة';   
            }
            else if (elapsed < msPerDay ) {
                 return "منذ " + Math.round(elapsed/msPerHour ) + ' ساعه';   
            }
            else if (elapsed < msPerMonth) {
                return "منذ " + Math.round(elapsed/msPerDay) + ' يوم';   
            }
            else if (elapsed < msPerYear) {
                return "منذ " + Math.round(elapsed/msPerMonth) + ' شهر';   
            }
            else {
                return "منذ " + Math.round(elapsed/msPerYear ) + ' عام';   
            }
        };
    }
]);
