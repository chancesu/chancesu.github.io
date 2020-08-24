import StoreProvider from '../Store';

const Chancesu = ({ Component, pageProps }) => {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  )
}

export default Chancesu;