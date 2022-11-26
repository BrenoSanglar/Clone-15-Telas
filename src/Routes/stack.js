import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SenhaAlterada } from "../screens/SenhaAlterada";
import { EsqueciMinhaSenha } from "../screens/EsqueciMinhaSenha";
import { RecuperacaoDeSenha } from "../screens/RecuperacaoDeSenha";
import { Login } from "../screens/Login";
import { Produtos } from "../screens/Produtos";
import { CadastroProduto } from "../screens/CadastroProduto";
import { Cadastro } from "../screens/Cadastro";
import { ConfirmacaoDeCadastro } from "../screens/ConfirmacaoDeCadastro";
import { Home } from "../screens/Home";
import { Favoritos } from "../screens/Favoritos";
import { Carrinho } from "../screens/Carrinho";
import { EdicaoProduto } from "../screens/EdicaoProduto";

const { Screen, Navigator } = createNativeStackNavigator();


export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Carrinho"
    >
      <Screen name="Login" component={Login} />
      <Screen name="EsqueciMinhaSenha" component={EsqueciMinhaSenha} />
      <Screen name="SenhaAlterada" component={SenhaAlterada} />
      <Screen name="RecuperacaoDeSenha" component={RecuperacaoDeSenha} />
      <Screen name="Produtos" component={Produtos} />
      <Screen name="CadastroProduto" component={CadastroProduto} />
      <Screen name="Cadastro" component={Cadastro} />
      <Screen name="ConfirmacaoDeCadastro" component={ConfirmacaoDeCadastro} />
      <Screen name="EdicaoProduto" component={EdicaoProduto} />
      
      
      <Screen name="Home" component={Home} />
      <Screen name="Favoritos" component={Favoritos} />
      <Screen name="Carrinho" component={Carrinho} />
    </Navigator>
  );
}
