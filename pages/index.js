import Link from "next/link";

import Map from "../components/Map";

import styles from '../styles/Home.module.css';

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

const DEFAULT_CENTER = [62.746540, 7.257580];

export default function Home({ postsList }) {
  return (
    <div className='container mx-auto px-2'>
     <h1 className="text-3xl font-bold pt-4 pb-6">Visningssteder</h1>
     <div className="mb-5">
     <Map className={styles.homeMap} center={DEFAULT_CENTER} zoom={12}>
          {({ TileLayer, Marker, Popup }) => (
            <>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              />
              <Marker position={DEFAULT_CENTER}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </>
          )}
      </Map>
      </div>
     <table className='table-auto w-full border-spacing-2 text-sm lg:text-base xl:text-lg'>
      <thead>
        <tr className='text-left'>
          <th className='border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400'>Type</th>
          <th className='border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400'>Plassering</th>
          <th className='border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400'>Fylke</th>
          <th className='border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400'>Selskap</th>
          <th className='border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 text-right'>Årlig besøk</th>
        </tr>
      </thead>
      <tbody className='bg-white'>
          {postsList.map(post => (
            <>
            <tr>
              <td className='border-b border-slate-100 p-4 pl-8 text-slate-500'>
              <Link href={ '/visningssteder/' + post.id.toString() } key={post.acf.id}>
                {post.acf.type}
              </Link>
              </td>
              <td className='border-b font-medium border-slate-100 p-4 pl-8 text-slate-500'>
              <Link href={ '/visningssteder/' + post.id.toString() } key={post.acf.id}> 
                {post.title.rendered}
              </Link>
              </td>
              <td className='border-b font-medium border-slate-100 p-4 pl-8 text-slate-500'>
              <Link href={ '/visningssteder/' + post.id.toString() } key={post.acf.id}> 
                {post.acf.fylke}
              </Link>
              </td>
              <td className='border-b font-medium border-slate-100 p-4 pl-8 text-slate-500'>
              <Link href={ '/visningssteder/' + post.id.toString() } key={post.acf.id}> 
                {post.acf.selskap}
              </Link>
              </td>
              <td className='border-b font-medium border-slate-100 p-4 pl-8 text-slate-500 text-right'>
              <Link href={ '/visningssteder/' + post.id.toString() } key={post.acf.id}> 
                {post.acf.besokende}
              </Link>
              </td>
            </tr>
            </>
          ))}
      </tbody>
     </table>
    </div>
  )
}