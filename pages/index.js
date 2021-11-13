import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from './components/Layout';

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Propiedades</h1>
        <ul>
          <li>
            Alquiler, cod:001, Cangrejo Apt, 60mts, 1 hab, 1 bañ, Linea blanca
          </li>
          <li>Alquiler, cod:002, Obarrio Apt, 70mts, 2 hab, 1 bañ, Amoblado</li>
          <li>
            Alquiler, cod:003, Ave balboa Apt, 80mts, 2 hab, 1 bañ, Linea blanca
          </li>
          <li>
            Alquiler, cod:004, Bellavista Apt, 90mts, 2 hab, 1 bañ, Amoblado
          </li>
          <li>
            Venta, cod:005, Marbella, Apt, 100mts, 2 hab, 1 bañ, Linea blanca
          </li>
          <li>
            Venta, cod:006, San francisco, Apt, 110mts, 2 hab, 1 bañ, Amoblado
          </li>
          <li>
            Venta, cod:007, Costa del este, Apt, 120mts, 2 hab, 1 bañ, linea
            blanca
          </li>
          <li>Venta, cod:008, Bethania, Apt, 130mts, 2 hab, 1 bañ, Amoblado</li>
        </ul>
      </div>
    </Layout>
  );
}
