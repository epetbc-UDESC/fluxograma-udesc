const fases = [
  { numero: 1, titulo: "1a fase" },
  { numero: 2, titulo: "2a fase" },
  { numero: 3, titulo: "3a fase" },
  { numero: 4, titulo: "4a fase" },
  { numero: 5, titulo: "5a fase" },
  { numero: 6, titulo: "6a fase" },
  { numero: 7, titulo: "7a fase" },
  { numero: 8, titulo: "8a fase" },
  { numero: 9, titulo: "9a fase" },
  { numero: 10, titulo: "10a fase" }
];

const materias = [
  // 1ª FASE
  { id: "calc1", nome: "Cálculo Dif Int I", fase: 1, linha: 0, prereqs: [], correqs: [], corLinha: "#d62728" },
  { id: "intro_pet", nome: "Introdução Eng Petróleo", fase: 1, linha: 1, prereqs: [], correqs: [], corLinha: "#e6550d" },
  { id: "ga", nome: "Geometria Analítica", fase: 1, linha: 2, prereqs: [], correqs: [], corLinha: "#756bb1" },
  { id: "qg", nome: "Química Geral", fase: 1, linha: 3, prereqs: [], correqs: [], corLinha: "#d62728" },
  { id: "dt", nome: "Desenho Técnico", fase: 1, linha: 4, prereqs: [], correqs: [], corLinha: "#636363" },
  { id: "qe1", nome: "Química Exper I", fase: 1, linha: 5, prereqs: [], correqs: [], corLinha: "#9467bd" },

  // 2ª FASE
  { id: "calc2", nome: "Cálculo Dif Int II", fase: 2, linha: 0, prereqs: ["calc1"], correqs: [], corLinha: "#ea08ff" },
  { id: "fis1", nome: "Física I", fase: 2, linha: 1, prereqs: ["calc1"], correqs: [], corLinha: "#1f77b4" },
  { id: "al", nome: "Álgebra Linear", fase: 2, linha: 2, prereqs: ["ga"], correqs: [], corLinha: "#6b6ecf" },
  { id: "qo1", nome: "Química Orgânica I", fase: 2, linha: 3, prereqs: [], correqs: [], corLinha: "#8c564b" },
  { id: "estat", nome: "Estatística Descritiva", fase: 2, linha: 4, prereqs: [], correqs: [], corLinha: "#636363" },
  { id: "qe2", nome: "Química Exper II", fase: 2, linha: 5, prereqs: ["qe1"], correqs: [], corLinha: "#9467bd" },
  { id: "cm", nome: "Ciência dos Materiais", fase: 2, linha: 6, prereqs: [], correqs: [], corLinha: "#636363" },
  { id: "fe1", nome: "Física Exper I", fase: 2, linha: 7, prereqs: [], correqs: ["fis1"], corLinha: "#756bb1" },

  // 3ª FASE
  { id: "calc3", nome: "Cálculo Dif Int III", fase: 3, linha: 0, prereqs: ["calc2"], correqs: [], corLinha: "#2ca02c" },
  { id: "fis2", nome: "Física II", fase: 3, linha: 1, prereqs: ["fis1"], correqs: [], corLinha: "#1f77b4" },
  { id: "geol_ger", nome: "Geologia Geral", fase: 3, linha: 2, prereqs: ["intro_pet"], correqs: [], corLinha: "#17becf" },
  { id: "qo2", nome: "Química Orgânica II", fase: 3, linha: 3, prereqs: ["qo1"], correqs: [], corLinha: "#8c564b" },
  { id: "prog1", nome: "Linguagem Progr I", fase: 3, linha: 4, prereqs: [], correqs: [], corLinha: "#2ca02c" },
  { id: "estatica", nome: "Estática", fase: 3, linha: 5, prereqs: ["fis1"], correqs: [], corLinha: "#17becf" },
  { id: "fe2", nome: "Física Exper II", fase: 3, linha: 7, prereqs: ["fe1"], correqs: ["fis2"], corLinha: "#0befff" },

  // 4ª FASE
  { id: "eq_dif", nome: "Equações Diferenciais", fase: 4, linha: 0, prereqs: ["calc2", "al"], correqs: [], corLinha: "#bcbd22" },
  { id: "fis3", nome: "Física III", fase: 4, linha: 1, prereqs: ["fis1", "calc2"], correqs: [], corLinha: "#e377c2" },
  { id: "geol_pet", nome: "Geologia do Petróleo", fase: 4, linha: 2, prereqs: ["geol_ger"], correqs: [], corLinha: "#d62728" },
  { id: "fis_quim", nome: "Introd Físico Química", fase: 4, linha: 3, prereqs: ["qg"], correqs: [], corLinha: "#2ca02c" },
  { id: "met_num1", nome: "Métodos Numéricos I", fase: 4, linha: 4, prereqs: ["al", "prog1", "calc2"], correqs: [], corLinha: "#ff7f0e" },
  { id: "res_mat", nome: "Resist dos Materiais", fase: 4, linha: 5, prereqs: ["estatica"], correqs: [], corLinha: "#9467bd" },
  { id: "gest_lid", nome: "Gestão e Liderança", fase: 4, linha: 6, prereqs: [], correqs: [], corLinha: "#636363", reqTexto: "70% dos créditos (Fases 1 a 3)" },
  { id: "fe3", nome: "Física Exper III", fase: 4, linha: 7, prereqs: ["fe1"], correqs: ["fis3"], corLinha: "#756bb1" },

  // 5ª FASE
  { id: "mec_flu", nome: "Mecânica Fluidos", fase: 5, linha: 0, prereqs: ["calc3", "fis_quim"], correqs: [], corLinha: "#1f77b4" },
  { id: "termo", nome: "Termo Aplic Petróleo", fase: 5, linha: 1, prereqs: ["fis_quim", "met_num1"], correqs: [], corLinha: "#17becf" },
  { id: "geofis", nome: "Geofísica", fase: 5, linha: 2, prereqs: ["geol_pet"], correqs: [], corLinha: "#e377c2" },
  { id: "instr_med", nome: "Instr Med Petróleo", fase: 5, linha: 3, prereqs: ["eq_dif"], correqs: [], corLinha: "#2ca02c" },
  { id: "met_num2", nome: "Métodos Numéricos II", fase: 5, linha: 4, prereqs: ["met_num1", "eq_dif"], correqs: [], corLinha: "#ff7f0e" },
  { id: "geomec", nome: "Geomecânica", fase: 5, linha: 5, prereqs: ["geol_pet", "res_mat"], correqs: [], corLinha: "#8c564b" },
  { id: "energ_ren", nome: "Fund Energias Ren (UCEA)", fase: 5, linha: 6, prereqs: ["fis3"], correqs: [], corLinha: "#636363" },

  // 6ª FASE
  { id: "maq_fluxo", nome: "Máquinas de Fluxo", fase: 6, linha: 0, prereqs: ["mec_flu"], correqs: [], corLinha: "#1f77b4" },
  { id: "transf_cal", nome: "Transf de Calor", fase: 6, linha: 1, prereqs: ["termo"], correqs: [], corLinha: "#ff7f0e" },
  { id: "est_geol", nome: "Estudo Geol. de Campo", fase: 6, linha: 2, prereqs: ["geol_pet"], correqs: [], corLinha: "#636363" },
  { id: "eng_res1", nome: "Engenharia Reserv I", fase: 6, linha: 3, prereqs: ["termo"], correqs: [], corLinha: "#7f7f7f" },
  { id: "esc_mult", nome: "Escoamento Multifásico", fase: 6, linha: 4, prereqs: ["termo"], correqs: ["eng_sub"], corLinha: "#1f77b4", reqTexto: "70% dos créditos (Fases 1 a 5)" },
  { id: "eng_poco1", nome: "Engenharia de Poço I", fase: 6, linha: 5, prereqs: ["mec_flu"], correqs: [], corLinha: "#2ca02c" },
  { id: "eng_sub", nome: "Engenharia Submarina", fase: 6, linha: 6, prereqs: [], correqs: [], corLinha: "#9467bd", reqTexto: "70% dos créditos (Fases 1 a 5)"},
  { id: "opt1", nome: "Optativa I", fase: 6, linha: 7, prereqs: [], correqs: [], corLinha: "#636363" },
  { id: "uceb", nome: "UCEB", fase: 6, linha: 8, prereqs: [], correqs: [], corLinha: "#636363" },

  // 7ª FASE
  { id: "gest_proj", nome: "Gestão de Projetos", fase: 7, linha: 0, prereqs: [], correqs: [], corLinha: "#636363", reqTexto: "70% dos créditos (Fases 1 a 6)" },
  { id: "transf_massa", nome: "Transf de Massa", fase: 7, linha: 1, prereqs: ["transf_cal"], correqs: [], corLinha: "#d62728" },
  { id: "sist_contr", nome: "Sist Contr Automação", fase: 7, linha: 2, prereqs: ["instr_med"], correqs: [], corLinha: "#636363" },
  { id: "eng_res2", nome: "Engenharia Reserv II", fase: 7, linha: 3, prereqs: ["eng_res1"], correqs: [], corLinha: "#d62728" },
  { id: "met_elev", nome: "Métodos de Elevação", fase: 7, linha: 4, prereqs: ["esc_mult", "maq_fluxo"], correqs: [], corLinha: "#d62728" },
  { id: "eng_poco2", nome: "Engenharia de Poço II", fase: 7, linha: 5, prereqs: ["eng_poco1", "geomec"], correqs: [], corLinha: "#2ca02c" },
  { id: "proj_int1", nome: "Projeto Integrado I", fase: 7, linha: 6, prereqs: [], correqs: ["eng_poco2"], corLinha: "#8c564b" },
  { id: "econ_pet", nome: "Economia Petróleo", fase: 7, linha: 7, prereqs: [], correqs: [], corLinha: "#bcbd22", reqTexto: "70% dos créditos (Fases 1 a 6)" },
  { id: "opt2", nome: "Optativa II", fase: 7, linha: 8, prereqs: [], correqs: [], corLinha: "#636363" },

  // 8ª FASE
  { id: "testes_pocos", nome: "Testes de Poços", fase: 8, linha: 0, prereqs: ["eng_res2"], correqs: [], corLinha: "#2ca02c" },
  { id: "proc_prim", nome: "Processam Prim Petr", fase: 8, linha: 1, prereqs: ["met_elev"], correqs: [], corLinha: "#9467bd" },
  { id: "log_int", nome: "Logística Integrada", fase: 8, linha: 2, prereqs: [], correqs: [], corLinha: "#636363", reqTexto: "70% dos créditos (Fases 1 a 7)" },
  { id: "sim_res", nome: "Simulação Reservatórios", fase: 8, linha: 3, prereqs: ["eng_res2"], correqs: [], corLinha: "#636363" },
  { id: "gar_esc", nome: "Garantia de Escoamento", fase: 8, linha: 4, prereqs: ["met_elev", "transf_massa"], correqs: [], corLinha: "#636363" },
  { id: "eng_poco3", nome: "Engenharia de Poço III", fase: 8, linha: 5, prereqs: ["eng_poco2"], correqs: [], corLinha: "#636363" },
  { id: "proj_int2", nome: "Projeto Integrado II", fase: 8, linha: 6, prereqs: ["proj_int1", "eng_res2"], correqs: [], corLinha: "#8c564b" },
  { id: "imp_amb", nome: "Impactos Ambientais", fase: 8, linha: 7, prereqs: [], correqs: [], corLinha: "#636363", reqTexto: "70% dos créditos (Fases 1 a 7)" },
  { id: "opt3", nome: "Optativa III", fase: 8, linha: 8, prereqs: [], correqs: [], corLinha: "#636363" },

  // 9ª FASE
  { id: "rec_avanc", nome: "Fund Recup Avançada", fase: 9, linha: 0, prereqs: ["testes_pocos"], correqs: [], corLinha: "#636363" },
  { id: "proc_og", nome: "Process Óleo e Gás", fase: 9, linha: 1, prereqs: ["proc_prim"], correqs: [], corLinha: "#636363" },
  { id: "sst", nome: "Saúde Seg Trabalho", fase: 9, linha: 2, prereqs: [], correqs: [], corLinha: "#636363", reqTexto: "70% dos créditos (Fases 1 a 8)" },
  { id: "aval_proj", nome: "Aval Proj Óleo e Gás", fase: 9, linha: 3, prereqs: ["econ_pet"], correqs: [], corLinha: "#636363" },
  { id: "ger_riscos", nome: "Gerenc Riscos Amb", fase: 9, linha: 4, prereqs: [], correqs: [], corLinha: "#636363", reqTexto: "70% dos créditos (Fases 1 a 8)" },
  { id: "proj_int3", nome: "Projeto Integrado III", fase: 9, linha: 6, prereqs: ["proj_int2"], correqs: [], corLinha: "#636363" },
  { id: "opt4", nome: "Optativa IV", fase: 9, linha: 7, prereqs: [], correqs: [], corLinha: "#636363" },

  // 10ª FASE
  { id: "estagio", nome: "Estágio Superv", fase: 10, linha: 0, prereqs: [], correqs: [], corLinha: "#636363" },
  { id: "pcc", nome: "Proj Concl Curso", fase: 10, linha: 1, prereqs: [], correqs: [], corLinha: "#636363" }
];

let materiaSelecionadaId = null;

function renderizarFluxograma() {
  const grade = document.getElementById("grade-fases");
  grade.innerHTML = "";

  const maiorLinha = Math.max(...materias.map(m => m.linha), 8);

  fases.forEach(faseObj => {
    const coluna = document.createElement("div");
    coluna.className = "coluna-fase";
    coluna.dataset.fase = faseObj.numero;

    const topoFase = document.createElement("div");
    topoFase.className = "caixa-fase";
    topoFase.textContent = faseObj.titulo;
    coluna.appendChild(topoFase);

    for (let linhaIdx = 0; linhaIdx <= maiorLinha; linhaIdx++) {
      const mat = materias.find(m => m.fase === faseObj.numero && m.linha === linhaIdx);

      if (mat) {
        const caixa = document.createElement("div");
        caixa.className = "caixa-materia";
        caixa.id = "box-" + mat.id;
        caixa.dataset.id = mat.id;

        caixa.innerHTML = `<span>${mat.nome}</span>`;
        caixa.addEventListener("click", () => selecionarMateria(mat.id));
        coluna.appendChild(caixa);
      } else {
        const vazio = document.createElement("div");
        vazio.className = "slot-vazio";
        coluna.appendChild(vazio);
      }
    }

    grade.appendChild(coluna);
  });

  requestAnimationFrame(desenharLinhas);
}

function desenharLinhas() {
  const svg = document.getElementById("camada-linhas");
  const area = document.getElementById("area-desenho");
  svg.innerHTML = "";

  const rectArea = area.getBoundingClientRect();
  svg.setAttribute("width", area.scrollWidth);
  svg.setAttribute("height", area.scrollHeight);

  let contadorCorredor = 0;

  materias.forEach(destino => {
    const todasConexoes = [
      ...destino.prereqs.map(id => ({ idOrigem: id, tipo: "prereq" })),
      ...(destino.correqs || []).map(id => ({ idOrigem: id, tipo: "correq" }))
    ];

    todasConexoes.forEach(conexao => {
      const origem = materias.find(m => m.id === conexao.idOrigem);
      if (!origem) return;

      const elOrigem = document.getElementById("box-" + origem.id);
      const elDestino = document.getElementById("box-" + destino.id);
      if (!elOrigem || !elDestino) return;

      const rOrig = elOrigem.getBoundingClientRect();
      const rDest = elDestino.getBoundingClientRect();

      const x1 = rOrig.right - rectArea.left;
      const y1 = rOrig.top - rectArea.top + rOrig.height / 2;
      const x2 = rDest.left - rectArea.left;
      const y2 = rDest.top - rectArea.top + rDest.height / 2;

      contadorCorredor++;
      const deslocamento = ((contadorCorredor % 5) - 2) * 4;

      let caminhoSVG = "";

      // CORREÇÃO: A linha agora percorre corretamente o eixo Y (descendo/subindo) e entra na caixa do destino.
      if (origem.fase === destino.fase) {
        const xLateral = x1 + 14 + deslocamento;
        caminhoSVG = `M ${x1} ${y1} L ${xLateral} ${y1} L ${xLateral} ${y2} L ${rDest.right - rectArea.left} ${y2}`;
      } else if (destino.fase - origem.fase === 1) {
        const xMeio = (x1 + x2) / 2 + deslocamento;
        caminhoSVG = `M ${x1} ${y1} L ${xMeio} ${y1} L ${xMeio} ${y2} L ${x2} ${y2}`;
      } else {
        const xSaida = x1 + 14 + deslocamento;
        const yCorredor = y1 + (rOrig.height / 2) + 11 + deslocamento;
        const xEntrada = x2 - 14 + deslocamento;
        caminhoSVG = `M ${x1} ${y1} L ${xSaida} ${y1} L ${xSaida} ${yCorredor} L ${xEntrada} ${yCorredor} L ${xEntrada} ${y2} L ${x2} ${y2}`;
      }

      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", caminhoSVG);
      path.setAttribute("fill", "none");
      path.setAttribute("stroke", origem.corLinha || "#1f77b4");
      path.setAttribute("stroke-width", "2.2");

      if (conexao.tipo === "correq") {
        path.setAttribute("stroke-dasharray", "5,4");
      }

      if (materiaSelecionadaId) {
        const envolvida = materiaSelecionadaId === origem.id || materiaSelecionadaId === destino.id;
        path.setAttribute("opacity", envolvida ? "1" : "0.12");
        if (envolvida) path.setAttribute("stroke-width", "3.4");
      } else {
        path.setAttribute("opacity", "0.85");
      }

      svg.appendChild(path);
    });
  });
}

function selecionarMateria(id) {
  if (materiaSelecionadaId === id) {
    limparSelecao();
    return;
  }

  materiaSelecionadaId = id;
  const mat = materias.find(m => m.id === id);
  const painel = document.getElementById("painel-info");

  const dependentes = materias.filter(
    m => m.prereqs.includes(id) || (m.correqs && m.correqs.includes(id))
  );

  materias.forEach(m => {
    const el = document.getElementById("box-" + m.id);
    if (!el) return;
    el.classList.remove("selecionada", "prereq-ativo", "dependente-ativo", "esmaecida");

    if (m.id === id) {
      el.classList.add("selecionada");
    } else if (mat.prereqs.includes(m.id) || (mat.correqs && mat.correqs.includes(m.id))) {
      el.classList.add("prereq-ativo");
    } else if (dependentes.some(d => d.id === m.id)) {
      el.classList.add("dependente-ativo");
    } else {
      el.classList.add("esmaecida");
    }
  });

  const nomesPrereqs = mat.prereqs
    .map(pid => materias.find(x => x.id === pid)?.nome)
    .filter(Boolean);
  const nomesCorreqs = (mat.correqs || [])
    .map(cid => materias.find(x => x.id === cid)?.nome)
    .filter(Boolean);
  const nomesDeps = dependentes.map(d => d.nome);

  let htmlInfo = `📌 <strong>${mat.nome} (${mat.fase}ª fase)</strong> | `;
  htmlInfo += `<span style="color:#b91c1c"><strong>Pré-requisitos:</strong> ${nomesPrereqs.length ? nomesPrereqs.join(", ") : (mat.reqTexto || "Nenhum")}</span>`;
  if (nomesCorreqs.length) {
    htmlInfo += ` | <strong>Correquisito:</strong> ${nomesCorreqs.join(", ")}`;
  }
  htmlInfo += ` | <span style="color:#047857"><strong>Libera:</strong> ${nomesDeps.length ? nomesDeps.join(", ") : "Nenhuma"}</span>`;

  painel.innerHTML = htmlInfo;
  desenharLinhas();
}

function limparSelecao() {
  materiaSelecionadaId = null;
  document.querySelectorAll(".caixa-materia").forEach(el => {
    el.classList.remove("selecionada", "prereq-ativo", "dependente-ativo", "esmaecida");
  });
  document.getElementById("painel-info").innerHTML =
    "💡 <strong>Dica:</strong> Clique em qualquer matéria para destacar seus pré-requisitos (amarelo/vermelho) e quais matérias ela libera (verde).";
  desenharLinhas();
}

window.addEventListener("resize", desenharLinhas);
window.addEventListener("DOMContentLoaded", renderizarFluxograma);