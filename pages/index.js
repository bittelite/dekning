// import Head from 'next/head'
// import Image from 'next/image'
//import posts from '../data';
//import styles from '../styles/Home.module.css';
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch('https://api.npoint.io/a52a43c92f9e86ef49e2');
  const posts = await res.json();

  return {
    props: {
      postsList: posts.posts,
    },
  }
}

export default function Home({ postsList }) {
  const iconUrl = "https://reklameservice.no/wp-content/plugins/googlemapsproject4/images/rsicons/tableicons/";

  return (
    <div className='container mx-auto px-2'>
     <h1 className="text-3xl font-bold pt-4 pb-6">Dekningskart</h1>
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
            <Link href={ '/coverage/' + post.id.toString() } key={post.id}>
            <tr key={post.id}>
              <td className='border-b border-slate-100 p-4 pl-8 text-slate-500'>
                <img src={ iconUrl + post.ikon} className='-mb-5 -mx-4' />
              </td>
              <td className='border-b font-medium border-slate-100 p-4 pl-8 text-slate-500'>{post.plassering}</td>
              <td className='border-b font-medium border-slate-100 p-4 pl-8 text-slate-500'>{post.fylke}</td>
              <td className='border-b font-medium border-slate-100 p-4 pl-8 text-slate-500'>{post.selskap}</td>
              <td className='border-b font-medium border-slate-100 p-4 pl-8 text-slate-500 text-right'>{post.besok}</td>
            </tr>
            </Link>
          ))}

      </tbody>
     </table>
    </div>
  )
}
