import Link from "next/link";

function Visningssted({ post, media }) {

  return (
      <div className="container mx-auto max-w-7xl">
        <div className='relative'
        style={{
          backgroundImage: `url(${post._embedded['wp:featuredmedia'][0].source_url})`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          width: 'auto',
          height: '50vh'
        }}>
          <Link href="/">
            <button className="h-10 px-6 font-semibold rounded-md bg-black text-white left-2 bottom-2 absolute">
              Tilbake
            </button>
          </Link>
        </div>
        <div className='p-4 w-full'>
            <p className='float-right -mb-3'>
              <img src={ post.acf.ikon } />
            </p>
            <h1 className='text-4xl font-bold'>{post.title.rendered}</h1>
            <p>{post.acf.fylke}</p>
        </div>
        <div className='flex pl-4 py-6 gap-2 flex-col sm:flex-row'>
          <div className='md:basis-1/2'>
            <p className='text-xl font-medium'>
              {post.acf.beskrivelse.ingress}
            </p>
            <p className="py-6">
              {post.acf.beskrivelse.tekst}
            </p>
          </div>
          <div className='flex md:basis-1/2 gap-2 flex-col flex-wrap'>
            <p className="flex-1 grow">Selskap:<br />
            <span className="font-bold text-2xl">{post.acf.selskap}</span>
            </p>
            <p className="flex-1 grow">Årlig besøk:<br />
              <span className="font-bold text-2xl">{post.acf.besok}</span>
            </p>
            <p className="flex-1 grow">Type:<br />
              <span className="font-bold text-2xl">{post.acf.type}</span>
            </p>
            <p className="flex-1 grow">Skjermer:<br/>
              <span className="font-bold text-2xl">35</span>
            </p>
          </div>
        </div>
        <div className="container p-4 flex flex-col lg:flex-row flex-wrap gap-4">
        {post.acf.flater.map(post => (
            <div key={post.plassnr} className="flex font-sans rounded-md bg-gray-100 flex-1">
              <div className="flex-none w-48 relative">
                <img
                  src={media.find(image => image.id === post.hovedbilde).media_details.sizes.large.source_url}
                  alt=""
                  className="absolute inset-0 w-full h-full rounded-l-md object-cover"
                />
              </div>
              <form className="flex-auto p-6">
                <div className="flex flex-wrap">
                  <h1 className="flex-auto text-lg font-semibold text-slate-900">
                    {post.type}
                  </h1>
                  <div className="text-lg font-semibold text-slate-500">
                    {post.plassnr}
                  </div>
                  <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                    Format: {post.format}
                  </div>
                  <p className="text-sm text-slate-700">
                    Strategiske plasseringer og bred dekning.
                  </p>
                </div>
              </form>
            </div>
            ))}
        </div>
      </div>
  );
} 

export async function getStaticPaths() {
  const res = await fetch('https://reklameservice.no/wp-json/wp/v2/visningssteder');
  const posts = await res.json();
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }))
  return {paths, fallback: false};
}

export async function getStaticProps({params}) {
  const res = await fetch(`https://reklameservice.no/wp-json/wp/v2/visningssteder/${params.id}?_embed`);
  const post = await res.json();
  const res2 = await fetch(`https://reklameservice.no/wp-json/wp/v2/media?parent=${params.id}`);
  const media = await res2.json();
  return {props: {post, media}, revalidate: 10,};
}

export default Visningssted