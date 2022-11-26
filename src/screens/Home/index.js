
import {Gradient} from "../../components/Gradient";
import {  View } from "react-native";
import { Container,  Card, CardImagem, Title, Descricao } from "./styles.js";
import {Header} from "../../components/Header";
import {Footer} from "../../components/Footer";

export const Home = () => {
  
  return (
    <Container>
      <Gradient />
      <Header title="Marketplace" />
      <Card>
                <CardImagem source={imagem} />
                <View>
                    <Title>Sobre nos...</Title>
                    <Title>{preco}</Title>
                    <Descricao>Lorem Ipsum is simply dummy text of the printing and 
                      typesetting industry.Lorem Ipsum has been the industry's
                      unchanged.It was popularised in the 1960s with the release of
                      Letraset sheets containing Lorem Ipsum passages, and more
                      recently with desktop publishing software like Aldus PageMaker 
                      including versions of Lorem Ipsum.</Descricao>
                </View>
                <View>
                    <Title>Categorias +</Title>
                    <CardImagem source={imagem} />
                    <CardImagem source={imagem} />
                    <CardImagem source={imagem} />
                </View>
                <View>
                    <Title>Criadores</Title>
                    <Descricao>Alex 
                      Beatrix
                      Carlos 
                      Alie</Descricao>
                </View>
            </Card>
            <Footer />
      <StatusBar style="auto" />
    </Container>
  );
}
