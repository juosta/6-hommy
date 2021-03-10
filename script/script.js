function showtenants() {
    document.getElementById('tenantslist').style.display='inline-block';
    document.getElementById('organizationslist').style.display='none';
  }
  function showorganizations() {
    document.getElementById('tenantslist').style.display='none';
    document.getElementById('organizationslist').style.display='inline-block';
  }

    function slideRight () {
      document.getElementById('cards').scrollLeft += 20;
    };
    function slideLeft () {
      document.getElementById('cards').scrollLeft -= 20;
    };