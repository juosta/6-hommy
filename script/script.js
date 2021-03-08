function showtenants() {
    document.getElementById('tenantslist').style.visibility='visible';
    document.getElementById('organizationslist').style.visibility='hidden';
  }
  function showorganizations() {
    document.getElementById('tenantslist').style.visibility='hidden';
    document.getElementById('organizationslist').style.visibility='visible';
  }

    function slideRight () {
      document.getElementById('cards').scrollLeft += 20;
    };
    function slideLeft () {
      document.getElementById('cards').scrollLeft -= 20;
    };