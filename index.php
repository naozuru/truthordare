<?php include 'components/header.php'; ?>

    <div class="container d-flex">
      <div class="card text-center">
        <div class="card-header">
          <h1 class="card-title">Truth or Dare</h1>
          <button id="modeToggle" class="btn btn-link text-secondary">
            <i id="modeIcon" class="bi bi-moon-stars-fill"></i>
          </button>
        </div>
        <div class="card-body">
          <button id="truthButton" class="btn btn-primary btn-lg mr-3">
            <i class="bi bi-question-lg"></i>
            Truth
          </button>
          <button id="dareButton" class="btn btn-danger btn-lg">
            <i class="bi bi-lightning-charge-fill"></i>Dare
          </button>
          <p id="result" class="result card-text">
            Siap untuk mengungkapkan beberapa rahasia lucu atau menantang dirimu
            sendiri? Pilih 'Truth' atau 'Dare' dan mari bersenang-senang bersama
            dalam permainan Truth or Dare kali ini!
          </p>
        </div>
      </div>
    </div>

<?php include 'components/footer.php'; ?>