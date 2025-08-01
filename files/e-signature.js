document.getElementById('copyButton').addEventListener('click', finalizeSignature);

function updatePreview() {
    var signatureHTML = generateSignatureHTML();
    document.getElementById('signatureDisplay').innerHTML = signatureHTML;
}

function generateSignatureHTML() {
    var name = document.getElementById('name').value;
    var englishName = document.getElementById('englishName').value;
    var mobileNumber = document.getElementById('mobileNumber').value;
    var position = document.getElementById('position').value;
    var teamName = document.getElementById('teamName').value;
    var emailAddress = document.getElementById('emailAddress').value;

    return `
        <img style="float:right; margin:40px 30px 0px 0px;" width="200px" src="data:image/png;base64,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">
        <div style="padding-top:16px;letter-spacing:0.5px;width:100%;border-top:2px dotted #CCC;font-family:'맑은 고딕','Malgun Gothic','돋움',dotum,sans-serif"><p>
        <br><span style="letter-spacing:5px;font-size:20px"><b>${name}&nbsp;</b></span><span style="font-size:16px;">${englishName}</span></p>
        <p style="margin:4px 0 0;font-size:12px;"><b>${teamName}</b></p>
        <p><span style="font-size:12px;color:#888;">${position}</span><br>
        <br><span style="font-size:14px;"><span style="color:#888;">M </span>${mobileNumber}&nbsp;<span style="margin:0 10px 0;color:#CCC;">/</span><span style="color:#888;">E </span>${emailAddress}</span><br>
        <br><span style="font-size:12px;">06105 서울시 강남구 학동로34길 16 티플러스빌딩 1층<span style="color:#888;margin-left:10px;">tel </span>02-535-7475<span style="color:#888; margin-left:10px;">fax </span>02-535-7470<br>1F, T-Plus&nbsp;BLDG, Hakdong-ro 34 gil-16, Gangnam-gu, Seoul, Republic of Korea<br></span></p></div><p><br></p>
    `;
}

function finalizeSignature() {
    const signature = document.getElementById('signatureDisplay').innerHTML;
    copyToClipboard(signature);
}

function copyToClipboard(html) {
    const tempElem = document.createElement('textarea');
    tempElem.value = html;
    document.body.appendChild(tempElem);
    tempElem.select();
    try {
        document.execCommand('copy');
        alert("Signature copied to clipboard!");
    } catch (err) {
        console.error('Failed to copy: ', err);
        alert("Failed to copy signature.");
    }
    document.body.removeChild(tempElem);
}

// Initialize an empty preview
updatePreview();
