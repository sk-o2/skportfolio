import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
      <div className="fixed flex items-center justify-center ">
  <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
</div>

    </Html>
  );
};

export default Loader;
