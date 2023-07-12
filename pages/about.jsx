import Layout from "../src/components/layout"
import Head from "next/head"
import Link from "next/link"


export default function About() {
  return (
    <>
        <Head>
            <title>About - BallUP</title>
            <meta name="description" content="Suggest your own crosswalk" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/crosswalk.svg" />
            </Head>
        <Layout 
        main={        
            <div className="pt-20 lg:pt-6 px-6 bg-slate-100 h-full">
                {/* <h1 className="text-2xl">So what&apos;s this all about?</h1> */}
                
                <h1 className="py-8 ml-2 mt-6 text-white text-3xl font-bold leading-8 tracking-tight sm:text-4xl ">So, what's all the fuss about this new app on the block?</h1>
                
                <div className="text-white pt-6 mt-2 ml-2 color:pt-6 flex max-w-prose flex-col gap-4">
                    <p className="text-lg  ">
                        BallUp is a place for ballers to add courts.
                        <br />
                        (scheduling and sharing court location is coming soon!)
                    </p>
                    <p>
                        Every city/suburb/town has those nice courts. The places where people need to play some basketball, 
                    </p>
                    <p>
                        My vision is to have a place where people can find the best courts in their area, and schedule games with their friends.
                    </p>
                    
                </div>
            </div>
        }/>
        </>
  )
}
