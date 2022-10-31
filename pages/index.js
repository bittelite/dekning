// import Head from 'next/head'
// import Image from 'next/image'
//import posts from '../data';
//import styles from '../styles/Home.module.css';
import Link from "next/link";
//import Map from "Map";
//import { Marker } from "react-leaflet";
import dynamic from 'next/dynamic'

export const getStaticProps = async () => {
  const res = await fetch('https://reklameservice.no/wp-json/wp/v2/visningssteder');
  const posts = await res.json();

  return {
    props: {
      postsList: posts,
    },
    revalidate: 10,
  }
}

export default function Home({ postsList }) {
  const iconUrl = "https://reklameservice.no/wp-content/plugins/googlemapsproject4/images/rsicons/tableicons/";
  const Map = dynamic(
    () => import('./Map'), // replace '@components/map' with your component's location
    { 
      loading: () => <p>A map is loading</p>,
      ssr: false // This line is important. It's what prevents server-side render
    }
  )

  const searchIndex = postsList.findIndex((koordinat) => koordinat.lengdegrad);
  console.log(searchIndex);

  function MultipleMarkers() {
    return <p>hei</p>
  }

  return (
    <div className='container mx-auto px-2 max-w-7xl'>
     <h1 className="text-3xl font-bold pt-4 pb-6">Visningssteder</h1>
     <div className="pb-4">
      <Map>
      <MultipleMarkers />
      </Map>
      
     </div>
     <table className='table-auto w-full border-spacing-2 text-sm lg:text-base xl:text-lg'>
      <thead>
        <tr className='text-left'>
          <th className='border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400'>Type</th>
          <th className='border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400'>Plassering</th>
          <th className='border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400'>Fylke</th>
          <th className='border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400'>Selskap</th>
          <th className='border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-right '>Årlig besøk</th>
        </tr>
       </thead>
        <tbody className='bg-white striped'>

          {postsList.map(post => (
            <Link href={ '/visningssteder/' + post.id.toString() } key={post.acf.id}>
            <tr key={post.acf.id}>
              <td className='border-b border-slate-100 p-4 pl-8 text-slate-500'>
                {post.acf.type}
              </td>
              <td className='border-b font-medium border-slate-100 p-4 pl-8 text-slate-500'>{post.title.rendered}</td>
              <td className='border-b font-medium border-slate-100 p-4 pl-8 text-slate-500'>{post.acf.fylke}</td>
              <td className='border-b font-medium border-slate-100 p-4 pl-8 text-slate-500'>{post.acf.selskap}</td>
              <td className='border-b font-medium border-slate-100 p-4 pl-8 text-slate-500 text-right'>{post.acf.besokende}</td>
            </tr>
            </Link>
          ))}

      </tbody>
     </table>
    </div>
  )
}