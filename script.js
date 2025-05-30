
const pages = {
  home: `
    <section class="intro">
      <h2>Bem-vindo ao Folclore de Atibaia</h2>
      <p>Explore mitos e lendas que moldaram nossa cultura. Descubra histórias fascinantes dos personagens mais icônicos do folclore brasileiro.</p>
    </section>
  `,
  lendas: `
    <section class="lendas">
      <div class="lenda-card">
        <img src="" alt="Saci">
        <div class="lenda-content">
          <h2>Saci-Pererê</h2>
          <p>Menino travesso com uma perna só e gorro vermelho. Surge em redemoinhos e adora aprontar.</p>
        </div>
      </div>
      <div class="lenda-card">
        <img src="" alt="Iara">
        <div class="lenda-content">
          <h2>Iara</h2>
          <p>Sereia encantadora dos rios, atrai com seu canto os viajantes desavisados.</p>
        </div>
      </div>
      <div class="lenda-card">
        <img src="" alt="Curupira">
        <div class="lenda-content">
          <h2>Curupira</h2>
          <p>Guardião da floresta com pés virados para trás, confunde e protege contra invasores.</p>
        </div>
      </div>
      <div class="lenda-card">
        <img src="" alt="Boitatá">
        <div class="lenda-content">
          <h2>Boitatá</h2>
          <p>Cobra de fogo que defende a natureza contra destruição e queimadas.</p>
        </div>
      </div>
    </section>
  `,
  sobre: `
    <section>
      <h2>Sobre o Projeto</h2>
      <p>Este site foi criado como uma apresentação interativa para destacar o folclore de Atibaia, unindo tradição, tecnologia e cultura brasileira.</p>
    </section>
  `
};

function navigateTo(page) {
  const content = document.getElementById("content");
  content.style.opacity = 0;
  setTimeout(() => {
    content.innerHTML = pages[page];
    content.style.animation = 'none';
    void content.offsetWidth; // reflow para resetar a animação
    content.style.animation = '';
    content.style.animation = 'fadeIn 0.6s forwards';
  }, 300);
}

window.onload = () => {
  navigateTo('home');
};
