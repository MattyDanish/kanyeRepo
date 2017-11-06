$(function(){
  //add page switch listener
  
    $('.letsdodis').click(function(e){   
    $('.pageTwo').removeClass('hide')
    $('.pageOne').addClass('hide')

  })
$('#quiz').submit(function(e){
  e.preventDefault()
  
  let result=check()
  $('.result').text(`You have ${result} answers correct`)
  
  $('.pageThree').removeClass('hide')
  $('.pageTwo').addClass('hide')

})  

    $('.TryAgain').click(function(e){
      clearForm()
    $('.pageOne').removeClass('hide')
    $('.pageThree').addClass('hide')
    })


})


function check() {
    let ReturnValue=0;
    let growUpValue = $( 'input[name=growUp]:checked' ).attr('id');
    let grammysValue = $( 'input[name=grammys]:checked' ).attr('id');
    let sampleValue = $( 'input[name=sample]:checked' ).attr('id');
    let kidsValue = $( 'input[name=kids]:checked' ).attr('id');
    let foxxValue = $( 'input[name=foxx]:checked' ).attr('id');
    let startValue = $( 'input[name=start]:checked' ).attr('id');
    let beefValue = $( 'input[name=beef]:checked' ).attr('id');
    let answersValue = $( 'input[name=answers]:checked' ).attr('id');
    let fashionValue = $( 'input[name=fashion]:checked' ).attr('id');
    let godValue = $( 'input[name=god]:checked' ).attr('id');
    if (growUpValue==='Chicago') {
      ReturnValue ++;
    }
    if (grammysValue==='21') {
      ReturnValue ++;
    }
    if (sampleValue==='Lauryn Hill') {
      ReturnValue ++;
    }
    if (kidsValue==='North & Saint') {
      ReturnValue ++;
    }
    if (foxxValue==='Jaime Foxx') {
      ReturnValue ++;
    }
    if (startValue==='Jay-Z') {
      ReturnValue ++;
    }
    if (beefValue==='All of the above') {
      ReturnValue ++;
    }
    if (answersValue==='Sway') {
      ReturnValue ++;
    }
    if (fashionValue==='Ralph Lauren') {
      ReturnValue ++;
    }
    if (godValue==='All of the above') {
      ReturnValue ++;
   }
      return ReturnValue
  
}
function clearForm(){
  $('input:radio[name=growUp]').each(function () { $(this).prop('checked', false); });
  
  $('input:radio[name=grammys]').each(function () { $(this).prop('checked', false); });

  $('input:radio[name=sample]').each(function () { $(this).prop('checked', false); });

  $('input:radio[name=kids]').each(function () { $(this).prop('checked', false); });

  $('input:radio[name=foxx]').each(function () { $(this).prop('checked', false); });

  $('input:radio[name=start]').each(function () { $(this).prop('checked', false); });

  $('input:radio[name=beef]').each(function () { $(this).prop('checked', false); });

  $('input:radio[name=answers]').each(function () { $(this).prop('checked', false); });

  $('input:radio[name=fashion]').each(function () { $(this).prop('checked', false); });

  $('input:radio[name=god]').each(function () { $(this).prop('checked', false); });

  
  
  
  
}