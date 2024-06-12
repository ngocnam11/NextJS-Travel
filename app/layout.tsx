import './globals.scss'
import './common.scss'
import Theme from '@/components/layouts/theme'
import Header from '@/components/layouts/header'
import Footer from '@/components/layouts/footer'

export const metadata = {
    title: 'Travel social',
    description: 'Travel social',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            </head>
            <body>
                <Theme />
                <div className={`md:container m-auto`}>
                    <Header />
                    <div className="pt-20">
                        {children}
                    </div>
                </div>
                <Footer />
            </body>
        </html>
    )
}