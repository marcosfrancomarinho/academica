import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Card } from '../components/Card';

import enfermagemUrl from '../../public/enfermagem.png';
import eletricistaUrl from '../../public/eletricista.avif';
import programadorUrl from '../../public/progamador.avif';
import artesanatoUrl from '../../public/artesenato.jpg';
 
export const Projects: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow px-4 py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            url={enfermagemUrl}
            title="Curso de Enfermagem"
            content="O curso de Enfermagem forma profissionais capacitados para cuidar da saúde e bem-estar das pessoas. Com aulas teóricas e práticas, o aluno aprende sobre anatomia, primeiros socorros, medicamentos e cuidados com o paciente. O enfermeiro pode atuar em hospitais, clínicas, postos de saúde e atendimentos domiciliares."
          />
          <Card
            url={artesanatoUrl}
            title="Curso de Artesanato"
            content="Aprenda técnicas manuais para criar peças exclusivas com tecido, papel, madeira e outros materiais. Desenvolva sua criatividade, gere renda extra e transforme seu talento em um negócio. Curso prático, acessível e voltado para todos os níveis."
          />
          <Card
            url={eletricistaUrl}
            title="Curso de Eletricista"
            content="Aprenda os fundamentos da eletricidade, instalação de sistemas elétricos, leitura de projetos, segurança e normas técnicas. Ideal para quem busca uma profissão prática, com alta demanda no mercado de trabalho. Curso rápido, com foco em capacitação profissional e entrada imediata no mercado."
          />
          <Card
            url={programadorUrl}
            title="Curso de Programação"
            content="Aprenda a criar sites, sistemas e aplicativos do zero. Neste curso, você vai dominar os principais fundamentos da lógica de programação, linguagens como JavaScript e Python, e desenvolver projetos práticos. Ideal para quem quer iniciar na área de tecnologia e conquistar boas oportunidades no mercado."
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};
