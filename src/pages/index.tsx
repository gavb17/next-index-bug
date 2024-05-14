import Link from "next/link";

export default function Home(props) {
  console.log({ props });

  return (
    <main>
      <Link href="/another-page">test {props.pageName}</Link>
    </main>
  );
}

export const getServerSideProps = () => {
  return {
    props: {
      pageName: "Page 1",
    },
  };
};
