import SectionCard from "../../components/SectionCard";
import NavMenu from "../../navbar";
import { ContainerMenu } from "./styled";

import icone from '../../assets/livro_icone.png';
import lupa from '../../assets/lupa-icon.png'
import binoculo from '../../assets/binoculo-icon.png';
import notbook from '../../assets/notebook-icon.png';

import CardUs from "../../components/CardUs";


function Home() {
    return (
        <ContainerMenu>

            <main>
                <NavMenu photo={lupa} img={icone} />
                <div className="jumbotron mt-2 border-bottom border-success">
                    <h1>Bem Vindo!</h1>
                    <h3>Entre e descubra o poder da leitura. Temos muitos conteúdos para te ajudar nessa jornada.</h3>
                </div>
                <div>
                    <h2 className="ml-5">Conheça a Plataforma!</h2>
                    <br></br>
                </div>
                <section>
                    <SectionCard title="Se Prepare Jogando!" subtitle="Conheça o Portuga! Nosso game interativo onde você pode responder perguntas comentadas
                    sobre assuntos diversos, concursos e vestibulares.">
                    </SectionCard>

                    <SectionCard title="Encontre novas Histórias!" subtitle="Temos uma variedade de Ebooks que podem ser baixados gratuitamente!
                    Passeie pelas nossas categorias.">
                    </SectionCard>

                    <SectionCard title="Faça parte da Comunidade Solidária" subtitle="Temos uma variedade de Ebooks que podem ser baixados gratuitamente!
                    Passeie pelas nossas categorias.">
                    </SectionCard>
                </section>
                <div>
                    <h2 className="ml-5 mt-5 box-sob">Sobre Nós</h2>
                    <br></br>
                    <CardUs photo={notbook}/>
                </div>
            </main>
        </ContainerMenu>

    );
}

export default Home;