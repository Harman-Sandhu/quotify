import Head from 'next/head'

const toggle = function(e){
  var body = document.getElementsByTagName('body')[0]
  body.classList.toggle('dark-mode')
}

export default function Home() {
  return (
    <div>
    <Head>
      <title>Quotify</title>
      <meta name="description" content="Get uotes sent to you as a notification" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <nav>
        <h1>Quotify</h1>
        <i className="gg-sun" onClick={toggle}></i>
      </nav>
        {/* <div id="mode-wrapper"> */}
      <main>
        <h2 id='title' className='title'>Quotify</h2>
        <p>
          Ever feel down? Quotes will make you better!
        </p>
        <button>Sign Up</button>
      </main>
    </div>
  )
}
