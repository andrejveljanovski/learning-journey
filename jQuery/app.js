$(function () {
  let trackRecords = [];
  $(".counter").hide();
  $(".finishLine").hide();

  $(".start").click(function () {
    $("button").prop("disabled", "true");
    $(".raceTrack").addClass("race-track-darken");
    function CheckIfComplete() {
      if (isComplete == false) {
        isComplete = true;
        $(".raceTrack").addClass("race-track-darken");
        $("button").removeAttr("disabled");
      } else {
        place = "second";
      }
    }
    let carWidth = $(".cars").width();
    let racetrackWidth = $(window).width() - carWidth;

    let raceTime1 = Math.floor(Math.random() * 5000 + 1);
    let raceTime2 = Math.floor(Math.random() * 5000 + 1);

    let isComplete = false;

    let place = "first";

    let seconds = 3;
    $(".counter").show();
    $(".counter").text(seconds);
    let timer = setInterval(function () {
      console.log(seconds);
      seconds = seconds - 1;
      $(".counter").text(seconds);
      if (seconds == 0) {
        clearInterval(timer);
        $(".raceTrack").removeClass("race-track-darken");
        $(".counter").hide();

        $(".car-1").animate(
          {
            marginLeft: racetrackWidth,
          },
          raceTime1,
          function () {
            CheckIfComplete();
            $(".result-car-1").append(
              `<div class="result-cont ">
                <p>  Finished in: <span> ${place} </span> place with a time of <span> ${raceTime1} </span> miliseconds!
              </p>      </div>`
            );
            localStorage.setItem("timeFirstCar", `${raceTime1}`);
            localStorage.setItem("positionFirstCar", `${place}`);
            $(".finishLine").show();
          }
        );
        $(".car-2").animate(
          {
            marginLeft: racetrackWidth,
          },
          raceTime2,
          function () {
            CheckIfComplete();
            $(".result-car-2").append(
              `<div class="result-cont result-cont-2">
                          <p>   Finished in: <span> ${place} </span> place with a time of <span> ${raceTime2} </span> miliseconds! </p>
                             </div>`
            );
            localStorage.setItem("timeSecondCar", `${raceTime2}`);
            localStorage.setItem("positionSecondCar", `${place}`);
            $(".finishLine").show();
          }
        );
      }
    }, 1000);
  });
  $(".reset").on("click", function () {
    $(".result-car-1").empty();
    $(".result-car-2").empty();

    $(".cars").css("margin-left", "0");
    $(".finishLine").hide();
    $(".raceTrack").removeClass("race-track-darken");
  });

  function lastResults() {
    if (
      !localStorage.getItem("timeFirstCar") ||
      !localStorage.getItem("timeSecondCar")
    ) {
      return;
    }
    let firstCarRes = localStorage.getItem("positionFirstCar");
    let firstCarTime = localStorage.getItem("timeFirstCar");
    let secondCarRes = localStorage.getItem("positionSecondCar");
    let secondCarTime = localStorage.getItem("timeSecondCar");

    $(".car-1-last-race").append(`
 <p> <span> Car1 </span> finished in <span> ${firstCarRes} </span> place, with a time of  <span>${firstCarTime}</span> miliseconds!
 `);
    $(".car-2-last-race").append(`
 <p><span>Car2 </span>  finished in <span> ${secondCarRes} </span> place, with a time of <span> ${secondCarTime} </span> miliseconds!
 `);
  }
  lastResults();
});
