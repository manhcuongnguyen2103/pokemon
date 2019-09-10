import React from 'react';
import { Layout, Typography } from 'antd';
import { Provider } from 'mobx-react'

import Header from './containers/Header'
import Contain from './containers/Contain'
import RootStore from './stores/RootStore'

const { Text } = Typography;
const { Footer, Content } = Layout;
function App() {
  return (
    <Provider rootStore={new RootStore()}>
      <Layout>
        {/* <Header style={{minHeight: '10vh', backgroundColor: '#95b2f1', textAlign: "center"}}>
          <Icon type="crown" />
          <Text underline>POKEMON!!!</Text>
        </Header> */}
        
        <Header />
        <Content style={{minHeight: '80vh'}}>
          <Contain />
        </Content>

        <Footer style={{minHeight: '10vh', backgroundColor: '#95b2f1', textAlign: "center"}}><Text underline>POKEMON LEG!!!</Text></Footer>
      </Layout>
    </Provider>
  );
}
export default App;
