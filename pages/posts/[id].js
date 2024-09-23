import { getGlobalData } from '../../utils/global-data';
import { getPostBySlug } from '../../utils/mdx-utils';
import Link from 'next/link';
import ArrowIcon from '../../components/ArrowIcon';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout, { GradientBackground } from '../../components/Layout';
import SEO from '../../components/SEO';
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote';


export default function PostPage({ globalData, post, source }) {
  return (
    <Layout>
      <SEO
        title={`${post?.title} - ${globalData.name}`}
        description={post?.description}
      />
      <Header name={globalData.name} />
      <article className="px-6 md:px-0">
        <header>
          <h1 className="text-3xl md:text-5xl dark:text-white text-center mb-12">
            {post?.title}
          </h1>
          {post?.description && (
            <p className="text-xl mb-4">{post?.description}</p>
          )}
        </header>
        <main>
          <article className="prose dark:prose-dark text-justify max-w-full">
            <MDXRemote {...source} />
          </article>
          <div className="w-1/2 mt-6">
            <Link as={"/"} href={"/"}>
              <a className="block py-5 px-2 md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0">
                <h2 className="flex flex-col items-end dark:text-white uppercase mb-3 font-bold opacity-60"> Voltar<ArrowIcon className="mt-4 rotate-180 self-start" /></h2>
              </a>
            </Link>
          </div>
        </main>
      </article>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="absolute -top-32 opacity-30 dark:opacity-50"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout >
  );
}

export const getServerSideProps = async ({ params }) => {
  const globalData = getGlobalData();
  const post = await getPostBySlug(params.id);
  const mdxSource = await serialize(post.body);

  return { props: { globalData, post, source: mdxSource } };
};
