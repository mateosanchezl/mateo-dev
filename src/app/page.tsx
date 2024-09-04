import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen bg-primary flex justify-center items-center text-muted-foreground ">
      <div className="w-1/4 h-4/6">
        <h1 className="text-2xl text-primary-foreground">
          mateo sanchez lopez
        </h1>
        <p className="pt-5 lg">
          bolivian software engineering student & <br />
          lab demonstrator at{" "}
          <a href="https://www.mmu.ac.uk/">
            <span className="underline text-primary-foreground">
              manchester met
            </span>
          </a>
        </p>
        <p className="pt-4">
          i am currently based in{" "}
          <span className="text-primary-foreground">manchester</span>. before
          that, i finished my last two years of school in{" "}
          <span className="text-primary-foreground">la paz</span> after living
          in <span className="text-primary-foreground">dubai</span> and{" "}
          <span className="text-primary-foreground">london</span>.
        </p>
      </div>
    </div>
  );
}
