// Minimal script for site interactions
document.addEventListener('DOMContentLoaded',function(){
  // fill copyright years
  var year = new Date().getFullYear();
  ['year','year2','year3','year4','year5','year6'].forEach(function(id){
    var el = document.getElementById(id);
    if(el) el.textContent = year;
  });

  // contact form fallback: open mailto with content when no backend provided
  var form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var name = document.getElementById('name').value.trim();
      var email = document.getElementById('email').value.trim();
      var message = document.getElementById('message').value.trim();
      var subject = encodeURIComponent('Support request from ' + name);
      var body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);
      // fallback: open user's mail client
      window.location.href = 'mailto:support@example.com?subject=' + subject + '&body=' + body;
    });
  }
});