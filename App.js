import { StatusBar } from 'react-native';
import Navigation from './navigator/Navigation';
import { RecoilRoot } from 'recoil';

export default function App() {
  return (
    <>
      <RecoilRoot>
        <StatusBar style='dark' />
        <Navigation />
      </RecoilRoot>
    </>
  );
}
