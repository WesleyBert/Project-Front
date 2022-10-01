import NavMenu from "../../components/navbar";
import EbookCard from "../../components/EbookCard";

import Virgem from '../../assets/avirger.jpg'
import Herry from '../../assets/herry.jpg';
import Estrelas from '../../assets/aculpaDasEstrelas.jpg';
import Capitao from '../../assets/capitãesDaAreia.jpg';
import anneFrank from '../../assets/anneFrank.jpg';
import Mulheres from '../../assets/MulheresLobos.jpg';


import { EbookUIX } from "./styled";
import MenuSide from "../../components/MenuSide";


function Ebook() {
    return (
        <main>
            <NavMenu />
            <EbookUIX>
                <section>
                    <EbookCard photo={Virgem} down="Baixar" favorite="Favoritar" />
                    <EbookCard photo={Herry} down="Baixar" favorite="Favoritar" />
                    <EbookCard photo={Estrelas} down="Baixar" favorite="Favoritar" />
                    <EbookCard photo={Capitao} down="Baixar" favorite="Favoritar" />
                    <EbookCard photo={anneFrank} down="Baixar" favorite="Favoritar" />
                    <EbookCard photo={Mulheres} down="Baixar" favorite="Favoritar" />
                </section>
                <div className="side">
                    <MenuSide />
                </div>
            </EbookUIX>
        </main>
    );
}
export default Ebook;