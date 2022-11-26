
import {Gradient} from "../../components/Gradient";
import { View } from "react-native";
import { Container, Card, CardImagem, Title, Descricao } from "./styles.js";
import {Header} from "../../components/Header";
import {Footer} from "../../components/Footer";

export const Favoritos = () => {
  return (
    <Container>
            <Gradient />
            <Header title="Favoritos" />
           <View>
           <Card>
                <CardImagem source={imagem} />
                <View>
                    <Title>Produto 2</Title>
                    <Title>Preco R$ 50,00</Title>
                    <Descricao>1 unidade em estoque</Descricao>
                </View>
            </Card>
         </View>
         <View>
           <Card>
                <CardImagem source={imagem} />
                <View>
                    <Title>Produto 5</Title>
                    <Title>Preco R$ 40,00</Title>
                    <Descricao>20 unidades em estoque</Descricao>
                </View>
            </Card>
         </View>
         <View>
           <Card>
                <CardImagem source={imagem} />
                <View>
                    <Title>Produto 6</Title>
                    <Title>Preco R$ 70,00</Title>
                    <Descricao>1 unidades em estoque</Descricao>
                </View>
            </Card>
         </View>
         <Footer />
      </Container>
  );
}