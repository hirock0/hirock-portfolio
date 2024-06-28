import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav_Bar from "@/components/Nav/Nav_Bar";
import Bottom_Part from "@/components/Bottom/Bottom_Part";
import { Toaster } from "react-hot-toast";
import Provider from "@/AuthProvider/Authprovider";
import { ReduxProvider } from "@/utils/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hirock Portfolio",
  description: "Discover the power of Next.js, the leading React framework for building high-performance, server-side rendered applications. Learn how Next.js boosts your web development with features like static site generation, API routes, and more. Keywords: Next.js, React framework, server-side rendering, static site generation, Next.js features MongoDB Title: MongoDB - The Leading NoSQL Database Meta Description: Learn about MongoDB, the NoSQL database designed for modern applications. MongoDB offers flexible document models, powerful querying, and scalability to handle large amounts of data efficiently. Keywords: MongoDB, NoSQL database, document model, data scalability, MongoDB features HTML Title: HTML - The Standard Markup Language for Web Pages Meta Description: Explore HTML, the essential markup language for creating web pages. Understand HTML elements, attributes, and best practices to build structured, accessible, and responsive web content. Keywords: HTML, markup language, web pages, HTML elements, HTML attributes, web development CSS Title: CSS - Styling the Web with Cascading Style Sheets Meta Description: Master CSS to design visually appealing web pages. Learn about CSS selectors, properties, and layouts to enhance the look and feel of your website with responsive design and animations. Keywords: CSS, cascading style sheets, web design, CSS properties, responsive design, CSS animations Redux Title: Redux - Predictable State Container for JavaScript Apps Meta Description: Get to know Redux, the state management library for JavaScript applications. Discover how Redux simplifies state handling with a single source of truth, enabling predictable and maintainable code. Keywords: Redux, state management, JavaScript apps, predictable state, Redux library, state container Tailwind CSS Title: Tailwind CSS - Utility-First CSS Framework Meta Description: Learn about Tailwind CSS, the utility-first framework for building custom designs quickly. Tailwind CSS provides low-level utility classes to construct responsive, scalable, and maintainable user interfaces. Keywords: Tailwind CSS, utility-first framework, custom design, responsive UI, Tailwind classes JavaScript Title: JavaScript - The Programming Language of the Web Meta Description: Explore JavaScript, the versatile programming language essential for web development. Understand JavaScript's syntax, functions, and capabilities to create dynamic, interactive web applications.Keywords: JavaScript, web development, programming language, JavaScript functions, interactive web, dynamic content These descriptions are designed to include relevant keywords and phrases that can help improve SEO for each technology topic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Toaster
          toastOptions={{
            style:{
              background: "rgb(51 65 85)",
              color: "#fff",
            }
          }}
        />
        <ReduxProvider>
          <Provider>
                <section className=" relative">
                  <Nav_Bar/>
                </section>
                <section className="">
                  {children}
                </section>
                <section className="">
                  <Bottom_Part/>
                </section>
          </Provider>
         </ReduxProvider>
          
      </body>
    </html>
  );
}
