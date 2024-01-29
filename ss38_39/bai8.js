function convertWeight(unit) {
    const kgValue = parseFloat(document.getElementById('kg').value) || 0;
    
    let gValue, lbValue, ozValue;

    switch (unit) {
      case 'kg':
        gValue = kgValue * 1000;
        lbValue = kgValue * 2.20462;
        ozValue = kgValue * 35.274;
        break;
      default:
        break;
    }

    document.getElementById('g').value = gValue.toFixed(2);
    document.getElementById('lb').value = lbValue.toFixed(2);
    document.getElementById('oz').value = ozValue.toFixed(2);
  }