import { Header } from "@/components/header";
import { Skeleton } from "@/components/ui/skeleton";

const LoadingPage = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="h-16 bg-red-900" />
      <div className="flex-1 flex flex-col max-w-6xl mx-auto items-center px-4 justify-center space-y-4">
        <Skeleton className="h-[26rem] w-full rounded-lg" />
        <div className="flex">
          <Skeleton className="h-24 w-24 rounded-lg" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[80px]" />
            <Skeleton className="h-4 w-[80px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
