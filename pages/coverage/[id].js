function Coverage({ post }) {
  const iconUrl = "https://reklameservice.no/wp-content/plugins/googlemapsproject4/images/rsicons/tableicons/";
  const imgUrl = "https://reklameservice.no/wp-content/uploads/2016/11/";

  return (
      <div className="container mx-auto max-w-7xl">
        <div className='relative' 
        style={{
          backgroundImage: `url(${imgUrl + post.foto})`,
          backgroundPosition: 'center center',
          width: 'auto',
          height: '50vh'
        }}>
        </div>
        <div className='p-4 w-full'>
            <p className='float-right -mb-3'>
              <img src={ iconUrl + post.ikon} />
            </p>
            <h1 className='text-4xl font-bold'>{post.plassering}</h1>
            <p>{post.fylke}</p>
        </div>
        <div className='flex pl-4 py-6 gap-2 flex-col sm:flex-row'>
          <div className='md:basis-1/2'>
            <p className='text-xl font-medium'>
              Skjermnettverket på Kristiansand lufthavn er
              førstevalget for annonsører som ønsker bred
              dekning i hele terminalen. {post.ingress}
            </p>
            <p className="py-6">
              Tekst: {post.tekst}
            </p>
            <ul className="list-disc pl-5 pb-5">
              <li>
                Store og lyssterke skjermer av høyeste kvalitet.
              </li>
              <li className="py-2">
                Strategiske plasseringer, bl.a. ved gater og på bagasjebånd.
              </li>
              <li>
                Gode oppdaterings- og segmenteringsmuligheter.
              </li>
            </ul>
          </div>
          <div className='flex md:basis-1/2 gap-2 flex-col flex-wrap'>
            <p className="flex-1 grow">Selskap:<br /> 
            <span className="font-bold text-2xl">{post.selskap}</span>
            </p>
            <p className="flex-1 grow">Årlig besøk:<br /> 
              <span className="font-bold text-2xl">{post.besok}</span>
            </p>
            <p className="flex-1 grow">Type:<br /> 
              <span className="font-bold text-2xl">{post.type}</span>
            </p>
            <p className="flex-1 grow">Skjermer:<br/>
              <span className="font-bold text-2xl">35</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row flex-wrap gap-4">
          <div className="flex font-sans rounded-md bg-gray-100 flex-1">
            <div className="flex-none w-48 relative">
              <img src={imgUrl + post.foto} alt="" className="absolute inset-0 w-full h-full rounded-l-md object-cover" loading="lazy" />
            </div>
            <form className="flex-auto p-6">
              <div className="flex flex-wrap">
                <h1 className="flex-auto text-lg font-semibold text-slate-900">
                  Skjermnettverk
                </h1>
                <div className="text-lg font-semibold text-slate-500">
                  AKRS
                </div>
                <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                 45-85" skjermer
                </div>
                <p className="text-sm text-slate-700">
                  Strategiske plasseringer og bred dekning.
                </p>
              </div>
              <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
              </div>
              <div className="flex space-x-4 mb-6 text-sm font-medium">
                <div className="flex-auto flex space-x-4">
                  <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                    Prisforespørsel
                  </button>
                  <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
                    Les mer
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="flex font-sans rounded-md bg-gray-100 flex-1">
            <div className="flex-none w-48 relative">
              <img src={imgUrl + post.foto} alt="" className="absolute inset-0 w-full h-full rounded-l-md object-cover" loading="lazy" />
            </div>
            <form className="flex-auto p-6">
              <div className="flex flex-wrap">
                <h1 className="flex-auto text-lg font-semibold text-slate-900">
                  Hovedinngang
                </h1>
                <div className="text-lg font-semibold text-slate-500">
                  3AG
                </div>
                <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                  55" skjerm
                </div>
                <p className="text-sm text-slate-700">
                  Stor og lyssterk skjerm av høyeste kvalitet
                </p>
              </div>
              <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
              </div>
              <div className="flex space-x-4 mb-6 text-sm font-medium">
                <div className="flex-auto flex space-x-4">
                  <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                    Prisforespørsel
                  </button>
                  <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
                    Les mer
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="flex font-sans rounded-md bg-gray-100 flex-1">
            <div className="flex-none w-48 relative">
              <img src={imgUrl + post.foto} alt="" className="absolute inset-0 w-full h-full rounded-l-md object-cover" loading="lazy" />
            </div>
            <form className="flex-auto p-6">
              <div className="flex flex-wrap">
                <h1 className="flex-auto text-lg font-semibold text-slate-900">
                  Hovedinngang
                </h1>
                <div className="text-lg font-semibold text-slate-500">
                  3AG
                </div>
                <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                  55" skjerm
                </div>
                <p className="text-sm text-slate-700">
                  Stor og lyssterk skjerm av høyeste kvalitet
                </p>
              </div>
              <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
              </div>
              <div className="flex space-x-4 mb-6 text-sm font-medium">
                <div className="flex-auto flex space-x-4">
                  <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                    Prisforespørsel
                  </button>
                  <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
                    Les mer
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="flex font-sans rounded-md bg-gray-100 flex-1">
            <div className="flex-none w-48 relative">
              <img src={imgUrl + post.foto} alt="" className="absolute inset-0 w-full h-full rounded-l-md object-cover" loading="lazy" />
            </div>
            <form className="flex-auto p-6">
              <div className="flex flex-wrap">
                <h1 className="flex-auto text-lg font-semibold text-slate-900">
                  Hovedinngang
                </h1>
                <div className="text-lg font-semibold text-slate-500">
                  3AG
                </div>
                <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                  55" skjerm
                </div>
                <p className="text-sm text-slate-700">
                  Stor og lyssterk skjerm av høyeste kvalitet
                </p>
              </div>
              <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
              </div>
              <div className="flex space-x-4 mb-6 text-sm font-medium">
                <div className="flex-auto flex space-x-4">
                  <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                    Prisforespørsel
                  </button>
                  <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
                    Kontakt selger
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div>
          <p className="py-6">Faktisk output: {post.flater}</p>
        </div>
      </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch('https://api.npoint.io/a52a43c92f9e86ef49e2');
  const posts = await res.json();

  const paths = posts.posts.map((post) => ({
    params: { id: post.id.toString() },
  }))
  return {paths, fallback: false};
}

export async function getStaticProps({params}) {
  const res = await fetch(`https://api.npoint.io/a52a43c92f9e86ef49e2/posts/${params.id}`);
  const post = await res.json();
  return {props: {post}};
}

export default Coverage


/*
        <table className='table-auto w-full border-spacing-2 text-sm lg:text-base xl:text-lg'>
          <thead>
            <tr className='text-left'>
              <th className='border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400'>Type</th>
              <th className='border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400'>Format</th>
              <th className='border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400'>Plassering</th>
              <th className='border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400'>ID</th>
              <th className='border-b font-medium p-4 pl-8 pt-0 pb-3 text-slate-400'>Beskrivelse</th>
            </tr>
          </thead>
            <tbody className='bg-white striped'>
                <tr>
                  <td className='border-b font-medium border-slate-100 p-4 pl-8 text-slate-500'>Skjerm</td>
                  <td className='border-b font-medium border-slate-100 p-4 pl-8 text-slate-500'>55"</td>
                  <td className='border-b font-medium border-slate-100 p-4 pl-8 text-slate-500'>Hovedinngang</td>
                  <td className='border-b font-medium border-slate-100 p-4 pl-8 text-slate-500'>3AG</td>
                  <td className='border-b font-medium border-slate-100 p-4 pl-8 text-slate-500'>Bestill</td>
                </tr>
                <tr>
                  <td className='border-b font-medium border-slate-100 p-4 pl-8 text-slate-500'>Skjerm</td>
                  <td className='border-b font-medium border-slate-100 p-4 pl-8 text-slate-500'>75"</td>
                  <td className='border-b font-medium border-slate-100 p-4 pl-8 text-slate-500'>Ankomst utland</td>
                  <td className='border-b font-medium border-slate-100 p-4 pl-8 text-slate-500'>3AG</td>
                  <td className='border-b font-medium border-slate-100 p-4 pl-8 text-slate-500'>Bestill</td>
                </tr>
                <tr>
                  <td className='border-b font-medium border-slate-100 p-4 pl-8 text-slate-500'>Megaboard</td>
                  <td className='border-b font-medium border-slate-100 p-4 pl-8 text-slate-500'>300 x 400 cm</td>
                  <td className='border-b font-medium border-slate-100 p-4 pl-8 text-slate-500'>Ankomsthall</td>
                  <td className='border-b font-medium border-slate-100 p-4 pl-8 text-slate-500'>3AG</td>
                  <td className='border-b font-medium border-slate-100 p-4 pl-8 text-slate-500'>Bestill</td>
                </tr>
          </tbody>
        </table>
*/