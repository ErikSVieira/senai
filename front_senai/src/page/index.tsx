import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import Menu from "../components/menu";

const Index = () => {
    return (
        <div className="container max-w-full bg-senai-100">
            <Header />
            <Menu />
            <Banner />
            <div className="container flex justify-center max-w-senai-full gap-10 p-10">
                <div className="flex flex-col bg-white px-12 py-20 gap-12">
                    <div className="w-senai-2 h-senai-2">
                        <img src="/public/images/Slides.png" alt="" />
                    </div>

                    <div className="flex justify-between">
                        <div className="container flex items-center justify-center text-center align-middle rounded-full bg-senai-300 text-senai-700 shadow-lg w-9 h-9">
                            <strong className="text-2xl">
                                &#60;
                            </strong>
                        </div>
                        <div className="container flex items-center justify-center text-center align-middle rounded-full bg-senai-300 text-senai-700 shadow-lg w-9 h-9">
                            <strong className="text-2xl">
                                &#62;
                            </strong>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center max-w-[1039px]">
                    <h1 className="font-bold text-senai-500 text-3xl pb-8">Campanha MS Pela Vida já enviou mais de 50 toneladas de doações ao RS e em breve SENAI MS tomará a frente nos reparos de danos</h1>
                    <p className="text-senai-700 text-2xl pb-6">Após uma semana de operação, a campanha MS Pela Vida - Unidos pelo Rio Grande do Sul contabiliza números superlativos. Mais de 213 mil itens básicos doados pela população sul-mato-grossense abastecem caminhões e aeronaves que partem diariamente com destino ao sul do país, em socorro às vítimas do maior desastre ambiental em solo gaúcho. Mais de 50 toneladas de donativos já foram enviadas ao sul do país, em uma ação que contou com o trabalho de 1,5 mil voluntários até o momento.</p>

                    <p className="text-senai-700 text-2xl">O Presidente da FIEMS, Sérgio Longen, comenta os próximos passos da campanha: "A catástrofe do Rio Grande do Sul nos traz um alerta para o clima. Precisamos entender essa mensagem e avaliar como implementar ações que evitem essa realidade em mais ocasiões. <strong>Mas agora a tarefa de casa brasileiro é atuar em socorro ao Rio Grande do Sul, e por este motivo em breve o SENAI tomará a linha de frente na luta para reparar os danos nas cidades gaúchas.</strong></p>
                </div>
            </div>

            <div className="container flex justify-center gap-14 max-w-senai-full bg-white px-20 py-10">
                <div className="max-w-[757px]">
                    <h1 className="font-bold text-senai-500 text-3xl pb-8">Próximos passos para reconstruir o RS</h1>

                    <p className="text-senai-700 text-2xl pb-6">Mais do que arrecadações, é importante oferecer esperança de recomeço às famílias que perderam tudo nas enchentes do Rio Grande do Sul. Neste sentido, o Sistema Fiems, por meio do Senai, está enviando duas unidades móveis para serem enviadas às cidades atingidas pelo desastre climático com serviços de eletrotécnica e marcenaria.</p>

                    <p className="text-senai-700 text-2xl pb-6">A expectativa é enviar inicialmente uma equipe 26 pessoas, entre <strong>engenheiros, professores e técnicos.</strong></p>

                    <p className="text-senai-700 text-2xl font-bold">Tem interesse em se voluntariar? Preencha o formulário e se inscreva para ajuda as vítimas da maior catástrofe natural do Sul do país.</p>
                </div>

                <div className="relative w-[630px] h-[400px] rounded-lg overflow-hidden ">
                    <div className="absolute inset-0 rounded-lg shadow-inner-white">
                    </div>
                    <div className="rounded-sm w-[630px] h-[400px]" style={{ backgroundImage: 'url(/public/images/image%202.png)', backgroundSize: 'cover', backgroundPosition: 'right center' }}></div>
                </div>
            </div>


            <Footer />
        </div>
    );
}

export default Index;