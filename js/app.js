document.addEventListener("DOMContentLoaded", function () {
  const nftMarker = document.getElementById("nft-marker");
  const dinoSound = document.getElementById("dino-sound");

  nftMarker.addEventListener("markerFound", () => {
    dinoSound.components.sound.playSound();
  });

  nftMarker.addEventListener("markerLost", () => {
    dinoSound.components.sound.stopSound();
  });
});
