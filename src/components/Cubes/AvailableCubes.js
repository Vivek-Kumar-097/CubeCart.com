import Card from '../UI/Card';
import classes from './AvailableCubes.module.css';
import CubeItem from './CubeItem/CubeItem';

const DUMMY_CUBES = [
  {
    id: 'c1',
    name: '2x2 Cube',
    description: 'GAN 251M (Magnetic)',
    price: 2499,
    image: require('../../assets/2x2.avif').default,
  },
  {
    id: 'c2',
    name: '3x3 Cube',
    description: 'GAN 356 i3 Magnetic',
    price: 4449,
    image: require('../../assets/3x3.avif').default,
  },
  {
    id: 'c3',
    name: '4x4 Cube',
    description: 'YJ MGC Magnetic',
    price: 2599,
    image: require('../../assets/4x4.webp').default,
  },
  {
    id: 'c4',
    name: 'Pyramid Cube',
    description: 'QiYi X-Man Bell Pyraminx v2 (Magnetic)',
    price: 1599,
    image: require('../../assets/Pyraminx.webp').default,
  },
  {
    id: 'c5',
    name: 'Megaminx Cube',
    description: 'MoYu AoHun WR M (Magnetic)',
    price: 2289,
    image: require('../../assets/Megaminx.webp').default,
  },
  {
    id: 'c6',
    name: 'Magic Cube Clock',
    description: 'QiYi Magnetic Clock',
    price: 2999,
    image: require('../../assets/Magic_Clock.webp').default,
  },
  {
    id: 'c8',
    name: '5x5 Cube',
    description: 'MoYu AoChuang WR M 5x5 Magnetic',
    price: 2249,
    image: require('../../assets/5x5.webp').default,
  },
  {
    id: 'c7',
    name: '6x6 Cube',
    description: 'QiYi X-Man Shadow v2 M 6x6 (Magnetic)',
    price: 2299,
    image: require('../../assets/6x6.webp').default,
  },
];

const AvailableCubes = () => {
  const cubesList = DUMMY_CUBES.map((cube) => (
    <CubeItem
      id={cube.id}
      key={cube.id}
      name={cube.name}
      description={cube.description}
      price={cube.price}
      image={cube.image}
    />
  ));
  return (
    <section className={classes.cubes} id="buy-cubes">
      <Card>
        <ul>{cubesList}</ul>
      </Card>
    </section>
  );
};

export default AvailableCubes;
