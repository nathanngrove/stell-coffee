import Image from "next/image";

function Logo() {
  return (
    <>
      <Image
        width={547}
        height={403}
        className="orange-filter max-w-32 pb-8 pt-8"
        src="/stell-logo-black.webp"
        alt="Stell Coffee & Tea"
        priority
      />
    </>
  );
}

export default Logo;
