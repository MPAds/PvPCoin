

/**
 * I currently get the user IP throught the webkitRTCPeerConnection
 * @param onNewIP {Function} listener function to expose the IP locally
 * I then use the IP to assist in producing a wallet address for the user
 * This creates a peer connection. I am not sold on the security of this however and want c, c#, or c++.
 * I am researching more on how can I use it to further support the network and maybe
 * provide what is needed for POW, and better confirmations.
 * here are some resources I use and study ...
 * https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection
 * https://ourcodeworld.com/articles/read/257/how-to-get-the-client-ip-address-with-javascript-only
 * I dont want to use WebRTC to allow browser to browser communication due to insecurity.
 * WebRTC is free, open source, can be compiled and used for whatever you want.
 * This is for web developers and not voice over IP developers. Not secure for crypto either from my research.
 * Firefox, Chrome, Opera support it. Has Android support.
 * Explorer and Safari do not have WebRTC built into them. These have Plug In Solutions
 * communication is done through Public IP and NOT Local IP. As STUN server will give you your IP address.
 * STUN produces a PIN hole in the net to allow someone else to reach me. If STUN doesnt work we have TURN.
 * TURN relays the media or data through a server, an external server that receives all the data and then
 * streems it to someone else. Use turn if a client cant reach another client directly. TURN is a bandwidth hog.
 * We can still use a server to help for better security, but I really want a packaged product for download.
 */
 
 
function getUserIP(onNewIP) { //  onNewIp - your listener function for new IPs
    //compatibility for firefox and chrome
    var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    var pc = new myPeerConnection({
        iceServers: []
    }),
    noop = function() {},
    localIPs = {},
    ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
    key;

    function iterateIP(ip) {
        if (!localIPs[ip]) onNewIP(ip);
        localIPs[ip] = true;
    }

     //create a bogus data channel
    pc.createDataChannel("");

    // create offer and set local description
    pc.createOffer(function(sdp) {
        sdp.sdp.split('\n').forEach(function(line) {
            if (line.indexOf('candidate') < 0) return;
            line.match(ipRegex).forEach(iterateIP);
        });
        
        pc.setLocalDescription(sdp, noop, noop);
    }, noop); 

    //listen for candidate events
    pc.onicecandidate = function(ice) {
        if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
        ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
    };

}

getUserIP(function(ip){
	document.getElementById("ipaddress").innerHTML = 'Your IP = '  + ip + "";  // public ip    &    local IP
	var walletHash = ip;    // 192.168.1.67 @ home  // 192.168.10.130 @ Panera   // console.log( walletHash);
	var sVal = walletHash;
    var iNum = parseInt(sVal, 16); //Output 402 and 9728 and toString32 = ci and 9g0    //(305441741).toString(16) = "1234abcd"

 
 salt = (927 ^ 54 > 5^70)
 sum = (iNum * iNum * salt);    // 
 WalletAddress = sum.toString(26); // Output d9pc5m and bfbc0ipe    // console.log( WalletAddress);
 document.getElementById("wallet").innerHTML = 'Your Wallet Address = '  + WalletAddress + "";  //  WalletAddress;


});

