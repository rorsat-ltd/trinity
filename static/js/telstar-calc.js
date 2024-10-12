function hi_or_lo_bas() {
    let f = Number(document.getElementById("frequency").value); // frequency input
    const lnb_hi = 10600; // top of LNB range (default)
    const lnb_lo = 9750;  // bottom of LNB range (default)
    let hi_calc = f - lnb_hi;
    let lo_calc = f - lnb_lo;
    const freq_band_hi = 2000; // top of band (default)
    const freq_band_lo = 950;  // bottom of band (default)
    let result = "";
    let freq_result = 9999 // default value

    // Boolean values
    let use_hi = false;
    let use_lo = false;

    // Getting radio button values
    let polarity = document.querySelector('input[name="polarity"]:checked');


    if (hi_calc >= freq_band_lo && hi_calc <= freq_band_hi) {
        use_hi = true;
        freq_result = hi_calc
    }
    if (lo_calc >= freq_band_lo && lo_calc <= freq_band_hi) {
        use_lo = true;
        freq_result = lo_calc
    }

    if (!use_hi && use_lo) {
        result = "Lo";
    } else if (use_hi && !use_lo) {
        result = "Hi";
    } else if (!use_hi && !use_lo) {
        result = "Out of Range";
    } else if (use_hi && use_lo) {
        result = "Overlap, both in range";
    } else {
        console.warn("Error in calculation; unknown state of use_hi and use_lo");
        result = "error";
    }

    // Displaying the result with polarity
    if (polarity && (result === "Hi" || result === "Lo")) {
        result = polarity.value + result;
    }

    document.getElementById("result-box").value = result;
    document.getElementById("freq-res").value = freq_result;


}





function hi_or_lo_adv() {
    let f = Number(document.getElementById("frequency").value); // frequency input
    let lnb_hi = 10600; // top of LNB range (default)
    let lnb_lo = 9750;  // bottom of LNB range (default)
    let hi_calc = f - lnb_hi;
    let lo_calc = f - lnb_lo;
    let freq_band_hi = 2000; // top of band (default)
    let freq_band_lo = 950;  // bottom of band (default)
    let result = "";
    let freq_result = 9999 // default value

    // Boolean values
    let use_hi = false;
    let use_lo = false;

    // Getting radio button values
    let polarity = document.querySelector('input[name="polarity"]:checked');
    let standard = document.querySelector('input[name="standard"]:checked');

    // Frequency band selector
    switch (document.getElementById("freq-band").value) {
        case "l-band":
            freq_band_hi = 2000;
            freq_band_lo = 950;
            break;
        default:
            console.warn("Unknown frequency band; using default values. (L-band)");
    }
    // LNB selector
    switch (document.getElementById("lnb-sel").value) {
        case "cbs-lon":
            lnb_hi = 10600;
            lnb_lo = 9750;
            break;
        default:
            console.warn("Unknown LNB selection; using default values. (CBS LON)");
            break;
    }

    if (hi_calc >= freq_band_lo && hi_calc <= freq_band_hi) {
        use_hi = true;
        freq_result = hi_calc
    }
    if (lo_calc >= freq_band_lo && lo_calc <= freq_band_hi) {
        use_lo = true;
        freq_result = lo_calc
    }

    if (!use_hi && use_lo) {
        result = "Lo";
    } else if (use_hi && !use_lo) {
        result = "Hi";
    } else if (!use_hi && !use_lo) {
        result = "Out of Range";
    } else if (use_hi && use_lo) {
        result = "Overlap, both in range";
    } else {
        console.warn("Error in calculation; unknown state of use_hi and use_lo");
        result = "error";
    }

    // Displaying the result with polarity
    if (polarity && (result === "Hi" || result === "Lo")) {
        result = polarity.value + result;
    }

    document.getElementById("result-box").value = result;
    document.getElementById("freq-res").value = freq_result;


}

// Clear function to reset inputs
function clr() {
    document.getElementById("frequency").value = "";
    document.getElementById("symbol-rate").value = "";
    document.getElementById("channel").value = "";
    document.getElementById("result-box").value = "";
    document.querySelectorAll('input[name="polarity"]').forEach((el) => el.checked = false);
}







//header date
document.addEventListener("DOMContentLoaded", function() {
    var dateElement = document.getElementById("header-date");
    if (dateElement) {
        var currentDate = new Date().toDateString();
        dateElement.textContent = currentDate;
    }
});